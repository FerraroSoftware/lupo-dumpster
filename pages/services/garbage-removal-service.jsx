import dumpsterrental from "../../public/dumpsterrental.png";
import junktrailer from "../../public/junk-trailer.png";
import dumpstertrailer from "../../public/dumpster-trailer-1.png";
import dumptrailers from "../../public/dump-trailers.png";
import trashremovalone from "../../public/trash-removal-1.png";

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
import Process from "../../components/Process";

import {
  TrashIcon,
  TruckIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const points = [
  {
    name: "Comprehensive Garbage Removal",
    description:
      "Efficiently handle all types of garbage, including household, commercial, and specialized waste.",
    icon: TrashIcon,
  },
  {
    name: "Prompt and Reliable Service",
    description:
      "Our experienced team ensures timely and reliable garbage removal, maintaining cleanliness and hygiene.",
    icon: TruckIcon,
  },
  {
    name: "Affordable Solutions",
    description:
      "Offering competitive pricing for garbage removal services, with transparent and upfront costs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Best Disposal Practices",
    description:
      "Committed to sustainable practices, we ensure responsible disposal and recycling of garbage.",
    icon: CheckBadgeIcon,
  },
];

const faqs = [
  {
    question: "How does your garbage removal service work?",
    answer:
      "Contact us to schedule a pickup, and our team will arrive to collect and properly dispose of your garbage, adhering to all local regulations.",
    items: [],
  },
  {
    question: "What types of garbage can you remove?",
    answer:
      "We handle a wide range of garbage, from regular household trash to commercial waste and specific types of refuse. Let us know what you need removed for more detailed assistance.",
    items: [],
  },
  {
    question: "How is pricing determined for garbage removal?",
    answer:
      "Pricing is based on the volume and type of garbage being removed. Contact us for a free estimate tailored to your specific needs.",
    items: [],
  },
  {
    question: "Can you handle large-scale or commercial garbage removal?",
    answer:
      "Absolutely, our services are equipped to manage large-scale and commercial garbage removal projects efficiently.",
    items: [],
  },
  {
    question: "Do you provide regular scheduled garbage removal services?",
    answer:
      "Yes, we can arrange for regular scheduled pickups to suit your ongoing garbage removal needs.",
    items: [],
  },
];

const features = [
  {
    name: "Expert Garbage Removal Team",
    description:
      "Our skilled professionals are equipped to handle all your garbage removal needs, ensuring a clean and safe environment.",
    imageSrc: dumpstertrailer,
    imageAlt: "Expert garbage removal team at work",
  },
  {
    name: "Environmentally Conscious Service",
    description:
      "We take pride in our eco-friendly approach to garbage removal, aiming to reduce the environmental footprint.",
    imageSrc: trashremovalone,
    imageAlt: "Eco-friendly garbage disposal",
  },
];

const metatitle =
  "Garbage Removal Service | New Port Richey | Lupo Dumpster Rental";
const description =
  "Professional garbage removal services for a clean and safe environment. Reliable, affordable, and eco-friendly solutions for all types of waste.";

export default function GarbageRemovalService() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumptrailers}
        alttext="Professional garbage removal service"
        location="Efficient and Responsible"
        service="Garbage Removal"
        ptag="Keep your space clean and environmentally friendly with our top-notch garbage removal services."
        cta="Book a Pickup"
      ></Junkheader>

      <Corefeatures
        header="Reliable Garbage Removal Solutions"
        subheader="Cleanliness and Sustainability Combined"
        ptag="Whether it's residential or commercial garbage, we offer comprehensive removal services to suit your needs."
        points={points}
      />

      <Multiblock
        header="Garbage Removal Professionals"
        ptag="Join us in our commitment to maintaining clean and sustainable neighborhoods with our professional garbage removal services."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Our Garbage Removal Process"
        ptag="Explore how we efficiently remove and manage garbage, prioritizing eco-friendly practices."
      />
      <Reviews />

      <Otherservices
        header="Total Waste Management Solutions"
        subheader="Beyond Garbage Removal"
        ptag="Discover our full range of waste management services, including recycling, yard waste, and bulk item removal."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
