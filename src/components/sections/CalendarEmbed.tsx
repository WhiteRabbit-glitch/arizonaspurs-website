"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// TODO: Set GOOGLE_CALENDAR_ID in .env.local and Vercel environment variables.
// The embed URL will auto-populate once the variable is set.
// Calendar must be set to "public" in Google Calendar settings.
const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID ?? "";

function buildEmbedUrl(calendarId: string) {
  if (!calendarId) return "";
  const params = new URLSearchParams({
    src: calendarId,
    ctz: "America/Phoenix",
    showTitle: "0",
    showNav: "1",
    showDate: "1",
    showPrint: "0",
    showTabs: "0",
    showCalendars: "0",
    mode: "AGENDA",
    color: "%23B3A369",
  });
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

export default function CalendarEmbed() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const embedUrl = buildEmbedUrl(CALENDAR_ID);

  return (
    <section
      ref={ref}
      aria-labelledby="calendar-heading"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">
            Full Schedule
          </p>
          <h2
            id="calendar-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            Match Calendar
          </h2>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {embedUrl ? (
            <div className="calendar-frame">
              <iframe
                src={embedUrl}
                title="Arizona Spurs watch party schedule"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          ) : (
            /* Placeholder shown until NEXT_PUBLIC_GOOGLE_CALENDAR_ID is set */
            <div className="calendar-placeholder">
              <div className="flex flex-col items-center gap-4 text-center">
                <div aria-hidden="true" className="font-limelight text-5xl text-gold/40">
                  ◆
                </div>
                <p className="font-josefin text-base font-600 uppercase tracking-wide text-spurs-navy/50">
                  Calendar coming soon
                </p>
                <p className="font-josefin text-sm text-spurs-navy/40">
                  Add <code className="rounded bg-spurs-navy/10 px-1 py-0.5 text-xs">NEXT_PUBLIC_GOOGLE_CALENDAR_ID</code> to your environment variables to display the full match schedule.
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center font-josefin text-sm text-spurs-navy/50"
        >
          All times shown in Arizona time (MST — no daylight saving).
        </motion.p>

      </div>
    </section>
  );
}
