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
  badgeText: "#1 Dumpster Rental Service in Pinellas County, FL",
  title: "Affordable Dumpster Rentals in Pinellas County, Florida",
  description:
    "Your trusted local source for dumpster rentals across Pinellas County. We offer 10, 15, and 20-yard dumpsters for any residential or commercial project.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated in Pasco County" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Pinellas County",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Pinellas County, FL",
  imageOverlayText: "Serving Pinellas County & Beyond",
};

const pinellasDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in Pinellas County, FL",
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
    imageAlt: "15 Yard Dumpster Rental in Pinellas County, FL",
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
    imageAlt: "20 Yard Dumpster Rental in Pinellas County, FL",
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
  "Pinellas County Dumpster Rental | Affordable Dumpsters | Call Now";
const description =
  "Top-rated dumpster rental services in Pinellas County, FL. We offer multiple dumpster sizes, flexible scheduling, and upfront pricing for your cleanup or construction needs.";

export default function DumpsterRentalPinellasCounty() {
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
          content="Pinellas County dumpster rental, dumpster rental Pinellas FL, dumpster rental services, 10 yard dumpster Pinellas, 15 yard dumpster, 20 yard dumpster Pinellas, junk removal Pinellas FL, roll off dumpster Pinellas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-pinellas-county"
        />
      </Head>
      <LocationSchema
        areaServed={["Pinellas County"]}
        geoCoordinates={{ latitude: 27.8764, longitude: -82.777 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-pinellas-county"
        locationName="Pinellas County, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Pinellas County"
          title="Choose the Perfect Dumpster Size for Your Pinellas County Project"
          subtitle="We offer a variety of dumpster sizes to accommodate any project in Pinellas County, from home cleanouts to commercial jobs."
          dumpsters={pinellasDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in Pinellas County"
          subtitle="Renting a dumpster in Pinellas County is hassle-free with Lupo Enterprises."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="Pinellas County Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in Pinellas County, FL."
        />

        <DisposalGuidelines
          title="What Can Go in Your Pinellas County Dumpster?"
          subtitle="To ensure safe and responsible disposal, please follow these guidelines for your Pinellas County rental."
        />

        <CommonDumpsterUses
          title="Common Dumpster Uses in Pinellas County"
          subtitle="Our dumpsters are perfect for a wide range of projects across Pinellas County."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-notch service."
        />
      </main>
    </>
  );
}
