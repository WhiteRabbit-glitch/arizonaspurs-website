import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Arizona Spurs",
  description: "Terms of use for the Arizona Spurs website and membership.",
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <section className="bg-spurs-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-[700px]">
          <p className="section-label mb-4 justify-center text-white/40">Legal</p>
          <h1 className="font-limelight text-4xl uppercase tracking-wide text-white">
            Terms of Use
          </h1>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-24 bg-gold" />
          <p className="mt-6 font-josefin text-sm text-white/50">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="legal-content mx-auto max-w-[700px]">

          <h2>About These Terms</h2>
          <p>
            These terms govern your use of the Arizona Spurs website and membership. By using
            this site or signing up as a member, you accept these terms. If you do not accept
            them, do not use this site or sign up.
          </p>

          <h2>Who We Are</h2>
          <p>
            Arizona Spurs Supporters Club is a 501(c)(7) nonprofit social club based in
            Phoenix, Arizona. We are an officially recognized Tottenham Hotspur supporters club.
            Contact: <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>
          </p>

          <h2>Using This Site</h2>
          <p>
            This site is for informational purposes and club membership. You agree not to:
          </p>
          <ul>
            <li>Use the site for any unlawful purpose</li>
            <li>Attempt to disrupt or damage the site or its infrastructure</li>
            <li>Scrape, crawl, or harvest content without permission</li>
            <li>Impersonate Arizona Spurs, its officers, or its affiliates</li>
          </ul>

          <h2>Membership</h2>
          <p>
            Membership is free and open to all Tottenham Hotspur fans. Members receive the club
            newsletter and are registered with Tottenham Hotspur FC{"'"}s official global
            supporters network. Membership does not guarantee match tickets, merchandise
            discounts, travel, or any benefit beyond club communications and registration
            with the supporters network.
          </p>
          <p>
            Arizona Spurs reserves the right to remove any member who violates these terms or
            the club{"'"}s code of conduct.
          </p>

          <h2>Code of Conduct</h2>
          <p>
            Arizona Spurs is a community for everyone. All members and event attendees are
            expected to treat fellow fans, venue staff, and the public with respect. The
            following are grounds for removal from the club:
          </p>
          <ul>
            <li>Harassment, abuse, or threatening behavior of any kind</li>
            <li>Discrimination based on race, gender, sexuality, religion, disability, or any other characteristic</li>
            <li>Conduct that brings the club or Tottenham Hotspur FC into disrepute</li>
          </ul>
          <p>
            Decisions on membership removal are made by the board. Contact{" "}
            <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a> to report concerns.
          </p>

          <h2>Our Content</h2>
          <p>
            All content on this site — text, design, and graphics — belongs to Arizona Spurs
            Supporters Club unless otherwise noted. Tottenham Hotspur FC trademarks and marks
            belong to Tottenham Hotspur Limited and are used with permission as an officially
            recognized supporters club. Do not reproduce site content without written permission.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This site links to external websites including Fibber Magee{"'"}s Pub and Tottenham
            Hotspur FC. These links are provided for convenience. Arizona Spurs is not
            responsible for the content, privacy practices, or accuracy of any third-party site.
          </p>

          <h2>Events and Watch Parties</h2>
          <p>
            Arizona Spurs events are held at Fibber Magee{"'"}s Pub and are subject to the
            venue{"'"}s own rules and policies. Arizona Spurs is not liable for incidents
            occurring at the venue. Attendance is at your own risk.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Arizona Spurs is a volunteer-run nonprofit club. To the fullest extent permitted
            by law, we are not liable for any direct, indirect, or consequential loss arising
            from use of this site or participation in club activities. This does not limit
            liability where it cannot be excluded under applicable law.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Changes will be posted on this page with an
            updated date. Continued use of the site or membership after changes constitutes
            acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:board@arizonaspurs.com">board@arizonaspurs.com</a>
          </p>

        </div>
      </section>
    </main>
  );
}
