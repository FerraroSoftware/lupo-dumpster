import { LegalPage } from "@/components/site/legal-page";
import { prohibitedItems, rental, siteConfig, sizes } from "@/lib/site-config";

// TODO(legal): have an attorney review before launch.
// TODO(D1): add rental days, extra-day fee, and overweight $/ton once confirmed.
const sections = [
  {
    title: "Your flat price",
    body: [
      `Our flat rates are ${sizes.map((s) => `${s.name} $${s.price} (${s.weight})`).join(", ")}. Each price includes ${rental.included
        .slice(0, 2)
        .join(" and ")
        .toLowerCase()}.`,
      "Your quoted price, rental period, and included weight are confirmed when you book. Anything that could add to the price is explained before delivery.",
    ],
  },
  {
    title: "What can change the price",
    body: [
      "Keeping the dumpster longer than the agreed rental period, going over the included weight, or loading items we can't accept may add charges. Weight is measured at the disposal facility. We'll tell you these rates when you book.",
    ],
  },
  {
    title: "What can't go in",
    body: [
      `${prohibitedItems.join(", ")}, and anything else that's hazardous or illegal to dispose of in a landfill. Ask us before loading anything you're unsure about. Prohibited items found in a load may be returned or charged for disposal.`,
    ],
  },
  {
    title: "Loading and placement",
    body: [
      "Load debris level with the top of the dumpster. Overfilled loads can't be hauled safely and may need to be leveled before pickup.",
      "You choose the drop spot and confirm it's safe for a truck and trailer. We set every dumpster on protective boards, but we can't be responsible for damage to surfaces not suited to the weight, or to underground lines, sprinklers, or septic systems in the drop area. If the dumpster has to sit on a street or right-of-way, you're responsible for any required permit.",
    ],
  },
  {
    title: "Access for delivery and pickup",
    body: [
      "Please keep the drop spot clear on delivery day and the path clear for pickup. If we can't reach the dumpster at a scheduled pickup, we'll contact you to reschedule.",
    ],
  },
  {
    title: "Cancellations and changes",
    body: [
      "Need to change your date or cancel? Call or text us as soon as you can and we'll work with you.",
    ],
  },
];

export default function RentalTerms() {
  return (
    <LegalPage
      title="Rental Terms"
      metaTitle={`Dumpster Rental Terms | ${siteConfig.name}`}
      description={`The plain-English terms for renting a ${siteConfig.name} dumpster: what your flat price includes, what can change it, loading rules, and placement.`}
      path="/rental-terms"
      updated="October 26, 2026"
      intro="Renting a dumpster should be simple. These are the ground rules, in plain English."
      sections={sections}
    />
  );
}
