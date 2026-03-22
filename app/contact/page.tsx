import type { Metadata } from "next";
import { contactInfo, connectionModes } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { MapPin, Clock, Phone, Mail, ExternalLink, Armchair, Video, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactForm from "./ContactForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with ClearMind Counseling. Book a session, visit our clinic in Mira Road, or reach us online. We're here to help.",
  path: "/contact",
  keywords: [
    "contact ClearMind Counseling",
    "therapy clinic Mira Road contact",
    "book therapy session Mira Road",
  ],
});

const connectionIconMap: Record<string, LucideIcon> = { Armchair, Video };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden bg-primary-light/30 py-16 md:py-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6">
            Let&apos;s plan your next session
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Taking the first step is often the hardest. Whether you have
            questions about our therapy process or are ready to schedule a
            session, we are here to listen.
          </p>
        </div>
      </header>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Info Cards + Map */}
            <div className="order-2 space-y-12 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Address */}
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-main mb-2">
                    Visit Our Clinic
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>

                {/* Hours */}
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-main mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {contactInfo.hoursExtended.weekdays}
                    <br />
                    Sunday: By appointment
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-main mb-2">
                    Call Us
                  </h3>
                  <p className="text-sm text-text-muted">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-main mb-2">
                    Email Us
                  </h3>
                  <p className="text-sm text-text-muted break-all">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                <div className="h-80 w-full overflow-hidden rounded-xl relative">
                  <iframe
                    src={contactInfo.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of ClearMind Counseling location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-4 flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-main text-sm">
                      Getting Here
                    </h4>
                    <p className="text-xs text-text-muted mt-1">
                      Our clinic is designed to be a sanctuary from the
                      city&apos;s chaos. Soundproofed rooms, natural light, and a
                      calming atmosphere await you.
                    </p>
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-xs font-medium mt-2 inline-flex items-center hover:underline"
                    >
                      Get Directions on Google Maps
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative z-10">
                <h2 className="font-display text-3xl font-bold text-text-main mb-2">
                  Send a Message
                </h2>
                <p className="text-text-muted mb-8 text-sm">
                  Fill out the form below and our care coordinator will get back
                  to you within 24 hours. If you prefer, you can also call or
                  email directly.
                </p>
                <ContactForm />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ways to Connect</h2>
            <p className="mt-4 text-text-muted">
              Choose the setting where you feel most comfortable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {connectionModes.map((mode) => {
              const Icon = connectionIconMap[mode.icon];
              return (
                <div
                  key={mode.title}
                  className="flex items-start gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center",
                      mode.iconBg
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn("h-8 w-8", mode.iconColor)}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-text-main mb-2">
                      {mode.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {mode.description}
                    </p>
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        mode.badgeBg,
                        mode.badgeText
                      )}
                    >
                      {mode.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
