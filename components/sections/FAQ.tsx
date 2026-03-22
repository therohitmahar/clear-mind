"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4" role="list">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className={cn(
                "bg-white rounded-lg border overflow-hidden transition-all",
                openIndex === index
                  ? "border-primary/30 ring-2 ring-primary/20"
                  : "border-gray-200"
              )}
              role="listitem"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left font-bold text-text-main"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-5 pb-5 text-text-muted leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
