import React, { useState } from "react";
import Image from "next/image";
import lupodumpster from "../public/lupo-dumpster.png";
import logo from "../public/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <header className="py-4 sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" title="" className="">
                <Image className="w-auto h-14" src={logo} alt="logo" />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              <Link
                href="#services"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Services
              </Link>

              <Link
                href="#pricing"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="#testimonial"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Testimonials
              </Link>

              <Link
                href="#contact"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <Link
                href="tel:7273176717"
                title=""
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-200 transition-all duration-200 border border-red-600 rounded-md hover:bg-red-600 hover:text-white "
                role="button"
              >
                Call Now
              </Link>
            </div>

            {/* menu */}
            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                aria-label="menu button"
                className="inline-flex items-center p-2.5 text-gray-300 duration-200 border border-zinc-700 rounded-md hover:bg-zinc-900 hover:text-white transiton-all "
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span x-show="expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
          {isOpen ? (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6 text-center">
                <Link
                  href="#services"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Services{" "}
                </Link>

                <Link
                  href="#pricing"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Pricing{" "}
                </Link>

                <Link
                  href="#testimonial"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Testimonials{" "}
                </Link>

                <Link
                  href="#contact"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Contact{" "}
                </Link>

                <div className="relative inline-flex items-center justify-center group">
                  <Link
                    href="#contact"
                    title=""
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-transparent border border-red-600 rounded-md hover:bg-opacity-90"
                    role="button"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {" "}
                    Book now{" "}
                  </Link>
                </div>
              </div>
            </nav>
          ) : null}
        </div>
      </header>

      <section className="pb-8 bg-[#14120E] sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
          <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="lg:mt-16">
              <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                <motion.h1
                  className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-7xl sm:tracking-tight"
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0,
                  }}
                >
                  Lupo Dumpster Rentals
                </motion.h1>
                <motion.p
                  className="mt-6 text-lg leading-7 text-gray-300 lg:leading-8 lg:text-xl"
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.2,
                  }}
                >
                  If you{"'"}re located in the Holiday, FL area and searching
                  for a reliable dumpster rental company, we{"'"}ve got you
                  covered. Our company offers affordable prices, convenient junk
                  removal services, and top-notch customer service. Don{"'"}t
                  hesitate to reach out to us for all your waste management
                  needs.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap"
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.4,
                }}
              >
                <Link
                  href="#contact"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none "
                  role="button"
                >
                  Request Rental
                </Link>

                <Link
                  href="#testimonial"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-300 transition-all duration-200 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none hover:text-black"
                  role="button"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <motion.div
                className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24"
                initial={{ scale: 1, opacity: 0, x: 100 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{
                  duration: 0,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.5,
                }}
              >
                <Image
                  className="w-full shadow-2xl rounded-xl  lg:rounded-2xl ring-[24px] lg:ring-[48px] ring-red-100 lg:h-full lg:w-auto lg:max-w-none"
                  src={lupodumpster}
                  alt="Lupo dumpster rentals holiday fl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
