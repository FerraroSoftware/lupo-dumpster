import Link from "next/link";
import {
  Trash2,
  HardHat,
  Home as HomeIcon,
  Refrigerator,
  Warehouse,
  ArrowRight,
} from "lucide-react";

/**
 * OtherServicesInCity — §8.5 service cross-linking block.
 *
 * Renders a grid of descriptive internal links to the other cleanup/removal
 * services Lupo offers — every link uses keyword-rich anchor text like
 * "Junk Removal in New Port Richey, FL" (matching hub-and-spoke best
 * practice from §8.1–§8.2).
 *
 * Where a city-specific landing page exists (currently NPR for all 5
 * services, plus Palm Harbor / Port Richey for junk removal), the link
 * points at that page. Otherwise it falls back to the generic service hub,
 * so we never ship a broken internal link.
 */

const SERVICES = [
  {
    key: "junk-removal",
    label: "Junk Removal",
    description:
      "We haul the mess away for you — one-time pickup, no rental period.",
    Icon: Trash2,
  },
  {
    key: "construction-debris-removal",
    label: "Construction Debris Removal",
    description:
      "Concrete, drywall, shingles, lumber — hauled off same day.",
    Icon: HardHat,
  },
  {
    key: "hoarding-cleanup",
    label: "Hoarding Cleanup",
    description: "Compassionate full-property cleanouts with zero judgment.",
    Icon: HomeIcon,
  },
  {
    key: "appliance-removal",
    label: "Appliance Removal",
    description:
      "Old fridges, washers, dryers, and water heaters hauled responsibly.",
    Icon: Refrigerator,
  },
  {
    key: "garage-cleaning-service",
    label: "Garage Cleanout",
    description:
      "Reclaim your garage — we sort, load, and dispose of the rest.",
    Icon: Warehouse,
  },
];

// Registry of known city-specific service landing pages. Extend this as we
// ship new localized pages (see §9.1 content backlog).
const CITY_SERVICE_PAGES = {
  "junk-removal": {
    "new-port-richey-fl": "/services/junk-removal-new-port-richey-fl",
    "palm-harbor": "/services/junk-removal-palm-harbor",
    "port-richey": "/services/junk-removal-port-richey",
  },
  "construction-debris-removal": {
    "new-port-richey-fl":
      "/services/construction-debris-removal-new-port-richey-fl",
  },
  "hoarding-cleanup": {
    "new-port-richey-fl": "/services/hoarding-cleanup-new-port-richey-fl",
  },
  "appliance-removal": {
    "new-port-richey-fl": "/services/appliance-removal-new-port-richey-fl",
  },
  "garage-cleaning-service": {
    "new-port-richey-fl":
      "/services/garage-cleaning-service-new-port-richey-fl",
  },
};

function hrefFor(serviceKey, citySlug) {
  return (
    CITY_SERVICE_PAGES[serviceKey]?.[citySlug] || `/services/${serviceKey}`
  );
}

function anchorFor(serviceKey, citySlug, city, state, label) {
  const hasLocal = Boolean(CITY_SERVICE_PAGES[serviceKey]?.[citySlug]);
  return hasLocal ? `${label} in ${city}, ${state}` : label;
}

export function OtherServicesInCity({
  city,
  state = "FL",
  citySlug,
}) {
  return (
    <section className="py-16 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Other Cleanup Services in {city}, {state}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            Not sure a dumpster rental is the right fit? Lupo also offers
            full-service cleanup and removal across {city}. Pick the service
            that matches your project below.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ key, label, description, Icon }) => {
            const href = hrefFor(key, citySlug);
            const anchor = anchorFor(key, citySlug, city, state, label);
            return (
              <li key={key}>
                <Link
                  href={href}
                  className="group flex h-full flex-col gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6 shadow-sm hover:border-red-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/10 text-red-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-lg font-semibold text-zinc-900">
                      {anchor}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:gap-2 transition-all">
                    See pricing & availability
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default OtherServicesInCity;
