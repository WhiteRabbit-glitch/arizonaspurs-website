export type Partner = {
  name: string;
  role: string;
  bio: string;
  url: string;
  logoUrl: string;
};

export const partners: Partner[] = [
  {
    name: "Tottenham Hotspur FC",
    role: "Official Club",
    bio: "Arizona Spurs is an officially recognized Tottenham Hotspur supporters club. That status connects our members to the club directly through official communications, supporter resources, and a place in the global Spurs supporters network.",
    url: "https://www.tottenhamhotspur.com",
    logoUrl: "",
  },
  {
    name: "Fibber Magee's Pub",
    role: "Official Watch Party Venue",
    bio: "Arizona Spurs has watched every Spurs match at Fibber Magee's since the 2016/17 season. Full kitchen, full bar, and a room that gets loud at kickoff. Find us at 1989 W Elliot Rd in Chandler every match day.",
    url: "https://www.fibbermageespub.com/",
    logoUrl: "/images/partners/fibbers.png",
  },
];
