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
    name: "Wide Selection of Dumpster Sizes",
    description:
      "Providing a variety of dumpster sizes to suit all types of projects in Pinellas County, from small home renovations to large construction jobs.",
    icon: TruckIcon,
  },
  {
    name: "Efficient Delivery and Pickup",
    description:
      "Ensuring timely delivery and pickup to maintain the schedule and efficiency of your project in Pinellas County.",
    icon: ClockIcon,
  },
  {
    name: "Competitive Rental Rates",
    description:
      "Offering affordable and transparent pricing for dumpster rentals, with no hidden fees, tailored to your project's budget.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Dedicated Customer Support",
    description:
      "Committed to exceptional customer service, providing personalized support and expert advice for your dumpster rental needs.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question: "What types of projects can benefit from a dumpster rental?",
    answer:
      "Dumpster rentals are ideal for various projects, including home renovations, construction sites, property cleanouts, landscaping jobs, and more in Pinellas County.",
    items: [],
  },
  {
    question: "How do I choose the right size dumpster for my needs?",
    answer:
      "Our team can assist you in selecting the appropriate dumpster size based on the nature and scale of your project. Contact us to discuss your specific requirements.",
    items: [],
  },
  {
    question: "How much does it cost to rent a dumpster in Pinellas County?",
    answer:
      "Costs vary based on the size of the dumpster and the rental duration. We offer straightforward, competitive pricing to fit your project's needs.",
    items: [],
  },
  {
    question: "Can I extend the rental period if my project takes longer?",
    answer:
      "Yes, we provide flexible rental extensions. Please inform us in advance to adjust the rental period according to your project timeline.",
    items: [],
  },
  {
    question: "What items are prohibited in the rented dumpster?",
    answer:
      "Certain materials, such as hazardous waste, chemicals, and flammable items, are not allowed in dumpsters for safety and environmental reasons.",
    items: [],
  },
  {
    question: "Why choose our dumpster rental services in Pinellas County?",
    answer:
      "We are known for our reliability, competitive rates, range of options, and commitment to customer satisfaction, making us a preferred choice in Pinellas County.",
    items: [],
  },
];

const features = [
  {
    name: "Efficient Dumpster Rental in Pinellas County",
    description:
      "Our dumpster rental services are streamlined to ensure your waste management is effective, supporting your project's success.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Efficient dumpster rental in Pinellas County",
  },
  {
    name: "Focused on Customer Satisfaction",
    description:
      "We prioritize your satisfaction, offering flexible rental options and dedicated support throughout your rental experience.",
    imageSrc: dumptrailer,
    imageAlt: "Customer satisfaction in dumpster rental",
  },
];

const metatitle =
  "Pinellas County Dumpster Rental | Reliable & Affordable | Call Now";
const description =
  "Leading dumpster rental services in Pinellas County. Flexible options, timely service, and competitive pricing for your project needs.";

export default function DumpsterRentalPinellasCounty() {
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
        alttext="Top dumpster rental service in Pinellas County"
        location="Pinellas County's #1"
        service="Dumpster Rental company"
        ptag="Get the highest quality dumpster rental experience in Pinellas County with our dependable, cost-effective solutions."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Your Dumpster Rental Solution in Pinellas County"
        subheader="Customized for Your Needs"
        ptag="Choose from our wide range of dumpsters for any project size in Pinellas County."
        points={points}
      />

      <Multiblock
        header="TOP-RATED IN DUMPSTER RENTALs"
        ptag="Trust us for your dumpster rental needs in Pinellas County, ensuring a smooth and hassle-free waste management process."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Explore Our Dumpster Projects"
        ptag="Dumpster rentals for different types of projects across Pinellas County."
      />
      <Reviews />

      <Otherservices
        header="Comprehensive Junk Services"
        subheader="Beyond Dumpster Rentals"
        ptag="Discover our full suite of waste management solutions, including junk removal, recycling, and more, in Pinellas County."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
