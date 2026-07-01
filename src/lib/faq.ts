export type FAQItem = {
  question: string;
  answer: string;
  long?: boolean; // true = answer is long enough to warrant collapse on mobile
};

export type FAQCategory = {
  title: string;
  items: FAQItem[];
};

// PRE-LIVE CHECK: Review all answers marked with a comment before going live.
// Pending board input: Carabao Cup, seating at ground, ticket application process.

export const faqCategories: FAQCategory[] = [
  {
    title: "Coming to a Watch Party",
    items: [
      {
        question: "Do I need to be a member to watch with Arizona Spurs?",
        answer:
          "Not at all. Our watch parties at Fibbers are open to the public. Everyone is welcome — whether you've supported Spurs your whole life or just discovered them.",
      },
      {
        question: "Where do you watch?",
        answer:
          "We watch at Fibbers Irish Pub, 1989 W Elliot Rd, Chandler, AZ 85224. It's been our permanent home since the 2016/17 season.",
      },
      {
        question: "What time do doors open?",
        answer:
          "Fibbers opens 15 minutes before kickoff. Match times vary — check our events calendar for exact kickoff times in Arizona time (MST, no daylight saving).",
      },
      {
        // PRE-LIVE: Confirm Carabao Cup with board before publishing.
        question: "Which competitions do you watch?",
        answer:
          "We host watch parties for Premier League, Champions League, FA Cup, and Carabao Cup matches. The Carabao Cup broadcasts live in the US on Paramount+.",
      },
      {
        question: "Is there a cover charge?",
        answer:
          "No cover charge. Fibbers is a full-service pub — full kitchen and bar available, no outside food or beverages.",
      },
      {
        question: "Is it family friendly?",
        answer: "Yes. All ages are welcome at our watch parties.",
      },
      {
        question: "Are watch parties accessible?",
        answer:
          "Yes. Fibbers has a wheelchair accessible entrance, accessible parking, accessible restrooms, and accessible seating. The venue is on the first floor with no steps. If you have specific accessibility needs, contact us at board@arizonaspurs.com before your visit and we'll make sure you're taken care of.",
        long: true,
      },
    ],
  },
  {
    title: "Membership",
    items: [
      {
        question: "How much does membership cost?",
        answer:
          "Membership is currently free. Sign up to join the club and get our newsletter — you'll be the first to know when paid membership launches.",
      },
      {
        question: "What do I get as a member?",
        answer:
          "Current members receive our newsletter with match previews, club news, and event announcements. When paid membership launches, members will receive an official club card and access to the member portal.",
        long: true,
      },
      {
        question: "Is Arizona Spurs an official club?",
        answer:
          "Yes. Arizona Spurs has been an officially recognized Tottenham Hotspur FC supporters club since 2014. We are also a 501(c)(7) nonprofit social club — all dues are reinvested into club operations and community initiatives.",
        long: true,
      },
    ],
  },
  {
    title: "Match Tickets",
    items: [
      {
        question: "Can I get tickets to a match at Tottenham Hotspur Stadium?",
        answer:
          "Yes, the club can help with match ticket information. Reach out to the board at board@arizonaspurs.com for details.",
      },
      {
        question: "How much do match tickets cost?",
        answer:
          "Prices vary by match and competition. Contact us at board@arizonaspurs.com for guidance.",
      },
      {
        // PRE-LIVE: Get seating answer from Joey Manning before publishing.
        question: "Where are members seated at Tottenham Hotspur Stadium?",
        answer:
          "Contact the board at board@arizonaspurs.com for seating information.",
      },
      {
        // PRE-LIVE: Get ticket application process from Joey Manning before publishing.
        question: "How do I apply for match tickets through the club?",
        answer:
          "Email the board at board@arizonaspurs.com to start the process.",
      },
    ],
  },
  {
    title: "Contact & Community",
    items: [
      {
        question: "How do I get in touch with the board?",
        answer:
          "Email us at board@arizonaspurs.com. You can also follow us on Facebook, Instagram, and X for the latest news.",
      },
      {
        question: "Does Arizona Spurs do community outreach?",
        answer:
          "Yes. We organize annual food drives and community initiatives across the Phoenix metro area. As a 501(c)(7) nonprofit social club, giving back is central to what we do.",
      },
    ],
  },
];
