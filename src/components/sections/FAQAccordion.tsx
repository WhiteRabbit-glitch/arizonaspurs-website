"use client";

import { useState, useRef } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { faqCategories } from "@/lib/faq";

function FAQItem({
  question,
  answer,
  long,
}: {
  question: string;
  answer: string;
  long?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (long) {
    return (
      <div className="faq-item">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          className="faq-trigger"
        >
          <span className="font-josefin text-base font-600 uppercase tracking-wide text-spurs-navy text-left">
            {question}
          </span>
          <Plus
            aria-hidden="true"
            size={20}
            className={`faq-icon shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="overflow-hidden"
            >
              <p className="faq-answer pb-5 pr-8 pt-2">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="faq-item">
      <p className="font-josefin text-base font-600 uppercase tracking-wide text-spurs-navy mb-2">
        {question}
      </p>
      <p className="faq-answer">{answer}</p>
    </div>
  );
}

export default function FAQAccordion() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="faq-body-heading"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[800px]">
        <h2 id="faq-body-heading" className="sr-only">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-16">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <p className="section-label mb-8 text-spurs-navy/40">
                {category.title}
              </p>
              <div className="flex flex-col divide-y divide-spurs-navy/10">
                {category.items.map((item) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    long={item.long}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
