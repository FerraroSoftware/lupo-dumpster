import { lowestPrice } from "@/lib/site-config";

const pinellasPark = {
  metaDescription:
    `Dumpster rental in Pinellas Park, FL from $${lowestPrice}. Flat-rate dumpsters for rentals, roofs, and shop cleanouts, with delivery, pickup & disposal included.`,
  keywords: [
    "dumpster rental Pinellas Park",
    "Pinellas Park dumpster rental",
    "dumpster rental Pinellas Park FL",
    "roll off dumpster Pinellas Park",
    "commercial dumpster Pinellas Park",
  ],
  h1Desire: "Haul It All Away in One Trip",
  answer:
    `Lupo delivers 10, 15, and 20-yard dumpsters in Pinellas Park, FL, in the middle of Pinellas County, at flat prices that start at $${lowestPrice}, delivery, pickup, and disposal included. Pinellas Park is about 50 minutes from our Holiday yard, near the far end of our routes, so a day or two of notice helps us fit you in.`,
  introTitle: ["Straight Answers for ", "Pinellas Park"],
  localIntro: [
    "Pinellas Park is a working city in the center of the county, with block homes from the postwar decades, quiet streets off 49th Street, and a lot of small businesses along US-19 and Park Boulevard. It's also one of the longer drives we make from Holiday, so we plan these drops around our other routes.",
    "Most of our Pinellas Park calls are practical jobs. A rental house needs clearing between tenants. A carport or shed is coming down. An older block home needs a new roof, or a small shop is getting rid of shelving and old stock. Many lots here are flat with simple, open driveways, which makes placement easy once we arrive. If you're running a business, we can set the dumpster in your lot or behind the building.",
  ],
  landmarks: ["Park Boulevard", "England Brothers Park", "Freedom Lake Park"],
  driveTimeFromHQ: "About 50 minutes",
  typicalProjects: [
    { title: "Rental property turnovers", text: "Old mattresses, carpet, and leftover furniture between tenants. A 10-yard handles most single-family rentals.", size: "10" },
    { title: "Block-home roof replacements", text: "Tearing off an older shingle roof is heavy work. A 20-yard has the weight capacity most of these jobs need.", size: "20" },
    { title: "Small business cleanouts", text: "Shelving, fixtures, and boxed inventory from a shop or office on US-19 or Park Boulevard. A 15-yard is a good fit.", size: "15" },
    { title: "Shed and carport teardowns", text: "Metal roofing, framing, and whatever was stored inside. These usually fit a 10-yard.", size: "10" },
    { title: "Duplex and small multifamily repairs", text: "Landlords redoing floors and kitchens in a duplex or fourplex. A 15-yard handles one or two units at a time.", size: "15" },
  ],
  permitNotes:
    "Pinellas Park is an incorporated city. You usually won't need a permit for a dumpster in your own driveway or business lot. For the street or public right-of-way within city limits, check with the City of Pinellas Park. Nearby Lealman is unincorporated and falls under Pinellas County.",
  disposalFacility: {
    name: "Pinellas County's Solid Waste disposal complex on 114th Ave N",
    note: "Pinellas Park debris generally goes to Pinellas County's Solid Waste disposal complex at 3095 114th Ave N in St. Petersburg, only a few miles away.",
  },
  localFaqs: [
    {
      q: "Can I get a dumpster for my business in Pinellas Park?",
      a: "Yes. If you have room in a parking lot or behind the building, we can drop a dumpster for a shop cleanout or small renovation. You'll get the price before delivery.",
    },
    {
      q: "How much notice do you need for Pinellas Park?",
      a: "A day or two is ideal. It's a long drive from Holiday, so we schedule Pinellas Park deliveries alongside our other south county stops.",
    },
    {
      q: "Is Lealman part of Pinellas Park?",
      a: "No. Lealman is unincorporated Pinellas County, even though it borders Pinellas Park. Street placement there goes through the County, not the City.",
    },
  ],
  image: "/trailer-2.webp",
  imageAlt: "Lupo truck and dumpster trailers at a home cleanout, the kind of job we do in Pinellas Park, FL",
  heroImage: "/trailer-1.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve Pinellas Park regularly (edge city)",
    "Drive time from the Holiday yard (About 50 minutes)",
    "Pricing: confirm the standard flat prices apply in Pinellas Park with no distance surcharge",
    "Disposal facility used for Pinellas Park loads (and 'a few miles away')",
    "City of Pinellas Park right-of-way permit process and phone (no city phone in lib/cities.js yet)",
    "We take commercial/business-lot jobs (shop and office cleanouts)",
    "Lealman is unincorporated Pinellas County",
    "Landmarks: England Brothers Park and Freedom Lake Park are in Pinellas Park",
  ],
};

export default pinellasPark;
