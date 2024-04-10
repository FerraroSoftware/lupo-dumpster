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

import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailerone from "../../public/dumpster-trailer-1.png";
import dumptrailer from "../../public/dump-trailer.png";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

const points = [
  {
    name: "Diverse Dumpster Size Options",
    description:
      "Offering a variety of dumpster sizes to meet the needs of any project, large or small, in Spring Hill.",
    icon: TruckIcon,
  },
  {
    name: "Prompt Delivery & Pickup",
    description:
      "Guaranteeing on-time delivery and pickup to ensure your project stays on schedule without any hassle.",
    icon: ClockIcon,
  },
  {
    name: "Locally Operated Service",
    description:
      "As a locally operated business, we're committed to providing personalized service to the Spring Hill community.",
    icon: UsersIcon,
  },
  {
    name: "Transparent and Fair Pricing",
    description:
      "Our pricing is straightforward, with no hidden fees, providing you with a reliable and budget-friendly service.",
    icon: CurrencyDollarIcon,
  },
];

const faqs = [
  {
    question: "What sizes of dumpsters are available in Spring Hill?",
    answer:
      "We offer various dumpster sizes, including but not limited to 10-yard, 15-yard, and 20-yard options, suitable for different project scales.",
    items: [],
  },
  {
    question: "How do I rent a dumpster in Spring Hill?",
    answer:
      "Simply contact us with your project details, and we'll assist you in choosing the right dumpster size and schedule your delivery.",
    items: [],
  },
  {
    question: "What are the rental rates for dumpsters in Spring Hill?",
    answer:
      "Our rates depend on the size of the dumpster and the duration of the rental. We provide upfront pricing tailored to your project's needs.",
    items: [],
  },
  {
    question: "Can the rental period be extended if needed?",
    answer:
      "Yes, we offer flexible rental periods. If you require an extension, just let us know in advance to accommodate your request.",
    items: [],
  },
  {
    question: "Do you offer expedited or same-day dumpster services?",
    answer:
      "We strive to meet your scheduling needs, including same-day service when possible. Advance booking is recommended for the best availability.",
    items: [],
  },
  {
    question:
      "Are there any items prohibited from being placed in the dumpsters?",
    answer:
      "Certain items, like hazardous waste, are not permitted. We'll provide a complete list of prohibited items upon rental.",
    items: [],
  },
];

const features = [
  {
    name: "Efficient Dumpster Rental in Spring Hill",
    description:
      "Our dumpster rental services are designed to be efficient and convenient, ensuring your waste management is seamless.",
    imageSrc: dumptrailer,
    imageAlt: "Efficient dumpster rental in Spring Hill",
  },
  {
    name: "Dedicated Customer Support",
    description:
      "Our team is committed to providing excellent customer service, ensuring your dumpster rental experience is smooth from start to finish.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Supportive dumpster rental team",
  },
];

const metatitle =
  "Spring Hill Dumpster Rental | Expert Junk Removal | Reliable & Affordable";
const description =
  "Need a dumpster rental in Spring Hill? We offer reliable, affordable, and convenient dumpster solutions for your project needs.";

export default function DumpsterRentalSpringHill() {
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
        alttext="Dumpster rental in Spring Hill"
        location="Your Trusted"
        service="Dumpster Rental in Spring Hill"
        ptag="Experience hassle-free dumpster rental with our wide range of sizes and customer-first service approach in Spring Hill."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Dumpster Rental Services Spring Hill"
        subheader="Suitable for Any Project"
        ptag="Select from our diverse dumpster sizes, ideal for both residential cleanouts and large construction projects in Spring Hill."
        points={points}
      />

      <Multiblock
        header="DEPENDABLE DUMPSTER SERVICES"
        ptag="Our focus on punctuality and reliability ensures that your waste management needs are efficiently met."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}

      <Imagegridclone
        header="View Our Dumpster Projects"
        ptag="Our dumpsters are designed to cater to different project requirements in Spring Hill."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="Beyond Dumpster Rentals"
        subheader="Waste Solutions"
        ptag="We provide comprehensive waste management services, including junk removal and specialized disposal services, in addition to dumpster rentals in Spring Hill."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Rent a Dumpster in Spring Hill Today"></Contactwhite>
    </>
  );
}
