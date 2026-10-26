import { getSize, lowestPrice } from "@/lib/site-config";

const twenty = getSize("20");

const keystone = {
  metaDescription:
    `Dumpster rental in Keystone, FL for big-lot cleanups, dock and lake-house projects. From $${lowestPrice} with dump fees included. Family-run in Holiday.`,
  keywords: [
    "dumpster rental Keystone",
    "Keystone dumpster rental",
    "dumpster rental Keystone FL",
    "dumpster rental Odessa 33556",
    "20 yard dumpster Keystone",
  ],
  h1Desire: "Tackle the Big-Lot Cleanup",
  answer:
    `Lupo delivers 10, 15, and 20-yard dumpsters to Keystone, FL, in northwest Hillsborough County, starting at $${lowestPrice} flat. Keystone's long driveways and lakefront lots are a good match for our dump trailers, and every price covers delivery, pickup, and disposal up to the weight limit.`,
  introTitle: ["Room to Work, ", "Lakes All Around"],
  localIntro: [
    "Keystone is the quiet corner of northwest Hillsborough, between Gunn Highway and the Pinellas line. Homes here sit on bigger parcels than most of Tampa Bay, many on or near Lake Keystone and the smaller lakes around it. The county's community plan for the area is built around keeping it that way.",
    "Bigger lots mean bigger cleanups. Owners here call us for old docks and boathouses, overgrown tree lines, horse-property fencing, and additions on homes that have been expanded more than once. Some of these jobs take a weekend, others a few weeks of slow progress. Long driveways usually give us easy room to back a trailer in, and from our yard in Holiday it's one of the shorter runs we make into Hillsborough.",
  ],
  landmarks: ["Lake Keystone", "Gunn Highway", "Tarpon Springs Road"],
  driveTimeFromHQ: "About 25 minutes",
  typicalProjects: [
    {
      title: "Dock and boathouse replacement",
      text: "Weathered decking, rails, and framing from a lakefront dock are bulky. Plan on the bigger trailer, especially if the boathouse roof is coming off too.",
      size: "20",
    },
    {
      title: "Clearing an overgrown tree line",
      text: `Brush, vines, and cut limbs from a large parcel fill space quickly but rarely approach the ${twenty.weight}.`,
      size: "20",
    },
    {
      title: "Pasture fencing and pole-barn cleanup",
      text: "Old board fence, wire, and a collapsed pole barn are typical on Keystone's horse and hobby-farm properties.",
      size: "15",
    },
    {
      title: "Workshop or detached-garage cleanout",
      text: "Decades of tools, scrap, and stored furniture in a back building. One 10-yard often clears it.",
      size: "10",
    },
  ],
  permitNotes:
    "Keystone is unincorporated Hillsborough County, so county rules apply and there's no city permit office. With the trailer on your own driveway or lot, a permit usually isn't needed. Street or right-of-way placement is a question for Hillsborough County.",
  disposalFacility: {
    name: "A county-run Hillsborough disposal site",
    note: "Keystone loads generally go to a licensed Hillsborough County facility. Clean metal from fencing and docks is pulled out for recycling when we can.",
  },
  localFaqs: [
    {
      q: "Can your truck get down a long or unpaved Keystone driveway?",
      a: "Usually, if it's firm, wide enough for a pickup and trailer, and has room to turn or back out. Low oak limbs are the main thing we watch for. Send a photo and we'll confirm.",
    },
    {
      q: "Can I put dock lumber and lake debris in the dumpster?",
      a: "Dock boards, framing, and railings are fine. Let us know about treated lumber volume and anything soaked or muddy, since wet loads weigh more.",
    },
    {
      q: "Is Keystone the same as Odessa?",
      a: "They share the 33556 ZIP code and many addresses say Odessa, but Keystone is its own community in Hillsborough County. We serve both.",
    },
  ],
  image: "/trailer-2.webp",
  imageAlt: "Lupo dumpster trailers and truck at a wooded property, typical of Keystone, FL big-lot cleanups",
  heroImage: "/lupo-bobcat.webp",
  lastVerified: null,
  verify: [
    "Drive time from the Holiday yard to Keystone (estimated about 25 minutes via Tarpon Springs Rd or SR-54/Gunn Hwy)",
    "Which Hillsborough County facility Keystone loads go to",
    "Hillsborough County right-of-way permit process and the (813) 635-5400 number in the registry",
    "Keystone community plan reference (Keystone-Odessa Community Plan) and the large-lot character claim",
    "Tarpon Springs Road as a Keystone landmark",
    "That Lupo's truck and trailer can handle long/unpaved driveways (FAQ answer)",
    "Treated lumber is accepted (FAQ answer)",
    "Registry neighborhood 'Tampa Bay Golf' may be Tampa Bay Golf & Country Club in San Antonio (Pasco), not Keystone; check before it renders on this page",
  ],
};

export default keystone;
