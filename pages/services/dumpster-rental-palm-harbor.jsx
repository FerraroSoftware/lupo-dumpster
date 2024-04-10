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

import dumpstertrailer from "../../public/dumpster-trailer-1.png";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumpstertrailerone from "../../public/dumpster-trailer-1.png";
import dumptrailer from "../../public/dump-trailer.png";
import Testimonialsection from "../../components/Testimonialsection";
import Contactwhite from "../../components/Contactwhite";

const points = [
  {
    name: "Various Dumpster Sizes Available",
    description:
      "Choose from a range of dumpster sizes, ideal for both small home renovations and large construction projects in Palm Harbor.",
    icon: TruckIcon,
  },
  {
    name: "Timely Delivery and Pickup",
    description:
      "Experience punctual and efficient delivery and pickup services, ensuring your project remains on track.",
    icon: ClockIcon,
  },
  {
    name: "Locally Owned Business",
    description:
      "Our local roots in Palm Harbor mean personalized service and a deep understanding of the community’s needs.",
    icon: UsersIcon,
  },
  {
    name: "Straightforward Pricing",
    description:
      "We offer clear and competitive pricing without any hidden fees, fitting various budgets and project sizes.",
    icon: CurrencyDollarIcon,
  },
];

const faqs = [
  {
    question: "What dumpster sizes do you offer in Palm Harbor?",
    answer:
      "Our range includes various sizes to cater to different project needs. Whether it’s a 10-yard or a 20-yard dumpster, we have the right size for you.",
    items: [],
  },
  {
    question: "How can I rent a dumpster in Palm Harbor?",
    answer:
      "Renting a dumpster is easy. Contact us with your project details, and we’ll help you select the right size and schedule delivery.",
    items: [],
  },
  {
    question: "What are the rental rates for dumpsters in Palm Harbor?",
    answer:
      "Our rates are based on dumpster size and rental duration. Contact us for an accurate quote tailored to your specific requirements.",
    items: [],
  },
  {
    question: "Is it possible to extend the rental period?",
    answer:
      "Absolutely! If you need the dumpster longer, simply let us know in advance to rearrange the rental period.",
    items: [],
  },
  {
    question: "Do you provide emergency or same-day dumpster services?",
    answer:
      "Depending on availability, we strive to accommodate emergency and same-day service requests. It’s best to schedule as early as possible.",
    items: [],
  },
  {
    question: "What items are not allowed in the rented dumpster?",
    answer:
      "Generally, hazardous materials, certain electronics, and flammable items are prohibited. We’ll provide a detailed list upon rental.",
    items: [],
  },
];

const features = [
  {
    name: "Efficient and Reliable Dumpster Services",
    description:
      "Our services in Palm Harbor are marked by efficiency and reliability, making us the preferred choice for local dumpster rentals.",
    imageSrc: dumpstertrailerone,
    imageAlt: "Efficient dumpster service in Palm Harbor",
  },
  {
    name: "Customer-Centric Approach",
    description:
      "We prioritize customer satisfaction, offering flexible rental terms and dedicated support throughout your rental period.",
    imageSrc: dumptrailer,
    imageAlt: "Customer-focused dumpster rental in Palm Harbor",
  },
];

const metatitle = "Palm Harbor Dumpster Rental | Fast & Affordable | Call Now";
const description =
  "Leading dumpster rental services in Palm Harbor. Offering a range of sizes, timely delivery, and affordable rates for your project needs.";

export default function DumpsterRentalPalmHarbor() {
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
        alttext="Reliable dumpster rental in Palm Harbor"
        location="Palm Harbor's Premier"
        service="Dumpster Rental"
        ptag="Discover efficient and affordable dumpster rental solutions in Palm Harbor, tailored to fit any project requirement."
        cta="Rent a Dumpster"
      ></Junkheader>

      <Corefeatures
        header="Your Go-To Dumpster Rental in Palm Harbor"
        subheader="Convenience and Reliability Combined"
        ptag="Select from a variety of dumpster sizes and enjoy our dependable service for a hassle-free project experience."
        points={points}
      />

      <Multiblock
        header="DEDICATED TO YOUR PROJECT'S SUCCESS"
        ptag="Our commitment to timely service and customer satisfaction ensures your project in Palm Harbor stays on track."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Our Dumpster Selection"
        ptag="Take a look at our diverse range of dumpsters, ideal for projects of all sizes in Palm Harbor."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="Complete Waste Management Solutions"
        subheader="More than Just Dumpster Rentals"
        ptag="Explore our comprehensive waste management services, including junk removal and specialized disposal options."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Rent a Dumpster in Palm Harbor Today"></Contactwhite>
    </>
  );
}
