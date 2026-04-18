import { PhoneCall, MapPin, Clock, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export function IntroSection({
  city = "New Port Richey",
  county = "Pasco County",
  phone = "(727) 317-6717",
  phoneHref = "tel:+17273176717",
  topNeighborhoods = [
    "Gulf Harbors",
    "Seven Springs",
    "Trinity",
    "Beacon Square",
    "Jasmine Lakes",
  ],
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="prose prose-zinc max-w-none">
          <p className="text-xl leading-8 text-zinc-800">
            <strong>Dumpster rental in {city}, FL</strong> just got easier. Lupo
            Enterprises delivers roll-off dumpsters and dump trailers to
            homeowners, contractors, and businesses across {city} with{" "}
            <strong>same-day and next-day service</strong>, flat-rate pricing,
            and zero surprise fees. Whether you&apos;re gutting a kitchen in{" "}
            {topNeighborhoods[0]}, clearing out an estate near{" "}
            {topNeighborhoods[1]}, or hauling shingles off a roof in{" "}
            {topNeighborhoods[2]}, our 10, 15, and 20 yard dumpsters are sized
            to match the job — not oversized to pad the bill.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            We&apos;re family-owned, licensed, and insured right here in{" "}
            {county}, rated{" "}
            <strong className="inline-flex items-center gap-1 align-baseline">
              4.9
              <Star
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                aria-hidden="true"
              />
              <span className="sr-only">out of 5 stars</span>
              by 130+ verified customers
            </strong>
            ,
            and built around a simple promise: the price we quote is the price
            you pay. Dumpsters are delivered on a blanketed board to protect
            your driveway, placed exactly where you want them, and hauled away
            on the day you tell us — nothing to chase, nothing to schedule
            twice.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Call{" "}
            <Link
              href={phoneHref}
              className="font-semibold text-red-600 hover:text-red-700"
            >
              {phone}
            </Link>{" "}
            for a 60-second quote, or{" "}
            <Link
              href="/contact"
              className="font-semibold text-red-600 hover:text-red-700"
            >
              request a rental online
            </Link>{" "}
            and we&apos;ll confirm delivery within the hour.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock, label: "Same-day delivery" },
            { icon: MapPin, label: `Based in ${county}` },
            { icon: ShieldCheck, label: "Licensed & insured" },
            { icon: PhoneCall, label: "Flat-rate pricing" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-zinc-50 rounded-lg px-4 py-3 border border-zinc-100"
            >
              <Icon className="h-5 w-5 text-red-600 flex-shrink-0" />
              <span className="text-sm font-medium text-zinc-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
