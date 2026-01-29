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
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";

import Testimonials from "../../components/new/testimonials";
import RequestForm from "../../components/new/request-form";
import { ComparisonTableSection } from "../../components/new/comparison-table-section";

const metatitle =
  "Dumpster Trailer Rental Pasco County | 10, 15, 20 Yard Trailers";
const description =
  "Professional dumpster trailer rental in Pasco County. Choose from 10, 15, or 20-yard trailers for construction, renovation, or cleanout projects. Same-day delivery available. Call (727) 317-6717 for a free quote.";

const trailerSizes = [
  {
    id: 1,
    imageUrl: dumptrailer,
    imageAlt: "10 Yard Dumpster Trailer Rental",
    size: "10 Yard Dumpster Trailer",
    description:
      "Perfect for small to medium projects like garage cleanouts, small remodels, or yard debris removal.",
    features: [
      "Holds approx. 3 pickup truck loads",
      "Dimensions: 12' L x 8' W x 3.5' H",
      "Weight limit: 2 tons included",
      "Ideal for residential cleanouts",
    ],
    buttonText: "Rent 10 Yard Trailer",
    buttonLink: "/contact",
  },
  {
    id: 2,
    imageUrl: dumpstertrailer1,
    imageAlt: "15 Yard Dumpster Trailer Rental",
    isPopular: true,
    size: "15 Yard Dumpster Trailer",
    description:
      "Ideal for medium-sized projects like kitchen remodels, flooring removal, or basement cleanouts.",
    features: [
      "Holds approx. 4-5 pickup truck loads",
      "Dimensions: 14' L x 8' W x 4' H",
      "Weight limit: 3 tons included",
      "Most popular choice for renovations",
    ],
    buttonText: "Rent 15 Yard Trailer",
    buttonLink: "/contact",
  },
  {
    id: 3,
    imageUrl: dumptrailers,
    imageAlt: "20 Yard Dumpster Trailer Rental",
    size: "20 Yard Dumpster Trailer",
    description:
      "Best for large projects like home renovations, construction debris, or complete property cleanouts.",
    features: [
      "Holds approx. 6-7 pickup truck loads",
      "Dimensions: 16' L x 8' W x 5' H",
      "Weight limit: 4 tons included",
      "Perfect for major construction projects",
    ],
    buttonText: "Rent 20 Yard Trailer",
    buttonLink: "/contact",
  },
];

const processSteps = [
  {
    title: "Call and Get Your Free Quote",
    description:
      "Contact our team at (727) 317-6717 or fill out our online form. We'll help you choose the perfect dumpster trailer size for your project and provide transparent pricing.",
    icon: <Phone className="h-10 w-10 text-red-500" />,
    number: 1,
  },
  {
    title: "Schedule Convenient Delivery",
    description:
      "Choose your delivery date and location. We'll drop off your dumpster trailer at your property, placing it exactly where you need it for easy loading.",
    icon: <Truck className="h-10 w-10 text-red-500" />,
    number: 2,
  },
  {
    title: "Load at Your Own Pace",
    description:
      "Take the time you need to fill the trailer with your debris, junk, or construction waste. Our flexible rental periods give you the freedom to work on your schedule.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 3,
  },
  {
    title: "We Handle Pickup & Disposal",
    description:
      "When you're done, simply call us for pickup. We'll promptly remove the trailer and handle all disposal responsibly, so you can focus on your next steps.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 4,
  },
];

