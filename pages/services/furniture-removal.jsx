import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Star,
  Shield,
  Truck,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Award,
} from "lucide-react";

import furnitureRemovalImage from "../../public/mattress-disposal.png";
import furnitureremovals from "../../public/furniture-removals.png";
import localfurnitureremoval from "../../public/local-furniture-removal.png";

import Testimonials from "../../components/new/testimonials";
import RequestForm from "../../components/new/request-form";
import { ComparisonTableSection } from "../../components/new/comparison-table-section";

const metatitle =
  "Furniture Removal Services Pasco County | Fast & Eco-Friendly";
const description =
  "Professional furniture removal services in Pasco County. We remove sofas, beds, tables, appliances, and more. Same-day service available. Eco-friendly disposal and donation options. Call (727) 317-6717 for a free quote.";

const processSteps = [
  {
    title: "Call for Your Free Quote",
    description:
      "Contact our team at (727) 317-6717 or book online. Tell us what furniture you need removed, and we'll provide you with an upfront, honest quote with no hidden fees.",
    icon: <Phone className="h-10 w-10 text-red-500" />,
    number: 1,
  },
  {
    title: "Schedule Your Appointment",
    description:
      "Choose a convenient time that works for your schedule. We offer flexible scheduling including same-day and next-day service based on availability.",
    icon: <Truck className="h-10 w-10 text-red-500" />,
    number: 2,
  },
  {
    title: "We Do All the Heavy Lifting",
    description:
      "Our professional team arrives on time, handles all the heavy lifting, and carefully removes your furniture from any room, floor, or location. You don't lift a finger!",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 3,
  },
  {
    title: "Eco-Friendly Disposal & Donation",
    description:
      "We donate usable furniture to local charities and recycle materials whenever possible. You get a clean space, and we help the community and environment.",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 4,
  },
];

const faqs = [
  {
    question: "What types of furniture do you remove?",
    answer:
      "We remove all types of furniture including sofas, couches, sectionals, recliners, beds, mattresses, box springs, dressers, armoires, dining tables, chairs, desks, office furniture, cabinets, entertainment centers, and more. If it's furniture, we can remove it!",
  },
  {
    question: "How much does furniture removal cost?",
    answer:
      "Pricing depends on the amount and type of furniture, as well as your location in Pasco County. We offer transparent, upfront pricing with no hidden fees. Contact us for a free estimate tailored to your specific needs.",
  },
  {
    question: "Do you offer same-day furniture removal?",
    answer:
      "Yes! We offer same-day and next-day furniture removal service throughout Pasco County based on availability. Call us early in the day at (727) 317-6717 for the best chance of same-day service.",
  },
  {
    question: "Do I need to be present during furniture removal?",
    answer:
      "While it's helpful to have someone present to show us the items and answer any questions, it's not always required. We can coordinate with you to make arrangements that work for your schedule.",
  },
  {
    question: "What happens to my old furniture?",
    answer:
      "We're committed to eco-friendly disposal. Furniture in good condition is donated to local charities like Goodwill and Salvation Army. We recycle materials whenever possible and only send items to landfills as a last resort.",
  },
  {
    question: "Can you remove furniture from upstairs or basements?",
    answer:
      "Absolutely! Our experienced team is equipped to remove furniture from any floor, including upstairs bedrooms, basements, attics, and walk-up apartments. We handle all the heavy lifting and navigating tight spaces.",
  },
  {
    question: "Do I need to disassemble furniture before removal?",
    answer:
      "No, you don't need to do anything! Our team will disassemble furniture if needed to safely remove it from your home. We bring all the necessary tools and equipment.",
  },
  {
    question: "Can you remove furniture from businesses and offices?",
    answer:
      "Yes! We provide furniture removal services for both residential and commercial customers. We can remove office desks, cubicles, conference tables, filing cabinets, and all types of commercial furniture.",
  },
  {
    question: "Where do you provide furniture removal services?",
    answer:
      "We serve all of Pasco County including New Port Richey, Hudson, Port Richey, Holiday, Trinity, Land O'Lakes, Wesley Chapel, Dade City, Zephyrhills, and surrounding areas in Pinellas and Hillsborough counties.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Lupo Enterprises is fully licensed and insured (License #L20000153106). We carry liability insurance to protect your property during the removal process.",
  },
];

