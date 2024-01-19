import dumpsterrental from "../../public/dumpsterrental.png";
import junktrailer from "../../public/junk-trailer.png";
import dumpstertrailer from "../../public/dumpster-trailer-1.png";
import dumptrailers from "../../public/dump-trailers.png";

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
  TrashIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const points = [
  {
    name: "Schedule Anytime",
    description:
      "Consistent and reliable trash pickup services across Pasco County, ensuring timely waste management.",
    icon: CalendarIcon,
  },
  {
    name: "Affordable and Transparent Pricing",
    description:
      "Providing competitive pricing with no hidden fees for trash pickup services in Pasco County.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Waste Solutions",
    description:
      "Committed to the environment, our trash pickup includes recycling efforts and sustainable waste disposal practices.",
    icon: TrashIcon,
  },
  {
    name: "Community-Focused Service",
    description:
      "Dedicated to serving the Pasco County community, we prioritize customer satisfaction and local needs.",
    icon: CheckBadgeIcon,
  },
];

const faqs = [
  {
    question: "What is the schedule for trash pickup in Pasco County?",
    answer:
      "Pickup schedules vary by area. Please refer to our contact page for specific information about your location.",
    items: [],
  },
  {
    question: "How do I set up trash pickup services in Pasco County?",
    answer:
      "Setting up service is easy. Reach out to us with your address, and we'll guide you through the process and schedule your first pickup.",
    items: [],
  },
  {
    question: "What types of waste are collected?",
    answer:
      "We collect most household and yard waste. For specific guidelines on acceptable waste types, please check our waste collection standards.",
    items: [],
  },
  {
    question: "Are there any items that are not accepted for trash pickup?",
    answer:
      "Yes, certain items like hazardous materials, large appliances, and electronics may be excluded. Please consult our list of non-acceptable items.",
    items: [],
  },
  {
    question: "Is recycling included in the trash pickup service?",
    answer:
      "Yes, recycling is an integral part of our services. We offer separate collection for recyclables as part of our commitment to sustainability.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable and Efficient Service",
    description:
      "Experience dependable and efficient trash pickup that keeps your neighborhood clean and supports a healthier environment.",
    imageSrc: dumpsterrental,
    imageAlt: "Reliable trash pickup service in Pasco County",
  },
  {
    name: "Dedicated to Pasco County",
    description:
      "Our deep commitment to the community drives us to provide the best possible service for Pasco County residents.",
    imageSrc: dumptrailers,
    imageAlt: "Community-focused trash service",
  },
];

const metatitle =
  "Pasco County Trash Pickup | Fast and Affordable | Lupo Dumpster";
const description =
  "Dependable trash pickup services for Pasco County. Affordable, efficient, and eco-friendly waste management solutions for your community.";

export default function TrashPickupPascoCounty() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumpstertrailer}
        alttext="Pasco County Trash Pickup"
        location="Pasco County's Preferred"
        service="Trash Pickup"
        ptag="Keep your surroundings clean with our regular and eco-friendly trash pickup services in Pasco County."
        cta="View Schedule"
      ></Junkheader>

      <Corefeatures
        header="Efficient Trash Pickup in Pasco County"
        subheader="Keeping Our Community Clean"
        ptag="We take pride in providing Pasco County with timely and responsible trash pickup services."
        points={points}
      />

      <Multiblock
        header="Pasco County Trash Experts"
        ptag="Join us in our mission to create a sustainable community with our eco-conscious waste management practices."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Pasco County Trash Collection"
        ptag="Discover how our trash collection services contribute to a cleaner, greener Pasco County."
      />
      <Reviews />

      <Otherservices
        header="Comprehensive Waste Solutions"
        subheader="Beyond Regular Trash Collection"
        ptag="Explore our full range of services, including large item pickup, recycling programs, and more."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
