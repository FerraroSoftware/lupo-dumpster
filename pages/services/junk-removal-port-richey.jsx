import dumpsterrental from "../../public/dumpsterrental.png";
import junkremoving from "../../public/junkremoval.png";

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
  TrashIcon,
  TruckIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const points = [
  {
    name: "Comprehensive Junk Removal",
    description:
      "Offering full-service junk removal for homes and businesses in Port Richey. No job too big or small.",
    icon: TrashIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "Dedicated to sustainability, we prioritize recycling and donating, reducing landfill waste.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden fees. Get a free estimate for your junk removal needs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Fast and Reliable Service",
    description:
      "Our experienced team ensures quick and efficient junk removal, respecting your time and property.",
    icon: TruckIcon,
  },
];

const faqs = [
  {
    question: "What kinds of junk do you remove in Port Richey?",
    answer:
      "We handle various types of junk, including furniture, appliances, electronics, yard waste, and more. Please contact us for specific items.",
    items: [],
  },
  {
    question: "How does the junk removal process work?",
    answer:
      "Contact us to schedule a pickup. Our team will arrive at your location, remove the junk, and handle disposal responsibly.",
    items: [],
  },
  {
    question: "Do you offer same-day junk removal services?",
    answer:
      "Depending on availability, we strive to offer same-day or next-day service. Contact us to check our current scheduling options.",
    items: [],
  },
  {
    question: "What is the cost of junk removal in Port Richey?",
    answer:
      "Cost varies based on the volume and type of junk. We provide free, no-obligation estimates for your convenience.",
    items: [],
  },
  {
    question: "Is your junk removal service environmentally friendly?",
    answer:
      "Absolutely! We are committed to eco-friendly practices, ensuring most of the junk is recycled or donated.",
    items: [],
  },
  {
    question: "How can I prepare for the junk removal service?",
    answer:
      "For faster service, gather your junk in one accessible area, though this is not required. Our team will handle the rest.",
    items: [],
  },
];

const features = [
  {
    name: "Professional Junk Removal Solutions",
    description:
      "Our skilled professionals are equipped to handle all your junk removal challenges, providing a seamless experience.",
    imageSrc: dumpsterrental,
    imageAlt: "Professional junk removal in Port Richey",
  },
  {
    name: "Committed to Customer Satisfaction",
    description:
      "We aim to exceed your expectations with our high-quality service and customer-focused approach.",
    imageSrc: junkremoving,
    imageAlt: "Dedicated to customer satisfaction in junk removal",
  },
];

const metatitle =
  "Port Richey Junk Removal | Lupo Dumpster Rentals | Fast and Affordable";
const description =
  "Expert junk removal services in Port Richey. Fast, reliable, and eco-conscious. Contact us for a cleaner and clutter-free space.";

export default function JunkRemovalPortRichey() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={junkremoving}
        alttext="Junk removal service in Port Richey"
        location="Port Richey's Leading"
        service="Junk Removal"
        ptag="Efficient, responsible junk removal services for a clutter-free environment in Port Richey. We handle all types of junk with care."
        cta="Book a Pickup"
      ></Junkheader>

      <Corefeatures
        header="Expert Junk Removal in Port Richey"
        subheader="Reliable, Eco-Friendly, and Affordable"
        ptag="Our team ensures a hassle-free junk removal experience, with a focus on environmental sustainability and affordable solutions."
        points={points}
      />

      <Multiblock
        header="Fast and Easy Junk Removal"
        ptag="Join us in making Port Richey cleaner and more sustainable with our eco-conscious junk removal practices."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Our Impact in Port Richey"
        ptag="Explore how our junk removal services have transformed homes and businesses in Port Richey, contributing to a cleaner community."
      />
      <Reviews />

      <Otherservices
        header="Comprehensive Waste Management"
        subheader="More Than Just Junk Removal"
        ptag="Discover our full range of services, from residential cleanouts to commercial waste management, all tailored to your needs."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
