// pages/dumpster-rental-hillsborough-county-fl.tsx

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
  badgeText: "#1 Dumpster Rental Service in Hillsborough County, FL",
  title: "Reliable Dumpster Rentals in Hillsborough County",
  description:
    "Lupo Enterprises provides fast and affordable dumpster rental services throughout Hillsborough County. Choose from 10, 15, and 20-yard dumpsters for residential and commercial projects.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated" },
    { text: "Serving All of Hillsborough County" },
  ],
  primaryButtonText: "Get a Free Quote in Hillsborough County",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental in Hillsborough County, FL",
  imageOverlayText: "Serving Tampa, Brandon, Riverview & Beyond",
};

const hillsboroughDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental Hillsborough County, FL",
    isPopular: true,
    size: "10 Yard Dumpster",
    description:
      "Great for garage cleanouts, small renovations, and yard projects.",
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
    imageAlt: "15 Yard Dumpster Hillsborough County, FL",
    size: "15 Yard Dumpster",
    description:
      "Ideal for medium renovations, furniture removal, or flooring jobs.",
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
    imageAlt: "20 Yard Dumpster Rental Hillsborough County, FL",
    isPopular: false,
    size: "20 Yard Dumpster",
    description:
      "Perfect for construction debris, whole-home cleanouts, or roofing jobs.",
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
  "Hillsborough County Dumpster Rental | Affordable Dumpsters for Tampa, Brandon, Riverview";
const description =
  "Looking for a dumpster in Hillsborough County? Lupo Enterprises provides fast, reliable dumpster rental services across Tampa, Brandon, and beyond.";

export default function DumpsterRentalHillsboroughCounty() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Hillsborough County dumpster rental, dumpster rental Tampa FL, Brandon dumpster services, 10 yard dumpster Tampa, roll off dumpsters Hillsborough County, junk removal Tampa FL, 20 yard dumpster rental"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-hillsborough-county-fl"
        />
      </Head>

      <LocationSchema
        areaServed={["Tampa", "Brandon", "Riverview", "Hillsborough County"]}
        geoCoordinates={{ latitude: 27.9944, longitude: -82.4451 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-hillsborough-county-fl"
        locationName="Hillsborough County, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Hillsborough County"
          title="Choose the Right Dumpster for Your Hillsborough County Project"
          subtitle="From Tampa to Riverview, our dumpsters are perfect for residential and commercial cleanup projects."
          dumpsters={hillsboroughDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Easy Dumpster Rental Process in Hillsborough County"
          subtitle="Fast delivery, flexible scheduling, and local support from Lupo Enterprises."
        />

        <ComparisonTableSection
          title="Why Choose Us Over Other Dumpster Companies?"
          subtitle="See how our Hillsborough County service stands out from the rest."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="Dumpster Rental FAQs – Hillsborough County"
          subtitle="Answers to your most common questions about renting a dumpster in the Tampa area."
        />

        <DisposalGuidelines
          title="What Can You Throw Away in Hillsborough County?"
          subtitle="Review our disposal guidelines to make sure your rental goes smoothly."
        />

        <CommonDumpsterUses
          title="Common Uses for Dumpsters in Hillsborough County"
          subtitle="Our dumpsters are perfect for projects across Tampa, Brandon, Riverview, and surrounding areas."
        />

        <CallToActionSection
          title="Book Your Dumpster Today"
          description="Let Lupo Enterprises handle the heavy lifting. Get your dumpster booked fast with same-day delivery options."
        />
      </main>
    </>
  );
}
