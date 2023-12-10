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
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  TrashIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import appliancecleanup from "../../public/applianceremoval/appliance-cleanup.png";
import appliancesremoval from "../../public/applianceremoval/appliances-removal.png";
import oldappliances from "../../public/applianceremoval/old-appliances.png";

const points = [
  {
    name: "Expert Appliance Removal",
    description:
      "Specializing in old appliance removal, we ensure safe and efficient handling of your unwanted appliances.",
    icon: TruckIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "We prioritize eco-friendly disposal methods, including recycling and proper disposal of appliances to minimize environmental impact.",
    icon: TrashIcon,
  },
  {
    name: "Competitive Pricing",
    description:
      "Our appliance removal service offers competitive rates, providing you with transparent and honest pricing for all removal needs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Convenient Scheduling",
    description:
      "Schedule your appliance removal at a time that works best for you. Our team will ensure timely service for your convenience.",
    icon: CalendarDaysIcon,
  },
];

const faqs = [
  {
    question: "What types of appliances can you remove?",
    answer:
      "We can remove a range of appliances, including refrigerators, ovens, washing machines, air conditioners, and more.",
    items: [],
  },
  {
    question: "How do you dispose of old appliances?",
    answer:
      "We adhere to eco-friendly disposal practices, including recycling appliances or donating them if they are still in working condition.",
    items: [],
  },
  {
    question: "Is there an extra charge for larger appliances?",
    answer:
      "Charges for appliance removal may vary based on size and type. Contact us for a detailed quote.",
    items: [],
  },
  {
    question: "Do I need to prepare the appliances before removal?",
    answer:
      "Please ensure that appliances are disconnected and ready for removal. For safety, secure any loose parts or doors.",
    items: [],
  },
  {
    question: "Can you remove built-in appliances?",
    answer:
      "Yes, we can remove built-in appliances. Please inform us in advance so we can come prepared with the necessary tools.",
    items: [],
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured for appliance removal. Our license and insurance number is L20000153106.",
    items: [],
  },
  {
    question: "Do you offer commercial appliance removal?",
    answer:
      "Yes, we provide appliance removal services for both residential and commercial properties.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable Junk Appliance Removal",
    description:
      "Our skilled team handles all aspects of junk appliance removal, ensuring a hassle-free experience for you.",
    imageSrc: appliancecleanup,
    imageAlt: "Professional appliance removal service",
  },
  {
    name: "Environmentally Responsible Removal",
    description:
      "We're committed to responsible disposal of appliances, adhering to environmental guidelines to ensure safe and sustainable practices.",
    imageSrc: appliancesremoval,
    imageAlt: "Eco-friendly disposal of appliances",
  },
];

const metatitle =
  "Professional Appliance Removal Services | Efficient & Eco-Friendly";
const description =
  "Need old appliance removal? Our expert team provides efficient and eco-friendly appliance removal services. Contact us for a hassle-free experience.";

export default function ApplianceRemoval() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={oldappliances}
        alttext="Professional appliance removal service"
        location="Top-Rated"
        service="Appliance Removal"
        ptag="Efficiently remove your old appliances with our professional and eco-friendly service. We handle everything from pickup to disposal."
        cta="Schedule Removal"
      ></Junkheader>

      <Corefeatures
        header="Appliance Removal Made Easy"
        subheader="Safe, Fast, and Eco-Friendly"
        ptag="From single appliance removal to clearing out multiple items, we provide a smooth service."
        points={points}
      />

      <Multiblock
        header="EXPERT APPLIANCE REMOVAL TEAM"
        ptag="Our team is equipped to handle all types of appliances, ensuring safe removal and disposal."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Your Local Appliance Removal Experts"
        ptag="  If you have junk, tree debris, construction debris, or any other
              type of debris that needs to be removed near New Port Richey, we
              can help. Contact us for a free quote."
      />
      <Reviews />

      <Otherservices
        header="Comprehensive Removal Services"
        subheader="Beyond Just Appliances"
        ptag="Explore our full range of junk removal services, including furniture, and more. We're here to help declutter your space."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
