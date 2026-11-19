import { siteConfig } from "@/lib/site-config";
import { FaqSection } from "./faq-section";
import { Highlight } from "./section-heading";

export const homeFaqs = [
  {
    q: "How much does a dumpster rental cost in Pasco County?",
    a: `It depends on the size, the weight of what you're throwing out, and how long you need it. Call or text ${siteConfig.phone} or request a free quote online and we'll give you an upfront price that includes delivery, pickup, and disposal up to the weight limit. Need extra days or expect a heavy load? We'll include it in your quote, never after.`,
  },
  {
    q: "What size dumpster do I need?",
    a: "A 10-yard (about 3 pickup-truck loads) fits garage cleanouts and yard debris. A 15-yard fits kitchen remodels, flooring tear-outs, and moves. A 20-yard fits roof replacements, whole-home renovations, and full estate cleanouts. Not sure? Choose “Not sure” when you request a quote and we'll help.",
  },
  {
    q: "How fast can you deliver a dumpster?",
    a: "We often deliver the same day or the next day, depending on availability in your area. Request a quote online or call us in the morning for the best chance at same-day delivery.",
  },
  {
    q: "Will the dumpster damage my driveway?",
    a: "We place every dumpster on protective boards to help keep your concrete or pavers in good shape. Tell us where you want it and we'll position it carefully.",
  },
  {
    q: "Do I need a permit for a dumpster in Pasco County?",
    a: "Usually not if the dumpster sits on your own driveway or yard. If it needs to go on the street, sidewalk, or another public right-of-way, a permit is typically required. Check with your city or Pasco County Public Works, and with your HOA if you have one.",
  },
  {
    q: "What can't go in the dumpster?",
    a: "Most household junk, furniture, construction debris, roofing material, and yard waste is fine. We can't accept hazardous materials, chemicals, paint, tires, or electronics. Ask us if you're unsure about an item.",
  },
  {
    q: "Do you also offer junk removal?",
    a: `Yes. If you'd rather not do the loading, our crew handles full-service junk removal, cleanouts, and single-item pickups across Pasco County. Call ${siteConfig.phone} for a quote.`,
  },
];

export function HomeFaq() {
  return (
    <FaqSection
      title={
        <>
          Dumpster Rental <Highlight>FAQs</Highlight>
        </>
      }
      intro="Free, upfront quotes on every rental. Here's what Pasco County customers ask us most."
      items={homeFaqs}
    />
  );
}
