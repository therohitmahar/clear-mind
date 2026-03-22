import Link from "next/link";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/lib/data";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-primary text-white text-center px-4">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="mb-6 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          You don&apos;t have to manage this alone.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base opacity-90 sm:mb-10 sm:text-xl">
          Take the first step towards a quieter mind today.
        </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/booking">
              <Button
                variant="secondary"
                size="lg"
                className="w-full hover:scale-105 transition-transform sm:w-auto"
              >
                Book Your Session
              </Button>
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-2 text-center font-medium text-white">
              <span>Or call us:</span>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-base font-bold underline decoration-white/50 hover:decoration-white sm:text-xl"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
