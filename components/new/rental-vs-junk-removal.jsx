import { Truck, Users, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RentalVsJunkRemoval({
  city = "New Port Richey",
  rentalLink = "/contact",
  junkRemovalLink = "/services/junk-removal",
}) {
  const rows = [
    {
      feature: "You load it yourself",
      rental: true,
      junk: false,
    },
    {
      feature: "We load it for you",
      rental: false,
      junk: true,
    },
    {
      feature: "Keep on-site for days while you work",
      rental: true,
      junk: false,
    },
    {
      feature: "Same-day full removal",
      rental: false,
      junk: true,
    },
    {
      feature: "Best for multi-day projects",
      rental: true,
      junk: false,
    },
    {
      feature: "Best for single-trip cleanouts",
      rental: false,
      junk: true,
    },
    {
      feature: "Flat-rate pricing",
      rental: true,
      junk: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Which Service Do You Need?
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Dumpster Rental vs. Junk Removal in {city}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            Most {city} homeowners don&apos;t realize they have two options.
            Here&apos;s the short version: rent a dumpster when your project
            runs multiple days and you want control over loading; book full
            junk removal when you want it gone today and don&apos;t want to
            lift anything heavy. Both are flat-rate with Lupo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-50 rounded-lg p-6 border-t-4 border-red-600">
            <div className="flex items-center mb-3">
              <Truck className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-zinc-900">
                Rent a Dumpster
              </h3>
            </div>
            <p className="text-zinc-700 text-sm leading-relaxed mb-4">
              We drop off a 10, 15, or 20 yard dumpster on your driveway in{" "}
              {city}, you fill it on your schedule over 7 days, we haul it
              away. Best for renovations, roofing, DIY demos, and large estate
              cleanouts where you want to work at your own pace.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white w-full"
              asChild
            >
              <Link href={rentalLink}>Get a Rental Quote</Link>
            </Button>
          </div>

          <div className="bg-zinc-50 rounded-lg p-6 border-t-4 border-black">
            <div className="flex items-center mb-3">
              <Users className="h-8 w-8 text-zinc-900 mr-3" />
              <h3 className="text-xl font-bold text-zinc-900">
                Book Junk Removal
              </h3>
            </div>
            <p className="text-zinc-700 text-sm leading-relaxed mb-4">
              Our crew comes to your {city} home, loads everything, sweeps up,
              and is gone in hours. Best for garage cleanouts, furniture
              removal, appliance haul-away, estate clear-outs, and anytime you
              don&apos;t want to touch the stuff yourself.
            </p>
            <Button
              className="bg-black hover:bg-zinc-800 text-white w-full"
              asChild
            >
              <Link href={junkRemovalLink}>See Junk Removal</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-zinc-900 text-white">
                <th className="p-4 text-left font-semibold">
                  When to pick which
                </th>
                <th className="p-4 text-center font-semibold">
                  Dumpster Rental
                </th>
                <th className="p-4 text-center font-semibold">Junk Removal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-zinc-200 ${
                    i % 2 !== 0 ? "bg-zinc-50" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-medium text-zinc-800">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center">
                    {row.rental ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-zinc-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.junk ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-zinc-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RentalVsJunkRemoval;
