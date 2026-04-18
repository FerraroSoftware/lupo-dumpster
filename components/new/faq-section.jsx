import { HelpCircle } from "lucide-react";
import Script from "next/script";

/**
 * Per-city FAQ section + matching `FAQPage` JSON-LD.
 *
 * - Visible Q&As are generated from a city-specific template so Brooksville,
 *   Clearwater, etc. don't render hardcoded "Trinity" copy (bug introduced
 *   when the template was first forked from the NPR prototype).
 * - The emitted JSON-LD mirrors exactly what's visible — Google's FAQ
 *   rich-result guidance requires schema Q&As to match on-page content.
 * - Pass `faqs` explicitly to override the defaults for a given page.
 */
function buildDefaultFaqs({ city, county, countyPermitPhone }) {
  const permitAnswer = countyPermitPhone
    ? `If the dumpster sits on private property in ${city} (like your driveway), a permit is typically NOT required. If it must be placed on a public street or right-of-way, you'll need a permit from ${county} Public Works at ${countyPermitPhone}. We can advise you on your specific situation.`
    : `If the dumpster sits on private property in ${city} (like your driveway), a permit is typically NOT required. If it must be placed on a public street or right-of-way, you may need a permit from ${county}. We can advise you on your specific situation — just call us with the address.`;

  return [
    {
      question: `How much does it cost to rent a dumpster in ${city}, FL?`,
      answer: `Dumpster rental prices in ${city} vary based on size (10, 15, or 20 yard), rental duration, and the type of debris. Lupo Dumpster Rentals charges transparent flat rates with no hidden fees — contact us for a free quote tailored to your ${city} project.`,
    },
    {
      question: `What dumpster sizes do you offer for ${city} residents?`,
      answer: `We offer 10-yard, 15-yard, and 20-yard roll-off dumpsters in ${city}. A 10-yard works for garage cleanouts and small remodels, a 15-yard suits kitchen or basement projects, and a 20-yard handles full home renovations or major construction debris.`,
    },
    {
      question: `How long can I keep the dumpster at my ${city} location?`,
      answer: `Our standard rental period for ${city} customers is 7 days, with flexible extensions available. Let us know your project timeline when you book and we'll accommodate longer rentals at no surprise cost.`,
    },
    {
      question: `Do I need a permit for a dumpster in ${city}, FL?`,
      answer: permitAnswer,
    },
    {
      question: `How quickly can I get a dumpster delivered to ${city}?`,
      answer: `Most ${city} customers get same-day or next-day delivery when they book before 11 AM. Lupo Dumpster Rentals is locally owned and operated in ${county}, so we can usually have a dumpster in your driveway within 24 hours.`,
    },
    {
      question: `What if I fill my dumpster sooner than expected?`,
      answer: `No problem — just call and we'll arrange an early pickup at your ${city} location. If you need more capacity, we can swap in a fresh dumpster (additional rental charges apply).`,
    },
    {
      question: `Do you serve all of ${city} and surrounding areas?`,
      answer: `Yes. Lupo Dumpster Rentals delivers throughout ${city} and the broader ${county} service area, including neighboring cities and ZIP codes. Call (727) 317-6717 with your address to confirm coverage.`,
    },
  ];
}

export function FaqSection({
  title,
  subtitle,
  city = "New Port Richey",
  county = "Pasco County",
  countyPermitPhone,
  faqs,
  schemaId,
}) {
  const items = faqs || buildDefaultFaqs({ city, county, countyPermitPhone });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const scriptId = schemaId || `faq-schema-${city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="py-16 bg-white">
      <Script
        id={scriptId}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-black">
            {title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-50 rounded-lg p-6 border border-zinc-100"
            >
              <h3 className="text-xl font-bold mb-3 text-black">
                {faq.question}
              </h3>
              <p className="text-zinc-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
