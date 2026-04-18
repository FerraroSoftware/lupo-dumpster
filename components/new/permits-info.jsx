import {
  FileCheck,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

export function PermitsInfo({
  city = "New Port Richey",
  county = "Pasco County",
  cityPermitPhone,
  countyPermitPhone = "(727) 847-8032",
  phone = "(727) 317-6717",
  phoneHref = "tel:+17273176717",
}) {
  const permitContact = cityPermitPhone
    ? `the City of ${city} (${cityPermitPhone}) or ${county} Public Works (${countyPermitPhone})`
    : `${county} Public Works (${countyPermitPhone})`;
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-10">
          <FileCheck className="h-10 w-10 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Do I Need a Dumpster Permit in {city}, FL?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            Short answer: usually no — but it depends on where the dumpster
            sits. Here&apos;s how {city} and {county} rules actually work, so
            you don&apos;t get surprised by a code-enforcement knock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
              <CheckCircle2
                className="h-6 w-6 text-green-600 flex-shrink-0"
                aria-hidden="true"
              />
              On private property — no permit needed
            </h3>
            <p className="text-zinc-700 text-sm leading-relaxed">
              If your dumpster sits on your driveway, private lot, or other
              private property in {city}, you typically <strong>do not</strong>{" "}
              need a permit. That covers the vast majority of residential
              rentals — garage cleanouts, kitchen remodels, roofing jobs,
              estate cleanouts. We deliver on a protective board to keep your
              driveway scratch-free.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
              <AlertTriangle
                className="h-6 w-6 text-yellow-600 flex-shrink-0"
                aria-hidden="true"
              />
              On the street or right-of-way — permit required
            </h3>
            <p className="text-zinc-700 text-sm leading-relaxed">
              If the dumpster must be placed on a public street, sidewalk, or
              right-of-way in {city}, you&apos;ll need a{" "}
              <strong>right-of-way / obstruction permit</strong> from{" "}
              {permitContact} — depending on whether the road is city or county
              maintained. Processing typically takes 1-3 business days.
            </p>
          </div>
        </div>

        <div className="bg-black rounded-lg p-6 text-white flex flex-col md:flex-row items-start md:items-center gap-4">
          <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-semibold mb-1">
              Not sure which applies to your {city} property?
            </p>
            <p className="text-sm text-zinc-300">
              Call us at{" "}
              <Link
                href={phoneHref}
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                {phone}
              </Link>{" "}
              with your address. We&apos;ll tell you in under a minute whether
              you need a permit, and for HOAs or condo associations we&apos;ll
              happily coordinate access and placement approvals.
            </p>
          </div>
          <PhoneCall className="h-6 w-6 text-red-500 hidden md:block flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}

export default PermitsInfo;
