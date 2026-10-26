import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Clock, Landmark, MapPin, Phone, Recycle, Ruler } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookingCard } from "./booking-card";
import { PageHero } from "./page-hero";
import { container, CtaBand, GuideProof, IconChip, PlanSteps, PriceCards, StakesSection } from "./home-sections";
import { FaqSection } from "./faq-section";
import { Highlight, SectionHeading } from "./section-heading";
import { Titled } from "./service-page";
import { getNearbyLinks } from "@/lib/cities";
import { getSize, lowestPrice, prohibitedItems, reviews, siteConfig, sizes } from "@/lib/site-config";
import { useBooking } from "@/lib/use-booking";
import { cn } from "@/lib/utils";

const NPR_SLUG = "new-port-richey-fl";
const priceList = sizes.map((s) => `${s.shortName.replace(" yd", "-yard")} $${s.price}`).join(", ");

export function cityMetaTitle(place) {
  for (const t of [
    `Dumpster Rental in ${place}, FL | Lupo Dumpster`,
    `Dumpster Rental in ${place}, FL | Lupo`,
    `Dumpster Rental ${place}, FL | Lupo`,
  ]) {
    if (t.length <= 60) return t;
  }
  return `Dumpster Rental ${place} | Lupo`;
}

const otherServices = [
  { name: "Junk removal", href: "/services/junk-removal" },
  { name: "Construction dumpsters", href: "/services/construction-dumpster-rental" },
  { name: "Estate & hoarding cleanup", href: "/services/hoarding-cleanup" },
  { name: "Roofing dumpsters", href: "/services/20-yard-dump-trailer" },
  { name: "Yard waste removal", href: "/services/yard-waste-removal" },
  { name: "Appliance removal", href: "/services/appliance-removal" },
];

const anchorVariants = [
  (n) => `Dumpster rental in ${n}`,
  (n) => `${n} dumpster rentals`,
  (n) => `Rent a dumpster in ${n}`,
  (n) => `${n}, FL dumpsters`,
];

function sharedFaqs(place, county, permitPhone, localFaqs = []) {
  const hasDeliveryFaq = localFaqs.some((f) => /deliver/i.test(f.q));
  return [
    {
      q: `How much does a dumpster rental cost in ${place}?`,
      a: `Lupo's flat rates in ${place} are ${priceList}. Every price includes delivery, pickup, and disposal up to the included weight limit.`,
    },
    ...(hasDeliveryFaq
      ? []
      : [
          {
            q: `How fast can you deliver a dumpster in ${place}?`,
            a: "We can often deliver the same day you call. Booking a day or two ahead is the surest way to get the date you want.",
          },
        ]),
    {
      q: "What can't go in the dumpster?",
      a: `These can't go in: ${prohibitedItems.join(", ").toLowerCase()}. If you're unsure about an item, call or text us before you load it.`,
    },
    ...(permitPhone
      ? [
          {
            q: `Who do I call about a right-of-way permit in ${county}?`,
            a: `Driveway placement usually doesn't need a permit. For the street or right-of-way, check with your city if you're inside city limits; in unincorporated areas, start with ${county} at ${permitPhone}.`,
          },
        ]
      : []),
  ];
}

