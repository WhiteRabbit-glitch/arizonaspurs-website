import type { NextConfig } from "next";

// React needs eval only in development (for error stacks); production does not.
const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for hydration; GA and Kit need their CDNs
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} *.googletagmanager.com *.convertkit.com f.convertkit.com`,
      "style-src 'self' 'unsafe-inline'",
      // Fonts are self-hosted via next/font — no external font CDN needed
      "font-src 'self'",
      "img-src 'self' data: *.google-analytics.com *.googletagmanager.com",
      // Google Maps embed for venue section
      "frame-src 'self' *.google.com maps.google.com",
      // GA data collection endpoint
      "connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com app.kit.com *.kit.com app.convertkit.com *.convertkit.com",
      "form-action 'self' app.kit.com *.convertkit.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Defaults plus the widths this site really draws at, so the browser is
    // not handed the next size up: 288 and 576 are the footer illustration at
    // 1x and 2x, 480 is the hero figure on phones, 900 is the About photo.
    imageSizes: [32, 48, 64, 96, 128, 256, 288, 384, 480, 576],
    deviceSizes: [640, 750, 828, 900, 1080, 1200, 1920, 2048, 3840],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
