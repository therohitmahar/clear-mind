import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, type LucideIcon, Users, Baby, Briefcase } from "lucide-react";
import { services, servicesFaqItems, images } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = createPageMetadata({
  title: "Our Therapy Services",
  description:
    "Comprehensive mental health support: Individual Therapy, Group/Family Therapy, Child & Adolescents Therapy, and Corporate Events.",
  path: "/services",
  keywords: [
    "individual therapy Mira Road",
    "family therapy Mira Road",
    "child therapy Mira Road",
    "corporate mental health workshops",
  ],
});

const serviceIconMap: Record<string, LucideIcon> = {
  Users,
  Baby,
  Briefcase,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero - Match live site simplicity */}
      <header className="relative overflow-hidden bg-primary-dark py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero}
            alt="ClearMind Counseling"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            Therapy Services
          </span>
          <h1 className="mb-6 font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            Book your time of calm today
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            We offer a safe space to navigate life&apos;s challenges. Whether
            you&apos;re dealing with anxiety, depression, or relationship issues,
            our specialized therapies are tailored to your unique journey.
          </p>
          <div className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-sm">
            Now available in-person
          </div>
        </div>
      </header>

      {/* Services - Simplified to match live site */}
      <section className="bg-background-light py-16 sm:py-20">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="section-heading mb-4">Our Services</h2>
            <p className="section-subheading">
              Support for individuals, families, children, and teams, delivered
              with a calm and practical therapeutic approach.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-6",
                      service.iconBg
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn("h-5 w-5", service.iconColor)}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-text-main mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <SectionWrapper className="bg-white">
        <div className="text-center max-w-3xl mx-auto py-8">
          <p className="font-display text-2xl md:text-3xl italic text-text-main mb-4">
            &ldquo;You didn&apos;t come this far to stop.&rdquo;
          </p>
          <p className="text-text-muted">
            Take the first step towards a calmer, clearer mind.
          </p>
        </div>
      </SectionWrapper>

      <FAQ />
      <CTA />
    </>
  );
}
