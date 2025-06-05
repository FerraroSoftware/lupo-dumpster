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
} from "lucide-react";
import Link from "next/link";

import dumpstertrailerone from "../public/dumpster-trailer-1.png";
import dumptrailer from "../public/dump-trailer.png";
import Multiblock from "../components/Multiblock";

import { useRouter } from "next/router";

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
          className="relative bg-black text-white py-12 sm:py-16 md:py-20 "
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
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
                        desc: "Absolutely no hidden fees. Simple, transparent pricing.",
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
                    className="text-black"
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
        <section className="py-16 bg-zinc-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-red-600 mb-4 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                Hear From Our Happy Customers!
              </h2>
              <p className="mt-4 text-lg text-zinc-700 max-w-xl mx-auto">
                We&apos;re proud of our service and our customers love this
                deal!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah P.",
                  location: "New Port Richey",
                  text: "The $275 flat rate was exactly what I needed for my garage cleanout. No surprises, great service!",
                },
                {
                  name: "Mike R.",
                  location: "Trinity",
                  text: "Lupo made it so easy. Dumpster arrived on time, and 3 days was perfect. Highly recommend this offer.",
                },
                {
                  name: "Linda K.",
                  location: "Holiday",
                  text: "Being licensed and insured gave me peace of mind. The 10-yard size was just right for my small reno. Fantastic deal!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-xl border border-zinc-200 flex flex-col transform "
                >
                  <Quote className="h-10 w-10 text-red-400 mb-4 opacity-50" />
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-zinc-700 text-lg leading-relaxed italic mb-6 flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="mt-auto border-t border-zinc-200 pt-4">
                    <p className="font-bold text-zinc-800 text-md">
                      - {testimonial.name}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Can You Use It For? Section */}
        <section className="py-16 bg-zinc-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                Perfect For a Variety of Projects:
              </h2>
              <p className="mt-4 text-lg text-zinc-600 max-w-xl mx-auto">
                Our 10-yard dumpster is versatile and ideal for many common
                tasks.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg text-zinc-700">
                {[
                  "Small Kitchen or Bath Remodels",
                  "Garage or Basement Cleanouts",
                  "Attic Clear-outs",
                  "Landscaping Debris",
                  "Moving Cleanouts ",
                  "Spring Cleaning Projects",
                  "Decluttering Before a Sale",
                  "Small Deck or Fence Removal",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start p-3 bg-white rounded-md shadow-sm border border-zinc-200"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Multiblock
          header="Reliable Dumpster Rentals"
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
      </div>
    </>
  );
}
