import { Star, MapPin, DollarSign, Truck, Users, Shield } from "lucide-react";

export function WhyChooseLocal({
  city = "New Port Richey",
  county = "Pasco County",
  zipCodes = ["34652", "34653", "34654", "34655"],
  reasons,
}) {
  const defaultReasons = [
    {
      icon: MapPin,
      title: `Based in ${county}, not a 1-800 broker`,
      description: `We live and work in ${county}. When you call Lupo, you reach a local team — not a dispatcher two states away subcontracting the job.`,
    },
    {
      icon: Truck,
      title: `Same-day delivery to ${zipCodes.slice(0, 3).join(", ")} & ${zipCodes.slice(-1)}`,
      description: `Book by 11 AM and we'll have a dumpster in your ${city} driveway before dinner. Most ${city} ZIPs qualify year-round.`,
    },
    {
      icon: DollarSign,
      title: "Flat-rate, no surprise dump fees",
      description:
        "Our quote includes delivery, 7-day rental, pickup, disposal, and tonnage. No upsells, no per-pound ambush at pickup.",
    },
    {
      icon: Star,
      title: "4.9 out of 5 from 130+ verified reviews",
      description: `${city} homeowners keep coming back because we show up when we say we will. See our live ratings on Google and Facebook.`,
    },
    {
      icon: Users,
      title: `Locally owned by a lifelong ${county} resident`,
      description: `Founder Alex Lupo grew up in ${county} and hires his neighbors. Your rental supports local families, not a national chain.`,
    },
    {
      icon: Shield,
      title: "Fully licensed, insured & bonded",
      description: `Driveway-safe delivery on protective boards, compliant hauling, and proper disposal at ${county}-approved facilities.`,
    },
  ];

  const items = reasons || defaultReasons;

  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Why {city} Chooses Lupo
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Why {city} Trusts Lupo Dumpster Rentals
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            Six concrete reasons {city} homeowners, contractors, and small
            businesses pick us over national chains — backed by real customers
            and real {county} delivery data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((reason, index) => {
            const Icon = reason.icon || Star;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-red-50 rounded-lg mr-3">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseLocal;
