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
const title = `$${facebookOffer.price} ${sizeLabel} Dumpster ${facebookOffer.label} | Lupo`;
const description = `Claim our ${facebookOffer.label.toLowerCase()}: a ${sizeLabel} dumpster for $${facebookOffer.price} flat with ${facebookOffer.days} days to fill. Delivery, pickup, and disposal included.`;

const included = [
  `${size.name} (${size.dimensions})`,
  `${facebookOffer.days} days to fill it`,
  size.weight,
  ...rental.included.slice(0, 3),
];

const faqs = [
  {
    q: "Who can claim this offer?",
    a: `Anyone booking a ${sizeLabel} dumpster in our Pasco County and Tampa Bay service area through this page. Mention the ${facebookOffer.label.toLowerCase()} if you call.`,
  },
  {
    q: "What's included in the price?",
    a: `${included.join(", ")}. Extra days or going over the weight limit are quoted before delivery.`,
  },
  {
    q: "What if I need a bigger dumpster?",
    a: "Tell us when we call and we'll quote the 15 or 20-yard at our regular flat rate instead.",
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
        eyebrow={`${facebookOffer.label} · Pasco County & Tampa Bay`}
        title={
          <>
            Your {sizeLabel} Dumpster for <Highlight tone="dark">${facebookOffer.price} Flat</Highlight>
          </>
        }
        intro={`Get a ${size.name.toLowerCase()} delivered to your driveway with ${facebookOffer.days} days to fill it and ${size.weight}. Delivery, pickup, and disposal are included, so the price you claim is the price you pay.`}
        onBook={scrollToForm}
        aside={
          <QuoteCard
            service={`${size.name} rental (${facebookOffer.label}, $${facebookOffer.price})`}
            title={`Claim Your $${facebookOffer.price} Dumpster`}
            intro="Leave your details and we'll call or text to confirm your address and delivery date."
            detailsLabel="What's the project?"
            requireDetails={false}
            placeholder="Example: garage cleanout, starting Saturday"
            submitLabel={`Claim My $${facebookOffer.price} Dumpster`}
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
                Everything Included for <Highlight>${facebookOffer.price}</Highlight>
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

      <PlanSteps onBook={scrollToForm} label={`Claim My $${facebookOffer.price} Dumpster`} />
      <GuideProof />
      <FaqSection id="offer-faq-title" className="bg-white" title={<>Offer <Highlight>FAQs</Highlight></>} items={faqs} />
      <CtaBand
        onBook={scrollToForm}
        label={`Claim My $${facebookOffer.price} Dumpster`}
        text={`${size.name}, ${facebookOffer.days} days, $${facebookOffer.price} flat. Delivery, pickup, and disposal included.`}
      />
    </>
  );
}
