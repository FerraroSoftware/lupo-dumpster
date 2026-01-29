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

import oldappliances from "../../public/applianceremoval/old-appliances.png";
import appliancecleanup from "../../public/applianceremoval/appliance-cleanup.png";
import appliancesremoval from "../../public/applianceremoval/appliances-removal.png";

import Testimonials from "../../components/new/testimonials";
import RequestForm from "../../components/new/request-form";
import { ComparisonTableSection } from "../../components/new/comparison-table-section";

const metatitle =
  "Appliance Removal Services Pasco County | Refrigerator, Washer & More";
const description =
  "Professional appliance removal services in Pasco County. We remove refrigerators, washers, dryers, stoves, dishwashers, and all appliances. Same-day service available. Eco-friendly disposal and recycling. Call (727) 317-6717 for a free quote.";

const processSteps = [
  {
    title: "Call for Your Free Quote",
    description:
      "Contact us at (727) 317-6717 or book online. Tell us what appliances you need removed, and we'll provide an upfront quote with no hidden fees or surprises.",
    icon: <Phone className="h-10 w-10 text-red-500" />,
    number: 1,
  },
  {
    title: "Schedule Your Service",
    description:
      "Choose a convenient time that works for you. We offer flexible scheduling including same-day service based on availability throughout Pasco County.",
    icon: <Truck className="h-10 w-10 text-red-500" />,
    number: 2,
  },
  {
    title: "We Handle the Heavy Lifting",
    description:
      "Our experienced team arrives on time with all necessary equipment. We disconnect, carefully remove your appliances from any location, and haul them away. You don't lift a finger!",
    icon: <CheckCircle className="h-10 w-10 text-red-500" />,
    number: 3,
  },
  {
    title: "Eco-Friendly Recycling & Disposal",
    description:
      "We recycle appliances responsibly and dispose of refrigerants properly according to EPA guidelines. Working appliances are donated to local charities when possible.",
    icon: <Recycle className="h-10 w-10 text-red-500" />,
    number: 4,
  },
];

const faqs = [
  {
    question: "What types of appliances do you remove?",
    answer:
      "We remove all types of appliances including refrigerators, freezers, washers, dryers, stoves, ovens, ranges, dishwashers, microwaves, air conditioners, water heaters, garbage disposals, and both large and small kitchen appliances. If it's an appliance, we can remove it!",
  },
  {
    question: "How much does appliance removal cost?",
    answer:
      "Pricing depends on the type, size, and number of appliances, as well as your location in Pasco County. We offer transparent, upfront pricing with no hidden fees. Contact us for a free estimate tailored to your specific appliance removal needs.",
  },
  {
    question: "Do you offer same-day appliance removal?",
    answer:
      "Yes! We offer same-day and next-day appliance removal service throughout Pasco County based on availability. Call us early at (727) 317-6717 for the best chance of same-day service.",
  },
  {
    question: "Do I need to disconnect appliances before removal?",
    answer:
      "For safety reasons, we require that appliances be disconnected from gas, water, and electrical lines before our arrival. If you're unable to do this, we can coordinate with a licensed plumber or electrician (additional fees may apply).",
  },
  {
    question: "What happens to my old appliances?",
    answer:
      "We follow EPA guidelines for proper disposal. Working appliances are donated to local charities. Non-working appliances are recycled—we recover metals, plastics, and other materials. Refrigerants are removed and disposed of properly. We minimize landfill waste whenever possible.",
  },
  {
    question: "Can you remove built-in appliances?",
    answer:
      "Yes! We can remove built-in appliances like dishwashers, microwaves, and ranges. Please let us know in advance so we can bring the appropriate tools and allocate extra time if needed.",
  },
  {
    question: "Do you remove appliances from upstairs or basements?",
    answer:
      "Absolutely! Our team is equipped and experienced in removing appliances from any floor, including upstairs, basements, and tight spaces. We handle all the heavy lifting and navigation through doorways and stairs.",
  },
  {
    question: "Is there an extra charge for refrigerator removal?",
    answer:
      "Refrigerator and freezer removal may have additional fees due to the specialized handling required for proper refrigerant disposal according to EPA regulations. We'll provide a complete quote upfront so you know exactly what to expect.",
  },
  {
    question: "Do you provide commercial appliance removal?",
    answer:
      "Yes! We remove commercial appliances from restaurants, hotels, offices, and other businesses. We handle commercial refrigerators, freezers, ice machines, commercial ovens, and all types of commercial kitchen equipment.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Lupo Enterprises is fully licensed and insured (License #L20000153106). We carry liability insurance to protect your property during the removal process and follow all local and federal regulations for appliance disposal.",
  },
];

