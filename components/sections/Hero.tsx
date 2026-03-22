import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { heroFeatures, siteConfig, images } from "@/lib/data";
import {
  Monitor,
  Clock,
  IndianRupee,
  Lock,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Clock,
  IndianRupee,
  Lock,
};

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="ClearMind Counseling therapy space"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-primary-dark/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 w-full py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:gap-8">
          {/* Badge */}
          <span className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-sm sm:px-5 sm:text-sm">
            Mental Health Support
          </span>

          {/* Heading - Match live site */}
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            {siteConfig.heroTagline}
          </h1>

          {/* Subheading - Match live site */}
          <p className="max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg lg:text-xl">
            {siteConfig.heroSubtitle}
          </p>

          {/* CTAs - Match live site */}
          <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:mt-4 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/booking">
              <Button variant="primary" size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                Book a Session
              </Button>
            </Link>
            <Link href="/about#specialists">
              <Button variant="ghost" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
                Find your Match
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-4 border-t border-white/20 pt-6 sm:mt-12 sm:gap-8 sm:pt-8 md:gap-12">
            {heroFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.label}
                  className="flex flex-col gap-2 items-center"
                >
                  {Icon && (
                    <Icon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-center text-xs font-bold text-white sm:text-sm">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Quote - From live site */}
          <div className="mt-6 sm:mt-8">
            <p className="font-display text-xl italic text-white/80 sm:text-2xl">
              &ldquo;{siteConfig.heroCtaText}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
