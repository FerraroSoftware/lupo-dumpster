// pages/dumpster-rental-keystone-fl.tsx

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
  badgeText: "#1 Dumpster Rental Service in Keystone, FL",
  title: "Affordable Dumpster Rentals in Keystone, Florida",
  description:
    "Lupo Enterprises provides reliable and fast dumpster rental services in Keystone, FL. Choose from 10, 15, and 20-yard dumpsters for your project.",
  heroChecklistItems: [
    { text: "Same-Day & Next-Day Delivery Available" },
    { text: "Transparent, Competitive Pricing" },
    { text: "Locally Owned & Operated" },
    { text: "Residential & Commercial Dumpsters" },
  ],
  primaryButtonText: "Get a Free Quote for Keystone",
  imageSrc: dumpsterrentalpros,
  imageAlt: "Lupo Dumpster Rental truck in Keystone, FL",
  imageOverlayText: "Serving Keystone & Nearby Areas",
};

const keystoneDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental Keystone, FL",
    isPopular: true,
    size: "10 Yard Dumpster",
    description:
      "Perfect for smaller projects such as home cleanouts, yard debris, or minor renovations.",
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
    imageAlt: "15 Yard Dumpster Keystone, FL",
    size: "15 Yard Dumpster",
    description:
      "Ideal for mid-sized cleanouts, furniture removal, or remodeling projects.",
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
    imageAlt: "20 Yard Dumpster Rental Keystone, FL",
    isPopular: false,
    size: "20 Yard Dumpster",
    description:
      "Great for large projects such as construction, roofing, or full property cleanouts.",
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
  "Keystone Dumpster Rental | Affordable Roll-Off Dumpsters in FL";
const description =
  "Need a dumpster rental in Keystone, FL? Lupo Enterprises offers fast delivery, competitive pricing, and multiple dumpster sizes for your cleanup project.";

export default function DumpsterRentalKeystone() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Keystone dumpster rental, dumpster rental Keystone FL, roll off dumpsters, junk removal Keystone FL, 10 yard dumpster Keystone, 15 yard dumpster, 20 yard dumpster Keystone"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.lupodumpsterrentals.com/services/dumpster-rental-keystone-fl"
        />
      </Head>

      <LocationSchema
        areaServed={["Keystone"]}
        geoCoordinates={{ latitude: 28.1531, longitude: -82.6101 }}
        locationUrl="https://www.lupodumpsterrentals.com/services/dumpster-rental-keystone-fl"
        locationName="Keystone, FL"
      />

      <main className="min-h-screen">
        <HeroService {...heroData} />

        <DumpsterOptions
          locationName="Keystone"
          title="Find the Right Dumpster Size for Your Keystone Project"
          subtitle="Our team offers flexible rental options to suit residential and commercial projects across Keystone."
          dumpsters={keystoneDumpsters}
        />

        <RequestForm />
        <Testimonials />

        <RentalProcessSteps
          title="How Our Dumpster Rental Process Works in Keystone"
          subtitle="Simple, reliable service from quote to pickup."
        />

        <ComparisonTableSection
          title="Why Choose Lupo for Your Dumpster Needs?"
          subtitle="See how we compare to other rental companies in Keystone."
        />

        <ServiceLocations />
        <RoofersSection />

        <FaqSection
          title="Dumpster Rental FAQs for Keystone, FL"
          subtitle="Get answers to your top questions before you rent."
        />

        <DisposalGuidelines
          title="Keystone Dumpster Guidelines"
          subtitle="Know what you can and can't toss into your rental dumpster."
        />

        <CommonDumpsterUses
          title="Common Uses for Dumpsters in Keystone"
          subtitle="Home cleanouts, construction, yard projects, and more."
        />

        <CallToActionSection
          title="Rent Your Dumpster in Keystone Today"
          description="Call now or request a quote online for fast, reliable service from Lupo Enterprises."
        />
      </main>
    </>
  );
}
