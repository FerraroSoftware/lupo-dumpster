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
  SofaIcon,
  CurrencyDollarIcon,
  RecycleIcon,
  TruckIcon,
  TrashIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import furnitureRemovalImage from "../../public/mattress-disposal.png"; // Replace with your image path
import furnitureremovals from "../../public/furniture-removals.png";
import furniturepickup from "../../public/furniture-pick-up.png";
import localfurnitureremoval from "../../public/local-furniture-removal.png";

const points = [
  {
    name: "Efficient Furniture Removal",
    description:
      "Professional team to quickly remove and haul away your old furniture without any hassle.",
    icon: TruckIcon,
  },
  {
    name: "Affordable Pricing",
    description:
      "Competitive rates for furniture removal services, with transparent pricing and no hidden fees.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "Committed to the environment, we ensure that your old furniture is disposed of responsibly, including donation and recycling options.",
    icon: TrashIcon,
  },
  {
    name: "All Types of Furniture",
    description:
      "Whether it's a sofa, armchair, dining set, or bedroom furniture, we handle all types of furniture removal.",
    icon: BuildingLibraryIcon,
  },
];

const faqs = [
  {
    question: "How does furniture removal work?",
    answer:
      "Simply schedule a pickup, and our team will come to your location to remove the furniture. We'll handle all the heavy lifting and transportation.",
    items: [],
  },
  {
    question: "What happens to the furniture after it's removed?",
    answer:
      "Furniture is either donated, recycled, or disposed of in an environmentally friendly manner, depending on condition and regulations.",
    items: [],
  },
  {
    question: "Can you remove furniture from any location?",
    answer:
      "Yes, we can remove furniture from homes, offices, and more. Our team is equipped to handle removals from a variety of settings.",
    items: [],
  },
  {
    question: "Do I need to prepare the furniture for removal?",
    answer:
      "For quicker service, you can disassemble or move the furniture to an easily accessible location, but this is not required.",
    items: [],
  },
  {
    question: "How much does it cost to remove furniture?",
    answer:
      "Cost depends on the amount and type of furniture. Contact us for a free estimate.",
    items: [],
  },
  {
    question: "Is same-day furniture removal available?",
    answer:
      "We offer flexible scheduling, including possible same-day service based on availability. Please contact us for more details.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable and Quick Furniture Removal Service",
    description:
      "Our experienced team ensures fast and efficient removal of your unwanted furniture, making the process smooth and stress-free.",
    imageSrc: furnitureremovals,
    imageAlt: "Quick furniture removal service",
  },
  {
    name: "Sustainable Furniture Removal Practices",
    description:
      "We are dedicated to reducing waste by ensuring that as much furniture as possible is recycled or donated, minimizing environmental impact.",
    imageSrc: furniturepickup,
    imageAlt: "Eco-friendly furniture disposal",
  },
];

const metatitle = "Furniture Removal Services | Fast and Eco-Friendly";
const description =
  "Need to remove old furniture? Our team provides fast, reliable, and eco-friendly furniture removal services. Contact us for a stress-free solution.";

export default function FurnitureRemoval() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={localfurnitureremoval}
        alttext="Furniture removal service"
        location="Efficient"
        service="Furniture Removal"
        ptag="Free up space and dispose of unwanted furniture responsibly with our efficient and eco-friendly removal service."
        cta="Schedule Removal"
      ></Junkheader>

      <Corefeatures
        header="Comprehensive Furniture Removal"
        subheader="Easy and Responsible Disposal"
        ptag="Our team is ready to help you declutter by removing any old or unwanted furniture, providing a hassle-free service from start to finish."
        points={points}
      />

      <Multiblock
        header="YOUR TRUSTED REMOVAL PARTNER"
        ptag="Experience the ease of furniture removal with our professional and friendly team, dedicated to providing excellent service."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Before and After Furniture Removal"
        ptag="See the difference our service makes. Check out the before and after photos of our furniture removal projects."
      />
      <Reviews />

      <Otherservices
        header="Beyond Furniture Removal"
        subheader="Complete Junk Removal Solutions"
        ptag="In addition to furniture, we handle a wide variety of junk removal services to fully clear and clean your space."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
