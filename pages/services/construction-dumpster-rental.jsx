import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Star,
  Shield,
  Truck,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Award,
  HardHat,
} from "lucide-react";

import debris from "../../public/constructiondebris/debris.png";
import constructiondebrisremoval from "../../public/constructiondebris/construction-debris-removal.png";
import constructiontrashs from "../../public/construction-dumpster-rental.png";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";
import dumptrailers from "../../public/dump-trailers.png";

import Testimonials from "../../components/new/testimonials";
import RequestForm from "../../components/new/request-form";
import { ComparisonTableSection } from "../../components/new/comparison-table-section";

const metatitle =
  "Construction Dumpster Rental Pasco County | 10, 15, 20 Yard Dumpsters";
const description =
  "Professional construction dumpster rental in Pasco County. Perfect for contractors, builders, and renovation projects. Choose from 10, 15, or 20-yard dumpsters. Same-day delivery available. Call (727) 317-6717 for a free quote.";

const dumpsterSizes = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Construction Dumpster Rental",
    size: "10 Yard Construction Dumpster",
    description:
      "Perfect for small construction projects, minor renovations, or roofing jobs on smaller homes.",
    features: [
      "Holds approx. 3 pickup truck loads",
      "Dimensions: 12' L x 8' W x 3.5' H",
      "Weight limit: 2 tons included",
      "Ideal for small remodels & repairs",
    ],
    buttonText: "Rent 10 Yard",
    buttonLink: "/contact",
  },
  {
    id: 2,
    imageUrl: dumpstertrailer1,
    imageAlt: "15 Yard Construction Dumpster Rental",
    isPopular: true,
    size: "15 Yard Construction Dumpster",
    description:
      "Ideal for medium construction projects, kitchen/bath remodels, flooring removal, or deck demolition.",
    features: [
      "Holds approx. 4-5 pickup truck loads",
      "Dimensions: 14' L x 8' W x 4' H",
      "Weight limit: 3 tons included",
      "Most popular for contractors",
    ],
    buttonText: "Rent 15 Yard",
    buttonLink: "/contact",
  },
  {
    id: 3,
    imageUrl: dumptrailers,
    imageAlt: "20 Yard Construction Dumpster Rental",
    size: "20 Yard Construction Dumpster",
    description:
      "Best for large construction projects, major renovations, or commercial construction sites.",
    features: [
      "Holds approx. 6-7 pickup truck loads",
      "Dimensions: 16' L x 8' W x 5' H",
      "Weight limit: 4 tons included",
      "Perfect for major projects",
    ],
    buttonText: "Rent 20 Yard",
    buttonLink: "/contact",
  },
];

const processSteps = [
  {
    title: "Call for Your Free Quote",
    description:
      "Contact us at (727) 317-6717 or request a quote online. We'll help you choose the right dumpster size for your construction project and provide transparent pricing with no hidden fees.",
    icon: <Phone className="h-10 w-10 text-red-500" />,
    number: 1,
  },
  {
    title: "Schedule Job Site Delivery",
    description:
      "Choose your delivery date and exact placement location on your construction site. We work around your schedule and ensure safe, convenient placement for easy loading.",
    icon: <Truck className="h-10 w-10 text-red-500" />,
    number: 2,
  },
  {
    title: "Load Construction Debris",
    description:
      "Fill the dumpster with your construction waste including wood, drywall, concrete, metal, roofing materials, and more. Standard 4-day rental with flexible extensions available.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 3,
  },
  {
    title: "We Handle Pickup & Disposal",
    description:
      "When your project phase is complete, call us for pickup. We'll promptly remove the dumpster and dispose of construction debris responsibly, keeping your job site clean and safe.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 4,
  },
];

