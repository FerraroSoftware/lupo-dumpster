import React from "react";
import Head from "next/head";
import Junkheader from "../../components/Junkheader";
import Corefeatures from "../../components/Corefeatures";
import Multiblock from "../../components/Multiblock";
import Contacttwo from "../../components/Contacttwo";
import Imagegridclone from "../../components/Imagegridclone";
import Reviews from "../../components/Reviews";
import Otherservices from "../../components/Otherservices";
import Contact from "../../components/Contact";
import Faqs from "../../components/Faqs";
import {
  TruckIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailerone from "../../public/dumpster-trailer-1.png";
import dumptrailer from "../../public/dump-trailer.png";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

const points = [
  {
    name: "Multiple Dumpster Sizes",
    description:
      "Choose from a variety of dumpster sizes for residential and commercial projects in Westchase, FL.",
    icon: TruckIcon,
  },
  {
    name: "Fast & Reliable Service",
    description:
      "Timely dumpster delivery and pickup to keep your project running smoothly.",
    icon: ClockIcon,
  },
  {
    name: "Upfront & Transparent Pricing",
    description:
      "No hidden fees—just clear, competitive pricing for stress-free dumpster rentals.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Local Experts in Waste Management",
    description:
      "Proudly serving the Westchase community with trusted dumpster rental services.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question:
      "How do I choose the right dumpster size for my project in Westchase?",
    answer:
      "Our team can help you select the best dumpster size based on your waste disposal needs.",
    items: [],
  },
  {
    question: "What are the rental rates for dumpsters in Westchase?",
    answer:
      "Pricing depends on dumpster size and rental duration. Contact us for a free, no-obligation quote.",
    items: [],
  },
  {
    question: "What types of materials can I dispose of in a dumpster?",
    answer:
      "Most non-hazardous waste materials are accepted. We’ll provide you with a list of restricted items.",
    items: [],
  },
  {
    question: "Can I extend my rental period if needed?",
    answer:
      "Yes! We offer flexible rental extensions. Just give us a call to adjust your rental period.",
    items: [],
  },
  {
    question: "Do you offer same-day dumpster rental in Westchase?",
    answer:
      "Same-day services are available based on availability. We recommend booking in advance to secure your dumpster.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable Dumpster Rental Services in Westchase, FL",
    description:
      "We provide hassle-free dumpster rental services for homeowners, businesses, and contractors in Westchase.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Reliable dumpster rental services in Westchase",
  },
  {
    name: "Customer-Focused Service",
    description:
      "Our commitment to excellent customer service ensures a smooth dumpster rental experience in Westchase. Call today for a free quote!",
    imageSrc: dumptrailer,
    imageAlt: "Exceptional customer service for dumpster rentals",
  },
];

const metatitle = "Westchase Dumpster Rental | Fast & Affordable | Book Now";
const description =
  "Looking for reliable dumpster rental services in Westchase, FL? We offer flexible rental options, competitive pricing, and fast service. Get a free quote today!";

export default function DumpsterRentalWestchase() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumpsterrental}
        alttext="Reliable dumpster rental in Westchase"
        location="Westchase's Trusted"
        service="Dumpster Rental Provider"
        ptag="Providing affordable and efficient dumpster rental services in Westchase, FL. Keep your project clean and organized with us."
        cta="Get a Dumpster Today"
      />

      <Corefeatures
        header="Top Dumpster Rental in Westchase"
        subheader="Dumpster Solutions for Every Project"
        ptag="From home renovations to construction sites, our dumpster rentals are the perfect solution for all your waste management needs."
        points={points}
      />

      <Multiblock
        header="YOUR RELIABLE DUMPSTER PARTNER"
        ptag="Providing high-quality, affordable dumpster rental services to Westchase and surrounding areas."
        features={features}
      />

      <Imagegridclone
        header="Dumpster Rental in Action"
        ptag="Check out our range of dumpster sizes, perfect for residential and commercial projects in Westchase."
      />

      <Testimonialsection />

      <Otherservices
        header="Westchase's Waste Management Experts"
        subheader="More Than Just Dumpster Rentals"
        ptag="We also provide junk removal and other waste disposal solutions to meet all your needs."
      />

      <Faqs faqs={faqs} />

      <Contactwhite header="Book Your Dumpster in Westchase Today" />
    </>
  );
}
