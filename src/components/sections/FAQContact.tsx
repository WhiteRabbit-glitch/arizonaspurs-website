"use client";

import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { useRef } from "react";

export default function FAQContact() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="faq-contact-heading"
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
          id="faq-contact-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="font-limelight text-4xl uppercase tracking-wide text-white md:text-5xl"
        >
          Still Have Questions?
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
          Reach out to the board — we&apos;re happy to help.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a href="mailto:board@arizonaspurs.com" className="hero-cta-primary inline-flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            Email the Board
          </a>
          <Link href="/join" className="hero-cta-secondary">
            Join the Club
          </Link>
        </motion.div>

        {/* Faster via social */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <p className="font-josefin text-xs uppercase tracking-[0.15em] text-white/40">
            Faster responses on social
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/ArizonaSpurs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Arizona Spurs on Facebook"
              className="social-icon-link"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/officialarizonaspurs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Arizona Spurs on Instagram"
              className="social-icon-link"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
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
