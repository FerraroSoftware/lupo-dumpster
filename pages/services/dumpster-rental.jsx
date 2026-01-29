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
} from "lucide-react";

import dumptrailer from "../../public/dump-trailer.png";
import dumptrailers from "../../public/dump-trailers.png";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";

import Testimonials from "../../components/new/testimonials";
import RequestForm from "../../components/new/request-form";
import { ComparisonTableSection } from "../../components/new/comparison-table-section";

const metatitle =
  "Dumpster Rental Pasco County | 10, 15, 20 Yard Roll-Off Dumpsters";
const description =
  "Professional dumpster rental services in Pasco County. Choose from 10, 15, or 20-yard roll-off dumpsters for residential and commercial projects. Same-day delivery available. Transparent pricing with no hidden fees. Call (727) 317-6717 for a free quote.";

const dumpsterSizes = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental",
    size: "10 Yard Dumpster",
    description:
      "Perfect for small to medium projects like garage cleanouts, small remodels, or yard debris removal.",
    features: [
      "Holds approx. 3 pickup truck loads",
      "Dimensions: 12' L x 8' W x 3.5' H",
      "Weight limit: 2 tons included",
      "Ideal for residential projects",
    ],
    buttonText: "Rent 10 Yard",
    buttonLink: "/contact",
  },
  {
    id: 2,
    imageUrl: dumpstertrailer1,
    imageAlt: "15 Yard Dumpster Rental",
    isPopular: true,
    size: "15 Yard Dumpster",
    description:
      "Ideal for medium-sized projects like kitchen remodels, flooring removal, or basement cleanouts.",
    features: [
      "Holds approx. 4-5 pickup truck loads",
      "Dimensions: 14' L x 8' W x 4' H",
      "Weight limit: 3 tons included",
      "Most popular size",
    ],
    buttonText: "Rent 15 Yard",
    buttonLink: "/contact",
  },
  {
    id: 3,
    imageUrl: dumptrailers,
    imageAlt: "20 Yard Dumpster Rental",
    size: "20 Yard Dumpster",
    description:
      "Best for large projects like home renovations, construction debris, or complete property cleanouts.",
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
      "Contact us at (727) 317-6717 or request a quote online. We'll help you choose the perfect dumpster size for your project and provide transparent pricing with no hidden fees.",
    icon: <Phone className="h-10 w-10 text-red-500" />,
    number: 1,
  },
  {
    title: "Schedule Delivery",
    description:
      "Choose your delivery date and location. We offer same-day and next-day delivery throughout Pasco County. We'll place the dumpster exactly where you need it.",
    icon: <Truck className="h-10 w-10 text-red-500" />,
    number: 2,
  },
  {
    title: "Fill Your Dumpster",
    description:
      "Take your time filling the dumpster with your debris, junk, or construction waste. Our standard 4-day rental period gives you flexibility to work at your own pace.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 3,
  },
  {
    title: "We Pick It Up",
    description:
      "When you're done, simply call us for pickup. We'll promptly remove the dumpster and handle all disposal responsibly, leaving you with a clean space.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 4,
  },
];

const faqs = [
  {
    question: "What size dumpster do I need?",
    answer:
      "The right size depends on your project scope. A 10-yard dumpster works well for garage cleanouts and small renovations. A 15-yard dumpster (our most popular) is ideal for kitchen remodels and basement cleanouts. A 20-yard dumpster suits major renovations and construction projects. We're happy to help you determine the perfect size—just call us at (727) 317-6717.",
  },
  {
    question: "How much does dumpster rental cost?",
    answer:
      "Dumpster rental prices in Pasco County vary based on size, rental duration, location, and the type of materials. Our pricing is transparent with no hidden fees and includes delivery, pickup, and disposal. Contact us for a free, customized quote that fits your specific project needs.",
  },
  {
    question: "Do you offer same-day dumpster delivery?",
    answer:
      "Yes! We offer same-day and next-day dumpster delivery throughout Pasco County based on availability. For the best chance of same-day service, call us early in the morning at (727) 317-6717. We'll do our best to accommodate your urgent project needs.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer:
      "Our standard rental period is 4 days, which works perfectly for most projects. If you need more time, we offer flexible extensions based on dumpster availability. Just let us know your timeline when you book, and we'll accommodate your schedule.",
  },
  {
    question: "What can I put in a dumpster rental?",
    answer:
      "You can dispose of most common materials including construction debris, household junk, furniture, appliances, yard waste, roofing materials, and renovation waste. However, hazardous materials like chemicals, paint, tires, batteries, and asbestos are not permitted. Contact us if you're unsure about specific items.",
  },
  {
    question: "Is there a weight limit?",
    answer:
      "Yes, weight limits vary by dumpster size. Our 10-yard dumpsters include 2 tons, 15-yard dumpsters include 3 tons, and 20-yard dumpsters include 4 tons. Exceeding the weight limit may result in additional fees. We'll provide complete details when you book your rental.",
  },
  {
    question: "Do I need a permit for a dumpster?",
    answer:
      "If the dumpster is placed on your private property (like your driveway), you typically don't need a permit in Pasco County. If it needs to be placed on a public street, you may need a permit from your local municipality. We can help guide you through this process.",
  },
  {
    question: "Where do you deliver dumpsters?",
    answer:
      "We proudly serve all of Pasco County including New Port Richey, Hudson, Port Richey, Holiday, Trinity, Land O'Lakes, Wesley Chapel, Dade City, Zephyrhills, and surrounding areas. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Can I use dumpsters for commercial projects?",
    answer:
      "Absolutely! We provide dumpster rentals for both residential and commercial customers. We serve contractors, builders, property managers, restaurants, retail stores, and all types of businesses throughout Pasco County.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Lupo Enterprises is fully licensed and insured (License #L20000153106). We maintain all required insurance and permits to operate legally throughout Pasco County, giving you complete peace of mind.",
  },
];

