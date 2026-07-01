import type { Metadata } from "next";
import EventsHero from "@/components/sections/EventsHero";
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

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "SocialEvent",
    name: `Spurs Watch Party — ${match.opponent}`,
    description: `Arizona Spurs watch party for Tottenham Hotspur vs ${match.opponent} (${match.competition}). Join us at Fibber Magee's Pub in Chandler, AZ.`,
    startDate: match.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Fibber Magee's Pub",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1989 W Elliot Rd",
        addressLocality: "Chandler",
        addressRegion: "AZ",
        postalCode: "85224",
        addressCountry: "US",
      },
      url: match.venueUrl,
    },
    organizer: {
      "@type": "SportsOrganization",
      name: "Arizona Spurs",
      url: "https://arizonaspurs.com",
    },
    isAccessibleForFree: true,
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <EventsHero match={match} />
      <CalendarEmbed />
      <VenueInfo />
    </main>
  );
}
