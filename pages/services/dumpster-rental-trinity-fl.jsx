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

const points = [
  {
    name: "Versatile Dumpster Sizes",
    description:
      "A wide range of dumpster sizes suitable for various projects, big or small, in the Trinity area.",
    icon: TruckIcon,
  },
  {
    name: "Prompt Delivery and Pickup",
    description:
      "Efficient delivery and pickup services to ensure your project remains on schedule.",
    icon: ClockIcon,
  },
  {
    name: "Transparent Pricing",
    description:
      "Clear and upfront pricing with no hidden costs, providing value and reliability every time.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Local Community Focus",
    description:
      "Dedicated to serving the Trinity community with a personal touch and understanding local needs.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question:
      "How do I choose the right dumpster size for my project in Trinity?",
    answer:
      "Our experienced team will help you select the ideal dumpster size based on your project's specifics. Contact us to discuss your needs.",
    items: [],
  },
  {
    question: "What are the rates for dumpster rental in Trinity?",
    answer:
      "Rates vary depending on dumpster size and rental duration. We offer free, no-obligation quotes for your project.",
    items: [],
  },
  {
    question: "What can I dispose of in the rented dumpster?",
    answer:
      "Our dumpsters can accommodate a variety of materials, except for hazardous waste. We'll guide you on the acceptable items.",
    items: [],
  },
  {
    question:
      "Can I extend my rental if my project takes longer than expected?",
    answer:
      "Absolutely. We offer flexible rental periods. Contact us to adjust your rental term as needed.",
    items: [],
  },
  {
    question: "Do you provide same-day dumpster rental services in Trinity?",
    answer:
      "We offer same-day services based on availability. Advance booking is recommended for the best service.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable Dumpster Rental Services in Trinity, FL",
    description:
      "Experience top-notch dumpster rental services in Trinity, designed to meet your project's waste management needs efficiently.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Reliable dumpster rental services in Trinity",
  },
  {
    name: "Committed to Customer Satisfaction",
    description:
      "Our dedication to customer service ensures a seamless and satisfactory dumpster rental experience in Trinity. Give us a call today for a free quote.",
    imageSrc: dumptrailer,
    imageAlt: "Focused on customer satisfaction in dumpster rental",
  },
];

const metatitle =
  "Trinity Dumpster Rental | Efficient & Cost-Effective | Call Now";
const description =
  "Expert dumpster rental services in Trinity. Offering flexible scheduling, various sizes, and competitive pricing for your waste management needs.";

export default function DumpsterRentalTrinity() {
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
        alttext="Efficient dumpster rental in Trinity"
        location="Trinity's Leading"
        service="Dumpster Rental company"
        ptag="Your go-to solution for all your dumpster rental needs in Trinity, ensuring your project stays clean and organized."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Top Dumpster Rental Service in Trinity"
        subheader="Tailored to Your Project Needs"
        ptag="From home renovations to commercial construction, we have the right dumpster size to efficiently manage your waste."
        points={points}
      />

      <Multiblock
        header="YOUR TRUSTED PARTNER"
        ptag="We are committed to providing reliable and affordable dumpster rental services to the Trinity community."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Explore Our Dumpster Projects"
        ptag="We offer a variety of dumpster sizes, perfect for different types of projects in Trinity."
      />
      <Reviews />

      <Otherservices
        header="Trinity's Junk Experts"
        subheader="More than Just Dumpster Rentals"
        ptag="Check out our comprehensive range of services, including junk removal and specialized disposal, alongside dumpster rentals."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
