import React from "react";
import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  ChevronDoubleRightIcon,
  GlobeAmericasIcon,
  TrashIcon,
  ChevronDownIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";
import Twentyyard from "../../components/Twentyyard";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import jordan from "../../public/jordan.png";
import Head from "next/head";
import Reviews from "../../components/Reviews";
import Junkcost from "../../components/Junkcost";
import Contacttwo from "../../components/Contacttwo";
import Imagegrid from "../../components/Imagegrid";
import Mission from "../../components/Mission";
import Junkheader from "../../components/Junkheader";
import junktrailer from "../../public/junk-trailer.png";
import Multiblock from "../../components/Multiblock";

import dumpsterrental from "../../public/dumpsterrental.png";
import junkremovals from "../../public/junkremoval.jpg";
import Corefeatures from "../../components/Corefeatures";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";
import trashremoval1 from "../../public/trash-removal-1.png";
import Otherservices from "../../components/Otherservices";
import trashremoval2 from "../../public/trash-removal-2.png";
import Faqs from "../../components/Faqs";
import NewPricingtwo from "../../components/NewPricingtwo";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      "We pride ourselves on providing prompt and reliable delivery and pick-up service, so you can stay on schedule with your project. Contact us today to schedule your junk removal.",

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
    question: "What items can you haul away?",
    answer:
      "We haul away a wide variety of junk items, including furniture, appliances, yard waste, and construction debris. Contact us to confirm if your specific item can be taken.",
    items: [],
  },
  {
    question: "How does the junk removal process work?",
    answer:
      "Simply schedule a pickup time that's convenient for you, and our team will come to your location to remove your junk. We handle the heavy lifting, hauling, and proper disposal.",
    items: [],
  },
  {
    question: "Do you recycle the junk you haul away?",
    answer:
      "Sustainability is a priority for us. We make every effort to recycle or donate items whenever possible to minimize waste in landfills.",
    items: [],
  },
  {
    question: "Can I get an estimate for my junk haul away service?",
    answer:
      "Absolutely! Call us or fill out our online form, and we'll provide you with a free, no-obligation estimate for your junk removal needs.",
    items: [],
  },
  {
    question: "How quickly can you come out to haul away my junk?",
    answer:
      "We pride ourselves on prompt service and can often provide same-day or next-day service to haul away your junk efficiently.",
    items: [],
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured, providing you with peace of mind when using our services. Our license and insurance number is L20000153106.",
    items: [],
  },
];

const features = [
  {
    name: "Quick and Convenient Junk Hauling",
    description:
      "Need to clear out space fast? Our team excels in quick and convenient junk hauling, ensuring that your space is decluttered in no time. Book with us and experience swift service.",
    imageSrc: trashremoval2,
    imageAlt: "Quick junk hauling service in action",
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "With us, you can rest easy knowing that your junk is disposed of responsibly. We are committed to eco-friendly practices, recycling, and donating items whenever possible.",
    imageSrc: junkremovals,
    imageAlt: "Eco-friendly junk disposal",
  },
];

const metatitle =
  "Efficient Haul Away Junk Removal | Eco-Friendly Disposal | Get a Free Quote";
const description =
  "Looking for 'junk hauling near me'? Our team provides efficient and eco-friendly 'haul away junk' services. Call now for a quick estimate and let us take the hassle out of junk removal.";

export default function junkremoval() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={trashremoval1}
        alttext="Haul away junk removal service truck"
        location="Your Trusted"
        service="Junk Hauling Experts"
        ptag="From old furniture to renovation debris, we haul junk away quickly and responsibly. Get your free quote today!"
        cta="Schedule Junk Pickup"
      ></Junkheader>

      <Corefeatures
        header="Professional Junk Hauling in New Port Richey"
        subheader="Reliable and Sustainable Junk Removal Services"
        ptag="Join our New Port Richey customers in choosing a greener way to get rid of your junk. Our team ensures efficient, eco-conscious 'haul away junk removal' services."
        points={points}
      />

      <Multiblock
        header="YOUR GO-TO JUNK HAULERS"
        ptag="We're not just any 'junk hauler near me'—we are committed to excellence in every aspect of our service. Whether it's a single item or a full cleanout, we're ready to help."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegrid />
      {/* <Reviews /> */}
      <Testimonialsection />

      {/* items */}
      <Otherservices
        header="Junk Removal Solutions"
        subheader="We Haul Junk "
        ptag="Our mission to serve the community with integrity and dedication. Let's keep Pasco County clean together!"
      ></Otherservices>

      <Junkcost></Junkcost>

      {/* faq */}
      <Faqs faqs={faqs}></Faqs>

      {/* <Contact></Contact> */}
      <Contactwhite header="Contact us for junk hauling"></Contactwhite>
    </>
  );
}
