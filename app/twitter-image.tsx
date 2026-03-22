import {
  createHomeOgImage,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "ClearMind Counseling Twitter image";

export default function TwitterImage() {
  return createHomeOgImage();
}
