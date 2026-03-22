import { blogArticles } from "@/lib/data";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

interface ArticleImageProps {
  params: Promise<{ slug: string }>;
}

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "ClearMind Counseling article Twitter image";

export default async function ArticleTwitterImage({
  params,
}: ArticleImageProps) {
  const { slug } = await params;
  const article = blogArticles.find((entry) => entry.slug === slug);

  return createOgImage({
    eyebrow: article?.category ?? "ClearMind Resources",
    title: article?.title ?? "ClearMind Counseling Resources",
    description:
      article?.excerpt ??
      "Practical articles and therapist-led insights for anxiety, relationships, self-care, and mental well-being.",
    badge: article?.date ?? "Resources & Articles",
  });
}
