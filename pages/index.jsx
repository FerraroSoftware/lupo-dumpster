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
      <Services />
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
