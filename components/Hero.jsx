import React, { useState } from "react";
import Image from "next/image";
import lupodumpster from "../public/lupo-dumpster.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="">
      <section className="pb-8 bg-[#14120E] sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
          <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="lg:mt-16">
              <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                <motion.h1
                  className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-7xl sm:tracking-tight"
                  initial={{ scale: 0.2, opacity: 0.2 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0,
                  }}
                >
                  Lupo Dumpster Rentals
                </motion.h1>
                <motion.p
                  className="mt-6 text-lg leading-7 text-gray-300 lg:leading-8 lg:text-xl"
                  initial={{ scale: 0.2, opacity: 0.2 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.1,
                  }}
                >
                  If you{"'"}re located in the greater Tampa Bay area and
                  searching for a reliable dumpster rental company, we{"'"}ve
                  got you covered. Our company offers affordable prices,
                  convenient junk removal services, and top-notch customer
                  service. Don{"'"}t hesitate to reach out to us for all your
                  waste management needs.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap"
                initial={{ scale: 0.2, opacity: 0.2 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.3,
                }}
              >
                <Link
                  href="/contact"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none "
                  role="button"
                >
                  Request Rental
                </Link>

                <Link
                  href="tel:7273176717"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-300 transition-all duration-200 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none hover:text-black"
                  role="button"
                >
                  Call Now
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <motion.div
                className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.21, 0.35, 0.48],
                  delay: 0.4,
                }}
              >
                <Image
                  className="w-full shadow-2xl rounded-xl  lg:rounded-2xl ring-[24px] lg:ring-[48px] ring-red-100 lg:h-full lg:w-auto lg:max-w-none"
                  src={lupodumpster}
                  alt="Lupo dumpster rentals new port richey fl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
