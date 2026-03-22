import {
  createHomeOgImage,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "ClearMind Counseling Open Graph image";

export default function OpenGraphImage() {
  return createHomeOgImage();
}
