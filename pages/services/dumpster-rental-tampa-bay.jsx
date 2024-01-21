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
    name: "Diverse Range of Dumpster Sizes",
    description:
      "Providing a wide selection of dumpster sizes to accommodate any project in the Tampa Bay area, from residential cleanups to large construction sites.",
    icon: TruckIcon,
  },
  {
    name: "Timely Delivery & Pickup Service",
    description:
      "Ensuring efficient operations with prompt delivery and pickup, keeping your project timelines on track.",
    icon: ClockIcon,
  },
  {
    name: "Competitive Pricing Structure",
    description:
      "Offering transparent and fair pricing for all dumpster rental needs, ensuring value for services provided in Tampa Bay.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Personalized Customer Service",
    description:
      "Dedicated local team providing tailored services to meet your specific dumpster rental requirements in Tampa Bay.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question:
      "How do I select the right dumpster size for my needs in Tampa Bay?",
    answer:
      "Our experienced team will help you choose the ideal dumpster size based on the scope and nature of your project. Just give us a call!",
    items: [],
  },
  {
    question: "What are the rates for renting a dumpster in Tampa Bay?",
    answer:
      "Rates vary depending on the size of the dumpster and the length of the rental. We offer clear, upfront pricing to match your specific project needs.",
    items: [],
  },
  {
    question: "What types of waste can I dispose of in the dumpster?",
    answer:
      "Our dumpsters can accommodate a variety of materials, including household, construction, and yard waste. We'll guide you on any prohibited items.",
    items: [],
  },
  {
    question: "Can I extend my rental period?",
    answer:
      "Absolutely! We understand that project needs can change, so we offer flexible rental extensions. Just contact us to adjust your schedule.",
    items: [],
  },
  {
    question: "Do you offer same-day dumpster delivery in Tampa Bay?",
    answer:
      "Yes, we strive to accommodate same-day delivery requests based on current availability. It's best to schedule in advance when possible.",
    items: [],
  },
  {
    question: "Are there any items that cannot be placed in the dumpsters?",
    answer:
      "Certain materials, such as hazardous waste, cannot be placed in dumpsters due to safety and environmental regulations. We'll provide you with a detailed list.",
    items: [],
  },
];

const features = [
  {
    name: "Efficient Tampa Bay Dumpster Services",
    description:
      "Our services are designed for maximum efficiency, ensuring your waste management needs are met promptly and effectively.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Efficient dumpster services in Tampa Bay",
  },
  {
    name: "Committed to Customer Satisfaction",
    description:
      "We pride ourselves on delivering high-quality services with a focus on customer satisfaction and reliability.",
    imageSrc: dumptrailer,
    imageAlt: "Dedicated to customer satisfaction in dumpster rental",
  },
];

const metatitle =
  "Tampa Bay Dumpster Rental | Efficient & Affordable Services | Call Today";
const description =
  "Top-rated dumpster rental services in Tampa Bay. Offering flexible scheduling, a variety of sizes, and competitive pricing for your waste management needs.";

export default function DumpsterRentalTampaBay() {
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
        alttext="Dumpster rental service in Tampa Bay"
        location="Tampa Bay's Preferred"
        service="Dumpster Rental"
        ptag="Secure the best dumpster rental experience in Tampa Bay with our reliable, flexible, and cost-effective solutions."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Your Dumpster Rental Partner in Tampa Bay"
        subheader="Flexible, Reliable, and Efficient"
        ptag="From small home renovations to major construction projects, we provide the right dumpsters to manage your waste efficiently."
        points={points}
      />

      <Multiblock
        header="LEADING DUMPSTER RENTAL SERVICE"
        ptag="Experience unparalleled dumpster rental services in Tampa Bay, focused on meeting your project's specific needs."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Dumpster Projects in Tampa Bay"
        ptag="Explore our selection of dumpster sizes suitable for any type of project in Tampa."
      />
      <Reviews />

      <Otherservices
        header="Tampa Bay's Junk Experts"
        subheader="More Than Just Dumpster Rentals"
        ptag="In addition to dumpster rentals, we offer a variety of waste management services to fully support your project's disposal needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
