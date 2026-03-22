import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";
import { therapists, aboutFounders } from "@/lib/data";

export default function Specialists() {
  return (
    <SectionWrapper className="bg-white">
      <h2 className="section-heading mb-4 text-center">
        Our Experts
      </h2>
      <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
        {aboutFounders.intro}
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {therapists.map((therapist) => (
          <article
            key={therapist.id}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
          >
            {/* Photo */}
            <div className="relative w-full overflow-hidden bg-gradient-to-b from-primary/10 via-white to-white">
              <div className="relative aspect-[5/6] w-full sm:aspect-[4/5]">
                <Image
                  src={therapist.image}
                  alt={`Portrait of ${therapist.name}`}
                  fill
                  className="object-contain object-[center_top] p-2 sm:p-3 md:p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold font-display text-text-main">
                {therapist.name}
              </h3>
              <p className="text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                {therapist.title}
              </p>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                {therapist.description.split("\n")[0]}
              </p>
              
              {/* Languages */}
              {therapist.languages && (
                <div className="mb-4">
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {therapist.languages.map((lang) => (
                      <span key={lang} className="px-2 py-1 bg-primary-light/30 text-primary text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <Link href={`/booking?therapist=${therapist.id}`}>
                <Button variant="outline" className="w-full">
                  Book with {therapist.name.split(" ").pop()}
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
