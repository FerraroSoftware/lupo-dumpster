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
import dumptrailer from "../../public/dump-trailer.png";
import mattressremoval from "../../public/mattress-removal.png";
import furnitureremovals from "../../public/furniture-removals.png";
import junkpickup from "../../public/junk-pick-up.png";
import trashremoval from "../../public/trash-removal.png";
import yardwasteremoval from "../../public/yard-waste-removal.png";
import dumpstertrailer from "../../public/dumpster-trailer-1.png";
import debris from "../../public/constructiondebris/debris.png";
import dumptrailers from "../../public/dump-trailers.png";
import junkbefore from "../../public/junkbefore.jpg";

const servicelist = [
  {
    name: "Appliance Removal",
    description: "Design System",
    image: appliances,
    alttext: "Appliances",
    link: "/services/appliance-removal",
  },
  {
    name: "Construction Debris Removal",
    description: "Design System",
    image: debris,
    link: "/services/construction-debris-removal",
    alttext: "Construction Debris Removal",
  },
  {
    name: "Dumpster Rental",
    description: "Design System",
    image: dumpsterrental,
    link: "/services/dumpster-rental-new-port-richey-fl",
    alttext: "Dumpster Rental",
  },
  {
    name: "Dumpster Trailer Rentals",
    description: "Design System",
    image: dumptrailer,
    link: "/services/dumpster-trailer-rental",
    alttext: "Dumpster trailer rentals near you",
  },
  {
    name: "Furniture Removal",
    description:
      "Safe and efficient removal of unwanted furniture from homes or businesses.",
    image: furnitureremovals,
    link: "/services/furniture-removal",
    alttext: "Furniture removal",
  },
  {
    name: "Garage Cleaning Service",
    description: "Design System",
    image: cleanoutservice,
    link: "/services/garage-cleaning-service",
    alttext: "Garage Cleaning Service",
  },
  {
    name: "Garbage Removal Service",
    description:
      "Comprehensive service for the removal and disposal of various types of garbage from residential and commercial locations.",
    image: dumptrailers,
    link: "/services/garbage-removal-service",
    alttext: "Garbage Removal Service",
  },
  {
    name: "Haul Away Junk",
    description:
      "Professional services to remove and dispose of all types of junk from properties.",
    image: junkbefore,
    link: "/services/haul-away-junk",
    alttext: "Haul away junk",
  },
  {
    name: "Hoarding Cleanup & Removal",
    description: "Design System",
    image: hoardingservices,
    link: "/services/hoarding-cleanup",
    alttext: "Hoarding Cleanup",
  },
  {
    name: "Junk Pick Up",
    description:
      "Convenient and timely pick-up services for household or commercial junk items.",
    image: junkpickup,
    link: "/services/junk-pick-up",
    alttext: "Junk Pick Up",
  },
  {
    name: "Junk Removal & Recycling",
    description: "Design System",
    image: junkremoval,
    link: "/services/junk-removal-new-port-richey-fl",
    alttext: "Junk Removal & Recycling",
  },
  {
    name: "Mattress Disposal",
    description: "Design System",
    image: mattressremoval,
    link: "/services/mattress-disposal",
    alttext: "Mattress removal",
  },
  {
    name: "Trash Pickup",
    description:
      "Dedicated trash collection service in Pasco County, offering timely and reliable waste management solutions.",
    image: dumpstertrailer,
    link: "/services/pasco-county-trash-pickup",
    alttext: "Pasco County Trash Pickup",
  },

  {
    name: "Trash Removal",
    description:
      "Efficient removal of trash from homes, businesses, and public spaces to maintain cleanliness.",
    image: trashremoval,
    link: "/services/trash-removal",
    alttext: "Trash Removal",
  },
  {
    name: "Yard Waste Removal",
    description:
      "Eco-friendly disposal of yard debris, leaves, branches, and other green waste to maintain beautiful outdoor spaces.",
    image: yardwasteremoval,
    link: "/services/yard-waste-removal",
    alttext: "Yard Waste Removal",
  },
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
                className="contrast-125 w-full"
                src={wastemanagement}
                alt="waste management"
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-red-600 sm:text-4xl">
                        7+
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
              <h1 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl uppercase lg:leading-tight">
                Pasco and Pinellas County Trash Services
              </h1>
              <p className="mt-6 leading-relaxed  text-lg font-normal text-gray-300">
                With Lupo Dumpster Rentals, you can rest assured that your waste
                management needs will be taken care of quickly and efficiently.
                Book a trailer now and experience our exceptional customer
                service and competitive pricing.
              </p>
              <Link
                href="/contact"
                title=""
                className="inline-flex items-center justify-center   border border-transparent  focus:outline-none mt-9
                
                bg-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400
                transition-all duration-300 uppercase"
                role="button"
              >
                {" "}
                Book Trailer Now{" "}
              </Link>
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
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:mt-6">
              DUMPSTER AND JUNK REMOVAL SERVICES
            </h2>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-12 xl:gap-16 md:max-w-7xl md:grid-cols-4 sm:mt-16">
            {servicelist.map((service, index) => (
              <div className="group" key={index}>
                <Link
                  href={service.link}
                  title=""
                  className="block overflow-hidden aspect-w-16 aspect-h-9  "
                >
                  <Image
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:contrast-125 "
                    src={service.image}
                    alt={service.alttext}
                  />
                </Link>
                <h3 className="mt-6 text-lg font-semibold text-gray-100 xl:text-xl group-hover:text-gray-300">
                  <Link href={service.link} title="" className="">
                    {service.name}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12  sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-300 ">
                PASCO COUNTY DUMPSTER RENTALS
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl max-w-xl">
                OVER 100+ FIVE STAR REVIEWS
              </h2>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 ">
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
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 ">
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
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 ">
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

      <Twentyyard></Twentyyard>

      <Pricing></Pricing>
      <Contact></Contact>
    </>
  );
}
