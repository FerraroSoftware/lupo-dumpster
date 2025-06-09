import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceLocations() {
  const locations = [
    "New Port Richey",
    "Port Richey",
    "Trinity",
    "Holiday",
    "Hudson",
    "Land O' Lakes",
    "Wesley Chapel",
    "Dade City",
    "Zephyrhills",
    "San Antonio",
    "Odessa",
    "Lutz",
    "Clearwater",
    "St. Petersburg",
    "Pinellas Park",
    "Largo",
    "Seminole",
    "Dunedin",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Service Areas
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Serving Pasco & Pinellas Counties</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            We proudly provide professional dumpster rental services throughout Pasco and Pinellas Counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48929687463!2d-82.7729!3d28.2639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b4e8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sPasco%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full flex items-center">
              <MapPin className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-medium">Based in New Port Richey, FL</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              We proudly serve Pasco & Pinellas Counties and surrounding communities including:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span>{location}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-red-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Not sure if we service your area?</h4>
              <p className="text-zinc-700 mb-4">
                We may still be able to help! Contact us to discuss your location and service needs.
              </p>
              <Button className="bg-red-700 hover:bg-red-800 text-white" asChild>
                <Link href="/contact">
                Check Your Location
                </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
