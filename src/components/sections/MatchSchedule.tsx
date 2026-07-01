"use client";

import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CalendarEvent } from "@/lib/gcal";

const TZ = "America/Phoenix";

function formatEvent(isoString: string, allDay: boolean) {
  const d = new Date(isoString);
  return {
    dayNum: d.toLocaleDateString("en-US", { day: "numeric", timeZone: TZ }),
    dayName: d.toLocaleDateString("en-US", { weekday: "short", timeZone: TZ }).toUpperCase(),
    monthYear: d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: TZ }).toUpperCase(),
    time: allDay
      ? "All day"
      : d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short", timeZone: TZ }),
  };
}

function groupByMonth(events: CalendarEvent[]): [string, CalendarEvent[]][] {
  const map = new Map<string, CalendarEvent[]>();
  for (const e of events) {
    const key = new Date(e.start).toLocaleDateString("en-US", {
      month: "long", year: "numeric", timeZone: TZ,
    }).toUpperCase();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  }
  return [...map.entries()];
}

export default function MatchSchedule({ events }: { events: CalendarEvent[] }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const grouped = groupByMonth(events);

  return (
    <section
      ref={ref}
      id="calendar"
      aria-labelledby="schedule-heading"
      className="bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[1100px]">

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center text-spurs-navy/40">Full Schedule</p>
          <h2
            id="schedule-heading"
            className="font-josefin text-3xl font-700 uppercase tracking-wide text-spurs-navy md:text-4xl"
          >
            Match Calendar
          </h2>
        </motion.div>

        {grouped.length === 0 ? (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="py-20 text-center"
          >
            <p aria-hidden="true" className="font-limelight text-5xl text-gold/30">◆</p>
            <p className="mt-6 font-josefin text-sm uppercase tracking-[0.15em] text-spurs-navy/40">
              Season schedule coming soon
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-14">
            {grouped.map(([month, monthEvents], gi) => (
              <motion.div
                key={month}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
              >
                {/* Month header */}
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="shrink-0 font-josefin text-xs font-600 uppercase tracking-[0.2em] text-gold">
                    {month}
                  </h3>
                  <div className="h-px flex-1 bg-gold/25" />
                </div>

                {/* Event rows */}
                <div className="flex flex-col divide-y divide-spurs-navy/8">
                  {monthEvents.map((event) => {
                    const { dayNum, dayName, time } = formatEvent(event.start, event.allDay);
                    return (
                      <div
                        key={event.id}
                        className="flex items-start gap-5 py-4 sm:items-center sm:gap-8"
                      >
                        {/* Date block */}
                        <div className="w-10 shrink-0 text-center">
                          <p className="font-josefin text-2xl font-700 leading-none text-spurs-navy">
                            {dayNum}
                          </p>
                          <p className="mt-1 font-josefin text-[10px] font-600 uppercase tracking-widest text-spurs-navy/40">
                            {dayName}
                          </p>
                        </div>

                        {/* Gold rule */}
                        <div aria-hidden="true" className="hidden h-8 w-px shrink-0 bg-gold/25 sm:block" />

                        {/* Match details */}
                        <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-6">
                          <p className="w-32 shrink-0 font-josefin text-xs font-600 uppercase tracking-[0.08em] text-gold/75">
                            {time}
                          </p>
                          <div>
                            <p className="font-josefin text-sm font-700 uppercase tracking-wide text-spurs-navy md:text-base">
                              {event.title}
                            </p>
                            {event.location && (
                              <p className="mt-0.5 font-josefin text-xs tracking-wide text-spurs-navy/45">
                                {event.location}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 text-center font-josefin text-xs uppercase tracking-[0.12em] text-spurs-navy/35"
        >
          All times shown in Arizona time (MST — no daylight saving)
        </motion.p>

      </div>
    </section>
  );
}
