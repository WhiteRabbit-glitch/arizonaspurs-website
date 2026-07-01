"use client";

import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { partners } from "@/lib/partners";
import { ExternalLink, Mail } from "lucide-react";

export default function PartnersDetail() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="partners-detail-heading"
      className="bg-white px-6 py-24"
    >
      <h2 id="partners-detail-heading" className="sr-only">Our Partners</h2>

      <div className="mx-auto max-w-[800px] flex flex-col gap-20">
        {partners.map((partner, index) => (
          <motion.article
            key={partner.name}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.15 }}
            className="flex flex-col gap-6 border-t-2 border-gold pt-10"
          >
            {/* Logo or initial */}
            {partner.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center border border-gold/40 font-limelight text-2xl text-gold"
              >
                {partner.name.charAt(0)}
              </div>
            )}

            {/* Role + name */}
            <div className="flex flex-col gap-2">
              <p className="font-josefin text-xs font-600 uppercase tracking-[0.15em] text-gold">
                {partner.role}
              </p>
              <h3 className="font-josefin text-2xl font-700 uppercase tracking-wide text-spurs-navy md:text-3xl">
                {partner.name}
              </h3>
            </div>

            {/* Bio */}
            <p className="font-josefin text-base leading-relaxed text-near-black/75 max-w-[600px]">
              {partner.bio}
            </p>

            {/* Link */}
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary inline-flex items-center gap-2 self-start !border-spurs-navy/30 !text-spurs-navy hover:!border-gold hover:!text-gold"
            >
              Visit {partner.name}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>

      {/* Become a partner */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mx-auto mt-24 max-w-[600px] border-t border-spurs-navy/10 pt-16 text-center"
      >
        <p className="section-label mb-4 justify-center text-spurs-navy/40">Work With Us</p>
        <h3 className="font-josefin text-xl font-700 uppercase tracking-wide text-spurs-navy">
          Interested in Partnering?
        </h3>
        <div aria-hidden="true" className="mx-auto my-6 h-px w-16 bg-gold" />
        <p className="font-josefin text-base leading-relaxed text-near-black/70">
          We're a growing club with members across the Phoenix metro. If you want to connect with us, reach out to the board.
        </p>
        <a
          href="mailto:board@arizonaspurs.com"
          className="hero-cta-primary mt-8 inline-flex items-center gap-2"
        >
          <Mail size={16} aria-hidden="true" />
          Contact the Board
        </a>
      </motion.div>
    </section>
  );
}
