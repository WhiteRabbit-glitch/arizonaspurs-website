export type FAQItem = {
  question: string;
  answer: string;
  pending?: boolean; // true = answer needs board input before publishing
};

export type FAQCategory = {
  title: string;
  items: FAQItem[];
};

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
          "We watch at Fibbers Irish Pub, 7700 W Chandler Blvd, Chandler, AZ 85226. It's our permanent home since the 2016/17 season.",
      },
      {
        question: "What time do doors open?",
        answer:
          "Fibbers opens 15–30 minutes before kickoff. Match times vary — check our events calendar for exact kickoff times listed in Arizona time (MST, no daylight saving).",
      },
      {
        question: "Which competitions do you watch?",
        answer:
          "We host watch parties for Premier League, Champions League, and FA Cup matches. Carabao Cup coverage — confirm with board.",
        pending: true,
      },
      {
        question: "Is there a cover charge?",
        answer:
          "No cover charge. Fibbers is a full-service pub — food and drinks available, no outside food or beverages.",
      },
      {
        question: "Is it family friendly?",
        answer: "Yes. All ages are welcome at our watch parties.",
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
      },
      {
        question: "Is Arizona Spurs an official club?",
        answer:
          "Yes. Arizona Spurs has been an officially recognized Tottenham Hotspur FC supporters club since 2014. We are also a 503(c)(7) nonprofit social club — all dues are reinvested into club operations and community initiatives.",
      },
    ],
  },
  {
    title: "Match Tickets",
    items: [
      {
        question: "Can I get tickets to a match at Tottenham Hotspur Stadium through the club?",
        answer:
          "Yes, the club can assist with match ticket information. Contact the board at board@arizonaspurs.com for details.",
      },
      {
        question: "How much do match tickets cost?",
        answer:
          "Ticket prices vary by match and competition. Visit the Tottenham Hotspur website for current pricing, or contact us at board@arizonaspurs.com for guidance.",
      },
      {
        question: "Where are members seated at the ground?",
        answer: "Seating information — answer pending from board.",
        pending: true,
      },
      {
        question: "How do I apply for match tickets through the club?",
        answer: "Ticket application process — answer pending from board.",
        pending: true,
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
          "Yes. We organize annual food drives and community initiatives in the Phoenix metro area. As a 503(c)(7) nonprofit social club, giving back is part of who we are.",
      },
    ],
  },
];
