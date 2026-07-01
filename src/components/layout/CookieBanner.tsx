"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSENT_KEY = "az-spurs-cookie-consent";

type ConsentState = {
  statistics: boolean;
  marketing: boolean;
};

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    // Migrate from old accept/decline string format
    if (raw === "accepted") return { statistics: true, marketing: true };
    if (raw === "declined") return { statistics: false, marketing: false };
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [draft, setDraft] = useState<ConsentState>({ statistics: false, marketing: false });

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      // Reading localStorage must wait until after hydration to avoid an SSR/client mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
    } else {
      const t = setTimeout(() => setBannerVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function acceptAll() {
    const state = { statistics: true, marketing: true };
    writeConsent(state);
    setConsent(state);
    setBannerVisible(false);
    setShowPrefs(false);
  }

  function acceptNecessary() {
    const state = { statistics: false, marketing: false };
    writeConsent(state);
    setConsent(state);
    setBannerVisible(false);
    setShowPrefs(false);
  }

  function savePreferences() {
    writeConsent(draft);
    setConsent(draft);
    setBannerVisible(false);
    setShowPrefs(false);
  }

  function togglePref(key: keyof ConsentState) {
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Google Analytics — loads only after statistics consent */}
      {consent?.statistics && gaId && (
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
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-deep-navy"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-5">

            {/* Main row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p
                id="cookie-banner-desc"
                className="max-w-[600px] font-josefin text-sm leading-relaxed text-white/70"
              >
                We use cookies for analytics and to improve your experience. See our{" "}
                <Link
                  href="/cookies"
                  className="text-gold underline underline-offset-2 transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>{" "}
                for details.
              </p>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowPrefs((p) => !p)}
                  aria-expanded={showPrefs}
                  aria-controls="cookie-prefs-panel"
                  className="min-h-[44px] px-4 font-josefin text-sm font-600 uppercase tracking-[0.08em] text-white/50 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  Manage
                </button>
                <button
                  onClick={acceptNecessary}
                  className="min-h-[44px] px-4 font-josefin text-sm font-600 uppercase tracking-[0.08em] text-white/50 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  Necessary Only
                </button>
                <button onClick={acceptAll} className="nav-cta">
                  Accept All
                </button>
              </div>
            </div>

            {/* Preferences panel */}
            {showPrefs && (
              <div
                id="cookie-prefs-panel"
                className="mt-5 border-t border-white/10 pt-5"
              >
                <div className="flex flex-col gap-5">

                  {/* Necessary — always on */}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-josefin text-sm font-600 uppercase tracking-[0.08em] text-white">
                        Necessary
                      </p>
                      <p className="mt-1 font-josefin text-xs leading-relaxed text-white/50">
                        Required for the site to function. Cannot be disabled.
                      </p>
                    </div>
                    <div
                      role="switch"
                      aria-checked="true"
                      aria-label="Necessary cookies — always on"
                      className="consent-toggle consent-toggle--on shrink-0"
                    />
                  </div>

                  {/* Statistics */}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-josefin text-sm font-600 uppercase tracking-[0.08em] text-white">
                        Statistics
                      </p>
                      <p className="mt-1 font-josefin text-xs leading-relaxed text-white/50">
                        Google Analytics — anonymized data on how the site is used.
                      </p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={draft.statistics}
                      onClick={() => togglePref("statistics")}
                      aria-label="Statistics cookies"
                      className={`consent-toggle shrink-0 ${draft.statistics ? "consent-toggle--on" : ""}`}
                    >
                      <span className="sr-only">{draft.statistics ? "On" : "Off"}</span>
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-josefin text-sm font-600 uppercase tracking-[0.08em] text-white">
                        Marketing
                      </p>
                      <p className="mt-1 font-josefin text-xs leading-relaxed text-white/50">
                        Kit (ConvertKit) — tracks form interactions and email engagement for our newsletter.
                      </p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={draft.marketing}
                      onClick={() => togglePref("marketing")}
                      aria-label="Marketing cookies"
                      className={`consent-toggle shrink-0 ${draft.marketing ? "consent-toggle--on" : ""}`}
                    >
                      <span className="sr-only">{draft.marketing ? "On" : "Off"}</span>
                    </button>
                  </div>

                </div>

                <button
                  onClick={savePreferences}
                  className="hero-cta-primary mt-6"
                >
                  Save Preferences
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
