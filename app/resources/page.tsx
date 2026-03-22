import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = createPageMetadata({
  title: "Resources & Articles",
  description:
    "Expert articles, mindfulness guides, and practical tools to support your mental health journey. Read our latest insights on anxiety, relationships, self-care, and mindfulness.",
  path: "/resources",
  keywords: [
    "mental health articles",
    "anxiety resources",
    "mindfulness articles",
    "relationship counseling blog",
  ],
});

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
