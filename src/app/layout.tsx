import type { Metadata } from "next";
import { Limelight, Josefin_Sans } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import "./globals.css";

const limelight = Limelight({
  weight: "400",
  variable: "--font-limelight",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  weight: ["400", "600", "700"],
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arizona Spurs | Tottenham Hotspur Supporters Club — Phoenix",
  description:
    "Arizona's official Tottenham Hotspur supporters club. Watch parties at Fibbers in Chandler. Est. 2014.",
  metadataBase: new URL("https://arizonaspurs.com"),
  openGraph: {
    siteName: "Arizona Spurs",
    locale: "en_US",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Arizona Spurs",
  alternateName: "Arizona Spurs Supporters Club",
  description:
    "Arizona's official Tottenham Hotspur supporters club. Watch parties at Fibber Magee's Pub in Chandler since 2014.",
  url: "https://arizonaspurs.com",
  foundingDate: "2014",
  email: "board@arizonaspurs.com",
  sameAs: [
    "https://www.facebook.com/ArizonaSpurs",
    "https://www.instagram.com/officialarizonaspurs/",
    "https://x.com/ArizonaSpurs",
  ],
  location: {
    "@type": "Place",
    name: "Fibber Magee's Pub",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1989 W Elliot Rd",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      postalCode: "85224",
      addressCountry: "US",
    },
  },
  memberOf: {
    "@type": "SportsOrganization",
    name: "Tottenham Hotspur FC",
    url: "https://www.tottenhamhotspur.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${limelight.variable} ${josefinSans.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-near-black antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-spurs-navy focus:text-white focus:font-josefin"
        >
          Skip to main content
        </a>
        <NavBar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
