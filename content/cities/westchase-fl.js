import { getSize, lowestPrice, siteConfig } from "@/lib/site-config";

const fifteen = getSize("15");

const westchase = {
  metaDescription:
    `HOA-friendly dumpster rental in Westchase, FL. Low-profile trailers on driveway boards, flat rates from $${lowestPrice}, disposal included. ${siteConfig.rating.value} on Google.`,
  keywords: [
    "dumpster rental Westchase",
    "Westchase dumpster rental",
    "dumpster rental Westchase FL",
    "dumpster rental 33626",
    "15 yard dumpster Westchase",
  ],
  h1Desire: "Keep the HOA Happy",
  answer:
    `Lupo rents 10, 15, and 20-yard dumpsters in Westchase, FL, in northwest Hillsborough County, starting at $${lowestPrice} flat. Our low-profile trailers sit on protective boards in your driveway and leave when you call. Delivery, pickup, and disposal are included in the price.`,
  introTitle: ["Built for Westchase ", "Driveways and Deed Rules"],
  localIntro: [
    "Westchase is a planned community, and it shows. Most homes belong to one of the villages under the Westchase Community Association, with deed restrictions on what can sit in a driveway and for how long. A low-profile dump trailer on boards, picked up as soon as you're done, tends to go over better with neighbors and the board than a steel box parked for weeks.",
    "The bulk of Westchase went up in the 1990s and 2000s. That puts many original roofs, kitchens, and pool decks at the age where owners are replacing them. Lots are tighter than in rural north Hillsborough, so we'll talk through placement before we arrive and keep the trailer clear of sidewalks and the neighbor's mailbox.",
  ],
  landmarks: ["Westchase Golf Club", "West Park Village", "Linebaugh Avenue", "Upper Tampa Bay Trail"],
  driveTimeFromHQ: "About 35 minutes",
  typicalProjects: [
    {
      title: "Original-roof replacement",
      text: "Roofs from the first wave of Westchase construction are reaching the end of their life. Shingles are heavy, so most tear-offs need the largest trailer.",
      size: "20",
    },
    {
      title: "Kitchen gut and refit",
      text: `Builder-grade cabinets, laminate counters, and tile backsplash come out fast. A 15-yard (${fifteen.dimensions}) is the usual fit for one kitchen.`,
      size: "15",
    },
    {
      title: "Flooring swap across the first floor",
      text: "Pulling up carpet and old tile across a whole downstairs adds up to more volume than people expect.",
      size: "15",
    },
    {
      title: "Garage and closet reset before listing",
      text: "Getting a house photo-ready for sale often means clearing years of storage. A compact trailer keeps the curb appeal intact while you work.",
      size: "10",
    },
  ],
  permitNotes:
    "Westchase is unincorporated Hillsborough County, not a city. If a dumpster has to go on the street or in the right-of-way, Hillsborough County is the office to check with. On your own driveway, a permit usually isn't needed.",
  hoaNotes:
    "Your village association or the Westchase Community Association may cap how many days a dumpster can stay out or ask for notice first. A quick email to your community manager before booking saves trouble later. Some homes in West Park Village have garages off rear alleys, so tell us if yours does and we'll plan the drop around it.",
  disposalFacility: {
    name: "Hillsborough County's public disposal system",
    note: "Debris from Westchase generally goes to a licensed Hillsborough County facility. We set aside metal and reusable items for recycling or donation where possible.",
  },
  localFaqs: [
    {
      q: "Does the Westchase Community Association allow dumpsters?",
      a: "Temporary dumpsters for active projects are common, but rules can differ by village and change over time. Check with your community manager on time limits and notice before we deliver.",
    },
    {
      q: "Will your trailer block my sidewalk in Westchase?",
      a: "We aim to keep it fully on the driveway. Most Westchase driveways fit a 10 or 15-yard with the sidewalk clear. Send us a photo if you're unsure.",
    },
  ],
  image: "/trailer-3.webp",
  imageAlt: "Lupo dump trailer parked on a residential driveway, the setup we use for Westchase, FL dumpster rentals",
  heroImage: "/dumpster-trailer-1.webp",
  lastVerified: null,
  verify: [
    "Drive time from the Holiday yard to Westchase (estimated about 35 minutes via Tampa Rd/Race Track Rd or Gunn Hwy)",
    "Which Hillsborough County facility Westchase loads go to",
    "Hillsborough County right-of-way permit process and the (813) 635-5400 number in the registry",
    "Westchase Community Association / village rules on temporary dumpsters (time limits, notice)",
    "That most Westchase homes date from the 1990s and 2000s",
    "West Park Village rear-alley garages",
    "Upper Tampa Bay Trail as a nearby landmark (it runs along the west side of Westchase)",
    "That most Westchase driveways fit a 10 or 15-yard with the sidewalk clear",
  ],
};

export default westchase;
