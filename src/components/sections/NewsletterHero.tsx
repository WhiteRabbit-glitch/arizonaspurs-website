"use client";

import { useReducedMotion, motion } from "framer-motion";

export default function NewsletterHero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  });

  return (
    <section
      aria-label="Arizona Spurs newsletter"
      className="bg-spurs-navy px-6 py-28 text-center"
    >
      <div className="mx-auto max-w-[800px]">
        <motion.p {...fadeUp(0)} className="section-label mb-6 justify-center text-white/50">
          Stay in the Loop
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-limelight text-5xl uppercase leading-tight tracking-wide text-white md:text-6xl"
        >
          The Newsletter
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
          Match previews, watch party announcements, club news, and the occasional COYS.
          No spam — just Spurs.
        </motion.p>
      </div>
    </section>
  );
}
