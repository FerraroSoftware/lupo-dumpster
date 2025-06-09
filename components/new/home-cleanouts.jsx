import { Check, Home, Truck, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import junkremovalexpert from "../../public/new/junk-removal-expert.png"
import Image from "next/image"
import Link from "next/link"

export default function HomeCleanouts() {
  const benefits = [
    {
      title: "Complete Cleanout Solutions",
      description: "From single rooms to entire estates, we handle cleanouts of any size with care and efficiency.",
      icon: <Home className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Fast Response Times",
      description:
        "We understand that many cleanouts are time-sensitive. Our team can often provide same-day or next-day service.",
      icon: <Clock className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Professional Handling",
      description:
        "Our experienced team handles all items with care, ensuring proper disposal, recycling, or donation.",
      icon: <Truck className="h-10 w-10 text-red-600" />,
    },
  ]

  const scenarios = [
    "Moving & Relocation",
    "Estate Cleanouts",
    "Hoarding Situations",
    "Foreclosure Cleanups",
    "Downsizing Assistance",
    "Rental Property Turnover",
    "Garage & Basement Cleanouts",
    "Storage Unit Emptying",
  ]

  return (
    <section className="py-16 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-2">
            <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Specialized Service
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Home Cleanout Services</h2>
            <p className="text-lg text-zinc-700 mb-8">
              Whether you&apos;re dealing with an estate cleanout, preparing to move, or simply decluttering your home, our
              professional team provides comprehensive cleanout services to make the process stress-free.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-zinc-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white" >
              <Link href="/contact" className="flex items-center gap-2">
              Schedule a Cleanout
              </Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="order-1 lg:order-1 relative">
            <div className="relative mb-8">
              <Image
                src={junkremovalexpert || "/placeholder.svg"}
                alt="Home Cleanout Services"
                className="rounded-xl shadow-xl relative z-10"
              />
              <div className="absolute bottom-6 right-6 bg-black text-white py-3 px-6 rounded-lg shadow-lg z-20">
                <p className="font-bold">Trusted by 100+ Homeowners</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100">
              <h3 className="text-xl font-bold mb-4">We Handle All Types of Cleanouts:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scenarios.map((scenario, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{scenario}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
