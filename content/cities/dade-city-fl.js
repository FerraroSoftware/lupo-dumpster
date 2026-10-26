import { getSize, lowestPrice } from "@/lib/site-config";

const twenty = getSize("20");

const dadeCity = {
  metaDescription:
    `Dumpster rental in Dade City, FL for older-home renovations, farm cleanups & cleanouts. 10, 15 & 20-yard sizes from $${lowestPrice}, disposal included.`,
  keywords: [
    "dumpster rental Dade City FL",
    "Dade City dumpster rental",
    "dumpster rental Dade City Florida",
    "farm cleanup dumpster Dade City",
    "renovation dumpster Dade City",
  ],
  h1Desire: "Bring the Old Place Back to Life",
  answer:
    `Lupo provides dumpster rental in Dade City, FL, the Pasco County seat, for older-home renovations, farm and barn cleanups, and estate cleanouts. We deliver 10, 15, and 20-yard dumpsters at a flat price starting at $${lowestPrice}. Dade City sits on the far east side of the county, so we schedule deliveries here a few days in advance.`,
  introTitle: ["Small-Town Dade City, ", "Big Cleanup Jobs"],
  localIntro: [
    "Dade City has deep roots. The historic courthouse anchors a downtown of early-1900s buildings, and the streets around it hold bungalows and frame houses that have been renovated more than once. Opening up those walls turns up plaster, lath, old wiring, and layers of flooring, and all of it weighs more than it looks.",
    "Outside town, east Pasco is rolling farm country with cattle pasture, old citrus land, and homesteads on several acres. Those properties collect decades of fencing, equipment sheds, and barn contents. Dade City is one of our longest drives from Holiday, so we book here by appointment and plan the route around your project dates. Give us a rough list of what's coming out and we'll match the size to the job, so nothing has to wait on a second trip out east.",
  ],
  landmarks: ["Historic Pasco County Courthouse", "Pioneer Florida Museum & Village", "Downtown Dade City"],
  driveTimeFromHQ: "About 65 minutes",
  typicalProjects: [
    { title: "Older-home renovations", text: "Plaster walls, lath, and old flooring come out heavy. For a room or more, the 20-yard gives you the weight allowance you'll need.", size: "20" },
    { title: "Farm and barn cleanouts", text: "Rusted equipment parts, rotted stall boards, old hay tarps, and feed bags. Barns usually call for the 20-yard.", size: "20" },
    { title: "Estate cleanouts", text: "Clearing a family home in town after a parent passes or moves. A 15-yard fits most two-bedroom houses.", size: "15" },
    { title: "Garage and workshop cleanouts", text: "Scrap lumber, broken tools, and boxes from a detached workshop. A 10-yard is usually enough.", size: "10" },
  ],
  permitNotes:
    "Dade City is an incorporated city, so street or right-of-way placement inside city limits goes through the City of Dade City. Rural addresses outside city limits fall under Pasco County. Placement on your own driveway or land usually doesn't need a permit.",
  disposalFacility: {
    name: "Pasco County's solid waste facility on Hays Road",
    note: "Dade City loads generally go to Pasco County's licensed disposal facility on Hays Road in Shady Hills, the county's main public disposal site on the west side of Pasco.",
  },
  localFaqs: [
    {
      q: "Can you deliver to a farm or rural property outside Dade City?",
      a: "Yes, if the ground is firm enough for a truck and trailer. Tell us about the driveway, gates, and where you'd like it, and we'll plan placement before we head out.",
    },
    {
      q: "Will plaster and old flooring from a historic home stay under the weight limit?",
      a: `Plaster, lath, and tile weigh a lot. For a full room or more, the 20-yard (${twenty.weight}) is usually the safer pick. Tell us what you're removing and we'll help you size it.`,
    },
  ],
  image: "/trailer-1.webp",
  imageAlt: "Lupo dump-trailer dumpster like the ones we deliver for Dade City, FL renovations",
  heroImage: "/trailer-4.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve Dade City regularly before this page goes live",
    "Drive time from the Holiday yard (About 65 minutes)",
    "Booking by appointment / a few days' notice for Dade City",
    "Disposal facility used for Dade City loads (Hays Road, Shady Hills)",
    "City of Dade City right-of-way permit process and phone (no cityPermitPhone in registry)",
    "Rural/farm delivery policy (firm ground, gates)",
    "Landmark: Pioneer Florida Museum & Village",
  ],
};

export default dadeCity;
