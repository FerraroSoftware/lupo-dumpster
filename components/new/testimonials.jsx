"use client"

import { Star } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael S.",
      location: "New Port Richey, FL",
      rating: 5,
      comment:
        "Lupo Dumpster Rentals provided excellent service! The dumpster was delivered on time, and the price was very reasonable. I highly recommend them!",
    },
    {
      id: 2,
      name: "Jessica L.",
      location: "Trinity, FL",
      rating: 5,
      comment:
        "I needed a dumpster for a home renovation project, and Lupo Dumpster Rentals made the process so easy. Great communication and prompt service!",
    },
    {
      id: 3,
      name: "David P.",
      location: "Port Richey, FL",
      rating: 5,
      comment:
        "Great experience with Lupo Dumpster Rentals. They were professional, courteous, and the dumpster was exactly what I needed. Will definitely use them again!",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Trusted by Hundreds of Happy Customers</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what our customers have to say about their experience with Lupo
            Dumpster Rentals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-800 mb-6 text-lg leading-relaxed">&ldquo;{testimonial.comment}&rdquo;</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
          <p className="text-red-100 mb-6 text-lg">
            Ready to experience the Lupo Dumpster Rentals difference? Get your quote today!
          </p>
          <Button className="bg-white text-red-600 font-semibold hover:bg-red-50 transition-colors duration-200 " asChild>
            <Link href="/contact" className="">
              Get Your Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
