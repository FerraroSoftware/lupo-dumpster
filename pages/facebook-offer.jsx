"use client"; // Still good practice for Pages Router components with interactivity

import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  ShieldCheck,
  Quote,
  MapPin,
  ThumbsUp,
  CheckCircle,
  Star,
  Users,
  Send,
  Loader2,
  Home,
  Car,
  TreePine,
  Package,
  Book as Broom,
  Tag,
  Hammer,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

import dumpstertrailerone from "../public/dumpster-trailer-1.png";
import dumptrailer from "../public/dump-trailer.png";
import Multiblock from "../components/Multiblock";

import dumpsterrentalpros from "../public/dumpster-rental-pros.jpg";

import { useRouter } from "next/router";
import Image from "next/image";
import { ComparisonTableSection } from "@/components/new/comparison-table-section";

const features = [
  {
    name: "Efficient Dumpster Rental Service",
    description:
      "Our dumpster rental services in New Port Richey are designed for efficiency and reliability, ensuring your project stays on track.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Efficient dumpster rental in New Port Richey",
  },
  {
    name: "Easy Booking Process",
    description:
      "Our team is dedicated to providing professional and reliable dumpster rental services, ensuring customer satisfaction every time.",
    imageSrc: dumptrailer,
    imageAlt: "Professional dumpster rental team",
  },
];

