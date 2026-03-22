import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Resources & Articles",
  description:
    "Expert articles, mindfulness guides, and practical tools to support your mental health journey. Read our latest insights on anxiety, relationships, self-care, and mindfulness.",
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
