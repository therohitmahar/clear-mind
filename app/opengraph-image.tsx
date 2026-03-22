import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "ClearMind Counseling Open Graph image";

export default function OpenGraphImage() {
  return createOgImage({
    eyebrow: "ClearMind Counseling",
    title: "Compassionate Therapy in Mira Road",
    description:
      "Online and in-person therapy for anxiety, overthinking, stress, burnout, relationships, and emotional well-being.",
  });
}
