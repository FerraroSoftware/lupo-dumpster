import { Check } from "lucide-react";

// Hardcoded list of reasons to choose
const reasonsList = [
  {
    icon: <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />,
    reasonTitle: "Local Trinity Focus",
    description:
      "As a local business, we understand the specific needs of the Trinity community. We're not a national chain; we're your neighbors.",
  },
  {
    icon: <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />,
    reasonTitle: "Transparent Pricing",
    description:
      "No hidden fees for Trinity customers. We provide clear, upfront pricing so you know exactly what to expect.",
  },
  {
    icon: <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />,
    reasonTitle: "Prompt & Reliable",
    description:
      "We pride ourselves on timely dumpster delivery and pickup throughout Trinity, keeping your project on schedule.",
  },
  {
    icon: <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />,
    reasonTitle: "Variety of Sizes",
    description:
      "With 10, 15, and 20-yard dumpsters, we have the perfect size for any job in Trinity, big or small.",
  },
  {
    icon: <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />,
    reasonTitle: "Easy Online Booking",
    description:
      "Quickly reserve your dumpster for your Trinity location online or give us a call for personal assistance.",
  },
  {
    icon: <Check className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />,
    reasonTitle: "Exceptional Service",
    description:
      "Our friendly team is dedicated to providing the best dumpster rental experience in Trinity.",
  },
];

export function WhyChooseUs({ title, subtitle }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasonsList.map((reason, index) => (
            <div key={index} className="bg-zinc-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="text-xl font-semibold text-zinc-800">
                  {reason.reasonTitle}
                </h3>
              </div>
              <p className="text-zinc-700 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
