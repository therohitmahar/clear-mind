import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const defaultSeoKeywords = [
  "ClearMind Counseling",
  "psychologist Mira Road",
  "therapy in Mira Road",
  "online therapy India",
  "in-person counseling Mira Road",
  "anxiety therapy",
  "overthinking therapy",
  "stress counseling",
  "relationship counseling",
  "mental health support",
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, siteConfig.url).toString();
}

export function toIsoDate(date?: string) {
  if (!date) {
    return undefined;
  }

  const parsedDate = new Date(date);

  return Number.isNaN(parsedDate.getTime())
    ? undefined
    : parsedDate.toISOString();
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  imagePath?: string;
  twitterImagePath?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  imagePath = "/opengraph-image",
  twitterImagePath = "/twitter-image",
  type = "website",
  noIndex = false,
  publishedTime,
  authors,
  section,
  tags,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const mergedKeywords = Array.from(
    new Set([...defaultSeoKeywords, ...keywords])
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph:
      type === "article"
        ? {
            title,
            description,
            url: absoluteUrl(canonicalPath),
            siteName: siteConfig.name,
            locale: "en_IN",
            type: "article",
            publishedTime,
            authors,
            section,
            tags,
            images: [
              {
                url: absoluteUrl(imagePath),
                width: 1200,
                height: 630,
                alt: `${title} | ${siteConfig.name}`,
              },
            ],
          }
        : {
            title,
            description,
            url: absoluteUrl(canonicalPath),
            siteName: siteConfig.name,
            locale: "en_IN",
            type: "website",
            images: [
              {
                url: absoluteUrl(imagePath),
                width: 1200,
                height: 630,
                alt: `${title} | ${siteConfig.name}`,
              },
            ],
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(twitterImagePath)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
