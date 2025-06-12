import React from "react";
import Image from "next/image";
import truck from "../public/dump-trailer.png";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Mission() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12">
          <div className="text-center lg:col-span-5 sm:text-left">
            <h2 className="text-3xl font-bold tracking-wide text-black sm:text-4xl uppercase">
              Our Commitment to Excellence
            </h2>
            <p className="mt-8 text-lg font-normal text-zinc-700">
              At Lupo Dumpster Rentals and Junk Removal, our mission is to
              provide our customers with unparalleled service and solutions for
              their waste management needs. Our team is committed to safety,
              integrity, and quality in everything we do.
            </p>

            <p className="mt-8 text-lg font-normal text-zinc-700">
              We are proud to provide our services to the residents and
              businesses in Pasco County and surrounding areas, including
              Holiday, Tampa, South Tampa, Port Richey, New Port Richey, Dade
              City, Spring Hill, Pinellas County, Land O Lakes, Lutz, Odessa,
              Hudson, Trinity, Oldsmar, and Palm Harbor.
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <Link
                href="/about-us"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black rounded-md 
                border border-black hover:bg-zinc-700 hover:text-white transition-all duration-300 uppercase"
                role="button"
              >
                {" "}
                Read Our Story{" "}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              viewport={{ once: true }}
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
            >
              <Image
                className="w-full rounded-md"
                src={truck}
                alt="dump trailer"
              />
            </motion.div>
            <div className="grid grid-cols-1 mt-12 text-center gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left">
              <div>
                <h3 className="text-xl font-normal text-black">
                  Customer Satisfaction
                </h3>
                <p className="mt-3 text-base font-normal text-zinc-700">
                  We strive to exceed our customer expectations and ensure
                  satisfaction for every dump trailer rental, property clean out
                  junk hauling service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-normal text-black">
                  Dump Trailer Rentals
                </h3>
                <p className="mt-3 text-base font-normal text-zinc-700">
                  We offer 10 and 15 yard dump trailers for rent. Perfect for
                  roofers, contractors, and homeowners, construction crews and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
