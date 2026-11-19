import Head from "next/head";
import Link from "next/link";
import { Check, Info, Minus, X } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookingCard } from "@/components/site/booking-card";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand, SizeCards } from "@/components/site/home-sections";
import { SizeQuiz } from "@/components/site/size-quiz";
import { FaqSection } from "@/components/site/faq-section";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { prohibitedItems, rental, siteConfig } from "@/lib/site-config";
import { useBooking } from "@/lib/use-booking";

const title = "Dumpster Rental Quote in Pasco County, FL | Lupo";
const description = `Get a free dumpster rental quote in Pasco County. Compare 10, 15 & 20-yard sizes; delivery, pickup & disposal included. Call ${siteConfig.phone}.`;

// TODO(D1): add the actual extra-day and overweight rates once confirmed.
const extras = [
  {
    title: "Extra rental days",
    text: "Need it longer? Tell us when you ask for a quote and we'll include the extra days up front.",
  },
  {
    title: "Going over the included weight",
    text: "Each size includes a set tonnage. If you think you'll go over, tell us and we'll build it into your quote before delivery.",
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
  { label: "Free, upfront quote", lupo: true, typical: "Varies" },
  { label: "Delivery & pickup included", lupo: true, typical: "Often extra" },
  { label: "Disposal included up to the weight limit", lupo: true, typical: "Varies" },
  { label: "Extra charges explained before delivery", lupo: true, typical: "Often after" },
  { label: "Who answers the phone", lupo: "The local owners", typical: "A call center" },
  { label: "Delivery speed", lupo: "Often same day", typical: "Days out" },
];

const pricingFaqs = [
  {
    q: "How much does it cost to rent a dumpster in Pasco County?",
    a: `It depends on the size, the weight of your load, how long you need it, and where you are. Call or text ${siteConfig.phone} or request a free quote online and we'll give you an upfront price that includes delivery, pickup, and disposal up to the weight limit.`,
  },
  {
    q: "What's included in my quote?",
    a: `${rental.included.join(". ")}. You'll know the full price before we deliver.`,
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Your quote covers delivery, pickup, and disposal up to the weight limit. The only things that can change it are extra rental days, going over the included weight, or items we can't accept, and we tell you about those before delivery, never after.",
  },
  {
    q: "How is the weight limit measured?",
    a: "Your load is weighed at the disposal facility. Each size includes a set tonnage (2, 3, or 4 tons). Most household cleanouts stay well under; heavy materials like concrete, dirt, or roofing shingles add up fastest, so tell us if that's what you're tossing.",
  },
  {
    q: "Is it better to rent one bigger dumpster or two small ones?",
    a: "Usually one bigger dumpster. If you're between sizes, size up. It beats paying for a second haul. Not sure? Pick “Not sure” when you request a quote and we'll recommend one.",
  },
  {
    q: "How much does junk removal cost instead?",
    a: `Junk removal depends on how much we haul and how much loading is involved. Call or text ${siteConfig.phone} with a few photos and we'll give you a free quote before we start.`,
  },
];

export default function DumpsterRentalPricing() {
  const { selectedSize, setSelectedSize, scrollToBooking, bookSize } = useBooking();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/dumpster-rental-pricing" />
      </Head>

      <PageHero
        eyebrow="Dumpster sizes & free quotes · Pasco County, FL"
        title={
          <>
            Get a Free Dumpster Rental Quote: <Highlight tone="dark">Upfront, No Surprises</Highlight>
          </>
        }
        intro="Pick a 10, 15, or 20-yard dumpster and tell us your ZIP. We'll send a free, upfront quote that includes delivery, pickup, and disposal up to the weight limit."
        onBook={scrollToBooking}
        aside={<BookingCard selectedSize={selectedSize} onSizeChange={setSelectedSize} source="Sizes & quote page booking card" />}
      />
      <Breadcrumbs />

      <SizeCards onSelect={bookSize} showSizesLink={false} />

      <section aria-labelledby="included-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="included-title"
            eyebrow="What your quote covers"
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
                {[...rental.included, "Your full price, quoted before we deliver"].map((item) => (
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
                What an <Highlight>Upfront Quote</Highlight> Means for You
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
              quote a low base price and add delivery, fuel, and disposal later. Lupo&apos;s free
              quote rolls delivery, pickup, and disposal up to the weight limit into one upfront
              price, so you know the full cost before we deliver.
            </p>
            <p>
              To keep your cost down, pick the size that fits the whole job (one bigger dumpster
              usually beats two hauls), keep heavy materials like concrete and dirt separate, and
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
            Dumpster Quote <Highlight>FAQs</Highlight>
          </>
        }
        items={pricingFaqs}
      />

      <CtaBand onBook={scrollToBooking} />
    </>
  );
}