function serviceSchema({ place, county, url, description, isCountyPage }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Dumpster Rental in ${place}, FL`,
    serviceType: "Dumpster rental",
    description,
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: isCountyPage
      ? { "@type": "AdministrativeArea", name: `${place}, FL` }
      : { "@type": "City", name: `${place}, FL`, containedInPlace: { "@type": "AdministrativeArea", name: `${county}, FL` } },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...sizes.map((s) => s.price)),
      highPrice: Math.max(...sizes.map((s) => s.price)),
      offerCount: sizes.length,
    },
  };
}

/**
 * City / county dumpster rental page (docs/city-pages.md §4). `city` is the
 * registry entry from lib/cities.js; `content` is the hand-written unique copy
 * in content/cities/<slug>.js.
 */
// One review per city, rotated by slug, so neighboring pages don't repeat the same block.
function reviewFor(slug) {
  const hash = [...slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return reviews[hash % reviews.length];
}

export default function CityPage({ city, content }) {
  const { selectedSize, setSelectedSize, scrollToBooking, bookSize } = useBooking();
  const place = city.city;
  const county = city.county;
  const path = `/services/dumpster-rental-${city.urlSlug}`;
  const url = `${siteConfig.url}${path}`;
  const title = content.metaTitle || cityMetaTitle(place);
  const description = content.metaDescription;
  const nearby = getNearbyLinks(city).filter((n) => n.href !== path);
  const isNpr = city.urlSlug === NPR_SLUG;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${place}, FL`)}&output=embed`;
  const faqs = [...(content.localFaqs || []), ...sharedFaqs(place, county, city.countyPermitPhone, content.localFaqs)];

  const facts = [
    { icon: Clock, label: "From our Holiday yard", value: content.driveTimeFromHQ },
    { icon: Building2, label: city.isCountyPage ? "Area" : "County", value: city.isCountyPage ? `${place}, FL` : county },
    { icon: MapPin, label: "ZIP codes", value: city.zipCodes?.slice(0, 6).join(", ") },
    { icon: Ruler, label: "Flat prices from", value: `$${lowestPrice}` },
  ].filter((f) => f.value);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path={path} image={content.image} imageAlt={content.imageAlt} keywords={content.keywords} />
        <script
          type="application/ld+json"
          key="city-service-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema({ place, county, url, description, isCountyPage: city.isCountyPage })),
          }}
        />
      </Head>

      <PageHero
        eyebrow={content.eyebrow || `Dumpster rental · ${place}, FL`}
        title={
          <>
            {content.h1Desire} with <Highlight tone="dark">Dumpster Rental in {place}, FL</Highlight>
          </>
        }
        intro={content.answer}
        image={content.heroImage || "/dumpster-rental-pros.webp"}
        onBook={scrollToBooking}
        aside={<BookingCard selectedSize={selectedSize} onSizeChange={setSelectedSize} source={`${place} city page`} />}
      />
      <Breadcrumbs currentLabel={`Dumpster Rental in ${place}`} />

      <section aria-labelledby="local-title" className="bg-white py-20 lg:py-28">
        <div className={cn(container, "grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start")}>
          <div>
            <SectionHeading id="local-title" align="left" eyebrow={`Local to ${place}`} title={<Titled parts={content.introTitle} />} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-700">
              {content.localIntro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {content.landmarks?.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`Around ${place}`}>
                {content.landmarks.map((l) => (
                  <li key={l} className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-semibold text-ink">
                    <Landmark aria-hidden className="h-4 w-4 text-brand-hover" />
                    {l}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "4 / 3" }}>
              <Image src={content.image} alt={content.imageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="rounded-2xl border border-zinc-200 p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    <f.icon aria-hidden className="h-4 w-4 text-brand" />
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <StakesSection />
      <PriceCards onSelect={bookSize} />

      <section aria-labelledby="projects-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="projects-title"
            eyebrow={`Popular in ${place}`}
            title={
              <>
                What {place} Customers <Highlight>Rent Dumpsters For</Highlight>
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.typicalProjects.map((p) => {
              const s = getSize(p.size);
              return (
                <article key={p.title} className="flex flex-col rounded-2xl border border-zinc-200 p-7">
                  <h3 className="font-display text-2xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-zinc-600">{p.text}</p>
                  {s && (
                    <button
                      type="button"
                      onClick={() => bookSize(s.id)}
                      className="mt-5 inline-flex items-center gap-1.5 self-start font-semibold text-brand-hover underline-offset-4 hover:underline"
                    >
                      Usually a {s.shortName.replace(" yd", "-yard")} · ${s.price} <ArrowRight aria-hidden className="h-4 w-4" />
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PlanSteps onBook={scrollToBooking} />
      <GuideProof reviewList={[reviewFor(city.urlSlug)]} />

      <section aria-labelledby="rules-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="rules-title"
            eyebrow="Permits, rules & disposal"
            title={
              <>
                Renting a Dumpster in {place}: <Highlight>What to Know</Highlight>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8">
              <IconChip icon={Building2} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Permits &amp; placement</h3>
              <p className="mt-3 leading-relaxed text-zinc-700">{content.permitNotes}</p>
              {content.hoaNotes && <p className="mt-3 leading-relaxed text-zinc-700">{content.hoaNotes}</p>}
              <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                {city.countyPermitPhone && (
                  <li className="flex items-center gap-2">
                    <Phone aria-hidden className="h-4 w-4 text-brand" />
                    {county}: <a href={`tel:${city.countyPermitPhone.replace(/\D/g, "")}`} className="font-semibold text-ink underline underline-offset-4">{city.countyPermitPhone}</a>
                  </li>
                )}
                {city.cityPermitPhone && (
                  <li className="flex items-center gap-2">
                    <Phone aria-hidden className="h-4 w-4 text-brand" />
                    City of {place}: <a href={`tel:${city.cityPermitPhone.replace(/\D/g, "")}`} className="font-semibold text-ink underline underline-offset-4">{city.cityPermitPhone}</a>
                  </li>
                )}
              </ul>
            </article>
            <article className="rounded-2xl bg-white p-8">
              <IconChip icon={Recycle} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Where your debris goes</h3>
              <p className="mt-3 font-semibold text-ink">{content.disposalFacility.name}</p>
              <p className="mt-2 leading-relaxed text-zinc-700">{content.disposalFacility.note}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Not allowed: {prohibitedItems.join(", ").toLowerCase()}. Not sure about something? Call {siteConfig.phone}.
              </p>
            </article>
          </div>
        </div>
      </section>

      {city.neighborhoods?.length > 0 && (
        <section aria-labelledby="areas-title" className="bg-white py-20 lg:py-28">
          <div className={cn(container, "grid gap-12 lg:grid-cols-2 lg:items-center")}>
            <div>
              <SectionHeading
                id="areas-title"
                align="left"
                eyebrow="Neighborhoods we serve"
                title={
                  <>
                    Dumpsters Across <Highlight>{place}</Highlight>
                  </>
                }
                intro={city.zipCodes?.length ? `Including ZIP codes ${city.zipCodes.join(", ")}.` : undefined}
              />
              <ul className="mt-8 flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <li key={n} className="rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm font-medium text-zinc-700">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm" style={{ aspectRatio: "4 / 3" }}>
              <iframe
                title={`Map of ${place}, FL`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="nearby-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={cn(container, "grid gap-12 lg:grid-cols-2")}>
          <div>
            <h2 id="nearby-title" className="font-display text-3xl font-bold text-ink md:text-4xl">
              More Services in {place}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {otherServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 font-semibold text-ink hover:text-brand-hover">
                    {s.name} in {place}
                    <ArrowRight aria-hidden className="h-4 w-4 text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-zinc-700">
              See every size and price on our{" "}
              <Link href="/dumpster-rental-pricing" className="font-semibold text-ink underline underline-offset-4 hover:text-brand-hover">
                dumpster rental pricing
              </Link>{" "}
              page.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Nearby Areas We Serve</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {!isNpr && (
                <li>
                  <Link
                    href={`/services/dumpster-rental-${NPR_SLUG}`}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-white hover:bg-brand"
                  >
                    <MapPin aria-hidden className="h-4 w-4" /> New Port Richey dumpster rental
                  </Link>
                </li>
              )}
              {nearby
                .filter((n) => !n.href.endsWith(NPR_SLUG))
                .map((n, i) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-4 text-sm font-semibold text-ink hover:border-brand hover:text-brand-hover"
                    >
                      <MapPin aria-hidden className="h-4 w-4 text-brand" />
                      {anchorVariants[i % anchorVariants.length](n.name)}
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-6">
              <Link href="/service-locations" className="inline-flex items-center gap-1.5 font-semibold text-brand-hover underline-offset-4 hover:underline">
                See every city we serve <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        id="city-faq-title"
        className="bg-white"
        title={
          <>
            {place} Dumpster Rental <Highlight>FAQs</Highlight>
          </>
        }
        items={faqs}
      />

      <CtaBand
        onBook={scrollToBooking}
        title={
          <>
            Ready for a Dumpster in <Highlight tone="dark">{place}?</Highlight>
          </>
        }
        text={`Book online in under a minute, or call ${siteConfig.phone}. One flat price, delivered by a local team that shows up when we say we will.`}
      />
    </>
  );
}

