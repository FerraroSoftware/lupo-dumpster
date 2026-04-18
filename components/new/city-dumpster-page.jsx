/**
 * CityDumpsterPage — shared §5.8 14-section template rendered by every
 * `/services/dumpster-rental-*` page. Takes a `data` object from
 * `lib/cities.js` and renders Head + JSON-LD schema + 14 sections in order.
 *
 * This is the single source of truth for city dumpster-rental page layout.
 * New section? Edit this file once. New city? Add an entry to lib/cities.js
 * and a thin wrapper page in pages/services/.
 */

import React from "react";
import Head from "next/head";
import Seo from "@/components/Seo";

import dumpsterrentalpros from "../../public/dumpster-rental-pros.jpg";
import dumpsterrental from "../../public/dumpsterrental.png";
import dumptrailers from "../../public/dump-trailers.png";
import dumpstertrailer1 from "../../public/dumpster-trailer-1.png";

import RequestForm from "./request-form";
import ServiceLocations from "./service-locations";
import HeroService from "./hero-service";
import { DumpsterOptions } from "./dumpster-options";
import { DisposalGuidelines } from "./disposal-guidelines";
import { CommonDumpsterUses } from "./common-dumpster-uses";
import { RentalProcessSteps } from "./rental-process-steps";
import { FaqSection } from "./faq-section";
import { ComparisonTableSection } from "./comparison-table-section";
import RoofersSection from "./roofers-section";
import { CallToActionSection } from "./call-to-action-section";
import LocationSchema from "./LocationSchema";

import Breadcrumbs from "@/components/Breadcrumbs";
import { IntroSection } from "./intro-section";
import { WhyChooseLocal } from "./why-choose-local";
import { PricingTransparency } from "./pricing-transparency";
import { NeighborhoodsServed } from "./neighborhoods-served";
import { PermitsInfo } from "./permits-info";
import { RentalVsJunkRemoval } from "./rental-vs-junk-removal";
import { ServiceAreaMap } from "./service-area-map";
import { ServiceAreaNearby } from "./service-area-nearby";
import { OtherServicesInCity } from "./other-services-in-city";
import { LocalReviews } from "./local-reviews";

import { getCityMeta, getNearbyLinks } from "@/lib/cities";

