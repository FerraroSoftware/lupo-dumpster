import dump1 from "../../public/mattress-disposal.png";
import dump2 from "../../public/mattress-removal.png";

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
  BedIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  TruckIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import mattressDisposalImage from "../../public/mattress-disposal.png"; // Replace with your image path
import mattressremovals from "../../public/mattress-removals.png";
import oldmattress from "../../public/old-mattress.png";
import Contactwhite from "../../components/Contactwhite";
import Testimonialsection from "../../components/Testimonialsection";

const points = [
  {
    name: "Professional Mattress Disposal",
    description:
      "Efficiently remove and responsibly dispose of your old mattresses with our professional service.",
    icon: TrashIcon,
  },
  {
    name: "Affordable Removal Solutions",
    description:
      "Get competitive pricing for mattress disposal, ensuring quality service at great value. Call for a free quote.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Disposal Options",
    description:
      "We prioritize the environment by recycling or donating mattresses whenever possible. Let us remove your mattress.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Hassle-Free Service",
    description:
      "Enjoy a stress-free experience with our quick and reliable mattress removal services. Give us a call today!",
    icon: TruckIcon,
  },
];

const faqs = [
  {
    question: "How do I schedule a mattress disposal?",
    answer:
      "Contact us to set up a convenient pickup time. Our team will handle the rest, from removal to disposal.",
    items: [],
  },
  {
    question: "What happens to the mattress after removal?",
    answer:
      "Mattresses are evaluated for recycling or donation. If neither is feasible, they are disposed of in the most environmentally responsible way possible.",
    items: [],
  },
  {
    question: "Can you dispose of any type of mattress?",
    answer:
      "We handle most types of mattresses, including innerspring, foam, and box springs. Contact us with specific questions about your mattress.",
    items: [],
  },
  {
    question: "Is same-day mattress disposal available?",
    answer:
      "Depending on availability, we often offer same-day or next-day service. Reach out to confirm current scheduling options.",
    items: [],
  },
  {
    question: "How much does mattress disposal cost?",
    answer:
      "Cost varies based on location, quantity, and type of mattress. We provide transparent pricing upfront.",
    items: [],
  },
  {
    question: "Do I need to prepare the mattress before pickup?",
    answer:
      "No special preparation is needed. Just ensure the mattress is accessible for our team to remove.",
    items: [],
  },
];

const features = [
  {
    name: "Swift and Efficient Mattress Removal",
    description:
      "Our team quickly removes your old mattress, saving you time and effort.",
    imageSrc: mattressremovals,
    imageAlt: "Efficient mattress removal service",
  },
  {
    name: "Dedicated to Sustainability",
    description:
      "We're committed to reducing waste by ensuring that mattresses are recycled or donated, reducing environmental impact.",
    imageSrc: oldmattress,
    imageAlt: "Eco-friendly mattress disposal",
  },
];

const metatitle = "Mattress Disposal Services | Quick, Easy, & Eco-Friendly";
const description =
  "Need to dispose of an old mattress? Our eco-friendly mattress disposal service offers a hassle-free way to get rid of your old mattress responsibly.";

export default function MattressDisposal() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={mattressDisposalImage}
        alttext="Mattress disposal service"
        location="Easy and Eco-Friendly"
        service="Mattress Disposal"
        ptag="Get rid of your old mattress effortlessly with our professional disposal services. We ensure every mattress is handled responsibly."
        cta="Schedule Disposal"
      ></Junkheader>

      <Corefeatures
        header="Effortless Mattress Disposal"
        subheader="Responsible and Stress-Free"
        ptag="Say goodbye to your old mattress with our efficient removal and disposal service, ensuring a positive impact on the environment."
        points={points}
      />

      <Multiblock
        header="LEADING THE WAY IN RESPONSIBLE MATTRESS DISPOSAL"
        ptag="Our commitment to eco-friendly practices means your old mattress won't just end up in a landfill."
        features={features}
      ></Multiblock>

      {/* <Contacttwo /> */}
      <Imagegridclone
        header="Before and After Mattress Disposal"
        ptag="Take a look at how we've helped others clear out and responsibly dispose of their old mattresses."
      />
      {/* <Reviews /> */}
      <Testimonialsection />

      <Otherservices
        header="Complete Junk Removal Services"
        subheader="More Than Just Mattresses"
        ptag="Explore our wide range of junk removal services, including furniture, appliances, and more, for a thoroughly clean space."
      ></Otherservices>

      <Faqs faqs={faqs} />

      {/* <Contact /> */}
      <Contactwhite header="Contact us for mattress disposal" />
    </>
  );
}
