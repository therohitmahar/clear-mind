"use client";

import { useState } from "react";
import { servicesFaqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesFAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" role="list">
      {servicesFaqItems.map((item, index) => (
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
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-5 pb-5 text-text-muted leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
