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
import Process from "../components/Process";
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
      </Head>
      {/* <Herotwo></Herotwo> */}
      {/* <ContactHero header="Pasco County Dumpster Rental Professionals"></ContactHero> */}
      {/* <ContactHeroTwo header="Pasco County Dumpster Rental Professionals"></ContactHeroTwo> */}
      {/* <ContactUpdate></ContactUpdate> */}
      <ContactHeroTwo />
      <MarqueeDemo></MarqueeDemo>
      <Coreservices></Coreservices>
      {/* <Process /> */}
      {/* <Pricing></Pricing> */}
      {/* <NewPricing></NewPricing> */}
      {/* <NewPricingtwo></NewPricingtwo> */}
      {/* <NewPricingthree></NewPricingthree> */}
      {/* <Testimonialsection></Testimonialsection> */}
      <Virtualsteps></Virtualsteps>

      {/* <Features></Features> */}
      {/* <Featureswhite></Featureswhite> */}
      {/* <Imagegrid></Imagegrid> */}
      <Featuredlist></Featuredlist>
      <Twentyyard></Twentyyard>
      <Calltoaction></Calltoaction>
      {/* <Contact></Contact> */}
    </>
  );
}
