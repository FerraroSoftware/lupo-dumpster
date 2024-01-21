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
    name: "Varied Dumpster Sizes for Every Need",
    description:
      "Offering a range of dumpster sizes to cater to both small-scale cleanups and large construction projects in Odessa.",
    icon: TruckIcon,
  },
  {
    name: "Prompt and Reliable Service",
    description:
      "Commitment to on-time delivery and pickup, ensuring your project progresses smoothly without delays.",
    icon: ClockIcon,
  },
  {
    name: "Transparent and Fair Pricing",
    description:
      "Providing clear, upfront pricing for all dumpster rentals, with no hidden fees, to fit your budget and project needs in Odessa.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Exceptional Customer Support",
    description:
      "Our dedicated team in Odessa focuses on excellent customer service, offering personalized support and advice.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question: "What is a dumpster trailer?",
    answer:
      "A dumpster trailer is a large container delivered to your site for waste collection. It's ideal for various projects, including construction, remodels, or extensive cleanouts.",
    items: [],
  },
  {
    question: "Why rent a dumpster in Odessa?",
    answer:
      "Renting a dumpster is ideal for handling significant amounts of waste efficiently, whether for construction debris, home cleanouts, or other large projects. It simplifies waste management and disposal.",
    items: [],
  },
  {
    question: "What options are available for dumpster rental in Odessa?",
    answer:
      "We offer dumpsters in multiple sizes, including 10, 15, and 20 cubic yards, with flexible rental periods to fit your project's timeline.",
    items: [],
  },
  {
    question: "How much does it cost to rent a dumpster in Odessa?",
    answer:
      "Rental costs vary based on the dumpster size and rental duration. Contact us for a detailed quote tailored to your specific needs.",
    items: [],
  },
  {
    question: "Why choose our dumpster rental service in Odessa?",
    answer:
      "Our commitment to reliable service, competitive pricing, and customer satisfaction makes us a preferred choice for dumpster rentals in Odessa.",
    items: [],
  },
  {
    question: "What can't go in a rented dumpster?",
    answer:
      "Generally, hazardous materials, flammable liquids, and certain types of electronics are prohibited in dumpsters for safety reasons.",
    items: [],
  },
  {
    question: "How can a dumpster rental facilitate a move?",
    answer:
      "During a move, a dumpster rental can help you efficiently dispose of unwanted items, decluttering your space and streamlining the moving process.",
    items: [],
  },
  {
    question: "Are there alternatives to renting a dumpster?",
    answer:
      "For smaller projects or different types of waste, consider our junk removal services as an alternative to dumpster rentals.",
    items: [],
  },
];

const features = [
  {
    name: "Tailored Dumpster Rental Solutions in Odessa",
    description:
      "Our dumpster rental services in Odessa are customized to your project requirements, ensuring effective waste management solutions.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Customized dumpster rental solutions in Odessa",
  },
  {
    name: "Quality Service Commitment",
    description:
      "Focused on delivering high-quality and reliable dumpster rental services to meet and exceed your expectations in Odessa.",
    imageSrc: dumptrailer,
    imageAlt: "Dedicated to quality service in dumpster rental",
  },
];

const metatitle = "Odessa Dumpster Rental | Efficient & Affordable Services";
const description =
  "Leading dumpster rental services in Odessa. Flexible scheduling, various sizes, and competitive pricing for all your waste management needs.";

export default function DumpsterRentalOdessa() {
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
        alttext="Efficient dumpster rental in Odessa"
        location="Odessa's First Choice for"
        service="Dumpster Rental services"
        ptag="Discover top-tier dumpster rental services in Odessa, tailored to ensure the success of your project."
        cta="Reserve Now"
      ></Junkheader>

      <Corefeatures
        header="Top Dumpster Rental Service in Odessa"
        subheader="Versatile and Dependable"
        ptag="Find the ideal dumpster for any project size, supported by our reliable and timely service."
        points={points}
      />

      <Multiblock
        header="LEADING IN Junk removal"
        ptag="Rely on us for all your dumpster rental needs in Odessa, ensuring efficient and hassle-free waste management."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Explore Our Dumpster Range"
        ptag="Check out our selection of dumpsters suitable for various types of projects in Odessa."
      />
      <Reviews />

      <Otherservices
        header="Comprehensive Waste Solutions"
        subheader="More Than Just Dumpster Rentals"
        ptag="We offer a wide array of waste management services, from dumpster rentals to junk removal and recycling."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
