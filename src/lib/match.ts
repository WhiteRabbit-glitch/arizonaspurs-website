export type Match = {
  opponent: string;
  competition: string;
  date: string;       // ISO 8601 — e.g. "2025-08-16T07:30:00"
  venueLabel: string; // display string for the watch party location
  venueUrl: string;   // Google Maps link
};

// Fallback — used when Google Calendar API is not configured or returns nothing.
// Once GOOGLE_CALENDAR_ID and GOOGLE_CALENDAR_API_KEY are set in .env.local,
// this object is ignored and the site auto-updates from the calendar.
export const fallbackMatch: Match = {
  opponent: "TBD",
  competition: "Premier League",
  date: "2025-08-16T07:30:00",
  venueLabel: "Fibber Magee's Pub, Chandler AZ",
  venueUrl: "https://maps.google.com/?q=Fibber+Magees+1989+W+Elliot+Rd+Chandler+AZ+85224",
};
