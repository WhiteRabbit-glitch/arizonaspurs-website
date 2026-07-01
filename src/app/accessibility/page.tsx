import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Arizona Spurs",
  description: "Arizona Spurs' commitment to web accessibility and how to reach us with concerns.",
};

export default function AccessibilityPage() {
  return (
    <main id="main-content">
      <section className="bg-spurs-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-[700px]">
          <p className="section-label mb-4 justify-center text-white/40">Legal</p>
          <h1 className="font-limelight text-4xl uppercase tracking-wide text-white">
            Accessibility
          </h1>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-24 bg-gold" />
          <p className="mt-6 font-josefin text-sm text-white/50">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="legal-content mx-auto max-w-[700px]">

          <h2>Our Commitment</h2>
          <p>
            Arizona Spurs is committed to making this website usable by everyone, regardless
            of ability, technology, or browsing context. We design accessibility in from the
            start — it is not a retrofit.
          </p>

          <h2>Conformance Target</h2>
          <p>
            We aim to meet <strong>WCAG 2.2 Level AA</strong> across all pages. WCAG 2.2
            is the current international standard for web accessibility, published by the
            World Wide Web Consortium (W3C).
          </p>

          <h2>What We Have Done</h2>
          <ul>
            <li>Skip navigation link on every page, visible on keyboard focus</li>
            <li>Logical heading hierarchy — one h1 per page, no skipped levels</li>
            <li>Semantic HTML landmarks: main, nav, header, footer, section</li>
            <li>Color contrast ratios at or above 4.5:1 for body text, 3:1 for large text and UI</li>
            <li>Visible focus indicators on all interactive elements</li>
            <li>All interactive targets meet the 44×44px minimum touch size</li>
            <li>All images carry descriptive alt text or empty alt for decorative images</li>
            <li>All icon-only buttons and links have aria-label attributes</li>
            <li>All form inputs have associated label elements</li>
            <li>Site is fully operable by keyboard without a mouse</li>
            <li>Animations respect the prefers-reduced-motion system preference</li>
            <li>Text scales to 200% without loss of content or function</li>
            <li>Content reflows at 400% zoom without horizontal scrolling</li>
            <li>Body text set in rem, not px, so it respects browser font size preferences</li>
          </ul>

          <h2>Technical Specifications</h2>
          <p>
            This site is built with Next.js (React), TypeScript, and Tailwind CSS. It relies
            on standard HTML, CSS, and JavaScript. No plugins or browser extensions are
            required to use this site.
          </p>

          <h2>Known Limitations</h2>
          <p>
            This site is actively maintained. No major accessibility failures are currently
            known. If you encounter a barrier, please tell us — we treat accessibility
            reports as high priority.
          </p>
          <p>
            <strong>Third-party content:</strong> The Google Maps embed on our events and
            venue pages and the Kit sign-up forms are provided by third parties and may not
            fully conform to WCAG 2.2 AA. We request that vendors support accessibility
            standards and we monitor for improvements.
          </p>

          <h2>Feedback and Contact</h2>
          <p>
            If you experience difficulty accessing any part of this site, contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a></li>
            <li>We will respond within 5 business days</li>
            <li>We will work to resolve the issue or provide the information in an accessible format</li>
          </ul>
          <p>
            If you are not satisfied with our response, you may contact your local
            accessibility or disability rights authority.
          </p>

          <h2>Assessment Approach</h2>
          <p>
            Arizona Spurs assesses the accessibility of this site through self-evaluation
            against WCAG 2.2 success criteria, keyboard navigation testing, and screen reader
            spot-checks. We update our approach as standards and tooling evolve.
          </p>

        </div>
      </section>
    </main>
  );
}
