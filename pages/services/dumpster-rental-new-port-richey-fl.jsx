import dumpstertrailer from "../../public/dumpster-trailer-1.png";
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
      "We offer a wide variety of dumpster sizes to suit any project, big or small. Choose from our 10, 15, and 20 cubic yard dumpsters.  Perfect for residential and commercial projects.",

    icon: TruckIcon,
  },
  {
    name: "On Time Delivery & Pick Up",
    description:
      "We pride ourselves on providing prompt and reliable delivery and pick-up service, so you can stay on schedule with your project. Contact us today to schedule your dumpster rental.",

    icon: ClockIcon,
  },
  {
    name: "Family Owned & Operated",
    description:
      "As a family-owned and operated business, we take great pride in providing personalized service and building lasting relationships with our customers.",
    icon: UsersIcon,
  },
  {
    name: "Flat Rates & No Hidden Fees",
    description:
      "Our flat rate pricing means no hidden fees or surprises, providing you with a transparent and honest service. What you are quoted is what you pay.",

    icon: CurrencyDollarIcon,
  },
];

const faqs = [
  {
    question:
      "What sizes of dumpsters are available for rent in New Port Richey?",
    answer:
      "We offer various sizes, including 10-yard, 15-yard, and 20-yard dumpsters, to accommodate different project needs.",
    items: [],
  },
  {
    question: "How does the dumpster rental process work in New Port Richey?",
    answer:
      "Select your desired dumpster size, schedule delivery and pickup, and we handle the rest. It's hassle-free and efficient.",
    items: [],
  },
  {
    question: "What are the rates for dumpster rental in New Port Richey?",
    answer:
      "Rates depend on dumpster size and rental duration. Contact us for a personalized quote.",
    items: [],
  },
  {
    question: "Can I extend my dumpster rental period?",
    answer:
      "Yes, you can extend the rental period. Please inform us in advance to adjust the schedule accordingly.",
    items: [],
  },
  {
    question: "Do you offer same-day dumpster rental services?",
    answer:
      "Depending on availability, we offer same-day services. It's best to schedule in advance to ensure availability.",
    items: [],
  },
  {
    question:
      "Are there any materials that I cannot put in the rented dumpster?",
    answer:
      "Yes, hazardous materials are not permitted in dumpsters. Please contact us for a list of prohibited items.",
    items: [],
  },
];

const features = [
  {
    name: "Efficient Dumpster Rental Service",
    description:
      "Our dumpster rental services in New Port Richey are designed for efficiency and reliability, ensuring your project stays on track.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Efficient dumpster rental in New Port Richey",
  },
  {
    name: "Professional and Reliable Team",
    description:
      "Our team is dedicated to providing professional and reliable dumpster rental services, ensuring customer satisfaction every time.",
    imageSrc: dumptrailer,
    imageAlt: "Professional dumpster rental team",
  },
];

const metatitle = "Dumpster Rental New Port Richey | Affordable & Reliable";
const description =
  "Looking for dumpster rental in New Port Richey? We offer affordable, reliable, and flexible dumpster rental services to fit your project needs.";

export default function DumpsterRentalNewPortRichey() {
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
        alttext="Dumpster rental service in New Port Richey"
        location="New Port Richey's Leading"
        service="Dumpster Rental Service"
        ptag="Get the best dumpster rental experience in New Port Richey with our reliable, flexible, and affordable services."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Your Dumpster Rental Solution in New Port Richey"
        subheader="Tailored Services for Any Project"
        ptag="Choose from a range of dumpster sizes and flexible rental periods to suit your specific project needs in New Port Richey."
        points={points}
      />

      <Multiblock
        header="RELIABLE DUMPSTER SERVICES"
        ptag="We pride ourselves on providing timely and efficient dumpster services, ensuring your project runs smoothly without any waste management hassles."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Explore Our Dumpster Options"
        ptag="Dumpsters available for different types of projects in New Port Richey."
      />
      <Reviews />

      <Otherservices
        header="More Than Just Dumpster Rentals"
        subheader="Comprehensive Waste Solutions"
        ptag="In addition to dumpster rentals, explore our wide range of waste management services to meet all your project needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
