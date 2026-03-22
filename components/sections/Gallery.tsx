import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { images } from "@/lib/data";

export default function Gallery() {
  return (
    <SectionWrapper className="bg-background-light">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {images.gallery.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden group"
          >
            <Image
              src={src}
              alt={`ClearMind Counseling gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
