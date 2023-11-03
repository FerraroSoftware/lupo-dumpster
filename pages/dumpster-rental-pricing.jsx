import React from "react";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Head from "next/head";
import Twentyyard from "../components/Twentyyard";
import Link from "next/link";
import Mission from "../components/Mission";

export default function dumpsterrentalpricing() {
  return (
    <>
      <Head>
        <title>Lupo Dumpster Rental Pricing | New Port Richey</title>
        <meta
          name="description"
          content="We have flat rate pricing for our dumpster rentals in New Port Richey, FL. We offer affordable and convenient dumpster trailer services for any project. Contact us today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-12  sm:py-16 lg:py-20 xl:py-24" id="pricing">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
              Lupo Dumpster Rental Pricing
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">
              We strive to offer cheap dumpster rental solutions that meet your
              needs without compromising on the quality of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 text-center sm:grid-cols-2 xl:grid-cols-4 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 sm:mt-16 lg:mt-20">
            <div className="bg-white border border-gray-200  ">
              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                  {/* <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_51_366)">
                    <path
                      d="M15.0002 19.1992C11.8002 19.1992 9.2002 21.7992 9.2002 24.9992C9.2002 28.1992 11.8002 30.7992 15.0002 30.7992C18.2002 30.7992 20.8002 28.1992 20.8002 24.9992C20.8002 21.7992 18.2002 19.1992 15.0002 19.1992ZM15.0002 29.1992C12.7002 29.1992 10.8002 27.2992 10.8002 24.9992C10.8002 22.6992 12.7002 20.7992 15.0002 20.7992C17.3002 20.7992 19.2002 22.6992 19.2002 24.9992C19.2002 27.2992 17.3002 29.1992 15.0002 29.1992Z"
                      fill="#BA2525"
                    />
                    <path d="M14 24H16V26H14V24Z" fill="#BA2525" />
                    <path
                      d="M33 9H2V22.1C2 24.3 3.7 26 5.9 26H7V24H5.9C4.9 24 4.1 23.2 4 22.1V15H26V22.1C26 23.1 25.2 23.9 24.1 24H23V26H24.1C26.2 26 27.9 24.3 27.9 22.1V11H32.9C33.5 11 33.9 10.6 33.9 10C33.9 9.4 33.6 9 33 9V9ZM26 13H4V11H26V13Z"
                      fill="#BA2525"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_51_366">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg> */}
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.625 3.28125V5.625H24.8438C25.2167 5.625 25.5744 5.77316 25.8381 6.03688C26.1018 6.3006 26.25 6.65829 26.25 7.03125C26.25 7.40421 26.1018 7.7619 25.8381 8.02562C25.5744 8.28934 25.2167 8.4375 24.8438 8.4375H5.15625C4.78329 8.4375 4.4256 8.28934 4.16188 8.02562C3.89816 7.7619 3.75 7.40421 3.75 7.03125C3.75 6.65829 3.89816 6.3006 4.16188 6.03688C4.4256 5.77316 4.78329 5.625 5.15625 5.625H9.375V3.28125C9.375 1.47 10.845 0 12.6562 0H17.3438C19.155 0 20.625 1.47 20.625 3.28125ZM8.43 12.5156L9.6675 24.8906C9.67913 25.0063 9.73335 25.1136 9.81963 25.1915C9.90591 25.2695 10.0181 25.3126 10.1344 25.3125H19.8656C19.9819 25.3126 20.0941 25.2695 20.1804 25.1915C20.2667 25.1136 20.3209 25.0063 20.3325 24.8906L21.57 12.5156C21.6165 12.1524 21.8028 11.8216 22.0894 11.5936C22.376 11.3657 22.7402 11.2585 23.1046 11.2949C23.469 11.3313 23.8048 11.5084 24.0407 11.7885C24.2765 12.0687 24.3938 12.4297 24.3675 12.795L23.13 25.17C23.0499 25.9799 22.6713 26.7311 22.0679 27.2773C21.4646 27.8235 20.6795 28.1257 19.8656 28.125H10.1344C9.32102 28.1249 8.53668 27.8227 7.93351 27.277C7.33035 26.7314 6.95134 25.9812 6.87 25.1719L5.6325 12.7969C5.60902 12.6107 5.62304 12.4217 5.67373 12.241C5.72443 12.0603 5.81078 11.8916 5.92769 11.7448C6.0446 11.598 6.18971 11.4761 6.35447 11.3863C6.51923 11.2964 6.70031 11.2405 6.88703 11.2217C7.07375 11.2029 7.26234 11.2217 7.44168 11.277C7.62103 11.3322 7.7875 11.4228 7.93129 11.5434C8.07509 11.664 8.19329 11.8121 8.27894 11.9791C8.36459 12.1461 8.41595 12.3285 8.43 12.5156ZM12.1875 3.28125V5.625H17.8125V3.28125C17.8125 3.15693 17.7631 3.0377 17.6752 2.94979C17.5873 2.86189 17.4681 2.8125 17.3438 2.8125H12.6562C12.5319 2.8125 12.4127 2.86189 12.3248 2.94979C12.2369 3.0377 12.1875 3.15693 12.1875 3.28125Z"
                      fill="#BA2525"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  10 Cubic Yard Dump Trailer
                </h3>

                <h3 className="mt-2 text-lg font-semibold text-red-600">
                  Household Items
                </h3>
                <p className="mt-6 text-5xl font-semibold text-gray-900">
                  $250+
                </p>
                <p className="mt-1 text-sm font-normal text-gray-500">
                  Up to 3 days
                </p>
                <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dump Fees Included
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Good for Rooms
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Empty Small Storage
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Personal Projects
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    2 tons included in price
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    title=""
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    role="button"
                  >
                    Book Now
                  </Link>
                </div>

                <p className="mt-5 text-sm font-normal text-gray-500">
                  Variables affect pricing
                </p>
              </div>
            </div>

            <div className="relative bg-white border border-red-600  ">
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex px-4 py-1 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 rounded-full ring-4 ring-white">
                    Popular choice
                  </span>
                </div>
              </div>

              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_51_366)">
                      <path
                        d="M15.0002 19.1992C11.8002 19.1992 9.2002 21.7992 9.2002 24.9992C9.2002 28.1992 11.8002 30.7992 15.0002 30.7992C18.2002 30.7992 20.8002 28.1992 20.8002 24.9992C20.8002 21.7992 18.2002 19.1992 15.0002 19.1992ZM15.0002 29.1992C12.7002 29.1992 10.8002 27.2992 10.8002 24.9992C10.8002 22.6992 12.7002 20.7992 15.0002 20.7992C17.3002 20.7992 19.2002 22.6992 19.2002 24.9992C19.2002 27.2992 17.3002 29.1992 15.0002 29.1992Z"
                        fill="#BA2525"
                      />
                      <path d="M14 24H16V26H14V24Z" fill="#BA2525" />
                      <path
                        d="M33 9H2V22.1C2 24.3 3.7 26 5.9 26H7V24H5.9C4.9 24 4.1 23.2 4 22.1V15H26V22.1C26 23.1 25.2 23.9 24.1 24H23V26H24.1C26.2 26 27.9 24.3 27.9 22.1V11H32.9C33.5 11 33.9 10.6 33.9 10C33.9 9.4 33.6 9 33 9V9ZM26 13H4V11H26V13Z"
                        fill="#BA2525"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_51_366">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  10 Cubic Yard Dump Trailer
                </h3>
                <h3 className="mt-2 text-lg font-semibold text-red-600">
                  Roofing Materials
                </h3>
                <p className="mt-6 text-5xl font-semibold text-gray-900">
                  $260+
                </p>
                <p className="mt-1 text-sm font-normal text-gray-500">
                  Up to 3 days
                </p>
                <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dump Fees Included
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Good for roofing
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Home Remodels
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Small businesses
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    2 tons included in price
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    title=""
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-red-600 border border-transparent   hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    role="button"
                  >
                    Book Now
                  </Link>
                </div>

                <p className="mt-5 text-sm font-normal text-gray-500">
                  Variables affect pricing
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200  ">
              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                  {/* <svg
                  className="w-6 h-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg> */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 6L3 14H4.334L4.666 16H3V18H5L6 24V26H8V24H24V26H26V24L27 18H29V16H27.334L27.666 14H29L27 6H5ZM6.563 8H9.338L8.572 12H5.562L6.562 8H6.563ZM11.391 8H15V12H10.63L11.39 8H11.391ZM17 8H20.61L21.37 12H17V8ZM22.662 8H25.438L26.438 12H23.428L22.662 8ZM6.362 14H25.639L24.307 22H7.693L6.361 14H6.362Z"
                      fill="#BA2525"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  15 Cubic Yard Dump Trailer
                </h3>
                <h3 className="mt-2 text-lg font-semibold text-red-600">
                  Household Items
                </h3>
                <p className="mt-6 text-5xl font-semibold text-gray-900">
                  $350+
                </p>
                <p className="mt-1 text-sm font-normal text-gray-500">
                  Up to 4 days
                </p>
                <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dump Fees Included
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Large Garages
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Personal Projects
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Property Cleanout
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    3 tons included in price
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    title=""
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    role="button"
                  >
                    Book Now
                  </Link>
                </div>

                <p className="mt-5 text-sm font-normal text-gray-500">
                  Variables affect pricing
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200  ">
              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                  {/* <svg
                  className="w-6 h-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg> */}
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 0.5C1.00781 0.5 0 1.50781 0 2.75V14.75C0 15.9922 1.00781 17 2.25 17H3.05156C3.41719 14.4547 5.60156 12.5 8.25 12.5C10.8984 12.5 13.0828 14.4547 13.4484 17H28.5C29.3297 17 30 16.3297 30 15.5C30 14.6703 29.3297 14 28.5 14H25.5V2.75C25.5 1.50781 24.4922 0.5 23.25 0.5H2.25ZM3.75 3.5C4.1625 3.5 4.5 3.8375 4.5 4.25V10.4C3.96563 10.6766 3.45938 11.0047 3 11.3844V4.25C3 3.8375 3.3375 3.5 3.75 3.5ZM8.25 9.5C7.99687 9.5 7.74844 9.50937 7.5 9.53281V4.25C7.5 3.8375 7.8375 3.5 8.25 3.5C8.6625 3.5 9 3.8375 9 4.25V9.53281C8.75156 9.50937 8.50313 9.5 8.25 9.5ZM12 10.4V4.25C12 3.8375 12.3375 3.5 12.75 3.5C13.1625 3.5 13.5 3.8375 13.5 4.25V11.3844C13.0406 11.0047 12.5344 10.6719 12 10.4ZM17.25 3.5C17.6625 3.5 18 3.8375 18 4.25V13.25C18 13.6625 17.6625 14 17.25 14C16.8375 14 16.5 13.6625 16.5 13.25V4.25C16.5 3.8375 16.8375 3.5 17.25 3.5ZM22.5 4.25V13.25C22.5 13.6625 22.1625 14 21.75 14C21.3375 14 21 13.6625 21 13.25V4.25C21 3.8375 21.3375 3.5 21.75 3.5C22.1625 3.5 22.5 3.8375 22.5 4.25ZM8.25 21.5C10.3219 21.5 12 19.8219 12 17.75C12 15.6781 10.3219 14 8.25 14C6.17812 14 4.5 15.6781 4.5 17.75C4.5 19.8219 6.17812 21.5 8.25 21.5ZM8.25 19.25C7.42031 19.25 6.75 18.5797 6.75 17.75C6.75 16.9203 7.42031 16.25 8.25 16.25C9.07969 16.25 9.75 16.9203 9.75 17.75C9.75 18.5797 9.07969 19.25 8.25 19.25Z"
                      fill="#BA2525"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  15 Cubic Yard Dump Trailer
                </h3>
                <h3 className="mt-2 text-lg font-semibold text-red-600">
                  Roofing Materials
                </h3>
                <p className="mt-6 text-5xl font-semibold text-gray-900">
                  $360+
                </p>
                <p className="mt-1 text-sm font-normal text-gray-500">
                  Up to 4 days
                </p>
                <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Dump Fees Included
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Large roofing project
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Remodel Projects
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Contractors
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    3 tons included in price
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    title=""
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    role="button"
                  >
                    Book Now
                  </Link>
                </div>

                <p className="mt-5 text-sm font-normal text-gray-500">
                  Variables affect pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ">
              Let Us Help You With Your Junk Removal Needs
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto mt-8 md:mt-16">
            <div className="absolute -inset-4">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter"
                //   style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
              ></div>
            </div>

            <div className="relative overflow-hidden bg-[#14120E] ">
              <div className="px-16 py-8 sm:px-8 lg:px-16 lg:py-14">
                <div className="flex flex-col items-center justify-center md:flex md:items-center md:flex-row md:space-x-12 lg:space-x-24">
                  <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-12 xl:gap-x-24">
                    <div>
                      <ul className="space-y-3 text-base font-medium text-white ">
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Fast &amp; Friendly Service
                        </li>

                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Same Day Service
                        </li>

                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Any Junk Removal
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-3 text-base font-medium text-white ">
                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Open 7 Days a Week
                        </li>

                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          No Hidden Fees
                        </li>

                        <li className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Free Estimates
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="block md:hidden lg:block">
                    <div className="hidden lg:block">
                      <svg
                        className="w-4 h-auto text-green-800"
                        viewBox="0 0 16 123"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 11)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 46)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 81)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 116)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 18)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 53)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 88)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 123)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 25)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 60)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 95)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 32)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 67)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 102)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 39)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 74)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 109)"
                        />
                      </svg>
                    </div>

                    <div className="block mt-10 md:hidden">
                      <svg
                        className="w-auto h-4 text-gray-600"
                        viewBox="0 0 172 16"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                        />
                        <line
                          y1="-0.5"
                          x2="18.0278"
                          y2="-0.5"
                          transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-0">
                    <div className="flex items-end">
                      <p className="text-5xl font-bold text-white ">$75+</p>
                    </div>

                    <Link
                      href="/contact"
                      title=""
                      className="
                      uppercase
                                   inline-flex
                                   items-center
                                   justify-center
                                   px-9
                                   py-2.5
                                   mt-5
                                  text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent  hover:bg-opacity-90
                               "
                      role="button"
                    >
                      Book It Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mission></Mission>

      <Twentyyard></Twentyyard>

      <Contact></Contact>
    </>
  );
}
