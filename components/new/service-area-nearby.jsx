import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

/**
 * ServiceAreaNearby — §8.4 cross-linking block.
 *
 * Renders 4–8 real <Link> elements (not chips!) to neighboring city
 * dumpster-rental pages using varied, descriptive anchor text. This passes
 * internal link equity and satisfies the hub-and-spoke model in §8.1.
 *
 * Anchor text is rotated deterministically across six templates per §8.2
 * so the same destination (e.g. New Port Richey, FL) does not always
 * appear with the identical exact-match phrase across the site.
 *
 * Consumers on a city page should build the `nearby` prop via
 * `getNearbyLinks(data)` from `lib/cities.js`, which filters out any
 * nearbyCities that don't (yet) have a matching dumpster-rental page.
 *
 * Props:
 *   currentCity  — display name of the current page's city
 *   state        — 2-letter state code (defaults to "FL")
 *   nearby       — [{ name, state, href }] required
 */
const ANCHOR_TEMPLATES = [
  ({ name, state }) => `Dumpster Rental in ${name}, ${state}`,
  ({ name }) => `${name} Dumpster Rentals`,
  ({ name }) => `Rent a Dumpster in ${name}`,
  ({ name }) => `Roll-Off Dumpsters in ${name}`,
  ({ name, state }) => `${name}, ${state} Roll-Off Rentals`,
  ({ name }) => `Same-Day Dumpster Delivery in ${name}`,
];

function anchorForNearby(entry, index) {
  const template = ANCHOR_TEMPLATES[index % ANCHOR_TEMPLATES.length];
  return template(entry);
}

export function ServiceAreaNearby({
  currentCity,
  state = "FL",
  nearby = [],
}) {
  if (!nearby.length) return null;

  return (
    <section className="py-16 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <MapPin className="h-10 w-10 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Dumpster Rentals Near {currentCity}, {state}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            Need a roll-off dumpster delivered to a neighboring community? Lupo
            Dumpster Rentals serves every one of these cities with the same
            flat-rate pricing and same-day availability as {currentCity}.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearby.map(({ name, state: cityState = state, href }, index) => {
            const anchor = anchorForNearby(
              { name, state: cityState },
              index,
            );
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-4 shadow-sm hover:border-red-500 hover:shadow-md transition-all"
                >
                  <span className="flex items-center gap-3">
                    <MapPin
                      className="h-5 w-5 text-red-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-zinc-900 font-medium">{anchor}</span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-zinc-400 group-hover:text-red-600 group-hover:translate-x-1 transition-transform flex-shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServiceAreaNearby;
