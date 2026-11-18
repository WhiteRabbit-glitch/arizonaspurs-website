import type { Metadata, ResolvingMetadata } from "next";
import FAQHero from "@/components/sections/FAQHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQContact from "@/components/sections/FAQContact";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: "FAQ | Arizona Spurs",
    description:
      "Answers to common questions about Arizona Spurs — watch parties at Fibbers, membership, match tickets, and more.",
    openGraph: {
      ...(await parent).openGraph,
      title: "FAQ | Arizona Spurs",
      description:
        "Answers to common questions about Arizona Spurs watch parties, membership, and match tickets.",
    },
  };
}

export default function FAQPage() {
  return (
    <main id="main-content">
      <FAQHero />
      <FAQAccordion />
      <FAQContact />
    </main>
  );
}
