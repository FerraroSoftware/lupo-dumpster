import Image from "next/image";
import { Phone, ShieldCheck, Star, Truck, Home } from "lucide-react";
import heroImage from "@/public/dumpster-rental-pros.webp";
import { siteConfig, telHref } from "@/lib/site-config";
import { BookingCard } from "./booking-card";
import { Eyebrow, Highlight } from "./section-heading";

export function TrustStrip({ tone = "dark" }) {
  const muted = tone === "dark" ? "text-zinc-300" : "text-zinc-600";
  const strong = tone === "dark" ? "text-white" : "text-ink";
  const items = [
    { icon: Home, label: `Locally owned since ${siteConfig.foundedYear}` },
    { icon: ShieldCheck, label: "Licensed & insured" },
    { icon: Truck, label: "Same-day delivery available" },
  ];
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-sm ${muted}`}>
      <li className="flex items-center gap-2">
        <span className="flex" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </span>
        <span>
          <span className={`font-semibold ${strong}`}>{siteConfig.rating.value}</span> from{" "}
          {siteConfig.rating.countLabel} Google reviews
        </span>
      </li>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon aria-hidden className={tone === "dark" ? "h-4 w-4 text-brand-on-dark" : "h-4 w-4 text-brand"} />
          {label}
        </li>
      ))}
    </ul>
  );
}

export function HomeHero({ selectedSize, onSizeChange, onBook }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
      <Image
        src={heroImage}
        alt=""
        aria-hidden
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/80 lg:to-ink/30" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <Eyebrow tone="dark" className="mb-5">
            Serving New Port Richey &amp; all of Pasco County
          </Eyebrow>
          <h1
            id="hero-title"
            className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Get Your Space Back with Flat-Rate{" "}
            <Highlight tone="dark">Dumpster Rental in Pasco County</Highlight>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200 md:text-xl">
            Lupo Dumpster Rentals delivers 10, 15, and 20-yard dumpsters across Pasco County,
            FL, often the same day, at one flat price that covers delivery, pickup, and disposal
            up to the weight limit. Pick your size, we drop it in your driveway, and we haul it
            away when you&apos;re done.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onBook}
              className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-brand px-7 text-base font-bold text-white shadow-lg shadow-black/30 transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink lg:hidden"
            >
              Book Your Dumpster
            </button>
            <a
              href={telHref}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-7 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone aria-hidden className="h-5 w-5" /> Call {siteConfig.phone}
            </a>
          </div>

          <div className="mt-8 border-t border-white/20 pt-6">
            <TrustStrip />
          </div>
        </div>

        <BookingCard selectedSize={selectedSize} onSizeChange={onSizeChange} />
      </div>
    </section>
  );
}
