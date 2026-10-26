import { getSize, lowestPrice } from "@/lib/site-config";

const twenty = getSize("20");

const brooksville = {
  metaDescription:
    `Dumpster rental in Brooksville, FL for old-home renovations, land cleanups & estate cleanouts. 10, 15 & 20-yard sizes from $${lowestPrice}, disposal included.`,
  keywords: [
    "dumpster rental Brooksville FL",
    "Brooksville dumpster rental",
    "dumpster rental Brooksville Florida",
    "estate cleanout dumpster Brooksville",
    "roll off dumpster Brooksville FL",
  ],
  h1Desire: "Get the Heavy Work Done",
  answer:
    `Lupo provides dumpster rental in Brooksville, FL, the Hernando County seat, for renovations on older homes, rural land cleanups, and estate cleanouts. Our 10, 15, and 20-yard dumpsters come at one flat price, starting at $${lowestPrice}. Brooksville is one of our longer drives from Holiday, so we schedule deliveries here ahead of time.`,
  introTitle: ["Hills, History, ", "and Heavy Lifting"],
  localIntro: [
    "Brooksville surprises people who think Florida is flat. The county seat sits in rolling hills, with oak-shaded streets, a historic downtown around the old courthouse, and homes that go back a century or more. Renovating those houses means hauling out plaster, old trim, and layers of roofing, and having a dumpster on site keeps the work moving.",
    "Beyond city limits, much of the area is acreage: horse properties, small farms, and wooded lots toward the Withlacoochee State Forest and Chinsegut Hill. Those places produce fence lines, sheds, and brush piles. Brooksville is a long drive north from our Holiday yard, so book a few days out and we'll give you a firm delivery window. Tell us whether the dumpster should go near the house or out by a barn, and we'll plan the drop around it.",
  ],
  landmarks: ["Historic Hernando County Courthouse", "Good Neighbor Trail", "Withlacoochee State Forest", "Chinsegut Hill"],
  driveTimeFromHQ: "About 60 minutes",
  typicalProjects: [
    { title: "Historic home renovations", text: "Plaster, lath, old windows, and heavy trim from a house near downtown. The 20-yard handles the weight of a multi-room job.", size: "20" },
    { title: "Acreage and fence-line clearing", text: "Barbed wire, rotted posts, and brush cleared from a few acres. A 15-yard holds a lot of bulky material.", size: "15" },
    { title: "Estate cleanouts", text: "Sorting and clearing a family home that's been lived in for decades. A 15-yard gets most smaller homes done.", size: "15" },
    { title: "Shed and garage cleanouts", text: "Old lawn equipment, scrap lumber, and boxes from a detached garage. A 10-yard covers most of them.", size: "10" },
  ],
  permitNotes:
    "Brooksville is an incorporated city. Inside city limits, street or right-of-way placement may need approval from the City of Brooksville. Outside city limits, Hernando County handles right-of-way questions. On your own driveway or land, a permit usually isn't needed.",
  disposalFacility: {
    name: "Hernando County's Northwest Solid Waste Management Facility",
    note: "Brooksville loads generally go to Hernando County's Northwest Solid Waste Management Facility, the county's main public disposal site.",
  },
  localFaqs: [
    {
      q: "How much notice do you need for a Brooksville delivery?",
      a: "A few days is ideal. Brooksville is a long drive from our Holiday yard, so we plan the trip and give you a set window. Tell us your project start date and we'll work back from it.",
    },
    {
      q: "What size dumpster do I need for a whole-house cleanout in Brooksville?",
      a: `For a typical two- or three-bedroom home, the 20-yard (${twenty.loads.toLowerCase()}) usually does it in one haul. Bigger homes or ones with full garages may need a second load.`,
    },
  ],
  image: "/new/roofing-dumpster.webp",
  imageAlt: "Lupo dumpster loaded with roofing debris, like the ones we deliver for Brooksville, FL projects",
  heroImage: "/trailer-1.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve Brooksville regularly before this page goes live",
    "Drive time from the Holiday yard (About 60 minutes)",
    "Lead time for Brooksville (copy says a few days out, firm delivery window)",
    "Disposal facility used for Brooksville loads (Hernando Northwest Solid Waste Management Facility)",
    "City of Brooksville right-of-way permit process and phone (no cityPermitPhone in registry)",
    "Landmarks: Good Neighbor Trail, Chinsegut Hill",
    "Second-load option for larger cleanouts",
  ],
};

export default brooksville;
