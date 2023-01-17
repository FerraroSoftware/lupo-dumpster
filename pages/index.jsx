import Head from "next/head";
import Calltoaction from "../components/Calltoaction";
import Contact from "../components/Contact";
import Featuredlist from "../components/Featuredlist";
import FeaturedServices from "../components/FeaturedServices";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Pricing from "../components/Pricing";
import Steps from "../components/Steps";
import Testimonialsection from "../components/Testimonialsection";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lupo Dumpster Rentals - Junk Removal for New Port Richey, FL
        </title>
        <meta
          name="description"
          content="Need to clear out your space? Lupo Dumpster Rentals provides reliable junk removal services for both residential and commercial properties in New Port Richey, FL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Testimonialsection></Testimonialsection>
      <FeaturedServices></FeaturedServices>
      <Calltoaction></Calltoaction>
      {/* <Steps></Steps> */}
      <Mission></Mission>
      <Pricing></Pricing>
      <Featuredlist></Featuredlist>
      <Contact></Contact>
    </>
  );
}
