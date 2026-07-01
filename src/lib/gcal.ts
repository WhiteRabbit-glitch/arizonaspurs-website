import type { Match } from "./match";

const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

// Watch party events can use our short format for richer hero display:
//   Title:    "Spurs vs Arsenal — Premier League"
//   Location: "Fibbers Irish Pub, Chandler AZ"
// Standard THFC fixture titles ("Brentford v Tottenham Hotspur") are
// also detected automatically — competition is inferred from the title.

function inferCompetition(title: string): string {
  if (/carabao|efl cup|league cup/i.test(title)) return "Carabao Cup";
  if (/fa cup/i.test(title)) return "FA Cup";
  if (/champions league|ucl/i.test(title)) return "Champions League";
  if (/europa|uel/i.test(title)) return "Europa League";
  if (/conference/i.test(title)) return "Conference League";
  if (/friendly|preseason|pre.season|tour/i.test(title)) return "Preseason Friendly";
  return "Premier League";
}

function parseEvent(event: GoogleCalendarEvent): Match | null {
  const raw = (event.summary ?? "").trim();
  const date = event.start.dateTime ?? event.start.date ?? "";
  const venueLabel = event.location ?? "Fibbers Irish Pub, Chandler AZ";
  const venueUrl = `https://maps.google.com/?q=${encodeURIComponent(venueLabel)}`;

  // Our watch party format: "Spurs vs Arsenal — Premier League"
  const dashParts = raw.split(" — ");
  if (dashParts.length >= 2) {
    const m = dashParts[0].match(/^Spurs\s+vs\s+(.+)$/i);
    if (m) {
      return { opponent: m[1].trim(), competition: dashParts[1].trim(), date, venueLabel, venueUrl };
    }
  }

  // THFC fixture format: "Brentford v Tottenham Hotspur" or "Tottenham Hotspur vs Chelsea"
  const fixtureMatch = raw.match(/^(.+?)\s+vs?\.?\s+(.+)$/i);
  if (fixtureMatch) {
    const [, a, b] = fixtureMatch;
    const isTottenham = (s: string) => /tottenham|^spurs$/i.test(s.trim());
    const opponent = isTottenham(a) ? b.trim() : isTottenham(b) ? a.trim() : null;
    if (opponent) {
      return { opponent, competition: inferCompetition(raw), date, venueLabel, venueUrl };
    }
  }

  return null;
}

export async function fetchNextMatch(): Promise<Match | null> {
  if (!CALENDAR_ID || !API_KEY) return null;

  const now = new Date().toISOString();
  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events` +
    `?key=${API_KEY}` +
    `&timeMin=${encodeURIComponent(now)}` +
    `&maxResults=20` +
    `&orderBy=startTime` +
    `&singleEvents=true`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;

  const data: GoogleCalendarResponse = await res.json();
  for (const event of data.items ?? []) {
    const match = parseEvent(event);
    if (match) return match;
  }
  return null;
}

export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string | null;
  location: string | null;
  allDay: boolean;
};

export async function fetchUpcomingMatches(limit = 40): Promise<CalendarEvent[]> {
  if (!CALENDAR_ID || !API_KEY) return [];

  const now = new Date().toISOString();
  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events` +
    `?key=${API_KEY}` +
    `&timeMin=${encodeURIComponent(now)}` +
    `&maxResults=${limit}` +
    `&orderBy=startTime` +
    `&singleEvents=true`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];

  const data: GoogleCalendarResponse = await res.json();
  return (data.items ?? []).map((e) => ({
    id: e.id ?? `${e.start.dateTime ?? e.start.date}-${e.summary}`,
    title: e.summary ?? "Spurs Match",
    start: e.start.dateTime ?? e.start.date ?? "",
    end: e.end?.dateTime ?? e.end?.date ?? null,
    location: e.location ?? null,
    allDay: !e.start.dateTime,
  }));
}

type GoogleCalendarEvent = {
  id?: string;
  summary?: string;
  location?: string;
  start: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
};

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[];
};
