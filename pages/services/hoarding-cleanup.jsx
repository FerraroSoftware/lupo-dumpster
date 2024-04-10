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
  ScaleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import appliances from "../../public/appliances.png";

import hoardingcleanup from "../../public/hoarding/hoarding-cleanup.png";
import hoardingclean from "../../public/hoarding/hoarding-clean.png";
import cleanoutservice from "../../public/hoarding-services.png";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

const points = [
  {
    name: "Comprehensive Hoarding Cleanup Services",
    description:
      "Our team specializes in hoarding cleanup, providing compassionate and efficient service to restore your space.",
    icon: TruckIcon,
  },
  {
    name: "Sensitive and Respectful Approach",
    description:
      "We understand the challenges of hoarding situations and approach each project with sensitivity and respect.",
    icon: UsersIcon,
  },
  {
    name: "Affordable Hoarder Cleanup",
    description:
      "We offer transparent and competitive pricing for hoarder cleanup services, ensuring quality service at affordable rates.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "Post-cleanup, we ensure eco-friendly disposal of items, prioritizing recycling and donation wherever possible.",
    icon: TrashIcon,
  },
];

const faqs = [
  {
    question: "What is involved in hoarding cleanup services?",
    answer:
      "Hoarding cleanup involves decluttering, organizing, cleaning, and sanitizing spaces affected by hoarding, tailored to each individual's needs.",
    items: [],
  },
  {
    question: "How much does hoarding cleanup cost?",
    answer:
      "Costs vary based on the scope of the project. Contact us for a detailed assessment and quote.",
    items: [],
  },
  {
    question: "How long does a hoarding cleanup take?",
    answer:
      "The duration depends on the severity of the hoarding situation. Our team works efficiently to complete the process as quickly as possible.",
    items: [],
  },
  {
    question: "Do you offer support beyond physical cleanup?",
    answer:
      "While our primary focus is on physical cleanup, we can provide referrals to mental health professionals experienced in hoarding disorders.",
    items: [],
  },
  {
    question: "Are your cleanup methods environmentally friendly?",
    answer:
      "Yes, we prioritize eco-friendly methods in our cleanup, including responsible disposal and recycling.",
    items: [],
  },
  {
    question: "Is your team trained to handle sensitive hoarding situations?",
    answer:
      "Absolutely. Our team is trained to handle hoarding situations with the utmost sensitivity and professionalism.",
    items: [],
  },
];

const features = [
  {
    name: "Expert Hoarding Cleanup Team",
    description:
      "Our experienced team is equipped to handle even the most challenging hoarding situations, ensuring a thorough and compassionate cleanup process.",
    imageSrc: hoardingclean,
    imageAlt: "Professional hoarding cleanup team",
  },
  {
    name: "Tailored Cleanup Solutions",
    description:
      "We understand that every hoarding situation is unique, and we offer tailored solutions to meet the specific needs of each client.",
    imageSrc: cleanoutservice,
    imageAlt: "Customized hoarding cleanup service",
  },
];

const metatitle =
  "Professional Hoarding Cleanup Services | Compassionate & Thorough";
const description =
  "Expert hoarding cleanup services offering compassionate, respectful, and thorough cleanup. Contact us for a discreet and effective solution.";

export default function HoardingCleanup() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={hoardingcleanup}
        alttext="Professional hoarding cleanup service"
        location="Compassionate"
        service="Hoarding Cleanup"
        ptag="Our experienced team provides respectful and thorough hoarding cleanup services to help restore order and cleanliness to your space."
        cta="Schedule Cleanup"
      ></Junkheader>

      <Corefeatures
        header="Hoarding Cleanup Services"
        subheader="Respectful, Thorough, and Discreet"
        ptag="We specialize in hoarding cleanup, offering a service that is as much about compassion as it is about cleaning."
        points={points}
      />

      <Multiblock
        header="DEDICATED TO QUALITY AND CARE"
        ptag="Our team approaches every hoarding cleanup project with care, ensuring a respectful and effective cleaning process."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Transforming Spaces with Care"
        ptag="View our before and after gallery to see the impact of our hoarding cleanup services."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="More Than Just Cleanup"
        subheader="Comprehensive Cleaning Solutions"
        ptag="In addition to hoarding cleanup, we offer a range of cleaning services to meet all your needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Contact us for hoarding cleanup" />
    </>
  );
}
