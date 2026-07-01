import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Member portal is Phase 2 — not indexed, not in nav
        disallow: ["/members", "/api/"],
      },
    ],
    sitemap: "https://arizonaspurs.com/sitemap.xml",
  };
}
