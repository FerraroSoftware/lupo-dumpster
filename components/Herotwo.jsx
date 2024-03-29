import Link from "next/link";
import Image from "next/image";
import autismcenter from "../public/junk-removal-new-port-richey.png";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import dumpsterrentalpros from "../public/dumpster-rental-pros.jpg";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-full pb-8 bg-[#14120E] sm:pb-12 lg:pb-12">
      <Image
        src={dumpsterrentalpros}
        alt="arise autism center"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-neutral-900/10" />
      <FadeIn>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-wide leading-10 text-white sm:text-5xl uppercase">
                Lupo Dumpster Rentals and Junk Removal
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                From junk removal to dumpster rentals, we&apos;ve got you
                covered in Pasco County. Let us be your hero in removing your
                junk. Contact us now for affordable and reliable solutions!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  title=""
                  className="bg-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400
                transition-all duration-300 uppercase"
                  role="button"
                >
                  Request Rental
                </Link>

                <Link
                  href="tel:7273176717"
                  title=""
                  className="border border-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400
                transition-all duration-300 uppercase"
                  role="button"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
