import { Phone } from "lucide-react";

/**
 * MobileCallButton — floating tap-to-call CTA anchored to the bottom-right
 * corner on mobile viewports only (hidden on md+).
 *
 * Rendered globally from pages/_app.js so it's visible on every page without
 * each page having to opt in. The call target matches the sitewide
 * phone number used by the header, hero, and footer CTAs.
 *
 * Accessibility:
 *   - `aria-label` carries the full phone number for screen readers since
 *     the visible icon has no text.
 *   - `rel="nofollow"` on the tel: link to avoid spending crawl budget.
 *   - Positioned with `bottom-5 right-5` to stay clear of iOS home-indicator
 *     and Android nav bars while still feeling anchored to the edge.
 */
export default function MobileCallButton() {
  return (
    <a
      href="tel:7273176717"
      aria-label="Call Lupo Dumpster Rentals at (727) 317-6717"
      rel="nofollow"
      className="md:hidden fixed bottom-5 right-5 z-50 group"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-red-600/60 animate-ping"
      />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-red-600 text-white shadow-lg shadow-black/30 ring-2 ring-white/20 active:bg-red-700 transition-colors">
        <Phone className="h-6 w-6" aria-hidden="true" />
      </span>
    </a>
  );
}
