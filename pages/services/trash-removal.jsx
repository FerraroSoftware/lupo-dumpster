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
  CurrencyDollarIcon,
  TruckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import trashRemovalImage from "../../public/mattress-disposal.png"; // Replace with your image path
import trashremoval from "../../public/trash-removal.png";
import dumptrailer from "../../public/dump-trailer.png";
import trashremovalone from "../../public/trash-removal-1.png";
import Testimonialsection from "../../components/Testimonialsection";
import Contactwhite from "../../components/Contactwhite";

const points = [
  {
    name: "Comprehensive Trash Removal",
    description:
      "Expert removal of all types of trash, including household, yard, and hazardous waste, ensuring a cleaner environment.",
    icon: TrashIcon,
  },
  {
    name: "Affordable Pricing",
    description:
      "Receive transparent and competitive pricing for all trash removal services with no hidden costs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "Committed to sustainable practices, we ensure that trash is recycled, donated, or disposed of responsibly.",
    icon: TruckIcon,
  },
  {
    name: "Flexible Scheduling",
    description:
      "We work around your schedule to provide timely trash removal services, including same-day options.",
    icon: ClockIcon,
  },
];

const faqs = [
  {
    question: "What types of trash can you remove?",
    answer:
      "We handle a wide range of trash, including household waste, yard debris, construction materials, and more. Contact us for specifics.",
    items: [],
  },
  {
    question: "How does the trash removal process work?",
    answer:
      "Contact us to schedule a pickup. Our team will arrive, collect the trash, and ensure it's properly disposed of.",
    items: [],
  },
  {
    question: "Is recycling part of your trash removal service?",
    answer:
      "Yes, we strive to recycle as much material as possible and are committed to reducing landfill waste.",
    items: [],
  },
  {
    question: "How much will it cost to remove my trash?",
    answer:
      "Pricing is based on the volume and type of trash. We offer free estimates, so please reach out for a personalized quote.",
    items: [],
  },
  {
    question: "Can you handle large or bulky item removal?",
    answer:
      "Absolutely, we can remove large items like furniture, appliances, and other bulky trash as part of our service.",
    items: [],
  },
  {
    question: "Do you provide commercial trash removal services?",
    answer:
      "Yes, we cater to both residential and commercial clients for all their trash removal needs.",
    items: [],
  },
];

const features = [
  {
    name: "Fast and Reliable Removal",
    description:
      "Our team is quick, efficient, and reliable, ensuring your trash is removed on time and hassle-free.",
    imageSrc: dumptrailer,
    imageAlt: "Fast trash removal service",
  },
  {
    name: "Commitment to the Environment",
    description:
      "We take pride in our environmentally conscious approach to trash removal, ensuring the least impact on the planet.",
    imageSrc: trashremovalone,
    imageAlt: "Environmentally friendly trash removal",
  },
];

const metatitle = "Trash Removal Services | Quick, Efficient, & Eco-Friendly";
const description =
  "Professional trash removal services that are fast, reliable, and environmentally responsible. Clear out your space with ease. Contact us today!";

export default function TrashRemoval() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={trashremoval}
        alttext="Professional trash removal services"
        location="Efficient"
        service="Trash Removal"
        ptag="Say goodbye to unwanted trash with our professional, efficient, and eco-friendly removal services."
        cta="Schedule Removal"
      ></Junkheader>

      <Corefeatures
        header="Expert Trash Removal"
        subheader="Cleaner Spaces, Healthier Environments"
        ptag="Our team is dedicated to providing top-notch trash removal services, ensuring your spaces are clean and your trash is handled responsibly."
        points={points}
      />

      <Multiblock
        header="LEADING THE WAY IN TRASH DISPOSAL"
        ptag="Join us in our commitment to a cleaner, greener community with our comprehensive trash removal solutions."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Before and After Trash Removal"
        ptag="Witness the transformative power of professional trash removal through our gallery of before and after shots."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="Comprehensive Waste Solutions"
        subheader="Beyond Trash Removal"
        ptag="Explore our wide range of services including junk removal, recycling, and more to fully manage your waste needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Contact us for trash removal" />
    </>
  );
}
