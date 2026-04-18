import { MapPin } from "lucide-react";

/**
 * ServiceAreaMap — renders the city hero + embedded Google Map iframe.
 * The "nearby city" cross-links previously rendered here were moved to
 * <ServiceAreaNearby> (§8.4) so they're real <Link>s passing link equity
 * instead of non-clickable <span> chips.
 */
export function ServiceAreaMap({
  city = "New Port Richey",
  county = "Pasco County",
  embedSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55897.77946891345!2d-82.7438!3d28.2442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28a8b5c3d7a85%3A0x0!2sNew+Port+Richey%2C+FL!5e0!3m2!1sen!2sus!4v1700000000000",
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <MapPin className="h-10 w-10 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Our {city} Service Area
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            Based in {county}, we deliver dumpsters across {city} and the
            surrounding Gulf Coast communities. Zoom in below to confirm your
            address is inside our standard flat-rate delivery zone.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl border border-zinc-200">
          <iframe
            src={embedSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${city} dumpster rental service area map`}
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceAreaMap;
