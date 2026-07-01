"use client";

import { useReducedMotion, motion } from "framer-motion";

export default function JoinHero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  });

  return (
    <section
      aria-label="Join Arizona Spurs"
      className="bg-spurs-navy px-6 py-28 text-center"
    >
      <div className="mx-auto max-w-[800px]">
        <motion.p {...fadeUp(0)} className="section-label mb-6 justify-center text-white/50">
          Est. 2014 · Phoenix, Arizona
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-limelight text-5xl uppercase leading-tight tracking-wide text-white md:text-6xl"
        >
          Join the Club
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
          Membership is free. Sign up to stay connected, get the newsletter,
          and be first to know when paid membership and club cards launch.
        </motion.p>
      </div>
    </section>
  );
}
