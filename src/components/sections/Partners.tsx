"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { partners } from "@/lib/partners";

export default function Partners() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="partners-heading"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Label + heading */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            Our Partners
          </p>
          <h2
            id="partners-heading"
            className="font-josefin text-2xl font-700 uppercase tracking-wide text-spurs-navy"
          >
            Proud to Stand With
          </h2>
        </motion.div>

        {/* Partner cards */}
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} — ${partner.role} (opens in new tab)`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="partner-card group"
            >
              {partner.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="mb-4 h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-16 w-16 items-center justify-center border border-gold/40 font-limelight text-2xl text-gold"
                >
                  {partner.name.charAt(0)}
                </div>
              )}
              <p className="font-josefin text-base font-700 uppercase tracking-wide text-spurs-navy">
                {partner.name}
              </p>
              <p className="font-josefin text-xs uppercase tracking-[0.12em] text-spurs-navy/50">
                {partner.role}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
