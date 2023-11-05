import Image from "next/image";

import junktrailer from "../public/junk-trailer.png";
import dumpsterrental from "../public/dumpsterrental.png";
import dumpstertrailer1 from "../public/dumpster-trailer-1.png";
import junkremoval from "../public/junkremoval.jpg";
const features = [
  {
    name: "Efficient and Reliable Junk Removal",
    description:
      "Our team provides fast, reliable junk removal services that cater to your busy schedule. With us, decluttering your space is hassle-free. Call now for a quick, no-obligation estimate.",
    imageSrc: junkremoval,
    imageAlt: "Professional team removing junk",
  },
  {
    name: "Comprehensive Junk Removal for Every Need",
    description:
      "From residential to commercial, small-scale to large, we handle all forms of junk removal with efficiency and care. Discover a cleaner space today with our expert services.",
    imageSrc: dumpsterrental,
    imageAlt: "Diverse junk items ready for removal",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Multiblock() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-full lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-wide text-black sm:text-4xl uppercase">
            Your Local Junk Removal Team
          </h2>
          <p className="mt-4 text-gray-500">
            Discover the benefits that make our services stand out. Quality,
            reliability, and sustainability are the pillars of our exceptional
            service offerings.
          </p>
        </div>

        <div className="mt-16 space-y-16 px-0 md:px-10">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12  lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-8 xl:col-start-9"
                    : "lg:col-start-1",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg lg:text-2xl tracking-wide text-black uppercase">
                  {feature.name}
                </h3>
                <div className="border-black border w-12 mt-2"></div>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600   lg:mt-6 lg:leading-8">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-6 xl:col-start-5",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-3 aspect-w-5 overflow-hidden  bg-gray-100">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-cover object-center"
                  />
                </div>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
