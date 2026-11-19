import Head from "next/head";
import { Check } from "lucide-react";
import Seo from "@/components/Seo";
import { PageHero } from "@/components/site/page-hero";
import { QuoteCard } from "@/components/site/quote-card";
import { CtaBand, GuideProof, PlanSteps } from "@/components/site/home-sections";
import { FaqSection } from "@/components/site/faq-section";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { facebookOffer, getSize, rental, siteConfig } from "@/lib/site-config";

const size = getSize(facebookOffer.sizeId);
const sizeLabel = size.shortName.replace(" yd", "-yard");
const title = `Free ${sizeLabel} Dumpster Quote | Lupo Dumpster Rentals`;
const description = `Get a free quote on a ${sizeLabel} dumpster with ${facebookOffer.days} days to fill. Delivery, pickup, and disposal included. Pasco County & Tampa Bay.`;

const included = [
  `${size.name} (${size.dimensions})`,
  `${facebookOffer.days} days to fill it`,
  size.weight,
  ...rental.included.slice(0, 3),
];

const faqs = [
  {
    q: "Who can get a quote?",
    a: `Anyone in our Pasco County and Tampa Bay service area. Fill out the form or call or text ${siteConfig.phone}, and mention you saw us on Facebook.`,
  },
  {
    q: "What's included in my quote?",
    a: `${included.join(", ")}. Extra days or going over the weight limit are quoted before delivery.`,
  },
  {
    q: "What if I need a bigger dumpster?",
    a: "Tell us when we call and we'll quote the 15 or 20-yard instead.",
  },
];

const scrollToForm = () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function FacebookOffer() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex, nofollow" key="robots" />
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/facebook-offer" />
      </Head>

      <PageHero
        eyebrow="Free quote · Pasco County & Tampa Bay"
        title={
          <>
            Your {sizeLabel} Dumpster, <Highlight tone="dark">Quoted Free</Highlight>
          </>
        }
        intro={`Get a ${size.name.toLowerCase()} delivered to your driveway with ${facebookOffer.days} days to fill it and ${size.weight}. Delivery, pickup, and disposal are included, so the price we quote is the price you pay.`}
        onBook={scrollToForm}
        aside={
          <QuoteCard
            service={`${size.name} quote (Facebook)`}
            title="Get Your Free Quote"
            intro="Leave your details and we'll call or text with your quote and to confirm your delivery date."
            detailsLabel="What's the project?"
            requireDetails={false}
            placeholder="Example: garage cleanout, starting Saturday"
            submitLabel="Get My Free Quote"
            thankYouQuery={{}}
            source="Facebook offer page"
          />
        }
      />

      <section aria-labelledby="included-title" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="included-title"
            eyebrow="What you get"
            title={
              <>
                Everything Included in <Highlight>Your Quote</Highlight>
              </>
            }
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-zinc-200 p-5 text-zinc-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check aria-hidden className="h-4 w-4 text-green-700" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-zinc-600">
            Perfect for {size.bestFor.toLowerCase()}. Questions? Call {siteConfig.phone}.
          </p>
        </div>
      </section>

      <PlanSteps onBook={scrollToForm} label="Get My Free Quote" />
      <GuideProof />
      <FaqSection id="offer-faq-title" className="bg-white" title={<>Quote <Highlight>FAQs</Highlight></>} items={faqs} />
      <CtaBand
        onBook={scrollToForm}
        label="Get My Free Quote"
        text={`${size.name}, ${facebookOffer.days} days to fill. Delivery, pickup, and disposal included. Get your free quote today.`}
      />
    </>
  );
}
