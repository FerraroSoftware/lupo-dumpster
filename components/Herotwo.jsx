import Link from "next/link";
import Image from "next/image";
import autismcenter from "../public/junk-removal-new-port-richey.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-full pb-8 bg-[#14120E] sm:pb-12 lg:pb-12">
      <Image
        src={autismcenter}
        alt="arise autism center"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        priority
      />

      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-7xl sm:tracking-tight"
              initial={{ scale: 0.9, opacity: 0.2, y: -30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0, 0.31, 0.5, 1.01],
                delay: 0,
              }}
            >
              Lupo Dumpster Rentals and Junk Removal
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ scale: 0.2, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.61, 0.2, 1.01],
                delay: 0.1,
              }}
            >
              If you&apos;re located in the greater Tampa Bay area and searching
              for a reliable dumpster rental company, we&apos;ve got you
              covered. Our company offers affordable prices, convenient junk
              removal services, and top-notch customer service. Don&apos;t
              hesitate to reach out to us for all your waste management needs.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ scale: 0.2, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.61, 0.2, 1.01],
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
      </div>
    </div>
  );
}
