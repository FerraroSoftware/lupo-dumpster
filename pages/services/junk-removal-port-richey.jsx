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
import dumpsterrental from "../../public/dumpsterrental.png";
import junkremoving from "../../public/junkremoval.png";
import Head from "next/head";

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
      "We pride ourselves on providing prompt and reliable delivery and pick-up service, so you can stay on schedule with your project. Contact us today to schedule your dumpster rental.",

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
    question: "What items can be removed with junk removal services?",
    answer:
      "Junk removal services can remove a wide variety of items, including household items, appliances, furniture, electronics, construction debris, yard waste, and more.",
    items: [],
  },
  {
    question: "Can I schedule a junk removal service on the same day?",
    answer:
      "We offer same day services in Port Richey, and surrounding areas. This is contingent on distance, time of request for trailer and availability. It's best to check with us to see if they offer same-day service and if it's available in your area.",
    items: [],
  },
  {
    question: "How much does junk removal cost?",
    answer:
      "This will depend on the types of items you have. Give us a call to get a free quote today. Another option is to rent a dumpster trailer. The cost of renting a dumpster can vary depending on several factors, such as dumpster size, rental period, location, and additional services.",
    items: [],
  },
  {
    question: "Do you recycle or donate items during the removal process?",
    answer:
      "Yes we do! We do take items to the Port Richey recycling center and donate items to local charities.",
    items: [],
  },
  {
    question:
      "Are there any items that your junk removal service can't remove?",
    answer:
      "Generally, we will not accept hazardous materials, such as chemicals, paint, and asbestos.",
    items: [],
  },
  {
    question: "Are you licensed and insured for junk removal?",
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
    name: "Home appliance recycling",
    description:
      "Get rid of your old refrigerators, washing machines, dryers, ovens, dishwashers, and air conditioners.",
    link: "/services/appliance-removal-new-port-richey-fl",
  },
  {
    name: "Construction Debris",
    link: "/services/construction-debris-removal-new-port-richey-fl",
    description:
      "Maintain the safety of the construction property by removing leaves, branches, and other debris.",
  },

  {
    name: "Dumpster Rental",
    link: "/services/dumpster-rental-new-port-richey-fl",
    description:
      "Rent a dumpster to get rid of your old appliances, furniture, and other household items.",
  },
  {
    name: "Garage Cleaning",
    link: "/services/garage-cleaning-service-new-port-richey-fl",
    description:
      "Call us to declutter your garage and make more room at the house. Enjoy the extra space you have now.",
  },
  {
    name: "Mattress Disposal",
    link: "/services/mattress-disposal",
    description:
      "Get rid of your old mattress and prevent the spread of allergens and other harmful organisms.",
  },
  {
    name: "Junk Removal",
    link: "/services/junk-removal-new-port-richey-fl",
    description:
      "Get rid of your old appliances, furniture, and other household items.",
  },
  // {
  //   name: "Home furniture removal",
  //   description:
  //     "Get rid of old furniture, to declutter and free up space in the home. Make room for the new stuff.",
  // },
  // {
  //   name: "Mattress removal and disposal",
  //   description:
  //     "Get rid of old, worn-out, or unwanted mattresses, and to prevent the spread of allergens, and other harmful organisms.",
  // },
  // {
  //   name: "Scarp metal pick up and recycling",
  //   description:
  //     "Conserve natural resources by reusing metals, reduces energy consumption and pollution.",
  // },
  // {
  //   name: "Garage cleanup",
  //   description:
  //     "Create more space, declutter, and organize the area to make it more functional and efficient.",
  // },
  // {
  //   name: "Hotub cleanup",
  //   description:
  //     "Get rid of your old hot tubs, to declutter and make more room at the house. Enjoy the extra space you have now.",
  // },
  // {
  //   name: "Basement cleanup",
  //   description:
  //     "Create a safe, organized and functional space, by removing any unwanted items, clutter, and hazardous materials.",
  // },
  // {
  //   name: "Yard Waste",
  //   description:
  //     "Maintain the aesthetics and safety of the property by removing leaves, branches, and other debris.",
  // },
];
export default function junkremoval() {
  return (
    <>
      <Head>
        <title>Junk Removal Port Richey | Trash Disposal | Call Now</title>
        <meta
          name="description"
          content="Cluttered space? Let us take care of it. Our professional and hassle-free junk removal services in Port Richey, FL will leave your space clean and organized."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Say Goodbye to Clutter and Hello to a Cleaner Space with Our Junk
              Removal
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg font-normal text-gray-400">
              Professional and Efficient Junk Removal Services in Port Richey
              for Your Home or Business in Port Richey, FL
            </p>
          </div>
        </div>
      </div>

      {/* pic sections */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-700">
                    <TrashIcon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Efficient and Affordable Junk Removal for Your Home or
                    Business in Port Richey
                  </h2>
                  <p className="mt-4 text-lg text-gray-400">
                    Lupo dumpster rentals is near you in Port Richey to remove
                    your junk. We offer affordable solutions for removing your
                    junk. We handle almost any item, including furniture,
                    refrigerators, and more. Give us a quick call to confirm. We
                    are ready to dispose of your waste the same day you call,
                    giving you a more organized space. Call us now! Let us help
                    clean up your trash.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex px-4 py-1.5  leading-7  shadow-sm ring-1 ring-red-600 
                      text-base font-medium text-white transition-all duration-200 bg-red-700 border border-transparent rounded-md hover:bg-red-500 focus:outline-none"
                    >
                      Book Trailer Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-400">
                      &ldquo;Alex and his crew are the best in the business.
                      They show up on time (even day of) and tackle any job I
                      throw at them. Very professional and hard working
                      team.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-6 w-6 rounded-full"
                          src={jordan}
                          alt="testimonial"
                        />
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        Jordan Selders
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={dumpsterrental}
                  alt="junk removal"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-700">
                    <GlobeAmericasIcon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Hassle-Free Junk Removal Services in Port Richey, FL
                  </h2>
                  <p className="mt-4 text-lg text-gray-400">
                    Experience transforming your living or working environment
                    with our exceptional junk removal services. Bid farewell to
                    disorderly spaces and say hello to a more organized home or
                    business. Our team of proficient specialists in Port Richey
                    is ready to handle all the lifting, hauling, and disposal of
                    your unwanted belongings. We can clean a single room,
                    garage, house, or commercial space with the utmost
                    efficiency and affordability. Schedule your junk removal
                    with us today and witness the remarkable difference for
                    yourself.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex  px-4 py-1.5 leading-7  shadow-sm ring-1  hover:ring-red-700
                      ring-red-600 
                      text-base font-medium text-white transition-all duration-200 bg-red-700 border border-transparent rounded-md hover:bg-red-500 focus:outline-none"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={junkremoving}
                  alt="junk removal services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Testimonials></Testimonials> */}
      {/*points  */}
      <div className=" py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-red-600">
              Junk Removal Port Richey
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
              Efficient and Eco-Friendly Junk Removal: We Recycle and Donate
              Whenever Possible
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Reduce Your Carbon Footprint with Our Sustainable Junk Removal
              Services in Port Richey, FL
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {points.map((feature, key) => (
                <div
                  key={key}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-white">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pricing></Pricing>

      {/* items */}
      <div className="">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 px-6  lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 ">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">
              Everything you need
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white">
              We Take Care of Your Waste
            </p>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Are you looking for a reliable and environmentally conscious waste
              management solution? Look no further! We specialize in proper
              disposal methods to minimize our impact on the environment. From
              one-time cleanouts to ongoing services, we{"'"}ve got you covered.
              Call us today, and let us take care of your waste worries!
            </p>
          </div>
          <div className="mt-20 lg:col-span-2 lg:mt-0">
            <dl className="grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
              {features.map((feature, key) => (
                <div key={key} className="relative">
                  <dt>
                    <ChevronDoubleRightIcon
                      className="absolute mt-1 h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                    <Link
                      className="ml-10 text-lg font-semibold leading-8 text-white hover:text-red-600"
                      href={feature.link}
                    >
                      {feature.name}
                    </Link>
                  </dt>
                  <dd className="mt-2 ml-10 text-base leading-7 text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* call to action */}
      {/* <div className="bg-lightgray">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#14120E] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#dc2626" />
                  <stop offset={1} stopColor="#dc2626" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don{"'"}t let your junk take over. Rent a dumpster today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Efficient clutter disposal in Port Richey with our dumpster
                rental services. Rent one today and experience the convenience
                and peace of mind.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-4 py-1.5  text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Rent a dumpster
                </a>
                <a
                  href="#faq"
                  className="text-base font-semibold leading-7 text-white"
                >
                  Learn more <span aria-hidden="true">???</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[56rem] lg:max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="/dump1.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* faq */}
      <div className="bg-lightgray py-16 " id="faq">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq, key) => (
                <div
                  key={key}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                    <ul className="list-disc pl-4">
                      {faq.items.map((item, key) => (
                        <li key={key} className="text-base text-gray-600">
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

      <Contact></Contact>
    </>
  );
}
