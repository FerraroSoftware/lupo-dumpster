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
          Lupo Dumpster Rentals | Junk Removal for New Port Richey, FL
        </title>
        <meta
          name="description"
          content="Flat Rate Prices | Zero Hidden Fees For All Dumpster Rentals in New Port Richey, Florida. Call now for a local and effortless experience with Lupo Dumpster Rentals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero></Hero> */}
      <Herotwo></Herotwo>
      <FeaturedServices></FeaturedServices>
      <Junkremoval></Junkremoval>
      <Testimonialsection></Testimonialsection>
      <Contacttwo></Contacttwo>
      <Imagegrid></Imagegrid>
      <Calltoaction></Calltoaction>
      <Pricing></Pricing>
      {/* <Steps></Steps> */}
      <Featuredlist></Featuredlist>
      <Twentyyard></Twentyyard>
      <Mission></Mission>

      <Contact></Contact>
    </>
  );
}
