import React from "react";
import Head from "next/head";

import Link from "next/link";
import { Button } from "../../components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

import dumpsterrentalpros from "../../public/dumpster-rental-pros.jpg";

import {
  Check,
  Phone,
  Home,
  Wrench,
  Trees,
  Building,
  HelpCircle,
  PackageCheck,
  PackageX,
  PhoneCall,
  CalendarCheck2,
  Truck,
  Trash2,
  Star,
  CheckCircle2,
} from "lucide-react";
import RequestForm from "../..//components/new/request-form";
import ServiceLocations from "@/components/new/service-locations";
import Testimonials from "@/components/new/testimonials";
import HeroService from "@/components/new/hero-service";
import { DumpsterOptions } from "@/components/new/dumpster-options";
import { DisposalGuidelines } from "@/components/new/disposal-guidelines";
import { CommonDumpsterUses } from "@/components/new/common-dumpster-uses";
import { RentalProcessSteps } from "@/components/new/rental-process-steps";
import { WhyChooseUs } from "@/components/new/why-choose-us";
import { FaqSection } from "@/components/new/faq-section";
import { ComparisonTableSection } from "@/components/new/comparison-table-section";
import RoofersSection from "@/components/new/roofers-section";
import { CallToActionSection } from "@/components/new/call-to-action-section";

import dumpsterrental from "../../public/dumpsterrental.png";
import dumptrailers from "../../public/dump-trailers.png";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";
import LocationSchema from "@/components/new/LocationSchema";

const heroData = {
  badgeText: "#1 Dumpster Rental Service in Pinellas Park, FL",
  title: "Affordable Dumpster Rentals in Pinellas Park, FL",
  description:
    "Lupo Enterprises provides fast and affordable dumpster rentals in Pinellas Park, FL. Choose from 10, 15, and 20-yard dumpsters for residential or commercial needs.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated in Pinellas County" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Pinellas Park, FL",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Pinellas Park, FL",
  imageOverlayText: "Serving Pinellas Park, FL & Surrounding Areas",
};

const pinellasParkDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in Pinellas Park, FL",
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
    imageAlt: "15 Yard Dumpster Rental in Pinellas Park, FL",
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
    imageAlt: "20 Yard Dumpster Rental in Pinellas Park, FL",
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
  "Pinellas Park FL Dumpster Rental | Affordable Dumpsters | Call Now";
const description =
  "Need a dumpster in Pinellas Park, FL? Lupo Enterprises offers same-day delivery, upfront pricing, and multiple dumpster sizes for any job.";

export default function DumpsterRentalPinellasParkFL() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Pinellas Park dumpster rental, dumpster rental Pinellas Park FL, 10 yard dumpster FL, 15 yard dumpster Pinellas Park FL, 20 yard dumpster FL, junk removal Pinellas Park FL, roll off dumpster Pinellas Park FL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-pinellas-park-fl"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocationSchema
        areaServed={["Pinellas Park"]}
        geoCoordinates={{ latitude: 27.8429, longitude: -82.6995 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-pinellas-park-fl"
        locationName="Pinellas Park, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Pinellas Park"
          title="Choose the Perfect Dumpster Size for Your Pinellas Park, FL Project"
          subtitle="We offer a variety of dumpster sizes for cleanouts, construction, and more in Pinellas Park, FL."
          dumpsters={pinellasParkDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in Pinellas Park, FL"
          subtitle="Renting a dumpster in Pinellas Park, FL is fast and hassle-free with Lupo Enterprises."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="Pinellas Park FL Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in Pinellas Park, FL."
        />

        <DisposalGuidelines
          title="What Can Go in Your Pinellas Park, FL Dumpster?"
          subtitle="To ensure safe and responsible disposal, please follow these guidelines for your Pinellas Park, FL rental."
        />

        <CommonDumpsterUses
          title="Common Dumpster Uses in Pinellas Park, FL"
          subtitle="Our dumpsters are great for home improvement, junk removal, or contractor jobs in Pinellas Park, FL."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project in Pinellas Park today!"
        />
      </main>
    </>
  );
}
