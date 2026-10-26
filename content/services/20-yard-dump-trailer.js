import { getSize } from "@/lib/site-config";

const size = getSize("20");

const twentyYard = {
  path: "/services/20-yard-dump-trailer",
  kind: "size",
  sizeId: "20",
  serviceType: "20-yard dumpster rental",
  title: "20-Yard Dumpster Rental in Pasco County, FL | Lupo",
  description: `Rent a 20-yard dumpster in Pasco County for $${size.price} flat. ${size.loads.replace("About", "Holds about")}, ${size.weight}. Built for roofs and big remodels.`,
  keywords: [
    "20 yard dumpster rental",
    "20 yard dumpster Pasco County",
    "20 yard dump trailer",
    "roofing dumpster",
    "large dumpster rental",
  ],
  hero: {
    eyebrow: `${size.name} · $${size.price} flat`,
    title: ["Tackle the Big Jobs with a ", "20-Yard Dumpster Rental"],
    intro: `Our 20-yard dumpster is ${size.dimensions} and holds ${size.loads.toLowerCase()}, with ${size.weight}. At $${size.price} flat with delivery, pickup, and disposal included, it's the size for roof replacements, whole-home renovations, and full property cleanouts in Pasco County.`,
    image: "/dump-trailers.webp",
    imageAlt: "Lupo 20-yard dumpster trailers ready for delivery in Pasco County",
  },
  stakes: {
    title: ["Too Small a Dumpster ", "Costs You Twice"],
    intro: "Big projects outgrow small dumpsters fast, and a second haul costs more than sizing up.",
    items: [
      { icon: "Container", title: "Overflowing by day two", text: "A remodel or roof fills a small dumpster before the job is half done." },
      { icon: "BadgeDollarSign", title: "Paying for a second haul", text: "Two small rentals cost more than one 20-yard, plus the downtime in between." },
      { icon: "Weight", title: "Going over the weight limit", text: "Heavy debris like shingles adds up fast. More capacity means more breathing room." },
    ],
    closing: "Get the room you need the first time, at one flat price.",
  },
  about: {
    eyebrow: "Our largest dumpster",
    title: ["Room for the ", "Whole Project"],
    paragraphs: [
      `The 20-yard is our biggest dump-trailer dumpster: ${size.dimensions}, about the size of ${size.loads.replace("About ", "").toLowerCase()}. It's built for the projects that make the most debris.`,
      "Like every Lupo dumpster, it's a low-profile trailer we set on protective boards in your driveway or job site. Load it at your own pace and call when you're done.",
    ],
    perfectFor: ["Roof replacements", "Whole-home renovations", "Estate cleanouts", "Major remodels", "Large demolition", "New construction cleanup"],
    image: "/new/roofing-dumpster.webp",
    imageAlt: "Lupo 20-yard dumpster trailer at a roofing job in Pasco County",
  },
  proof: {
    title: ["Big Jobs, ", "Handled Right"],
    intro: "Contractors and homeowners trust us with their biggest projects because we show up when we say we will.",
    reviewNames: ["Owen R.", "Joseph S.", "David C."],
  },
  sizing: {
    title: ["Is the 20-Yard ", "Right for You?"],
    intro: "Here's what fits, and when a smaller size might save you money.",
    rightIf: [
      "Replacing the roof on a typical single-family home",
      "Gutting a kitchen and bathrooms in the same remodel",
      "Clearing out a whole house or an estate",
      "Handling new construction or large demolition cleanup",
    ],
    otherIf: [
      { text: "Your remodel is a single kitchen or bathroom.", size: "15" },
      { text: "You're clearing one garage or doing yard work.", size: "10" },
    ],
  },
  story: {
    eyebrow: "20-yard dumpster rental in Pasco County",
    title: "Built for the Biggest Jobs",
    paragraphs: [
      `When the project is big, like a roof in Hudson, a full renovation in Trinity, or an estate cleanout in New Port Richey, the 20-yard dumpster gives you the room to finish without a second haul. It's ${size.dimensions}, holds ${size.loads.toLowerCase()}, and includes ${size.weight}.`,
      `You pay $${size.price} flat with delivery, pickup, and disposal up to the weight limit included. We drop it on protective boards, often the same day you call, and haul it away when you're done. Heavy debris like shingles, tile, or concrete adds weight quickly, so tell us what you're tossing and we'll make sure you have the right fit.`,
    ],
  },
  related: [
    { name: "15-Yard Dumpster", href: "/services/15-yard-dump-trailer", text: "Our most popular size, built for kitchen remodels, flooring, and move-outs." },
    { name: "Construction Dumpster Rental", href: "/services/construction-dumpster-rental", text: "Reliable drop-offs and swaps for roofers, remodelers, and builders." },
    { name: "Dumpster Rental Pricing", href: "/dumpster-rental-pricing", text: "Compare every size and price, and see exactly what's included." },
  ],
  posts: [
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "When to Rent a Dumpster: 5 Common Projects", href: "/blog/top-five-projects-that-call-for-a-dumpster-rental" },
    { title: "How to Rent a Dumpster: Step-by-Step Tips", href: "/blog/how-to-rent-a-dumpster-tips-tricks-and-advice" },
  ],
  faqTitle: ["20-Yard Dumpster ", "FAQs"],
  faqs: [
    {
      q: "How big is a 20-yard dumpster?",
      a: `Our 20-yard dumpster is ${size.dimensions}. It holds ${size.loads.toLowerCase()}.`,
    },
    {
      q: "How much does a 20-yard dumpster cost?",
      a: `$${size.price} flat in Pasco County, with delivery, pickup, and disposal up to ${size.weight.replace(" included", "")} included.`,
    },
    {
      q: "Is a 20-yard big enough for a roof?",
      a: "For most homes, yes. Shingles are heavy, so the weight limit usually matters before the space does. Tell us your roof size and we'll confirm the fit.",
    },
    {
      q: "Will a 20-yard fit in my driveway?",
      a: "Most driveways fit it with room to spare. It's 8 feet wide, and we set it on boards to protect your concrete.",
    },
    {
      q: "What if I go over the weight limit?",
      a: "We'll tell you the cost per extra ton before delivery, so there are no surprises. Keeping concrete and dirt separate helps you stay under.",
    },
  ],
};

export default twentyYard;
