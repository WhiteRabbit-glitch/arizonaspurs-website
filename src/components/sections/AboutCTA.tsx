"use client";

import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutCTA() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="about-cta-heading"
      className="bg-spurs-navy px-6 py-24 text-center"
    >
      <div className="mx-auto max-w-[700px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="divider-ornamental mb-16"
          aria-hidden="true"
        >
          <span>◆</span>
        </motion.div>

        <motion.h2
          id="about-cta-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="font-limelight text-4xl uppercase tracking-wide text-white md:text-5xl"
        >
          Be Part of It
        </motion.h2>

        <motion.div
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto my-8 h-px w-24 origin-center bg-gold"
        />

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-josefin text-base leading-relaxed tracking-wide text-white/75"
        >
          Whether you&apos;ve supported Spurs your whole life or just discovered
          them, there&apos;s a seat for you at Fibbers. Come watch a match with us.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/join" className="hero-cta-primary">
            Join the Club
          </Link>
          <Link href="/events" className="hero-cta-secondary">
            See Events
          </Link>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="divider-ornamental mt-16"
          aria-hidden="true"
        >
          <span>◆</span>
        </motion.div>

      </div>
    </section>
  );
}
