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
import Process from "../components/Process";
import Features from "../components/Features";
import Coreservices from "../components/Coreservices";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lupo Dumpster Rentals and Junk Removal || New Port Richey</title>
        <meta
          name="description"
          content="Get fast and easy junk removal and dumpster rentals. Lupo Dumpster Rentals and Junk Removal offers various sizes of dumpsters for residential and commercial projects. Book online now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero></Hero> */}
      <Herotwo></Herotwo>
      <Features></Features>
      <Coreservices></Coreservices>
      <Process />
      <Testimonialsection></Testimonialsection>
      {/* <Junkremoval></Junkremoval> */}
      {/* <Contacttwo></Contacttwo> */}
      <Featuredlist></Featuredlist>
      <Imagegrid></Imagegrid>
      <Pricing></Pricing>
      <Twentyyard></Twentyyard>
      {/* <Calltoaction></Calltoaction> */}
      {/* <FeaturedServices></FeaturedServices> */}
      {/* <Steps></Steps> */}
      {/* <Mission></Mission> */}

      <Contact></Contact>
    </>
  );
}
