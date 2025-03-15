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
      "Choose from a variety of dumpster sizes to handle residential and commercial projects in Clearwater, FL.",
    icon: TruckIcon,
  },
  {
    name: "Fast & Reliable Service",
    description:
      "We ensure timely delivery and pickup of dumpsters, keeping your project on track and hassle-free.",
    icon: ClockIcon,
  },
  {
    name: "Upfront & Transparent Pricing",
    description:
      "No hidden fees—just clear, competitive pricing to help you manage your budget with ease.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Local Experts in Waste Management",
    description:
      "Proudly serving the Clearwater community with trusted, professional dumpster rental services.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question:
      "How do I choose the right dumpster size for my project in Clearwater?",
    answer:
      "Our team can guide you in selecting the perfect dumpster size based on the type and volume of waste you need to dispose of.",
    items: [],
  },
  {
    question: "What are the rental rates for dumpsters in Clearwater?",
    answer:
      "Pricing depends on the dumpster size and rental duration. Contact us for a free, no-obligation quote.",
    items: [],
  },
  {
    question: "What types of materials can I dispose of in a dumpster?",
    answer:
      "Most non-hazardous waste materials are accepted. We’ll provide you with guidelines on restricted items.",
    items: [],
  },
  {
    question: "Can I extend my rental period if needed?",
    answer:
      "Yes! We offer flexible rental extensions. Just give us a call to adjust your rental as needed.",
    items: [],
  },
  {
    question: "Do you offer same-day dumpster rental in Clearwater?",
    answer:
      "Yes, same-day services are available based on availability. We recommend booking in advance to secure your dumpster.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable Dumpster Rental Services in Clearwater, FL",
    description:
      "Get hassle-free dumpster rental services tailored to your project’s waste disposal needs in Clearwater.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Reliable dumpster rental services in Clearwater",
  },
  {
    name: "Customer-Focused Service",
    description:
      "We prioritize customer satisfaction, offering smooth and dependable dumpster rental services in Clearwater. Contact us today for a quote!",
    imageSrc: dumptrailer,
    imageAlt: "Top-notch customer service for dumpster rentals",
  },
];

const metatitle = "Clearwater Dumpster Rental | Fast & Affordable | Call Today";
const description =
  "Looking for reliable dumpster rental services in Clearwater, FL? We offer flexible rental options, competitive pricing, and fast service. Get a free quote today!";

export default function DumpsterRentalClearwater() {
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
        alttext="Reliable dumpster rental in Clearwater"
        location="Clearwater's Trusted"
        service="Dumpster Rental Provider"
        ptag="Offering affordable and efficient dumpster rental services in Clearwater, FL. Keep your project clean and organized with us."
        cta="Get a Dumpster Today"
      />

      <Corefeatures
        header="Top Dumpster Rental in Clearwater"
        subheader="Dumpster Solutions for Every Project"
        ptag="From home renovations to construction sites, our dumpster rentals are the perfect solution for all your waste management needs."
        points={points}
      />

      <Multiblock
        header="YOUR RELIABLE DUMPSTER PARTNER"
        ptag="Providing high-quality, affordable dumpster rental services to Clearwater and surrounding areas."
        features={features}
      />

      <Imagegridclone
        header="Dumpster Rental in Action"
        ptag="Check out our range of dumpster sizes, perfect for residential and commercial projects in Clearwater."
      />

      <Testimonialsection />

      <Otherservices
        header="Clearwater's Junk Removal Experts"
        subheader="More Than Just Dumpster Rentals"
        ptag="We also provide junk removal and other waste disposal solutions to meet all your needs."
      />

      <Faqs faqs={faqs} />

      <Contactwhite header="Book Your Dumpster in Clearwater Today" />
    </>
  );
}
