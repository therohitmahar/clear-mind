import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";
import LayoutWrapper from "./LayoutWrapper";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Psychologists in Mira Road for Anxiety, Overthinking & Therapy",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  category: "healthcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Psychologists in Mira Road for Anxiety, Overthinking & Therapy",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image?v=home-og-v2"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologists in Mira Road for Anxiety, Overthinking & Therapy",
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image?v=home-og-v2")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="font-body">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