export default function DumpsterRental() {
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
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental"
        />
        <meta
          name="keywords"
          content="dumpster rental, roll off dumpster, dumpster rental near me, rent a dumpster, 10 yard dumpster, 15 yard dumpster, 20 yard dumpster, Pasco County dumpster rental, dumpster rental services, waste removal"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://www.lupodumpsterrentals.com/services/dumpster-rental"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <Image
          src={dumptrailers}
          alt="Dumpster Rental Pasco County"
          fill
          className="object-cover opacity-40"
          priority
        />

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
                Same-Day Delivery
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Dumpster Rental Services in Pasco County
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional roll-off dumpster rentals for residential and
              commercial projects. Choose from 10, 15, or 20-yard dumpsters with
              flexible rental periods and transparent pricing.
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
                  10, 15, 20 Yard Sizes
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Flexible 4-Day Rentals
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  No Hidden Fees
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
              Dumpster Sizes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Choose Your Perfect Dumpster Size
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer three dumpster sizes to accommodate any project in Pasco
              County, from small home cleanouts to major construction jobs.
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
        title="Why Choose Our Dumpster Rental Service?"
        subtitle="See how Lupo Enterprises delivers superior dumpster rental services in Pasco County compared to other providers."
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
                Simple 4-Step Dumpster Rental Process
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Renting a dumpster from Lupo Enterprises is quick and
                hassle-free. We&apos;ve streamlined our process to get you the waste
                solution you need without the runaround.
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
                  <Link href="/contact">Rent a Dumpster Today</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={dumptrailer}
                alt="Dumpster Rental Process"
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
              Dumpster Rental Questions Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about dumpster rentals in Pasco
              County. Don&apos;t see your question? Call us at (727) 317-6717.
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
              Ready to Rent a Dumpster?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our experienced team is ready to help with your Pasco County
              project. Call us today for a free quote and same-day delivery
              availability.
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
              Professional Dumpster Rental Services in Pasco County
            </h2>
            <p className="text-gray-700 mb-4">
              When you need reliable <strong>dumpster rental</strong> services in
              Pasco County, Lupo Enterprises delivers professional roll-off
              dumpster solutions for any project. Whether you&apos;re tackling a home
              renovation, construction project, estate cleanout, or major
              decluttering, we make waste management simple and affordable.
            </p>
            <p className="text-gray-700 mb-4">
              Our <strong>roll-off dumpster rental</strong> services provide
              convenient waste disposal for residential and commercial customers
              throughout Pasco County. We offer three sizes—10, 15, and 20
              yards—ensuring you get the perfect dumpster for your specific needs
              without paying for more capacity than necessary.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Choosing the Right Dumpster Size
            </h3>
            <p className="text-gray-700 mb-4">
              Selecting the proper <strong>dumpster size</strong> is crucial for
              project efficiency and cost-effectiveness. Our 10-yard dumpsters
              are perfect for garage cleanouts, small remodels, and yard debris.
              The 15-yard dumpster is our most popular size, ideal for kitchen
              remodels, flooring removal, and basement cleanouts. Our 20-yard
              dumpsters accommodate major renovations, construction debris, and
              complete property cleanouts.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Same-Day Dumpster Delivery
            </h3>
            <p className="text-gray-700 mb-4">
              Need a <strong>dumpster rental</strong> quickly? We offer same-day
              and next-day delivery throughout Pasco County. Whether you&apos;re
              starting a project immediately or need emergency waste removal, our
              fast delivery service ensures you stay on schedule. Just call us
              early at (727) 317-6717 for same-day availability.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Transparent Pricing with No Hidden Fees
            </h3>
            <p className="text-gray-700 mb-4">
              Our <strong>dumpster rental prices</strong> are transparent and
              competitive. We provide upfront quotes that include delivery,
              pickup, disposal fees, and weight limits—no surprise charges or
              hidden fees. What we quote is what you pay, making budgeting for
              your project simple and straightforward.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Flexible Rental Periods
            </h3>
            <p className="text-gray-700 mb-4">
              We understand that projects rarely follow predictable timelines.
              That&apos;s why our standard 4-day <strong>dumpster rental</strong>{" "}
              period includes the flexibility to extend based on your needs. Need
              more time? Just call us—we offer affordable extensions to ensure
              your project stays on track without rushing.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Serving All of Pasco County
            </h3>
            <p className="text-gray-700 mb-4">
              We proudly provide <strong>dumpster rental services</strong>{" "}
              throughout Pasco County, including New Port Richey, Hudson, Port
              Richey, Holiday, Trinity, Land O&apos;Lakes, Wesley Chapel, Dade City,
              Zephyrhills, and all surrounding communities. Our local expertise
              means faster response times, competitive pricing, and personalized
              service from people who know your area.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Residential & Commercial Dumpster Rental
            </h3>
            <p className="text-gray-700 mb-4">
              We serve both homeowners and businesses. Our{" "}
              <strong>commercial dumpster rental</strong> services support
              contractors, builders, property managers, retailers, and businesses
              of all sizes. We also provide reliable residential dumpster rentals
              for homeowners tackling projects of any scale.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Need a Dumpster Rental Today?
              </p>
              <p className="text-gray-700">
                Call us now at{" "}
                <Link
                  href="tel:7273176717"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  (727) 317-6717
                </Link>{" "}
                or request a free quote online. Same-day dumpster delivery
                available throughout Pasco County!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
