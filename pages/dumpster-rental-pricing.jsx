import Head from "next/head";
import Link from "next/link";
import { Check, Info, Minus, X } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookingCard } from "@/components/site/booking-card";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand, PriceCards } from "@/components/site/home-sections";
import { SizeQuiz } from "@/components/site/size-quiz";
import { FaqSection } from "@/components/site/faq-section";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { lowestPrice, prohibitedItems, rental, siteConfig, sizes } from "@/lib/site-config";
import { useBooking } from "@/lib/use-booking";

const priceList = sizes.map((s) => `${s.shortName.replace(" yd", "-yard")} $${s.price}`).join(", ");
const title = `Dumpster Rental Prices in Pasco County, FL | From $${lowestPrice}`;
const description = `Flat-rate dumpster prices: ${priceList}. Delivery, pickup & disposal included. Book online or call ${siteConfig.phone}.`;

// TODO(D1): add the actual extra-day and overweight rates once confirmed.
const extras = [
  {
    title: "Extra rental days",
    text: "Need it longer? Tell us when you book and we'll quote the extra days up front.",
  },
  {
    title: "Going over the included weight",
    text: "Each size includes a set tonnage. If you think you'll go over, we'll tell you the cost per ton before delivery.",
  },
  {
    title: "Items we can't accept",
    text: `Some things can't go in a dumpster: ${prohibitedItems.join(", ").toLowerCase()}. Ask us about anything you're unsure of before you toss it.`,
  },
  {
    title: "Street placement permit",
    text: "Only if the dumpster has to sit on the street or right-of-way. Driveway drops usually don't need one.",
  },
];

const comparison = [
  { label: "Price published online", lupo: true, typical: "Call for a quote" },
  { label: "Delivery & pickup included", lupo: true, typical: "Often extra" },
  { label: "Disposal included up to the weight limit", lupo: true, typical: "Varies" },
  { label: "Extra charges explained before delivery", lupo: true, typical: "Often after" },
  { label: "Who answers the phone", lupo: "The local owners", typical: "A call center" },
  { label: "Delivery speed", lupo: "Often same day", typical: "Days out" },
];

const pricingFaqs = [
  {
    q: "How much does it cost to rent a dumpster in Pasco County?",
    a: `Lupo's flat rates are ${priceList}. Every price includes delivery, pickup, and disposal up to the included weight limit.`,
  },
  {
    q: "What's included in the flat price?",
    a: `${rental.included.join(". ")}. You'll see the full price before you book.`,
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The only things that can change the price are extra rental days, going over the included weight, or items we can't accept, and we tell you those costs before delivery, never after.",
  },
  {
    q: "How is the weight limit measured?",
    a: "Your load is weighed at the disposal facility. Each size includes a set tonnage (2, 3, or 4 tons). Most household cleanouts stay well under; heavy materials like concrete, dirt, or roofing shingles add up fastest, so tell us if that's what you're tossing.",
  },
  {
    q: "Is it cheaper to rent a bigger dumpster or two small ones?",
    a: "Usually one bigger dumpster. If you're between sizes, size up. It costs less than a second haul. Not sure? Pick “Not sure” when you book and we'll recommend one.",
  },
  {
    q: "How much does junk removal cost instead?",
    a: `Junk removal is priced by how much we haul and how much loading is involved. Call or text ${siteConfig.phone} with a few photos and we'll give you a firm price before we start.`,
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": sizes.map((s) => ({
    "@type": "Product",
    "@id": `${siteConfig.url}${s.href}#product`,
    name: `${s.name} Rental`,
    description: `${s.dimensions}. ${s.loads}. ${s.weight}. Delivery, pickup, and disposal up to the weight limit included.`,
    brand: { "@type": "Brand", name: siteConfig.name },
    url: `${siteConfig.url}${s.href}`,
    offers: {
      "@type": "Offer",
      price: s.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/dumpster-rental-pricing`,
      seller: { "@id": `${siteConfig.url}/#organization` },
    },
  })),
};

