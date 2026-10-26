import { useState } from "react";
import Head from "next/head";
import Seo from "@/components/Seo";
import { ReviewSchema } from "@/components/site/site-schema";
import { HomeHero } from "@/components/site/home-hero";
import {
  AudienceCards,
  CtaBand,
  GuideProof,
  PlanSteps,
  PriceCards,
  ServiceArea,
  SizeHelper,
  StakesSection,
  StoryParagraph,
  ValueProps,
} from "@/components/site/home-sections";
import { HomeFaq } from "@/components/site/home-faq";
import { reviews, siteConfig } from "@/lib/site-config";
import { useBooking } from "@/lib/use-booking";

const title = "Dumpster Rental in Pasco County, FL | Lupo Dumpster Rentals";
const description = `Flat-rate 10, 15 & 20-yard dumpsters in Pasco County, often delivered same day. ${siteConfig.rating.value}★ from ${siteConfig.rating.countLabel} neighbors. Book online or call ${siteConfig.phone}.`;

export default function Home() {
  const { selectedSize, setSelectedSize, scrollToBooking, bookSize } = useBooking();
  const [project, setProject] = useState("");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#14120E" />
        <Seo title={title} description={description} path="/" />
      </Head>

      {/* Matches the three reviews GuideProof shows. */}
      <ReviewSchema items={reviews.slice(0, 3)} />

      <div className="bg-white">
        <HomeHero selectedSize={selectedSize} onSizeChange={setSelectedSize} onBook={scrollToBooking} />
        <StakesSection />
        <ValueProps />
        <GuideProof />
        <PlanSteps onBook={scrollToBooking} />
        <PriceCards onSelect={bookSize} />
        <SizeHelper project={project} onProject={setProject} onSelect={bookSize} />
        <AudienceCards />
        <StoryParagraph />
        <ServiceArea />
        <HomeFaq />
        <CtaBand onBook={scrollToBooking} />
      </div>
    </>
  );
}
