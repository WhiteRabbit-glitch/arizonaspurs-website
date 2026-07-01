"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    number: "I",
    title: "Community",
    body: "We exist to bring Spurs fans together across Arizona — at Fibbers, at events, and beyond. Every match is an opportunity to grow the family.",
  },
  {
    number: "II",
    title: "Service",
    body: "Annual food drives, community outreach, and local initiatives. Arizona Spurs is a nonprofit social club — every dollar collected is reinvested back into members and the community.",
  },
  {
    number: "III",
    title: "The Game",
    body: "The official Tottenham Hotspur supporters club in Arizona. We promote the culture of association football in the region, one watch party at a time.",
  },
];

function ValueCard({
  value,
  index,
  prefersReducedMotion,
}: {
  value: (typeof values)[0];
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" as const, delay: index * 0.15 }}
      className="value-card"
    >
      <span aria-hidden="true" className="value-card-number">
        {value.number}
      </span>
      <div className="value-card-rule" aria-hidden="true" />
      <h3 className="value-card-title">{value.title}</h3>
      <p className="value-card-body">{value.body}</p>
    </motion.article>
  );
}

export default function CoreValues() {
  const prefersReducedMotion = useReducedMotion();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="values-heading"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section label + heading */}
        <motion.div
          ref={headingRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-6 justify-center text-spurs-navy/50">
            Who We Are
          </p>
          <h2
            id="values-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            Built on Three Pillars
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              value={value}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* 503(c)7 note */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center font-josefin text-xs uppercase tracking-[0.15em] text-spurs-navy/40"
        >
          Arizona Spurs is a 501(c)(7) nonprofit social club.
          All revenue is reinvested into club operations and community initiatives.
        </motion.p>
      </div>
    </section>
  );
}
