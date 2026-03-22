import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Lock, BrainCircuit, type LucideIcon } from "lucide-react";
import { guidingPrinciples, clinicPhotos, aboutStats, aboutFounders, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ClearMind Counseling — our journey, values, and why we created a sanctuary for mental well-being in Mira Road.",
};

const iconMap: Record<string, LucideIcon> = { Heart, Lock, BrainCircuit };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0 bg-primary-light/30 -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Established {siteConfig.established}
          </span>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-text-main sm:text-5xl lg:text-6xl">
            About <br />
            <span className="text-primary italic">ClearMind Counseling</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl">
            {siteConfig.heroTagline}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image with tilt */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1" />
              <div className="relative rounded-xl shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <Image
                  src={clinicPhotos[0]?.src || "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1920"}
                  alt="ClearMind Counseling therapy space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div>
                <h2 className="section-heading mb-6">
                  A counseling practice built on empathy, structure, and trust
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-8" />
              </div>
              <div className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                <p>{aboutFounders.intro}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-4 sm:grid-cols-4">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-3xl font-display font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="text-sm text-text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="bg-primary-light/30 py-16 sm:py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading mb-4">Guiding Principles</h2>
            <p className="section-subheading">
              The core values that define every interaction at ClearMind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guidingPrinciples.map((principle) => {
              const Icon = iconMap[principle.icon];
              return (
                <div
                  key={principle.title}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent"
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center mb-6",
                      principle.iconBg
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn("h-7 w-7", principle.iconColor)}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-main mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="overflow-hidden bg-white py-16 sm:py-20">
        <div className="section-container">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-heading mb-4">Our Serene Space</h2>
              <p className="text-text-muted">
                Located in the heart of Mira Road, our clinic is designed to be a
                sanctuary from the city&apos;s chaos. Soundproofed rooms, natural
                light, and calming atmosphere await you.
              </p>
            </div>
          </div>
          <div className="grid h-auto grid-cols-1 gap-4 md:h-[500px] md:grid-cols-12">
            {/* Main photo */}
            <div className="md:col-span-8 h-64 md:h-full relative overflow-hidden rounded-2xl group">
              <Image
                src={clinicPhotos[0].src}
                alt={clinicPhotos[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">
                  {clinicPhotos[0].label}
                </span>
              </div>
            </div>

            {/* Side photos */}
            <div className="md:col-span-4 flex flex-col gap-4 h-full">
              {clinicPhotos.slice(1).map((photo) => (
                <div
                  key={photo.label}
                  className="h-64 md:h-1/2 relative overflow-hidden rounded-2xl group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
