import { Home, Trees, Wrench, Building } from "lucide-react"; // Ensured all necessary icons are imported

// Updated hardcoded list of common uses
const commonUsesList = [
  {
    icon: <Home className="h-10 w-10 text-red-600 mb-4" />,
    title: "Trinity Home Renovations",
    description:
      "Kitchen remodels, bathroom upgrades, or full home makeovers in Trinity.",
  },
  {
    icon: <Trees className="h-10 w-10 text-red-600 mb-4" />,
    title: "Yard Waste & Landscaping",
    description:
      "Clearing out branches, soil, and old landscaping in Trinity properties.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-red-600 mb-4" />,
    title: "Construction Debris",
    description: "For new builds or demolition projects around Trinity.",
  },
  {
    icon: <Building className="h-10 w-10 text-red-600 mb-4" />,
    title: "Garage & Attic Cleanouts",
    description: "Decluttering homes and reclaiming space in Trinity.",
  },
];

export function CommonDumpsterUses({ title, subtitle }) {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {commonUsesList.map((use, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">{use.icon}</div>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-zinc-800">
                {use.title}
              </h3>
              <p className="text-zinc-700 text-sm">{use.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
