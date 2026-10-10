import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Arizona Spurs",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="bg-spurs-navy px-6 pb-28 pt-16 text-center sm:pt-28">
        <div className="mx-auto max-w-[800px]">
          <h1 className="font-limelight text-5xl uppercase leading-tight tracking-wide text-white md:text-6xl">
            Not Found
          </h1>
          <div aria-hidden="true" className="mx-auto my-8 h-px w-24 bg-gold" />
          <p className="mb-10 font-josefin text-lg leading-relaxed tracking-wide text-white/80">
            That page doesn&apos;t exist or has moved.
          </p>
          <Link href="/" className="hero-cta-primary">
            Go to the homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
