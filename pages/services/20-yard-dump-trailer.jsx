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
import Testimonialsection from "../../components/Testimonialsection";
import Contactwhite from "../../components/Contactwhite";

const points = [
  {
    name: "Ideal Size for Large Projects",
    description:
      "The 20-yard dumpster trailer is perfect for large-sized projects like home renovations, landscaping, or small construction jobs.",
    icon: TruckIcon,
  },
  {
    name: "Convenient and Compact Design",
    description:
      "Designed for ease of use, the 20-yard dumpster fits comfortably in most driveways and tight spaces, making it ideal for residential projects.",
    icon: TrashIcon,
  },
  {
    name: "Flexible Scheduling",
    description:
      "With a significant capacity, the 20-yard dumpster is an efficient solution for managing and disposing of various types of waste materials.",
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
    question: "What are the dimensions of a 20-yard dumpster trailer?",
    answer:
      "The typical dimensions of a 20-yard dumpster trailer are around 16 feet long, 7.5 feet wide, and 4.5 feet high. These dimensions can vary slightly based on the manufacturer.",
    items: [],
  },
  {
    question: "What types of projects is a 20-yard dumpster suitable for?",
    answer:
      "It's ideal for large-sized projects such as home cleanouts, minor renovation works, garage cleanups, and similar projects that generate a moderate amount of waste.",
    items: [],
  },
  {
    question: "How much weight can a 20-yard dumpster hold?",
    answer:
      "A 20-yard dumpster typically holds up to 3-4 tons (6,000-8,000 pounds) of material, but this can vary depending on the type of debris and local regulations.",
    items: [],
  },
  {
    question: "What materials can I dispose of in a 20-yard dumpster?",
    answer:
      "You can dispose of various materials like household junk, construction debris, yard waste, and more. However, hazardous materials are not permitted.",
    items: [],
  },
  {
    question: "How do I rent a 20-yard dumpster trailer?",
    answer:
      "Contact us to discuss your project needs, and we can schedule a delivery of a 20-yard dumpster at your convenience.",
    items: [],
  },
  {
    question:
      "Is there a weight limit or overage fees for the 20-yard dumpster?",
    answer:
      "Yes, there's a weight limit based on the dumpster size and local regulations. Overage fees apply if the weight exceeds the agreed limit.",
    items: [],
  },
];

const features = [
  {
    name: "Your Go-To for 20-Yard Dumpsters",
    description:
      "Our 20-yard dumpsters are the perfect solution for a range of projects, offering ample space and easy accessibility.",
    imageSrc: dumpstertrailerone,
    imageAlt: "20-Yard Dumpster for various projects",
  },
  {
    name: "Effortless Rental Process",
    description:
      "We make renting a 20-yard dumpster simple and hassle-free, with flexible scheduling to fit your project timeline.",
    imageSrc: dumptrailer,
    imageAlt: "Easy rental process for 20-yard dumpster",
  },
];

const metatitle = "20 Yard Dumpster Trailer Rental | Convenient & Efficient";
const description =
  "Find the ideal 20-yard dumpster trailer for your project. Perfect for home renovations, cleanouts, and small construction jobs. Easy rental process and eco-friendly disposal.";

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
        alttext="Yard Dumpster Trailer Rental"
        location="The best 20"
        service="Yard Dumpster Trailer Rental"
        ptag="Discover the perfect solution for large-scale waste management with our 20-yard dumpster trailers. Ideal for various projects."
        cta="Rent a 20-Yard Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Efficient Waste Management with 20-Yard Dumpsters"
        subheader="Ideal for Large-Sized Projects"
        ptag="Manage your project's waste effectively with our conveniently sized 20-yard dumpsters, designed for a variety of uses."
        points={points}
      />

      <Multiblock
        header="20-Yard Dumpster Trailer Rentals"
        ptag="Choose our 20-yard dumpster trailers for a hassle-free way to handle waste in your next project."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="20-Yard Dumpster in Action"
        ptag="See how our 20-yard dumpsters can fit seamlessly into different project sites, providing an effective waste management solution."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="More Than Just Dumpster Rentals"
        subheader="Complete Waste Management Solutions"
        ptag="Apart from dumpster rentals, explore our range of services for all your waste disposal needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Rent a 20 Yard Dumpster" />
    </>
  );
}
