import type { Metadata } from "next";
import Link from "next/link";
import { signup } from "./actions";

export const metadata: Metadata = {
  title: "Create Account | Arizona Spurs",
  description: "Create your Arizona Spurs member account.",
  robots: { index: false, follow: false },
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const { error, success } = await searchParams;

  if (success) {
    return (
      <main id="main-content" className="flex min-h-[70vh] items-center justify-center bg-spurs-navy px-6 py-24">
        <div className="w-full max-w-sm text-center">
          <p className="section-label mb-6 justify-center text-white/50">Almost There</p>
          <h1 className="mb-6 font-limelight text-4xl uppercase tracking-wide text-white">
            Check Your Email
          </h1>
          <p className="font-josefin text-base leading-relaxed text-white/70">
            We sent a confirmation link to your email. Click it to activate your
            account, then sign in below.
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
        <h1 className="mb-8 text-center font-limelight text-4xl uppercase tracking-wide text-white">
          Create Account
        </h1>

        <form action={signup} className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="join-label !text-white/70">
              Email
            </label>
            <input id="email" name="email" type="email" required className="join-input" />
          </div>
          <div>
            <label htmlFor="password" className="join-label !text-white/70">
              Password
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
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center font-josefin text-sm text-white/60">
          Already have an account?{" "}
          <Link href="/portal/login" className="text-gold underline underline-offset-2 hover:text-white">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
