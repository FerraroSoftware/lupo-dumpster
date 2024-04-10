import React from "react";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Head from "next/head";
import Twentyyard from "../components/Twentyyard";
import Link from "next/link";
import Mission from "../components/Mission";
import NewPricingtwo from "../components/NewPricingtwo";
import NewPricingthree from "../components/NewPricingthree";
import Junkcost from "../components/Junkcost";
import ContactHero from "../components/ContactHero";
import Locations from "../components/Locations";
import Contactwhite from "../components/Contactwhite";

export default function dumpsterrentalpricing() {
  return (
    <>
      <Head>
        <title>
          Services Locations | Lupo Dumpster Rental and Junk Removal
        </title>
        <meta
          name="description"
          content="We offer dumpster rentals and junk removal services in Pasco, Pinellas, and Hillsborough County. Contact us for affordable and reliable solutions!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Locations></Locations>
      <NewPricingtwo></NewPricingtwo>
      {/* <NewPricingthree></NewPricingthree> */}
      {/* <Twentyyard></Twentyyard> */}

      <Mission></Mission>

      {/* <Contact></Contact> */}
      <Contactwhite header="Rent A Dumpster Today"></Contactwhite>
    </>
  );
}
