import { Check, DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingTransparency({
  city = "New Port Richey",
  tiers,
  rentalDays = 7,
}) {
  const defaultTiers = [
    {
      size: "10 Yard",
      tonnage: "2 tons",
      bestFor: "Garage cleanouts, small remodels, yard debris",
      popular: false,
    },
    {
      size: "15 Yard",
      tonnage: "3 tons",
      bestFor: "Kitchen remodels, flooring removal, basement cleanouts",
      popular: true,
    },
    {
      size: "20 Yard",
      tonnage: "4 tons",
      bestFor: "Full home renovations, roofing jobs, large cleanouts",
      popular: false,
    },
  ];

  const whatIncluded = [
    `${rentalDays}-day rental period`,
    "Delivery & pickup within service area",
    "Disposal & dump fees (up to stated tonnage)",
    "Driveway-safe placement on protective boards",
    "Flexible pickup — call when you're done",
  ];

  const items = tiers || defaultTiers;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Flat-Rate, Transparent Quotes
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-black">
            {city} Dumpster Rental — Pick the Right Size, Get a Free Quote
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            No hidden fees, no per-pound ambushes at pickup. Every {city}{" "}
            rental is flat-rate and includes everything below. Call or request
            a quote online and we&apos;ll confirm your total up front — the
            only way it goes up is if you exceed the included tonnage or keep
            the dumpster past {rentalDays} days, and we tell you that before
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg ${
                tier.popular
                  ? "bg-black text-white ring-2 ring-red-600"
                  : "bg-zinc-50"
              }`}
            >
              {tier.popular && (
                <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">
                  Most Popular
                </div>
              )}
              <h3
                className={`text-2xl font-bold ${
                  tier.popular ? "text-white" : "text-zinc-900"
                }`}
              >
                {tier.size} Dumpster
              </h3>
              <div className="mt-3 flex items-baseline">
                <span
                  className={`text-2xl font-bold uppercase tracking-wide ${
                    tier.popular ? "text-red-500" : "text-red-600"
                  }`}
                >
                  Flat-Rate Quote
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${
                  tier.popular ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                Includes {tier.tonnage} &amp; {rentalDays}-day rental
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  tier.popular ? "text-zinc-200" : "text-zinc-700"
                }`}
              >
                <strong>Best for:</strong> {tier.bestFor}
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className={`inline-flex items-center text-sm font-semibold ${
                    tier.popular
                      ? "text-red-400 hover:text-red-300"
                      : "text-red-600 hover:text-red-700"
                  }`}
                >
                  Request a Quote &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 rounded-lg p-8 border border-zinc-100">
          <div className="flex items-center mb-4">
            <DollarSign className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-zinc-900">
              What&apos;s Included in Every {city} Rental
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whatIncluded.map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              asChild
            >
              <Link href="/contact">Get Your {city} Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTransparency;
