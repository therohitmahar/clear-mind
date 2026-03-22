"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading mb-12">What Our Clients Say</h2>
        
        <div className="relative">
          <Quote
            className="h-14 w-14 text-primary/40 mx-auto mb-6"
            aria-hidden="true"
          />
          
          <div className="min-h-[200px] flex items-center justify-center">
            <h3 className="text-xl md:text-2xl font-display font-medium italic text-text-main mb-8 leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </h3>
          </div>
          
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < current.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          
          <p className="text-sm text-text-muted">{current.name}</p>
          
          {/* Navigation */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-text-muted" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      index === currentIndex ? "bg-primary" : "bg-gray-300"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-text-muted" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
