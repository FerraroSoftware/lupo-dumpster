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

const heroData = {
  badgeText: "#1 Dumpster Rental Service in Trinity, FL",
  title: "Affordable Dumpster Rentals in Trinity, Florida",
  description:
    "Your trusted local source for dumpster rentals in Trinity. We offer 10, 15, and 20-yard dumpsters for any residential or commercial project.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated in Pasco County" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Trinity",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Trinity, FL",
  imageOverlayText: "Serving Trinity & Beyond",
};

const trinityDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in Trinity, FL",
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
    imageAlt: "15 Yard Dumpster Rental in Trinity, FL",
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
    imageAlt: "20 Yard Dumpster Rental in Trinity, FL",
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

const metatitle = "Trinity Dumpster Rental | Afforadable Dumpsters | Call Now";
const description =
  "Expert dumpster rental services in Trinity FL. Offering flexible scheduling, various sizes, and competitive pricing for your junk removal needs.";

export default function DumpsterRentalTrinity() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroService
          badgeText={heroData.badgeText}
          title={heroData.title}
          description={heroData.description}
          heroChecklistItems={heroData.heroChecklistItems}
          primaryButtonText={heroData.primaryButtonText}
          imageSrc={heroData.imageSrc}
          imageAlt={heroData.imageAlt}
          imageOverlayText={heroData.imageOverlayText}
        />

        {/* Dumpster Sizes Section */}
        <DumpsterOptions
          locationName="Trinity"
          title="Choose the Perfect Dumpster Size for Your Trinity Project"
          subtitle="We offer a variety of dumpster sizes to accommodate any project in Trinity, from small home cleanouts to large construction jobs."
          dumpsters={trinityDumpsters}
        />

        <RequestForm />

        <Testimonials />

        {/* Our Simple Rental Process in Trinity Section */}
        <RentalProcessSteps
          title="Our Simple Dumpster Rental Process in Trinity"
          subtitle="Renting a dumpster for your Trinity project is quick and easy with Lupo."
        />

        <ComparisonTableSection
          title="How We Compare to Other Dumpster Rental Companies"
          subtitle="See how Lupo Enterprises stacks up against other dumpster services."
        />

        <ServiceLocations />

        <RoofersSection />

        {/* Trinity FAQ Section */}
        <FaqSection
          title="Trinity Dumpster Rental FAQs"
          subtitle="Answers to common questions about renting a dumpster in Trinity, FL."
        />

        {/* What Can/Cannot Go In Section */}
        <DisposalGuidelines
          title="What Can Go in Your Trinity Dumpster?"
          subtitle="To ensure safe and responsible disposal, please follow these guidelines for your Trinity rental."
        />

        {/* Common Dumpster Uses in Trinity Section */}
        <CommonDumpsterUses
          title="Common Dumpster Uses in Trinity"
          subtitle="Our dumpsters are perfect for a wide range of projects in the Trinity area."
        />

        <CallToActionSection
          title="Ready for a Dumpster Rental?"
          description="Let Lupo Enterprises handle the heavy lifting. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-notch service."
        />
      </main>
    </>
  );
}
