"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  const faqCategories = [
    {
      category: "Dumpster Rentals",
      questions: [
        {
          question: "What size dumpster do I need?",
          answer:
            "We offer 10-yard, 15-yard, and 20-yard dumpsters to meet different project needs. A 10-yard dumpster is perfect for small cleanouts, garage cleanups, or minor renovations. A 15-yard dumpster works well for medium projects like kitchen remodels or basement cleanouts. A 20-yard dumpster is ideal for large renovations, construction projects, or major home cleanouts. We're happy to help you determine the right size for your specific project.",
        },
        {
          question: "How much is a dumpster rental?",
          answer:
            "Our dumpster rental prices vary based on size, location, rental duration, and type of materials. We believe in transparent pricing with no hidden fees. For an accurate quote tailored to your specific project needs, please reach out to us for a free, no-obligation estimate. We'll provide you with competitive pricing that includes delivery, pickup, and disposal.",
        },
        {
          question: "How long can I keep the dumpster?",
          answer:
            "Our standard rental period is 4 days, but we can accommodate longer rental periods if needed. Just let us know your timeline when you book, and we'll work with you to ensure you have the dumpster for as long as you need it.",
        },
        {
          question: "What is your pricing structure?",
          answer:
            "Our pricing includes delivery, pickup, and disposal fees. Rates vary based on dumpster size, rental duration, location, and the type of materials being disposed of. Contact us for a free quote tailored to your specific needs.",
        },
        {
          question: "Do I need to be present for delivery and pickup?",
          answer:
            "You don't need to be present for delivery or pickup, but we do need clear instructions on where to place the dumpster. We'll coordinate with you to ensure the dumpster is placed in a convenient location that works for your project.",
        },
      ],
    },
    {
      category: "Junk Removal",
      questions: [
        {
          question: "What types of junk do you remove?",
          answer:
            "We remove a wide variety of items including furniture, appliances, electronics, yard waste, construction debris, and general household junk. If you're unsure about a specific item, please contact us to discuss your needs.",
        },
        {
          question: "How does the junk removal process work?",
          answer:
            "Our team will arrive at your location, assess the items to be removed, provide a final quote, and then handle all the loading and disposal. You don't have to lift a finger - we take care of everything from start to finish.",
        },
        {
          question: "Do you recycle or donate items?",
          answer:
            "Yes, we're committed to environmentally responsible disposal. When possible, we recycle materials and donate usable items to local charities. This helps minimize landfill waste and supports our community.",
        },
        {
          question: "How quickly can you remove my junk?",
          answer:
            "We offer same-day and next-day service in many cases. Our scheduling is flexible, and we'll work with you to find a convenient time for your junk removal needs.",
        },
      ],
    },
    {
      category: "Bobcat Services",
      questions: [
        {
          question: "What can your Bobcat services help with?",
          answer:
            "Our Bobcat services are ideal for grading, leveling, debris removal, small demolition projects, landscaping preparation, and material transport. The compact size allows us to access areas that larger equipment can't reach.",
        },
        {
          question: "Do you offer hourly rates for Bobcat services?",
          answer:
            "Yes, we offer both hourly rates and project-based pricing for our Bobcat services. For smaller jobs, hourly rates are often most economical, while larger projects may benefit from a comprehensive project quote.",
        },
        {
          question: "What areas do you service with your Bobcat?",
          answer:
            "We provide Bobcat services throughout Pasco County and surrounding areas. Our equipment is transported to your site, and our experienced operators ensure the work is completed efficiently and safely.",
        },
        {
          question: "Do I need to prepare my property before Bobcat services?",
          answer:
            "Minimal preparation is required. We recommend marking any underground utilities or sprinkler systems. Our team will conduct a site assessment before beginning work to ensure safety and efficiency.",
        },
      ],
    },
    {
      category: "Demolition",
      questions: [
        {
          question: "What types of demolition services do you offer?",
          answer:
            "We specialize in small to medium demolition projects including shed removal, deck demolition, interior demolition, garage teardowns, and similar structures. Our services include complete debris removal and site cleanup.",
        },
        {
          question: "Do you handle permits for demolition projects?",
          answer:
            "While we can provide guidance on permit requirements, the property owner is typically responsible for obtaining necessary permits. We're happy to work with you and provide any documentation needed for the permit process.",
        },
        {
          question: "How do you ensure safety during demolition?",
          answer:
            "Safety is our top priority. We use proper equipment, follow industry best practices, and take precautions to protect your property. Our team is experienced in controlled demolition techniques to minimize risks.",
        },
        {
          question: "What happens to the demolition debris?",
          answer:
            "All demolition debris is properly sorted, loaded, and transported for disposal or recycling. We handle the entire cleanup process, leaving your property clean and ready for the next phase of your project.",
        },
      ],
    },
  ]

  const [openCategory, setOpenCategory] = useState("Dumpster Rentals")
  const [openQuestions, setOpenQuestions] = useState({})

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (category, index) => {
    setOpenQuestions({
      ...openQuestions,
      [`${category}-${index}`]: !openQuestions[`${category}-${index}`],
    })
  }

  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Common Questions About Our Services</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our dumpster rentals and services. If you don&apos;t see your
            question here, please contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => toggleCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  openCategory === cat.category
                    ? "bg-red-600 text-white"
                    : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {faqCategories.map((cat) => (
            <div
              key={cat.category}
              className={`transition-all duration-300 overflow-hidden ${
                openCategory === cat.category ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-4">
                {cat.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      className="flex justify-between items-center w-full p-6 text-left"
                      onClick={() => toggleQuestion(cat.category, index)}
                      aria-expanded={openQuestions[`${cat.category}-${index}`]}
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      {openQuestions[`${cat.category}-${index}`] ? (
                        <ChevronUp className="h-5 w-5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-500" />
                      )}
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openQuestions[`${cat.category}-${index}`] ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-zinc-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 bg-black text-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-zinc-300 mb-6 max-w-xl mx-auto">
              Our team is ready to answer any questions you may have about our dumpster rentals or junk removal
              services. Contact us today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href="/contact">
                Contact Us
                </Link>
                </Button>
              <Button variant="outline" className="border-white text-black hover:bg-white/90" asChild>
                <Link href="tel:7273176717" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>(727) 317-6717</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
