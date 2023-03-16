import React from "react";
import Image from "next/image";
import furnitureremoval from "../public/furniture-removal.png";
import cleanup from "../public/clean-out-service.png";
import junkremoval from "../public/junk-removal.png";
import Link from "next/link";

export default function FeaturedServices() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 " id="services">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-lg mx-auto text-center lg:max-w-3xl">
          <h2 className=" sm:mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tailored Junk Removal Services to Meet Your Specific Needs
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Flexible junk removal solutions that align with your unique business
            objectives in New Port Richey and surrounding areas.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-center lg:max-w-none lg:grid-cols-3 sm:mt-16 lg:mt-20">
          <div className="relative overflow-hidden bg-zinc-700 rounded-2xl">
            <div className="px-6 pt-8 pb-72 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
              <h3 className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  {" "}
                  Professional Disposal{" "}
                </span>
              </h3>
              <h3 className="mt-3 text-2xl font-normal text-white xl:text-3xl">
                <Link
                  href="/services/mattress-disposal"
                  className="hover:text-red-600"
                >
                  Furniture Removal
                </Link>
              </h3>
              <p className="mt-4 text-base font-normal text-zinc-300">
                Let our professional movers handle all the heavy lifting and
                transport your furniture with precision and efficiency.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
              <Image
                className="object-contain w-full"
                src={furnitureremoval}
                alt="furiture removal"
              />
            </div>
          </div>
          <div className="relative overflow-hidden bg-zinc-700 rounded-2xl">
            <div className="px-6 pt-8 pb-72 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
              <h3 className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  {" "}
                  Top-Quality Service{" "}
                </span>
              </h3>
              <h3 className="mt-3 text-2xl font-normal text-white xl:text-3xl">
                <Link
                  href="/services/junk-removal-new-port-richey-fl"
                  className="hover:text-red-600"
                >
                  Junk Removal
                </Link>
              </h3>
              <p className="mt-4 text-base font-normal text-zinc-300">
                Don{"'"}t let clutter and junk take over your space any longer!
                Schedule your junk removal and regain control of your home or
                business.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
              <Image
                className="object-contain w-full"
                src={junkremoval}
                alt="junk removal"
              />
            </div>
          </div>

          <div className="relative overflow-hidden bg-zinc-700 rounded-2xl">
            <div className="px-6 pt-8 pb-72 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
              <h3 className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  {" "}
                  Effortless Disposal{" "}
                </span>
              </h3>
              <h3 className="mt-3 text-2xl font-normal text-white xl:text-3xl">
                <Link
                  href="/services/garage-cleaning-service-new-port-richey-fl"
                  className="hover:text-red-600"
                >
                  Clean Out Service
                </Link>
              </h3>
              <p className="mt-4 text-base font-normal text-zinc-300">
                Our team of experts will help declutter, sort and dispose of any
                unwanted items, leaving you with a fresh start.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
              <Image
                className="object-contain w-full"
                src={cleanup}
                alt="Clean out service"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
