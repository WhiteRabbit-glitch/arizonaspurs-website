export type NewsletterIssue = {
  title: string;
  date: string;       // ISO 8601 — "2026-06-01"
  description: string;
  url: string;        // public Kit broadcast URL
};

// Add new issues here after sending — make broadcast public in Kit first.
// Kit: Broadcasts → click issue → Edit → toggle "Public page" → Save → copy URL.
// URL pattern: https://official-arizona-spurs.kit.com/posts/[slug]

export const newsletters: NewsletterIssue[] = [
  {
    title: "Arizona Spurs Update — June 2026",
    date: "2026-06-01",
    description: "The latest from the club — match recaps, upcoming watch parties, and news from the board.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-june-2026",
  },
  {
    title: "Arizona Spurs Update — May 2026",
    date: "2026-05-01",
    description: "End-of-season recap, summer watch party plans, and updates from the board.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-may-2026",
  },
  {
    title: "Arizona Spurs Supporters Update — April 2026",
    date: "2026-04-01",
    description: "Spring match schedule, club news, and everything happening at Fibbers.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-supporters-update-april-2026",
  },
  {
    title: "Arizona Spurs Update — March 2026",
    date: "2026-03-01",
    description: "March match previews, watch party details, and the latest from the club.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-march-2026",
  },
  {
    title: "Arizona Spurs Update — February 2026",
    date: "2026-02-01",
    description: "February fixtures, mid-season check-in, and club updates.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-february-2026",
  },
  {
    title: "Arizona Spurs Update — January 2026",
    date: "2026-01-01",
    description: "Gallagher arrives, the AFCON final, and what's ahead for the second half of the season.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-january-2026-gallagher-arrives-afcon-final-and-what-s-ahead",
  },
  // Add more issues above this line, newest first.
];
