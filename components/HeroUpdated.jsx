import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Star, Shield, Award, Users } from "lucide-react"

export default function HeroUpdated() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/lupo-dumpster-rental.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
              <Star className="h-4 w-4 mr-1.5 text-yellow-400" />
              5-Star Rated Service
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
              <Shield className="h-4 w-4 mr-1.5 text-red-400" />
              Licensed & Insured
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
              <Award className="h-4 w-4 mr-1.5 text-green-400" />
              3+ Years Experience
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            #1 Pasco County Dumpster Rental Professionals
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Fast, reliable, and affordable dumpster rentals for all your residential and commercial needs in Pasco and Pinellas County.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold" asChild>
              <Link href="/contact">
              Request a Dumpster
              </Link>
            </Button>
            <Link href="tel:7273176717" className="flex items-center justify-center gap-2 text-lg font-medium">
              <Phone className="h-5 w-5" />
              <span>(727) 317-6717</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20 max-w-2xl mx-auto">
            <p className="text-sm text-gray-300 mb-4">Trusted by homeowners and contractors throughout Pasco County</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                10, 15, 20 Yard Dumpsters
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                Serving All of Pasco County
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                Best Pricing Guaranteed
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                Same-Day Service Available
              </div>
            </div>
          </div>

          <div className="bg-white/90 text-black py-3 px-5 rounded-lg shadow-lg inline-block">
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1.5" />
                <span className="font-bold">100+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
