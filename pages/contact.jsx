import React from "react";
import Contact from "../components/Contact";
import Image from "next/image";
import dumpsterrental from "../public/dumpsterrental.png";
import Head from "next/head";
import Pricing from "../components/Pricing";

export default function contact() {
  return (
    <>
      <Head>
        <title>
          Lupo Dumpster Rental New Port Richey, FL- Contact Us Today
        </title>
        <meta
          name="description"
          content="Need a dumpster rental? Contact Lupo Dumpster Rentals today to get a quote, schedule delivery, and rent a dumpster for your next project. Don't let your trash sit around."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connect With Us
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-xl text-gray-100 text-center">
            Lupo Dumpster Rentals values clear communication and strives to
            provide the best service possible. If you have any questions or want
            to know more about our services, please don&apos;t hesitate to
            contact us. Our team is ready and willing to assist you in any way
            possible.
          </p>
        </div>
      </div>
      <Contact></Contact>
      {/* <Pricing></Pricing> */}
    </>
  );
}
