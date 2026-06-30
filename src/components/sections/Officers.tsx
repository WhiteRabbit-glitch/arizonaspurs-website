"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const officers = [
  { name: "Joey Manning", role: "Chairperson" },
  { name: "Chandra Carr", role: "Secretary" },
  { name: "Steve Oxenden", role: "Treasurer" },
  { name: "Jake Altersitz", role: "Social Media" },
  { name: "Aaron Coe", role: "Member-at-Large" },
  { name: "Alex Chapman", role: "Member-at-Large" },
];

export default function Officers() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="officers-heading"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            Leadership
          </p>
          <h2
            id="officers-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            The Board
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {officers.map((officer, index) => (
            <motion.div
              key={officer.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="officer-card"
            >
              {/* Monogram */}
              <div
                aria-hidden="true"
                className="mb-4 flex h-14 w-14 items-center justify-center border border-gold/50 font-limelight text-xl text-gold"
              >
                {officer.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <p className="font-josefin text-sm font-700 uppercase tracking-wide text-spurs-navy">
                {officer.name}
              </p>
              <p className="font-josefin text-xs uppercase tracking-[0.12em] text-spurs-navy/50">
                {officer.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
