import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import defaultImage from "@/public/dumpster-rental-pros.webp";
import { navigation, siteConfig, telHref } from "@/lib/site-config";
import { TrustStrip } from "./home-hero";
import { PrimaryButton } from "./home-sections";
import { Eyebrow } from "./section-heading";

/**
 * Dark photo hero for inner pages. Pass `aside` (e.g. a BookingCard) for a
 * two-column layout; without it, the default Book + Call buttons render.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image = defaultImage,
  aside,
  actions,
  onBook,
  showTrust = true,
  children,
}) {
  const defaultActions = (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <PrimaryButton
        onClick={onBook}
        href={onBook ? undefined : navigation.bookHref}
        className={aside ? "focus-visible:ring-offset-ink lg:hidden" : "focus-visible:ring-offset-ink"}
      >
        Book Your Dumpster <ArrowRight aria-hidden className="h-5 w-5" />
      </PrimaryButton>
      <a
        href={telHref}
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-7 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <Phone aria-hidden className="h-5 w-5" /> Call {siteConfig.phone}
      </a>
    </div>
  );

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        placeholder={typeof image === "object" && image.blurDataURL ? "blur" : "empty"}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/80 lg:to-ink/40" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <div
        className={`relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:items-center lg:gap-16 lg:px-8 ${
          aside ? "lg:grid-cols-[1.1fr_0.9fr] lg:py-24" : "lg:py-28"
        }`}
      >
        <div className={aside ? "" : "max-w-3xl"}>
          {eyebrow && (
            <Eyebrow tone="dark" className="mb-5">
              {eyebrow}
            </Eyebrow>
          )}
          <h1
            id="hero-title"
            className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200 md:text-xl">{intro}</p>}
          {children}
          {actions === undefined ? defaultActions : actions}
          {showTrust && (
            <div className="mt-8 border-t border-white/20 pt-6">
              <TrustStrip />
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}
