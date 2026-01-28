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
  ClockIcon,
} from "@heroicons/react/24/outline";

import mattressDisposalImage from "../../public/mattress-disposal.png"; // Replace with your image path
import mattressremovals from "../../public/mattress-removals.png";
import oldmattress from "../../public/old-mattress.png";
import RequestForm from "@/components/new/request-form";
import Testimonialsection from "../../components/Testimonialsection";

import lupobobcat from "../../public/lupo-bobcat.jpg";
import bobservicing from "../../public/bobcat-servicing.jpg";
import demolition from "../../public/demolition.jpg";

const points = [
  {
    name: "Comprehensive Bobcat Services",
    description:
      "From land clearing to excavation, our professional Bobcat services cover all your needs efficiently and safely.",
    icon: TruckIcon,
  },
  {
    name: "Affordable Rates",
    description:
      "We offer competitive pricing for all Bobcat services, ensuring you get the best value for top-quality work. Contact us for a free quote.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Eco-Friendly Solutions",
    description:
      "We prioritize eco-friendly practices by minimizing environmental impact during all our services.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Reliable and Timely Service",
    description:
      "Our team is committed to delivering timely and reliable Bobcat services, ensuring your project stays on track.",
    icon: ClockIcon,
  },
];

const faqs = [
  {
    question: "What types of Bobcat services do you offer?",
    answer:
      "We offer a wide range of services including land clearing, excavation, debris removal, concrete slab preparation, and more. Contact us for specific service inquiries.",
    items: [],
  },
  {
    question: "How do I schedule a Bobcat service?",
    answer:
      "Simply contact us to set up a convenient time for your project. We'll handle all the details from start to finish.",
    items: [],
  },
  {
    question: "Are your services environmentally friendly?",
    answer:
      "Yes, we strive to minimize environmental impact by following eco-friendly practices and recycling materials whenever possible.",
    items: [],
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we provide free, no-obligation quotes for all our services. Contact us to discuss your project and get a transparent pricing estimate.",
    items: [],
  },
  {
    question: "How long does a typical Bobcat service take?",
    answer:
      "The duration of our services varies based on the scope of the project. We provide an estimated timeline after assessing your specific needs.",
    items: [],
  },
];

const features = [
  {
    name: "Versatile Bobcat Equipment",
    description:
      "Our fleet of Bobcat equipment is versatile, capable of handling a wide range of tasks efficiently and precisely.",
    imageSrc: lupobobcat,
    imageAlt: "Versatile Bobcat equipment in action",
  },
  {
    name: "Expert Operators",
    description:
      "Our experienced operators ensure every project is completed to the highest standard, with attention to safety and detail.",
    imageSrc: demolition,
    imageAlt: "Experienced Bobcat operators at work",
  },
];

const metatitle =
  "Professional Bobcat Services | Land Clearing, Excavation & More";
const description =
  "Looking for reliable Bobcat services? Our team offers comprehensive solutions for land clearing, excavation, and more, with a focus on eco-friendly practices.";

export default function BobcatServices() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Junkheader
        image={bobservicing}
        alttext="Professional Bobcat services"
        location="Efficient and Reliable"
        service="Bobcat Services"
        ptag="Get professional Bobcat services for all your land clearing, excavation, and site preparation needs. We ensure every project is handled with precision and care."
        cta="Schedule Service"
      ></Junkheader>

      <Corefeatures
        header="Reliable Bobcat Services"
        subheader="Efficiency and Precision"
        ptag="Trust our experienced team to handle your Bobcat service needs with efficiency and precision, ensuring a smooth project from start to finish."
        points={points}
      />

      <Multiblock
        header="EXPERTS IN ALL ASPECTS OF BOBCAT SERVICES"
        ptag="Our commitment to quality and customer satisfaction makes us the top choice for Bobcat services in the region."
        features={features}
      ></Multiblock>

      {/* <Imagegridclone
        header="Our Bobcat Services in Action"
        ptag="View our portfolio of completed projects showcasing the versatility and effectiveness of our Bobcat services."
      /> */}

      <Testimonialsection />

      <Otherservices
        header="Explore Our Full Range of Services"
        subheader="More Than Just Bobcat Services"
        ptag="In addition to Bobcat services, we offer demolition, debris removal, and more to help you complete your project efficiently."
      ></Otherservices>

      <Faqs faqs={faqs} />

      <RequestForm />
    </>
  );
}
