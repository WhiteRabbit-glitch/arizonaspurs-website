import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutPhoto from "@/components/sections/AboutPhoto";
import Mission from "@/components/sections/Mission";
import AboutPillars from "@/components/sections/AboutPillars";
import History from "@/components/sections/History";
import Officers from "@/components/sections/Officers";
import AboutCTA from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "About | Arizona Spurs",
  description:
    "Founded in 2014, Arizona Spurs is an officially recognized Tottenham Hotspur supporters club serving the Phoenix metro area — built on community, service, and the beautiful game.",
  openGraph: {
    title: "About | Arizona Spurs",
    description:
      "Founded in 2014, Arizona Spurs is an officially recognized Tottenham Hotspur supporters club serving the Phoenix metro area — built on community, service, and the beautiful game.",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <Mission />
      <AboutPhoto />
      <AboutPillars />
      <History />
      <Officers />
      <AboutCTA />
    </main>
  );
}
