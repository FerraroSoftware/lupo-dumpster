import { useRouter } from "next/router";
import Link from "next/link";
import Script from "next/script";
import { ChevronRight, Home } from "lucide-react";
import { cities } from "@/lib/cities";

const SITE_URL = "https://www.lupodumpsterrentals.com";

/**
 * Smart Breadcrumbs — renders visible breadcrumb trail + matching
 * `BreadcrumbList` JSON-LD on every non-home route.
 *
 * Auto-derives labels from the current URL using a three-tier strategy:
 *   1. Curated label map (top-level routes, service slugs)
 *   2. City-slug lookup against `lib/cities.js` for all
 *      `dumpster-rental-*` / `junk-removal-*` / `appliance-removal-*` /
 *      `construction-debris-removal-*` / `garage-cleaning-service-*` /
 *      `hoarding-cleanup-*` city pages
 *   3. Generic humanize fallback ("some-slug" -> "Some Slug")
 *
 * Consumers can override the last crumb via the optional `currentLabel`
 * prop — `Bloglayout` uses this to display the actual blog post title
 * instead of the slug.
 */

// Curated top-level + static-service labels. Keys are URL path segments.
const SEGMENT_LABELS = {
  services: "Services",
  blog: "Blog",
  "about-us": "About Us",
  contact: "Contact",
  "dumpster-rental-pricing": "Pricing",
  "facebook-offer": "Facebook Offer",
  "service-locations": "Service Locations",
  reviews: "Reviews",
  quote: "Get a Quote",
  "thank-you": "Thank You",

  "10-yard-dump-trailer": "10-Yard Dump Trailer",
  "15-yard-dump-trailer": "15-Yard Dump Trailer",
  "20-yard-dump-trailer": "20-Yard Dump Trailer",
  "dumpster-rental": "Dumpster Rental",
  "dumpster-trailer-rental": "Dumpster Trailer Rental",
  "construction-dumpster-rental": "Construction Dumpster Rental",
  "junk-removal": "Junk Removal",
  "junk-pick-up": "Junk Pickup",
  "haul-away-junk": "Haul Away Junk",
  "garbage-removal-service": "Garbage Removal",
  "mattress-disposal": "Mattress Disposal",
  "furniture-removal": "Furniture Removal",
  "appliance-removal": "Appliance Removal",
  "trash-pick-up": "Trash Pickup",
  "trash-removal": "Trash Removal",
  "yard-waste-removal": "Yard Waste Removal",
  "bobcat-services": "Bobcat Services",
  "construction-debris-removal": "Construction Debris Removal",
  "garage-cleaning-service": "Garage Cleaning Service",
  "hoarding-cleanup": "Hoarding Cleanup",
  "pasco-county-trash-pickup": "Pasco County Trash Pickup",
};

// City-prefixed service slug patterns. Order matters — longest prefix first.
const CITY_SERVICE_PREFIXES = [
  ["construction-debris-removal-", "Construction Debris Removal"],
  ["garage-cleaning-service-", "Garage Cleaning Service"],
  ["hoarding-cleanup-", "Hoarding Cleanup"],
  ["appliance-removal-", "Appliance Removal"],
  ["dumpster-rental-", "Dumpster Rental"],
  ["junk-removal-", "Junk Removal"],
];

// Humanize an arbitrary slug: "some-page-slug" -> "Some Page Slug".
// Title-cases each word, lowercases common stopwords (except first word),
// and uppercases short 2-letter tokens that look like US state codes.
const STOPWORDS = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "of",
  "on", "or", "the", "to", "vs", "with",
]);
const STATE_CODES = new Set([
  "FL", "GA", "AL", "SC", "NC", "TN", "US", "USA",
]);

function humanize(slug) {
  return slug
    .split("-")
    .map((w, i) => {
      const upper = w.toUpperCase();
      if (w.length === 2 && STATE_CODES.has(upper)) return upper;
      if (i > 0 && STOPWORDS.has(w.toLowerCase())) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

// Turn a city slug (with or without `-fl` suffix) into a pretty city name.
// Falls back to the cities.js registry when present, otherwise humanizes.
function prettyCityFromSlug(citySlug) {
  if (cities[citySlug]) return `${cities[citySlug].city}, ${cities[citySlug].state}`;
  // Try stripping a trailing -fl
  const noFl = citySlug.replace(/-fl$/i, "");
  if (cities[`${noFl}-fl`]) {
    const c = cities[`${noFl}-fl`];
    return `${c.city}, ${c.state}`;
  }
  if (cities[noFl]) return `${cities[noFl].city}, ${cities[noFl].state}`;
  // Humanize fallback — "port-richey" -> "Port Richey", add ", FL" if stripped -fl
  const base = humanize(noFl);
  return citySlug.endsWith("-fl") ? `${base}, FL` : base;
}

// Resolve a single URL segment to a human label, in the context of its
// position in the path (e.g. "dumpster-rental-trinity-fl" under "/services").
function labelForSegment(segment, { parentSegment } = {}) {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];

  // Inside /services, look for known city-service prefixes
  if (parentSegment === "services") {
    for (const [prefix, service] of CITY_SERVICE_PREFIXES) {
      if (segment.startsWith(prefix)) {
        const citySlug = segment.slice(prefix.length);
        return `${service} in ${prettyCityFromSlug(citySlug)}`;
      }
    }
  }

  return humanize(segment);
}

export default function Breadcrumbs({ currentLabel } = {}) {
  const router = useRouter();
  const path = (router?.asPath || "/").split(/[?#]/)[0];

  // Skip breadcrumbs on the home page.
  if (path === "/" || path === "") return null;

  const segments = path.split("/").filter(Boolean);

  const crumbs = [{ name: "Home", href: "/" }];
  let acc = "";
  segments.forEach((seg, idx) => {
    acc += `/${seg}`;
    const isLast = idx === segments.length - 1;
    const name =
      isLast && currentLabel
        ? currentLabel
        : labelForSegment(seg, { parentSegment: segments[idx - 1] });
    crumbs.push({ name, href: acc });
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href === "/" ? "/" : c.href}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-zinc-50 border-b border-zinc-200"
      >
        <div className="container mx-auto px-4 md:px-6 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-zinc-600">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1">
                  {i > 0 && (
                    <ChevronRight
                      className="h-4 w-4 text-zinc-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="text-zinc-900 font-medium"
                    >
                      {c.name}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="hover:text-red-600 hover:underline flex items-center gap-1"
                    >
                      {i === 0 && (
                        <Home
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      )}
                      <span>{c.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
