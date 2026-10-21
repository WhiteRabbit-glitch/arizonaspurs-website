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
    title: "September 2026",
    date: "2026-09-01",
    description: "Two points from the first five matches, ten summer signings led by Tonali, 128 fans at Fibbers for the opener, and October fixtures.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-september-update-the-new-season-is-underway",
  },
  {
    title: "August 2026",
    date: "2026-08-01",
    description: "The season opener at Brentford, six new signings including Tonali and Robertson, Romero's exit, and the first watch party at Fibbers.",
    url: "https://official-arizona-spurs.kit.com/posts/the-boys-are-back-and-so-are-we-august-az-spurs-update",
  },
  {
    title: "July 2026",
    date: "2026-07-01",
    description: "Twelve Spurs at the World Cup, the August 1 general members meeting, and the season opener at Fibber Magee's.",
    url: "https://official-arizona-spurs.kit.com/posts/a-new-look-and-a-new-season-arizona-spurs-july-2026",
  },
  {
    title: "June 2026",
    date: "2026-06-01",
    description: "Match recaps, upcoming watch parties, and news from the board.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-june-2026",
  },
  {
    title: "May 2026",
    date: "2026-05-01",
    description: "End-of-season recap, summer watch party plans, and updates from the board.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-may-2026",
  },
  {
    title: "April 2026",
    date: "2026-04-01",
    description: "Spring match schedule, club news, and everything happening at Fibbers.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-supporters-update-april-2026",
  },
  {
    title: "March 2026",
    date: "2026-03-01",
    description: "Match previews, watch party details, and the latest from the club.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-march-2026",
  },
  {
    title: "February 2026",
    date: "2026-02-01",
    description: "February fixtures, mid-season check-in, and club updates.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-february-2026",
  },
  {
    title: "January 2026",
    date: "2026-01-01",
    description: "Gallagher arrives, the AFCON final, and what's ahead for the second half of the season.",
    url: "https://official-arizona-spurs.kit.com/posts/arizona-spurs-update-january-2026-gallagher-arrives-afcon-final-and-what-s-ahead",
  },
  // Add more issues above this line, newest first.
];
