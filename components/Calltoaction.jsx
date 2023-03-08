import React from "react";
import Image from "next/image";
import lupotestimonial from "../public/lupo-testimonial.png";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  offscreen: {
    opacity: 0.2,
    scale: 1,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0, 0.31, 0.5, 1.01],
    },
    delay: 0,
    y: 0,
  },
};

const cardVariantstwo = {
  offscreen: {
    opacity: 0.2,
    scale: 1,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0, 0.31, 0.5, 1.01],
    },
    delay: 0.3,
    y: 0,
  },
};

// initial={{ scale: 0.2, opacity: 0 }}
// animate={{ scale: 1, opacity: 1 }}
// transition={{
//   duration: 1,
//   ease: [0, 0.71, 0.2, 1.01],
//   delay: 0.4,
// }}

export default function Calltoaction() {
  return (
    <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full"
          src={lupotestimonial}
          alt="testimonial with customer"
        />
      </div>

      <div className="absolute inset-0 bg-[#14120E]/50"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
          >
            Dumpster Rental Experience You Can Count On
          </motion.h2>
          <motion.p
            className="mt-4 text-base font-normal leading-7 text-white sm:mt-6"
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
          >
            Our expertise has been honed through years of practice, ensuring
            quality service. Clients have trusted us in New Port Richey for our
            experience and results, time and time again.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10"
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
          >
            <Link
              href="/contact"
              title=""
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-opacity-90"
              role="button"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
