import dumpsterrental from "../../public/dumpsterrental.png";
import junktrailer from "../../public/junk-trailer.png";
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
  ClockIcon,
  CurrencyDollarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

const points = [
  {
    name: "Fast and Reliable Junk Pick Up",
    description:
      "We offer quick and efficient junk pick up services to keep your space clutter-free.",
    icon: TruckIcon,
  },
  {
    name: "Affordable Rates",
    description:
      "Our junk pick up services are priced competitively, ensuring you get the best value for your clean-up needs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "We prioritize the environment by ensuring responsible disposal and recycling of junk whenever possible.",
    icon: TrashIcon,
  },
  {
    name: "Convenient Scheduling",
    description:
      "Book our junk pick up service at a time that suits you. We work around your schedule for maximum convenience.",
    icon: ClockIcon,
  },
];

const faqs = [
  {
    question: "What items can you pick up?",
    answer:
      "We can pick up a variety of junk items, including furniture, appliances, yard waste, and more. Contact us for specific inquiries.",
    items: [],
  },
  {
    question: "How quickly can you provide junk pick up services?",
    answer:
      "We strive to provide prompt services, often offering same-day or next-day pick ups based on availability.",
    items: [],
  },
  {
    question: "How is the cost for junk pick up determined?",
    answer:
      "Pricing is based on the volume and type of junk to be picked up. We offer transparent pricing with no hidden fees.",
    items: [],
  },
  {
    question: "Do you recycle the junk you pick up?",
    answer:
      "Yes, we are committed to recycling and donating items whenever possible as part of our eco-friendly approach.",
    items: [],
  },
  {
    question: "Do I need to prepare the junk for pick up?",
    answer:
      "For efficient service, we recommend grouping items together if possible. However, we can assist in gathering items upon arrival.",
    items: [],
  },
  {
    question: "Are you licensed and insured for junk pick up?",
    answer:
      "Absolutely. We are fully licensed and insured, ensuring a professional and secure junk pick up service.",
    items: [],
  },
];

const features = [
  {
    name: "Comprehensive Junk Removal",
    description:
      "From small items to large debris, our team handles all aspects of junk removal, ensuring a thorough clean-up.",
    imageSrc: junktrailer,
    imageAlt: "Comprehensive junk pick up service",
  },
  {
    name: "Professional and Friendly Team",
    description:
      "Our team is not only skilled in efficient junk removal but also prides itself on providing friendly and courteous service.",
    imageSrc: dumpsterrental,
    imageAlt: "Professional junk pick up team",
  },
];

const metatitle = "Efficient Junk Pick Up Services | Quick & Eco-Friendly";
const description =
  "Need a junk pick up service? Our team offers fast, reliable, and eco-friendly junk removal solutions. Contact us for hassle-free junk pick up.";

export default function JunkPickUp() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumpstertrailer}
        alttext="Efficient junk pick up service"
        location="Quick and Reliable"
        service="Junk Pick Up"
        ptag="Declutter your space effortlessly with our professional junk pick up services. We handle the heavy lifting and proper disposal."
        cta="Schedule Pick Up"
      ></Junkheader>

      <Corefeatures
        header="Junk Pick Up Made Easy"
        subheader="Fast, Reliable, and Environmentally Responsible"
        ptag="Our experienced team provides efficient junk pick up services, ensuring a clean and tidy space in no time."
        points={points}
      />

      <Multiblock
        header="YOUR TRUSTED JUNK REMOVAL EXPERTS"
        ptag="Rely on our expertise for all your junk pick up needs. We ensure a smooth and hassle-free service from start to finish."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Before and After: Junk Pick Up Transformations"
        ptag="Check out our gallery to see the impressive transformations we've achieved through our junk pick up services."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="More Than Just Junk Pick Up"
        subheader="Full-Spectrum Clean-Up Solutions"
        ptag="In addition to junk pick up, discover our range of services including dumpster rental, property clean-outs, and more."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Contact us for junk pick up" />
    </>
  );
}
