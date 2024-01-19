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
  RecycleIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const points = [
  {
    name: "Comprehensive Junk Removal",
    description:
      "Offering full-service junk removal for residential and commercial clients in Palm Harbor.",
    icon: TrashIcon,
  },
  {
    name: "Eco-Friendly Disposal",
    description:
      "We prioritize recycling and donating to minimize waste sent to landfills, ensuring an eco-friendly approach.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Affordable and Transparent Pricing",
    description:
      "Our pricing is upfront and competitive, ensuring you get the best value for high-quality junk removal services.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Fast and Reliable",
    description:
      "Our experienced team is equipped to handle quick and efficient junk removal, respecting your time and property.",
    icon: TruckIcon,
  },
];

const faqs = [
  {
    question: "What types of junk do you remove in Palm Harbor?",
    answer:
      "We can remove a wide range of items, including furniture, appliances, yard waste, and construction debris. Contact us for specific inquiries.",
    items: [],
  },
  {
    question: "How does the junk removal process work?",
    answer:
      "Simply schedule a pickup time, and our team will come to remove the junk from your property. We handle all the heavy lifting and disposal.",
    items: [],
  },
  {
    question: "Is your junk removal service eco-friendly?",
    answer:
      "Yes, we make every effort to recycle or donate items whenever possible, reducing the environmental impact.",
    items: [],
  },
  {
    question: "What is the cost for junk removal in Palm Harbor?",
    answer:
      "Costs vary based on the amount and type of junk. We provide free, no-obligation estimates for our services.",
    items: [],
  },
  {
    question: "Can you do same-day junk removal?",
    answer:
      "Depending on availability, we often offer same-day service. Contact us to check our current schedule.",
    items: [],
  },
  {
    question: "Do I need to prepare anything before your arrival?",
    answer:
      "For a quicker process, having your junk gathered in one area helps, but it's not required. We can collect items from where they sit.",
    items: [],
  },
];

const features = [
  {
    name: "Professional Junk Removal",
    description:
      "Our team is trained and equipped to handle all types of junk removal jobs with professionalism and care.",
    imageSrc: junkremoving,
    imageAlt: "Professional junk removal in Palm Harbor",
  },
  {
    name: "Dedicated to Customer Satisfaction",
    description:
      "We strive to exceed expectations, providing reliable and courteous service tailored to your needs.",
    imageSrc: dumpsterrental,
    imageAlt: "Satisfied customers in Palm Harbor",
  },
];

const metatitle =
  "Palm Harbor Junk Removal | Fast and Affordable | Lupo Dumpster";
const description =
  "Expert junk removal services in Palm Harbor. We offer eco-friendly disposal and competitive pricing for a clean and clutter-free environment.";

export default function JunkRemovalPalmHarbor() {
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
        alttext="Junk removal service in Palm Harbor"
        location="Palm Harbor's Top Choice"
        service="Junk Removal"
        ptag="Efficient, eco-friendly junk removal services tailored to your needs in Palm Harbor. Let us help you declutter responsibly!"
        cta="Schedule a Pickup"
      ></Junkheader>

      <Corefeatures
        header="Expert Junk Removal in Palm Harbor"
        subheader="Reliable, Family Owned, and Affordable"
        ptag="From household clutter to commercial waste, we manage all your junk removal needs with an environmentally responsible approach."
        points={points}
      />

      <Multiblock
        header="YOUR PARTNER IN RESPONSIBLE DISPOSAL"
        ptag="Experience the ease of junk removal with our commitment to sustainability and community well-being in Palm Harbor."
        features={features}
      ></Multiblock>

      <Contacttwo />
      <Imagegridclone
        header="Before and After Junk Removal"
        ptag="See the transformative impact of our junk removal services on homes and businesses in Palm Harbor."
      />
      <Reviews />

      <Otherservices
        header="Comprehensive Removal Solutions"
        subheader="More Than Just Junk"
        ptag="Explore our range of services, including specialized disposal, recycling, and more for complete waste management solutions."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <Contact />
    </>
  );
}
