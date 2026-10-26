import { lowestPrice, siteConfig } from "@/lib/site-config";

const holiday = {
  metaDescription:
    `Dumpster rental in Holiday, FL from the family team based right here. 10, 15 & 20-yard dumpsters from $${lowestPrice} with pickup and disposal built in.`,
  keywords: [
    "dumpster rental Holiday FL",
    "Holiday dumpster rental",
    "dumpster rental Holiday Florida",
    "roll off dumpster Holiday FL",
    "15 yard dumpster Holiday",
  ],
  h1Desire: "Finish the Job Sooner",
  answer:
    `Lupo Dumpster Rentals is based in Holiday, FL, so dumpster rental here means a trailer coming from down the road, not across Pasco County. We deliver 10, 15, and 20-yard dumpsters to homes from Holiday Lake Estates to the Anclote River at one flat price starting at $${lowestPrice}, and same-day drop-offs are often possible.`,
  introTitle: ["Based in Holiday, ", "Working for Our Neighbors"],
  localIntro: [
    "Holiday is where Alex and Amanda Lupo run the business. When you book here, the driver who pulls up is usually someone who lives a few streets over, which makes it easy to ask a question in person or adjust a pickup time without a runaround. Being local also means a forgotten item or a half-full trailer is an easy conversation, not a ticket number.",
    "Much of Holiday was built in the 1960s and 1970s: concrete-block ranch homes, manufactured-home communities, and canal lots on the west side near the Gulf. Those houses are on their second or third owner now, so we haul a lot of original cabinets, popcorn-ceiling drywall, worn carpet, and sheds that have seen too many storm seasons. Landlords along US-19 also call us to clear out rentals between tenants.",
  ],
  landmarks: ["Anclote River Park", "Key Vista Nature Park", "Anclote Gulf Park", "US-19 corridor"],
  driveTimeFromHQ: "About 10 minutes",
  typicalProjects: [
    { title: "Manufactured-home cleanouts", text: "Emptying a manufactured home after a sale or a move to assisted living. Furniture, built-ins, and old skirting fit neatly in a 15-yard.", size: "15" },
    { title: "Original-kitchen tear-outs", text: "Plenty of Holiday kitchens still have their first cabinets and laminate counters. Pulling them out, plus the soffits and flooring, is a classic 15-yard job.", size: "15" },
    { title: "Rental turnovers", text: "A tenant left furniture, mattresses, and bags behind. A 10-yard clears most apartments and small houses so you can get the unit listed again.", size: "10" },
    { title: "Re-roofing a block ranch", text: "Tearing off old shingles and rotted decking on a 1970s ranch adds up in weight fast. The 20-yard gives you the most room and the highest weight allowance.", size: "20" },
  ],
  permitNotes:
    "Holiday is unincorporated, so there's no city permit office involved. A dumpster on your driveway or lawn usually doesn't need a permit. If it has to sit on the street or in the right-of-way, that's handled by Pasco County.",
  hoaNotes:
    "If you live in a manufactured-home or 55+ community, the park office may have its own rules about where a dumpster can sit and for how long. A quick call to them before delivery saves a headache.",
  disposalFacility: {
    name: "Pasco County's solid waste facility on Hays Road",
    note: "Loads from Holiday generally go north to Pasco County's licensed disposal facility on Hays Road in Shady Hills. We pull out metal for recycling when we can.",
  },
  localFaqs: [
    {
      q: "Are you actually based in Holiday?",
      a: `Yes. Lupo is a family business run by Alex and Amanda Lupo from ${siteConfig.address.street} in Holiday, and we've served the area since ${siteConfig.foundedYear}.`,
    },
    {
      q: "Can a dumpster go in a manufactured-home park in Holiday?",
      a: "Often, yes. Our low-profile dump trailers fit tight lots, but park management sets the rules. Ask the office where it can go and for how long, then tell us when you book.",
    },
    {
      q: "Can you time delivery around a tenant move-out?",
      a: "Yes. Give us the move-out date and we'll drop the dumpster once the unit is empty. Most apartment and small-house turnovers fit in a 10-yard.",
    },
  ],
  image: "/holiday.webp",
  imageAlt: "Neighborhood street in Holiday, FL, home base for Lupo Dumpster Rentals",
  heroImage: "/trailer-1.webp",
  lastVerified: null,
  verify: [
    "Drive time across Holiday from the Andrea Dr yard (About 10 minutes)",
    "Disposal facility used for Holiday loads (Hays Road, Shady Hills)",
    "Pasco County right-of-way permit process for unincorporated Holiday",
    "Manufactured-home / 55+ park rules note (park office approval)",
    "Canal lots on the west side near the Gulf (housing description)",
    "Landmarks: Anclote River Park, Key Vista Nature Park, Anclote Gulf Park are in Holiday",
    "OK to say landlords along US-19 use us for rental turnovers",
  ],
};

export default holiday;
