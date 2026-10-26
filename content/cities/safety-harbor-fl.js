import { lowestPrice } from "@/lib/site-config";

const safetyHarbor = {
  metaDescription:
    `Dumpster rental in Safety Harbor, FL from $${lowestPrice} flat. Low-profile dumpsters for cottage renovations, yard cleanups, and remodels, disposal included.`,
  keywords: [
    "dumpster rental Safety Harbor",
    "Safety Harbor dumpster rental",
    "dumpster rental Safety Harbor FL",
    "roll off dumpster Safety Harbor",
    "15 yard dumpster Safety Harbor",
  ],
  h1Desire: "Clear Out and Start Fresh",
  answer:
    `Lupo delivers 10, 15, and 20-yard dumpsters in Safety Harbor, FL, the small Pinellas County city on Old Tampa Bay, for a flat price starting at $${lowestPrice}. Delivery, pickup, and disposal are part of that price. Our Holiday yard is about 35 minutes away, so calling a day ahead helps.`,
  introTitle: ["Careful Deliveries on ", "Safety Harbor's Quiet Streets"],
  localIntro: [
    "Safety Harbor has a small-town feel that people here work to keep. Main Street runs down to the bay and the historic springs at the Safety Harbor Resort and Spa, and the blocks around it are full of cottages, bungalows, and mid-century block homes under heavy tree canopy.",
    "Those older houses and big trees shape the jobs we see. We haul debris from cottage renovations, porch and deck rebuilds, and yard cleanups after storms bring down limbs. Away from downtown, in neighborhoods like Briar Creek and Huntington Trails, it's more often a kitchen remodel or a garage cleared before a move. Our dump trailers sit low and rest on boards, so they're easy on older driveways and don't tower over the street. Since our yard is about 35 minutes away, we'll agree on a delivery window ahead of time instead of leaving you waiting.",
  ],
  landmarks: ["Main Street", "Safety Harbor Resort and Spa", "Philippe Park"],
  driveTimeFromHQ: "About 35 minutes",
  typicalProjects: [
    { title: "Cottage and bungalow renovations", text: "Old trim, plaster, and worn flooring from a house near Main Street. A 15-yard covers most room-by-room projects.", size: "15" },
    { title: "Deck, porch, and fence rebuilds", text: "Rotted boards, railings, and fence panels are bulky but light. A 10-yard handles most single projects.", size: "10" },
    { title: "Tree and storm cleanup", text: "Mature oaks shed heavy limbs in a storm. A 20-yard gives you room for branches that don't pack down.", size: "20" },
    { title: "Garage and moving cleanouts", text: "Boxes, old furniture, and years of stored odds and ends before a move. A 15-yard fits most two-car garages.", size: "15" },
    { title: "Window, trim, and siding swaps", text: "Replacing old wood windows and siding on a house near downtown. The pieces are awkward more than heavy, so a 15-yard gives room to stack them.", size: "15" },
  ],
  permitNotes:
    "Safety Harbor is its own incorporated city. On a private driveway, you usually won't need a permit. If the dumpster has to go on a street or in the right-of-way inside city limits, ask the City of Safety Harbor before we schedule delivery.",
  disposalFacility: {
    name: "Pinellas County's Solid Waste disposal complex on 114th Ave N",
    note: "Safety Harbor debris generally goes to Pinellas County's Solid Waste disposal complex at 3095 114th Ave N in St. Petersburg. Recyclable metal is separated out when we can.",
  },
  localFaqs: [
    {
      q: "Can you place a dumpster without damaging an older driveway?",
      a: "We put boards under the trailer's wheels and jack to spread the weight. If your driveway is cracked or uneven, tell us and we'll pick the flattest spot.",
    },
    {
      q: "Can tree limbs and renovation debris go in together?",
      a: "Yes. Branches and construction debris can share a dumpster. Big logs and stumps get heavy fast, so mention them when you book and we'll size it right.",
    },
    {
      q: "What size works for a single-room cottage project?",
      a: "Our smallest is a 10-yard, and it's usually right for one room of flooring or a small bathroom. Describe the job and we'll tell you if you need more.",
    },
  ],
  image: "/trailer-4.webp",
  imageAlt: "Lupo truck towing a dumpster trailer, ready for a Safety Harbor, FL delivery",
  heroImage: "/trailer-2.webp",
  lastVerified: null,
  verify: [
    "Drive time from the Holiday yard (About 35 minutes)",
    "Disposal facility used for Safety Harbor loads",
    "City of Safety Harbor right-of-way permit process and phone (no city phone in lib/cities.js yet)",
    "Briar Creek and Huntington Trails are Safety Harbor neighborhoods (from lib/cities.js)",
    "Policy: stumps and large logs are accepted in mixed loads",
  ],
};

export default safetyHarbor;
