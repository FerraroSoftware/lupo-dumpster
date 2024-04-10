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
import Testimonialsection from "../../components/Testimonialsection";
import Contactwhite from "../../components/Contactwhite";

const points = [
  {
    name: "Wide Range of Dumpster Sizes",
    description:
      "Offering an array of dumpster sizes to accommodate various project needs in Hudson, FL, from small home cleanouts to large construction sites.",
    icon: TruckIcon,
  },
  {
    name: "Timely Delivery & Pickup",
    description:
      "Committed to providing punctual delivery and pickup to keep your project on schedule.",
    icon: ClockIcon,
  },
  {
    name: "Competitive and Clear Pricing",
    description:
      "Ensuring transparent and affordable pricing for dumpster rentals, with no hidden fees.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Local Expertise and Support",
    description:
      "Our local presence in Hudson, FL, means personalized service and expert guidance for your dumpster rental needs.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question: "What is a dumpster trailer?",
    answer:
      "A dumpster trailer, delivered by truck, is ideal for construction, demolition projects, or large-scale cleanouts. We offer various sizes to suit your needs in Hudson, FL.",
    items: [],
  },
  {
    question: "Why would I rent a dumpster?",
    answer:
      "Renting a dumpster is useful for disposing of large amounts of waste from construction, renovation, or large clean-outs. Here are scenarios where a dumpster rental is beneficial:",
    items: [
      "Home renovations or remodels",
      "Construction debris removal",
      "Property cleanouts",
      "Yard waste disposal",
      "Large scale garbage removal",
      // ... Other examples as in the provided structure
    ],
  },
  {
    question: "What are my options when renting a dumpster in Hudson, FL?",
    answer:
      "We offer dumpsters in various sizes, including 10, 15, and 20 cubic yards, with flexible rental periods starting from three days.",
    items: [],
  },
  {
    question: "How much does it cost to rent a dumpster in Hudson, FL?",
    answer:
      "Costs vary based on size, rental duration, and specific requirements. Our prices start competitively, with detailed quotes provided based on your project.",
    items: [],
  },
  {
    question: "Why rent from us in Hudson, FL?",
    answer:
      "We are a reputable dumpster rental service known for our range of options, professional guidance, excellent customer service, and competitive pricing.",
    items: [],
  },
  {
    question: "What items can’t go in a dumpster?",
    answer:
      "We generally prohibit hazardous materials, chemicals, paint, and asbestos for safety and environmental reasons.",
    items: [],
  },
  {
    question: "How can a dumpster assist during a move?",
    answer:
      "A dumpster is handy for disposing of large, unwanted items during a move, such as old furniture, appliances, and general clutter, making the process smoother and more efficient.",
    items: [],
  },
  {
    question: "Are there alternatives to dumpsters for waste disposal?",
    answer:
      "Yes, we also offer junk removal services, which might be more suitable depending on your waste disposal needs.",
    items: [],
  },
];

const features = [
  {
    name: "Customized Dumpster Rental Services",
    description:
      "Tailoring our dumpster rental solutions to meet the specific requirements of your projects in Hudson, FL.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Customized dumpster rental solutions in Hudson, FL",
  },
  {
    name: "Commitment to Customer Satisfaction",
    description:
      "Our top priority is your satisfaction, ensuring a hassle-free rental experience from start to finish.",
    imageSrc: dumptrailer,
    imageAlt: "Focused on customer satisfaction in dumpster rental",
  },
];

const metatitle = "Hudson FL Dumpster Rental | Affordable & Efficient";
const description =
  "Leading dumpster rental services in Hudson, FL. We provide various sizes, flexible scheduling, and competitive pricing for all your project needs.";

export default function DumpsterRentalHudsonFL() {
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
        alttext="Efficient dumpster rental in Hudson, FL"
        location="Hudson's Top Choice"
        service="Dumpster Rental Service"
        ptag="Get the best dumpster rental experience in Hudson, FL with our reliable and affordable services."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Dependable Dumpster Rental in Hudson"
        subheader="Perfect for Every Project"
        ptag="From small renovations to major constructions, our dumpsters fit all sizes of projects in Hudson, FL."
        points={points}
      />

      <Multiblock
        header="EXPERTS IN Junk removal"
        ptag="We are dedicated to providing efficient and reliable dumpster rental services, simplifying your waste management in Hudson, FL."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Our Dumpster Projects in Hudson, FL"
        ptag="Explore our range of dumpsters, suitable for a variety of projects in Hudson, FL."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="Comprehensive Waste Solutions"
        subheader="More Than Just Dumpster Rentals"
        ptag="We offer a complete suite of waste management services, ensuring all your needs are covered."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Rent a Dumpster in Hudson Today"></Contactwhite>
    </>
  );
}
