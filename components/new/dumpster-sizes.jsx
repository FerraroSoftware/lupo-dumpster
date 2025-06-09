import { Check } from "lucide-react"

export default function DumpsterSizes() {
  const features = ["Contractors", "Remodel Projects", "Construction", "4 Tons Included", "Dump Fees Included"]

  const services = [
    "Refrigerator Disposal",
    "Garbage Removal",
    "Mattress Disposal",
    "Foreclosure Clean Outs",
    "Construction Waste Removal",
    "Yard Waste Removal",
    "Trash Removal",
    "Appliance Removal",
    "Television Recycling",
    "Furniture Removal",
    "Dumpster Trailer Rental",
    "Hot Tub Disposal",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Wide Range of Dumpster Services in New Port Richey</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            No Job Too Big or Small. We have 10, 15 and 20 cubic yard dump trailers ready for rental.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-zinc-700 text-center">
            Lupo Dumpster Rentals is near you in New Port Richey to serve all your dumpster needs. Whether you&apos;re
            undertaking a home renovation or remodel or a contractor needing a waste management solution for a job site,
            we&apos;ve got you covered. Our dumpsters are reliable and convenient. Call us today to get a free quote, or
            reserve your dumpster using our online booking system.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-2 border border-zinc-100"
            >
              <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
