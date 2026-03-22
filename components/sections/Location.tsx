import { contactInfo } from "@/lib/data";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 md:order-1 h-[400px] w-full rounded-2xl overflow-hidden shadow-lg relative">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ClearMind Counseling location on Google Maps"
            />
          </div>

          {/* Info */}
          <div className="order-1 md:order-2">
            <h2 className="section-heading mb-6">Visit Our Serene Space</h2>
            <p className="text-text-muted mb-6">
              Located in the heart of Mira Road, our clinic is designed to be a
              sanctuary from the city&apos;s chaos. Soundproofed rooms, natural
              light, and a calming atmosphere await you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-primary mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-text-main">
                    ClearMind Counseling Center
                  </p>
                  <p className="text-sm text-text-muted">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock
                  className="h-5 w-5 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-text-muted">{contactInfo.hours}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-text-muted">{contactInfo.phone}</p>
              </div>
            </div>

            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              Get Directions on Google Maps
              <ExternalLink className="h-4 w-4 ml-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
