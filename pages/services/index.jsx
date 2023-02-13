import React from "react";
import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";
import Twentyyard from "../../components/Twentyyard";
import Link from "next/link";
import vitina from "../../public/vitina-stevens.png";
import Image from "next/image";
import junkremoval from "../../public/junkremoval.png";
import dumpsterrental from "../../public/dumpsterrental.png";
import appliances from "../../public/appliances.png";
import Head from "next/head";
import dominique from "../../public/dominique.png";
import review from "../../public/review.png";
import wastemanagement from "../../public/waste-management.png";
import cleanoutservice from "../../public/garage-clean-out-service.png";
import constructiondebris from "../../public/construction-debris.png";
import hoardingservices from "../../public/hoarding-services.png";

const servicelist = [
  {
    name: "Dumpster Rental",
    description: "Design System",
    image: dumpsterrental,
    link: "/services/dumpster-rental-new-port-richey-fl",
    alttext: "Dumpster Rental",
  },
  {
    name: "Junk Removal & Recycling",
    description: "Design System",
    image: junkremoval,
    link: "/services/junk-removal-new-port-richey-fl",
    alttext: "Junk Removal & Recycling",
  },
  {
    name: "Garage Cleaning Service",
    description: "Design System",
    image: cleanoutservice,
    link: "/services/garage-cleaning-service-new-port-richey-fl",
    alttext: "Garage Cleaning Service",
  },
  {
    name: "Hoarding Cleanup & Removal",
    description: "Design System",
    image: hoardingservices,
    link: "/services/hoarding-cleanup-new-port-richey-fl",
    alttext: "Hoarding Cleanup",
  },
  // {
  //   name: "Basement Cleanout",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Estate Cleanout",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Attic & crawl space cleanout",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Office Furniture Removal",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Electronic Recycling",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Storage Unit Cleanout Services",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Storm Recovery",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
];

const pickupitems = [
  {
    name: "Appliances",
    description: "Design System",
    image: appliances,
    alttext: "Appliances",
    link: "/services/appliance-removal-new-port-richey-fl",
  },
  // {
  //   name: "Carpet",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  {
    name: "Construction Debris Removal",
    description: "Design System",
    image: constructiondebris,
    link: "/services/construction-debris-removal-new-port-richey-fl",
    alttext: "Construction Debris Removal",
  },
  // {
  //   name: "Electronics",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Exercise Equipment",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Hot Tubs",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Furniture",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Paint Disposal",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Pianos",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Scrap Metal",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Yard Waste",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Mattresses",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "TV Disposal",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Trash Pick Up",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
  // {
  //   name: "Storage Shed",
  //   description: "Design System",
  //   image: "/waste-management.png",
  // },
];

