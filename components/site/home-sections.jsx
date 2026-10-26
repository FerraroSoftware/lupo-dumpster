import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarX,
  Check,
  Clock,
  Hammer,
  HeartHandshake,
  Home,
  KeyRound,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Tag,
  Truck,
  Zap,
} from "lucide-react";
import alexPhoto from "@/public/alex-lupo.webp";
import roofingPhoto from "@/public/new/roofing-dumpster.webp";
import dumpPhoto from "@/public/trailer-1.webp";
import { cn } from "@/lib/utils";
import { navigation, reviews, rental, serviceAreas, siteConfig, sizes, telHref } from "@/lib/site-config";
import { Highlight, SectionHeading } from "./section-heading";

export const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export function IconChip({ icon: Icon, tone = "light" }) {
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
        tone === "dark" ? "bg-white/10 text-brand-on-dark" : "bg-brand-soft text-brand-hover",
      )}
    >
      <Icon aria-hidden className="h-6 w-6" />
    </span>
  );
}

export function PrimaryButton({ onClick, href, children, className }) {
  const cls = cn(
    "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand px-7 text-base font-bold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    className,
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/* ---------------------------------- Stakes --------------------------------- */

const stakes = [
  {
    icon: CalendarX,
    title: "Weekends lost to dump runs",
    text: "Load the truck, wait in line at the landfill, unload, repeat. A one-day cleanup turns into a month of Saturdays.",
  },
  {
    icon: BadgeDollarSign,
    title: "Surprise fees on the final bill",
    text: "A low quote on the phone, then fuel charges, “environmental” fees, and overage costs nobody mentioned.",
  },
  {
    icon: Clock,
    title: "Haulers who don't show",
    text: "Your crew is ready, the old cabinets are out, and the dumpster you booked for Tuesday shows up Friday.",
  },
];

export function StakesSection() {
  return (
    <section aria-labelledby="stakes-title" className="bg-zinc-100 py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="stakes-title"
          eyebrow="Sound familiar?"
          title={
            <>
              Don&apos;t Let a Junk Pile <Highlight>Run Your Weekend</Highlight>
            </>
          }
          intro="A stalled cleanup is stressful. The garage stays full, the project drags on, and getting rid of it all feels like a second job."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stakes.map((s) => (
            <article key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-7">
              <IconChip icon={s.icon} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{s.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
          Cleaning up your own property shouldn&apos;t come with surprise fees and broken promises.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- Value props ------------------------------- */

const values = [
  {
    icon: Tag,
    title: "One flat price",
    text: "The price you see is the price you pay. Delivery, pickup, and disposal up to the weight limit are included.",
  },
  {
    icon: Zap,
    title: "Often delivered same day",
    text: "Call or book in the morning and we can often drop your dumpster off that afternoon.",
  },
  {
    icon: ShieldCheck,
    title: "Easy on your driveway",
    text: "We set every dumpster on protective boards so your concrete or pavers stay in good shape.",
  },
  {
    icon: Home,
    title: "Local and owner-run",
    text: "We're a family business from Holiday, FL. You talk to Lupo, not a call center three states away.",
  },
];

export function ValueProps({ reverse = false }) {
  return (
    <section aria-labelledby="value-title" className="bg-white py-20 lg:py-28">
      <div className={cn(container, "grid gap-14 lg:grid-cols-2 lg:items-center")}>
        <div>
          <SectionHeading
            id="value-title"
            align="left"
            eyebrow="Why Pasco chooses Lupo"
            title={
              <>
                Dumpster Rental That&apos;s <Highlight>Simple, Fast, and Honest</Highlight>
              </>
            }
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title}>
                <IconChip icon={v.icon} />
                <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 leading-relaxed text-zinc-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={cn("relative", reverse && "lg:order-first")}>
          <div
            aria-hidden
            className={cn("absolute -bottom-4 -z-0 h-full w-full rounded-3xl border-2 border-brand/30", reverse ? "-right-4 lg:-left-4 lg:right-auto" : "-right-4")}
          />
          <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "4 / 3" }}>
            <Image
              src={roofingPhoto}
              alt="Lupo dump trailer and pickup truck at a roofing job site in Pasco County"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Guide / proof ----------------------------- */

export function ReviewCard({ review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="flex" aria-label="5 out of 5 stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} aria-hidden className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-200">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-white">
        {review.name} <span className="font-normal text-zinc-400">· Google review</span>
      </figcaption>
    </figure>
  );
}

export function GuideProof({ reviewList = reviews.slice(0, 3) }) {
  return (
    <section aria-labelledby="guide-title" className="bg-ink py-20 text-white lg:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div
              className="relative mx-auto max-w-md overflow-hidden rounded-3xl ring-1 ring-white/10 lg:mx-0"
              style={{ aspectRatio: "577 / 470" }}
            >
              <Image
                src={alexPhoto}
                alt="Alex Lupo, owner of Lupo Dumpster Rentals in Holiday, FL"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              id="guide-title"
              tone="dark"
              align="left"
              eyebrow="Your neighbors in Holiday, FL"
              title={
                <>
                  We Know You Just Want <Highlight tone="dark">the Mess Gone</Highlight>
                </>
              }
              intro={`Alex and Amanda Lupo started Lupo Dumpster Rentals in ${siteConfig.foundedYear} because getting rid of junk shouldn't mean surprise bills and no-show haulers. Today we serve homeowners, contractors, and families across Pasco, Pinellas, Hernando, and North Hillsborough with the same promise: a fair, flat price and a dumpster that shows up when we say it will.`}
            />
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
              {[
                { value: `${siteConfig.rating.value}★`, label: "Google rating" },
                { value: siteConfig.rating.countLabel, label: "Google reviews" },
                { value: `Since ${siteConfig.foundedYear}`, label: "Locally owned" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-extrabold text-white">{s.value}</span>
                    <span className="text-sm text-zinc-400">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className={cn("mt-16 grid gap-6", reviewList.length > 1 ? "md:grid-cols-3" : "mx-auto max-w-2xl")}>
          {reviewList.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <p className="mt-8 text-center">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white underline decoration-brand-on-dark underline-offset-4 hover:text-brand-on-dark"
          >
            Read all {siteConfig.rating.countLabel} Lupo reviews on Google
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------- Plan ----------------------------------- */

const steps = [
  {
    title: "Pick your size & date",
    text: "Book online in under a minute, or call or text. You'll see your flat price before you commit.",
  },
  {
    title: "We drop it off",
    text: "We place your dumpster right where you need it, on protective boards, often the same day.",
  },
  {
    title: "Fill it. We haul it away.",
    text: "Load it at your own pace. When you're done, call us and it's gone, along with the mess.",
  },
];

export function PlanSteps({
  onBook,
  title,
  intro = "No contracts to decode and no runaround. Here's the whole process.",
  items = steps,
  label = "Book Your Dumpster",
  href = navigation.bookHref,
}) {
  return (
    <section aria-labelledby="plan-title" className="bg-white py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="plan-title"
          eyebrow="How it works"
          title={
            title || (
              <>
                Your Dumpster in <Highlight>3 Easy Steps</Highlight>
              </>
            )
          }
          intro={intro}
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-zinc-200 bg-white p-8">
              <span aria-hidden className="font-display text-7xl font-extrabold leading-none text-brand/20">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <PrimaryButton onClick={onBook} href={onBook ? undefined : href}>
            {label} <ArrowRight aria-hidden className="h-5 w-5" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Price cards ------------------------------- */

export function PriceCards({ onSelect, showPricingLink = true }) {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-28 bg-zinc-100 py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="pricing-title"
          eyebrow="Flat-rate pricing"
          title={
            <>
              Pick Your Size. <Highlight>See Your Price.</Highlight>
            </>
          }
          intro="Most dumpster companies make you call for a quote. We publish ours. Every rental includes everything below, with no hidden fees."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {sizes.map((s) => (
            <article
              key={s.id}
              className={cn(
                "relative flex flex-col rounded-2xl bg-white p-8",
                s.popular ? "ring-2 ring-brand shadow-xl lg:-my-4 lg:py-12" : "border border-zinc-200",
              )}
            >
              {s.popular && (
                <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most popular
                </p>
              )}
              <h3 className="font-display text-3xl font-bold text-ink">{s.name}</h3>
              <p className="mt-1 text-zinc-600">{s.bestFor}</p>
              <p className="mt-6 font-display text-6xl font-extrabold leading-none text-ink">
                ${s.price}
                <span className="ml-2 align-middle font-sans text-base font-semibold text-zinc-600">flat rate</span>
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-zinc-700">
                {[s.dimensions, s.loads, s.weight, ...rental.included].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-1 flex-col justify-end gap-3">
                <PrimaryButton
                  onClick={onSelect ? () => onSelect(s.id) : undefined}
                  href={onSelect ? undefined : navigation.bookHref}
                  className="w-full"
                >
                  Book the {s.shortName.replace(" yd", "-yard")}
                </PrimaryButton>
                <Link
                  href={s.href}
                  className="text-center text-sm font-semibold text-zinc-700 underline-offset-4 hover:text-brand-hover hover:underline"
                >
                  {s.name} rental details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-600">
          Need extra days or think you&apos;ll go over the weight limit? We&apos;ll tell you the exact
          cost before delivery, never after.
          {showPricingLink && (
            <>
              {" "}
              <Link href="/dumpster-rental-pricing" className="font-semibold text-ink underline underline-offset-4 hover:text-brand-hover">
                See full dumpster rental pricing
              </Link>
            </>
          )}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- Size helper ------------------------------- */

const projects = [
  { label: "Garage or closet cleanout", size: "10" },
  { label: "Yard debris & landscaping", size: "10" },
  { label: "Kitchen or bathroom remodel", size: "15" },
  { label: "Flooring or carpet tear-out", size: "15" },
  { label: "Moving out or downsizing", size: "15" },
  { label: "Roof replacement", size: "20" },
  { label: "Estate or whole-house cleanout", size: "20" },
  { label: "Whole-home renovation", size: "20" },
];

export function SizeHelper({ project, onProject, onSelect }) {
  const match = projects.find((p) => p.label === project);
  const size = match && sizes.find((s) => s.id === match.size);
  return (
    <section aria-labelledby="helper-title" className="bg-brand py-16 text-white lg:py-20">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center")}>
        <div>
          <h2 id="helper-title" className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Not sure what size you need?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Tell us what you&apos;re working on and we&apos;ll point you to the right dumpster.
          </p>
        </div>
        <div>
          <fieldset>
            <legend className="sr-only">What&apos;s your project?</legend>
            <div className="flex flex-wrap gap-2">
              {projects.map((p) => (
                <label key={p.label} className="cursor-pointer">
                  <input
                    type="radio"
                    name="project"
                    value={p.label}
                    checked={project === p.label}
                    onChange={() => onProject(p.label)}
                    className="peer sr-only"
                  />
                  <span className="inline-flex min-h-[44px] items-center rounded-full border-2 border-white/40 px-4 text-sm font-semibold transition-colors hover:border-white peer-checked:border-white peer-checked:bg-white peer-checked:text-ink peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-brand">
                    {p.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <div aria-live="polite" className="mt-6 min-h-[72px]">
            {size && (
              <div className="flex flex-col gap-4 rounded-2xl bg-ink p-5 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  <span className="text-sm text-zinc-300">We recommend the</span>
                  <br />
                  <span className="font-display text-3xl font-bold">
                    {size.name} · ${size.price}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => onSelect(size.id)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-brand px-6 font-bold text-white hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Book this size <ArrowRight aria-hidden className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Audiences ------------------------------- */

const audiences = [
  {
    icon: Home,
    title: "Homeowners",
    text: "Cleanouts, remodels, moves, and yard projects with one flat price and a dumpster in your driveway.",
    href: "/services/dumpster-rental",
    cta: "Residential dumpster rental",
  },
  {
    icon: Hammer,
    title: "Contractors & roofers",
    text: "On the jobsite when you need it, gone when you're done, so your crew never waits on a hauler.",
    href: "/services/construction-dumpster-rental",
    cta: "Construction dumpster rental",
  },
  {
    icon: KeyRound,
    title: "Realtors & property managers",
    text: "Turn a listing or rental fast. We clear move-out junk so the property is ready to show.",
    href: "/services/junk-removal",
    cta: "Junk removal for properties",
  },
  {
    icon: HeartHandshake,
    title: "Estates & hoarding cleanups",
    text: "Handled quietly, carefully, and with respect, whether you need a dumpster or our crew to do the lifting.",
    href: "/services/hoarding-cleanup",
    cta: "Hoarding & estate cleanup",
  },
];

export function AudienceCards() {
  return (
    <section aria-labelledby="audience-title" className="bg-white py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="audience-title"
          eyebrow="Who we help"
          title={
            <>
              Whatever the Project, <Highlight>We&apos;ve Got the Dumpster</Highlight>
            </>
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-2xl border border-zinc-200 p-7 transition-shadow hover:shadow-lg"
            >
              <IconChip icon={a.icon} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{a.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-zinc-600">{a.text}</p>
              <Link
                href={a.href}
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-hover underline-offset-4 hover:underline"
              >
                {a.cta} <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Story paragraph ----------------------------- */

export function StoryParagraph() {
  return (
    <section aria-labelledby="story-title" className="bg-zinc-100 py-20 lg:py-24">
      <div className={cn(container, "grid gap-12 lg:grid-cols-2 lg:items-center")}>
        <div
          className="relative order-last overflow-hidden rounded-3xl shadow-xl lg:order-first"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src={dumpPhoto}
            alt="Lupo dump trailer unloading a full load of junk at a local disposal facility"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            id="story-title"
            align="left"
            eyebrow="Dumpster rental in Pasco County, FL"
            title="From Buried to Done"
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-700">
            <p>
              Whether you&apos;re clearing out a garage in New Port Richey, tearing off a roof in
              Trinity, or emptying a family home in Holiday, the hardest part of any cleanup is
              getting rid of it all. Lupo Dumpster Rentals makes that part easy. We deliver 10, 15,
              and 20-yard dump-trailer dumpsters across Pasco County and nearby Pinellas, Hernando,
              and Hillsborough communities, often on the same day you call.
            </p>
            <p>
              You get one flat price up front, with delivery, pickup, and disposal up to the weight
              limit included. We place every dumpster on protective boards, give you time to load
              it at your own pace, and haul it away as soon as you&apos;re finished. No dump runs, no
              surprise fees, just your space back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Service area ------------------------------ */

export function ServiceArea() {
  return (
    <section aria-labelledby="area-title" className="bg-white py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="area-title"
          eyebrow="Service area"
          title={
            <>
              Dumpster Rental <Highlight>Near You</Highlight>
            </>
          }
          intro="Based in Holiday, FL, we deliver throughout Pasco County and the surrounding Tampa Bay area."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <div key={area.county}>
              <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
                <MapPin aria-hidden className="h-5 w-5 text-brand" />
                {area.href ? (
                  <Link href={area.href} className="hover:text-brand-hover hover:underline underline-offset-4">
                    {area.county}
                  </Link>
                ) : (
                  area.county
                )}
              </h3>
              <ul className="mt-4 space-y-2">
                {area.cities.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-zinc-700 underline-offset-4 hover:text-brand-hover hover:underline"
                    >
                      Dumpster rental in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center">
          <Link
            href="/service-locations"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-hover underline-offset-4 hover:underline"
          >
            See every city we serve <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- CTA band -------------------------------- */

export function CtaBand({
  onBook,
  title,
  text = "Book your dumpster in under a minute. Flat price, fast delivery, and a local team that shows up when we say we will.",
  label = "Book Your Dumpster",
  href = navigation.bookHref,
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-ink py-20 text-white">
      <div className={cn(container, "flex flex-col items-center text-center")}>
        <Truck aria-hidden className="h-10 w-10 text-brand-on-dark" />
        <h2 id="cta-title" className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
          {title || (
            <>
              Ready to Get Your <Highlight tone="dark">Space Back?</Highlight>
            </>
          )}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-zinc-300">{text}</p>
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <PrimaryButton onClick={onBook} href={onBook ? undefined : href} className="focus-visible:ring-offset-ink">
            {label} <ArrowRight aria-hidden className="h-5 w-5" />
          </PrimaryButton>
          <a
            href={telHref}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-7 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone aria-hidden className="h-5 w-5" /> Call {siteConfig.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-zinc-400">{siteConfig.hours}</p>
      </div>
    </section>
  );
}
