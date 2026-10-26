import { lowestPrice, siteConfig } from "@/lib/site-config";

const trashRemoval = {
  path: "/services/trash-removal",
  kind: "junk",
  serviceType: "Trash removal",
  title: "Trash Removal in Pasco County, FL | Lupo Dumpster",
  description: `One-time trash removal and garbage pickup in Pasco County, FL. We load and haul bags, boxes, and overflow. Firm price first, rated ${siteConfig.rating.value} on Google.`,
  keywords: [
    "trash removal Pasco County",
    "trash pickup",
    "garbage removal",
    "garbage removal service",
    "one-time trash pickup",
    "trash hauling",
  ],
  quoteTitle: "Get Your Trash Removal Price",
  quotePlaceholder: "Example: about 20 bags of trash, a stack of boxes, and a broken grill by the carport",
  ctaLabel: "Get Your Price",
  hero: {
    eyebrow: "One-time trash & garbage removal · Pasco County, FL",
    title: ["Get Rid of the Overflow with ", "Trash Removal in Pasco County"],
    intro:
      "Lupo's trash removal is one-time, as-needed hauling for homes and businesses in New Port Richey and across Pasco County. When bags, boxes, and garbage pile up past what the cans can hold, our crew loads it all and hauls it away. You get a firm price before we come out.",
    image: "/trash-removal.webp",
    imageAlt: "Bedroom cluttered with trash and garbage before a trash removal in Pasco County",
  },
  stakes: {
    title: ["When the Trash ", "Outgrows the Can"],
    intro: "Regular pickup handles a can or two a week. It wasn't built for the pile growing beside it.",
    items: [
      { icon: "Trash2", title: "Bags lining the side yard", text: "After a move, a party, or a cleanup day, the extra bags sit for weeks waiting their turn." },
      { icon: "AlertTriangle", title: "Smells and critters", text: "Garbage left out in the Florida heat draws ants, raccoons, and complaints from the neighbors." },
      { icon: "Building2", title: "Business trash with nowhere to go", text: "A store reset or office purge can make more trash than the dumpster out back holds." },
    ],
    closing: "You shouldn't have to ration trash bags to stay ahead of the mess.",
  },
  about: {
    eyebrow: "One-time, not weekly",
    title: ["Trash Pickup ", "When You Need It"],
    paragraphs: [
      "We're not a weekly garbage route, and we don't replace your regular curbside service. Lupo handles the one-time jobs: the overflow after a cleanout, the bags a tenant left behind, or the garbage at a property that's been sitting empty.",
      "Our crew picks up loose trash, bagged garbage, boxes, and the random junk mixed in with it, loads it into our trailer, and leaves the area swept. If you'd rather fill something yourself over a week, a dumpster rental is often the cheaper route.",
    ],
    perfectFor: ["Move-out trash", "Tenant turnovers", "Party and event cleanup", "Vacant property cleanups", "Business trash overflow", "Storage unit cleanouts"],
    image: "/trash-removal-1.webp",
    imageAlt: "Carport piled with trash and household debris before a one-time trash removal in Pasco County",
  },
  values: {
    title: ["Trash Removal ", "Without the Hassle"],
    items: [
      { icon: "Users", title: "We pick up the loose stuff", text: "Torn bags, soggy boxes, and scattered trash. Our crew gathers it all so you don't have to touch it." },
      { icon: "Tag", title: "Firm price up front", text: "Describe the pile or text a photo and you'll get a price before anything is scheduled." },
      { icon: "Timer", title: "No contract, no route", text: "One visit, one price. There's no weekly service to sign up for or cancel." },
      { icon: "Building2", title: "Homes and businesses", text: "Houses, rentals, offices, and storefronts across Pasco County and nearby Tampa Bay." },
    ],
  },
  proof: {
    title: ["Neighbors Who ", "Cleared the Pile"],
    intro: "Homeowners and landlords across Pasco County count on us for fast, fairly priced cleanup.",
    reviewNames: ["Crystal D.", "Brian O.", "Joseph S."],
  },
  steps: [
    { title: "Show us the pile", text: "Use the quote form, or call or text a few photos of the trash that needs to go." },
    { title: "Get a firm price", text: "We'll price it by volume and access, then set a pickup time that suits you." },
    { title: "We haul it off", text: "Our crew loads everything, rakes up the stragglers, and takes it away for disposal." },
  ],
  pricing: {
    title: ["Priced by ", "What We Haul"],
    intro:
      "Trash jobs range from a dozen bags to a garage full. Send a photo or a description and we'll give you a firm price before we schedule.",
    factors: [
      { title: "How much trash there is", text: "Volume is the big one: how much of our trailer your bags and boxes fill." },
      { title: "What's mixed in", text: "Household garbage is simple. Heavy debris, appliances, or yard waste in the pile can change the price." },
      { title: "Where it's sitting", text: "Bags at the curb load fast. Trash in a back bedroom, attic, or upstairs unit takes more labor." },
    ],
  },
  items: {
    title: ["What Our ", "Trash Removal Covers"],
    intro: "This is one-time hauling. For weekly garbage, stick with your regular curbside provider.",
    accepted: [
      "Bagged household trash and garbage",
      "Boxes, packing material, and cardboard",
      "Loose trash from garages, carports, and sheds",
      "Overflow trash from businesses and rentals",
      "Broken household items mixed in with the trash",
      "Bagged yard debris",
    ],
  },
  story: {
    eyebrow: "Trash removal in Pasco County, FL",
    title: "One Call Clears the Pile",
    paragraphs: [
      "Trash has a way of piling up at the worst time. A tenant moves out of a rental in Port Richey and leaves bags in every room. A family clears out a garage in Holiday and fills the side yard. A shop in New Port Richey finishes a reset and the dumpster out back is already full. Lupo's trash removal service handles exactly these one-time jobs.",
      "Whether you call it trash pickup, garbage removal, or just getting rid of the mess, here's how it works: tell us what's there, get a firm price, and our crew shows up to load and haul it. We work across Pasco County and nearby Pinellas, Hernando, and North Hillsborough.",
      "We're a family business based in Holiday, not a municipal hauler, so there's no route and no contract. Just a single visit that leaves your space clean. For the weekly cans, keep your regular service. For everything that won't fit in them, call us.",
    ],
  },
  nprText: "Cleaning up a property near the coast?",
  related: [
    { name: "Pasco County Trash Pickup", href: "/services/pasco-county-trash-pickup", text: "Bulky items and overflow that regular Pasco curbside pickup won't take." },
    { name: "Junk Removal", href: "/services/junk-removal", text: "Full-service cleanouts for garages, homes, and rentals, furniture and all." },
    { name: "Dumpster Rental", href: "/services/dumpster-rental", text: "Trash coming out over a week? Fill a flat-rate dumpster at your own pace." },
  ],
  posts: [
    { title: "Haul Junk Away: Your Guide to Junk Hauling", href: "/blog/haul-junk-away-your-guide-to-decluttering" },
    { title: "Junk Removal: How It Works, Costs, and Tips", href: "/blog/ultimate-guide-to-junk-removal" },
    { title: "Affordable Dumpster Rental: How to Save Money", href: "/blog/affordable-dumpster-rental" },
  ],
  faqTitle: ["Trash Removal ", "FAQs"],
  faqs: [
    {
      q: "Do you offer weekly trash pickup?",
      a: "No. We're not a weekly garbage route. We handle one-time and as-needed trash removal, like overflow, cleanouts, and move-outs. Keep your regular service for the weekly cans.",
    },
    {
      q: "How much does trash removal cost?",
      a: "It depends on how much there is, what's in it, and where it's sitting. Send a photo or a description and we'll give you a firm price before scheduling.",
    },
    {
      q: "Do you do garbage removal for businesses?",
      a: "Yes. We haul overflow trash and cleanup garbage for offices, stores, and rental properties on a one-time or as-needed basis.",
    },
    {
      q: "Does the trash need to be bagged?",
      a: "No. Bagged trash is quicker to load, but our crew picks up loose trash and boxes too.",
    },
    {
      q: "How soon can you pick up?",
      a: "We can often come out the same day. Ask about timing when you request your price.",
    },
    {
      q: "Should I rent a dumpster instead?",
      a: `If trash will be coming out over several days and you don't mind loading it, a dumpster starting at $${lowestPrice} flat may cost less. For a one-time pile, trash removal is quicker.`,
    },
  ],
  ctaText: "Tell us what's piling up and get a firm price. Our crew loads it, hauls it, and leaves the space clean.",
};

export default trashRemoval;
