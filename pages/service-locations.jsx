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
import ContactHero from "../components/ContactHero";
import Locations from "../components/Locations";
import Contactwhite from "../components/Contactwhite";
import RequestForm from "@/components/new/request-form";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function dumpsterrentalpricing() {
  return (
    <>
      <Head>
        <title>Dumpster Rental Service Areas in Pasco County, FL | Lupo</title>
        <meta
          name="description"
          content="Lupo Dumpster Rentals serves Pasco, Pinellas, Hernando & Hillsborough counties in FL. Same-day delivery across 30+ cities. Call (727) 317-6717."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Seo
          title="Dumpster Rental Service Areas in Pasco County, FL | Lupo"
          description="Lupo Dumpster Rentals serves Pasco, Pinellas, Hernando & Hillsborough counties in FL. Same-day delivery across 30+ cities. Call (727) 317-6717."
          path="/service-locations"
        />
      </Head>

      <Locations></Locations>
      <Breadcrumbs />
      {/* <NewPricingtwo></NewPricingtwo> */}
      {/* <NewPricingthree></NewPricingthree> */}
      {/* <Twentyyard></Twentyyard> */}

      <Mission></Mission>

      {/* <Contact></Contact> */}
      {/* <Contactwhite header="Rent A Dumpster Today"></Contactwhite> */}
      <RequestForm />
    </>
  );
}