export default function services() {
  return (
    <>
      <Head>
        <title>
          Lupo Dumpster Rentals | Affordable and Reliable Waste Services
        </title>
        <meta
          name="description"
          content="Looking for a dumpster rental service that won't break the bank? Lupo Dumpster Rentals offers affordable and reliable waste removal services for your next project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <Image
                className="w-full rounded-md"
                src={wastemanagement}
                alt="waste management"
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-red-600 sm:text-4xl">
                        5+
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        Years <br />
                        of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  className="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div> */}
              <h1 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Waste Management Services
              </h1>
              <p className="mt-6 leading-relaxed  text-lg font-normal text-gray-400">
                With Lupo Dumpster Rentals, you can rest assured that your waste
                management needs will be taken care of quickly and efficiently.
                Book a trailer now and experience our exceptional customer
                service and competitive pricing.
              </p>
              <a
                href="#contact"
                title=""
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none mt-9"
                role="button"
              >
                {" "}
                Book Trailer Now{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base font-semibold text-red-600">
              Eco-Friendly Junk Removal Solutions
            </p>
            {/* <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-6"> */}
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight lg:mt-6">
              JUNK REMOVAL SERVICES
            </h2>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-12 xl:gap-16 md:max-w-5xl md:grid-cols-3 sm:mt-16">
            {servicelist.map((service, index) => (
              <div className="group" key={index}>
                <a
                  href={service.link}
                  title=""
                  className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl "
                >
                  <Image
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 "
                    src={service.image}
                    alt={service.alttext}
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold text-gray-100 xl:text-xl group-hover:text-gray-300">
                  <a href={service.link} title="" className="">
                    {service.name}
                  </a>
                </h3>
                {/* <p className="mt-3 text-sm font-medium text-red-600">
                  <a href="#" title="" className="">
                    {service.description}
                  </a>
                </p> */}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center pt-10 md:pt-20">
            <p className="text-base font-semibold text-red-600">
              Quick and Reliable Junk Removal Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:mt-6">
              SAME DAY OR NEXT DAY ITEM PICK UP
            </h2>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-12 xl:gap-16 md:max-w-5xl md:grid-cols-3 sm:mt-16">
            {pickupitems.map((service, index) => (
              <div className="group" key={index}>
                <a
                  href={service.link}
                  title=""
                  className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl "
                >
                  <Image
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 "
                    src={service.image}
                    alt={service.alttext}
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold text-gray-100 xl:text-xl group-hover:text-gray-300">
                  <a href={service.link} title="" className="">
                    {service.name}
                  </a>
                </h3>
                {/* <p className="mt-3 text-sm font-medium text-red-600">
                  <a href="#" title="" className="">
                    {service.description}
                  </a>
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      {/* <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full  " src="/bg.png" alt="" />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get full access to Celebration
            </h2>
            <p className="mt-4 text-base text-gray-200">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam.
            </p>

            <form action="#" method="POST" className="mt-8 lg:mt-12">
              <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <label for="email" className="sr-only"></label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-red-700 focus:bg-red-700"
                >
                  Get instant access
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      <Twentyyard></Twentyyard>
      {/* testimonials */}
      {/* <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
              Trusted by <span className="text-red-600">30k+</span> world
              className companies & design teams
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-red-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat.”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Jenny Wilson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-red-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Robert Fox
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Founder at Brain.co
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-red-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Kristin Watson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  UX Designer at Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-12  sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-400 ">
                Lupo Dumpster Rentals
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-xl">
                Real Reviews from Real Customers - See What They Have to Say
              </h2>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  // style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-md">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 ">
                          “Alex made it extremely easy to rent. He always
                          responds back to text & checked in on us to see if all
                          was well. The dumpster was the perfect size, 20 yard,
                          and fit a whole house gutting. I would definitely
                          recommend Lupo Enterprises.”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <Image
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={vitina}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 ">
                          Vitina Stevens
                        </p>
                        <Link
                          className="mt-0.5 text-sm  text-gray-600 hover:text-red-600"
                          href="https://g.co/kgs/aQCdpQ"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          See Review
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-md">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 ">
                          “Very professional & reliable. I{"'"}ve used other
                          dumpster rentals years ago but this one was hassle
                          FREE. Thank you for making this junk removal less
                          stressful. I highly recommend Lupo Dumpster Rentals to
                          everyone.”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <Image
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={dominique}
                        alt="Dominuque Review"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 ">
                          Dominuque Parise
                        </p>
                        <Link
                          className="mt-0.5 text-sm  text-gray-600 hover:text-red-600"
                          href="https://g.co/kgs/koG496"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          See Review
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-md">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 ">
                          “Was in constant contact with these guys and they
                          allowed me extra time when I needed it.. they placed
                          it exactly where I asked and dumpster was picked up
                          when it was ready. Best price I could find in the area
                          too so I’ll work with them again for sure.”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <Image
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={review}
                        alt="Avi review"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 ">
                          Avi Levy
                        </p>
                        <Link
                          className="mt-0.5 text-sm  text-gray-600 hover:text-red-600"
                          href="https://g.co/kgs/CFdoQe"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          See Review
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing></Pricing>
      <Contact></Contact>
    </>
  );
}
