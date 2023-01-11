import React from "react";
import Image from "next/image";
import lupotestimonial from "../public/lupo-testimonial.png";

export default function Calltoaction() {
  return (
    <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full"
          src={lupotestimonial}
          alt="testimonial with customer"
        />
      </div>

      <div className="absolute inset-0 bg-[#14120E]/50"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Experience You Can Count On
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-white sm:mt-6">
            Our expertise has been honed through years of practice, ensuring
            quality service. Clients have trusted us for our experience and
            results, time and time again.
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              href="#contact"
              title=""
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-opacity-90"
              role="button"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
