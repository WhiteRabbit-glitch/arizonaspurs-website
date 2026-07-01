"use client";

import Image from "next/image";
import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const venue = {
  name: "Fibber Magee's Pub",
  address: "1989 W Elliot Rd, Chandler, AZ 85224",
  directionsUrl: "https://maps.google.com/?q=Fibber+Magees+1989+W+Elliot+Rd+Chandler+AZ+85224",
  websiteUrl: "https://www.fibbermageespub.com/",
  details: [
    { label: "Doors", value: "Open 15 minutes before kickoff" },
    { label: "Parking", value: "Free lot on-site" },
    { label: "Atmosphere", value: "Family friendly, all ages welcome" },
    { label: "Food & Drink", value: "Full kitchen and bar — no outside food" },
  ],
};

// Standard Google Maps iframe embed — no API key required.
// For a custom dark-themed map, add a Map ID via Google Cloud Console
// (Maps JavaScript API + Cloud-based maps styling) and swap to the JS embed.
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Fibber+Magees+1989+W+Elliot+Rd+Chandler+AZ+85224&output=embed&z=15";

export default function VenueInfo() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="venue-heading"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            Where We Watch
          </p>
          <h2
            id="venue-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            {venue.name}
          </h2>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mb-16 max-w-[800px]"
        >
          <Image
            src="/images/events/pub-illustration.png"
            alt="Illustrated view of Fibber Magee's Pub interior, decorated with Tottenham Hotspur scarves and jerseys"
            width={1448}
            height={1086}
            className="h-auto w-full"
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left — venue details */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Address */}
            <div className="border-l-2 border-gold pl-5">
              <p className="font-josefin text-xs uppercase tracking-[0.15em] text-spurs-navy/50 mb-1">
                Address
              </p>
              <p className="font-josefin text-lg font-600 text-spurs-navy">
                {venue.address}
              </p>
            </div>

            {/* Detail rows */}
            <dl className="flex flex-col gap-4">
              {venue.details.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <dt className="w-28 shrink-0 font-josefin text-xs uppercase tracking-[0.12em] text-spurs-navy/50 pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="font-josefin text-base text-near-black/80">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA links */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-primary inline-flex items-center gap-2"
              >
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={venue.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary inline-flex items-center gap-2 !border-spurs-navy/30 !text-spurs-navy hover:!border-gold hover:!text-gold"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Fibber Magee&apos;s Website
              </a>
            </div>
          </motion.div>

          {/* Right — map */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="venue-map-frame"
          >
            <iframe
              src={MAP_EMBED_URL}
              title={`Map showing location of ${venue.name}`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
