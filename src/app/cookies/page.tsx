import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Arizona Spurs",
  description: "How Arizona Spurs uses cookies and analytics on this website.",
};

export default function CookiesPage() {
  return (
    <main id="main-content">
      <section className="bg-spurs-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-[700px]">
          <p className="section-label mb-4 justify-center text-white/40">Legal</p>
          <h1 className="font-limelight text-4xl uppercase tracking-wide text-white">
            Cookie Policy
          </h1>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-24 bg-gold" />
          <p className="mt-6 font-josefin text-sm text-white/50">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="legal-content mx-auto max-w-[700px]">

          <h2>What Cookies Are</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They
            help websites remember your preferences and understand how visitors use the site.
            You can control cookies through your browser settings or through the consent banner
            on this site.
          </p>

          <h2>Cookies We Use</h2>

          <h2>Strictly Necessary</h2>
          <p>
            This site does not require any strictly necessary cookies to function. You can
            browse all content without accepting cookies.
          </p>

          <h2>Analytics — Google Analytics</h2>
          <p>
            With your consent, we use Google Analytics (Google LLC) to understand how visitors
            use this site. Google Analytics collects anonymized data including pages visited,
            time on site, and general geographic region. No personally identifiable information
            is sent to Google Analytics.
          </p>
          <p>Cookies set by Google Analytics:</p>
          <ul>
            <li><strong>_ga</strong> — Distinguishes unique users. Expires: 2 years.</li>
            <li><strong>_ga_*</strong> — Maintains session state. Expires: 2 years.</li>
            <li><strong>_gid</strong> — Distinguishes unique users. Expires: 24 hours.</li>
          </ul>
          <p>
            These cookies are only loaded after you accept cookies via the banner on this site.
            Google{"'"}s privacy policy is available at{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>.
          </p>

          <h2>Third-Party — Kit (ConvertKit)</h2>
          <p>
            Our membership and newsletter sign-up forms are powered by Kit (ConvertKit, Inc.).
            When you interact with a sign-up form, Kit{"'"}s script may set cookies to track
            form submissions and measure engagement with our newsletter emails. Kit also
            provides us with analytics on open rates and click-throughs within our emails.
          </p>
          <p>
            Kit{"'"}s cookies are set when you visit a page containing one of our sign-up
            forms (/join, /newsletter). Kit{"'"}s privacy policy is available at{" "}
            <a href="https://kit.com/privacy-policy" target="_blank" rel="noopener noreferrer">
              kit.com/privacy-policy
            </a>.
          </p>

          <h2>Consent and Managing Your Preferences</h2>
          <p>
            When you first visit this site, a banner gives you the option to accept or decline
            non-essential cookies. Your choice is stored in your browser and applied on future
            visits.
          </p>
          <p>To change your cookie preference:</p>
          <ul>
            <li>Clear your browser cookies and reload the site — the banner will reappear</li>
            <li>Or adjust cookie settings directly in your browser</li>
          </ul>
          <p>
            Declining cookies will not affect your ability to read this site or submit
            membership forms. It will prevent Google Analytics from loading.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy when we add or change the tools we use. Changes will be
            posted here with an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about cookies: <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>
          </p>

        </div>
      </section>
    </main>
  );
}
