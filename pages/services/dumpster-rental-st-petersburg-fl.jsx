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
  badgeText: "#1 Dumpster Rental Service in St. Petersburg, FL",
  title: "Affordable Dumpster Rentals in St. Petersburg, FL",
  description:
    "Get fast, reliable dumpster rentals in St. Petersburg, FL. Choose from 10, 15, and 20-yard dumpsters for residential and commercial jobs.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated in Pinellas County" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for St. Petersburg, FL",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in St. Petersburg, FL",
  imageOverlayText: "Serving St. Petersburg, FL & Surrounding Areas",
};

const stPeteDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in St. Petersburg, FL",
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
    imageAlt: "15 Yard Dumpster Rental in St. Petersburg, FL",
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
    imageAlt: "20 Yard Dumpster Rental in St. Petersburg, FL",
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
  "St. Petersburg FL Dumpster Rental | Affordable Dumpsters | Call Now";
const description =
  "Top-rated dumpster rental in St. Petersburg, FL. Lupo Enterprises offers fast delivery, upfront pricing, and multiple dumpster sizes for all your cleanup needs.";

export default function DumpsterRentalStPetersburgFL() {
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
          content="St. Petersburg dumpster rental, dumpster rental St. Petersburg FL, 10 yard dumpster St. Pete FL, 15 yard dumpster FL, 20 yard dumpster St. Petersburg FL, junk removal St. Pete FL, roll off dumpster St. Petersburg FL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-st-petersburg-fl"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocationSchema
        areaServed={["St. Petersburg"]}
        geoCoordinates={{ latitude: 27.7676, longitude: -82.6403 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-st-petersburg-fl"
        locationName="St. Petersburg, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="St. Petersburg"
          title="Choose the Perfect Dumpster Size for Your St. Petersburg, FL Project"
          subtitle="We offer a variety of dumpster sizes to accommodate any project in St. Petersburg, FL — from cleanouts to renovations."
          dumpsters={stPeteDumpsters}
        />

        <RequestForm />

        <Testimonials />

        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in St. Petersburg, FL"
          subtitle="Renting a dumpster in St. Petersburg, FL is fast and easy with Lupo Enterprises."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        <ServiceLocations />

        <RoofersSection />

        <FaqSection
          title="St. Petersburg FL Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in St. Petersburg, FL."
        />

        <DisposalGuidelines
          title="What Can Go in Your St. Petersburg, FL Dumpster?"
          subtitle="To ensure safe and responsible disposal, please follow these guidelines for your St. Petersburg, FL rental."
        />

        <CommonDumpsterUses
          title="Common Dumpster Uses in St. Petersburg, FL"
          subtitle="Our dumpsters are ideal for a wide range of residential and commercial projects in St. Pete."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-rated service."
        />
      </main>
    </>
  );
}