const faqs = [
  {
    question: "What size construction dumpster do I need?",
    answer:
      "The right size depends on your project scope. A 10-yard dumpster works for small remodels and minor repairs. A 15-yard dumpster (most popular with contractors) is ideal for kitchen/bath remodels and roofing jobs. A 20-yard dumpster suits major renovations and commercial construction. We'll help you determine the perfect size—call (727) 317-6717.",
  },
  {
    question: "How much does construction dumpster rental cost?",
    answer:
      "Construction dumpster rental prices vary based on size, rental duration, location in Pasco County, and waste type (mixed debris, concrete, roofing materials). Our pricing is transparent with no hidden fees and includes delivery, pickup, and disposal. Contact us for a free, customized quote.",
  },
  {
    question: "What construction materials can go in the dumpster?",
    answer:
      "You can dispose of most construction debris including wood, lumber, drywall, sheetrock, metal, roofing shingles, siding, windows, doors, flooring, tiles, concrete, bricks, and general construction waste. Hazardous materials like paint, chemicals, asbestos, and batteries are not permitted.",
  },
  {
    question: "Can I put concrete and heavy materials in the dumpster?",
    answer:
      "Yes, but concrete, bricks, and other heavy materials have weight limits. For projects with significant concrete or masonry, we recommend a dedicated concrete dumpster or letting us know upfront so we can ensure proper weight capacity and disposal.",
  },
  {
    question: "Do you deliver dumpsters to active construction sites?",
    answer:
      "Absolutely! We specialize in delivering dumpsters to active construction sites throughout Pasco County. We'll work with you to place the dumpster in the most convenient and safe location that doesn't interfere with your work.",
  },
  {
    question: "How long can I keep a construction dumpster?",
    answer:
      "Our standard rental period is 4 days, but construction projects often need more time. We offer flexible rental periods and extensions based on your project timeline. Many contractors rent weekly or monthly—we'll work with your schedule.",
  },
  {
    question: "Do you offer same-day delivery for construction dumpsters?",
    answer:
      "Yes! We offer same-day and next-day delivery throughout Pasco County based on availability. For urgent construction needs, call us early at (727) 317-6717 for the best chance of same-day service.",
  },
  {
    question: "Can I get multiple dumpsters for large construction projects?",
    answer:
      "Yes! For large commercial construction projects or major renovations, we can provide multiple dumpsters or set up scheduled exchanges. We'll work with your project manager to coordinate delivery and pickup schedules.",
  },
  {
    question: "Do you service commercial construction sites?",
    answer:
      "Absolutely! We provide construction dumpster rental for residential contractors, commercial builders, property developers, roofing companies, remodeling contractors, and all types of construction professionals throughout Pasco County.",
  },
  {
    question: "Are you licensed and insured for construction sites?",
    answer:
      "Yes, Lupo Enterprises is fully licensed and insured (License #L20000153106). We carry comprehensive liability insurance and maintain all required permits to operate on construction sites throughout Pasco County.",
  },
];

