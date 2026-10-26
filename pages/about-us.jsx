import Head from "next/head";
import Image from "next/image";
import { BadgeDollarSign, Handshake, ReceiptText, Truck, Star } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand, IconChip, PlanSteps, ReviewCard } from "@/components/site/home-sections";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { reviews, serviceAreas, siteConfig } from "@/lib/site-config";
import heroImage from "@/public/trailer-1.webp";
import alexPhoto from "@/public/alex-lupo.webp";
import trailerTwo from "@/public/trailer-2.webp";
import trailerThree from "@/public/trailer-3.webp";

const title = "About Lupo Dumpster Rentals | Family-Owned in Holiday, FL";
const description = `Family-owned dumpster rental and junk removal in Holiday, FL, serving Pasco County since ${siteConfig.foundedYear}. ${siteConfig.rating.value}★ from ${siteConfig.rating.countLabel} Google reviews.`;

const promises = [
  {
    icon: BadgeDollarSign,
    title: "Flat-rate pricing",
    text: "The price we quote is the price you pay. Delivery, pickup, and disposal up to the weight limit are included.",
  },
  {
    icon: ReceiptText,
    title: "No hidden fees",
    text: "If anything could cost extra, like extra days or going over the weight limit, we tell you before delivery.",
  },
  {
    icon: Handshake,
    title: "Local & owner-operated",
    text: "You deal with the Lupo family, not a national call center that's never seen your street.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "Often same day. We know a stalled project costs you time and money.",
  },
];

const stats = [
  { value: `${siteConfig.rating.value}★`, label: "Google rating" },
  { value: siteConfig.rating.countLabel, label: "Five-star reviews" },
  { value: String(siteConfig.foundedYear), label: "Locally owned since" },
  { value: String(serviceAreas.length), label: "Counties served" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  url: `${siteConfig.url}/about-us`,
  about: {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    foundingDate: String(siteConfig.foundedYear),
    founder: siteConfig.founders.map((name) => ({ "@type": "Person", name })),
  },
};

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/about-us" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      </Head>

      <PageHero
        image={heroImage}
        eyebrow="About Lupo Dumpster Rentals"
        title={
          <>
            Your Neighbors in Holiday, <Highlight tone="dark">Hauling Since {siteConfig.foundedYear}</Highlight>
          </>
        }
        intro="We believe cleaning up your own property shouldn't come with surprise fees and broken promises. So we built a dumpster company that doesn't have either."
      />
      <Breadcrumbs />

      <section aria-labelledby="story-title" className="bg-white py-20 lg:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16`}>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:mx-0" style={{ aspectRatio: "577 / 470" }}>
            <Image
              src={alexPhoto}
              alt="Alex Lupo, co-founder of Lupo Dumpster Rentals in Holiday, FL"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading id="story-title" eyebrow="Our story" title="Why We Started Lupo" align="left" />
            {/* TODO: confirm the founding story wording with Alex & Amanda before launch. */}
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-700">
              <p>
                In June {siteConfig.foundedYear}, Alex and Amanda Lupo started Lupo Enterprises as a
                small operation in Holiday, FL. They kept hearing the same story from neighbors: a
                dumpster company quoted one price, then the bill showed up with fuel charges, dump
                fees, and a pickup that came days late.
              </p>
              <p>
                That&apos;s just wrong. You&apos;re trying to clean out a garage, finish a remodel,
                or settle a loved one&apos;s estate. The last thing you need is a surprise bill.
              </p>
              <p>
                So Lupo does it differently: one flat price with delivery, pickup, and disposal
                included, extras explained before anything hits your driveway, and a local crew that
                shows up when we say we will. Today we serve homeowners, contractors, and roofers
                across Pasco, Pinellas, Hillsborough, and Hernando County.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="promise-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="promise-title"
            eyebrow="The Lupo promise"
            title={
              <>
                What You Can <Highlight>Count On</Highlight>
              </>
            }
            intro="We know a stalled project is stressful. You just want the mess gone. Here's how we make that easy."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <IconChip icon={p.icon} />
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { src: trailerTwo, alt: "Lupo work truck and dump trailers parked at a customer's home" },
              { src: trailerThree, alt: "Lupo dumpster trailer delivered to a driveway, with the owner and work truck" },
            ].map((img) => (
              <div key={img.alt} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 10" }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="proof-title" className="bg-ink py-20 text-white lg:py-28">
        <div className={container}>
          <SectionHeading
            id="proof-title"
            tone="dark"
            eyebrow="Proof from your neighbors"
            title={
              <>
                <Highlight tone="dark">{siteConfig.rating.countLabel}</Highlight> Five-Star Reviews and Counting
              </>
            }
          />
          <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
                <dt className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{s.label}</dt>
                <dd className="mt-2 font-display text-5xl font-extrabold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 6).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <Star aria-hidden className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4 hover:text-brand-on-dark"
            >
              Read all our reviews on Google
            </a>
          </div>
        </div>
      </section>

      <PlanSteps />

      <CtaBand />
    </>
  );
}
