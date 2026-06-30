"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "FAQ", href: "/faq" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 bg-spurs-navy">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-limelight text-2xl uppercase tracking-widest text-white"
          aria-label="Arizona Spurs — home"
        >
          Arizona Spurs
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/join" className="nav-cta hidden md:flex">
          Join the Club
        </Link>

        {/* Mobile hamburger — 44×44px touch target */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className="hamburger-bar"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : undefined,
            }}
          />
          <span
            className="hamburger-bar"
            style={{ opacity: menuOpen ? 0 : undefined }}
          />
          <span
            className="hamburger-bar"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : undefined,
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-deep-navy md:hidden"
          >
            <ul className="flex flex-col px-6 py-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block border-b border-white/10 py-3 font-josefin text-sm uppercase tracking-[0.14em] text-white last:border-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/join" className="nav-cta w-full" onClick={() => setMenuOpen(false)}>
                  Join the Club
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