export default function FacebookOfferPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("/api/senddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, address, notes }),
      });

      if (response.ok) {
        // setSubmissionStatus("success");
        // Reset form
        // setName("");
        // setPhone("");
        // setEmail("");
        // setAddress("");
        // setNotes("");
        router.push("/thank-you");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "An error occurred. Please try again."
        );
        setSubmissionStatus("error");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setSubmissionStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>$275 Flat Rate 10 Yard Dumpster | Lupo Dumpster Rentals</title>
        <meta
          name="description"
          content="Special Facebook Offer: Get a 10-yard dumpster for just $275 flat rate. 3 days to fill, licensed and insured. Book now!"
        />
      </Head>
      <div className="bg-zinc-50">
        {/* Hero Section with Form */}
        <section
          id="claim-offer-form"
          className="relative text-white py-12 sm:py-16 md:py-20 overflow-hidden"
        >
          <Image
            src={dumpsterrentalpros}
            alt="Construction site with dumpster rental equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/90 z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
              {/* Left Column: Offer Text */}
              <div className="text-center lg:text-left min-w-0 break-words">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight break-words">
                  Your 10 Yard Dumpster: <br />
                  <span className="text-red-500">Just $275 Flat Rate!</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-lg mx-auto lg:mx-0 break-words">
                  Licensed & Insured. Generous 3-Day Rental. Perfect for
                  Cleanouts, Renovations & Yard Waste in Pasco County.
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 break-words">
                    Here&apos;s What You Get:
                  </h2>
                  <p className="text-md text-zinc-300 mb-6 max-w-lg mx-auto lg:mx-0 break-words">
                    This unbeatable offer is packed with value, designed for
                    your convenience.
                  </p>
                  <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0 text-left">
                    {[
                      {
                        title: "$275 Flat Rate:",
                        desc: "Two tons included. Absolutely no hidden fees. Simple, transparent pricing.",
                      },
                      {
                        title: "10 Yard Dumpster:",
                        desc: "Spacious enough for most home projects and cleanouts.",
                      },
                      {
                        title: "3 Days to Fill:",
                        desc: "Take your time with a generous rental period.",
                      },
                      {
                        title: "Licensed & Insured:",
                        desc: "Work with a professional and reliable local company.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white">
                            {item.title}
                          </span>
                          <span className="text-zinc-300 ml-1 text-sm">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-black border-white hover:bg-zinc-100"
                    asChild
                  >
                    <a
                      href="tel:7273176717"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-6 w-6" />
                      <span>Call: (727) 317-6717</span>
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-zinc-400 max-w-lg mx-auto lg:mx-0">
                  Or fill out the form to claim your deal online!
                </p>
              </div>

              {/* Right Column: Form */}
              <div className="bg-zinc-900 p-2 md:p-8 rounded-xl shadow-2xl border border-zinc-700">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
                  Claim Your <span className="text-red-500">$275 Deal</span>{" "}
                  Now!
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label
                      htmlFor="name_hero"
                      className="text-zinc-300 font-medium text-sm"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name_hero"
                      type="text"
                      placeholder="John Doe"
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-red-500 focus:ring-red-500"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone_hero"
                      className="text-zinc-300 font-medium text-sm"
                    >
                      Phone Number <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="phone_hero"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-red-500 focus:ring-red-500"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email_hero"
                      className="text-zinc-300 font-medium text-sm"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email_hero"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-red-500 focus:ring-red-500"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="address_hero"
                      className="text-zinc-300 font-medium text-sm"
                    >
                      Drop-off Address (Pasco County){" "}
                      <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="address_hero"
                      type="text"
                      placeholder="123 Main St, New Port Richey, FL"
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-red-500 focus:ring-red-500"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="notes_hero"
                      className="text-zinc-300 font-medium text-sm"
                    >
                      Project Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes_hero"
                      rows={2}
                      placeholder="e.g., Garage cleanout, preferred drop-off spot..."
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-red-500 focus:ring-red-500"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  {submissionStatus === "error" && (
                    <p className="text-red-400 text-sm text-center">
                      {errorMessage ||
                        "Something went wrong. Please check your input and try again."}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3.5 shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                    {isLoading
                      ? "Submitting..."
                      : "Claim My $275 Dumpster Deal!"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
                What Our Customers Are Saying
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Over 500+ satisfied customers in Pasco County trust us with
                their dumpster rental needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  name: "Sarah Martinez",
                  location: "New Port Richey, FL",
                  project: "Kitchen Renovation",
                  text: "The $275 flat rate saved me hundreds compared to other companies. The dumpster arrived exactly when promised, and the 3-day rental gave me plenty of time to complete my kitchen demo. No hidden fees, just honest service!",
                  // avatar: "/professional-woman-smiling.png",
                  rating: 5,
                  verified: true,
                },
                {
                  name: "Mike Rodriguez",
                  location: "Trinity, FL",
                  project: "Garage Cleanout",
                  text: "I called around to 6 different companies and Lupo had the best price by far. The driver was professional, placed the dumpster exactly where I asked, and pickup was seamless. This deal is unbeatable!",
                  // avatar: "/middle-aged-man-with-beard-smiling.jpg",
                  rating: 5,
                  verified: true,
                },
                {
                  name: "Linda Thompson",
                  location: "Holiday, FL",
                  project: "Bathroom Remodel",
                  text: "Being licensed and insured was important to me, and Lupo delivered on professionalism. The 10-yard size was perfect for my small bathroom renovation. I'll definitely use them again for future projects!",
                  // avatar: "/smiling-older-woman.png",
                  rating: 5,
                  verified: true,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-zinc-50 p-8 rounded-2xl shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow duration-300 relative flex flex-col h-full"
                >
                  {testimonial.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Verified
                      </div>
                    </div>
                  )}

                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="relative mb-6 flex-grow">
                    <Quote className="h-8 w-8 text-red-400 opacity-20 absolute -top-2 -left-2" />
                    <p className="text-zinc-700 text-lg leading-relaxed pl-6">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-200 mt-auto">
                    <div>
                      <p className="font-bold text-zinc-900 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-zinc-600 mb-1">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-wrap justify-center items-center gap-8 text-zinc-600">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  <span className="font-semibold">500+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        {/* What Can You Use It For? Section */}
        <section className="py-16 bg-gradient-to-br from-zinc-50 to-zinc-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
                Perfect For a Variety of Projects
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Our 10-yard dumpster is versatile and ideal for residential and
                commercial projects
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Home,
                    title: "Kitchen Remodels",
                    desc: "Perfect for cabinet and appliance removal",
                  },
                  {
                    icon: Car,
                    title: "Garage Cleanouts",
                    desc: "Clear out years of accumulated items",
                  },
                  {
                    icon: Home,
                    title: "Attic Clear-outs",
                    desc: "Remove old furniture and storage items",
                  },
                  {
                    icon: TreePine,
                    title: "Landscaping Debris",
                    desc: "Branches, leaves, and yard waste",
                  },
                  {
                    icon: Package,
                    title: "Moving Cleanouts",
                    desc: "Dispose of unwanted items before moving",
                  },
                  {
                    icon: Broom,
                    title: "Spring Cleaning",
                    desc: "Annual decluttering and organization",
                  },
                  {
                    icon: Tag,
                    title: "Estate Sales Prep",
                    desc: "Clear out before listing your home",
                  },
                  {
                    icon: Hammer,
                    title: "Small Demolition",
                    desc: "Deck, fence, or shed removal projects",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-zinc-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <item.icon className="h-12 w-12 text-red-600" />
                    </div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-200 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                    Not Sure If Your Project Fits?
                  </h3>
                  <p className="text-zinc-600 mb-6">
                    Our 10-yard dumpster holds approximately 3-4 pickup truck
                    loads of debris. Call us and we&apos;ll help you determine
                    if it&apos;s the right size for your project!
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-red-600 border-red-600 hover:bg-red-50"
                    asChild
                  >
                    <a
                      href="tel:7273176717"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now: (727) 317-6717</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Multiblock
          header="Rated #1 in Pasco County"
          ptag="We pride ourselves on providing timely and efficient dumpster services, ensuring your project runs smoothly."
          features={features}
        ></Multiblock>

        {/* Why Lupo Section */}
        <section className="py-16 bg-zinc-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                Why Choose Lupo Dumpster Rentals?
              </h2>
              <p className="mt-4 text-lg text-zinc-600 max-w-xl mx-auto">
                Experience the Lupo difference for your next project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Locally Owned & Operated",
                  desc: "Proudly serving Pasco County with reliable, friendly service.",
                },
                {
                  icon: ThumbsUp,
                  title: "Customer Focused",
                  desc: "We prioritize your satisfaction and project needs, every step of the way.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliable & Professional",
                  desc: "Count on us for on-time delivery, pickup, and clear communication.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-zinc-200"
                >
                  <item.icon className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-zinc-800">
                    {item.title}
                  </h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-zinc-800 font-semibold">
                This <span className="text-red-600">$275 Flat Rate</span> offer
                is for a limited time. Don&apos;t miss out!
              </p>
              <Button
                size="lg"
                className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-6 shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link href="#claim-offer-form">Book Your Dumpster Today!</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Get answers to common questions about our dumpster rental
                service
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "What can I put in the 10-yard dumpster?",
                  answer:
                    "You can dispose of household junk, furniture, appliances (without freon), construction debris, yard waste, and general cleanout materials. We cannot accept hazardous materials, chemicals, paint, tires, or electronics.",
                },
                {
                  question: "How long do I have to fill the dumpster?",
                  answer:
                    "Our $275 flat rate includes a generous 3-day rental period. This gives you plenty of time to complete your project without rushing.",
                },
                {
                  question: "Are there really no hidden fees?",
                  answer:
                    "Our $275 flat rate includes delivery, pickup, disposal fees, and 3 days of rental. The only additional charges would be for extra rental days or prohibited items that require special disposal.",
                },
                {
                  question: "Do you serve all of Pasco County?",
                  answer:
                    "Yes! We proudly serve all of Pasco County including New Port Richey, Trinity, Holiday, Hudson, Port Richey, Tarpon Springs, and surrounding areas. Delivery is included in our flat rate.",
                },
                {
                  question: "How much debris can a 10-yard dumpster hold?",
                  answer:
                    "A 10-yard dumpster can hold approximately 3-4 pickup truck loads of debris. It's perfect for small to medium projects like bathroom remodels, garage cleanouts, or small deck removals.",
                },
                {
                  question: "Do I need to be home for delivery and pickup?",
                  answer:
                    "No, you don't need to be present as long as we have clear access to the drop-off location. We'll place the dumpster exactly where you specify and pick it up on the scheduled date.",
                },
              ].map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-zinc-600 mb-6">
                Still have questions? We&apos;re here to help!
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border-red-600 hover:bg-red-50"
                asChild
              >
                <a
                  href="tel:7273176717"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us: (727) 317-6717</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// FAQ item component with smooth animations
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-zinc-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-zinc-900 pr-4">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-zinc-600 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-zinc-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
