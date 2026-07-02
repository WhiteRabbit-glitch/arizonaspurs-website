import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { FileText } from "lucide-react";
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

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, tier")
    .eq("id", user.id)
    .single();

  const isOfficer = profile?.role === "officer";
  const isPaid = profile?.tier === "paid";
  // Officers get member-tier access automatically, on top of officer-only tools.
  const hasMemberAccess = isPaid || isOfficer;

  // Signed URL only succeeds if the storage RLS policy allows this user —
  // paid members and officers, per the "documents" bucket policy.
  const bylawsUrl = hasMemberAccess
    ? (
        await supabase.storage.from("documents").createSignedUrl("bylaws.pdf", 60 * 5)
      ).data?.signedUrl
    : null;

  return (
    <main id="main-content" className="min-h-[70vh] bg-cream px-6 py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <p className="section-label mb-6 justify-center text-spurs-navy/40">
          {isOfficer ? "Officer Portal" : "Member Portal"}
        </p>
        <h1 className="mb-6 font-limelight text-4xl uppercase tracking-wide text-spurs-navy">
          {hasMemberAccess ? "Welcome Back" : "Almost There"}
        </h1>

        {hasMemberAccess ? (
          <p className="font-josefin text-base leading-relaxed text-near-black/75">
            Signed in as {user.email}. Thanks for being a paid member — more
            member perks are coming soon.
          </p>
        ) : (
          <p className="font-josefin text-base leading-relaxed text-near-black/75">
            Signed in as {user.email}. Paid membership isn&apos;t live yet —
            once it launches, your member perks will show up here automatically.
          </p>
        )}

        {bylawsUrl && (
          <a
            href={bylawsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary mt-8 inline-flex items-center gap-2 !border-spurs-navy/30 !text-spurs-navy hover:!border-gold hover:!text-gold"
          >
            <FileText size={16} aria-hidden="true" />
            Club Bylaws (PDF)
          </a>
        )}

        {isOfficer && (
          <p className="mt-6 border-t border-spurs-navy/10 pt-6 font-josefin text-base leading-relaxed text-near-black/75">
            Officer tools — board documents, member management — are coming soon.
          </p>
        )}

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
