import React from "react";
import Image from "next/image";
import truck from "../public/dump-trailer.png";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12">
          <div className="text-center lg:col-span-5 sm:text-left">
            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Our Commitment to Excellence
            </h2>
            <p className="mt-8 text-lg font-normal text-gray-400">
              At Lupo Dumpster Rentals, our mission is to provide our customers
              with unparalleled service and solutions for their waste management
              needs. Our team is committed to safety, integrity, and quality in
              everything we do.
            </p>
            {/* <p className="mt-8 text-lg font-normal text-gray-400">
              Our team is committed to safety, integrity, and quality in
              everything we do. We are dedicated to making a difference in our
              industry and providing our customers with a seamless and
              stress-free experience.
            </p> */}
            <p className="mt-8 text-lg font-normal text-gray-400">
              We are proud to provide our services to the residents and
              businesses in Pasco County and surrounding areas, including
              Holiday, Tampa, South Tampa, Port Richey, New Port Richey, Dade
              City, Spring Hill, Pinellas County, Land O Lakes, Lutz, Odessa,
              Hudson, Trinity, Oldsmar, and Palm Harbor.
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <Link
                href="#contact"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-gray-200 bg-transparent 
                border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-all duration-200"
                role="button"
              >
                {" "}
                Book a Trailer{" "}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Image className="w-full" src={truck} alt="dump trailer" />

            <div className="grid grid-cols-1 mt-12 text-center gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left">
              <div>
                <h3 className="text-xl font-normal text-white">
                  Customer Satisfaction
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  We strive to exceed our customer expectations and ensure
                  satisfaction for every rental.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-normal text-white">
                  Ethical Standards
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  We operate with integrity and adhere to the highest ethical
                  standards in all of our business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