export default function DumpsterRentalPricing() {
  const { selectedSize, setSelectedSize, scrollToBooking, bookSize } = useBooking();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/dumpster-rental-pricing" />
        <script
          type="application/ld+json"
          key="pricing-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />
      </Head>

      <PageHero
        eyebrow="Dumpster rental prices · Pasco County, FL"
        title={
          <>
            Dumpster Rental Prices: <Highlight tone="dark">One Flat Rate, No Surprises</Highlight>
          </>
        }
        intro={`${priceList}. Every price includes delivery, pickup, and disposal up to the weight limit, so the number you book is the number you pay.`}
        onBook={scrollToBooking}
        aside={<BookingCard selectedSize={selectedSize} onSizeChange={setSelectedSize} source="Pricing page booking card" />}
      />
      <Breadcrumbs />

      <PriceCards onSelect={bookSize} showPricingLink={false} />

      <section aria-labelledby="included-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="included-title"
            eyebrow="What you pay for"
            title={
              <>
                What&apos;s Included, and <Highlight>What Isn&apos;t</Highlight>
              </>
            }
            intro="Surprise fees are the number one complaint about dumpster companies. Here's everything, up front."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="font-display text-2xl font-bold text-ink">Always included</h3>
              <ul className="mt-6 space-y-4">
                {[...rental.included, "Your flat price, shown before you book"].map((item) => (
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
              <h3 className="font-display text-2xl font-bold text-ink">Only if it applies (we tell you first)</h3>
              <ul className="mt-6 space-y-5">
                {extras.map((e) => (
                  <li key={e.title} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                      <Info aria-hidden className="h-4 w-4 text-brand-hover" />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{e.title}</span>
                      <span className="text-zinc-600">{e.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SizeQuiz onBook={bookSize} />

      <section aria-labelledby="compare-title" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-title"
            eyebrow="Compare before you book"
            title={
              <>
                What a <Highlight>Flat Rate</Highlight> Means for You
              </>
            }
            intro="Not all dumpster quotes are equal. Here's what to ask any company before you book."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full min-w-[34rem] text-left">
              <caption className="sr-only">Lupo Dumpster Rentals compared with a typical dumpster broker</caption>
              <thead className="bg-zinc-100 text-sm">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold text-zinc-600">
                    What you get
                  </th>
                  <th scope="col" className="bg-ink px-5 py-4 font-display text-lg font-bold text-white">
                    Lupo
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-zinc-600">
                    Typical national broker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-5 py-4 font-medium text-ink">
                      {row.label}
                    </th>
                    <td className="bg-brand-soft/40 px-5 py-4 font-semibold text-ink">
                      {row.lupo === true ? (
                        <span className="flex items-center gap-2">
                          <Check aria-hidden className="h-5 w-5 text-green-700" />
                          Yes
                        </span>
                      ) : (
                        row.lupo
                      )}
                    </td>
                    <td className="px-5 py-4 text-zinc-600">
                      <span className="flex items-center gap-2">
                        {row.typical.startsWith("Often") || row.typical === "Varies" ? (
                          <Minus aria-hidden className="h-4 w-4 text-zinc-400" />
                        ) : (
                          <X aria-hidden className="h-4 w-4 text-zinc-400" />
                        )}
                        {row.typical}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="cost-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="cost-title"
            eyebrow="Dumpster rental cost guide"
            title="What Affects the Cost of a Dumpster Rental?"
            align="left"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-700">
            <p>
              Four things decide what you pay for a dumpster rental in Pasco County: the{" "}
              <strong className="text-ink">size</strong> you pick, the{" "}
              <strong className="text-ink">weight</strong> of what goes in, how{" "}
              <strong className="text-ink">long</strong> you keep it, and{" "}
              <strong className="text-ink">what</strong> you&apos;re throwing away. Many companies
              quote a low base price and add delivery, fuel, and disposal later. Lupo rolls
              delivery, pickup, and disposal up to the weight limit into one flat rate, starting at
              ${lowestPrice} for a 10-yard.
            </p>
            <p>
              To keep your cost down, pick the size that fits the whole job (one bigger dumpster
              is cheaper than two hauls), keep heavy materials like concrete and dirt separate, and
              leave out items we can&apos;t accept. If you&apos;re not sure which size you need, see
              our{" "}
              <Link
                href="/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size"
                className="font-semibold text-ink underline underline-offset-4 hover:text-brand-hover"
              >
                dumpster size guide
              </Link>{" "}
              or just call us. We&apos;ll recommend one in a minute.
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        id="pricing-faq-title"
        className="bg-white"
        title={
          <>
            Dumpster Pricing <Highlight>FAQs</Highlight>
          </>
        }
        items={pricingFaqs}
      />

      <CtaBand onBook={scrollToBooking} />
    </>
  );
}