const faqs = [
  {
    question: "What is a dumpster trailer rental?",
    answer:
      "A dumpster trailer rental is a mobile waste container on wheels that's delivered to your property for temporary use. Unlike traditional roll-off dumpsters, our trailers are easier to maneuver and can be placed in tighter spaces, making them perfect for residential and commercial projects in Pasco County.",
  },
  {
    question: "What size dumpster trailer do I need for my project?",
    answer:
      "The right size depends on your project scope. A 10-yard trailer works well for garage cleanouts and small renovations. A 15-yard trailer (our most popular) is ideal for kitchen remodels and basement cleanouts. A 20-yard trailer suits major renovations and construction projects. We're happy to help you determine the perfect size—just call us at (727) 317-6717.",
  },
  {
    question: "How much does a dumpster trailer rental cost?",
    answer:
      "Dumpster trailer rental prices vary based on size, rental duration, location in Pasco County, and the type of materials. Our pricing is transparent with no hidden fees and includes delivery, pickup, and disposal. Contact us for a free, customized quote that fits your specific project needs.",
  },
  {
    question: "How long can I keep the dumpster trailer?",
    answer:
      "Our standard rental period is 4 days, which works perfectly for most projects. If you need more time, we offer flexible extensions based on trailer availability. Just let us know your timeline when you book, and we'll accommodate your schedule.",
  },
  {
    question: "What can I put in a dumpster trailer?",
    answer:
      "You can dispose of most common materials including construction debris, household junk, furniture, appliances, yard waste, roofing materials, and renovation waste. However, hazardous materials like chemicals, paint, tires, batteries, and asbestos are not permitted. Contact us if you're unsure about specific items.",
  },
  {
    question: "Do you offer same-day dumpster trailer delivery?",
    answer:
      "Yes! We offer same-day delivery service throughout Pasco County based on availability. For the best chance of same-day service, call us early in the morning at (727) 317-6717. We'll do our best to accommodate your urgent project needs.",
  },
  {
    question: "Where do you deliver dumpster trailers?",
    answer:
      "We proudly serve all of Pasco County including New Port Richey, Hudson, Port Richey, Holiday, Trinity, Land O'Lakes, Wesley Chapel, Dade City, Zephyrhills, and surrounding areas. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Is there a weight limit for dumpster trailers?",
    answer:
      "Yes, weight limits vary by trailer size. Our 10-yard trailers include 2 tons, 15-yard trailers include 3 tons, and 20-yard trailers include 4 tons. Exceeding the weight limit may result in additional fees. We'll provide complete details when you book your rental.",
  },
  {
    question: "Do I need to be present for delivery and pickup?",
    answer:
      "You don't need to be present, but we do need clear instructions on trailer placement. We'll coordinate with you beforehand to ensure the dumpster trailer is positioned conveniently for your project. Just make sure the delivery area is accessible and clear.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Lupo Dumpster Rentals is fully licensed and insured (License #L20000153106), giving you complete peace of mind. We maintain all required insurance and permits to operate legally throughout Pasco County.",
  },
];

