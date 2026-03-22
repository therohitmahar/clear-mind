import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/data";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "ClearMind Counseling Twitter image";

export default function TwitterImage() {
  return createOgImage({
    eyebrow: "Mental Health Support",
    title: siteConfig.heroTagline,
    description: siteConfig.heroSubtitle,
  });
}
