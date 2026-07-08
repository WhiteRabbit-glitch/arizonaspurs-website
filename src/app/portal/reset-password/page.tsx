import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updatePassword } from "./actions";

export const metadata: Metadata = {
  title: "Reset Password | Arizona Spurs",
  robots: { index: false, follow: false },
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      `/portal/forgot-password?error=${encodeURIComponent(
        "That reset link is invalid or has expired. Request a new one below."
      )}`
    );
  }

  return (
    <main id="main-content" className="flex min-h-[70vh] items-center justify-center bg-spurs-navy px-6 py-24">
      <div className="w-full max-w-sm">
        <p className="section-label mb-6 justify-center text-white/50">Members Only</p>
        <h1 className="mb-8 text-center font-limelight text-4xl uppercase tracking-wide text-white">
          Set New Password
        </h1>

        <form action={updatePassword} className="flex flex-col gap-5">
          <div>
            <label htmlFor="password" className="join-label !text-white/70">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="join-input"
            />
          </div>

          {error && (
            <p role="alert" className="font-josefin text-sm text-red-300">
              {error}
            </p>
          )}

          <button type="submit" className="hero-cta-primary mt-2 justify-center">
            Update Password
          </button>
        </form>
      </div>
    </main>
  );
}
