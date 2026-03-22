import { methodologyItems } from "@/lib/data";
import { ArrowRight, User, Flower2, Waypoints, MessageCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  User,
  Flower2,
  Waypoints,
  MessageCircle,
};

export default function Methodology() {
  return (
    <section className="py-20 bg-background-light border-y border-gray-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Sidebar */}
          <div className="md:w-1/3 md:sticky md:top-24">
            <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block">
              Our Methodology
            </span>
            <h2 className="section-heading mb-6">
              A Structured Path to Inner Calm
            </h2>
            <p className="text-text-muted mb-8 text-lg">
              We don&apos;t just listen; we provide tools. Our therapeutic
              approach is grounded in evidence-based practices tailored to your
              life.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              Learn more about our methods
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards */}
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {methodologyItems.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.title}
                  className={cn(
                    "bg-white p-6 rounded-lg shadow-sm border-l-4",
                    item.borderColor
                  )}
                >
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    {Icon && (
                      <Icon
                        className={cn("h-5 w-5", item.iconColor)}
                        aria-hidden="true"
                      />
                    )}
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
