import React from "react";
import Head from "next/head";
import Junkheader from "../../components/Junkheader";
import Corefeatures from "../../components/Corefeatures";
import Multiblock from "../../components/Multiblock";
import Contacttwo from "../../components/Contacttwo";
import Imagegridclone from "../../components/Imagegridclone";
import Reviews from "../../components/Reviews";
import Otherservices from "../../components/Otherservices";
import Junkcost from "../../components/Junkcost";
import Contact from "../../components/Contact";
import Faqs from "../../components/Faqs";
import {
  TruckIcon,
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  CalendarDaysIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import debris from "../../public/constructiondebris/debris.png";
import constructiondebrisremoval from "../../public/constructiondebris/construction-debris-removal.png";
import constructiontrash from "../../public/constructiondebris/construction-trash.png";
import Testimonialsection from "../../components/Testimonialsection";
import RequestForm from "@/components/new/request-form";

const points = [
  {
    name: "Efficient Construction Debris Removal",
    description:
      "Our team specializes in the removal of construction debris, ensuring a clean and safe site.",
    icon: TruckIcon,
  },
  {
    name: "Competitive Removal Cost",
    description:
      "We offer transparent pricing for construction debris removal, ensuring no hidden fees.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "Committed to sustainability, we ensure responsible disposal of construction waste.",
    icon: TrashIcon,
  },
  {
    name: "Flexible Scheduling",
    description:
      "We work with your construction timeline to provide timely debris removal services.",
    icon: CalendarDaysIcon,
  },
];

const faqs = [
  {
    question: "What does construction debris removal cost?",
    answer:
      "Costs vary based on debris volume and type. Contact us for a precise quote.",
    items: [],
  },
  {
    question: "Can you remove all types of construction debris?",
    answer:
      "Yes, we handle a variety of construction waste, including wood, metal, and concrete.",
    items: [],
  },
  {
    question: "How quickly can you remove debris?",
    answer:
      "We offer prompt service, often with same-day or next-day removal options.",
    items: [],
  },
  {
    question: "Do you recycle construction debris?",
    answer:
      "We aim to recycle as much debris as possible, aligning with eco-friendly practices.",
    items: [],
  },
  {
    question: "Are you licensed and insured for construction debris removal?",
    answer:
      "Yes, we are fully licensed and insured for your peace of mind. License number: L20000153106.",
    items: [],
  },
  {
    question: "How do I schedule a construction debris removal service?",
    answer:
      "Simply contact us with your project details, and we'll arrange a convenient pickup time.",
    items: [],
  },
  {
    question: "Do you offer commercial construction debris removal?",
    answer:
      "Yes, we provide services for both residential and commercial construction sites.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable Debris Removal Service",
    description:
      "We guarantee reliable and swift removal of construction debris from your site.",
    imageSrc: debris,
    imageAlt: "Efficient construction debris removal",
  },
  {
    name: "Environmentally Responsible Disposal",
    description:
      "Our commitment to the environment ensures responsible handling of all removed debris.",
    imageSrc: constructiontrash,
    imageAlt: "Eco-friendly construction debris disposal",
  },
];

const metatitle = "Professional Construction Debris Removal Services | Pasco";
const description =
  "Expert construction debris removal services offering efficient, eco-friendly, and reliable solutions. Contact us for your construction waste needs.";

export default function ConstructionDebrisRemoval() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={constructiondebrisremoval}
        alttext="Efficient construction debris removal service"
        location="Top-Rated"
        service="Construction Debris Removal"
        ptag="Efficiently manage your construction site with our professional debris removal services. Safe, quick, and eco-friendly solutions."
        cta="Schedule Debris Removal"
      ></Junkheader>

      <Corefeatures
        header="Your Construction Debris Solution"
        subheader="Quick, Reliable, and Sustainable"
        ptag="Our team is dedicated to providing efficient and responsible construction debris removal services, ensuring your site stays clean and compliant."
        points={points}
      />

      <Multiblock
        header="EXPERT CONSTRUCTION DEBRIS REMOVAL TEAM"
        ptag="Trust in our experienced team for all your construction debris needs. From small renovations to large construction sites, we've got you covered."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}

      <Imagegridclone
        header="Efficient Construction Site Cleanup"
        ptag="Browse our gallery to see how we efficiently handle various types of construction debris, keeping sites clean and safe."
      />

      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="Comprehensive Waste Management"
        subheader="More Than Just Debris Removal"
        ptag="Explore our range of services, including junk removal and dumpster rentals, to manage all your waste disposal needs effectively."
      ></Otherservices>

      {/* <Junkcost /> */}

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <RequestForm />
    </>
  );
}
