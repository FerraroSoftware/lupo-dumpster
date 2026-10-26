import Link from "next/link";
import { lowestPrice } from "@/lib/site-config";

const linkClass = "font-semibold text-ink underline underline-offset-4 hover:text-brand-hover";

const hernandoCounty = {
  metaDescription:
    `Dumpster rental in Hernando County, FL: Spring Hill, Brooksville, Weeki Wachee & more. 10, 15 & 20-yard dumpsters from $${lowestPrice}, disposal included.`,
  keywords: [
    "dumpster rental Hernando County FL",
    "Hernando County dumpster rental",
    "dumpster rental Hernando County Florida",
    "roll off dumpster Hernando County",
    "dumpster rental Weeki Wachee",
  ],
  h1Desire: "Take On Any Project",
  answer:
    `Lupo offers dumpster rental in Hernando County, FL, from Spring Hill and Brooksville to Weeki Wachee, Hernando Beach, and Ridge Manor. Choose a 10, 15, or 20-yard dumpster at a flat price starting at $${lowestPrice}, with delivery, pickup, and disposal included. We drive north from our Holiday yard in Pasco County, so book a day or more ahead.`,
  introTitle: ["One Local Team for ", "All of Hernando County"],
  localIntro: [
    "Hernando County covers a lot of ground, from Gulf-front homes in Hernando Beach to the hills around Brooksville and the farm country near Ridge Manor and Istachatta. Spring Hill holds most of the population, with a huge grid of block homes built from the 1970s on, while the rest of the county is a mix of small towns, acreage, and coastal fishing communities.",
    "We serve the whole county from our yard in Holiday, just south in Pasco. West-side addresses like Spring Hill and Weeki Wachee are the quickest for us to reach. Brooksville and the east side take longer, so we schedule those a few days out. Whatever the town, you get the same flat prices and the same driveway-safe trailers from a family-run business.",
  ],
  landmarks: ["Weeki Wachee Springs State Park", "Withlacoochee State Forest", "Hernando Beach", "Suncoast Parkway"],
  driveTimeFromHQ: "About 35 to 60 minutes, depending on the town",
  typicalProjects: [
    {
      title: "Roofs and remodels in Spring Hill",
      text: (
        <>
          Decades-old block homes need new roofs, kitchens, and flooring. See{" "}
          <Link href="/services/dumpster-rental-spring-hill" className={linkClass}>
            dumpster rental in Spring Hill
          </Link>{" "}
          for neighborhood details.
        </>
      ),
      size: "20",
    },
    {
      title: "Older homes and acreage around Brooksville",
      text: (
        <>
          Plaster-and-lath renovations in town and fence or brush cleanups on rural land. See{" "}
          <Link href="/services/dumpster-rental-brooksville-fl" className={linkClass}>
            Brooksville dumpster rentals
          </Link>
          .
        </>
      ),
      size: "15",
    },
    {
      title: "Coastal storm cleanups",
      text: "Hernando Beach and the canal homes along the coast take the brunt of storm surge. Wet drywall, flooring, and furniture call for the 20-yard.",
      size: "20",
    },
    {
      title: "Rural sheds and yard debris",
      text: "Carports, sheds, and fallen limbs on larger lots near Weeki Wachee, Masaryktown, and Ridge Manor. A 10-yard handles most of these.",
      size: "10",
    },
  ],
  permitNotes:
    "In unincorporated Hernando County, including Spring Hill, Hernando Beach, and Ridge Manor, the County handles street and right-of-way placement. Brooksville and Weeki Wachee are incorporated cities with their own rules inside city limits. In every case, a dumpster on your own driveway usually doesn't need a permit.",
  disposalFacility: {
    name: "Hernando County's Northwest Solid Waste Management Facility",
    note: "Debris from across Hernando County generally goes to the county's Northwest Solid Waste Management Facility in Brooksville. We pull out metal and reusable items when we can.",
  },
  localFaqs: [
    {
      q: "Which Hernando County towns do you deliver to?",
      a: "Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor, Masaryktown, Aripeka, and the rural areas in between. If you're not sure, send your address and we'll confirm.",
    },
    {
      q: "Do prices change for the farther parts of Hernando County?",
      a: "No. The flat price is the same across the county. Farther addresses just need more notice so we can plan the drive.",
    },
  ],
  image: "/trailer-4.webp",
  imageAlt: "Lupo dump-trailer dumpster like the ones we deliver across Hernando County, FL",
  heroImage: "/trailer-2.webp",
  lastVerified: null,
  verify: [
    "D16: Alex must confirm we serve Brooksville and east Hernando (Ridge Manor, Istachatta) regularly",
    "Drive time range from the Holiday yard (About 35 to 60 minutes, depending on the town)",
    "Same flat price countywide, with no distance surcharge for far addresses",
    "Disposal facility used for Hernando loads (Northwest Solid Waste Management Facility)",
    "Hernando County right-of-way permit process; Brooksville and Weeki Wachee city processes",
    "Towns listed as served: Hernando Beach, Ridge Manor, Masaryktown, Aripeka, Istachatta",
    "Reusable items pulled for donation/reuse (copy says 'when we can')",
  ],
};

export default hernandoCounty;
