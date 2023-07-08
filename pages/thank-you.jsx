import logo from "../public/logo.svg";
import Image from "next/image";
import Head from "next/head";
import castle from "../public/dumpster-trailer-1.png";

export default function thankyou() {
  return (
    <>
      <Head>
        <title>Lupo Dumpster Rentals || Thank you for contacting us!</title>
        <meta
          name="description"
          content="Thank you for contacting us for a dumpster rental or junk removal. We will be in contact shortly. Feel free to give us a call if you have an emergency that needs to be cleaned up!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <Image
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="SmarTour logo"
          />
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-100">
            Thanks for reaching out to Lupo Dumpster Rentals and Junk Removal!
          </h2>
          <p className="mt-4 text-center text-md leading-5 text-gray-300">
            We have received your message and will get back to you as soon as
            possible.
          </p>
        </div>
        <Image
          src={castle}
          className="mx-auto max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-5xl rounded-md py-4 "
          alt="thank you "
        />
      </div>
    </>
  );
}
