import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Therapy Session",
  description:
    "Request an online or in-person session with ClearMind Counseling. Choose your therapist, preferred date, and share your details securely.",
  path: "/booking",
  keywords: [
    "book therapist Mira Road",
    "online therapy booking",
    "in-person therapy booking",
  ],
});

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
