import React from "react";
import Contact from "../components/Contact";
import Image from "next/image";
import dumpsterrental from "../public/dumpsterrental.png";

export default function contact() {
  return (
    <>
      <div className="relative bg-zinc-700">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src={dumpsterrental}
            alt="Dumpster Rental"
          />
          <div
            className="absolute inset-0 bg-zinc-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us for More Information
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Lupo Dumpster Rentals values clear communication and strives to
            provide the best service possible. If you have any questions or want
            to know more about our services, please don{"'"}t hesitate to
            contact us. Our team is ready and willing to assist you in any way
            possible.
          </p>
        </div>
      </div>
      <Contact></Contact>
    </>
  );
}
