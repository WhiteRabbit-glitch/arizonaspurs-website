"use client";

import Link from "next/link";
import { useReducedMotion, motion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  return (
    <section
      aria-label="Welcome to Arizona Spurs"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background — swap src for video file when compressed footage is ready */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-deep-navy via-spurs-navy to-[#1a3280]"
      />

      {/* Video background — uncomment when /public/videos/hero.mp4 exists */}
      {/* <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video> */}

      {/* Navy overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-spurs-navy/60"
      />

      {/* Decorative lines — top and bottom */}
      <div aria-hidden="true" className="absolute inset-x-0 top-8 px-8">
        <div className="mx-auto max-w-[1200px] border-t border-gold/30" />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-8 px-8">
        <div className="mx-auto max-w-[1200px] border-t border-gold/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 py-24 text-center">

        {/* Section label */}
        <motion.div {...fadeUp(0)}>
          <p className="section-label mb-8 justify-center text-white/60">
            Phoenix, Arizona
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-limelight text-5xl uppercase leading-none tracking-[0.05em] text-white sm:text-7xl md:text-8xl"
        >
          Arizona Spurs
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          {...fadeUp(0.25)}
          aria-hidden="true"
          className="my-8 h-px w-24 bg-gold"
        />

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.35)}
          className="max-w-xl font-josefin text-lg font-400 leading-relaxed tracking-wide text-white/80"
        >
          Phoenix&apos;s official Tottenham Hotspur supporters club.
          Watching together at Fibbers in Chandler since 2014.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/join" className="hero-cta-primary">
            Join the Club
          </Link>
          <Link href="/events" className="hero-cta-secondary">
            See Events
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-josefin text-xs uppercase tracking-[0.2em] text-white/40">
              Scroll
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gold/60"
            >
              <path
                d="M8 3v10M3 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
