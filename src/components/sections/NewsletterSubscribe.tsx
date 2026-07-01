"use client";

import Link from "next/link";
import Script from "next/script";
import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NewsletterSubscribe() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />

      <section
        ref={ref}
        id="subscribe"
        aria-labelledby="subscribe-heading"
        className="bg-cream px-6 py-24"
      >
        <div className="mx-auto max-w-[560px]">

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="section-label mb-4 justify-center text-spurs-navy/40">
              Free to Subscribe
            </p>
            <h2
              id="subscribe-heading"
              className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy"
            >
              Subscribe
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <form
              action="https://app.kit.com/forms/8913008/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="8913008"
              data-uid="17ce554b80"
              data-format="inline"
              data-version="5"
            >
              <div data-element="fields" className="seva-fields flex flex-col gap-4">
                <div className="formkit-field">
                  <label htmlFor="nl-first-name" className="join-label">First Name</label>
                  <input id="nl-first-name" className="join-input" aria-label="First Name" name="fields[first_name]" required placeholder="First Name" type="text" />
                </div>
                <div className="formkit-field">
                  <label htmlFor="nl-last-name" className="join-label">Last Name</label>
                  <input id="nl-last-name" className="join-input" aria-label="Last Name" name="fields[last_name]" required placeholder="Last Name" type="text" />
                </div>
                <div className="formkit-field">
                  <label htmlFor="nl-email" className="join-label">Email Address</label>
                  <input id="nl-email" className="join-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required type="email" />
                </div>
                <button data-element="submit" type="submit" className="hero-cta-primary w-full mt-2">
                  <div className="formkit-spinner" aria-hidden="true"><div /><div /><div /></div>
                  <span>Subscribe Free</span>
                </button>
              </div>
              <ul className="formkit-alert formkit-alert-error mt-4 hidden" data-element="errors" data-group="alert" role="alert" />
            </form>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 text-center font-josefin text-xs leading-relaxed text-near-black/40"
          >
            By signing up, you agree to Arizona Spurs membership and consent to your name and email being shared with Tottenham Hotspur Football Club to register you with the official supporters network (linked membership). Your data is used only for membership and communications, processed under GDPR and our{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-near-black/70 transition-colors">
              Privacy Policy
            </Link>{" "}
            and Tottenham Hotspur&apos;s policies. You can withdraw consent anytime. You confirm you are 16+ or have parental permission.
          </motion.p>

        </div>
      </section>
    </>
  );
}
