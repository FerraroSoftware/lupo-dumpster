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
  CurrencyDollarIcon,
  TrashIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import appliances from "../../public/appliances.png";
import garagecleaned from "../../public/garagecleanup/garage-cleaned.png";
import garageclean from "../../public/garagecleanup/garage-clean.png";
import cleanoutservice from "../../public/garage-clean-out-service.png";

const points = [
  {
    name: "Professional Garage Cleaning Services",
    description:
      "Expert services for garage cleaning and organizing, tailored to your specific needs.",
    icon: TruckIcon,
  },
  {
    name: "Affordable Garage Cleaning Service Cost",
    description:
      "Competitive pricing for garage cleaning services, ensuring value for your investment.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Convenient Scheduling",
    description:
      "Flexible scheduling options to accommodate your busy lifestyle. Book a garage cleaning service at your convenience.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Eco-Friendly Cleaning Approach",
    description:
      "Our garage cleaning and organizing service uses environmentally responsible methods for a sustainable approach.",
    icon: TrashIcon,
  },
];

const faqs = [
  {
    question: "What types of services are included in garage cleaning?",
    answer:
      "Our garage cleaning services encompass a thorough clean-up, debris removal, and organizing. We handle everything from sweeping out dust to arranging tools and equipment.",
    items: [],
  },
  {
    question: "How is the cost for garage cleaning services determined?",
    answer:
      "Garage cleaning service cost depends on the size of your garage and the extent of cleaning and organizing required. We offer custom quotes to match your specific needs.",
    items: [],
  },
  {
    question: "Do you provide organizing services as part of garage cleaning?",
    answer:
      "Absolutely! Our garage cleaning and organizing service includes sorting, arranging, and removing unwanted items to maximize your garage space.",
    items: [],
  },
  {
    question:
      "How long does a typical garage cleaning and organizing service take?",
    answer:
      "The duration varies based on the garage size and the amount of cleaning and organizing needed. Our team works efficiently to complete the job as quickly as possible.",
    items: [],
  },
  {
    question:
      "Are there any preparations I need to make before your team arrives?",
    answer:
      "We recommend removing any valuable or fragile items from your garage before our arrival. However, we can assist in the initial clearing if needed.",
    items: [],
  },
  {
    question: "Is your team insured for garage cleaning services?",
    answer:
      "Yes, we are fully insured and licensed for garage cleaning. Our license and insurance number is L20000153106, ensuring peace of mind for our clients.",
    items: [],
  },
  {
    question: "Do you dispose of unwanted items from the garage?",
    answer:
      "Yes, part of our garage cleaning service includes the removal and eco-friendly disposal of any unwanted items, following local regulations and guidelines.",
    items: [],
  },
];

const features = [
  {
    name: "Thorough Garage Cleaning and Organizing",
    description:
      "Our skilled team provides comprehensive cleaning and organizing services for your garage, ensuring a neat and functional space.",
    imageSrc: garagecleaned,
    imageAlt: "Professional garage cleaning service",
  },
  {
    name: "Customizable Cleaning Solutions",
    description:
      "Every garage is unique, and so are our cleaning plans. We offer customizable solutions to meet your specific garage cleaning and organizing needs.",
    imageSrc: garageclean,
    imageAlt: "Tailored garage cleaning service",
  },
];

const metatitle = "Expert Garage Cleaning Services | Organized & Efficient";
const description =
  "Professional garage cleaning and organizing services. Get a clutter-free, clean garage with our expert solutions. Contact us today.";

export default function GarageCleaningService() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={cleanoutservice}
        alttext="Expert garage cleaning service"
        location="Professional"
        service="Garage Cleaning Service"
        ptag="Transform your garage with our top-notch cleaning and organizing services. Quality and efficiency at its best."
        cta="Book a Cleaning"
      ></Junkheader>

      <Corefeatures
        header="Garage Cleaning Made Easy"
        subheader="Clean, Organize, and Rejuvenate Your Space"
        ptag="Our team specializes in garage cleaning, providing thorough and efficient services to rejuvenate your space."
        points={points}
      />

      <Multiblock
        header="EXPERT GARAGE CLEANING TEAM"
        ptag="We bring the expertise and tools necessary for exceptional garage cleaning and organizing, leaving you with a space you can be proud of."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="We are your Junk Removal Experts"
        ptag="Take a look at our before and after gallery to see the dramatic transformations we’ve achieved in garages just like yours."
      />
      <Reviews />

      <Otherservices
        header="Beyond Garage Cleaning"
        subheader="Full Spectrum of Cleaning Services"
        ptag="Discover our wide range of cleaning services, including home, office, and specialized cleaning solutions."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
