import type { Metadata, ResolvingMetadata } from "next";
import PartnersHero from "@/components/sections/PartnersHero";
import PartnersDetail from "@/components/sections/PartnersDetail";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: "Partners | Arizona Spurs",
    description:
      "The organizations Arizona Spurs is proud to stand with — our official watch party venue and parent club.",
    openGraph: {
      ...(await parent).openGraph,
      title: "Partners | Arizona Spurs",
      description:
        "The organizations Arizona Spurs is proud to stand with — our official watch party venue and parent club.",
    },
  };
}

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PartnersHero />
      <PartnersDetail />
    </main>
  );
}
