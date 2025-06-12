// pages/dumpster-rental-hernando-county-fl.tsx

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
  badgeText: "#1 Dumpster Rental Service in Hernando County, FL",
  title: "Affordable Dumpster Rentals in Hernando County, Florida",
  description:
    "Lupo Enterprises proudly serves all of Hernando County with affordable dumpster rentals in 10, 15, and 20-yard sizes. Same-day delivery available.",
  heroChecklistItems: [
    { text: "Serving Brooksville, Spring Hill, Weeki Wachee & more" },
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Hernando County",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Hernando County, FL",
  imageOverlayText: "Proudly Serving All of Hernando County",
};

const hernandoDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in Hernando County, FL",
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
    imageAlt: "15 Yard Dumpster Rental in Hernando County, FL",
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
    imageAlt: "20 Yard Dumpster Rental in Hernando County, FL",
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
  "Hernando County Dumpster Rental | Brooksville & Spring Hill Dumpsters";
const description =
  "Affordable dumpster rentals in Hernando County, FL by Lupo Enterprises. Serving Brooksville, Spring Hill, Weeki Wachee & surrounding areas with same-day delivery.";

export default function DumpsterRentalHernandoCounty() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Hernando County dumpster rental, dumpster rental Brooksville FL, dumpster rental Spring Hill FL, 10 yard dumpster, 15 yard dumpster, 20 yard dumpster Hernando, junk removal Hernando County FL, roll off dumpster Hernando"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-hernando-county-fl"
        />
      </Head>

      <LocationSchema
        areaServed={[
          "Brooksville",
          "Spring Hill",
          "Weeki Wachee",
          "Hernando County",
        ]}
        geoCoordinates={{ latitude: 28.5556, longitude: -82.4215 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-hernando-county-fl"
        locationName="Hernando County, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Hernando County"
          title="Choose the Perfect Dumpster Size for Your Hernando County Project"
          subtitle="We offer roll-off dumpster rentals throughout Brooksville, Spring Hill, and Weeki Wachee for all types of cleanup and renovation jobs."
          dumpsters={hernandoDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in Hernando County"
          subtitle="We make it fast and easy to rent a dumpster in Brooksville, Spring Hill, and all of Hernando County."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services in Hernando County."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="Hernando County Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in Brooksville, Spring Hill, and throughout Hernando County."
        />

        <DisposalGuidelines
          title="What Can Go in Your Hernando Dumpster?"
          subtitle="To ensure safe and responsible disposal, follow these guidelines when using a dumpster in Hernando County."
        />

        <CommonDumpsterUses
          title="Common Dumpster Uses in Hernando County"
          subtitle="Our dumpsters are ideal for a wide range of residential and commercial projects in Hernando County, FL."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-rated service."
        />
      </main>
    </>
  );
}
