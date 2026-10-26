import { getSize, lowestPrice } from "@/lib/site-config";

const twenty = getSize("20");

const lutz = {
  metaDescription:
    `Dumpster rental in Lutz, FL for acreage cleanups, remodels, and new-build debris. Flat rates from $${lowestPrice}, delivery and disposal included.`,
  keywords: [
    "dumpster rental Lutz",
    "Lutz dumpster rental",
    "dumpster rental Lutz FL",
    "roll off dumpster Lutz",
    "20 yard dumpster Lutz",
  ],
  h1Desire: "Clear the Acreage, Finish the Remodel",
  answer:
    `Lupo brings 10, 15, and 20-yard dumpsters to Lutz, FL, in north Hillsborough County, at flat prices starting at $${lowestPrice}. Whether you're clearing an older lot off US-41 or finishing a newer home near Dale Mabry, delivery, pickup, and disposal are included, and the trailer sits on boards to protect your driveway.`,
  introTitle: ["Old Lutz and New Lutz, ", "One Flat Price"],
  localIntro: [
    "Lutz doesn't fit one mold. Along US-41 and the back roads off Sunset Lane you'll find ranch houses, barns, and fenced pasture that have been in families for decades. A few miles west, gated communities like Cheval and newer subdivisions off Van Dyke Road look nothing like that. Both kinds of property end up needing a dumpster sooner or later.",
    "So the jobs vary. One week it's a collapsed shed, old fencing, and a pile of storm limbs on two acres. The next it's flooring and cabinets out of a 2000s build. We size the trailer to the job, not the zip code. Heads up: some Lutz addresses sit north of the county line in Pasco, which changes who you'd call about a street permit.",
  ],
  landmarks: ["US-41 (Land O' Lakes Blvd)", "Dale Mabry Highway", "Lake Park on Van Dyke Road", "Cheval"],
  driveTimeFromHQ: "About 40 minutes",
  typicalProjects: [
    {
      title: "Barn, shed, and fence teardown",
      text: "Older Lutz properties often have outbuildings and wire or wood fencing that's past saving. Lumber and posts are bulky but not too heavy.",
      size: "20",
    },
    {
      title: "Acreage and storm-limb cleanup",
      text: "Big oaks drop a lot after a storm. Branches, brush, and old yard junk from a large lot usually fill a mid-size trailer before they hit the weight limit.",
      size: "15",
    },
    {
      title: "Interior refresh on a 2000s build",
      text: "Homes in Cheval and the subdivisions off Lutz Lake Fern Road are old enough now for new floors, counters, and baths.",
      size: "15",
    },
    {
      title: "Re-roofing a larger home",
      text: `Two-story homes with complex rooflines mean more shingles. Tell us the square footage and we'll check it against the ${twenty.weight} on a 20-yard.`,
      size: "20",
    },
    {
      title: "Moving-day purge",
      text: "Selling the family place or moving somewhere smaller? A 10-yard handles the furniture and boxes nobody wants to move.",
      size: "10",
    },
  ],
  permitNotes:
    "Lutz isn't an incorporated city, so there's no city hall to call. For homes on the Hillsborough side, right-of-way questions go to Hillsborough County. Addresses north of the county line fall under Pasco County instead. Either way, a dumpster on your own driveway or lot usually doesn't need a permit.",
  hoaNotes:
    "Gated and deed-restricted communities such as Cheval may limit how long a dumpster can sit out or require notice to the gate. Check with your association before delivery so the driver isn't turned away.",
  disposalFacility: {
    name: "A Hillsborough County public disposal facility",
    note: "Loads from Lutz generally go to a licensed Hillsborough County facility. Scrap metal and anything still usable gets pulled out for recycling or donation when we can.",
  },
  localFaqs: [
    {
      q: "My Lutz address is in Pasco County. Does that change anything?",
      a: "Not the price or the size options. It only changes which county you'd check with if the dumpster has to go on the street instead of your property.",
    },
    {
      q: "Can you drop the trailer back on my acreage instead of the driveway?",
      a: "Often, yes, if the ground is firm and dry and there's a clear path in and out. Soft or sandy ground after rain is the usual problem. Send a photo and we'll tell you honestly.",
    },
    {
      q: "Will the gate at Cheval let your truck in?",
      a: "Usually, once you've added us to your guest list. Give the gate our company name and your delivery date ahead of time.",
    },
  ],
  image: "/lutz.webp",
  imageAlt: "Lakes and neighborhoods in the Lutz, FL area, where Lupo delivers dumpster rentals",
  heroImage: "/trailer-1.webp",
  lastVerified: null,
  verify: [
    "Drive time from the Holiday yard to Lutz (estimated about 40 minutes via SR-54; central and east Lutz may run longer)",
    "Which Hillsborough County facility Lutz loads actually go to (or whether they come back to Pasco's Hays Road site)",
    "Hillsborough County right-of-way permit process and the (813) 635-5400 number in the registry",
    "That some Lutz mailing addresses (mainly 33558/33559) are in Pasco County",
    "Lake Park on Van Dyke Road as a landmark name",
    "US-41 being signed Land O' Lakes Blvd through Lutz",
    "Cheval HOA/gate rules on dumpsters and guest-list process",
    "Whether Lupo places trailers off-driveway on acreage (FAQ answer)",
    "Registry neighborhoods list includes Heritage Harbor and Steinbrenner; confirm these are Lutz and that you serve them",
  ],
};

export default lutz;
