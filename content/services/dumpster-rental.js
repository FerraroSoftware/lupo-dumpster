import { lowestPrice, sizes } from "@/lib/site-config";

const priceList = sizes.map((s) => `${s.shortName.replace(" yd", "-yard")} $${s.price}`).join(", ");

const dumpsterRental = {
  path: "/services/dumpster-rental",
  kind: "rental",
  serviceType: "Dumpster rental",
  title: "Dumpster Rental in Pasco County, FL | Lupo Dumpster",
  description: `Flat-rate dumpster rental in Pasco County, FL: ${priceList}. Delivery, pickup, and disposal included. Book online in a minute.`,
  keywords: [
    "dumpster rental Pasco County",
    "dumpster rental near me",
    "roll off dumpster rental",
    "10 yard dumpster rental",
    "20 yard dumpster rental",
    "residential dumpster rental",
  ],
  hero: {
    eyebrow: "Roll-off dumpster rental · Pasco County, FL",
    title: ["Finish Your Project Faster with ", "Dumpster Rental in Pasco County"],
    intro: `Lupo delivers 10, 15, and 20-yard dumpsters to homes and job sites across Pasco County at one flat price, starting at $${lowestPrice}. Delivery, pickup, and disposal up to the weight limit are included, and we can often drop it off the same day you call.`,
    image: "/dumpster-rental-pros.webp",
    imageAlt: "Lupo dumpster rental trailer parked in a Pasco County driveway",
  },
  stakes: {
    title: ["A Stalled Project ", "Costs More Than a Dumpster"],
    intro: "Debris piles up fast. Without a place to put it, the job slows down and the mess spreads.",
    items: [
      { icon: "CalendarX", title: "Endless dump runs", text: "Every trip to the landfill is an hour you're not working on the project." },
      { icon: "BadgeDollarSign", title: "Surprise fees", text: "Some companies quote low, then add delivery, fuel, and disposal to the final bill." },
      { icon: "Clock", title: "No-show deliveries", text: "The crew is ready on Monday and the dumpster shows up Thursday." },
    ],
    closing: "Your project deserves a dumpster that shows up on time at the price you were quoted.",
  },
  about: {
    eyebrow: "How our dumpsters work",
    title: ["Dump-Trailer Dumpsters, ", "Delivered to Your Driveway"],
    paragraphs: [
      "Our dumpsters are low-profile dump trailers in three sizes: 10, 15, and 20 yards. We back it into your driveway or job site, set it on protective boards, and leave it for you to fill at your own pace.",
      "When you're done, call or text and we haul it away. One flat price covers delivery, pickup, and disposal up to the included weight, so the number you book is the number you pay.",
    ],
    perfectFor: ["Home remodels", "Roof replacements", "Garage cleanouts", "Moving and downsizing", "Estate cleanouts", "Yard projects"],
    image: "/trailer-2.webp",
    imageAlt: "Lupo 15-yard dumpster trailer ready for delivery in Pasco County",
  },
  proof: {
    title: ["Pasco Homeowners and Contractors ", "Book Us Again"],
    intro: "We know a project has enough moving parts. Your dumpster shouldn't be one more thing to chase.",
    reviewNames: ["David C.", "Kerry S.", "Joseph S."],
  },
  story: {
    eyebrow: "Dumpster rental in Pasco County, FL",
    title: "The Easy Part of Your Project",
    paragraphs: [
      "From kitchen remodels in Trinity to roof tear-offs in Hudson and estate cleanouts in New Port Richey, every project makes more debris than you expect. Lupo Dumpster Rentals delivers flat-rate 10, 15, and 20-yard dumpsters across Pasco County and nearby Pinellas, Hernando, and North Hillsborough, often on the same day you call.",
      `Pick a size, pick a date, and see your price before you book. Rentals start at $${lowestPrice} with delivery, pickup, and disposal up to the weight limit included. We place every dumpster on protective boards, you load it at your own pace, and we haul it away when you're done. You get to focus on the project, not the trash.`,
    ],
  },
  related: [
    { name: "Construction Dumpster Rental", href: "/services/construction-dumpster-rental", text: "Dumpsters for contractors, roofers, and remodelers who need reliable drop-offs and swaps." },
    { name: "Junk Removal", href: "/services/junk-removal", text: "Rather not do the loading? Our crew lifts, loads, and hauls it away for you." },
    { name: "Dumpster Rental Pricing", href: "/dumpster-rental-pricing", text: "Every price, what's included, and what can change the cost, all in one place." },
  ],
  posts: [
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "How to Rent a Dumpster: Step-by-Step Tips", href: "/blog/how-to-rent-a-dumpster-tips-tricks-and-advice" },
    { title: "Affordable Dumpster Rental: How to Save Money", href: "/blog/affordable-dumpster-rental" },
  ],
  faqTitle: ["Dumpster Rental ", "FAQs"],
  faqs: [
    {
      q: "How much does a dumpster rental cost in Pasco County?",
      a: `Lupo's flat rates are ${priceList}. Every price includes delivery, pickup, and disposal up to the included weight limit.`,
    },
    {
      q: "What size dumpster do I need?",
      a: "A 10-yard fits a garage cleanout or small remodel. A 15-yard fits most kitchen remodels and move-outs. A 20-yard fits roofs, whole-home renovations, and full cleanouts. If you're between two sizes, size up.",
    },
    {
      q: "How fast can you deliver?",
      a: "We can often deliver the same day you call. Booking a day or two ahead is the surest way to get the date you want.",
    },
    {
      q: "Will the dumpster damage my driveway?",
      a: "We set every dumpster on protective boards to spread the weight and keep it off your concrete or pavers.",
    },
    {
      q: "Do I need a permit?",
      a: "Not if the dumpster sits in your driveway or on your property. A permit is usually only needed when it has to go on the street or right-of-way.",
    },
    {
      q: "What can't go in the dumpster?",
      a: "Hazardous chemicals, wet paint, and tires generally can't go in. If you're unsure about an item, call us before you load it.",
    },
  ],
};

export default dumpsterRental;
