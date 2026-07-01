import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      {/* Ornamental divider — top */}
      <div className="divider-ornamental mx-auto max-w-[1200px] px-6 pt-12">
        <span aria-hidden="true">◆</span>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-[1200px] px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-3">

        {/* Column 1 — Identity */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            aria-label="Arizona Spurs — home"
            className="font-limelight text-2xl uppercase tracking-widest text-white"
          >
            Arizona Spurs
          </Link>
          <p className="font-josefin text-sm leading-relaxed text-white/70">
            Tottenham Hotspur supporters club serving the Phoenix metro area.
            Watching together at Fibbers in Chandler since 2014.
          </p>
          <p className="font-josefin text-xs uppercase tracking-widest text-gold/80">
            Est. 2014 · 503(c)(7) Social Club
          </p>
        </div>

        {/* Column 2 — Quick links */}
        <div className="flex flex-col gap-4">
          <p className="section-label text-white/50">Navigate</p>
          <ul className="flex flex-col gap-2" role="list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Social + CTA */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="section-label text-white/50">Follow the Club</p>
            <div className="flex items-center gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/ArizonaSpurs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arizona Spurs on Facebook"
                className="social-icon-link"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/arizonaspurs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arizona Spurs on Instagram"
                className="social-icon-link"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/ArizonaSpurs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arizona Spurs on X (Twitter)"
                className="social-icon-link"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <Link href="/join" className="nav-cta self-start">
            Join the Club
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-josefin text-xs text-white/50">
            © {new Date().getFullYear()} Arizona Spurs Supporters Club. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link text-xs">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
