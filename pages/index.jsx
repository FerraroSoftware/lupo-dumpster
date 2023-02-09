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
import Twentyyard from "../components/Twentyyard";
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
      <Hero></Hero>
      <Testimonialsection></Testimonialsection>
      <FeaturedServices></FeaturedServices>
      <Calltoaction></Calltoaction>
      {/* <Steps></Steps> */}
      <Featuredlist></Featuredlist>
      <Pricing></Pricing>
      <Mission></Mission>
      <Twentyyard></Twentyyard>
      <Contact></Contact>
    </>
  );
}
