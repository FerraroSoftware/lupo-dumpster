// pages/dumpster-rental-zephyrhills-fl.tsx

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
  badgeText: "#1 Dumpster Rental Service in Zephyrhills, FL",
  title: "Affordable Dumpster Rentals in Zephyrhills, Florida",
  description:
    "Lupo Enterprises provides trusted dumpster rental services in Zephyrhills, FL. Choose from 10, 15, or 20-yard dumpsters for residential or commercial projects.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated in Pasco County" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Zephyrhills",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Zephyrhills, FL",
  imageOverlayText: "Serving Zephyrhills & Surrounding Areas",
};

const zephyrhillsDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in Zephyrhills, FL",
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
    imageAlt: "15 Yard Dumpster Rental in Zephyrhills, FL",
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
    imageAlt: "20 Yard Dumpster Rental in Zephyrhills, FL",
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

const metatitle =
  "Zephyrhills Dumpster Rental | Affordable Dumpsters in Zephyrhills FL";
const description =
  "Rent dumpsters in Zephyrhills, FL with Lupo Enterprises. Affordable 10, 15, and 20-yard roll-off dumpster rentals for all types of residential and commercial projects.";

export default function DumpsterRentalZephyrhills() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Zephyrhills dumpster rental, dumpster rental Zephyrhills FL, dumpster rental services, 10 yard dumpster Zephyrhills, 15 yard dumpster, 20 yard dumpster Zephyrhills, junk removal Zephyrhills FL, roll off dumpster Zephyrhills"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-zephyrhills-fl"
        />
      </Head>

      <LocationSchema
        areaServed={["Zephyrhills"]}
        geoCoordinates={{ latitude: 28.2336, longitude: -82.1812 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-zephyrhills-fl"
        locationName="Zephyrhills, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Zephyrhills"
          title="Choose the Perfect Dumpster Size for Your Zephyrhills Project"
          subtitle="We offer a variety of dumpster sizes to accommodate any project in Zephyrhills, from home cleanouts to major renovations."
          dumpsters={zephyrhillsDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in Zephyrhills"
          subtitle="Renting a dumpster in Zephyrhills is fast and simple with Lupo Enterprises."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="Zephyrhills Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in Zephyrhills, FL."
        />

        <DisposalGuidelines
          title="What Can Go in Your Zephyrhills Dumpster?"
          subtitle="Please follow these guidelines to ensure safe and responsible disposal for your Zephyrhills rental."
        />

        <CommonDumpsterUses
          title="Common Dumpster Uses in Zephyrhills"
          subtitle="Our dumpsters are ideal for a wide range of residential and commercial projects in the Zephyrhills area."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-rated service."
        />
      </main>
    </>
  );
}
