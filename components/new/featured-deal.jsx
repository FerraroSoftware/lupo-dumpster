import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import dumpsterrental from "../../public/dumpsterrental.png";

/**
 * FeaturedDeal — home-page promo highlighting the 10-yard / 3-day special.
 * Rendered directly after the quote form on the home page.
 */
export function FeaturedDeal() {
  const features = [
    "3-day rental period included",
    "Delivery & pickup included",
    "Up to 2 tons of debris",
    "Driveway-safe placement",
  ];

  return (
    <section className="py-16 md:py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold">
            <Star className="h-4 w-4 fill-red-600 text-red-600" />
            Featured Deal
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-black">
            10 Yard Dumpster — <span className="text-red-600">$275</span>
          </h2>
          <p className="mt-3 text-lg text-zinc-600">
            Our most popular size at a flat, all-in rate. Perfect for garage
            cleanouts, small remodels, and yard debris.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="relative h-64 lg:h-full min-h-[18rem]">
            <Image
              src={dumpsterrental}
              alt="10 Yard Dumpster Rental — $275 for a 3-day rental"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
              Most Popular
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-black">
                $275
              </span>
              <span className="text-lg font-medium text-zinc-500">
                / 3-day rental
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-red-600">
              10 Yard Dumpster
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="w-full sm:flex-1 h-12 bg-red-600 hover:bg-red-700 text-white font-bold"
                asChild
              >
                <Link href="/contact">Reserve This Deal</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:flex-1 h-12 border-zinc-300 text-zinc-900 hover:bg-zinc-50 font-bold"
                asChild
              >
                <Link
                  href="tel:7273176717"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  (727) 317-6717
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDeal;
