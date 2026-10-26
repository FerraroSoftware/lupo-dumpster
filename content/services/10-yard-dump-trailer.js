import { getSize } from "@/lib/site-config";

const size = getSize("10");
const loads = size.loads.toLowerCase();
const tons = size.weight.replace(" included", "");

const tenYard = {
  path: "/services/10-yard-dump-trailer",
  kind: "size",
  sizeId: "10",
  serviceType: "10-yard dumpster rental",
  title: "10-Yard Dumpster Rental in Pasco County, FL | Lupo Dumpster",
  description: `Rent a 10-yard dumpster in Pasco County for $${size.price} flat. ${size.loads.replace("About", "Holds about")}, ${size.weight}. Sized for garage cleanouts.`,
  keywords: [
    "10 yard dumpster rental",
    "10 yard dump trailer",
    "10 yard dumpster Pasco County",
    "small dumpster rental",
    "garage cleanout dumpster",
  ],
  hero: {
    eyebrow: `${size.name} · $${size.price} flat`,
    title: ["Clear Out the Small Stuff with a ", "10-Yard Dumpster Rental"],
    intro: `Our 10-yard dumpster rental is a ${size.dimensions} dump trailer that holds ${loads}, with ${size.weight}. At $${size.price} flat, delivery, pickup, and disposal are covered. It's the budget-friendly size for garage cleanouts, small remodels, and yard work in New Port Richey and across Pasco County.`,
    image: "/waste-management.webp",
    imageAlt: "Lupo 10-yard dump trailer dumpster parked for delivery in Pasco County",
  },
  stakes: {
    title: ["Don't Pay for ", "Space You Won't Use"],
    intro: "Small projects still make a mess, but they don't need the biggest dumpster on the lot.",
    items: [
      { icon: "BadgeDollarSign", title: "Renting too much dumpster", text: "A big box for a small job means paying for empty space when it gets hauled away." },
      { icon: "Ruler", title: "A driveway you still need", text: `At ${size.dimensions.split(" ")[0]} long, the 10-yard leaves more of your driveway free for the car.` },
      { icon: "CalendarX", title: "A weekend of dump runs", text: `Hauling ${size.loads.replace("About ", "").toLowerCase()} to the landfill yourself eats a whole Saturday.` },
    ],
    closing: "Get the right size for the job at our lowest flat price.",
  },
  about: {
    eyebrow: "Our smallest dumpster",
    title: ["Small Footprint, ", "Plenty of Room"],
    paragraphs: [
      `The 10-yard is our compact dump-trailer dumpster: ${size.dimensions}, roughly ${loads}. It's sized for one-room and one-weekend projects, like a cluttered garage, a bathroom tear-out, or a pile of storm branches.`,
      `It's still a full Lupo rental. We set the low-profile trailer on protective boards in your driveway, you load it at your own pace, and one flat price of $${size.price} covers delivery, pickup, and disposal up to ${tons}.`,
    ],
    perfectFor: ["Garage cleanouts", "Bathroom remodels", "Yard and storm debris", "Small flooring jobs", "Spring cleaning", "Decluttering before a move"],
    image: "/dump-trailer.webp",
    imageAlt: "Lupo dump-trailer dumpster ready for a small garage cleanout in Pasco County",
  },
  proof: {
    title: ["Small Jobs, ", "Same Care"],
    intro: "A small rental gets the same on-time drop-off and quick pickup as our biggest one.",
    reviewNames: ["Crystal D.", "Brian O.", "Kerry S."],
  },
  sizing: {
    title: ["Is the 10-Yard ", "Right for You?"],
    intro: "Here's what fits, and when it's worth stepping up a size.",
    rightIf: [
      "Cleaning out a one- or two-car garage",
      "Tearing out a single bathroom or one room of flooring",
      "Clearing branches, palm fronds, and yard debris",
      "Decluttering before a move or a listing",
    ],
    otherIf: [
      { text: "Your kitchen remodel or whole-house move-out needs more room.", size: "15" },
      { text: "You're replacing a roof or renovating the whole home.", size: "20" },
    ],
  },
  story: {
    eyebrow: "10-yard dumpster rental in Pasco County",
    title: "The Right Size for Smaller Projects",
    paragraphs: [
      `Not every project needs a giant dumpster. A garage cleanout in Holiday, a bathroom refresh in Port Richey, or storm cleanup in Hudson usually fits in a 10-yard dumpster rental. At ${size.dimensions}, it holds ${loads} and includes ${size.weight}, which covers most household cleanouts and small remodels.`,
      `You pay $${size.price} flat, with delivery, pickup, and disposal up to the weight limit included. Lupo Dumpster Rentals drops the trailer on protective boards, often the same day you call, and hauls it away when you're done. When you book, just tell us where on the driveway you'd like it.`,
      "Dense material like tile, concrete, or dirt gets heavy fast, so tell us what you're tossing and we'll confirm the 10-yard is enough. From Trinity and Odessa to Spring Hill and Palm Harbor, it's the simple, low-cost way to clear out a small space without borrowing a truck.",
    ],
  },
  related: [
    { name: "15-Yard Dumpster", href: "/services/15-yard-dump-trailer", text: "Our most popular size, with room for kitchen remodels and full move-outs." },
    { name: "Garage Cleanouts", href: "/services/garage-cleaning-service", text: "Rather not load it yourself? Our crew clears the garage for you." },
    { name: "Dumpster Rental Pricing", href: "/dumpster-rental-pricing", text: "Compare every size and price, and see exactly what's included." },
  ],
  posts: [
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "Affordable Dumpster Rental: How to Save Money", href: "/blog/affordable-dumpster-rental" },
    { title: "How to Rent a Dumpster: Step-by-Step Tips", href: "/blog/how-to-rent-a-dumpster-tips-tricks-and-advice" },
  ],
  faqTitle: ["10-Yard Dumpster ", "FAQs"],
  faqs: [
    {
      q: "How big is a 10-yard dumpster?",
      a: `Our 10-yard dumpster is ${size.dimensions}. It holds ${loads}.`,
    },
    {
      q: "How much does a 10-yard dumpster cost?",
      a: `$${size.price} flat in Pasco County. Delivery, pickup, and disposal up to ${tons} are included.`,
    },
    {
      q: "What fits in a 10-yard dumpster?",
      a: "A typical garage cleanout, a single bathroom remodel, a small flooring job, or a good-sized pile of yard debris.",
    },
    {
      q: "Is a 10-yard big enough for a kitchen remodel?",
      a: "Sometimes, for a small kitchen. Most kitchen remodels fit better in a 15-yard, and sizing up costs less than paying for a second haul.",
    },
    {
      q: "What if I go over the weight limit?",
      a: "We'll tell you the per-ton cost before delivery. Tile, concrete, and dirt are what usually push a 10-yard over, so let us know if they're in the mix.",
    },
  ],
};

export default tenYard;
