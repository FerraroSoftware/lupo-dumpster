import { getSize } from "@/lib/site-config";

const tenYard = getSize("10");

const garageCleanout = {
  path: "/services/garage-cleaning-service",
  kind: "junk",
  serviceType: "Garage cleanout",
  title: "Garage Cleanout in Pasco County, FL | Lupo Dumpster",
  description:
    "Garage cleanout in Pasco County, FL. We haul old boxes, tools, furniture, and junk so you can park inside again. Family-owned. Firm price before we start.",
  keywords: [
    "garage cleanout Pasco County",
    "garage cleanout near me",
    "garage cleaning service",
    "garage junk removal",
    "garage clutter hauling",
    "garage cleanup New Port Richey",
  ],
  quoteTitle: "Get Your Garage Cleanout Price",
  quotePlaceholder: "e.g. Two-car garage: old boxes, a broken mower, shelving, and a chest freezer",
  hero: {
    eyebrow: "Garage cleanout service · Pasco County, FL",
    title: ["Park Inside Again with a ", "Garage Cleanout in Pasco County"],
    intro:
      "A garage cleanout from Lupo means our crew hauls out everything you no longer want, from old boxes and broken tools to furniture and appliances, at homes in Trinity, Holiday, and across Pasco County. You decide what stays, we load what goes, and you get a firm price before we start.",
    image: "/images/services/garage-cleanout/garage-cleanout-service-pasco-county-fl.webp",
    imageAlt: "Worker carrying boxes from a cluttered garage to a dump trailer during a garage cleanout in Pasco County, FL",
  },
  stakes: {
    title: ["The Garage Became ", "a Storage Unit"],
    intro: "It happened one box at a time. Now the car lives outside and nobody can find the hedge trimmer.",
    items: [
      { icon: "Truck", title: "The car sits in the driveway", text: "The garage was built for a car. Right now it's holding everything except one." },
      { icon: "Boxes", title: "Boxes from three moves ago", text: "Nobody remembers what's in them, and nobody wants to be the one to open them." },
      { icon: "AlertTriangle", title: "Hard to find, easy to trip on", text: "Tools disappear, the water heater is blocked, and the path to the laundry gets narrower every month." },
    ],
    closing: "Your garage should hold your car and your tools, not things you forgot you owned.",
  },
  about: {
    eyebrow: "What a garage cleanout includes",
    title: ["We Haul the Junk. ", "You Keep What Matters."],
    paragraphs: [
      "A garage cleanout is junk hauling, not janitorial work. We don't scrub floors or pressure wash. What we do is carry out the stuff that's been piling up: broken lawn equipment, moving boxes, exercise gear, spare furniture, old shelving, and that second fridge.",
      `Walk us through it, point at what goes, and set aside anything you're keeping. We'll pull out donations and scrap metal whenever we can and leave you an empty floor to organize or finally park on. If you'd rather sort slowly over a few days, a ${tenYard.name.toLowerCase()} in the driveway is worth considering.`,
    ],
    perfectFor: ["Pre-sale cleanouts", "Downsizing", "Moving in or out", "Workshop overhauls", "Making room before storm season", "Rental property garages"],
    image: "/images/services/garage-cleanout/garage-after-cleanout-clean-floor.webp",
    imageAlt: "Empty, swept garage with organized storage bins after a garage cleanout at a Florida home",
  },
  values: {
    title: ["Garage Cleanout ", "Done in One Visit"],
    items: [
      { icon: "Warehouse", title: "Every corner, up high too", text: "Overhead racks, wall shelving, and the back corner behind the freezer. We get to all of it." },
      { icon: "Boxes", title: "You choose what stays", text: "We take only what you point to. Unsure about a box? We'll wait while you check." },
      { icon: "Recycle", title: "Donations and scrap pulled out", text: "Usable tools, bikes, and furniture are set aside for donation, and metal for recycling, whenever we can." },
      { icon: "Tag", title: "One firm number", text: "A few photos of the garage are usually enough for us to price the whole job up front." },
    ],
  },
  proof: {
    title: ["Pasco Neighbors Who ", "Cleared It Out"],
    intro: "From packed garages to whole houses, here's what local customers say about working with us.",
    reviewNames: ["Owen R.", "Crystal D.", "Joseph S."],
  },
  steps: [
    { title: "Send photos of the garage", text: "A few wide shots, plus anything stored up high, help us price it accurately." },
    { title: "Mark what stays", text: "Set aside or tag what you're keeping. We'll lock in a firm price and a time." },
    { title: "We clear it out", text: "Our crew hauls out everything else and leaves the floor open and ready for you." },
  ],
  pricing: {
    title: ["Garage Cleanout Pricing, ", "Set Before We Start"],
    intro: "A one-car garage with a few boxes and a packed two-car garage are very different jobs. Here's how we price them.",
    factors: [
      { title: "How full it is", text: "The amount of stuff, measured by how much of our trailer it fills, drives the price." },
      { title: "Heavy items mixed in", text: "Old fridges, weight benches, and bags of concrete mix add weight and disposal cost." },
      { title: "How much sorting there is", text: "Working around items you're keeping takes more time than clearing everything out." },
    ],
  },
  items: {
    title: ["Garage Junk ", "We Clear Out"],
    intro: "Most of what ends up in a garage can go. A few things need special handling.",
    accepted: [
      "Boxes, bins, and old storage",
      "Broken tools and lawn equipment",
      "Bikes, exercise gear, and toys",
      "Spare furniture and shelving",
      "Old fridges and freezers",
      "Holiday decorations and clutter",
    ],
    notAccepted: [
      "Paint, stains, and solvents",
      "Gas cans and propane tanks",
      "Pool chemicals and pesticides",
      "Car batteries and motor oil",
      "Tires",
    ],
  },
  story: {
    eyebrow: "Garage cleanout in Pasco County, FL",
    title: "From Storage Unit Back to Garage",
    paragraphs: [
      "In much of Pasco County, homes don't have basements and attics are hot and cramped, so the garage becomes the default storage room. Over a few years in Holiday, New Port Richey, or Wesley Chapel, it fills up with leftover moving boxes, kids' bikes, broken mowers, and furniture nobody uses. Lupo Dumpster Rentals handles garage cleanouts all over Pasco County, and in nearby Palm Harbor and Spring Hill as well.",
      "A lot of people search for a garage cleaning service when what they really need is a garage cleanout: someone to carry out the junk so they can start fresh. That's what we do. You show us what stays, we give you a firm price, and our crew hauls out the rest, setting aside donations and scrap metal whenever we can.",
      "Clearing the garage before hurricane season also means you can pull the car inside when a storm is on the way. When we're done, you'll have the floor space back.",
    ],
  },
  nprText: "Clearing a garage closer to the coast?",
  related: [
    { name: "Junk Removal", href: "/services/junk-removal", text: "Full-service hauling for the rest of the house, from spare rooms to the attic." },
    { name: tenYard.name, href: tenYard.href, text: `Sort at your own pace with a ${tenYard.name.toLowerCase()} in the driveway at $${tenYard.price} flat.` },
    { name: "Appliance Removal", href: "/services/appliance-removal", text: "That old garage fridge or chest freezer, carried out and hauled away." },
  ],
  posts: [
    { title: "Haul Junk Away: Your Guide to Junk Hauling", href: "/blog/haul-junk-away-your-guide-to-decluttering" },
    { title: "Junk Removal: How It Works, Costs, and Tips", href: "/blog/ultimate-guide-to-junk-removal" },
    { title: "Affordable Dumpster Rental: How to Save Money", href: "/blog/affordable-dumpster-rental" },
  ],
  faqTitle: ["Garage Cleanout ", "FAQs"],
  faqs: [
    {
      q: "How much does a garage cleanout cost?",
      a: "It depends on how full the garage is, whether there are heavy items, and how much we need to work around. Send photos and we'll give you a firm price before we start.",
    },
    {
      q: "Is this a garage cleaning service?",
      a: "We're a garage cleanout service. We remove and haul away junk, but we don't do janitorial cleaning or pressure washing. You'll get a clear floor that's ready to clean or organize.",
    },
    {
      q: "Do I have to sort everything before you come?",
      a: "No. Set aside what you're keeping, or tell us as we go. We'll check with you on anything that's unclear.",
    },
    {
      q: "Can you take old paint and chemicals?",
      a: "Generally not. Paint, solvents, pool chemicals, and fuel need to go to a household hazardous waste drop-off. Ask us and we'll point you in the right direction.",
    },
    {
      q: "Should I rent a dumpster instead?",
      a: `If you want to sort through things slowly over several days, a ${tenYard.name.toLowerCase()} at $${tenYard.price} flat is a good fit. If you want it done in one visit with no lifting, choose a cleanout.`,
    },
  ],
  ctaText: "Send a few photos of your garage and get a firm price. We'll haul out the junk so you can park inside again.",
};

export default garageCleanout;
