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
  Recycle,
} from "lucide-react";

import dumpsterrental from "../../public/dumpsterrental.png";
import junkremovals from "../../public/junkremoval.jpg";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";

import Testimonials from "../../components/new/testimonials";
import RequestForm from "../../components/new/request-form";
import { ComparisonTableSection } from "../../components/new/comparison-table-section";

const metatitle =
  "Junk Removal Services Pasco County | Same-Day Pickup Available";
const description =
  "Professional junk removal services in Pasco County. We remove furniture, appliances, yard waste, construction debris, and more. Full-service hauling with same-day pickup available. Call (727) 317-6717 for a free quote.";

const processSteps = [
  {
    title: "Call or Book Online",
    description:
      "Contact us at (727) 317-6717 or request a quote online. Describe what junk you need removed, and we'll provide you with an upfront, honest quote with no hidden fees.",
    icon: <Phone className="h-10 w-10 text-red-500" />,
    number: 1,
  },
  {
    title: "Schedule Your Pickup",
    description:
      "Choose a convenient time that works for you. We offer same-day and next-day junk removal service throughout Pasco County based on availability.",
    icon: <Truck className="h-10 w-10 text-red-500" />,
    number: 2,
  },
  {
    title: "We Do All the Work",
    description:
      "Our professional team arrives on time, handles all the heavy lifting, loads your junk, and sweeps up the area. You don't lift a finger—just point and it's gone!",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 3,
  },
  {
    title: "Responsible Disposal",
    description:
      "We donate reusable items to local charities, recycle materials whenever possible, and ensure proper disposal of everything. You get a clean space, and we help the community.",
    icon: <Recycle className="h-10 w-10 text-red-500" />,
    number: 4,
  },
];

const faqs = [
  {
    question: "How much does junk removal cost?",
    answer:
      "Our junk removal rates start at $75 and vary based on the volume of items, type of materials, and your location in Pasco County. We provide upfront pricing with no hidden fees—what we quote is what you pay. Call us at (727) 317-6717 for a free, no-obligation estimate.",
  },
  {
    question: "What items can you remove?",
    answer:
      "We remove almost everything! Furniture, appliances, electronics, mattresses, yard waste, construction debris, hot tubs, exercise equipment, office furniture, garage clutter, estate cleanouts, and more. If you can point to it, we can haul it away. We cannot remove hazardous materials like chemicals, paint, asbestos, or biohazards.",
  },
  {
    question: "Do you offer same-day junk removal?",
    answer:
      "Yes! We offer same-day junk removal throughout Pasco County based on availability. For the best chance of same-day service, call us early in the morning at (727) 317-6717. We also offer next-day and scheduled appointments.",
  },
  {
    question: "Do I need to be present during junk removal?",
    answer:
      "While it's helpful to have someone present to show us the items, it's not always required. We can coordinate with you to make arrangements that work for your schedule, especially for exterior items or scheduled pickups.",
  },
  {
    question: "What happens to my junk after you remove it?",
    answer:
      "We're committed to eco-friendly disposal. Items in good condition are donated to local charities like Goodwill, Salvation Army, and Habitat for Humanity. We recycle materials like metal, electronics, and appliances. Only as a last resort do we dispose of items in landfills.",
  },
  {
    question: "Can you remove junk from inside my home?",
    answer:
      "Absolutely! We provide full-service junk removal from anywhere—inside your home, garage, attic, basement, or yard. We handle all the heavy lifting and navigate stairs, tight spaces, and any obstacles. We'll even sweep up when we're done.",
  },
  {
    question: "How do I prepare for junk removal?",
    answer:
      "Simply separate items you want removed from items you're keeping. Make sure we have clear access to the items. That's it! We handle everything else including disconnecting items (if safe to do so), disassembly if needed, and all the heavy lifting.",
  },
  {
    question: "Do you provide commercial junk removal?",
    answer:
      "Yes! We serve businesses throughout Pasco County including offices, retail stores, restaurants, warehouses, and construction sites. We remove office furniture, equipment, retail fixtures, restaurant equipment, and all types of commercial junk.",
  },
  {
    question: "What's the difference between junk removal and dumpster rental?",
    answer:
      "Junk removal is full-service—we do all the work for you. Dumpster rental is DIY—you fill it yourself. Choose junk removal when you want convenience and immediate results. Choose dumpster rental when you need time to fill it yourself during a project.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Lupo Enterprises is fully licensed and insured (License #L20000153106). We carry comprehensive liability insurance to protect your property during the removal process.",
  },
];

