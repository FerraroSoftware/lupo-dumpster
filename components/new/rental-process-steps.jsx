import { PhoneCall, CalendarCheck2, Trash2, Truck } from "lucide-react";

// Hardcoded list of rental process steps
const processStepsList = [
  {
    icon: <PhoneCall className="h-8 w-8 text-white" />,
    stepTitle: "1. Get Your Quote",
    description:
      "Call us or fill out our form. We'll discuss your Trinity project and recommend the right dumpster size.",
  },
  {
    icon: <CalendarCheck2 className="h-8 w-8 text-white" />,
    stepTitle: "2. Schedule Delivery",
    description:
      "Choose a convenient delivery date and time for your Trinity location. We offer flexible scheduling.",
  },
  {
    icon: <Trash2 className="h-8 w-8 text-white" />,
    stepTitle: "3. Fill Your Dumpster",
    description:
      "Load your waste and debris. Our dumpsters have easy-to-open doors for convenient loading.",
  },
  {
    icon: <Truck className="h-8 w-8 text-white" />,
    stepTitle: "4. We Pick It Up",
    description:
      "Once you're done, or your rental period ends, we'll promptly pick up the dumpster from your Trinity site.",
  },
];

export function RentalProcessSteps({ title, subtitle }) {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processStepsList.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-zinc-800 rounded-lg"
            >
              <div className="p-4 bg-red-600 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.stepTitle}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
