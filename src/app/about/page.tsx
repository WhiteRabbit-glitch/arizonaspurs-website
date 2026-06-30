import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import History from "@/components/sections/History";
import Officers from "@/components/sections/Officers";
import AboutCTA from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "About | Arizona Spurs",
  description:
    "Founded in 2014, Arizona Spurs is the Phoenix metro area's official Tottenham Hotspur supporters club. Learn our history, meet the board, and find out what we're about.",
  openGraph: {
    title: "About | Arizona Spurs",
    description:
      "Founded in 2014, Arizona Spurs is the Phoenix metro area's official Tottenham Hotspur supporters club.",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <History />
      <Officers />
      <AboutCTA />
    </main>
  );
}
