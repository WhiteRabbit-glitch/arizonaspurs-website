import type { Metadata, ResolvingMetadata } from "next";
import JoinHero from "@/components/sections/JoinHero";
import MembershipBenefits from "@/components/sections/MembershipBenefits";
import JoinForm from "@/components/sections/JoinForm";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: "Join the Club | Arizona Spurs",
    description:
      "Join Arizona Spurs — an officially recognized Tottenham Hotspur supporters club serving the Phoenix metro area. Free membership, newsletter, and watch parties at Fibbers in Chandler.",
    openGraph: {
      ...(await parent).openGraph,
      title: "Join the Club | Arizona Spurs",
      description:
        "Join Arizona Spurs — free membership, newsletter, and watch parties at Fibbers in Chandler.",
    },
  };
}

export default function JoinPage() {
  return (
    <main id="main-content">
      <JoinHero />
      <MembershipBenefits />
      <JoinForm />
    </main>
  );
}
