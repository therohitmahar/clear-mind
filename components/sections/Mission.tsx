"use client";

import Link from "next/link";
import { missionStatement, inPersonSessions } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";
import { MapPin, Calendar } from "lucide-react";

export default function Mission() {
  return (
    <>
      {/* Mission Section */}
      <SectionWrapper className="bg-primary-light/30">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading mb-6">{missionStatement.title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-lg text-text-muted leading-relaxed whitespace-pre-line">
            {missionStatement.description}
          </p>
        </div>
      </SectionWrapper>

      {/* In-Person Sessions Banner */}
      <SectionWrapper className="bg-white">
        <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main mb-1">
                Now available in-person
              </h3>
              <p className="text-text-muted">
                {inPersonSessions.announcement}
              </p>
            </div>
          </div>
          <Link href="/booking?session=in-person" className="w-full md:w-auto">
            <Button
              variant="primary"
              className="w-full whitespace-nowrap bg-orange-500 hover:bg-orange-600 md:w-auto"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Visit
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