export default function ApplianceRemoval() {
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
          href="https://www.lupodumpsterrentals.com/services/appliance-removal"
        />
        <meta
          name="keywords"
          content="appliance removal, appliance disposal, refrigerator removal, washer dryer removal, stove removal, dishwasher removal, freezer removal, old appliance removal, appliance hauling, Pasco County appliance removal, appliance recycling"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://www.lupodumpsterrentals.com/services/appliance-removal"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
        <Image
          src={oldappliances}
          alt="Appliance Removal Service Pasco County"
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
                <Recycle className="h-4 w-4 mr-1.5 text-green-400" />
                EPA Compliant Disposal
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Appliance Removal Services in Pasco County
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional removal and disposal of all appliances. We handle
              refrigerators, washers, dryers, stoves, and more. Same-day service
              available with eco-friendly recycling and proper refrigerant
              disposal.
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
                  EPA Compliant Disposal
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  All Appliances Accepted
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
        title="Why Choose Our Appliance Removal Service?"
        subtitle="See how Lupo Enterprises delivers professional appliance removal with responsible disposal practices in Pasco County."
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
                Simple 4-Step Appliance Removal Process
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Removing old appliances has never been easier. Our streamlined
                process ensures safe, responsible removal with proper disposal
                and recycling. No heavy lifting required on your part!
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
                  <Link href="/contact">Schedule Appliance Removal</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={appliancesremoval}
                alt="Appliance Removal Process"
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
              Appliance Removal Questions Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our appliance removal
              services in Pasco County. Don&apos;t see your question? Call us at
              (727) 317-6717.
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
              Ready to Remove Your Appliances?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our experienced team is ready to safely remove and properly
              dispose of your old appliances. Call us today for a free quote and
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
              Professional Appliance Removal Services in Pasco County
            </h2>
            <p className="text-gray-700 mb-4">
              When you need reliable <strong>appliance removal services</strong>{" "}
              in Pasco County, Lupo Enterprises provides safe, efficient, and
              environmentally responsible disposal. Whether you&apos;re
              upgrading to new appliances, remodeling your kitchen, or clearing
              out an old property, we make appliance removal hassle-free.
            </p>
            <p className="text-gray-700 mb-4">
              Our professional <strong>appliance removal service</strong>{" "}
              handles all types of appliances including refrigerators, freezers,
              washers, dryers, stoves, ovens, ranges, dishwashers, microwaves,
              air conditioners, and water heaters. We remove appliances from
              homes, apartments, and commercial properties throughout Pasco
              County.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              EPA-Compliant Refrigerant Disposal
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Refrigerator and freezer removal</strong> requires
              specialized handling. We follow all EPA regulations for proper
              refrigerant recovery and disposal. Our certified technicians
              safely remove refrigerants before recycling or disposing of
              cooling appliances, protecting both the environment and ensuring
              legal compliance.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Eco-Friendly Appliance Recycling
            </h3>
            <p className="text-gray-700 mb-4">
              We&apos;re committed to responsible{" "}
              <strong>appliance disposal</strong>. Working appliances are
              donated to local charities including Goodwill, Salvation Army, and
              Habitat for Humanity ReStore, helping families in need.
              Non-working appliances are recycled—we recover metals, plastics,
              glass, and other materials, diverting tons of waste from landfills
              each year.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Same-Day Appliance Removal Available
            </h3>
            <p className="text-gray-700 mb-4">
              Need <strong>appliance removal</strong> quickly? We offer same-day
              and next-day service throughout Pasco County. Whether you&apos;re
              preparing for new appliance delivery, cleaning out an estate, or
              managing a renovation timeline, we work on your schedule.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Serving All of Pasco County
            </h3>
            <p className="text-gray-700 mb-4">
              We proudly provide <strong>appliance removal services</strong>{" "}
              throughout Pasco County, including New Port Richey, Hudson, Port
              Richey, Holiday, Trinity, Land O&apos;Lakes, Wesley Chapel, Dade
              City, Zephyrhills, and surrounding communities. Our local
              expertise means faster response times and personalized service.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Commercial Appliance Removal
            </h3>
            <p className="text-gray-700 mb-4">
              We also serve businesses with{" "}
              <strong>commercial appliance removal</strong>. From restaurants
              and hotels to office buildings and medical facilities, we remove
              commercial refrigerators, freezers, ice machines, commercial
              ovens, HVAC units, and all types of commercial equipment safely
              and efficiently.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Need Appliances Removed Today?
              </p>
              <p className="text-gray-700">
                Call us now at{" "}
                <Link
                  href="tel:7273176717"
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  (727) 317-6717
                </Link>{" "}
                or request a free quote online. Same-day appliance removal
                service available throughout Pasco County!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
