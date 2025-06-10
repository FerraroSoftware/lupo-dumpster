import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Link from "next/link";

// Hardcoded data for the comparison table
const comparisonData = [
  {
    feature: "Locally Owned & Operated",
    lupo: "✓",
    others: "Varies",
    lupoColor: "text-green-600",
    othersColor: "text-zinc-500",
  },
  {
    feature: "Same-Day Service",
    lupo: "✓",
    others: "Not Always",
    lupoColor: "text-green-600",
    othersColor: "text-zinc-500",
  },
  {
    feature: "Transparent Pricing",
    lupo: "✓",
    others: "Often Hidden Fees",
    lupoColor: "text-green-600",
    othersColor: "text-zinc-500",
  },
  {
    feature: "Eco-Friendly Disposal",
    lupo: "✓",
    others: "Not Always",
    lupoColor: "text-green-600",
    othersColor: "text-zinc-500",
  },
  {
    feature: "Competitive Pricing",
    lupo: "✓",
    others: "Often Higher",
    lupoColor: "text-green-600",
    othersColor: "text-zinc-500",
  },
  {
    feature: "Pasco County Expertise",
    lupo: "✓",
    others: "Limited",
    lupoColor: "text-green-600",
    othersColor: "text-zinc-500",
  },
];

// Hardcoded pill text
const pillText = "Why Choose Us";

// Hardcoded final call to action
const ctaText = "Experience the Lupo difference for yourself!";
const ctaButtonText = "Book Your Dumpster Today";

export function ComparisonTableSection({ title, subtitle }) {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            {pillText}
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">
            {title}
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-4 text-left font-semibold">Features</th>
                <th className="p-4 text-center font-semibold">
                  Lupo Enterprises
                </th>
                <th className="p-4 text-center font-semibold">
                  Other Junk Removal Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-zinc-200 ${
                    index % 2 !== 0 ? "bg-zinc-100" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-medium text-zinc-800">
                    {row.feature}
                  </td>
                  <td className={`p-4 text-center font-bold ${row.lupoColor}`}>
                    {row.lupo}
                  </td>
                  <td className={`p-4 text-center ${row.othersColor}`}>
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4 text-zinc-700">{ctaText}</p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white"
            asChild
          >
            <Link href="/contact">{ctaButtonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
