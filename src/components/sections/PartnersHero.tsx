"use client";

import { useReducedMotion, motion } from "framer-motion";

export default function PartnersHero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  });

  return (
    <section
      aria-labelledby="partners-hero-heading"
      className="bg-spurs-navy px-6 py-24 text-center"
    >
      <div className="mx-auto max-w-[700px]">
        <motion.p {...fadeUp(0)} className="section-label mb-6 justify-center text-white/40">
          Our Partners
        </motion.p>

        <motion.h1
          id="partners-hero-heading"
          {...fadeUp(0.1)}
          className="font-limelight text-4xl uppercase tracking-wide text-white md:text-5xl"
        >
          Proud to Stand With
        </motion.h1>

        <motion.div
          {...fadeUp(0.2)}
          aria-hidden="true"
          className="mx-auto my-8 h-px w-24 bg-gold"
        />

        <motion.p
          {...fadeUp(0.3)}
          className="font-josefin text-base leading-relaxed tracking-wide text-white/70"
        >
          The venue that hosts us and the club that unites us.
        </motion.p>
      </div>
    </section>
  );
}
