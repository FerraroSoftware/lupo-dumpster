import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import trailer from "../public/dump-trailers.png";
import Link from "next/link";
const featureditems = [
  "Refrigerator Disposal",
  "Garbage Removal",
  "Mattress Disposal",
  "Foreclosure Clean Outs",
  "Construction Waste Removal",
  "Yard Waste Removal",
  "Trash Removal",
  "Appliance Removal",
  "Television Recycling",
  "Furniture Removal",
  "E-Waste Disposal",
  "Hot Tub Disposal",
];

const cardVariants = {
  offscreen: {
    opacity: 0.2,
    scale: 1,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0, 0.31, 0.5, 1.01],
    },
    delay: 0,
    y: 0,
  },
};

export default function Featuredlist() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20">
          <div className="lg:col-span-3 lg:order-last">
            <motion.div
              className="relative overflow-hidden shadow-2xl shadow-zinc-700"
              viewport={{ once: true }}
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
            >
              <Image
                className="object-cover w-full h-full rounded-md"
                src={trailer}
                alt=""
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              {/* <div className="absolute bottom-0 left-0">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-5 py-3 text-base font-normal bg-black"
                  role="button"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                    {" "}
                    Start Securing All Data{" "}
                  </span>
                  <svg
                    className="w-auto h-5 ml-2"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
                      stroke="url(#paint0_linear_523_1470)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_523_1470"
                        x1="2.75"
                        y1="3.75"
                        x2="17.6868"
                        y2="6.52979"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#dc2626" />
                        <stop offset="1" stop-color="#f87171" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div> */}
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Wide Range of Dumpster Services in New Port Richey
            </h2>
            <p className="mt-8 text-xl font-normal text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                No Job Too Big or Small.
              </span>{" "}
              We have 10,{" "}
              <Link
                href="/services/15-yard-dump-trailer"
                className="hover:text-red-600"
              >
                15
              </Link>{" "}
              and 20 cubic yard dump trailers.
            </p>
            <p className="mt-8 text-lg font-normal text-gray-400">
              Lupo Dumpster Rentals is near you in New Port Richey to serve all
              your dumpster needs. Whether you{"'"}re undertaking a home
              renovation or remodel or a contractor needing a waste management
              solution for a job site, we
              {"'"}ve got you covered. Our dumpsters are reliable and
              convenient. Call us today to get a free quote, or reserve your
              dumpster using our online booking system.
            </p>

            <hr className="mt-8 border-gray-800 sm:mt-12" />

            {/* <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 sm:mt-12 gap-x-12 gap-y-8 sm:gap-y-12"> */}
            <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 sm:mt-12 ">
              {featureditems.map((item, index) => (
                <li className="flex items-start" key={index}>
                  <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="url(#paint0_linear_515_2603)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_515_2603"
                        x1="5"
                        y1="7"
                        x2="20.3943"
                        y2="10.1196"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#dc2626" />
                        <stop offset="1" stopColor="#f87171" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="ml-4 text-lg font-normal text-white">
                    {" "}
                    {item}{" "}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
