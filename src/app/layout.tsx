import type { Metadata } from "next";
import { Limelight, Poiret_One } from "next/font/google";
import "./globals.css";

const limelight = Limelight({
  weight: "400",
  variable: "--font-limelight",
  subsets: ["latin"],
});

const poiretOne = Poiret_One({
  weight: "400",
  variable: "--font-poiret",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${limelight.variable} ${poiretOne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-near-black antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-spurs-navy focus:text-white focus:font-poiret"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
