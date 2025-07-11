// pages/dumpster-rental-odessa.tsx

import React from "react";
import Head from "next/head";

import dumpsterrentalpros from "../../public/dumpster-rental-pros.jpg";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumptrailers from "../../public/dump-trailers.png";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";

import RequestForm from "../../components/new/request-form";
import ServiceLocations from "@/components/new/service-locations";
import Testimonials from "@/components/new/testimonials";
import HeroService from "@/components/new/hero-service";
import { DumpsterOptions } from "@/components/new/dumpster-options";
import { DisposalGuidelines } from "@/components/new/disposal-guidelines";
import { CommonDumpsterUses } from "@/components/new/common-dumpster-uses";
import { RentalProcessSteps } from "@/components/new/rental-process-steps";
import { FaqSection } from "@/components/new/faq-section";
import { ComparisonTableSection } from "@/components/new/comparison-table-section";
import RoofersSection from "@/components/new/roofers-section";
import { CallToActionSection } from "@/components/new/call-to-action-section";
import LocationSchema from "@/components/new/LocationSchema";

const heroData = {
  badgeText: "#1 Dumpster Rental Service in Odessa, FL",
  title: "Affordable Dumpster Rentals in Odessa, Florida",
  description:
    "Lupo Enterprises provides reliable dumpster rental services in Odessa, FL. Choose from 10, 15, and 20-yard dumpsters for residential and commercial projects.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated in Pasco County" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Odessa",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Odessa, FL",
  imageOverlayText: "Serving Odessa & Surrounding Areas",
};

const odessaDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in Odessa, FL",
    isPopular: true,
    size: "10 Yard Dumpster",
    description:
      "Perfect for small to medium projects like garage cleanouts, small remodels, or yard debris.",
    features: [
      "Holds approx. 3 pickup truck loads",
      "Dimensions: 12' L x 8' W x 3.5' H",
      "Weight limit: 2 tons included",
    ],
    buttonText: "Rent 10 Yard",
    buttonLink: "/contact",
  },
  {
    id: 2,
    imageUrl: dumpstertrailer1,
    imageAlt: "15 Yard Dumpster Rental in Odessa, FL",
    size: "15 Yard Dumpster",
    description:
      "Ideal for medium-sized projects like kitchen remodels, flooring removal, or basement cleanouts.",
    features: [
      "Holds approx. 4-5 pickup truck loads",
      "Dimensions: 14' L x 8' W x 4' H",
      "Weight limit: 3 tons included",
    ],
    buttonText: "Rent 15 Yard",
    buttonLink: "/contact",
  },
  {
    id: 3,
    imageUrl: dumptrailers,
    imageAlt: "20 Yard Dumpster Rental in Odessa, FL",
    isPopular: false,
    size: "20 Yard Dumpster",
    description:
      "Best for large projects like home renovations, construction debris, or complete property cleanouts.",
    features: [
      "Holds approx. 6-7 pickup truck loads",
      "Dimensions: 16' L x 8' W x 5' H",
      "Weight limit: 4 tons included",
    ],
    buttonText: "Rent 20 Yard",
    buttonLink: "/contact",
  },
];

const metatitle = "Odessa Dumpster Rental | Affordable Dumpsters in Odessa FL";
const description =
  "Lupo Enterprises offers dumpster rentals in Odessa, FL. Get fast delivery and competitive pricing on 10, 15, and 20-yard dumpsters for all types of projects.";

export default function DumpsterRentalOdessa() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Odessa dumpster rental, dumpster rental Odessa FL, dumpster rental services, 10 yard dumpster Odessa, 15 yard dumpster, 20 yard dumpster Odessa, junk removal Odessa FL, roll off dumpster Odessa"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-odessa-fl"
        />
      </Head>

      <LocationSchema
        areaServed={["Odessa"]}
        geoCoordinates={{ latitude: 28.1836, longitude: -82.5915 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-odessa-fl"
        locationName="Odessa, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Odessa"
          title="Choose the Perfect Dumpster Size for Your Odessa Project"
          subtitle="We offer a variety of dumpster sizes to accommodate any project in Odessa, from home cleanouts to major construction jobs."
          dumpsters={odessaDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in Odessa"
          subtitle="Renting a dumpster in Odessa is easy and hassle-free with Lupo Enterprises."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="Odessa Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in Odessa, FL."
        />

        <DisposalGuidelines
          title="What Can Go in Your Odessa Dumpster?"
          subtitle="To ensure safe and responsible disposal, please follow these guidelines for your Odessa rental."
        />

        <CommonDumpsterUses
          title="Common Dumpster Uses in Odessa"
          subtitle="Our dumpsters are perfect for a wide range of projects in the Odessa area."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-notch service."
        />
      </main>
    </>
  );
}
