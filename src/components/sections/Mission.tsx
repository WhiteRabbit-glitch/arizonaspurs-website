"use client";

import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  });

  return (
    <section
      ref={ref}
      aria-labelledby="mission-heading"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[800px] text-center">

        <motion.p {...fadeUp(0)} className="section-label mb-6 justify-center text-spurs-navy/40">
          Our Purpose
        </motion.p>

        <motion.h2
          id="mission-heading"
          {...fadeUp(0.1)}
          className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
        >
          Why We Exist
        </motion.h2>

        <motion.div aria-hidden="true" {...fadeUp(0.2)} className="mx-auto my-8 h-px w-24 bg-gold" />

        <motion.p
          {...fadeUp(0.25)}
          className="font-josefin text-xl font-600 leading-relaxed tracking-wide text-spurs-navy [text-wrap:balance]"
        >
          Arizona Spurs exists to bring Tottenham Hotspur supporters together across
          Arizona — to build community, give back to our neighbors, and grow the culture
          of the beautiful game in the desert.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="mt-10 flex flex-col gap-5 text-left">
          <p className="font-josefin text-base leading-relaxed text-near-black/75">
            We are an officially recognized Tottenham Hotspur FC supporters club serving
            the Phoenix metro area. Founded in 2014 and incorporated as an Arizona nonprofit
            social club, Arizona Spurs is built by supporters, run by supporters, and
            accountable to our members. Our official recognition by Tottenham Hotspur FC
            reflects a genuine commitment to standards — the kind of organization that
            represents Spurs with character.
          </p>
          <p className="font-josefin text-base leading-relaxed text-near-black/75">
            Our purpose goes beyond match day. We are here to make sure that Tottenham fans
            across the Phoenix metro and beyond never have to watch alone, never have to
            wonder where their people are, and never have to feel like supporting Spurs in
            Arizona is a solitary experience. The club is the community.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
