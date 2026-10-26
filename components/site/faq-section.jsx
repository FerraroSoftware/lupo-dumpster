import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";

/**
 * Visible FAQ accordion + matching FAQPage JSON-LD. Schema is built from the
 * same `items` that render, so it never drifts from the visible content.
 */
export function FaqSection({ id = "faq-title", eyebrow = "Questions", title, intro, items, className = "bg-zinc-100" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section aria-labelledby={id} className={`py-20 lg:py-28 ${className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={intro} />
        <Accordion type="single" collapsible className="mt-12 rounded-2xl bg-white px-6 shadow-sm ring-1 ring-zinc-200/60">
          {items.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-zinc-200 last:border-b-0">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-ink hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-zinc-700">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
