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
  ClockIcon,
} from "@heroicons/react/24/outline";

import constructionDumpsterImage from "../../public/hoarding/hoarding-cleanup.png";
import debris from "../../public/constructiondebris/debris.png";
import constructiondebrisremoval from "../../public/constructiondebris/construction-debris-removal.png";

import constructiontrashs from "../../public/construction-dumpster-rental.png";

const points = [
  {
    name: "Wide Range of Dumpster Sizes",
    description:
      "Select from a variety of dumpster sizes suitable for every construction project, big or small.",
    icon: TruckIcon,
  },
  {
    name: "Competitive Rental Costs",
    description:
      "We offer competitive pricing on all construction dumpster rentals to keep your project on budget.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Flexible Rental Periods",
    description:
      "Choose the rental period that fits your project timeline, with options for extensions if needed.",
    icon: ClockIcon,
  },
  {
    name: "Eco-Friendly Waste Disposal",
    description:
      "Our dumpsters are managed responsibly, ensuring that waste is disposed of in an environmentally friendly way.",
    icon: TrashIcon,
  },
];

const faqs = [
  {
    question: "What sizes of construction dumpsters are available?",
    answer:
      "We offer a range of sizes including 10, 15, and 20-yard dumpsters to accommodate different scales of construction projects.",
    items: [],
  },
  {
    question: "How much does it cost to rent a construction dumpster?",
    answer:
      "Rental costs vary based on the size of the dumpster and the length of the rental period. Contact us for a detailed quote.",
    items: [],
  },
  {
    question: "How do I rent a construction dumpster?",
    answer:
      "Simply contact us with the details of your project, and we'll help you choose the right dumpster size and arrange a delivery schedule.",
    items: [],
  },
  {
    question: "Can I extend the rental period for a construction dumpster?",
    answer:
      "Yes, rental period extensions are available. Please inform us as soon as you know you'll need more time with the dumpster.",
    items: [],
  },
  {
    question: "What can I dispose of in a construction dumpster?",
    answer:
      "Construction dumpsters can accommodate a variety of waste materials, including wood, metal, concrete, and more. However, hazardous materials are not permitted.",
    items: [],
  },
  {
    question:
      "Do you provide service for both residential and commercial construction projects?",
    answer:
      "Absolutely, our construction dumpsters are available for both residential home remodeling and large commercial construction sites.",
    items: [],
  },
];

const features = [
  {
    name: "Reliable Construction Dumpster Services",
    description:
      "Our dependable service ensures that your construction dumpster is delivered and picked up on time, keeping your project on schedule.",
    imageSrc: constructiontrashs,
    imageAlt: "Reliable construction dumpster service",
  },
  {
    name: "Customized Solutions for Every Project",
    description:
      "We understand that every construction project is different. We provide customized dumpster solutions to meet your specific needs.",
    imageSrc: constructiondebrisremoval,
    imageAlt: "Tailored construction dumpster solutions",
  },
];

const metatitle = "Construction Dumpster Rentals | Reliable & Affordable";
const description =
  "Efficient construction dumpster rental services for your project needs. Rent a dumpster today and keep your site clean and organized.";

export default function ConstructionDumpster() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={debris}
        alttext="Construction dumpster ready for rental"
        location="Top Choice for"
        service="Construction Dumpster Rental"
        ptag="Streamline your construction project with our reliable dumpster rental services. Choose from a range of sizes for any project scale."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Construction Dumpster Rental Made Easy"
        subheader="Efficient, Cost-effective, and Flexible"
        ptag="We provide a straightforward and hassle-free way to manage construction waste with our variety of dumpster sizes and flexible rental terms."
        points={points}
      />

      <Multiblock
        header="DEDICATED TO YOUR PROJECT SUCCESS"
        ptag="Our commitment to providing timely and efficient dumpster services helps keep your construction project on track and within budget."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Get a Roll off Trailer Today"
        ptag="View the types of dumpsters we offer and find the perfect fit for your construction waste needs."
      />
      <Reviews />

      <Otherservices
        header="Waste Management Solutions"
        subheader="Beyond Construction Dumpster Rentals"
        ptag="Alongside construction dumpsters, we offer a wide range of waste management services to cater to all your project's needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
