"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Newsletter",
    body: "Match previews, club news, event announcements, and the occasional COYS — delivered to your inbox.",
    available: true,
  },
  {
    title: "Watch Parties",
    body: "Join us at Fibbers for every Spurs match. Public welcome — members always have a home.",
    available: true,
  },
  {
    title: "Club Card",
    body: "An official Arizona Spurs membership card. Launching with paid membership.",
    available: false,
  },
  {
    title: "Member Portal",
    body: "Access to club bylaws, documents, and members-only content. Coming with paid membership.",
    available: false,
  },
];

export default function MembershipBenefits() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="benefits-heading"
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
            What You Get
          </p>
          <h2
            id="benefits-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            Membership Benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`benefit-card ${benefit.available ? "benefit-card--active" : "benefit-card--soon"}`}
            >
              {!benefit.available && (
                <span className="benefit-badge">Coming Soon</span>
              )}
              <h3 className="font-josefin text-base font-700 uppercase tracking-wide text-spurs-navy mb-2">
                {benefit.title}
              </h3>
              <p className="font-josefin text-sm leading-relaxed text-near-black/70">
                {benefit.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 text-center font-josefin text-xs uppercase tracking-[0.15em] text-spurs-navy/40"
        >
          Arizona Spurs is a 501(c)(7) nonprofit social club.
          All dues are reinvested into club operations and community initiatives.
        </motion.p>

      </div>
    </section>
  );
}
