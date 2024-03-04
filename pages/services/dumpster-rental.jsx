import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import {
  TruckIcon,
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";
import Reviews from "../../components/Reviews";
import Junkcost from "../../components/Junkcost";
import Contacttwo from "../../components/Contacttwo";
import Imagegrid from "../../components/Imagegrid";
import Mission from "../../components/Mission";
import Junkheader from "../../components/Junkheader";
import Corefeatures from "../../components/Corefeatures";
import Multiblock from "../../components/Multiblock";
import Otherservices from "../../components/Otherservices";

import dumptrailer from "../../public/dump-trailer.png";
import dumptrailers from "../../public/dump-trailers.png";

import NewPricingtwo from "../../components/NewPricingtwo";
import Process from "../../components/Process";
import Testimonialsection from "../../components/Testimonialsection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const points = [
  {
    name: "Various Dumpster Sizes",
    description:
      "Choose from a range of dumpster sizes to fit your project needs. Our dumpsters are perfect for both residential and commercial use.",
    icon: TruckIcon,
  },
  {
    name: "On Time Delivery & Pick Up",
    description:
      "Experience timely delivery and pickup for your dumpster rental. We value your schedule, ensuring punctuality and reliability.",
    icon: ClockIcon,
  },
  {
    name: "Competitive Pricing",
    description:
      "Get the best value for your rental with our competitive pricing. Transparent rates with no hidden fees.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Flexible Rental Periods",
    description:
      "We offer customizable rental periods to match your project timeline. Rent a dumpster for as long as you need.",
    icon: CalendarDaysIcon,
  },
];

const faqs = [
  {
    question: "What sizes of dumpster are available?",
    answer:
      "We offer a variety of sizes, including 10, 15, and 20-yard dumpsters, to accommodate different project scales.",
    items: [],
  },
  {
    question: "How does the dumpster rental process work?",
    answer:
      "Choose your size, schedule delivery and pickup dates, and we'll handle the rest. It's that simple!",
    items: [],
  },
  {
    question: "Are there restrictions on what I can put in the dumpster?",
    answer:
      "Yes, there are certain restrictions. Hazardous materials are not permitted. Please contact us for a full list of prohibited items.",
    items: [],
  },
  {
    question: "Can I extend my dumpster rental period?",
    answer:
      "Absolutely! Just give us a call, and we'll accommodate your request based on availability.",
    items: [],
  },
  {
    question: "Is there a weight limit for the dumpster?",
    answer:
      "Weight limits vary based on the size of the dumpster. We'll provide you with all the details when you book.",
    items: [],
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured, ensuring a worry-free rental experience. Our license and insurance number is L20000153106.",
    items: [],
  },
];

const features = [
  {
    name: "Convenient Dumpster Rental",
    description:
      "Our dumpster rental service is designed for your convenience. Ideal for construction, renovation, or large-scale cleanups.",
    imageSrc: dumptrailers,
    imageAlt: "Dumpster ready for rental",
  },
  {
    name: "Affordable Dumpster Rentals",
    description:
      "Discover budget-friendly dumpster rental options for all your project needs. Whether you're clearing out, renovating, or managing construction waste, we have the perfect size at competitive rates.",
    imageSrc: dumptrailer,
    imageAlt: "dumpster disposal",
  },
];

const metatitle = "Reliable Dumpster Rental | Quick & Affordable";
const description =
  "Explore top-notch dumpster rental services for your project needs. Flexible rental options, various sizes, and competitive pricing.";

export default function DumpsterTrailerRental() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumptrailer}
        alttext="Efficient dumpster trailer rental service"
        location="Simplify Your Cleanup With"
        service="Affordable Dumpster Rentals"
        ptag="Discover the ease and efficiency of our dumpster rental services. Perfect for any project size, with flexible rental options to suit your needs."
        cta="Rent a Dumpster"
      />

      <Corefeatures
        header="Dumpster Rental Services"
        subheader="Flexible, Reliable, and Affordable"
        ptag="Choose from a variety of dumpster sizes for your project. With our reliable service, you can focus on the job at hand and let us handle the rest."
        points={points}
      />

      <Multiblock
        header="EXPERT DUMPSTER RENTALS"
        ptag="We provide high-quality, dependable dumpster rentals. Trust us for your junk removal needs."
        features={features}
      />

      {/* <Contacttwo /> */}
      <Process />
      <Imagegrid />
      {/* <Reviews /> */}
      <Testimonialsection />

      {/* <Otherservices
        header="Comprehensive Waste Management Solutions"
        subheader="Beyond Dumpster Trailer Rentals"
        ptag="From junk hauling to full-scale waste management, we've got you covered. Discover all our services and find the perfect fit for your project."
      /> */}

      {/* <Junkcost /> */}

      <div className="bg-white py-16" id="faq">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-wide text-black sm:text-4xl uppercase">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq, key) => (
                <div
                  key={key}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-black uppercase md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-900">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
