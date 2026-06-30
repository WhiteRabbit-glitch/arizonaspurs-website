import Hero from "@/components/sections/Hero";
import CoreValues from "@/components/sections/CoreValues";
import NextMatch from "@/components/sections/NextMatch";
import Partners from "@/components/sections/Partners";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { fetchNextMatch } from "@/lib/gcal";
import { fallbackMatch } from "@/lib/match";

export default async function Home() {
  const match = (await fetchNextMatch()) ?? fallbackMatch;

  return (
    <main>
      <Hero />
      <CoreValues />
      <NextMatch match={match} />
      <Partners />
      <NewsletterCTA />
    </main>
  );
}
