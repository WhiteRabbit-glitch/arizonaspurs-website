import type { Metadata } from "next";
import Link from "next/link";
import { login } from "./actions";

export const metadata: Metadata = {
  title: "Member Login | Arizona Spurs",
  description: "Sign in to the Arizona Spurs member portal.",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main id="main-content" className="flex min-h-[70vh] items-center justify-center bg-spurs-navy px-6 py-24">
      <div className="w-full max-w-sm">
        <p className="section-label mb-6 justify-center text-white/50">Members Only</p>
        <h1 className="mb-8 text-center font-limelight text-4xl uppercase tracking-wide text-white">
          Sign In
        </h1>

        <form action={login} className="flex flex-col gap-5">
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
            <input id="password" name="password" type="password" required className="join-input" />
          </div>

          {error && (
            <p role="alert" className="font-josefin text-sm text-red-300">
              {error}
            </p>
          )}

          <button type="submit" className="hero-cta-primary mt-2 justify-center">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center font-josefin text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link href="/portal/signup" className="text-gold underline underline-offset-2 hover:text-white">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
