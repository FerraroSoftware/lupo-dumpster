import Head from "next/head";
import Calltoaction from "../components/Calltoaction";
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

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lupo Dumpster Rentals and Junk Removal for New Port Richey, FL
        </title>
        <meta
          name="description"
          content="Discover Lupo Dumpster Rentals, your reliable junk removal solution. Offering various sizes of dumpsters for residential and commercial projects. Book online now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero></Hero> */}
      <Herotwo></Herotwo>
      <FeaturedServices></FeaturedServices>
      <Junkremoval></Junkremoval>
      <Contacttwo></Contacttwo>
      <Imagegrid></Imagegrid>
      <Calltoaction></Calltoaction>
      <Testimonialsection></Testimonialsection>
      <Featuredlist></Featuredlist>
      <Pricing></Pricing>
      {/* <Steps></Steps> */}
      <Twentyyard></Twentyyard>
      <Mission></Mission>

      <Contact></Contact>
    </>
  );
}
