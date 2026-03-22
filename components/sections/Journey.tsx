import SectionWrapper from "@/components/layout/SectionWrapper";
import { journeySteps } from "@/lib/data";

export default function Journey() {
  return (
    <SectionWrapper className="bg-white">
      <h2 className="section-heading mb-16 text-center">
        Your Journey to Peace
      </h2>
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {journeySteps.map(({ step, title, description }) => (
            <div
              key={step}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center relative"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 border-4 border-white">
                {step}
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