export default function ConstructionDumpsterRental() {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions({
      ...openQuestions,
      [index]: !openQuestions[index],
    });
  };

  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/construction-dumpster-rental"
        />
        <meta
          name="keywords"
          content="construction dumpster rental, construction dumpster, contractor dumpster rental, construction waste dumpster, construction debris dumpster, roll off dumpster construction, construction site dumpster, Pasco County construction dumpster"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://www.lupodumpsterrentals.com/services/construction-dumpster-rental"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <Image
          src={debris}
          alt="Construction Dumpster Rental Pasco County"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
                <Star className="h-4 w-4 mr-1.5 text-yellow-400" />
                Contractor Preferred
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
                <Shield className="h-4 w-4 mr-1.5 text-red-400" />
                Licensed & Insured
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
                <HardHat className="h-4 w-4 mr-1.5 text-green-400" />
                Construction Specialists
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Construction Dumpster Rental in Pasco County
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional construction dumpster rentals for contractors,
              builders, and renovation projects. Choose from 10, 15, or 20-yard
              dumpsters with flexible rental periods and same-day delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8"
                asChild
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Link
                href="tel:7273176717"
                className="flex items-center justify-center gap-2 text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="h-5 w-5" />
                <span>(727) 317-6717</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Job Site Delivery
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Flexible Rental Periods
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  All Construction Debris
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <RequestForm />

      {/* Dumpster Sizes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Construction Dumpster Sizes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Choose Your Construction Dumpster Size
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer three dumpster sizes perfect for construction projects in
              Pasco County, from small remodels to major commercial builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {dumpsterSizes.map((dumpster) => (
              <Card
                key={dumpster.id}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  dumpster.isPopular ? "border-2 border-red-600" : "border"
                }`}
              >
                {dumpster.isPopular && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dumpster.imageUrl}
                    alt={dumpster.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dumpster.size}</h3>
                  <p className="text-gray-600 mb-4">{dumpster.description}</p>

                  <div className="space-y-2 mb-6">
                    {dumpster.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    asChild
                  >
                    <Link href={dumpster.buttonLink}>{dumpster.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <ComparisonTableSection
        title="Why Contractors Choose Us for Construction Dumpsters"
        subtitle="See how Lupo Enterprises delivers reliable construction dumpster rental services in Pasco County."
      />

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-600/20 text-red-400 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Simple Construction Dumpster Rental Process
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We make construction dumpster rental easy so you can focus on
                your project. From job site delivery to responsible disposal,
                we handle all the details.
              </p>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold"
                  asChild
                >
                  <Link href="/contact">Rent Construction Dumpster</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={constructiontrashs}
                alt="Construction Dumpster Rental Process"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg">
                Call (727) 317-6717
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Construction Dumpster Rental FAQs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about construction dumpster
              rentals in Pasco County. Have more questions? Call (727) 317-6717.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openQuestions[index]}
                >
                  <span className="text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  {openQuestions[index] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openQuestions[index] ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-xl shadow-lg text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready for a Construction Dumpster?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Get your construction project started with reliable dumpster
              rental. Call us today for a free quote and same-day delivery
              availability throughout Pasco County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <Link href="/contact">Request Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white/90"
                asChild
              >
                <Link
                  href="tel:7273176717"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>(727) 317-6717</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">
              Professional Construction Dumpster Rental in Pasco County
            </h2>
            <p className="text-gray-700 mb-4">
              When you need reliable{" "}
              <strong>construction dumpster rental</strong> in Pasco County,
              Lupo Enterprises is the contractor-preferred choice. We specialize
              in providing dumpsters for construction sites, renovation
              projects, and commercial builds throughout the region.
            </p>
            <p className="text-gray-700 mb-4">
              Our <strong>construction dumpsters</strong> are designed to handle
              all types of construction debris including wood, drywall, metal,
              roofing materials, concrete, and general construction waste. We
              work with contractors, builders, remodelers, and property
              developers to keep job sites clean, safe, and productive.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Construction Dumpster Sizes for Every Project
            </h3>
            <p className="text-gray-700 mb-4">
              We offer three <strong>construction dumpster sizes</strong>: Our
              10-yard dumpsters are perfect for small remodels and repairs. The
              15-yard dumpster is our most popular size with contractors, ideal
              for kitchen/bath remodels and roofing jobs. Our 20-yard dumpsters
              accommodate major renovations and commercial construction sites
              with high volumes of debris.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Flexible Rental Periods for Construction Projects
            </h3>
            <p className="text-gray-700 mb-4">
              Construction projects rarely follow predictable timelines. That&apos;s
              why we offer flexible <strong>construction dumpster rental</strong>{" "}
              periods. Standard rentals are 4 days, but we offer weekly and
              monthly options for longer projects. Need an extension? Just call
              us—we work around your construction schedule, not the other way
              around.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Job Site Delivery Throughout Pasco County
            </h3>
            <p className="text-gray-700 mb-4">
              We deliver <strong>construction dumpsters</strong> directly to
              your job site throughout Pasco County including New Port Richey,
              Hudson, Port Richey, Holiday, Trinity, Land O&apos;Lakes, Wesley
              Chapel, Dade City, and Zephyrhills. We&apos;ll work with you to place
              the dumpster in the most convenient location that doesn&apos;t
              interfere with construction activities.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              What Can Go in Construction Dumpsters?
            </h3>
            <p className="text-gray-700 mb-4">
              Our construction dumpsters accept most building materials
              including lumber, wood, drywall, sheetrock, metal, roofing
              shingles, siding, windows, doors, flooring, tiles, concrete (with
              restrictions), bricks, and general construction debris. We&apos;ll
              guide you on proper disposal of specific materials like concrete,
              which may require dedicated containers.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Serving Contractors & Builders Since 2005
            </h3>
            <p className="text-gray-700 mb-4">
              As a fully licensed and insured company (License #L20000153106),
              we&apos;ve built our reputation on reliable service for contractors and
              construction professionals. We understand construction timelines,
              job site logistics, and the importance of keeping your project on
              schedule. Our same-day delivery, flexible rentals, and responsive
              service make us the preferred <strong>construction dumpster</strong>{" "}
              provider in Pasco County.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Need a Construction Dumpster Today?
              </p>
              <p className="text-gray-700">
                Call us now at{" "}
                <Link
                  href="tel:7273176717"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  (727) 317-6717
                </Link>{" "}
                or request a free quote online. Same-day construction dumpster
                delivery available throughout Pasco County!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
