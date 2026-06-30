export type Match = {
  opponent: string;
  competition: string;
  date: string;       // ISO 8601 — e.g. "2025-08-16T07:30:00"
  venueLabel: string; // display string for the watch party location
  venueUrl: string;   // Google Maps link
};

// Update this object each week to change the next match callout.
export const nextMatch: Match = {
  opponent: "Manchester United",
  competition: "Premier League",
  date: "2025-08-16T07:30:00",
  venueLabel: "Fibbers Irish Pub, Chandler AZ",
  venueUrl: "https://maps.google.com/?q=Fibbers+Irish+Pub+Chandler+AZ",
};
