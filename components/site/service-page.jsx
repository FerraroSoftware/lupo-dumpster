import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Info,
  MapPin,
  X,
  AlertTriangle,
  BadgeDollarSign,
  BedDouble,
  Boxes,
  Building2,
  CalendarX,
  Camera,
  ClipboardCheck,
  Clock,
  Construction,
  Container,
  HardHat,
  Hammer,
  HeartHandshake,
  Home,
  KeyRound,
  Leaf,
  Lock,
  Package,
  Recycle,
  Refrigerator,
  Route,
  Ruler,
  Scale,
  ShieldCheck,
  Shovel,
  Sofa,
  Sparkles,
  Tag,
  Timer,
  Tractor,
  Trash2,
  TreePine,
  Truck,
  Users,
  Warehouse,
  Weight,
  Wrench,
  Zap,
} from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookingCard } from "./booking-card";
import { QuoteCard } from "./quote-card";
import { PageHero } from "./page-hero";
import { container, CtaBand, IconChip, PlanSteps, PriceCards, ReviewCard, ValueProps } from "./home-sections";
import { FaqSection } from "./faq-section";
import { Highlight, SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import {
  acceptedItems,
  getSize,
  lowestPrice,
  prohibitedItems,
  reviews,
  serviceAreas,
  siteConfig,
  sizes,
  telHref,
} from "@/lib/site-config";
import { useBooking } from "@/lib/use-booking";

const BASE_URL = siteConfig.url;
const NPR_HUB = "/services/dumpster-rental-new-port-richey-fl";

/** `["Plain text ", "highlighted"]` or `["a ", "b", " c"]` → JSX with the middle part in red. */
export function Titled({ parts, tone = "light" }) {
  if (!Array.isArray(parts)) return parts;
  const [before, hl, after] = parts;
  return (
    <>
      {before}
      {hl && <Highlight tone={tone}>{hl}</Highlight>}
      {after}
    </>
  );
}

const plainTitle = (parts) => (Array.isArray(parts) ? parts.join("") : parts);
/** Icons content files may reference by name. */
export const ICONS = { AlertTriangle, BadgeDollarSign, BedDouble, Boxes, Building2, CalendarX, Camera, ClipboardCheck, Clock, Construction, Container, HardHat, Hammer, HeartHandshake, Home, KeyRound, Leaf, Lock, Package, Recycle, Refrigerator, Route, Ruler, Scale, ShieldCheck, Shovel, Sofa, Sparkles, Tag, Timer, Tractor, Trash2, TreePine, Truck, Users, Warehouse, Weight, Wrench, Zap };
const icon = (name) => ICONS[name] || Check;

const junkValues = [
  { icon: "Users", title: "We do all the lifting", text: "Our crew carries everything out, from the attic to the curb. You just point." },
  { icon: "Tag", title: "Firm price before we start", text: "Send a description or a few photos and we'll give you a price before anything is scheduled." },
  { icon: "Recycle", title: "Donate and recycle first", text: "Usable items and metals are set aside for donation or recycling whenever we can." },
  { icon: "Home", title: "Local and owner-run", text: "A family business from Holiday, FL. You deal with the Lupos, not a franchise call center." },
];

const junkSteps = [
  { title: "Tell us what needs to go", text: "Fill out the quote form, or call or text a few photos. It takes about two minutes." },
  { title: "Get a firm price", text: "We'll quote the job up front, then pick a time that works for you." },
  { title: "We load it and haul it", text: "Our crew does the lifting, sweeps up, and hauls it all away. Your space is clear." },
];

function Section({ id, tone = "white", className, children }) {
  const bg = { white: "bg-white", zinc: "bg-zinc-100", ink: "bg-ink text-white" }[tone];
  return (
    <section aria-labelledby={id} className={cn(bg, "py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}

function Stakes({ data }) {
  return (
    <Section id="stakes-title" tone="zinc">
      <div className={container}>
        <SectionHeading id="stakes-title" eyebrow={data.eyebrow || "Sound familiar?"} title={<Titled parts={data.title} />} intro={data.intro} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {data.items.map((s) => (
            <article key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-7">
              <IconChip icon={icon(s.icon)} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{s.text}</p>
            </article>
          ))}
        </div>
        {data.closing && (
          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
            {data.closing}
          </p>
        )}
      </div>
    </Section>
  );
}

function About({ data }) {
  return (
    <Section id="about-title">
      <div className={cn(container, "grid gap-14 lg:grid-cols-2 lg:items-center")}>
        <div>
          <SectionHeading id="about-title" align="left" eyebrow={data.eyebrow} title={<Titled parts={data.title} />} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-700">
            {data.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {data.perfectFor?.length > 0 && (
            <>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-600">Perfect for</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {data.perfectFor.map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-ink">
                    <Check aria-hidden className="h-4 w-4 text-brand-hover" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="relative">
          <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-brand/30" />
          <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "4 / 3" }}>
            <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Values({ data }) {
  return (
    <Section id="values-title">
      <div className={container}>
        <SectionHeading id="values-title" eyebrow={data.eyebrow || "Why Lupo"} title={<Titled parts={data.title} />} />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((v) => (
            <div key={v.title} className="rounded-2xl border border-zinc-200 p-7">
              <IconChip icon={icon(v.icon)} />
              <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-1.5 leading-relaxed text-zinc-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Proof({ data }) {
  const picked = (data.reviewNames || [])
    .map((n) => reviews.find((r) => r.name === n))
    .filter(Boolean);
  const list = picked.length ? picked : reviews.slice(0, 3);
  return (
    <Section id="proof-title" tone="ink">
      <div className={container}>
        <SectionHeading
          id="proof-title"
          tone="dark"
          eyebrow={`${siteConfig.rating.value}★ from ${siteConfig.rating.countLabel} Google reviews`}
          title={<Titled parts={data.title} tone="dark" />}
          intro={data.intro}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {list.slice(0, 3).map((r) => (
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
            Read all {siteConfig.rating.countLabel} reviews on Google <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </p>
      </div>
    </Section>
  );
}

function SizeSpotlight({ size, data, onBook }) {
  const others = sizes.filter((s) => s.id !== size.id);
  return (
    <>
      <Section id="size-title" tone="zinc">
        <div className={container}>
          <SectionHeading id="size-title" eyebrow={`${size.name} at a glance`} title={<Titled parts={data.title} />} intro={data.intro} />
          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Flat price", value: `$${size.price}` },
              { label: "Dimensions", value: size.dimensions },
              { label: "Holds", value: size.loads.replace("About ", "") },
              { label: "Weight included", value: size.weight.replace(" included", "") },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 text-center">
                <dt className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{s.label}</dt>
                <dd className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-bold text-ink">This size is right if you&apos;re…</h3>
              <ul className="mt-5 space-y-3">
                {data.rightIf.map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check aria-hidden className="h-4 w-4 text-green-700" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl font-bold text-ink">Consider another size if…</h3>
              <ul className="mt-5 space-y-3">
                {data.otherIf.map((item) => (
                  <li key={item.text} className="flex gap-3 text-zinc-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100">
                      <Info aria-hidden className="h-4 w-4 text-zinc-600" />
                    </span>
                    <span>
                      {item.text}{" "}
                      <Link href={getSize(item.size).href} className="font-semibold text-brand-hover underline underline-offset-4">
                        See the {getSize(item.size).name}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onBook(size.id)}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand px-7 text-base font-bold text-white shadow-lg shadow-brand/20 hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Book the {size.name} · ${size.price} <ArrowRight aria-hidden className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Section>
      <Section id="compare-title">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="compare-title" eyebrow="Compare sizes" title={<>All Three Sizes, <Highlight>Side by Side</Highlight></>} />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full min-w-[40rem] text-left">
              <caption className="sr-only">Lupo dumpster sizes compared</caption>
              <thead className="bg-zinc-100 text-sm">
                <tr>
                  {["Size", "Dimensions", "Holds", "Weight included", "Flat price"].map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 font-semibold text-zinc-600">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {sizes.map((s) => (
                  <tr key={s.id} className={s.id === size.id ? "bg-brand-soft/50" : undefined}>
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">
                      {s.id === size.id ? (
                        s.name
                      ) : (
                        <Link href={s.href} className="text-brand-hover underline underline-offset-4">
                          {s.name}
                        </Link>
                      )}
                    </th>
                    <td className="px-5 py-4 text-zinc-700">{s.dimensions}</td>
                    <td className="px-5 py-4 text-zinc-700">{s.loads.replace("About ", "")}</td>
                    <td className="px-5 py-4 text-zinc-700">{s.weight.replace(" included", "")}</td>
                    <td className="px-5 py-4 font-semibold text-ink">${s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-zinc-600">
            Every size includes delivery, pickup, and disposal up to the weight limit. Not sure? Compare{" "}
            {others.map((s, i) => (
              <span key={s.id}>
                {i > 0 && " or "}
                <Link href={s.href} className="font-semibold text-ink underline underline-offset-4">
                  the {s.name.toLowerCase()}
                </Link>
              </span>
            ))}
            .
          </p>
        </div>
      </Section>
    </>
  );
}

function JunkPricing({ data }) {
  return (
    <Section id="pricing-title" tone="zinc">
      <div className={container}>
        <SectionHeading id="pricing-title" eyebrow="How pricing works" title={<Titled parts={data.title} />} intro={data.intro} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {data.factors.map((f, i) => (
            <article key={f.title} className="rounded-2xl bg-white p-7">
              <span aria-hidden className="font-display text-5xl font-extrabold leading-none text-brand/25">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{f.text}</p>
            </article>
          ))}
        </div>
        {data.dumpsterNote !== false && (
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-ink p-6 text-center text-white sm:flex-row sm:text-left">
          <p className="flex-1">
            <span className="font-display text-2xl font-bold">Rather load it yourself?</span>
            <br />
            <span className="text-zinc-300">
              A dumpster rental starts at ${lowestPrice} flat, with delivery, pickup, and disposal included.
            </span>
          </p>
          <Link
            href="/dumpster-rental-pricing"
            className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-lg bg-white px-5 font-bold text-ink hover:bg-zinc-200"
          >
            See dumpster prices <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        )}
      </div>
    </Section>
  );
}

export function ItemsLists({ data = {} }) {
  const yes = data.accepted || acceptedItems;
  const no = data.notAccepted || prohibitedItems;
  return (
    <Section id="items-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="items-title"
          eyebrow={data.eyebrow || "What can go"}
          title={<Titled parts={data.title || ["What We ", "Can and Can't", " Take"]} />}
          intro={data.intro}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="font-display text-2xl font-bold text-ink">{data.yesTitle || "Good to go"}</h3>
            <ul className="mt-5 space-y-3">
              {yes.map((item) => (
                <li key={item} className="flex gap-3 text-zinc-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check aria-hidden className="h-4 w-4 text-green-700" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-100 p-8">
            <h3 className="font-display text-2xl font-bold text-ink">{data.noTitle || "Ask us first"}</h3>
            <ul className="mt-5 space-y-3">
              {no.map((item) => (
                <li key={item} className="flex gap-3 text-zinc-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                    <X aria-hidden className="h-4 w-4 text-brand-hover" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-600">
              Not sure about something? Call or text{" "}
              <a href={telHref} className="font-semibold text-ink underline underline-offset-4">
                {siteConfig.phone}
              </a>{" "}
              {data.footnote || "before you toss it."}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Story({ data }) {
  return (
    <Section id="story-title" tone="zinc">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="story-title" align="left" eyebrow={data.eyebrow} title={<Titled parts={data.title} />} />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-700">
          {data.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

const TOP_CITIES = [
  "New Port Richey",
  "Holiday",
  "Trinity",
  "Hudson",
  "Odessa",
  "Palm Harbor",
  "Land O' Lakes",
  "Wesley Chapel",
  "Spring Hill",
  "Lutz",
  "Dunedin",
  "Clearwater",
];

export function Areas({ label }) {
  const all = serviceAreas.flatMap((a) => a.cities);
  const top = TOP_CITIES.map((n) => all.find((c) => c.name === n)).filter(Boolean);
  return (
    <Section id="areas-title">
      <div className={container}>
        <SectionHeading
          id="areas-title"
          eyebrow="Service area"
          title={<>Serving Pasco County <Highlight>and Tampa Bay</Highlight></>}
          intro={`Based in ${siteConfig.address.city}, FL, we work throughout Pasco, Pinellas, Hernando, and North Hillsborough.`}
        />
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {top.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-zinc-200 px-4 text-sm font-semibold text-ink hover:border-brand hover:text-brand-hover"
              >
                <MapPin aria-hidden className="h-4 w-4 text-brand" />
                {label} in {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link href="/service-locations" className="inline-flex items-center gap-1.5 font-semibold text-brand-hover underline-offset-4 hover:underline">
            See every city we serve <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </Section>
  );
}

function Related({ services = [], posts = [] }) {
  return (
    <Section id="related-title" tone="zinc">
      <div className={container}>
        <SectionHeading id="related-title" eyebrow="Keep exploring" title={<>Related <Highlight>Services & Guides</Highlight></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group flex flex-col rounded-2xl bg-white p-7 transition-shadow hover:shadow-lg">
              <h3 className="font-display text-2xl font-bold text-ink group-hover:text-brand-hover">{s.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-zinc-600">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-hover">
                Learn more <span className="sr-only">about {s.name}</span> <ArrowRight aria-hidden className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        {posts.length > 0 && (
          <div className="mt-10 rounded-2xl bg-white p-7">
            <h3 className="font-display text-xl font-bold text-ink">From the blog</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {posts.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="inline-flex items-start gap-2 font-semibold text-ink underline-offset-4 hover:text-brand-hover hover:underline">
                    <ArrowRight aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}

function NprCallout({ text }) {
  return (
    <div className="bg-white pb-4">
      <div className={container}>
        <p className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 p-5 text-center text-zinc-700">
          {text || "Working on the coast?"}{" "}
          <Link href={NPR_HUB} className="font-semibold text-brand-hover underline underline-offset-4">
            See dumpster rental in New Port Richey, FL
          </Link>
          , our busiest service area.
        </p>
      </div>
    </div>
  );
}

function serviceSchema(data, url) {
  const isRental = data.kind !== "junk";
  const size = data.sizeId && getSize(data.sizeId);
  const graph = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: plainTitle(data.hero.title),
      serviceType: data.serviceType,
      description: data.description,
      url,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: serviceAreas.map((a) => ({ "@type": "AdministrativeArea", name: `${a.county}, FL` })),
      ...(isRental && !size && {
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: Math.min(...sizes.map((s) => s.price)),
          highPrice: Math.max(...sizes.map((s) => s.price)),
          offerCount: sizes.length,
        },
      }),
    },
  ];
  if (size) {
    graph.push({
      "@type": "Product",
      "@id": `${url}#product`,
      name: `${size.name} Rental`,
      description: `${size.dimensions}. ${size.loads}. ${size.weight}. Delivery, pickup, and disposal up to the weight limit included.`,
      brand: { "@type": "Brand", name: siteConfig.name },
      image: `${BASE_URL}${data.hero.image}`,
      offers: {
        "@type": "Offer",
        price: size.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url,
        seller: { "@id": `${BASE_URL}/#organization` },
      },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

/**
 * Data-driven service page following docs/service-pages.md §5. Content lives in
 * `content/services/<slug>.js`; `kind` is "rental", "size", or "junk".
 */
export default function ServicePage({ data }) {
  const { selectedSize, setSelectedSize, scrollToBooking, bookSize } = useBooking();
  const isJunk = data.kind === "junk";
  const size = data.sizeId && getSize(data.sizeId);
  const url = `${BASE_URL}${data.path}`;
  const cta = isJunk
    ? { label: data.ctaLabel || "Get Your Price", href: "#quote" }
    : { label: "Book Your Dumpster" };
  const scrollToQuote = () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const onPrimary = isJunk ? scrollToQuote : scrollToBooking;
  const selected = selectedSize || data.sizeId || "";

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <Seo title={data.title} description={data.description} path={data.path} image={data.hero.image} imageAlt={data.hero.imageAlt} keywords={data.keywords} />
        <script
          type="application/ld+json"
          key="service-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(data, url)) }}
        />
      </Head>

      <PageHero
        eyebrow={data.hero.eyebrow}
        title={<Titled parts={data.hero.title} tone="dark" />}
        intro={data.hero.intro}
        image={data.hero.image}
        onBook={onPrimary}
        actions={
          isJunk ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:hidden">
              <button
                type="button"
                onClick={scrollToQuote}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand px-7 font-bold text-white hover:bg-brand-hover"
              >
                {cta.label} <ArrowRight aria-hidden className="h-5 w-5" />
              </button>
              <a href={telHref} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-7 font-bold text-white hover:bg-white hover:text-ink">
                Call {siteConfig.phone}
              </a>
            </div>
          ) : undefined
        }
        aside={
          isJunk ? (
            <QuoteCard service={data.serviceType} title={data.quoteTitle} placeholder={data.quotePlaceholder} source={`${data.serviceType} page`} />
          ) : (
            <BookingCard selectedSize={selected} onSizeChange={setSelectedSize} source={`${plainTitle(data.hero.title)} page`} />
          )
        }
      />
      <Breadcrumbs />

      <Stakes data={data.stakes} />
      <About data={data.about} />
      {isJunk ? <Values data={data.values || { title: ["Junk Removal Without ", "the Heavy Lifting"], items: junkValues }} /> : data.values ? <Values data={data.values} /> : <ValueProps reverse />}
      <Proof data={data.proof} />
      <PlanSteps
        onBook={onPrimary}
        title={data.stepsTitle ? <Titled parts={data.stepsTitle} /> : isJunk ? <>Junk Gone in <Highlight>3 Easy Steps</Highlight></> : undefined}
        items={isJunk ? data.steps || junkSteps : undefined}
        intro={data.stepsIntro || (isJunk ? "No guesswork and no surprise charges. Here's how it works." : undefined)}
        label={cta.label}
      />
      {size ? (
        <SizeSpotlight size={size} data={data.sizing} onBook={bookSize} />
      ) : isJunk ? (
        <JunkPricing data={data.pricing} />
      ) : (
        <PriceCards onSelect={bookSize} />
      )}
      <ItemsLists data={data.items} />
      <Story data={data.story} />
      <NprCallout text={data.nprText} />
      <Areas label={data.areaLabel || "Dumpster rental"} />
      <Related services={data.related} posts={data.posts} />
      <FaqSection
        id="service-faq-title"
        className="bg-white"
        title={<Titled parts={data.faqTitle || [`${data.serviceType} `, "FAQs"]} />}
        items={data.faqs}
      />
      <CtaBand
        onBook={onPrimary}
        label={cta.label}
        title={data.ctaTitle && <Titled parts={data.ctaTitle} tone="dark" />}
        text={
          data.ctaText ||
          (isJunk
            ? "Tell us what needs to go and get a firm price. Our crew does the lifting, and your space is clear."
            : undefined)
        }
      />
    </>
  );
}

