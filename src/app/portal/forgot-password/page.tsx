import type { Metadata } from "next";
import Link from "next/link";
import { requestPasswordReset } from "./actions";

export const metadata: Metadata = {
  title: "Forgot Password | Arizona Spurs",
  description: "Reset your Arizona Spurs member password.",
  robots: { index: false, follow: false },
};

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const { success, error } = await searchParams;

  if (success) {
    return (
      <main id="main-content" className="flex min-h-[70vh] items-center justify-center bg-spurs-navy px-6 py-24">
        <div className="w-full max-w-sm text-center">
          <p className="section-label mb-6 justify-center text-white/50">Members Only</p>
          <h1 className="mb-6 font-limelight text-4xl uppercase tracking-wide text-white">
            Check Your Email
          </h1>
          <p className="font-josefin text-base leading-relaxed text-white/70">
            If an account exists for that email, we&apos;ve sent a link to
            reset your password.
          </p>
          <Link href="/portal/login" className="hero-cta-primary mt-8 inline-flex justify-center">
            Back to Sign In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="flex min-h-[70vh] items-center justify-center bg-spurs-navy px-6 py-24">
      <div className="w-full max-w-sm">
        <p className="section-label mb-6 justify-center text-white/50">Members Only</p>
        <h1 className="mb-4 text-center font-limelight text-4xl uppercase tracking-wide text-white">
          Reset Password
        </h1>
        <p className="mb-8 text-center font-josefin text-sm text-white/60">
          Enter your email and we&apos;ll send you a link to reset your
          password.
        </p>

        <form action={requestPasswordReset} className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="join-label !text-white/70">
              Email
            </label>
            <input id="email" name="email" type="email" required className="join-input" />
          </div>

          {error && (
            <p role="alert" className="font-josefin text-sm text-red-300">
              {error}
            </p>
          )}

          <button type="submit" className="hero-cta-primary mt-2 justify-center">
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center font-josefin text-sm text-white/60">
          <Link href="/portal/login" className="text-gold underline underline-offset-2 hover:text-white">
            Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
