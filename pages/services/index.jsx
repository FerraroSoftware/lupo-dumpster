import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand, PlanSteps, PrimaryButton } from "@/components/site/home-sections";
import { FaqSection } from "@/components/site/faq-section";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { lowestPrice, navigation, siteConfig, sizes, telHref } from "@/lib/site-config";
import heroImage from "@/public/trailer-4.webp";
import dumpsterImg from "@/public/dumpsterrental.webp";
import constructionImg from "@/public/construction-dumpster-rental.webp";
import trailerImg from "@/public/dump-trailer.webp";
import junkImg from "@/public/junk-removal.webp";
import hoardingImg from "@/public/hoarding-services.webp";
import garageImg from "@/public/garage-clean-out.webp";
import debrisImg from "@/public/construction-debris.webp";
import applianceImg from "@/public/appliances.webp";
import furnitureImg from "@/public/furniture-removals.webp";
import mattressImg from "@/public/mattress-removal.webp";
import yardImg from "@/public/yard-waste-removal.webp";

const title = "Dumpster Rental & Junk Removal in Pasco County, FL | Lupo";
const description = `Dumpster rentals from $${lowestPrice}, construction dumpsters, and full-service junk removal across Pasco, Pinellas, Hillsborough & Hernando. Call ${siteConfig.phone}.`;

const dumpsterServices = [
  {
    name: "Dumpster Rental",
    href: "/services/dumpster-rental",
    image: dumpsterImg,
    text: "Flat-rate 10, 15, and 20-yard roll-off dumpsters for cleanouts, remodels, and moves. Delivery, pickup, and disposal included.",
  },
  {
    name: "Construction Dumpsters",
    href: "/services/construction-dumpster-rental",
    image: constructionImg,
    text: "On-time swaps and drops for contractors and roofers, so your crew never waits on a full dumpster.",
  },
  {
    name: "Dumpster Trailer Rental",
    href: "/services/dumpster-trailer-rental",
    image: trailerImg,
    text: "Low-profile dump trailers that fit tight driveways and are gentle on your concrete.",
  },
];

const junkServices = [
  { name: "Junk Removal", href: "/services/junk-removal", image: junkImg, text: "Point at it, we load it and haul it. No lifting on your end." },
  { name: "Hoarding & Estate Cleanup", href: "/services/hoarding-cleanup", image: hoardingImg, text: "Respectful, discreet cleanouts for families handling an estate or a hoarding situation." },
  { name: "Garage Cleanouts", href: "/services/garage-cleaning-service", image: garageImg, text: "Get your garage back. We clear it out top to bottom in one visit." },
  { name: "Construction Debris Removal", href: "/services/construction-debris-removal", image: debrisImg, text: "Drywall, lumber, tile, and roofing debris hauled away after the job." },
  { name: "Appliance Removal", href: "/services/appliance-removal", image: applianceImg, text: "Old fridges, washers, dryers, and water heaters taken off your hands." },
  { name: "Furniture Removal", href: "/services/furniture-removal", image: furnitureImg, text: "Couches, recliners, dressers, and sectionals, carried out for you." },
  { name: "Mattress Disposal", href: "/services/mattress-disposal", image: mattressImg, text: "Mattresses and box springs removed and disposed of properly." },
  { name: "Yard Waste Removal", href: "/services/yard-waste-removal", image: yardImg, text: "Branches, palm fronds, and storm debris cleared from your yard." },
];

const moreServices = [
  { name: "Bobcat Services", href: "/services/bobcat-services" },
  { name: "Trash Removal", href: "/services/trash-removal" },
  { name: "Haul Away Junk", href: "/services/haul-away-junk" },
  { name: "Pasco County Trash Pickup", href: "/services/pasco-county-trash-pickup" },
];

const choose = [
  {
    title: "Rent a dumpster if…",
    href: "/services/dumpster-rental",
    cta: "See dumpster rentals",
    points: [
      "You're doing the work yourself over a few days",
      "It's a remodel, roof, or big cleanout",
      "You want the lowest price per load",
    ],
  },
  {
    title: "Book junk removal if…",
    href: "/services/junk-removal",
    cta: "See junk removal",
    points: [
      "You don't want to lift a thing",
      "It's a few big items or one room",
      "You need it gone today, not over a week",
    ],
  },
];

