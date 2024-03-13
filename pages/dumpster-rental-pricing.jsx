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

export default function dumpsterrentalpricing() {
  return (
    <>
      <Head>
        <title>Lupo Dumpster Rental Pricing | New Port Richey</title>
        <meta
          name="description"
          content="We have flat rate pricing for our dumpster rentals in New Port Richey, FL. We offer affordable and convenient dumpster trailer services for any project. Contact us today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <NewPricingtwo></NewPricingtwo> */}
      <NewPricingthree></NewPricingthree>
      {/* <Twentyyard></Twentyyard> */}

      <Junkcost></Junkcost>
      <Mission></Mission>

      <Contact></Contact>
    </>
  );
}
