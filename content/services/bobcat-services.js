import { siteConfig } from "@/lib/site-config";

const bobcatServices = {
  path: "/services/bobcat-services",
  kind: "junk",
  serviceType: "Bobcat services",
  title: "Bobcat Services in Pasco County, FL | Lupo Dumpster",
  description: `Bobcat services in Pasco County, FL: light grading, land clearing, leveling, and debris pushing. Family-owned, rated ${siteConfig.rating.value} on Google. Firm price first.`,
  keywords: [
    "bobcat services Pasco County",
    "bobcat service near me",
    "light grading",
    "land clearing",
    "skid steer services",
    "yard leveling",
  ],
  quoteTitle: "Get Your Bobcat Service Price",
  quotePlaceholder: "Example: level a bumpy backyard, clear brush from a lot, or grade a spot for a shed",
  ctaLabel: "Get Your Price",
  hero: {
    eyebrow: "Light grading & clearing · Pasco County, FL",
    title: ["Get Your Yard Ready with ", "Bobcat Services in Pasco County"],
    intro:
      "Lupo's bobcat services handle the small earthwork jobs that are too big for a shovel: light grading, land clearing, leveling, debris pushing, and cleanup after small demolition. We work on residential lots in Holiday, New Port Richey, and across Pasco County, and you get a firm price before we start.",
    image: "/new/bob-catting.webp",
    imageAlt: "Lupo equipment and dump trailer at a Pasco County clearing job",
  },
  stakes: {
    title: ["Some Jobs Are ", "Too Big for a Shovel"],
    intro: "Uneven ground and overgrown lots don't fix themselves, and renting a machine you've never run is a gamble.",
    items: [
      { icon: "Shovel", title: "Days of hand digging", text: "Leveling a yard or moving dirt by wheelbarrow turns a weekend project into a month." },
      { icon: "Tractor", title: "Rental machines, no experience", text: "Renting a skid steer means pickup, drop-off, a learning curve, and the risk of tearing up the yard." },
      { icon: "TreePine", title: "Brush that keeps spreading", text: "Overgrown corners and fallen branches take over a lot fast in the Florida heat." },
    ],
    closing: "Get the ground ready without wrestling a machine yourself.",
  },
  about: {
    eyebrow: "What we do",
    title: ["Small Earthwork, ", "Handled for You"],
    paragraphs: [
      "Our bobcat work is focused on light, residential jobs. We grade and level patches of yard, clear brush and small growth from a lot, push debris into piles, and clean up the rubble after a small demolition, like an old shed or patio.",
      "Because we also run dump trailers, cleared material doesn't have to sit around. We can usually load it straight into a trailer and haul it away. For bigger excavation or anything underground, ask us first and we'll tell you honestly whether it's a fit.",
    ],
    perfectFor: ["Backyard leveling", "Lot and brush clearing", "Grading for a shed pad", "Storm debris cleanup", "Shed or patio demo cleanup", "Spreading fill dirt"],
    image: "/bobcat-servicing.webp",
    imageAlt: "Lupo compact machine loading cleared brush into a dump trailer in Pasco County",
  },
  values: {
    title: ["Why Hire Lupo ", "for Bobcat Work"],
    items: [
      { icon: "Tractor", title: "Equipment and operator", text: "We bring the machine and run it, so there's nothing for you to rent, tow, or learn." },
      { icon: "Truck", title: "Debris hauled away", text: "Cleared brush and debris can go right into one of our dump trailers and off your property." },
      { icon: "Tag", title: "Firm price first", text: "Describe the job or send photos and you'll get a price before we schedule." },
      { icon: "Home", title: "Family-owned and local", text: "Based in Holiday, FL. You talk to the owners, not a call center." },
    ],
  },
  proof: {
    title: ["A Local Crew ", "You Can Count On"],
    intro: "Customers keep coming back because we price fairly and show up when we say we will.",
    reviewNames: ["Joseph S.", "David C.", "Brian O."],
  },
  stepsTitle: ["Your Site Cleared in ", "3 Easy Steps"],
  stepsIntro: "Tell us about the job, get a firm price, and we show up with the machine.",
  steps: [
    { title: "Describe the job", text: "Use the form, or call or text photos of the area and what you want done." },
    { title: "Get a firm price", text: "We'll look over the details, give you a price, and set a date." },
    { title: "We do the work", text: "We bring the equipment, handle the grading or clearing, and haul off the debris if you need it." },
  ],
  pricing: {
    dumpsterNote: false,
    title: ["How We Price ", "Bobcat Jobs"],
    intro:
      "Every site is different, so we price by the job. Send photos or a description and you'll get a firm price before anything is scheduled.",
    factors: [
      { title: "Size of the area", text: "A small patch of yard takes less machine time than a full lot." },
      { title: "Ground and growth", text: "Thick brush, roots, or rough ground take more work than light grading on open soil." },
      { title: "Access and haul-off", text: "Tight gates and fenced backyards add time, and hauling away the cleared material is priced in if you need it." },
    ],
  },
  items: {
    eyebrow: "What we handle",
    yesTitle: "Jobs we take",
    footnote: "and we'll tell you if it's a fit.",
    title: ["Jobs We ", "Take On"],
    intro: "We stick to light work. If your project is bigger, call us and we'll talk it through.",
    accepted: [
      "Light grading and leveling",
      "Land and brush clearing",
      "Pushing and piling debris",
      "Spreading fill dirt",
      "Small demolition cleanup",
      "Storm debris cleanup",
    ],
    notAccepted: [
      "Large excavation or deep digging",
      "Septic system work",
      "Removing large trees",
      "Large commercial site work",
    ],
  },
  story: {
    eyebrow: "Bobcat services in Pasco County, FL",
    title: "Ground Work Without the Headache",
    paragraphs: [
      "A backyard in Hudson with low spots and bumps that make mowing a chore. A lot in Land O' Lakes overrun with brush. A pile of rubble left after an old shed comes down in New Port Richey. These are the small earthwork jobs that are too big to tackle by hand and too small for a big excavation company.",
      "Lupo's bobcat services fill that gap. We bring the equipment and the operator for light grading, land clearing, leveling, debris pushing, and small demolition cleanup across Pasco County. Since we also run dump trailers, we can usually haul the cleared material away in the same visit.",
      "Tell us what you're working with and we'll give you a firm price up front. If the job calls for heavier equipment, septic work, or large tree removal, we'll tell you straight. We're a family business in Holiday, FL, and we'd rather point you in the right direction than take on a job we shouldn't.",
    ],
  },
  nprText: "Have a lot to clear near the coast?",
  related: [
    { name: "Yard Waste Removal", href: "/services/yard-waste-removal", text: "Branches, palm fronds, and yard debris loaded up and hauled away." },
    { name: "Construction Debris Removal", href: "/services/construction-debris-removal", text: "Leftover building and demolition debris cleared off your property." },
    { name: "20-Yard Dumpster", href: "/services/20-yard-dump-trailer", text: "Doing the cleanup yourself? Our largest trailer holds big debris piles." },
  ],
  posts: [
    { title: "Dump Trailer Rental: How It Works and What It Costs", href: "/blog/dump-trailer-services-explained" },
    { title: "When to Rent a Dumpster: 5 Common Projects", href: "/blog/top-five-projects-that-call-for-a-dumpster-rental" },
  ],
  faqTitle: ["Bobcat Service ", "FAQs"],
  faqs: [
    {
      q: "What bobcat services do you offer?",
      a: "Light grading, land and brush clearing, leveling, debris pushing, and cleanup after small demolition projects. For anything bigger, ask us first.",
    },
    {
      q: "How much do bobcat services cost?",
      a: "It depends on the size of the area, the ground and growth, and access. Send photos or a description and we'll give you a firm price before scheduling.",
    },
    {
      q: "Can you haul away the debris too?",
      a: "Usually, yes. We run dump trailers, so cleared brush and debris can be loaded and hauled off. We'll include it in your price if you need it.",
    },
    {
      q: "Do you do excavation or septic work?",
      a: "We focus on light work. Large excavation and septic work aren't what we're set up for, so ask us first and we'll give you an honest answer.",
    },
    {
      q: "Can you remove trees?",
      a: "We clear brush and small growth. For large trees, ask us first. Those jobs often need a dedicated tree service.",
    },
  ],
  ctaTitle: ["Ready to Get Your ", "Ground in Shape?"],
  ctaText: "Tell us about the job and get a firm price. We bring the equipment, do the work, and can haul off the debris.",
};

export default bobcatServices;
