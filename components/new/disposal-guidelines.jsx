import { PackageCheck, PackageX, Check } from "lucide-react";

// Updated lists as per your request
const acceptedItemsList = [
  "Household Junk & Clutter",
  "Furniture (sofas, chairs, tables)",
  "Appliances (non-Freon)",
  "Construction & Demolition Debris",
  "Yard Waste (branches, leaves, grass)",
  "Roofing Shingles",
  "Wood & Lumber",
  "Concrete & Asphalt (small amounts, check first)",
  "Mattresses & Box Springs",
  "Carpet & Flooring",
];

const prohibitedItemsList = [
  "Hazardous Materials (paint, chemicals, asbestos)",
  "Tires",
  "Batteries",
  "Electronics (TVs, computers - check local Trinity rules)",
  "Liquids (oils, solvents)",
  "Medical Waste",
  "Flammable Materials",
  "Large Stumps (check first)",
  "Freon Appliances (unless Freon is removed)",
  "Soil (large quantities, check first)",
];

export function DisposalGuidelines({ title, subtitle }) {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <PackageCheck className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-semibold text-zinc-800">
                Accepted Items
              </h3>
            </div>
            <ul className="space-y-2">
              {acceptedItemsList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <PackageX className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-semibold text-zinc-800">
                Prohibited Items
              </h3>
            </div>
            <ul className="space-y-2">
              {prohibitedItemsList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 mt-1 flex-shrink-0 text-lg leading-tight">
                    ✕
                  </span>
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-zinc-600">
              If you&apos;re unsure about an item, please contact us before
              placing it in the dumpster. This helps ensure safe and compliant
              disposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
