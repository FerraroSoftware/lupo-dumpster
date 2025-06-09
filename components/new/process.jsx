import { PhoneCall, Truck, CheckCircle } from "lucide-react"
import junk from "../../public/junk-removal-new-port-richey.png";
import Image from "next/image";

export default function Process() {
  const steps = [
    {
      title: "Call and Schedule an Appointment",
      description: "Call our team to schedule a convenient appointment for your junk removal.",
      icon: <PhoneCall className="h-10 w-10 text-red-500" />,
      number: 1,
    },
    {
      title: "Hassle-Free Trailer Drop-Off",
      description: "We'll drop off a dumpster trailer at your property for easy loading or handle it for you.",
      icon: <Truck className="h-10 w-10 text-red-500" />,
      number: 2,
    },
    {
      title: "Prompt Trailer Pick-Up",
      description: "Once finished, contact us for prompt trailer pick-up and responsible disposal.",
      icon: <CheckCircle className="h-10 w-10 text-red-500" />,
      number: 3,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">STRESS-FREE Dumpster Rentals</h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience hassle-free dumpster rentals with our streamlined 3-step solution, designed to make
              decluttering your property a breeze.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image src={junk} alt="Dump Trailer" className="rounded-xl shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg">
              Call Us Now
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
