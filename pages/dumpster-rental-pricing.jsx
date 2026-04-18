import React from "react";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Head from "next/head";
import Seo from "@/components/Seo";
import Twentyyard from "../components/Twentyyard";
import Link from "next/link";
import Mission from "../components/Mission";
import NewPricingtwo from "../components/NewPricingtwo";
import NewPricingthree from "../components/NewPricingthree";
import Junkcost from "../components/Junkcost";
import Contactwhite from "../components/Contactwhite";
import RequestForm from "@/components/new/request-form";
import NewPricinghero from "../components/NewPricinghero";
import NewPricingHeros from "@/components/NewPricingHeros";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function dumpsterrentalpricing() {
  return (
    <>
      <Head>
        <title>Dumpster Rental Pricing in New Port Richey, FL | Lupo</title>
        <meta
          name="description"
          content="Flat-rate dumpster rental pricing for New Port Richey, FL and Pasco County. 10, 15 & 20-yard roll-offs with no hidden fees. Call (727) 317-6717."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Seo
          title="Dumpster Rental Pricing in New Port Richey, FL | Lupo"
          description="Flat-rate dumpster rental pricing for New Port Richey, FL and Pasco County. 10, 15 & 20-yard roll-offs with no hidden fees. Call (727) 317-6717."
          path="/dumpster-rental-pricing"
        />
      </Head>

      {/* <NewPricingtwo></NewPricingtwo> */}
      {/* <NewPricinghero></NewPricinghero> */}
      <NewPricingHeros></NewPricingHeros>
      <Breadcrumbs />
      {/* <NewPricingthree></NewPricingthree> */}
      {/* <Twentyyard></Twentyyard> */}

      <Junkcost></Junkcost>
      <Mission></Mission>

      {/* <Contact></Contact> */}
      {/* <Contactwhite header="Contact Us For an Affordable Dumpster"></Contactwhite> */}
      <RequestForm />
    </>
  );
}
