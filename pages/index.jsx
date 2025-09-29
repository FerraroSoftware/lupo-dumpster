import Head from "next/head";
import Calltoaction from "../components/Calltoactions";
import Contact from "../components/Contact";
import Featuredlist from "../components/Featuredlist";
import FeaturedServices from "../components/FeaturedServices";
import Hero from "../components/Hero";
import Junkremoval from "../components/Junkremoval";
import Mission from "../components/Mission";
import Pricing from "../components/Pricing";
import Steps from "../components/Steps";
import Testimonialsection from "../components/Testimonialsection";
import Twentyyard from "../components/Twentyyard";
import Imagegrid from "../components/Imagegrid";
import Herotwo from "../components/Herotwo";
import Contacttwo from "../components/Contacttwo";

import Features from "../components/Features";
import Coreservices from "../components/Coreservices";
import Featureswhite from "../components/Featureswhite";
import NewPricing from "../components/NewPricing";
import NewPricingtwo from "../components/NewPricingtwo";
import NewPricingthree from "../components/NewPricingthree";
import ContactHero from "../components/ContactHero";
import Virtualsteps from "../components/Virtualsteps";
import { MarqueeDemo } from "../components/MarqueeDemo";
import ContactUpdate from "../components/ContactUpdate";
import ContactHeroTwo from "../components/ContactHeroTwo";
import HeroUpdated from "@/components/HeroUpdated";
import RequestForm from "@/components/new/request-form";
import Testimonials from "@/components/new/testimonials";
import Services from "@/components/new/services";
import Process from "@/components/new/process";
import DumpsterSizes from "@/components/new/dumpster-sizes";
import HomeCleanouts from "@/components/new/home-cleanouts";
import RoofersSection from "@/components/new/roofers-section";
import ServiceLocations from "@/components/new/service-locations";
import BlogSection from "@/components/new/blog-section";
import FAQ from "@/components/new/faq";
import AboutFounder from "@/components/new/about-founder";
import { DumpsterOptions } from "@/components/new/dumpster-options";

import dumpsterrental from "../public/dumpsterrental.png";
import dumptrailers from "../public/dump-trailers.png";
import dumpstertrailer1 from "../public/dumpster-trailer-1.png";
import { ComparisonTableSection } from "@/components/new/comparison-table-section";

const newPortRicheyDumpsters = [
  {
    id: 1,
    imageUrl: dumpsterrental,
    imageAlt: "10 Yard Dumpster Rental in New Port Richey, FL",
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
    imageAlt: "15 Yard Dumpster Rental in New Port Richey, FL",
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
    imageAlt: "20 Yard Dumpster Rental in New Port Richey, FL",
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Pasco County Dumpster Rental Professionals</title>
        <meta
          name="description"
          content="Get fast and easy dumpster rentals in Pasco County. Lupo Dumpster Rentals offers various sizes of dumpsters for residential and commercial projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.lupodumpsterrentals.com/" />
        <meta
          name="keywords"
          content="Pasco County dumpster rental, dumpster rental Pasco County, roll-off dumpsters, junk removal Pasco County, residential dumpsters, commercial dumpsters"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Pasco County Dumpster Rental Professionals"
        />
        <meta
          property="og:description"
          content="Get fast and easy dumpster rentals in Pasco County. Lupo Dumpster Rentals offers various sizes of dumpsters for residential and commercial projects."
        />
      </Head>

      <HeroUpdated></HeroUpdated>
      <RequestForm />
      <Testimonials />
      <DumpsterOptions
        locationName="Pasco County"
        title="Choose the Perfect Dumpster Size for Your Pasco County Project"
        subtitle="We offer a variety of dumpster sizes to accommodate any project in Pasco County, from home cleanouts to major construction jobs."
        dumpsters={newPortRicheyDumpsters}
      />
      <Services />
      <ComparisonTableSection
        title="How We Compare to Other Dumpster Rental Companies"
        subtitle="See how Lupo Enterprises stacks up against other dumpster services."
      />
      <Process />
      {/* <DumpsterSizes /> */}
      <HomeCleanouts />
      <RoofersSection />
      <ServiceLocations />
      {/* <BlogSection /> */}
      <FAQ />
      <AboutFounder />

      {/* <MarqueeDemo></MarqueeDemo>
      <Coreservices></Coreservices>
    
      <Virtualsteps></Virtualsteps>

 
      <Featuredlist></Featuredlist>
      <Twentyyard></Twentyyard>
      <Calltoaction></Calltoaction> */}
    </>
  );
}
