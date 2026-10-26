import { lowestPrice } from "@/lib/site-config";

const seminole = {
  metaDescription:
    `Dumpster rental in Seminole, FL from $${lowestPrice} flat. Roof, remodel, and cleanout dumpsters with delivery, pickup, and disposal included. Plan ahead.`,
  keywords: [
    "dumpster rental Seminole",
    "Seminole dumpster rental",
    "dumpster rental Seminole FL",
    "roll off dumpster Seminole",
    "roofing dumpster Seminole",
  ],
  h1Desire: "Tackle the Whole-House Project",
  answer:
    `Lupo rents 10, 15, and 20-yard dumpsters in Seminole, FL, in southwest Pinellas County, for one flat price starting at $${lowestPrice}. That price includes delivery, pickup, and disposal. Seminole is one of the farthest points we reach from our Holiday yard, about 50 minutes away, so please plan a few days ahead.`,
  introTitle: ["Making the Drive to ", "Seminole for You"],
  localIntro: [
    "Seminole sits around Lake Seminole, a short drive from the Gulf beaches. It's near the outer edge of where we work, roughly 50 minutes from Holiday, and we'd rather tell you that up front than promise a same-day drop we can't make. We plan Seminole trips alongside our other south county stops, which keeps each delivery on schedule.",
    "The city itself is fairly small, but a much larger area around it uses a Seminole mailing address. Across both, we mostly see roof replacements on 1970s and 1980s block homes, whole-house remodels, and cleanouts in established and 55-plus communities. Closer to the water and around Bay Pines, storm cleanup comes up too. Tell us what you're tearing out and we'll recommend the smallest size that does the job, so you're not paying for space you won't use.",
  ],
  landmarks: ["Lake Seminole Park", "Seminole City Center", "Boca Ciega Millennium Park"],
  driveTimeFromHQ: "About 50 minutes",
  typicalProjects: [
    { title: "Roof replacements on block homes", text: "Shingle tear-offs from the 1970s and 1980s homes that fill much of Seminole. Roofing is heavy, so a 20-yard is the usual call.", size: "20" },
    { title: "Kitchen and bath remodels", text: "Swapping out dated cabinets, tubs, and tile in an established neighborhood. A 15-yard fits most one-room remodels.", size: "15" },
    { title: "Villa and condo downsizing", text: "Clearing a smaller unit in a 55-plus community before a move. A 10-yard often fits the whole job.", size: "10" },
    { title: "Storm cleanup near the water", text: "Fencing, soaked carpet, and debris after a storm near Bay Pines or the bay. Go with a 20-yard if there's flood damage.", size: "20" },
    { title: "Seasonal garage and shed cleanouts", text: "Part-year residents clearing a garage or shed before heading north for the summer. A 10-yard handles most.", size: "10" },
  ],
  permitNotes:
    "The City of Seminole is incorporated, but many homes with a Seminole address are in unincorporated Pinellas County. Inside city limits, check with the City of Seminole about street or right-of-way placement. Outside them, it's Pinellas County. A driveway placement usually doesn't need a permit either way.",
  hoaNotes:
    "Condo, villa, and 55-plus communities around Seminole often limit where a dumpster can go and how long it can stay. Ask your association before we deliver.",
  disposalFacility: {
    name: "Pinellas County's Solid Waste disposal complex on 114th Ave N",
    note: "Seminole loads generally head to Pinellas County's Solid Waste disposal complex at 3095 114th Ave N in St. Petersburg. Recyclable metal is pulled out when it's practical.",
  },
  localFaqs: [
    {
      q: "Do you really deliver to Seminole from Holiday?",
      a: "Yes, but it's a longer trip, about 50 minutes each way. Booking a few days ahead gives us the most room in the schedule to get you the day you want.",
    },
    {
      q: "How do I know if I'm inside Seminole city limits?",
      a: "Check your property record with the Pinellas County Property Appraiser, or call the City. It only matters if the dumpster needs to go on the street.",
    },
    {
      q: "What size do I need for a roof replacement in Seminole?",
      a: "Most single-story tear-offs go in a 20-yard. Tell us roughly how big the roof is and how many layers are coming off, and we'll confirm before delivery.",
    },
  ],
  image: "/new/roofing-dumpster.webp",
  imageAlt: "Lupo dumpster trailer staged for a roof tear-off, a common Seminole, FL dumpster rental job",
  heroImage: "/trailer-4.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve Seminole regularly (edge city)",
    "Drive time from the Holiday yard (About 50 minutes)",
    "Pricing: confirm the standard flat prices apply in Seminole with no distance surcharge",
    "Disposal facility used for Seminole loads",
    "City of Seminole right-of-way permit process and phone (no city phone in lib/cities.js yet)",
    "Claim that much of the Seminole-address area is unincorporated Pinellas County",
    "Claim about 1970s and 1980s block homes being common",
    "Landmarks: Seminole City Center and Boca Ciega Millennium Park",
    "Condo / 55-plus community dumpster rules (general claim)",
  ],
};

export default seminole;