function buildDumpsters(city) {
  return [
    {
      id: 1,
      imageUrl: dumpsterrental,
      imageAlt: `10 Yard Dumpster Rental in ${city}, FL`,
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
      imageAlt: `15 Yard Dumpster Rental in ${city}, FL`,
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
      imageAlt: `20 Yard Dumpster Rental in ${city}, FL`,
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
}

export default function CityDumpsterPage({ data }) {
  if (!data) {
    throw new Error("CityDumpsterPage: missing `data` prop (from lib/cities.js)");
  }

  const {
    city,
    state = "FL",
    county,
    urlSlug,
    zipCodes,
    neighborhoods,
    geoCoords,
    countyPermitPhone,
    cityPermitPhone,
    isCountyPage = false,
  } = data;

  const { metatitle, description, keywords, path, locationUrl, mapEmbedSrc } =
    getCityMeta(data);

  const nearbyLinks = getNearbyLinks(data);

  const heroData = {
    badgeText: `#1 Dumpster Rental Service in ${city}, ${state}`,
    title: isCountyPage
      ? `Affordable Dumpster Rentals across ${city}, ${state}`
      : `Affordable Dumpster Rentals in ${city}, ${state}`,
    description: `Lupo Dumpster Rentals delivers reliable, flat-rate dumpster rentals across ${city}. Choose from 10, 15, or 20-yard roll-offs for residential and commercial projects — same-day service available.`,
    heroChecklistItems: [
      { text: "Same-Day & Next-Day Delivery Available" },
      { text: "Transparent, Competitive Pricing" },
      { text: `Locally Owned & Operated in ${county}` },
      { text: "Residential & Commercial Dumpsters" },
    ],
    primaryButtonText: `Get a Free Quote for ${city}`,
    imageSrc: dumpsterrentalpros,
    imageAlt: `Lupo Dumpster Rental truck in ${city}, ${state}`,
    imageOverlayText: `Serving ${city} & Nearby Areas`,
  };

  const dumpsters = buildDumpsters(city);

  const dumpsterOptionsTitle = isCountyPage
    ? `Choose the Perfect Dumpster Size for Your ${city} Project`
    : `Choose the Perfect Dumpster Size for Your ${city} Project`;
  const dumpsterOptionsSubtitle = `We offer a variety of dumpster sizes to accommodate any project in ${city}, from home cleanouts to major construction jobs.`;

  const rentalProcessTitle = `Our Simple Dumpster Rental Process in ${city}`;
  const rentalProcessSubtitle = `Renting a dumpster in ${city} is quick and hassle-free with Lupo Dumpster Rentals.`;

  const faqTitle = `${city} Dumpster Rental FAQs`;
  const faqSubtitle = `Answers to common questions about renting a dumpster in ${city}, ${state}.`;

  const disposalTitle = `What Can Go in Your ${city} Dumpster?`;
  const disposalSubtitle = `To ensure safe and responsible disposal, please follow these guidelines for your ${city} rental.`;

  const commonUsesTitle = `Common Dumpster Uses in ${city}`;
  const commonUsesSubtitle = `Our dumpsters are perfect for a wide range of projects in the ${city} area.`;

  const comparisonTitle = "How We Compare to Other Dumpster Rental Companies";
  const comparisonSubtitle = `See how Lupo Enterprises stacks up against other dumpster services near ${city}.`;

  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <Seo title={metatitle} description={description} path={path} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LocationSchema
        areaServed={[city]}
        geoCoordinates={geoCoords}
        locationUrl={locationUrl}
        locationName={`${city}, ${state}`}
        slug={urlSlug}
      />

      <main className="min-h-screen">
        {/* §5.8 14-section template — driven by lib/cities.js */}

        {/* 1. Hero */}
        <HeroService {...heroData} />

        {/* Breadcrumbs — below hero per §8.6 */}
        <Breadcrumbs />

        {/* 2. Intro — keyword in first 100 chars */}
        <IntroSection
          city={city}
          county={county}
          topNeighborhoods={(neighborhoods && neighborhoods.slice(0, 5)) || []}
        />

        {/* 3. Why choose Lupo locally */}
        <WhyChooseLocal
          city={city}
          county={county}
          zipCodes={zipCodes}
        />

        {/* 4. Dumpster sizes */}
        <DumpsterOptions
          locationName={city}
          title={dumpsterOptionsTitle}
          subtitle={dumpsterOptionsSubtitle}
          dumpsters={dumpsters}
        />

        {/* 5. Pricing transparency */}
        <PricingTransparency city={city} />

        <RequestForm />

        {/* 6. Rental process */}
        <RentalProcessSteps
          title={rentalProcessTitle}
          subtitle={rentalProcessSubtitle}
        />

        {/* 7. Neighborhoods served */}
        <NeighborhoodsServed
          city={city}
          county={county}
          neighborhoods={neighborhoods}
          zipCodes={zipCodes}
        />

        {/* 8. Common projects */}
        <CommonDumpsterUses
          title={commonUsesTitle}
          subtitle={commonUsesSubtitle}
        />

        {/* 9. What can / can't go in */}
        <DisposalGuidelines
          title={disposalTitle}
          subtitle={disposalSubtitle}
        />

        {/* 10. Permits info */}
        <PermitsInfo
          city={city}
          county={county}
          countyPermitPhone={countyPermitPhone}
          cityPermitPhone={cityPermitPhone}
        />

        {/* 11. Rental vs. junk removal */}
        <RentalVsJunkRemoval city={city} />

        <ComparisonTableSection
          title={comparisonTitle}
          subtitle={comparisonSubtitle}
        />

        {/* 12. Service area map */}
        <ServiceAreaMap
          city={city}
          county={county}
          embedSrc={mapEmbedSrc}
        />

        {/* 12b. Nearby city cross-links — §8.4 hub-and-spoke */}
        <ServiceAreaNearby
          currentCity={city}
          state={state}
          nearby={nearbyLinks}
        />

        {/* 12c. Other cleanup services in this city — §8.5 */}
        <OtherServicesInCity
          city={city}
          state={state}
          citySlug={urlSlug}
        />

        <ServiceLocations />

        {/* 13. FAQ — visible Q&As + matching FAQPage JSON-LD */}
        <FaqSection
          title={faqTitle}
          subtitle={faqSubtitle}
          city={city}
          county={county}
          countyPermitPhone={countyPermitPhone}
          schemaId={`faq-schema-${urlSlug}`}
        />

        {/* 14. Local reviews — city-specific only. The generic <Testimonials />
            block was removed from this template because it rendered back-to-back
            with <LocalReviews /> on every city page and every reviewer was
            labeled with an NPR-area city (Michael S. — New Port Richey, Jessica
            L. — Trinity, David P. — Port Richey), which contradicted the
            city-specific headline above it. Use <Testimonials /> only on pages
            that do NOT render <LocalReviews />. */}
        <LocalReviews city={city} />

        <RoofersSection />

        {/* CTA + phone */}
        <CallToActionSection
          title={`Ready for a Dumpster Rental in ${city}?`}
          description={`Let Lupo Dumpster Rentals handle the heavy lifting in ${city}. Get a fast, free quote for your dumpster rental or junk removal project today and experience our top-notch service.`}
        />
      </main>
    </>
  );
}
