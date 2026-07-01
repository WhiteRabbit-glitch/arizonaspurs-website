import type { Metadata } from "next";
import NewsletterHero from "@/components/sections/NewsletterHero";
import NewsletterSubscribe from "@/components/sections/NewsletterSubscribe";
import NewsletterArchive from "@/components/sections/NewsletterArchive";

export const metadata: Metadata = {
  title: "Newsletter | Arizona Spurs",
  description:
    "Subscribe to the Arizona Spurs newsletter — match previews, watch party announcements, and club news. Plus browse past issues.",
  openGraph: {
    title: "Newsletter | Arizona Spurs",
    description:
      "Match previews, watch party announcements, and club news from Arizona Spurs.",
  },
};

export default function NewsletterPage() {
  return (
    <main id="main-content">
      <NewsletterHero />
      <NewsletterSubscribe />
      <NewsletterArchive />
    </main>
  );
}
