import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Symptoms from "@/components/sections/Symptoms";
import Methodology from "@/components/sections/Methodology";
import Specialists from "@/components/sections/Specialists";
import Pricing from "@/components/sections/Pricing";
import Journey from "@/components/sections/Journey";
import Testimonial from "@/components/sections/Testimonial";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Mission from "@/components/sections/Mission";
import Gallery from "@/components/sections/Gallery";
import { siteConfig, contactInfo, images, socialLinks } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Psychologists in Mira Road for Anxiety & Overthinking",
  description:
    "ClearMind Counseling offers online and in-person therapy in Mira Road for anxiety, overthinking, stress, low mood, burnout, relationships, and emotional well-being.",
  path: "/",
  keywords: [
    "psychologists in Mira Road",
    "therapy for anxiety Mira Road",
    "counseling for overthinking",
    "online and in-person therapy",
  ],
});

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "JP Imperia, Tower no. 2, Flat no. 903, Vinay Nagar, Kahimira Road",
    addressLocality: "Mira Road East",
    addressRegion: "Maharashtra",
    postalCode: "401107",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.2817",
    longitude: "72.8529",
  },
  image: images.hero,
  openingHours: "Mo-Sa 09:00-20:00",
  priceRange: "₹₹",
  medicalSpecialty: "Psychiatric",
  sameAs: [socialLinks.instagram, socialLinks.linkedin],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Individual Therapy",
      description:
        "One-on-one therapy sessions for anxiety, depression, stress, and personal challenges.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Group/Family Therapy",
      description:
        "Strengthen relationships and improve family dynamics with professional guidance.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Child & Adolescents Therapy",
      description:
        "Age-appropriate support for young minds navigating emotional challenges.",
    },
  ],
  founder: ["Janhavi More", "Vikas Kamble"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Mission />
      <Specialists />
      <Gallery />
      <Pricing />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
}
