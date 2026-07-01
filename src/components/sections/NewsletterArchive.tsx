"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { newsletters } from "@/lib/newsletters";

function formatIssueDate(iso: string): string {
  const [year, month] = iso.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function NewsletterArchive() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="archive"
      aria-labelledby="archive-heading"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[1000px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            Past Issues
          </p>
          <h2
            id="archive-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            Archive
          </h2>
        </motion.div>

        {newsletters.length === 0 ? (
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-center font-josefin text-base text-near-black/50"
          >
            Past issues coming soon.
          </motion.p>
        ) : (
          <ul className="divide-y divide-spurs-navy/10" role="list">
            {newsletters.map((issue, index) => (
              <motion.li
                key={issue.url}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <a
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="issue-row group"
                  aria-label={`Read ${issue.title} — opens in new tab`}
                >
                  <span className="issue-date">{formatIssueDate(issue.date)}</span>
                  <span className="issue-content">
                    <span className="issue-title">{issue.title}</span>
                    <span className="issue-description">{issue.description}</span>
                  </span>
                  <span className="issue-arrow" aria-hidden="true">→</span>
                </a>
              </motion.li>
            ))}
          </ul>
        )}

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 text-center font-josefin text-xs uppercase tracking-[0.15em] text-near-black/30"
        >
          Issues open on Kit&apos;s platform in a new tab.
        </motion.p>

      </div>
    </section>
  );
}
