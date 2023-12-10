import React from "react";
import { FadeIn } from "./FadeIn";

export default function Process() {
  return (
    <section className="pt-10">
      <div className="relative bg-black">
        <div className="relative px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="md:mr-auto  md:pr-10">
            <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl uppercase ">
              Stress-Free Junk Removal
            </h2>
            <p className="mt-4 md:w-1/2 text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">
              Experience hassle-free junk removal with our streamlined 3-step
              solution, designed to make decluttering your property a breeze.
            </p>
          </div>
        </div>
      </div>
      <FadeIn>
        <div className="py-20 bg-black">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-x-16">
              <div className="relative flex flex-row items-start lg:flex-col">
                <span
                  className="absolute w-px h-full -ml-px border-l-2 border-gray-600 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
                  aria-hidden="true"
                ></span>

                <div className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-black relative w-12 h-12 text-xl font-medium text-white bg-red-600 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
                  01
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-xl font-semibold text-gray-100">
                    Call and Schedule an Appointment
                  </h3>
                  <p className="mt-4 text-sm font-normal text-gray-300">
                    Call our team to schedule a convenient appointment for your
                    junk removal.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-row items-start lg:flex-col">
                <span
                  className="absolute w-px h-full -ml-px border-l-2 border-gray-600 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
                  aria-hidden="true"
                ></span>

                <div className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-black relative w-12 h-12 text-xl font-medium text-white bg-red-600 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
                  02
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-xl font-semibold text-gray-100">
                    Hassle-Free Trailer Drop-Off
                  </h3>
                  <p className="mt-4 text-sm font-normal text-gray-300">
                    We&apos;ll drop off a dumpster trailer at your property for
                    easy loading or handle it for you.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-row items-start lg:flex-col">
                <span
                  className="hidden lg:inline-flex absolute w-px h-full -ml-px border-l-2 border-gray-600 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
                  aria-hidden="true"
                ></span>

                <div className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-black relative w-12 h-12 text-xl font-medium text-white bg-red-600 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
                  03
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-xl font-semibold text-gray-100">
                    Prompt Trailer Pick-Up
                  </h3>
                  <p className="mt-4 text-sm font-normal text-gray-300">
                    Once finished, contact us for prompt trailer pick-up and
                    responsible disposal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
