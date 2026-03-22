import Link from "next/link";
import Button from "@/components/ui/Button";
import { pricingInfo } from "@/lib/data";
import { CheckCircle, Ticket } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="section-container">
        <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:flex-row">
          {/* Details */}
          <div className="p-6 sm:p-8 md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 font-display">
              Transparent Pricing
            </h2>
            <p className="text-text-muted mb-6">
              Investing in your mental health is investing in your future. We
              keep our rates accessible without compromising on quality care.
            </p>

            <div className="mb-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-3xl font-bold text-text-main">
                ₹{pricingInfo.currentPrice}
              </span>
              <span className="text-xl text-gray-400 line-through">
                ₹{pricingInfo.originalPrice}
              </span>
              <span className="bg-secondary/30 text-red-800 text-xs font-bold px-2 py-1 rounded">
                {pricingInfo.discountPercent}% OFF
              </span>
            </div>
            <p className="text-sm text-text-muted mb-6">
              Per {pricingInfo.sessionDuration}
            </p>

            <ul className="space-y-2 mb-8">
              {pricingInfo.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-text-main"
                >
                  <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/booking">
              <Button className="w-full sm:w-auto">
                Book Your First Session
              </Button>
            </Link>
          </div>

          {/* Promo Sidebar */}
          <div className="flex flex-col items-center justify-center border-t border-primary/10 bg-primary/20 p-6 text-center sm:p-8 md:w-1/3 md:border-l md:border-t-0">
            <Ticket className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
            <h3 className="text-lg font-bold text-text-main mb-2">
              Special Offer
            </h3>
            <p className="text-sm text-text-muted mb-4">
              Use code for first session discount
            </p>
            <div className="bg-white border-2 border-dashed border-primary px-4 py-2 rounded-lg text-primary font-mono font-bold text-lg select-all cursor-pointer hover:bg-gray-50">
              {pricingInfo.promoCode}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
