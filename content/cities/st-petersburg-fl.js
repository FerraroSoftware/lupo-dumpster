import { lowestPrice } from "@/lib/site-config";

const stPetersburg = {
  metaDescription:
    `Dumpster rental in St. Petersburg, FL from $${lowestPrice} flat. Low-profile dumpsters for historic bungalows and remodels, delivery and disposal included.`,
  keywords: [
    "dumpster rental St. Petersburg",
    "St. Petersburg dumpster rental",
    "dumpster rental St Pete FL",
    "roll off dumpster St. Petersburg",
    "St Pete dumpster rental",
  ],
  h1Desire: "Bring Your Old House Back",
  answer:
    `Lupo rents 10, 15, and 20-yard dumpsters in St. Petersburg, FL, at flat prices starting at $${lowestPrice} with delivery, pickup, and disposal included. St. Pete is the farthest Pinellas County city we serve, about an hour from our Holiday yard, so we schedule deliveries here a few days ahead.`,
  introTitle: ["Low-Profile Dumpsters for ", "St. Pete's Historic Homes"],
  localIntro: [
    "St. Petersburg has some of the most distinctive housing in Tampa Bay. Historic Kenwood, Old Northeast, and Crescent Lake are full of 1920s bungalows and craftsman homes, many on narrow lots with alley access and brick streets out front. Lots that tight leave little room for a full-size roll-off, and neighbors notice fast when one blocks the alley.",
    "Renovating those houses creates its own kind of debris: plaster and lath, old wood trim, cast-iron tubs, and roofs with layers going back decades. Closer to the water, in places like Shore Acres and Snell Isle, storm surge has meant gutting and rebuilding whole ground floors. Because we're about an hour away, we plan each St. Pete delivery ahead instead of squeezing it in. Our dump trailers are lower than a standard roll-off and easier to fit beside a bungalow or back into an alley drive.",
  ],
  landmarks: ["St. Pete Pier", "Central Avenue", "Sunken Gardens", "Crescent Lake Park"],
  driveTimeFromHQ: "About 60 minutes",
  typicalProjects: [
    { title: "Bungalow and craftsman renovations", text: "Plaster and lath is heavier than it looks. For one or two rooms in Kenwood or Old Northeast, a 15-yard keeps you under the weight limit.", size: "15" },
    { title: "Flood and storm rebuilds", text: "Wet drywall, cabinets, flooring, and furniture from a flooded ground floor in Shore Acres or Snell Isle. Start with a 20-yard.", size: "20" },
    { title: "Layered roof tear-offs", text: "Older St. Pete roofs can hide several layers of shingles. A 20-yard is the safe pick.", size: "20" },
    { title: "Detached garage and alley cleanups", text: "Clearing a garage or garage apartment off the alley before a rental or rebuild. A 10-yard usually fits.", size: "10" },
    { title: "Rental bungalow turnovers", text: "Landlords clearing a bungalow or duplex near Central Avenue between tenants: old carpet, mattresses, and leftover furniture. A 15-yard covers most.", size: "15" },
  ],
  permitNotes:
    "St. Petersburg is an incorporated city with its own right-of-way rules. A dumpster on your driveway or private property usually doesn't need a permit. If it has to sit on the street, in an alley, or on a brick street in a historic neighborhood, check with the City of St. Petersburg first.",
  hoaNotes:
    "In a designated historic district, exterior work like roofs, windows, and porches may need city review before you start. That's about the project rather than the dumpster, but it's worth checking before demo day.",
  disposalFacility: {
    name: "Pinellas County's Solid Waste disposal complex on 114th Ave N",
    note: "St. Pete loads generally go to Pinellas County's Solid Waste disposal complex at 3095 114th Ave N, on the north side of St. Petersburg. Salvageable metal is pulled out when we can.",
  },
  localFaqs: [
    {
      q: "Can you deliver to a home with alley access in Old Northeast or Kenwood?",
      a: "Often, yes. Our trailers are lower and easier to maneuver than most roll-offs. If the alley is the only spot, check whether the City needs to approve it, and send us a photo.",
    },
    {
      q: "Is plaster and lath too heavy for a dumpster?",
      a: "No, but it adds up fast. Tell us how many rooms you're gutting and we'll suggest a size that stays under the weight limit.",
    },
    {
      q: "How far ahead should I book in St. Petersburg?",
      a: "Give us a few days if you can. St. Pete is about an hour from our yard, so we group deliveries here to keep the schedule reliable.",
    },
  ],
  image: "/trailer-4.webp",
  imageAlt: "Lupo truck towing a low-profile dumpster trailer on the way to a St. Petersburg, FL job",
  heroImage: "/new/roofing-dumpster.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve St. Petersburg regularly (edge city)",
    "Drive time from the Holiday yard (About 60 minutes)",
    "Pricing: confirm the standard flat prices apply in St. Petersburg with no distance surcharge",
    "Disposal facility used for St. Pete loads",
    "City of St. Petersburg right-of-way permit process for street, alley, and brick-street placement (no city phone in lib/cities.js yet)",
    "Historic district exterior-work review claim (which neighborhoods are locally designated)",
    "We actually do flood rebuild jobs in Shore Acres and Snell Isle",
    "Alley-access delivery is something we can do",
  ],
};

export default stPetersburg;