export default function FurnitureRemoval() {
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
          href="https://www.lupodumpsterrentals.com/services/furniture-removal"
        />
        <meta
          name="keywords"
          content="furniture removal, furniture removal service, furniture disposal, junk furniture removal, old furniture removal, couch removal, sofa removal, mattress removal, appliance removal, Pasco County furniture removal, furniture hauling, furniture pick up"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://www.lupodumpsterrentals.com/services/furniture-removal"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <Image
          src={localfurnitureremoval}
          alt="Furniture Removal Service Pasco County"
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
                Eco-Friendly Disposal
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Furniture Removal Services in Pasco County
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional furniture removal and disposal services. We remove
              all types of furniture from any location. Same-day service
              available with eco-friendly disposal and donation options.
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
                  Same-Day Service Available
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  We Do All the Heavy Lifting
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Donation & Recycling Options
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <RequestForm />

      {/* Why Choose Us Section */}
      <ComparisonTableSection
        title="Why Choose Our Furniture Removal Service?"
        subtitle="See how Lupo Enterprises delivers superior furniture removal service compared to other junk removal companies in Pasco County."
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
                Simple 4-Step Furniture Removal Process
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Getting rid of unwanted furniture has never been easier. Our
                streamlined process ensures fast, stress-free removal from start
                to finish. No heavy lifting required on your part!
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
                  <Link href="/contact">Schedule Furniture Removal</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={furnitureremovals}
                alt="Furniture Removal Process"
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
              Furniture Removal Questions Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our furniture removal
              services in Pasco County. Have a question not listed here? Give us
              a call at (727) 317-6717.
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
              Ready to Remove Your Furniture?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our experienced team is ready to help you get rid of unwanted
              furniture quickly and responsibly. Call us today for a free quote
              and same-day service availability.
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
              Professional Furniture Removal Services in Pasco County
            </h2>
            <p className="text-gray-700 mb-4">
              When you need reliable <strong>furniture removal services</strong>{" "}
              in Pasco County, Lupo Enterprises is your trusted local partner.
              Whether you&apos;re decluttering your home, moving, downsizing, or
              renovating, we make furniture disposal easy and stress-free.
            </p>
            <p className="text-gray-700 mb-4">
              Our professional <strong>furniture removal service</strong>{" "}
              handles everything from single-item pickups to complete home
              cleanouts. We remove sofas, couches, sectionals, beds, mattresses,
              dining sets, office furniture, appliances, and more. No job is too
              big or too small for our experienced team.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Eco-Friendly Furniture Disposal & Donation
            </h3>
            <p className="text-gray-700 mb-4">
              We&apos;re committed to environmental responsibility. Furniture in good
              condition is donated to local charities like Goodwill, Salvation
              Army, and Habitat for Humanity ReStore. This helps families in
              need while keeping usable items out of landfills. We also recycle
              materials like metal, wood, and upholstery whenever possible.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Same-Day Furniture Removal Available
            </h3>
            <p className="text-gray-700 mb-4">
              Need <strong>furniture removal</strong> fast? We offer same-day
              and next-day service throughout Pasco County based on
              availability. Our flexible scheduling means you can get rid of
              unwanted furniture on your timeline, not ours.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Serving All of Pasco County
            </h3>
            <p className="text-gray-700 mb-4">
              We proudly provide <strong>furniture removal services</strong>{" "}
              throughout Pasco County, including New Port Richey, Hudson, Port
              Richey, Holiday, Trinity, Land O&apos;Lakes, Wesley Chapel, Dade City,
              Zephyrhills, and surrounding communities. Our local expertise
              means faster response times and personalized service.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Why Choose Lupo Enterprises for Furniture Removal?
            </h3>
            <p className="text-gray-700 mb-4">
              As a fully licensed and insured company (License #L20000153106),
              we provide professional furniture removal with a personal touch.
              Our team handles all the heavy lifting, carefully removes
              furniture from any floor or location, and ensures your property
              remains protected throughout the process. With transparent
              pricing, exceptional customer service, and a commitment to
              eco-friendly disposal, we&apos;ve earned our 5-star reputation
              throughout Pasco County.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Need Furniture Removed Today?
              </p>
              <p className="text-gray-700">
                Call us now at{" "}
                <Link
                  href="tel:7273176717"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  (727) 317-6717
                </Link>{" "}
                or request a free quote online. Same-day service available
                throughout Pasco County!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
