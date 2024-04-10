import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import trailer from "../public/dump-trailers.png";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import truck from "../public/dump-trailer.png";
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
  "Dumpster Trailer Rental",
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
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <FadeIn>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20">
            <div className="lg:col-span-3 lg:order-last">
              <div
                className="relative overflow-hidden "
                viewport={{ once: true }}
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
              >
                <Image
                  className="object-cover w-full h-full "
                  src={trailer}
                  alt="dump trailer"
                />
                <div className="absolute inset-0 bg-zinc-900/10"></div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h2 className="text-2xl font-medium tracking-wide text-black sm:text-3xl uppercase">
                Our Wide Range of Dumpster Services in New Port Richey
              </h2>
              <p className="mt-8 text-xl font-normal text-zinc-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                  No Job Too Big or Small.
                </span>{" "}
                We have 10,{" "}
                <Link
                  href="/services/15-yard-dump-trailer"
                  className="hover:text-red-600"
                >
                  15
                </Link>{" "}
                and 20 cubic yard dump trailers ready for rental.
              </p>
              <p className="mt-8 text-lg font-normal text-zinc-700">
                Lupo Dumpster Rentals is near you in New Port Richey to serve
                all your dumpster needs. Whether you{"'"}re undertaking a home
                renovation or remodel or a contractor needing a waste management
                solution for a job site, we
                {"'"}ve got you covered. Our dumpsters are reliable and
                convenient. Call us today to get a free quote, or reserve your
                dumpster using our online booking system.
              </p>

              <hr className="mt-8 border-gray-800 sm:mt-12" />

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
                    <h3 className="ml-4 text-lg font-normal text-black">
                      {" "}
                      {item}{" "}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
