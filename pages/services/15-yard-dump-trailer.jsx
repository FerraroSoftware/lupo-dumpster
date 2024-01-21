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
  TrashIcon,
} from "@heroicons/react/24/outline";

import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailerone from "../../public/dumpster-trailer-1.png";
import dumptrailer from "../../public/dump-trailer.png";

const points = [
  {
    name: "Ideal Size for Versatile Projects",
    description:
      "The 15-yard dumpster trailer is perfect for medium-sized projects like home renovations, landscaping, or small construction jobs.",
    icon: TruckIcon,
  },
  {
    name: "Convenient and Compact Design",
    description:
      "Designed for ease of use, the 15-yard dumpster fits comfortably in most driveways and tight spaces, making it ideal for residential projects.",
    icon: TrashIcon,
  },
  {
    name: "Flexible Scheduling",
    description:
      "With a significant capacity, the 15-yard dumpster is an efficient solution for managing and disposing of various types of waste materials.",
    icon: CalendarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "We prioritize responsible waste disposal, ensuring that the contents of the dumpster are handled in an environmentally conscious manner.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question: "What are the dimensions of a 15-yard dumpster trailer?",
    answer:
      "The typical dimensions of a 15-yard dumpster trailer are around 16 feet long, 7.5 feet wide, and 4.5 feet high. These dimensions can vary slightly based on the manufacturer.",
    items: [],
  },
  {
    question: "What types of projects is a 15-yard dumpster suitable for?",
    answer:
      "It's ideal for medium-sized projects such as home cleanouts, minor renovation works, garage cleanups, and similar projects that generate a moderate amount of waste.",
    items: [],
  },
  {
    question: "How much weight can a 15-yard dumpster hold?",
    answer:
      "A 15-yard dumpster typically holds up to 2-3 tons (4,000-6,000 pounds) of material, but this can vary depending on the type of debris and local regulations.",
    items: [],
  },
  {
    question: "What materials can I dispose of in a 15-yard dumpster?",
    answer:
      "You can dispose of various materials like household junk, construction debris, yard waste, and more. However, hazardous materials are not permitted.",
    items: [],
  },
  {
    question: "How do I rent a 15-yard dumpster trailer?",
    answer:
      "Contact us to discuss your project needs, and we can schedule a delivery of a 15-yard dumpster at your convenience.",
    items: [],
  },
  {
    question:
      "Is there a weight limit or overage fees for the 15-yard dumpster?",
    answer:
      "Yes, there's a weight limit based on the dumpster size and local regulations. Overage fees apply if the weight exceeds the agreed limit.",
    items: [],
  },
];

const features = [
  {
    name: "Your Go-To for 15-Yard Dumpsters",
    description:
      "Our 15-yard dumpsters are the perfect solution for a range of projects, offering ample space and easy accessibility.",
    imageSrc: dumpstertrailerone,
    imageAlt: "15-Yard Dumpster for various projects",
  },
  {
    name: "Effortless Rental Process",
    description:
      "We make renting a 15-yard dumpster simple and hassle-free, with flexible scheduling to fit your project timeline.",
    imageSrc: dumptrailer,
    imageAlt: "Easy rental process for 15-yard dumpster",
  },
];

const metatitle = "15 Yard Dumpster Trailer Rental | Convenient & Efficient";
const description =
  "Find the ideal 15-yard dumpster trailer for your project. Perfect for home renovations, cleanouts, and small construction jobs. Easy rental process and eco-friendly disposal.";

export default function FifteenYardDumpsterRental() {
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
        alttext="15 Yard Dumpster Trailer Rental"
        location="Your Local"
        service="15 Yard Dumpster Trailer Rental"
        ptag="Discover the perfect solution for medium-scale waste management with our 15-yard dumpster trailers. Ideal for various projects."
        cta="Rent a 15-Yard Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Efficient Waste Management with 15-Yard Dumpsters"
        subheader="Ideal for Medium-Sized Projects"
        ptag="Manage your project's waste effectively with our conveniently sized 15-yard dumpsters, designed for a variety of uses."
        points={points}
      />

      <Multiblock
        header="SIMPLIFY YOUR PROJECT"
        ptag="Choose our 15-yard dumpster trailers for a hassle-free way to handle waste in your next project."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="15-Yard Dumpster in Action"
        ptag="See how our 15-yard dumpsters can fit seamlessly into different project sites, providing an effective waste management solution."
      />
      <Reviews />

      <Otherservices
        header="More Than Just Dumpster Rentals"
        subheader="Complete Waste Management Solutions"
        ptag="Apart from dumpster rentals, explore our range of services for all your waste disposal needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