export default function DumpsterTrailerRental() {
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
          href="https://www.lupodumpsterrentals.com/services/dumpster-trailer-rental"
        />
        <meta
          name="keywords"
          content="dumpster trailer rental, dump trailer rental, dumpster trailer rental near me, roll off trailer rental, 10 yard dumpster trailer, 15 yard dumpster trailer, 20 yard dumpster trailer, Pasco County dumpster trailer, dumpster rental Pasco County, waste removal trailer"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://www.lupodumpsterrentals.com/services/dumpster-trailer-rental"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <Image
          src={dumptrailers}
          alt="Dumpster Trailer Rental Pasco County"
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
                Same-Day Delivery Available
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Dumpster Trailer Rental in Pasco County
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional dumpster trailer rentals for construction,
              renovation, and cleanout projects. Choose from 10, 15, or 20-yard
              trailers with flexible rental periods and competitive pricing.
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
                  10, 15, 20 Yard Trailers Available
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Flexible 4-Day Rental Periods
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

      {/* Dumpster Trailer Sizes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Dumpster Trailer Sizes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Choose Your Perfect Dumpster Trailer Size
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer three dumpster trailer sizes to accommodate any project
              in Pasco County, from small residential cleanouts to major
              construction jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {trailerSizes.map((trailer) => (
              <Card
                key={trailer.id}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  trailer.isPopular ? "border-2 border-red-600" : "border"
                }`}
              >
                {trailer.isPopular && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={trailer.imageUrl}
                    alt={trailer.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{trailer.size}</h3>
                  <p className="text-gray-600 mb-4">{trailer.description}</p>

                  <div className="space-y-2 mb-6">
                    {trailer.features.map((feature, idx) => (
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
                    <Link href={trailer.buttonLink}>{trailer.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ComparisonTableSection
        title="Why Choose Our Dumpster Trailer Rentals?"
        subtitle="See how Lupo Enterprises delivers superior dumpster trailer rental service in Pasco County compared to other providers."
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
                Simple 4-Step Dumpster Trailer Rental Process
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Renting a dumpster trailer from Lupo Enterprises is quick and
                hassle-free. We&apos;ve streamlined our process to get you the
                waste solution you need without the runaround.
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
                  <Link href="/contact">Start Your Rental Today</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={dumptrailer}
                alt="Dumpster Trailer Rental Process"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg">
                Call (727) 317-6717
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Dumpster Trailer Rental Questions Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our dumpster trailer rental
              services in Pasco County. Can&apos;t find what you&apos;re looking
              for? Give us a call at (727) 317-6717.
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
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our experienced team is ready to help you choose the perfect
              dumpster trailer size and answer any questions about our rental
              process, pricing, or availability.
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
                <Link href="tel:7273176717" className="flex items-center gap-2">
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
              Professional Dumpster Trailer Rental Services in Pasco County
            </h2>
            <p className="text-gray-700 mb-4">
              When you need a reliable <strong>dumpster trailer rental</strong>{" "}
              solution in Pasco County, Lupo Dumpster Rentals delivers
              professional service with a personal touch. Our dumpster trailers
              are perfect for construction projects, home renovations, property
              cleanouts, and commercial waste removal needs throughout the
              region.
            </p>
            <p className="text-gray-700 mb-4">
              Unlike traditional roll-off dumpsters, our{" "}
              <strong>dump trailer rentals</strong> offer superior
              maneuverability and can be positioned in tighter spaces, making
              them ideal for residential driveways and urban job sites. With
              three sizes available—10, 15, and 20 yards—you can choose the
              perfect capacity for your specific project requirements.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Why Choose Dumpster Trailers Over Traditional Dumpsters?
            </h3>
            <p className="text-gray-700 mb-4">
              Dumpster trailers provide unique advantages for Pasco County
              residents and contractors. They&apos;re easier to place in
              restricted areas, have a lower profile for convenient loading, and
              are exceptionally versatile for various project types. Whether
              you&apos;re managing construction debris, household junk, or yard
              waste, our trailers deliver the flexibility you need.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Serving All of Pasco County
            </h3>
            <p className="text-gray-700 mb-4">
              We proudly provide{" "}
              <strong>dumpster trailer rental services</strong> throughout Pasco
              County, including New Port Richey, Hudson, Port Richey, Holiday,
              Trinity, Land O&apos;Lakes, Wesley Chapel, Dade City, Zephyrhills,
              and all surrounding communities. Our local expertise means faster
              response times and personalized service that understands your
              community&apos;s needs.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Commitment to Customer Satisfaction
            </h3>
            <p className="text-gray-700 mb-4">
              At Lupo Dumpster Rentals, we&apos;re fully licensed and insured
              (License #L20000153106), ensuring complete peace of mind for every
              rental. Our transparent pricing, flexible scheduling, and
              exceptional customer service have earned us a 5-star reputation
              throughout Pasco County. When you choose us for your dumpster
              trailer rental, you&apos;re choosing a local company that cares
              about quality and reliability.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Ready to Rent a Dumpster Trailer?
              </p>
              <p className="text-gray-700">
                Call us today at{" "}
                <Link
                  href="tel:7273176717"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  (727) 317-6717
                </Link>{" "}
                or request a free quote online. Same-day delivery available
                throughout Pasco County!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
