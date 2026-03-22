import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/data";
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
    default: `${siteConfig.name} | Anxiety & Overthinking Therapy in Mira Road`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "anxiety therapy",
    "overthinking",
    "psychologist Mira Road",
    "counseling",
    "mental health",
    "CBT therapy",
    "online therapy India",
    "ClearMind Counseling",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
