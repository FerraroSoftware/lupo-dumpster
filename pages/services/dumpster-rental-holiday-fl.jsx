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

const points = [
  {
    name: "Variety of Dumpster Sizes",
    description:
      "Catering to different project needs with a range of dumpster sizes for residential and commercial use in Holiday, FL.",
    icon: TruckIcon,
  },
  {
    name: "Reliable Delivery & Pickup",
    description:
      "Ensuring your project stays on track with timely and efficient dumpster delivery and pickup services.",
    icon: ClockIcon,
  },
  {
    name: "Competitive Pricing",
    description:
      "Offering transparent and affordable pricing, tailored to suit your budget and project requirements.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Exceptional Customer Service",
    description:
      "Our local team in Holiday, FL is committed to providing personalized service and ensuring customer satisfaction.",
    icon: UsersIcon,
  },
];

const faqs = [
  {
    question: "What is a dumpster trailer?",
    answer:
      "A dumpster trailer is delivered to a job site by us via truck and then onto the ground. Dumpster trailers are available in various sizes and are typically used for more significant construction, demolition projects, or large-scale clean-outs.",
    items: [],
  },
  {
    question: "Why would I rent a dumpster?",
    answer:
      "There are multiple reasons why someone might choose to rent a dumpster. Some common causes include disposing of large amounts of waste or debris from a construction or demolition project, a large-scale home renovation or remodel, or a large clean-out of a home or property. Renting a dumpster can also be a convenient and cost-effective way to dispose of waste. Here are a some examples of when you might need a dumpster rental:",
    items: [
      "Refrigerator Disposal",
      "Garbage Removal",
      "Mattress Disposal",
      "Foreclosure Clean Outs",
      "Construction Waste Removal",
      "Yard Waste Removal",
      "Trash Removal",
      "Appliance Removal",
      "Television Disposal & Recycling",
      "Furniture Removal",
      "E-Waste Disposal",
      "Hot Tub Disposal",
    ],
  },
  {
    question:
      "What are my options when renting a dumpster from Lupo Dumpster Rentals?",
    answer:
      "When renting a dumpster, you can choose the size and rental period. We offer 10, 15, and 20 cubic yard dump trailers that all start with a rental period of three days.",
    items: [],
  },
  {
    question: "How much does it cost to rent a dumpster?",
    answer:
      "The cost of renting a dumpster can vary depending on several factors, such as dumpster size, rental period, location, and additional services. Our prices start at $320 and range up to $500 for a rental period of three to five days. Reach out to get a quote from us for an accurate price based on your specific needs.",
    items: [],
  },
  {
    question: " Why rent from Lupo Dumpster Rentals?",
    answer:
      "Lupo Dumpster Rental in Holiday is a well-known and reputable dumpster rental company that offers a wide range of dumpster sizes and rental periods. We have a team of dedicated professionals who can assist with determining the appropriate dumpster size for your project. Our goal is excellent customer service and competitive prices.",
    items: [],
  },
  {
    question: "What items can’t go in a dumpster?",
    answer:
      "Generally, we will not accept hazardous materials, such as chemicals, paint, and asbestos.",
    items: [],
  },
  {
    question: "How can I use a dumpster in a move?",
    answer:
      "A dumpster can be a convenient and cost-effective option for disposing unwanted items during a move. Use one of our dumpsters to dispose of large items such as mattresses, appliances, and boxes of unwanted items. Dumpster rentals can make the moving process less stressful and more efficient.",
    items: [],
  },
  {
    question: "Are there dumpster alternatives?",
    answer:
      "Yes, there are alternative options for waste disposal, such as our junk removal service. This alternative may be more appropriate depending on the amount and type of waste or debris you dispose of.",
    items: [],
  },
];

const features = [
  {
    name: "Tailored Dumpster Rental Solutions in Holiday, FL",
    description:
      "Our dumpster rental services in Holiday, FL are customized to meet the specific demands of your project, ensuring efficient waste management.",
    imageSrc: dumptrailer,
    imageAlt: "Customized dumpster rental solutions in Holiday, FL",
  },
  {
    name: "Dedication to Quality Service",
    description:
      "We focus on providing high-quality, dependable dumpster rental services, making us the top choice in Holiday, FL. Give us a call today for a free quote!",
    imageSrc: dumpstertrailerone,
    imageAlt: "Quality dumpster rental service",
  },
];

const metatitle =
  "Dumpster Rental Services Holiday, FL | Top Service & Affordable Rates";
const description =
  "Premier dumpster rental services in Holiday, FL. Offering a range of sizes, flexible scheduling, and competitive pricing to suit your project needs.";

export default function DumpsterRentalHolidayFL() {
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
        alttext="Dependable dumpster rental in Holiday, FL"
        location="Holidays Preferred"
        service="Dumpster Rental Service"
        ptag="Efficient, affordable dumpster rental services tailored to your specific needs in Holiday, FL. Ideal for any size project."
        cta="Get a Quote"
      ></Junkheader>

      <Corefeatures
        header="Dependable Dumpster Rental in Holiday"
        subheader="Perfect for Any Project"
        ptag="From home renovations to large construction sites, we have the dumpster solutions for your waste management needs."
        points={points}
      />

      <Multiblock
        header="TRUSTED BY HOLIDAY RESIDENTS"
        ptag="Join countless satisfied customers in Holiday, FL who rely on us for their dumpster rental needs."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Dumpster Projects in Holiday, FL"
        ptag="Explore our range of dumpsters, each designed to cater to different project types and sizes in Holiday, FL."
      />
      <Reviews />

      <Otherservices
        header="Your Dumpster Rental Experts"
        subheader="Beyond Dumpster Rentals"
        ptag="Check out our full suite of waste management services, including junk removal, recycling, and more."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