export default function JunkRemoval() {
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
          href="https://www.lupodumpsterrentals.com/services/junk-removal"
        />
        <meta
          name="keywords"
          content="junk removal, junk removal service, junk hauling, trash removal, furniture removal, appliance removal, junk pickup, estate cleanout, Pasco County junk removal, junk removal near me"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://www.lupodumpsterrentals.com/services/junk-removal"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <Image
          src={dumpsterrental}
          alt="Junk Removal Service Pasco County"
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
                Same-Day Service Available
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Junk Removal Services in Pasco County
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional junk removal and hauling services. We remove
              furniture, appliances, electronics, yard waste, and all types of
              junk. Full-service removal with same-day pickup available.
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
                  We Do All The Work
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Same-Day Pickup Available
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  Eco-Friendly Disposal
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
        title="Why Choose Our Junk Removal Service?"
        subtitle="See how Lupo Enterprises delivers superior full-service junk removal compared to other hauling companies in Pasco County."
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
                Simple 4-Step Junk Removal Process
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Getting rid of unwanted junk has never been easier. Our
                full-service process means you don&apos;t lift a finger—we handle
                everything from start to finish.
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
                  <Link href="/contact">Schedule Junk Removal</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={junkremovals}
                alt="Junk Removal Process"
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
              Junk Removal Questions Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our junk removal services
              in Pasco County. Don&apos;t see your question? Call us at (727)
              317-6717.
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
              Ready to Get Rid of Your Junk?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our experienced team is ready to haul away your unwanted items
              quickly and responsibly. Call us today for a free quote and
              same-day service availability.
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
              Professional Junk Removal Services in Pasco County
            </h2>
            <p className="text-gray-700 mb-4">
              When you need reliable <strong>junk removal services</strong> in
              Pasco County, Lupo Enterprises provides full-service hauling that
              takes all the work off your hands. Whether you&apos;re decluttering
              your home, clearing out an estate, renovating, or managing a
              cleanout project, we make junk removal easy and stress-free.
            </p>
            <p className="text-gray-700 mb-4">
              Our professional <strong>junk removal service</strong> handles
              everything from furniture and appliances to electronics, yard
              waste, construction debris, and general household junk. We do all
              the heavy lifting, loading, hauling, and disposal—you just point
              to what needs to go, and we take care of the rest.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Full-Service Junk Removal & Hauling
            </h3>
            <p className="text-gray-700 mb-4">
              Unlike dumpster rental where you do the work yourself,{" "}
              <strong>junk removal</strong> is completely full-service. Our team
              arrives at your location, provides a final quote, handles all the
              heavy lifting, loads everything into our truck, sweeps up the
              area, and hauls it all away. It&apos;s the most convenient way to get
              rid of unwanted items quickly.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              What We Remove
            </h3>
            <p className="text-gray-700 mb-4">
              We remove almost everything! Our <strong>junk hauling</strong>{" "}
              services include furniture removal (sofas, beds, tables, chairs),
              appliance removal (refrigerators, washers, dryers, stoves),
              electronics disposal, mattress removal, yard waste, construction
              debris, hot tubs, exercise equipment, office furniture, garage
              clutter, estate cleanouts, and much more. If you can point to it,
              we can haul it away.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Eco-Friendly Junk Disposal
            </h3>
            <p className="text-gray-700 mb-4">
              We&apos;re committed to responsible disposal. Items in good condition
              are donated to local charities including Goodwill, Salvation Army,
              and Habitat for Humanity ReStore. We recycle metals, electronics,
              appliances, and other materials whenever possible. We only resort
              to landfill disposal when necessary, helping keep Pasco County
              green.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Same-Day Junk Removal Available
            </h3>
            <p className="text-gray-700 mb-4">
              Need <strong>junk removal</strong> fast? We offer same-day service
              throughout Pasco County based on availability. Whether you need
              immediate furniture removal, appliance pickup, or a complete home
              cleanout, we can often accommodate same-day requests. Just call us
              early at (727) 317-6717.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Serving All of Pasco County
            </h3>
            <p className="text-gray-700 mb-4">
              We proudly provide <strong>junk removal services</strong>{" "}
              throughout Pasco County, including New Port Richey, Hudson, Port
              Richey, Holiday, Trinity, Land O&apos;Lakes, Wesley Chapel, Dade City,
              Zephyrhills, and surrounding communities. Our local expertise
              means faster response times, competitive pricing, and personalized
              service.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Residential & Commercial Junk Removal
            </h3>
            <p className="text-gray-700 mb-4">
              We serve both homeowners and businesses. Our{" "}
              <strong>commercial junk removal</strong> services help offices,
              retail stores, restaurants, warehouses, and construction sites
              maintain clean, clutter-free spaces. We handle office furniture,
              equipment, retail fixtures, restaurant equipment, and all types of
              commercial junk efficiently and professionally.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Need Junk Removed Today?
              </p>
              <p className="text-gray-700">
                Call us now at{" "}
                <Link
                  href="tel:7273176717"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  (727) 317-6717
                </Link>{" "}
                or request a free quote online. Same-day junk removal service
                available throughout Pasco County!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
