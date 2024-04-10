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
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import yardWasteImage from "../../public/mattress-disposal.png"; // Replace with your image path
import yardwasteremoval from "../../public/yard-waste-removal.png";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumptrailers from "../../public/dump-trailers.png";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

const points = [
  {
    name: "Efficient Yard Waste Removal",
    description:
      "Professionally remove leaves, branches, and other yard debris quickly and efficiently, keeping your property clean and tidy.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Affordable Pricing",
    description:
      "Get top-quality yard waste removal services at competitive prices, with transparent, upfront costs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "We prioritize environmentally responsible disposal methods, including composting and recycling of yard waste.",
    icon: TrashIcon,
  },
  {
    name: "Convenient Scheduling",
    description:
      "Choose a pickup time that fits your schedule. We offer flexible options to make yard waste removal hassle-free.",
    icon: TruckIcon,
  },
];

const faqs = [
  {
    question: "What types of yard waste can you remove?",
    answer:
      "We handle all types of yard waste, including leaves, branches, grass clippings, and garden debris. Contact us for specific inquiries.",
    items: [],
  },
  {
    question: "How do you dispose of the yard waste?",
    answer:
      "Yard waste is typically taken to a composting facility or recycled into mulch. We ensure all disposal methods are environmentally responsible.",
    items: [],
  },
  {
    question: "How much does yard waste removal cost?",
    answer:
      "Pricing depends on the volume and type of waste. We offer free estimates to provide you with an accurate quote for your specific needs.",
    items: [],
  },
  {
    question: "Do I need to be home for yard waste pickup?",
    answer:
      "Not necessarily. As long as we have access to the waste and it's clearly marked or piled, we can pick it up without you being present.",
    items: [],
  },
  {
    question: "Can you remove large branches or trees?",
    answer:
      "We can handle branches and smaller trees. For very large trees or hazardous situations, we may need to assess and prepare accordingly.",
    items: [],
  },
  {
    question: "How often can you come for yard waste removal?",
    answer:
      "We offer both one-time pickups and regular scheduled services to fit your landscaping and gardening needs.",
    items: [],
  },
];

const features = [
  {
    name: "Streamlined Yard Waste Removal",
    description:
      "Our process is designed to be quick and efficient, minimizing disruption to your daily routine and keeping your yard pristine.",
    imageSrc: dumpsterrental,
    imageAlt: "Streamlined yard waste removal",
  },
  {
    name: "Dedicated to Sustainability",
    description:
      "Sustainability is at the heart of our service. We aim to minimize waste and maximize recycling and composting of yard debris.",
    imageSrc: dumptrailers,
    imageAlt: "Sustainable yard waste disposal",
  },
];

const metatitle = "Yard Waste Removal Services | Clean & Green";
const description =
  "Professional yard waste removal services to keep your lawn clean and healthy. Eco-friendly and efficient, we handle all types of yard debris. Contact us!";

export default function YardWasteRemoval() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={yardwasteremoval}
        alttext="Yard waste removal service"
        location="Efficient and Eco-Friendly"
        service="Yard Waste Removal"
        ptag="Keep your yard clean and contribute to a healthier environment with our comprehensive yard waste removal services."
        cta="Get a Free Estimate"
      ></Junkheader>

      <Corefeatures
        header="Expert Yard Waste Removal"
        subheader="Clean Yards, Healthy Environment"
        ptag="From seasonal cleanups to regular yard maintenance, our team is equipped to handle all your yard waste needs efficiently and responsibly."
        points={points}
      />

      <Multiblock
        header="COMMITTED TO YOUR YARD'S WELLBEING"
        ptag="Our dedicated team ensures that every piece of yard waste is properly handled, offering you a complete, worry-free service."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Before and After Yard Cleanup"
        ptag="View our gallery to see the transformative effect of professional yard waste removal on properties just like yours."
      />
      {/* <Reviews /> */}
      <Testimonialsection />
      <Otherservices
        header="Comprehensive Property Clean-Up"
        subheader="Beyond Yard Waste"
        ptag="Explore our full range of services, including junk removal and property cleanouts, for a complete solution to your cleanup needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Contact us for yard waste removal" />
    </>
  );
}
