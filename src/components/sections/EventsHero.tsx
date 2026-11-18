import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import type { Match } from "@/lib/match";

function formatMatchDate(isoString: string) {
  const date = new Date(isoString);
  return {
    day: date.toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Phoenix" }),
    date: date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Phoenix" }),
    time: date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short", timeZone: "America/Phoenix" }),
  };
}

// Entrance fade is CSS (.fade-up in globals.css) so the heading is in the first
// paint; it animates only on md+ screens with no reduced-motion preference.
const fadeUp = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export default function EventsHero({ match }: { match: Match }) {
  const { day, date, time } = formatMatchDate(match.date);

  return (
    <section
      aria-labelledby="events-heading"
      className="bg-spurs-navy px-6 pb-28 pt-16 text-center sm:pt-28"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col items-center">

        {/* Page label */}
        <p {...fadeUp(0)} className="fade-up fade-up-sm section-label mb-6 justify-center text-white/50">
          Fibbers Irish Pub · Chandler, AZ
        </p>

        {/* Page heading */}
        <h1
          id="events-heading"
          {...fadeUp(0.1)}
          className="fade-up fade-up-sm font-limelight text-5xl uppercase leading-tight tracking-wide text-white md:text-6xl"
        >
          Watch Parties
        </h1>

        <p
          {...fadeUp(0.2)}
          className="fade-up fade-up-sm mt-6 mb-10 max-w-xl font-josefin text-lg leading-relaxed tracking-wide text-white/80 [text-wrap:balance]"
        >
          Every Spurs match is better with the family around you.
          Pull up a chair — we&apos;ve saved you a spot.
        </p>

        {/* Next match */}
        <p {...fadeUp(0.25)} className="fade-up fade-up-sm section-label mb-8 justify-center text-white/60">
          Next Match
        </p>

        {/* Fixture */}
        <div
          {...fadeUp(0.3)}
          className="fade-up fade-up-sm flex flex-col items-center gap-4 md:flex-row md:gap-10"
        >
          <span className="font-limelight text-3xl uppercase tracking-wide text-white md:text-4xl">
            Tottenham Hotspur
          </span>
          <span aria-hidden="true" className="font-josefin text-sm font-600 uppercase tracking-[0.25em] text-gold">
            vs
          </span>
          <span className="font-limelight text-3xl uppercase tracking-wide text-white md:text-4xl">
            {match.opponent}
          </span>
        </div>

        {/* Competition badge */}
        <div {...fadeUp(0.35)} className="fade-up fade-up-sm mt-5">
          <span className="border border-gold/40 px-4 py-1 font-josefin text-xs uppercase tracking-[0.2em] text-gold">
            {match.competition}
          </span>
        </div>

        {/* Date / time / venue */}
        <div {...fadeUp(0.4)} className="fade-up fade-up-sm mt-8 flex flex-col items-center gap-2">
          <p className="font-josefin text-sm font-600 uppercase tracking-[0.15em] text-white/60">
            {day}
          </p>
          <time
            dateTime={match.date}
            className="inline-flex items-center gap-2 font-josefin text-xl font-700 uppercase tracking-wide text-white"
          >
            <Calendar size={18} aria-hidden="true" className="text-gold" />
            {date} &nbsp;·&nbsp; {time}
          </time>
          <a
            href={match.venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 font-josefin text-sm tracking-wide text-gold underline-offset-4 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <MapPin size={14} aria-hidden="true" />
            {match.venueLabel}
          </a>
        </div>

        {/* CTAs */}
        <div
          {...fadeUp(0.5)}
          className="fade-up fade-up-sm mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href={match.venueUrl} target="_blank" rel="noopener noreferrer" className="hero-cta-primary">
            Get Directions
          </a>
          <Link href="#calendar" className="hero-cta-secondary">
            Full Schedule
          </Link>
        </div>

      </div>

      {/* Decorative bottom rule */}
      <div aria-hidden="true" className="mx-auto mt-16 max-w-[1200px] border-t border-gold/20" />
    </section>
  );
}
