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
import Otherservices from "../../components/Otherservices";
import NewPricingtwo from "../../components/NewPricingtwo";
import Testimonialsection from "../../components/Testimonialsection";
import Contactwhite from "../../components/Contactwhite";

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
    question: "How much does junk removal cost?",
    answer:
      "Our rates start at $75. The rate will increase depending on the amount of items you have and the distance of travel. Give us a call to get a free quote today. Another option is to rent a dumpster trailer. The cost of renting a dumpster can vary depending on several factors, such as dumpster size, rental period, location, and additional services.",
    items: [],
  },
  {
    question: "What items can be removed with junk removal services?",
    answer:
      "Junk removal services can remove a wide variety of items, including household items, appliances, furniture, electronics, construction debris, yard waste, and more.",
    items: [],
  },
  {
    question: "Can I schedule a junk removal service on the same day?",
    answer:
      "We offer same day services in Pasco, and surrounding areas. This is contingent on distance, time of request for trailer and availability.",
    items: [],
  },
  {
    question: "Are there any items that your service can't remove?",
    answer:
      "Generally, we will not accept hazardous materials, such as chemicals, paint, and asbestos.",
    items: [],
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes we are! Our license and insurance number is L20000153106.",
    items: [],
  },
  {
    question: "How do I prepare for a junk removal service?",
    answer:
      "You can prepare for a junk removal service by separating items that you want removed, clearing a path to the items, and making sure that the items are easy to access.",
    items: [],
  },
];

const features = [
  {
    name: "Efficient and Reliable Junk Removal",
    description:
      "Our team provides fast, reliable junk removal services that cater to your busy schedule. With us, decluttering your space is hassle-free. Call now for a quick, no-obligation estimate.",
    imageSrc: junkremovals,
    imageAlt: "Professional team removing junk",
  },
  {
    name: "Comprehensive Junk Removal for Every Need",
    description:
      "From residential to commercial, small-scale to large, we handle all forms of junk removal with efficiency and care. Discover a cleaner space today with our expert services.",
    imageSrc: dumpstertrailer1,
    imageAlt: "Diverse junk items ready for removal",
  },
];
export default function junkremoval() {
  return (
    <>
      <Head>
        <title>
          Expert Junk Removal Pasco County | Trash Disposal | Call Now
        </title>
        <meta
          name="description"
          content="Cluttered space? Let us take care of it. Our professional and hassle-free junk removal services in Pasco, FL will leave your space clean and organized."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={dumpsterrental}
        alttext="junk removal"
        location="Fast and Reliable"
        service="Junk Removal Service"
        ptag="Experience unparalleled professionalism and efficiency with our premier junk removal service, catering to all your disposal needs responsibly."
        cta="Request Junk Removal"
      ></Junkheader>

      <Corefeatures
        header="Junk Removal Pros"
        subheader="Efficient and Eco-Friendly Junk Removal Services"
        ptag="Reduce Your Carbon Footprint with Our Sustainable Junk Removal Services Near You."
        points={points}
      />

      <Multiblock
        header="YOUR LOCAL JUNK REMOVAL TEAM"
        ptag="Discover the benefits that make our services stand out. Quality, reliability, and sustainability are the pillars of our exceptional service offerings."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegrid />
      {/* <Reviews /> */}
      <Testimonialsection></Testimonialsection>

      {/* items */}
      <Otherservices
        header="Everything you need"
        subheader="We Take Care of Your Waste"
        ptag="We specialize in proper disposal methods to minimize our impact on the environment. Call us today, and let us take care of your waste worries!"
      ></Otherservices>

      {/* <Junkcost></Junkcost> */}

      {/* faq */}
      <div className="bg-white py-16 " id="faq">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-wide text-black sm:text-4xl uppercase">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq, key) => (
                <div
                  key={key}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-black uppercase md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-900">{faq.answer}</p>
                    <ul className="list-disc pl-4">
                      {faq.items.map((item, key) => (
                        <li key={key} className="text-base text-gray-900">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* <Contact></Contact> */}
      <Contactwhite header="Contact us for junk removal"></Contactwhite>
    </>
  );
}
