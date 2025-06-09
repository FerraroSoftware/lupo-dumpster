import { HardHat, Truck, Clock, BadgeCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import roofing from "../../public/new/roofing-dumpster.png"
import Image from "next/image"
import rainstorm from "../../public/new/rainstorm.png"
import Link from "next/link"

export default function RoofersSection() {
  const benefits = [
    {
      title: "Specialized Roofing Dumpsters",
      description:
        "Our dumpsters are perfectly sized for roofing projects, with options for both residential and commercial jobs.",
      icon: <HardHat className="h-6 w-6 text-white" />,
    },
    {
      title: "Reliable Scheduling",
      description:
        "We understand that timing is critical for roofing projects. Count on us for on-time delivery and pickup.",
      icon: <Clock className="h-6 w-6 text-white" />,
    },
    {
      title: "Contractor Pricing",
      description:
        "Special rates for roofing contractors and volume discounts for multiple projects or ongoing partnerships.",
      icon: <BadgeCheck className="h-6 w-6 text-white" />,
    },
    {
      title: "Flexible Placement",
      description: "Strategic dumpster placement to minimize property damage and maximize efficiency for your crew.",
      icon: <Truck className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              For Professionals
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Roofing Contractors&apos; Preferred Dumpster Provider in Pasco County
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-xl">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href="/contact">
                Join Contractor Program
                </Link>
                </Button>
              <Button variant="outline" className="border-white text-black hover:bg-white/90" asChild>
                <Link href="tel:7273176717" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Us Now</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mb-8">
              <Image
                src={roofing || "/placeholder.svg"}
                alt="Roofing Contractor Services"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white py-4 px-8 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Trusted by 50+ Contractors</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <Image
                  src={rainstorm || "/placeholder.svg"}
                  alt="Contractor Testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="italic text-zinc-300 mb-2">
                    &ldquo;Lupo has been our go-to dumpster provider for over 2 years. Their reliability and understanding of
                    our roofing needs sets them apart from other services we&apos;ve used in the past.&rdquo;
                  </p>
                  <p className="font-semibold">Ed</p>
                  <p className="text-sm text-zinc-400">Rainstorm Roofing, New Port Richey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
