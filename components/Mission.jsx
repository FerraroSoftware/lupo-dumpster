import React from "react";
import Image from "next/image";
import truck from "../public/truck.png";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12">
          <div className="text-center lg:col-span-5 sm:text-left">
            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Our Commitment to Excellence
            </h2>
            <p className="mt-8 text-lg font-normal text-gray-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.
            </p>
            <p className="mt-8 text-lg font-normal text-gray-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.
            </p>
            <p className="mt-8 text-lg font-normal text-gray-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <Link
                href="#contact"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-gray-200 bg-transparent 
                border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-all duration-200"
                role="button"
              >
                {" "}
                Book a Trailer{" "}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Image className="w-full" src={truck} alt="" />

            <div className="grid grid-cols-1 mt-12 text-center gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left">
              <div>
                <h3 className="text-xl font-normal text-white">
                  Unlimited Usages
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint velit officia.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-normal text-white">
                  Made with TailwindCSS
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint velit officia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
