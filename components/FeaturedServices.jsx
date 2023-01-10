import React from "react";
import Image from "next/image";
import clean from "../public/clean.png";
import cleanup from "../public/cleanup.png";
import junkremoval from "../public/junk-removal.png";

export default function FeaturedServices() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-lg mx-auto text-center lg:max-w-2xl">
          <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
            Stay informed & inspired wherever you are
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-center lg:max-w-none lg:grid-cols-3 sm:mt-16 lg:mt-20">
          <div className="relative overflow-hidden bg-zinc-700 rounded-2xl">
            <div className="px-6 pt-8 pb-72 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
              <h3 className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  {" "}
                  Unlimited resources{" "}
                </span>
              </h3>
              <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">
                Design Things Fast
              </p>
              <p className="mt-4 text-base font-normal text-gray-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
              <Image
                className="object-contain w-full"
                src={junkremoval}
                alt=""
              />
            </div>
          </div>

          <div className="relative overflow-hidden bg-zinc-700 rounded-2xl">
            <div className="px-6 pt-8 pb-72 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
              <h3 className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  {" "}
                  Connect Easily{" "}
                </span>
              </h3>
              <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">
                Grow Your Audience
              </p>
              <p className="mt-4 text-base font-normal text-gray-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
              <Image className="object-contain w-full" src={clean} alt="" />
            </div>
          </div>

          <div className="relative overflow-hidden bg-zinc-700 rounded-2xl">
            <div className="px-6 pt-8 pb-72 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
              <h3 className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                  {" "}
                  Use Anywhere{" "}
                </span>
              </h3>
              <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">
                Support All Devices
              </p>
              <p className="mt-4 text-base font-normal text-gray-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
              <Image className="object-contain w-full" src={cleanup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
