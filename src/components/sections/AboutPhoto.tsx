"use client";

import Image from "next/image";
import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPhoto() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section aria-label="Arizona Spurs members" className="bg-white px-6 py-16">
      <motion.div
        ref={ref}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" as const }}
        className="mx-auto max-w-[900px]"
      >
        <Image
          src="/images/about/club-photo.jpg"
          alt="Arizona Spurs members gathered at Fibber Magee's Pub for a watch party, holding club and Tottenham Hotspur scarves"
          width={2040}
          height={1530}
          className="h-auto w-full"
        />
        <p className="mt-4 text-center font-josefin text-sm text-spurs-navy/50">
          Arizona Spurs members at Fibber Magee&apos;s
        </p>
      </motion.div>
    </section>
  );
}
