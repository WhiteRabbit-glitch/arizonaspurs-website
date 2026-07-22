"use client";

import Image from "next/image";
import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";

const officers = [
  { name: "Joey Manning",   role: "Chairperson",     imageUrl: "/images/officers/joey-manning.png" },
  { name: "Chandra Carr",   role: "Secretary",       imageUrl: "/images/officers/chandra-carr.png" },
  { name: "Alex Chapman",   role: "Treasurer",       imageUrl: "/images/officers/alex-chapman.png" },
  { name: "Jake Altersitz", role: "Social Media",    imageUrl: "/images/officers/jake-altersitz.png" },
  { name: "Aaron Coe",      role: "Member-at-Large", imageUrl: "/images/officers/aaron-coe.png" },
];

export default function Officers() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="officers-heading"
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
            Leadership
          </p>
          <h2
            id="officers-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            The Board
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {officers.map((officer, index) => (
            <motion.div
              key={officer.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="officer-card"
            >
              {officer.imageUrl ? (
                <div className="mb-4 h-20 w-20 overflow-hidden">
                  <Image
                    src={officer.imageUrl}
                    alt={officer.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-20 w-20 items-center justify-center border border-gold/50 font-limelight text-xl text-gold"
                >
                  {officer.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
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
