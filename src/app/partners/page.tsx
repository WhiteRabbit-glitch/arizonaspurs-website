import type { Metadata } from "next";
import PartnersHero from "@/components/sections/PartnersHero";
import PartnersDetail from "@/components/sections/PartnersDetail";

export const metadata: Metadata = {
  title: "Partners | Arizona Spurs",
  description:
    "The organizations Arizona Spurs is proud to stand with — our official watch party venue and parent club.",
  openGraph: {
    title: "Partners | Arizona Spurs",
    description:
      "The organizations Arizona Spurs is proud to stand with — our official watch party venue and parent club.",
  },
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PartnersHero />
      <PartnersDetail />
    </main>
  );
}
