import { lowestPrice } from "@/lib/site-config";

const largo = {
  metaDescription:
    `Dumpster rental in Largo, FL from $${lowestPrice} with delivery, pickup, and disposal included. Flat-rate dumpsters for cleanouts and remodels. Book ahead.`,
  keywords: [
    "dumpster rental Largo",
    "Largo dumpster rental",
    "dumpster rental Largo FL",
    "roll off dumpster Largo",
    "mobile home cleanout dumpster Largo",
  ],
  h1Desire: "Downsize With Less Stress",
  answer:
    `Lupo delivers 10, 15, and 20-yard dumpsters to Largo, FL, in central Pinellas County, at flat prices starting at $${lowestPrice} with delivery, pickup, and disposal included. Largo is near the southern edge of our service area, about 45 minutes from our Holiday yard, so booking a day or two ahead is the surest way to get your date.`,
  introTitle: ["Honest Scheduling for ", "Largo Customers"],
  localIntro: [
    "We'll be straight with you: Largo is a longer drive for us than north Pinellas. It's about 45 minutes from our yard in Holiday, so same-day delivery is less likely here. What doesn't change is who shows up. It's the same family crew, with no broker in the middle.",
    "Largo has a lot of manufactured-home and 55-plus communities, along with mid-century ranch homes off Missouri Avenue and Ulmerton Road. That means plenty of downsizing and estate cleanouts, carport and shed removals, and remodels in houses that haven't been touched in decades. Many parks have rules about where a dumpster can sit, so we'll go over the spot with you before we book the drive down. If you're handling a parent's home from out of town, we can coordinate with a neighbor or park manager on site.",
  ],
  landmarks: ["Largo Central Park", "Florida Botanical Gardens", "Ulmerton Road"],
  driveTimeFromHQ: "About 45 minutes",
  typicalProjects: [
    { title: "Manufactured-home cleanouts", text: "Clearing a mobile home after a move to assisted living or a loss in the family. A 15-yard usually holds the furniture and contents.", size: "15" },
    { title: "Shed, carport, and Florida room removal", text: "Aluminum and wood add-ons that are past saving. Most come apart into a 10-yard.", size: "10" },
    { title: "Ranch-home remodels", text: "Original 1960s and 1970s kitchens and baths in Largo's older neighborhoods. A 20-yard covers a full gut with drywall and flooring.", size: "20" },
    { title: "Shutter, screen, and patio cover removal", text: "Old aluminum storm shutters, screen panels, and a sagging patio cover, plus the furniture underneath. A 15-yard fits it.", size: "15" },
  ],
  permitNotes:
    "Largo is an incorporated city. If the dumpster goes in your driveway, you usually don't need a permit. Street or right-of-way placement inside Largo city limits goes through the City of Largo. Some Largo mailing addresses are in unincorporated Pinellas County, where the County handles it.",
  hoaNotes:
    "Manufactured-home parks and 55-plus communities in Largo often have strict rules on driveway use and how long a dumpster can stay. Check with the park office or association before you book.",
  disposalFacility: {
    name: "Pinellas County's Solid Waste disposal complex on 114th Ave N",
    note: "Loads from Largo generally go to Pinellas County's Solid Waste disposal complex at 3095 114th Ave N in St. Petersburg, a short haul from most Largo addresses.",
  },
  localFaqs: [
    {
      q: "Can you deliver the same day in Largo?",
      a: "Sometimes, but please don't count on it. Largo is about 45 minutes from our yard, so we ask for a day or two of notice.",
    },
    {
      q: "Can you put a dumpster in a mobile home park?",
      a: "Often, yes, if the park allows it. Our dump trailers are smaller and lower than most roll-offs, which helps on tight lots. Ask the park office first and pass their rules along to us.",
    },
    {
      q: "Can you help a family that lives out of state clear a Largo home?",
      a: "Yes. You can book online or by phone, and we'll coordinate access with a neighbor, realtor, or park manager. You'll know the cost before we make the drive.",
    },
  ],
  image: "/dumpster-rental-tampa-bay.webp",
  imageAlt: "Lupo dumpster trailer beside a cluttered yard during a home cleanout like the ones we do in Largo, FL",
  heroImage: "/trailer-3.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve Largo regularly (edge city)",
    "Drive time from the Holiday yard (About 45 minutes)",
    "Same-day delivery described as unlikely in Largo",
    "Pricing: confirm the standard flat prices apply in Largo with no distance surcharge",
    "Disposal facility used for Largo loads",
    "City of Largo right-of-way permit process and phone (no city phone in lib/cities.js yet)",
    "Some Largo mailing addresses are unincorporated Pinellas County",
    "Manufactured-home park / 55-plus community rules (general claim)",
    "We coordinate access with a neighbor, realtor, or park manager for out-of-state families",
  ],
};

export default largo;
