import { lowestPrice, sizes } from "@/lib/site-config";

const priceList = sizes.map((s) => `${s.shortName.replace(" yd", "-yard")} $${s.price}`).join(", ");
const ids = sizes.map((s) => s.id);
const sizeList = `${ids.slice(0, -1).join(", ")}, or ${ids[ids.length - 1]}`;

const constructionDumpsterRental = {
  path: "/services/construction-dumpster-rental",
  kind: "rental",
  serviceType: "Construction dumpster rental",
  title: "Construction Dumpster Rental in Pasco County, FL | Lupo",
  description: `Construction dumpster rental in Pasco County, FL for contractors, roofers, and remodelers. Flat rates from $${lowestPrice}, disposal included.`,
  keywords: [
    "construction dumpster rental",
    "construction dumpster Pasco County",
    "roofing dumpster rental",
    "contractor dumpster rental",
    "remodel dumpster rental",
  ],
  hero: {
    eyebrow: "For contractors, roofers & remodelers · Pasco County, FL",
    title: ["Keep the Crew Working with ", "Construction Dumpster Rental"],
    intro: `Lupo's construction dumpster rental gives contractors, roofers, and remodelers in New Port Richey and across Pasco County a flat-rate dump trailer on the job site. Pick a ${sizeList}-yard, starting at $${lowestPrice}. Delivery, pickup, and disposal up to the weight limit are included, and we can often deliver the same day.`,
    image: "/clean-construction.webp",
    imageAlt: "New home under construction in Pasco County",
  },
  stakes: {
    title: ["Debris Shouldn't ", "Set the Schedule"],
    intro: "On a job site, a late or overflowing dumpster costs labor hours, not just money.",
    items: [
      { icon: "HardHat", title: "A crew with nowhere to toss", text: "Demo is done and the old material has nowhere to go but a pile on the lawn." },
      { icon: "Construction", title: "A yard that looks like a job site", text: "Debris stacked by the house bothers the homeowner and stretches out cleanup at the end." },
      { icon: "BadgeDollarSign", title: "Quotes that change", text: "Fuel, delivery, and disposal fees added after the fact eat into your margin." },
    ],
    closing: "You run the job. We'll keep the debris moving.",
  },
  about: {
    eyebrow: "Built for job sites",
    title: ["A Dumpster That ", "Works Around Your Schedule"],
    paragraphs: [
      "Our construction dumpsters are low-profile dump trailers, so they back into a residential driveway or a tight lot without much fuss. We set each one on protective boards and put it where your crew can load it easily.",
      "Roofers usually go with the 20-yard for tear-offs. Remodelers often land on the 15-yard for kitchens and baths. Got back-to-back jobs, or need a swap when one fills up? Ask us and we'll work out the timing with you.",
    ],
    perfectFor: ["Roof tear-offs", "Kitchen and bath remodels", "Drywall and framing debris", "Flooring replacement", "Demolition cleanup", "New construction"],
    image: "/construction-debris.webp",
    imageAlt: "Construction and remodel debris piled up before a dumpster delivery in Pasco County",
  },
  values: {
    title: ["Why Contractors ", "Call Lupo"],
    items: [
      { icon: "Tag", title: "One flat price per haul", text: "Delivery, pickup, and disposal up to the weight limit are in the number you book, so it's easy to bid." },
      { icon: "Clock", title: "Often same-day delivery", text: "Call in the morning and we can often have a trailer on site that same day." },
      { icon: "Ruler", title: "Three sizes, one call", text: `${sizeList}-yard trailers, so you can match the dumpster to the phase of the job.` },
      { icon: "Users", title: "Talk to the owners", text: "You deal with Alex and Amanda directly, not a national dispatch line." },
    ],
  },
  proof: {
    title: ["Contractors Who ", "Keep Calling Back"],
    intro: "Repeat customers say the same thing: fair prices, and we show up when we say we will.",
    reviewNames: ["Joseph S.", "David C.", "Kerry S."],
  },
  items: {
    title: ["What Goes in a ", "Construction Dumpster"],
    intro: "Concrete, brick, and dirt add weight quickly. Tell us if they're in the mix so we can recommend the right size.",
    accepted: [
      "Shingles and roofing underlayment",
      "Drywall, lumber, and framing scraps",
      "Old cabinets, vanities, and countertops",
      "Flooring, carpet, and tile",
      "Siding, trim, and doors",
      "Fencing and deck boards",
    ],
  },
  story: {
    eyebrow: "Construction dumpster rental in Pasco County, FL",
    title: "Less Hauling, More Building",
    paragraphs: [
      "A roof tear-off in Hudson, a kitchen gut in Trinity, a bathroom remodel in Wesley Chapel: every job makes debris, and the crew needs somewhere to put it the moment demo starts. Lupo's construction dumpster rental gives contractors, roofers, and remodelers a flat-rate trailer on site so the work keeps moving.",
      `Pick the ${sizeList}-yard, starting at $${lowestPrice}, with delivery, pickup, and disposal up to the weight limit included. We set the low-profile trailer on protective boards in the driveway or on the lot, often the same day you call. When it's full, call or text and we'll pull it.`,
      "Running more than one site, or need a swap partway through a big job? Ask us. We're a family-owned company in Holiday, FL, serving Pasco, Pinellas, Hernando, and North Hillsborough, and we'll tell you honestly what we can schedule. A quick heads-up on the next phase of the job goes a long way.",
    ],
  },
  related: [
    { name: "20-Yard Dumpster", href: "/services/20-yard-dump-trailer", text: "Our largest trailer, the usual pick for roof tear-offs and big remodels." },
    { name: "Construction Debris Removal", href: "/services/construction-debris-removal", text: "Rather have our crew load it? We'll haul the debris pile for you." },
    { name: "Dumpster Rental Pricing", href: "/dumpster-rental-pricing", text: "Every size and flat rate in one place, plus what's included." },
  ],
  posts: [
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "When to Rent a Dumpster: 5 Common Projects", href: "/blog/top-five-projects-that-call-for-a-dumpster-rental" },
    { title: "How to Rent a Dumpster: Step-by-Step Tips", href: "/blog/how-to-rent-a-dumpster-tips-tricks-and-advice" },
  ],
  faqTitle: ["Construction Dumpster ", "FAQs"],
  faqs: [
    {
      q: "What size dumpster do I need for a construction job?",
      a: "Most kitchen and bath remodels fit a 15-yard. Roof tear-offs and whole-home renovations usually need the 20-yard. Small single-room jobs can get by with a 10-yard.",
    },
    {
      q: "How much does a construction dumpster cost?",
      a: `Flat rates are ${priceList}. Delivery, pickup, and disposal up to the included weight are part of the price.`,
    },
    {
      q: "Can you swap out a full dumpster during a job?",
      a: "Ask us. Call or text when it's getting full and we'll work out a pickup and a fresh drop-off around your schedule.",
    },
    {
      q: "Can roofing shingles go in?",
      a: "Yes. Shingles are heavy, so the weight limit is usually what you'll hit first. Tell us about the roof and we'll recommend the trailer.",
    },
    {
      q: "Can I put concrete or dirt in it?",
      a: "They're very heavy, so ask us before you load them. We'll tell you what works and which size keeps you under the weight limit.",
    },
    {
      q: "Do I need a permit for a job-site dumpster?",
      a: "Usually not if it sits on the property or in the driveway. If it has to go on the street or right-of-way, check with the city or county first.",
    },
  ],
};

export default constructionDumpsterRental;
