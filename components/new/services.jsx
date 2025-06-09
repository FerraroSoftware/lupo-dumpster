import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import dumptrailer from "../../public/dump-trailer.png";
import trashremoval1 from "../../public/trash-removal-1.png";
import demolition from "../../public/demolition.jpg";
import Image from "next/image";
import cleanoutservice from "../../public/clean-out-service.png";

export default function Services() {
  const services = [
    {
      title: "Dumpster Rentals",
      description:
        "Convenient and reliable dumpster rentals suitable for projects of all sizes, from home renovations to large construction sites.",
      image: dumptrailer,
      features: [
        "Multiple sizes available (10, 15, 20 yard)",
        "Flexible rental periods",
        "Same-day delivery available",
      ],
      link: "/services/dumpster-rental-new-port-richey-fl",
    },
    {
      title: "Junk Removal",
      description:
        "Professional junk removal services to help you declutter your space efficiently. We handle all the heavy lifting and proper disposal.",
      image: trashremoval1,
      features: [
        "Full-service loading and hauling",
        "Responsible disposal practices",
        "Residential and commercial services",
      ],
      link: "/services/junk-removal",
    },
    {
      title: "Bobcat Services",
      description:
        "Bobcat services for small demolition projects, disaster cleanup, deck removal, debris removal and much more. Call us today for a free quote.",
      image: demolition,
      features: ["Grading and leveling", "Debris removal and cleanup", "Experienced operators"],
      link: "/services/bobcat-services",
    },
    {
      title: "Home Cleanouts",
      description:
        "Complete home cleanout services for estate sales, downsizing, or major decluttering projects. We handle everything from furniture to household items.",
      image: cleanoutservice,
      features: ["Full-service cleanouts", "Donation and recycling coordination", "Same-day service available"],
      link: "/services/hoarding-cleanup",
    },
  ]

  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Lupo Enterprises Core Services</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            We offer a wide range of services to help you with your project. From dumpster rentals to junk removal, we
            have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-zinc-100 group"
            >
              <div className="flex flex-col h-full">
                <Link href={service.link} className="relative h-64 overflow-hidden block">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white/90 line-clamp-2">{service.description}</p>
                  </div>
                </Link>

                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link href="/contact">
            Book My Service
            </Link>
            </Button>
        </div>
      </div>
    </section>
  )
}
