import Link from "next/link";
import { MapPin, ArrowRight, Truck } from "lucide-react";

/**
 * NprHubCallout — §8.1 hub-and-spoke link block.
 *
 * Drop into every service (and other non-city) page so Google can see a
 * keyword-rich internal link pointing to the New Port Richey dumpster rental
 * hub — the site's #1 money page.
 *
 * Props:
 *   service     — short display noun used in the heading / body
 *                 (e.g. "junk removal", "appliance removal").
 *   anchorText  — varied per page per §8.2 anchor text rules. Keep it
 *                 descriptive (never "click here" / "learn more") and try
 *                 not to reuse the exact same phrase across pages.
 *   heading     — optional override.
 *   body        — optional override (full sentence, no trailing period —
 *                 the link + final period are appended automatically).
 *   icon        — optional Lucide icon component; defaults to Truck.
 *   buttonText  — optional override for the CTA button anchor. Defaults to
 *                 a descriptive phrase ("View New Port Richey dumpsters")
 *                 instead of the shorter "View NPR Dumpsters" so the
 *                 rendered anchor reads naturally and carries the full
 *                 city name for search engines.
 */
export function NprHubCallout({
  service = "this service",
  anchorText = "dumpster rental in New Port Richey, FL",
  heading,
  body,
  icon: Icon = Truck,
  buttonText = "View New Port Richey dumpsters",
}) {
  const h = heading || `Need ${service} in New Port Richey, FL?`;
  const bodyText =
    body ||
    `Lupo Dumpster Rentals provides ${service} across New Port Richey, Pasco County, and the greater Tampa Bay area. For larger cleanouts in NPR specifically, many homeowners and contractors prefer booking a roll-off directly through`;

  return (
    <section
      aria-labelledby="npr-hub-callout-heading"
      className="py-12 bg-black text-white border-y border-zinc-800"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600/20 border border-red-500/50 flex-shrink-0">
            <Icon className="h-7 w-7 text-red-500" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-red-400 text-sm font-semibold uppercase tracking-wide mb-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              New Port Richey, FL
            </div>
            <h2
              id="npr-hub-callout-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight mb-2"
            >
              {h}
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              {bodyText}{" "}
              <Link
                href="/services/dumpster-rental-new-port-richey-fl"
                className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-4 decoration-red-500/60"
              >
                {anchorText}
              </Link>
              .
            </p>
          </div>
          <Link
            href="/services/dumpster-rental-new-port-richey-fl"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors flex-shrink-0 whitespace-nowrap"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NprHubCallout;
