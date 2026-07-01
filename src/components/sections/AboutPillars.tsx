"use client";

import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "I",
    title: "Community",
    body: "The Phoenix metro is home to Tottenham supporters scattered across it with no place to gather. Arizona Spurs exists to change that — to give every Spurs fan in the region a home. Fibber Magee's in Chandler is our heartbeat: a place where familiar faces show up every match day, where new faces quickly become regulars, and where the final whistle is never the end of the conversation. Community is not a feature of what we do. It is the reason we exist.",
  },
  {
    number: "II",
    title: "Service",
    body: "As a 501(c)(7) nonprofit social club, Arizona Spurs is bound by purpose rather than profit. We run annual food drives and community outreach programs, and we take that responsibility seriously. Every dollar collected — through membership dues, merchandise, and events — is reinvested directly into club operations, member experiences, and community initiatives. We are not just a group that watches football. We are an organization with an obligation to give back.",
  },
  {
    number: "III",
    title: "The Game",
    body: "Arizona Spurs holds official recognition from Tottenham Hotspur FC — a distinction that comes with real accountability and a real connection to the club in London. Part of our mission is to grow the culture of association football across the Phoenix metro: to introduce the sport to new fans, to create spaces where the game is taken seriously, and to represent Tottenham Hotspur with the integrity the club deserves. One watch party at a time, we are building something that lasts. Come On You Spurs.",
  },
];

export default function AboutPillars() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="pillars-heading"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            What Drives Us
          </p>
          <h2
            id="pillars-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            Built on Three Pillars
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: index * 0.15 }}
              className="flex flex-col gap-4 border-t-2 border-gold pt-8"
            >
              <span aria-hidden="true" className="font-limelight text-4xl text-gold/50">
                {pillar.number}
              </span>
              <h3 className="font-josefin text-xl font-700 uppercase tracking-wide text-spurs-navy">
                {pillar.title}
              </h3>
              <p className="font-josefin text-base leading-relaxed text-near-black/75">
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
