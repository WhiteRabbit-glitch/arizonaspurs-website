"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2014",
    heading: "Founded",
    body: "A small group of devoted Tottenham supporters came together with a simple goal: create a real sense of community for Spurs fans in Arizona. What started as informal gatherings quickly became something bigger.",
  },
  {
    year: "2014–2016",
    heading: "Finding a Home",
    body: "The club relocated six times over two years, chasing the right atmosphere and the right crowd. Each move brought new faces and grew the family.",
  },
  {
    year: "2016-2017",
    heading: "Fibbers",
    body: "Arizona Spurs found its permanent home at Fibber Magee's in Chandler. The right pub, the right people — and we haven't left since.",
  },
  {
    year: "Today",
    heading: "Official & Growing",
    body: "An officially recognized Tottenham Hotspur FC supporters club since 2014, Arizona Spurs is a 501(c)(7) nonprofit social club drawing members from across the Phoenix metro and beyond. Supporting Spurs is always better together.",
  },
];

export default function History() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="history-heading"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            Our Story
          </p>
          <h2
            id="history-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            A Decade in the Desert
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div
            aria-hidden="true"
            className="absolute left-[calc(theme(spacing.16)+1px)] top-0 hidden h-full w-px bg-gold/30 md:block"
          />

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col gap-3 md:flex-row md:gap-10"
              >
                {/* Year */}
                <div className="flex shrink-0 items-start gap-4 md:w-48 md:flex-col md:items-end md:gap-2">
                  <span className="font-limelight text-2xl text-gold md:text-3xl">
                    {item.year}
                  </span>
                  {/* Dot on the timeline */}
                  <div
                    aria-hidden="true"
                    className="mt-1 hidden h-3 w-3 shrink-0 rounded-full border-2 border-gold bg-cream md:block"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 md:pt-0.5">
                  <h3 className="font-josefin text-lg font-700 uppercase tracking-wide text-spurs-navy">
                    {item.heading}
                  </h3>
                  <p className="font-josefin text-base leading-relaxed text-near-black/80">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
