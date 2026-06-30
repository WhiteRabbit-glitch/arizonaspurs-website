import Hero from "@/components/sections/Hero";
import CoreValues from "@/components/sections/CoreValues";
import NextMatch from "@/components/sections/NextMatch";
import { fetchNextMatch } from "@/lib/gcal";
import { fallbackMatch } from "@/lib/match";

export default async function Home() {
  const match = (await fetchNextMatch()) ?? fallbackMatch;

  return (
    <main>
      <Hero />
      <CoreValues />
      <NextMatch match={match} />
    </main>
  );
}
