"use client";

import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Match } from "@/lib/match";

function formatMatchDate(isoString: string) {
  const date = new Date(isoString);
  return {
    day: date.toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Phoenix" }),
    date: date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Phoenix" }),
    time: date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short", timeZone: "America/Phoenix" }),
    iso: isoString,
  };
}

export default function NextMatch({ match }: { match: Match }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { day, date, time, iso } = formatMatchDate(match.date);

  return (
    <section
      ref={ref}
      aria-labelledby="next-match-heading"
      className="bg-spurs-navy px-6 py-20"
    >
      {/* Decorative top rule */}
      <div aria-hidden="true" className="mx-auto mb-16 max-w-[1200px] border-t border-gold/20" />

      <div className="mx-auto max-w-[1200px]">

        {/* Label */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <p className="section-label text-white/50">
            Watch With Us
          </p>
        </motion.div>

        {/* Fixture */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-10"
        >
          {/* Home — Arizona Spurs */}
          <span className="font-limelight text-3xl uppercase tracking-wide text-white md:text-4xl">
            Arizona Spurs
          </span>

          {/* VS divider */}
          <span
            aria-hidden="true"
            className="font-josefin text-sm font-600 uppercase tracking-[0.25em] text-gold/70"
          >
            vs
          </span>

          {/* Opponent */}
          <span className="font-limelight text-3xl uppercase tracking-wide text-white md:text-4xl">
            {match.opponent}
          </span>
        </motion.div>

        {/* Competition badge */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex justify-center"
        >
          <span className="border border-gold/40 px-4 py-1 font-josefin text-xs uppercase tracking-[0.2em] text-gold/80">
            {match.competition}
          </span>
        </motion.div>

        {/* Gold rule */}
        <motion.div
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto my-10 h-px w-24 origin-center bg-gold"
        />

        {/* Date / time / venue */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p className="font-josefin text-sm font-600 uppercase tracking-[0.15em] text-white/60">
            {day}
          </p>
          <time
            dateTime={iso}
            className="font-josefin text-xl font-700 uppercase tracking-wide text-white"
          >
            {date} &nbsp;·&nbsp; {time}
          </time>
          <a
            href={match.venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-josefin text-sm tracking-wide text-gold/80 underline-offset-4 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {match.venueLabel}
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/events" className="hero-cta-primary">
            See All Events
          </Link>
        </motion.div>
      </div>

      {/* Decorative bottom rule */}
      <div aria-hidden="true" className="mx-auto mt-16 max-w-[1200px] border-t border-gold/20" />
    </section>
  );
}
