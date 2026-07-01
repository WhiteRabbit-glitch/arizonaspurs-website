import type { Metadata } from "next";
import JoinHero from "@/components/sections/JoinHero";
import MembershipBenefits from "@/components/sections/MembershipBenefits";
import JoinForm from "@/components/sections/JoinForm";

export const metadata: Metadata = {
  title: "Join the Club | Arizona Spurs",
  description:
    "Join Arizona Spurs — the official Tottenham Hotspur supporters club in Phoenix. Free membership, newsletter, and watch parties at Fibbers in Chandler.",
  openGraph: {
    title: "Join the Club | Arizona Spurs",
    description:
      "Join Arizona Spurs — free membership, newsletter, and watch parties at Fibbers in Chandler.",
  },
};

export default function JoinPage() {
  return (
    <main id="main-content">
      <JoinHero />
      <MembershipBenefits />
      <JoinForm />
    </main>
  );
}
