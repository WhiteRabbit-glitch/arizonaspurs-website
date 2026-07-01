import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Arizona Spurs",
  description: "How Arizona Spurs collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="bg-spurs-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-[700px]">
          <p className="section-label mb-4 justify-center text-white/40">Legal</p>
          <h1 className="font-limelight text-4xl uppercase tracking-wide text-white">
            Privacy Policy
          </h1>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-24 bg-gold" />
          <p className="mt-6 font-josefin text-sm text-white/50">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="legal-content mx-auto max-w-[700px]">

          <h2>Who We Are</h2>
          <p>
            Arizona Spurs Supporters Club is a 501(c)(7) nonprofit social club serving Tottenham
            Hotspur fans in the Phoenix metropolitan area. We are the data controller for the
            personal information described in this policy.
          </p>
          <p>Contact: <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a></p>

          <h2>Data We Collect</h2>
          <p>When you join Arizona Spurs or subscribe to our newsletter, we collect:</p>
          <ul>
            <li>First and last name</li>
            <li>Email address</li>
          </ul>
          <p>
            We do not collect payment information, location data, phone numbers, or any other
            personal data beyond what is listed above.
          </p>

          <h2>Why We Collect It</h2>
          <p>
            We collect your name and email to process your membership, send club news and match
            updates, and register you with Tottenham Hotspur{"'"}s official supporters network.
            The legal basis for processing is your consent, which you give when you sign up.
          </p>

          <h2>Who We Share Your Data With</h2>
          <p>
            <strong>Tottenham Hotspur Football Club:</strong> As a condition of our official
            recognized supporters club status, we share your name and email with Tottenham Hotspur
            FC to register you with the global supporters network (linked membership). Tottenham
            Hotspur FC{"'"}s own privacy policy governs how they process your data after receipt.
          </p>
          <p>
            <strong>Kit (ConvertKit):</strong> We use Kit to manage our mailing list, send
            newsletters, and process membership sign-ups. Your data is stored on Kit{"'"}s
            platform. Kit{"'"}s privacy policy applies to their processing. Kit also collects
            analytics data on how subscribers interact with our emails and forms.
          </p>
          <p>
            <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors
            use this website. Google Analytics collects anonymized usage data via cookies. This is
            only active if you have accepted cookies. Google{"'"}s privacy policy governs their
            processing of that data.
          </p>
          <p>We do not sell, rent, or share your data with any other parties.</p>

          <h2>International Data Transfers</h2>
          <p>
            Tottenham Hotspur FC is based in the United Kingdom. Kit is a US-based company.
            Google is a US-based company. Transfers of your data to these parties may involve
            transfer outside your country of residence. Each party{"'"}s privacy policy describes
            the safeguards they apply to international transfers.
          </p>

          <h2>How Long We Keep Your Data</h2>
          <p>
            We retain your data for as long as you remain a member or subscriber. You can
            request deletion at any time by contacting us at{" "}
            <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a> or by
            unsubscribing through the link in any email we send you.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under GDPR and applicable data protection law, you have the right to:
          </p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time without affecting prior processing</li>
            <li>Receive your data in a portable format</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>. We will respond
            within 30 days.
          </p>

          <h2>Age Requirement and Children&apos;s Privacy</h2>
          <p>
            You must be 16 or older to join Arizona Spurs, or have verifiable parental permission.
            We do not knowingly collect personal data from anyone under 16 without parental
            consent. If we become aware that a person under 16 has submitted their data without
            parental permission, we will delete that data promptly. If you believe a child under
            16 has provided us with personal information without appropriate consent, contact us
            at <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect your personal data against unauthorized access,
            disclosure, alteration, or destruction. Your data is stored within Kit{"'"}s
            platform, which maintains its own security standards. We do not store personal data
            on our own servers. We use HTTPS across the entire site to encrypt data in transit.
          </p>
          <p>
            No method of transmission over the internet is completely secure. If you have reason
            to believe your data has been compromised, contact us immediately at{" "}
            <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>.
          </p>

          <h2>California Residents (CCPA)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act (CCPA) gives
            you additional rights:
          </p>
          <ul>
            <li>Right to know what personal information we collect, use, and share</li>
            <li>Right to delete your personal information (subject to certain exceptions)</li>
            <li>Right to opt out of the sale of your personal information</li>
            <li>Right to non-discrimination for exercising your CCPA rights</li>
          </ul>
          <p>
            Arizona Spurs does not sell personal information. We share your name and email with
            Tottenham Hotspur FC solely for membership registration purposes, which is not a
            sale under CCPA. To exercise your rights or request information about your data,
            contact us at <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            We use cookies and analytics tools as described in our{" "}
            <Link href="/cookies">Cookie Policy</Link>. You can manage your cookie preferences
            at any time through the banner on this site.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page
            with an updated date. Continued membership or use of the site after a change
            constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>
          </p>

        </div>
      </section>
    </main>
  );
}
