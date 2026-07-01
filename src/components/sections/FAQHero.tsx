"use client";

import { useReducedMotion, motion } from "framer-motion";

export default function FAQHero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  });

  return (
    <section
      aria-label="Frequently asked questions"
      className="bg-spurs-navy px-6 pb-28 pt-16 text-center sm:pt-28"
    >
      <div className="mx-auto max-w-[800px]">
        <motion.p {...fadeUp(0)} className="section-label mb-6 justify-center text-white/50">
          Club Facts
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-limelight text-5xl uppercase leading-tight tracking-wide text-white md:text-6xl"
        >
          FAQ
        </motion.h1>
        <motion.div
          {...fadeUp(0.2)}
          aria-hidden="true"
          className="mx-auto my-8 h-px w-24 bg-gold"
        />
        <motion.p
          {...fadeUp(0.3)}
          className="font-josefin text-lg leading-relaxed tracking-wide text-white/80 [text-wrap:balance]"
        >
          Everything you need to know about watching with us, joining the club, and getting to a match.
        </motion.p>
      </div>
    </section>
  );
}
