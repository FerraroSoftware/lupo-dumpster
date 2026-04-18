import { MapPin } from "lucide-react";

export function NeighborhoodsServed({
  city = "New Port Richey",
  county = "Pasco County",
  neighborhoods = [
    "Downtown New Port Richey",
    "Gulf Harbors",
    "Sea Ranch on Gulf",
    "Flor A Mar",
    "Beacon Square",
    "Seven Springs",
    "Jasmine Lakes",
    "Embassy Hills",
    "Heritage Lake",
    "Meadow Oaks",
    "River Ridge",
    "Longleaf",
    "River Oaks",
    "Tanglewood Village",
    "Regency Park",
    "Veterans Village",
    "Magnolia Valley",
    "Orchid Lake",
  ],
  zipCodes = ["34652", "34653", "34654", "34655"],
}) {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-10">
          <MapPin className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight">
            {city} Neighborhoods We Serve
          </h2>
          <p className="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
            We deliver dumpster rentals across every {city} neighborhood and
            surrounding {county} community. If you&apos;re inside the ZIP codes
            below, you qualify for same-day or next-day service at our standard
            flat rate — no distance surcharges, no travel fees.
          </p>
        </div>

        <div className="mb-10">
          <p className="text-center text-sm uppercase tracking-wide text-zinc-400 mb-3">
            ZIP Codes Served in {city}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {zipCodes.map((zip) => (
              <span
                key={zip}
                className="bg-red-600 text-white font-semibold px-4 py-2 rounded-full text-sm"
              >
                {zip}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-center text-sm uppercase tracking-wide text-zinc-400 mb-3">
            Neighborhoods & Subdivisions
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {neighborhoods.map((hood) => (
              <div
                key={hood}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-center text-sm text-zinc-200 hover:border-red-600 transition-colors"
              >
                {hood}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-zinc-400 text-sm max-w-2xl mx-auto">
          Don&apos;t see your neighborhood? We still likely serve you — call{" "}
          <a
            href="tel:+17273176717"
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            (727) 317-6717
          </a>{" "}
          and we&apos;ll confirm delivery availability to your {city} address
          in under a minute.
        </p>
      </div>
    </section>
  );
}

export default NeighborhoodsServed;
