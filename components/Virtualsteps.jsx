import React from "react";
import Link from "next/link";

export default function Virtualsteps() {
  return (
    <section className=" bg-zinc-100 py-24 sm:py-32">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-5 gap-x-16">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-medium text-black sm:text-3xl uppercase">
              STRESS-FREE Dumpster Rentals
            </h2>
            <p className="mt-4 text-lg text-zinc-700">
              Experience hassle-free dumpster rentals with our streamlined
              3-step solution, designed to make decluttering your property a
              breeze.
            </p>
            <div className="mt-8">
              <Link
                href="tel:7273176717"
                title=""
                className="bg-black px-3.5 py-2.5 text-sm tracking-wide text-white shadow-sm  hover:text-white uppercase transition-all duration-300 hover:outline outline outline-white hover:outline-white rounded-md hover:bg-zinc-700"
                role="button"
              >
                Call Us Now
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ol>
              <li className="relative pb-10 group">
                <div
                  className="-ml-px absolute mt-0.5 top-4 left-6 w-px h-full bg-black border border-primary"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-start group">
                  <span className="relative z-10 flex items-center justify-center flex-shrink-0 w-12 h-12  text-2xl font-normal transition-all duration-300 border rounded-full text-white bg-black border-primary group-hover:bg-white group-hover:text-black">
                    {" "}
                    1{" "}
                  </span>

                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="text-lg tracking-wide text-black uppercase">
                      {" "}
                      Call and Schedule an Appointment{" "}
                    </span>
                    <span className="text-base font-normal leading-7 text-zinc-700 mt-1.5">
                      {" "}
                      Call our team to schedule a convenient appointment for
                      your junk removal.{" "}
                    </span>
                  </span>
                </div>
              </li>

              <li className="relative pb-10">
                <div
                  className="-ml-px absolute mt-0.5 top-4 left-6 w-px h-full bg-gray-300"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-start group">
                  <span className="relative z-10 flex items-center justify-center flex-shrink-0 w-12 h-12  text-2xl font-normal transition-all duration-300 border rounded-full text-white bg-black border-primary group-hover:bg-white group-hover:text-black">
                    {" "}
                    2{" "}
                  </span>

                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="text-lg  tracking-wide text-black uppercase">
                      {" "}
                      Hassle-Free Trailer Drop-Off{" "}
                    </span>
                    <span className="text-base font-normal leading-7 text-zinc-700 mt-1.5">
                      {" "}
                      We&apos;ll drop off a dumpster trailer at your property
                      for easy loading or handle it for you.{" "}
                    </span>
                  </span>
                </div>
              </li>

              <li className="relative">
                <div className="relative flex items-start group">
                  <span className="relative z-10 flex items-center justify-center flex-shrink-0 w-12 h-12  text-2xl font-normal transition-all duration-300 border rounded-full text-white bg-black border-primary group-hover:bg-white group-hover:text-black">
                    {" "}
                    3{" "}
                  </span>

                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="text-lg  tracking-wide text-black uppercase">
                      {" "}
                      Prompt Trailer Pick-Up{" "}
                    </span>
                    <span className="text-base font-normal leading-7 text-zinc-700 mt-1.5">
                      {" "}
                      Once finished, contact us for prompt trailer pick-up and
                      responsible disposal.{" "}
                    </span>
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
