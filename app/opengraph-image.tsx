import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/data";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "ClearMind Counseling Open Graph image";

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Mental Health Support",
    title: siteConfig.heroTagline,
    description: siteConfig.heroSubtitle,
  });
}
