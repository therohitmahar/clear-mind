import SectionWrapper from "@/components/layout/SectionWrapper";
import { symptoms } from "@/lib/data";
import { Brain, Heart, Cloud, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Brain, Heart, Cloud };

export default function Symptoms() {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-heading mb-4">
          When your thoughts feel like they never stop
        </h2>
        <p className="section-subheading">
          Anxiety manifests differently for everyone. Do you recognize these
          patterns in your daily life?
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {symptoms.map((symptom) => {
          const Icon = iconMap[symptom.icon];
          return (
            <div
              key={symptom.title}
              className="bg-background-light p-8 rounded-xl border border-gray-100 hover:border-primary/30 transition-all shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/50 transition-colors">
                {Icon && (
                  <Icon
                    className="h-5 w-5 text-red-800"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">
                {symptom.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {symptom.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
