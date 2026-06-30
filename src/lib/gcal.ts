import type { Match } from "./match";

// TODO: Set these in .env.local (and in Vercel environment variables before go-live)
// GOOGLE_CALENDAR_ID  — your public Google Calendar ID (found in Calendar settings > Integrate)
// GOOGLE_CALENDAR_API_KEY — Google Cloud Console > APIs & Services > Credentials

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

// Board should name watch party events exactly like:
//   Title:       "Spurs vs Arsenal — Premier League"
//   Location:    "Fibbers Irish Pub, Chandler AZ"
//   Description: (optional — anything)
//
// The parser splits title on " — " to get opponent + competition.
// Location field maps directly to venueLabel.

function parseEvent(event: GoogleCalendarEvent): Match | null {
  const raw = event.summary ?? "";
  const parts = raw.split(" — ");
  if (parts.length < 2) return null;

  const vsMatch = parts[0].match(/^Spurs\s+vs\s+(.+)$/i);
  if (!vsMatch) return null;

  const opponent = vsMatch[1].trim();
  const competition = parts[1].trim();
  const date = event.start.dateTime ?? event.start.date ?? "";
  const venueLabel = event.location ?? "Fibbers Irish Pub, Chandler AZ";
  const venueUrl = `https://maps.google.com/?q=${encodeURIComponent(venueLabel)}`;

  return { opponent, competition, date, venueLabel, venueUrl };
}

export async function fetchNextMatch(): Promise<Match | null> {
  if (!CALENDAR_ID || !API_KEY) return null;

  const now = new Date().toISOString();
  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events` +
    `?key=${API_KEY}` +
    `&timeMin=${encodeURIComponent(now)}` +
    `&maxResults=10` +
    `&orderBy=startTime` +
    `&singleEvents=true` +
    `&q=Spurs+vs`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // re-fetch at most once per hour
  });

  if (!res.ok) return null;

  const data: GoogleCalendarResponse = await res.json();
  const events = data.items ?? [];

  for (const event of events) {
    const match = parseEvent(event);
    if (match) return match;
  }

  return null;
}

// Minimal types — only the fields we use
type GoogleCalendarEvent = {
  summary?: string;
  location?: string;
  start: { dateTime?: string; date?: string };
};

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[];
};
