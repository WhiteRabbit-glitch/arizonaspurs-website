import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Member Portal | Arizona Spurs",
  robots: { index: false, follow: false },
};

export default async function PortalPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/portal/login");
  }

  return (
    <main id="main-content" className="min-h-[70vh] bg-cream px-6 py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <p className="section-label mb-6 justify-center text-spurs-navy/40">Member Portal</p>
        <h1 className="mb-6 font-limelight text-4xl uppercase tracking-wide text-spurs-navy">
          Welcome Back
        </h1>
        <p className="font-josefin text-base leading-relaxed text-near-black/75">
          Signed in as {user.email}. The full member portal — club documents, member
          perks, and more — is coming soon.
        </p>
        <form action="/portal/logout" method="post" className="mt-8">
          <button
            type="submit"
            className="hero-cta-secondary !border-spurs-navy/30 !text-spurs-navy hover:!border-gold hover:!text-gold"
          >
            Sign Out
          </button>
        </form>
      </div>
    </main>
  );
}
