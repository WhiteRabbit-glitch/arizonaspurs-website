"use client";

import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NewsletterCTA() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="newsletter-cta-heading"
      className="bg-deep-navy px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Ornamental divider */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="divider-ornamental mb-16"
          aria-hidden="true"
        >
          <span>◆</span>
        </motion.div>

        <div className="flex flex-col items-center text-center">

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-6 justify-center text-white/40"
          >
            Stay in the Loop
          </motion.p>

          <motion.h2
            id="newsletter-cta-heading"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-limelight text-4xl uppercase tracking-wide text-white md:text-5xl"
          >
            Never Miss a Match
          </motion.h2>

          <motion.div
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-8 h-px w-24 origin-center bg-gold"
          />

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-lg font-josefin text-base leading-relaxed tracking-wide text-white/70"
          >
            Match previews, event announcements, club news, and the occasional
            COYS. No spam — just Spurs.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/newsletter" className="hero-cta-primary">
              Subscribe Free
            </Link>
            <Link href="/newsletter#archive" className="hero-cta-secondary">
              Read Past Issues
            </Link>
          </motion.div>

        </div>

        {/* Ornamental divider — bottom */}
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
