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

import appliancecleanup from "../../public/applianceremoval/appliance-cleanup.png";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailerone from "../../public/dumpster-trailer-1.png";
import dumptrailer from "../../public/dump-trailer.png";

const points = [
  {
    name: "Wide Selection of Dumpster Sizes",
    description:
      "Offering a range of dumpster sizes including 10, 15, and 20 cubic yard options, perfect for both residential and commercial projects in Lutz, FL.",
    icon: TruckIcon,
  },
  {
    name: "On Time Delivery & Pick Up",
    description:
      "Our commitment to punctuality ensures your dumpster rental arrives and is picked up on schedule, facilitating smooth project management.",
    icon: ClockIcon,
  },
  {
    name: "Local, Family-Owned Business",
    description:
      "Proudly serving Lutz, FL as a family-owned business, we emphasize personalized service and strong community ties.",
    icon: UsersIcon,
  },
  {
    name: "Transparent Pricing",
    description:
      "Enjoy clear, upfront pricing with no hidden fees. Our competitive rates are designed to provide value while accommodating your budget.",
    icon: CurrencyDollarIcon,
  },
];

const faqs = [
  {
    question: "What dumpster sizes are available in Lutz, FL?",
    answer:
      "We offer various dumpster sizes to suit different needs, from smaller 10-yard dumpsters for minor cleanouts to larger 20-yard options for extensive projects.",
    items: [],
  },
  {
    question: "How do I rent a dumpster in Lutz?",
    answer:
      "Renting a dumpster is easy! Contact us to discuss your project, choose a dumpster size, and schedule a delivery date that works for you.",
    items: [],
  },
  {
    question: "What are your rates for dumpster rental in Lutz, FL?",
    answer:
      "Our rates vary based on the dumpster size and rental duration. We provide transparent pricing upon inquiry, tailored to your specific needs.",
    items: [],
  },
  {
    question: "Can I extend the rental period if needed?",
    answer:
      "Yes, we offer flexible rental periods. If you need to extend your rental, just let us know in advance to accommodate your request.",
    items: [],
  },
  {
    question: "Do you offer same-day dumpster delivery?",
    answer:
      "Subject to availability, we can provide same-day delivery. For the fastest service, we recommend scheduling in advance.",
    items: [],
  },
  {
    question: "Are there restrictions on what I can put in the dumpster?",
    answer:
      "Yes, certain items like hazardous materials, liquids, and flammable items are prohibited. We'll provide a complete list upon rental.",
    items: [],
  },
];

const features = [
  {
    name: "Dependable Dumpster Services",
    description:
      "Our reliable dumpster services ensure your waste management needs in Lutz, FL are handled effectively, supporting both small and large-scale projects.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Dependable dumpster service in Lutz, FL",
  },
  {
    name: "Expert and Friendly Team",
    description:
      "Our experienced team is here to assist you every step of the way, offering advice and support for a hassle-free rental experience.",
    imageSrc: dumptrailer,
    imageAlt: "Expert dumpster rental team in Lutz, FL",
  },
];

const metatitle =
  "Lutz FL Dumpster Rental | Convenient & Cost-Effective | Book Now";
const description =
  "Discover hassle-free dumpster rental in Lutz, FL with our range of sizes and flexible rental terms. Ideal for both residential and commercial projects.";

export default function DumpsterRentalLutzFL() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumpsterrental}
        alttext="Dumpster rental in Lutz, FL"
        location="Lutz Go-To"
        service="Dumpster Rental"
        ptag="Efficient and affordable dumpster rental solutions for your projects in Lutz, FL. Experience hassle-free service tailored to your needs."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Dumpster Rental in Lutz, FL"
        subheader="Flexible and Reliable"
        ptag="From home renovations to commercial construction projects, our dumpsters are suited for any job. Choose the size that fits your project."
        points={points}
      />

      <Multiblock
        header="RELIABLE DUMPSTER SOLUTIONS"
        ptag="Count on us for dependable dumpster rentals in Lutz, ensuring your project stays clean and organized."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Explore Our Range of Dumpsters"
        ptag="View our variety of dumpster sizes, perfect for any project in Lutz, from residential cleanups to larger commercial sites."
      />
      <Reviews />

      <Otherservices
        header="Complete Waste Management Services"
        subheader="More Than Just Dumpsters"
        ptag="Looking beyond dumpster rental? We offer comprehensive waste solutions, including junk removal and recycling services."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
