import { getSize } from "@/lib/site-config";

const size = getSize("15");
const loads = size.loads.toLowerCase();
const tons = size.weight.replace(" included", "");

const fifteenYard = {
  path: "/services/15-yard-dump-trailer",
  kind: "size",
  sizeId: "15",
  serviceType: "15-yard dumpster rental",
  title: "15-Yard Dumpster Rental in Pasco County, FL | Lupo Dumpster",
  description: `Rent a 15-yard dumpster in Pasco County for $${size.price} flat. ${size.loads.replace("About", "Holds about")}, ${size.weight}. Our most popular size.`,
  keywords: [
    "15 yard dumpster rental",
    "15 yard dump trailer",
    "15 yard dumpster Pasco County",
    "kitchen remodel dumpster",
    "medium dumpster rental",
  ],
  hero: {
    eyebrow: `${size.name} · $${size.price} flat · Most popular`,
    title: ["Keep Your Remodel Moving with a ", "15-Yard Dumpster Rental"],
    intro: `Our 15-yard dumpster rental is the size most Pasco County customers pick. The ${size.dimensions} dump trailer holds ${loads}, with ${size.weight}. One flat $${size.price} covers delivery, pickup, and disposal, so it's a natural fit for kitchen remodels, flooring tear-outs, and move-outs from Trinity to New Port Richey.`,
    image: "/trailer-4.webp",
    imageAlt: "Lupo truck towing a 15-yard dumpster trailer in Pasco County",
  },
  stakes: {
    title: ["Guessing the Size ", "Gets Expensive"],
    intro: "Most mid-size projects land somewhere between too small and too much.",
    items: [
      { icon: "Container", title: "Full before the job is", text: "A kitchen tear-out can fill a small dumpster before the last cabinet comes off the wall." },
      { icon: "BadgeDollarSign", title: "Paying for empty space", text: "Jumping straight to the biggest size means paying for room you never fill." },
      { icon: "Weight", title: "Heavy flooring adds up", text: `Tile and mortar get heavy fast. With ${tons} included, the 15-yard has room for most flooring jobs.` },
    ],
    closing: "The 15-yard is the middle ground that fits most jobs the first time.",
  },
  about: {
    eyebrow: "Our most popular size",
    title: ["The Size That ", "Fits Most Projects"],
    paragraphs: [
      `The 15-yard sits right in the middle of our lineup: ${size.dimensions}, ${loads}. It has room for a full kitchen or a whole house's worth of move-out clutter without taking over the driveway.`,
      "We set the low-profile trailer on protective boards where you want it, you fill it on your schedule, and we pick it up when you call or text. Delivery, pickup, and disposal up to the weight limit are all part of the flat price.",
    ],
    perfectFor: ["Kitchen remodels", "Flooring tear-outs", "Move-outs", "Mid-size cleanouts", "Deck removal", "Multi-room decluttering"],
    image: "/trailer-3.webp",
    imageAlt: "Lupo dumpster trailer being placed in a Pasco County driveway for a remodel",
  },
  proof: {
    title: ["Easy Booking, ", "On-Time Drop-Offs"],
    intro: "Homeowners and contractors come back because the dumpster shows up when we say it will.",
    reviewNames: ["Kerry S.", "Crystal D.", "Joseph S."],
  },
  sizing: {
    title: ["Is the 15-Yard ", "Right for You?"],
    intro: "Here's what fits, and when a different size makes more sense.",
    rightIf: [
      "Remodeling a kitchen or a couple of bathrooms",
      "Pulling up carpet, tile, or laminate across several rooms",
      "Moving out of or downsizing a full home",
      "Cleaning out a garage plus an attic or shed",
    ],
    otherIf: [
      { text: "It's a single-garage cleanout or a small bathroom job.", size: "10" },
      { text: "You're tearing off a roof or gutting the whole house.", size: "20" },
    ],
  },
  story: {
    eyebrow: "15-yard dumpster rental in Pasco County",
    title: "Most Projects Fit Right Here",
    paragraphs: [
      `If you're not sure which size to book, the 15-yard dumpster rental is usually the safe pick. It handles a kitchen remodel in Trinity, a flooring job in Land O' Lakes, or a move-out in New Port Richey without a second haul. It's ${size.dimensions}, holds ${loads}, and includes ${size.weight}.`,
      `The price is $${size.price} flat, covering delivery, pickup, and disposal up to the weight limit. Lupo Dumpster Rentals, a family business based in Holiday, sets it on protective boards, often the same day you call. Load it over a few days, then call or text and we'll haul it off.`,
      "Still deciding? Tell us what you're tearing out and roughly how many rooms are involved. We'll tell you honestly whether the 15-yard is the right call or whether a smaller or larger trailer makes more sense. A quick call now saves a second haul later.",
    ],
  },
  related: [
    { name: "20-Yard Dumpster", href: "/services/20-yard-dump-trailer", text: "Our largest size, built for roofs, whole-home renovations, and estate cleanouts." },
    { name: "Construction Dumpster Rental", href: "/services/construction-dumpster-rental", text: "Job-site dumpsters for contractors, roofers, and remodelers." },
    { name: "Dumpster Rental Pricing", href: "/dumpster-rental-pricing", text: "Every size and price side by side, plus what's included." },
  ],
  posts: [
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "When to Rent a Dumpster: 5 Common Projects", href: "/blog/top-five-projects-that-call-for-a-dumpster-rental" },
    { title: "Affordable Dumpster Rental: How to Save Money", href: "/blog/affordable-dumpster-rental" },
  ],
  faqTitle: ["15-Yard Dumpster ", "FAQs"],
  faqs: [
    {
      q: "How big is a 15-yard dumpster?",
      a: `Our 15-yard dumpster is ${size.dimensions}. It holds ${loads}.`,
    },
    {
      q: "How much does a 15-yard dumpster cost?",
      a: `$${size.price} flat in Pasco County, with delivery, pickup, and disposal up to ${tons} included.`,
    },
    {
      q: "Why is the 15-yard your most popular size?",
      a: "It's big enough for most kitchen remodels, flooring jobs, and move-outs, and small enough to sit comfortably in a typical driveway.",
    },
    {
      q: "Will a 15-yard hold a kitchen remodel?",
      a: "For most kitchens, yes, including cabinets, countertops, and flooring. If you're also redoing bathrooms or taking out walls, ask us about the 20-yard.",
    },
    {
      q: "Can I put roofing shingles in a 15-yard?",
      a: "Yes. Shingles are heavy, so on a small roof the weight limit usually matters before the space does. Tell us about the roof and we'll confirm the fit.",
    },
  ],
};

export default fifteenYard;