const servicesFaqs = [
  {
    q: "What's the difference between dumpster rental and junk removal?",
    a: "With a dumpster rental, we drop off a dumpster, you fill it on your schedule, and we haul it away. With junk removal, our crew does all the loading and hauling for you in one visit.",
  },
  {
    q: "What dumpster sizes do you offer?",
    a: `${sizes.map((s) => `${s.name} ($${s.price})`).join(", ")}. Every price includes delivery, pickup, and disposal up to the weight limit.`,
  },
  {
    q: "Do you work with contractors and roofers?",
    a: "Yes. We run swaps and drops for contractors, roofers, and property managers across Pasco and the surrounding counties. Call to set up recurring service.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're based in Holiday, FL and serve all of Pasco County plus nearby Pinellas, Hillsborough, and Hernando County cities.",
  },
];

function ServiceCard({ service, priority }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <div className="relative bg-zinc-200" style={{ aspectRatio: "4 / 3" }}>
        <Image
          src={service.image}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold text-ink group-hover:text-brand-hover">{service.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-zinc-600">{service.text}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-hover">
          Learn more <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/services" />
      </Head>

      <PageHero
        image={heroImage}
        eyebrow="Dumpster rental & junk removal services"
        title={
          <>
            Every Way to Get Rid of It, <Highlight tone="dark">One Local Crew</Highlight>
          </>
        }
        intro={`Rent a flat-rate dumpster from $${lowestPrice} and fill it yourself, or let us do the heavy lifting with full-service junk removal. Either way, it's gone.`}
      />
      <Breadcrumbs />

      <section aria-labelledby="dumpsters-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="dumpsters-title"
            eyebrow="Dumpster rentals"
            title={
              <>
                Roll-Off Dumpsters at <Highlight>One Flat Price</Highlight>
              </>
            }
            intro="You fill it on your schedule. We drop it off, pick it up, and handle the dump."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {sizes.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-hover"
                >
                  {s.name} <span className="text-brand">${s.price}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dumpsterServices.map((s) => (
              <ServiceCard key={s.href} service={s} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <PrimaryButton href={navigation.bookHref}>
              Book Your Dumpster <ArrowRight aria-hidden className="h-5 w-5" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section aria-labelledby="junk-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="junk-title"
            eyebrow="Junk removal & cleanouts"
            title={
              <>
                Don&apos;t Want to Lift a Thing? <Highlight>We&apos;ll Load It.</Highlight>
              </>
            }
            intro="Our crew shows up, loads everything, and hauls it away. You get a firm price before we start."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {junkServices.map((s) => (
              <ServiceCard key={s.href} service={s} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={telHref}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-ink px-7 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <Phone aria-hidden className="h-5 w-5" /> Get a junk removal price: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="choose-title" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="choose-title"
            eyebrow="Not sure which you need?"
            title={
              <>
                Dumpster Rental or <Highlight>Junk Removal?</Highlight>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {choose.map((c, i) => (
              <div
                key={c.title}
                className={i === 0 ? "rounded-2xl bg-ink p-8 text-white" : "rounded-2xl border-2 border-zinc-200 p-8"}
              >
                <h3 className={`font-display text-3xl font-bold ${i === 0 ? "text-white" : "text-ink"}`}>{c.title}</h3>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className={`flex gap-3 ${i === 0 ? "text-zinc-200" : "text-zinc-700"}`}>
                      <Check aria-hidden className={`mt-0.5 h-5 w-5 shrink-0 ${i === 0 ? "text-brand-on-dark" : "text-brand"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={c.href}
                  className={`mt-8 inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline ${
                    i === 0 ? "text-brand-on-dark" : "text-brand-hover"
                  }`}
                >
                  {c.cta} <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="more-title" className="bg-zinc-100 py-16 lg:py-20">
        <div className={container}>
          <h2 id="more-title" className="text-center font-display text-3xl font-bold text-ink">
            More Hauling Services
          </h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {moreServices.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 font-semibold text-ink shadow-sm ring-1 ring-zinc-200 transition-colors hover:text-brand-hover hover:ring-brand"
                >
                  {s.name}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PlanSteps />

      <FaqSection
        id="services-faq-title"
        title={
          <>
            Service <Highlight>FAQs</Highlight>
          </>
        }
        items={servicesFaqs}
      />

      <CtaBand />
    </>
  );
}
