import type { Metadata } from "next";
import EventsHero from "@/components/sections/EventsHero";
import NextMatch from "@/components/sections/NextMatch";
import CalendarEmbed from "@/components/sections/CalendarEmbed";
import VenueInfo from "@/components/sections/VenueInfo";
import { fetchNextMatch } from "@/lib/gcal";
import { fallbackMatch } from "@/lib/match";

export const metadata: Metadata = {
  title: "Events | Arizona Spurs",
  description:
    "Watch party schedule for Arizona Spurs — Tottenham Hotspur supporters club in Phoenix. Join us at Fibbers in Chandler for every match.",
  openGraph: {
    title: "Events | Arizona Spurs",
    description:
      "Watch party schedule for Arizona Spurs. Join us at Fibbers in Chandler for every match.",
  },
};

export default async function EventsPage() {
  const match = (await fetchNextMatch()) ?? fallbackMatch;

  return (
    <main id="main-content">
      <EventsHero />
      <NextMatch match={match} />
      <CalendarEmbed />
      <VenueInfo />
    </main>
  );
}
