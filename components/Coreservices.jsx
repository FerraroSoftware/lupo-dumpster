import Image from "next/image";
import garagecleanout from "../public/garage-clean-out.png";
import autismcenter from "../public/junk-removal-new-port-richey.png";
import dumptrailer from "../public/dump-trailer.png";
import trashremoval1 from "../public/trash-removal-1.png";
import { FadeIn } from "./FadeIn";
import demolition from "../public/demolition.jpg";
import lawncare from "../public/lawncare.jpg";

const categories = [
  {
    name: "Dumpster Rentals",
    href: "/services/dumpster-rental-new-port-richey-fl",
    imageSrc: dumptrailer, // Replace with your actual image import or path
    imageAlt:
      "Various sizes of dumpsters available for rent lined up in an open yard.",
    description:
      "Convenient and reliable dumpster rentals suitable for projects of all sizes, from home renovations to large construction sites.",
  },
  {
    name: "Junk Removal",
    href: "/services/junk-removal-new-port-richey-fl",
    imageSrc: trashremoval1, // Replace with your actual image import or path
    imageAlt:
      "A professional team removing and hauling away junk items from a property.",
    description:
      "Professional junk removal services to help you declutter your space efficiently. We handle all the heavy lifting and proper disposal.",
  },
  {
    name: "Bot Cat Services",
    href: "/services/bobcat-services",
    imageSrc: demolition, // Replace with your actual image import or path
    imageAlt: "bobcat",
    description:
      "Bobcat services for small demolition projects, diaster cleanup, deck removal, debris removal and much more. Call us today for a free quote.",
  },
  {
    name: "Lawn Care Services",
    href: "https://lupolawnservice.com/",
    imageSrc: lawncare, // Replace with your actual image import or path
    imageAlt:
      "A cleared and clean space following a comprehensive clean out service.",
    description:
      "Lawn care services for residential and commercial properties. We offer lawn mowing, edging, trimming, and more.",
  },
];

export default function Coreservices() {
  return (
    <div className="bg-white">
      <FadeIn>
        <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-none lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-wide text-black sm:text-4xl uppercase text-center">
            Lupo Enterprises Core Services
          </h2>
          <p className="mt-4 text-base text-zinc-700 text-center">
            We offer a wide range of services to help you with your project.
            From dumpster rentals to junk removal, we have you covered.
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden lg:aspect-h-6 lg:aspect-w-5 group-hover:contrast-125 transition-all duration-300 rounded-md"
                >
                  <Image
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-black uppercase">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
