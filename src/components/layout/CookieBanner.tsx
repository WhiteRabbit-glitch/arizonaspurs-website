"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSENT_KEY = "az-spurs-cookie-consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setConsent(stored);
    if (!stored) {
      const t = setTimeout(() => setBannerVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setBannerVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setBannerVisible(false);
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Google Analytics — loads only after explicit consent */}
      {consent === "accepted" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Cookie consent banner */}
      {bannerVisible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie consent"
          aria-describedby="cookie-banner-desc"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-deep-navy px-6 py-5"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              id="cookie-banner-desc"
              className="max-w-[640px] font-josefin text-sm leading-relaxed text-white/70"
            >
              We use cookies for analytics (Google Analytics and Kit). See our{" "}
              <Link
                href="/cookies"
                className="text-gold underline underline-offset-2 transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={handleDecline}
                className="min-h-[44px] px-4 font-josefin text-sm font-600 uppercase tracking-[0.08em] text-white/50 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="nav-cta"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
