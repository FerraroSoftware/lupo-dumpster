import Image from "next/image";
import garagecleanout from "../public/garage-clean-out.png";
import autismcenter from "../public/junk-removal-new-port-richey.png";
import dumptrailer from "../public/dump-trailer.png";
import trashremoval1 from "../public/trash-removal-1.png";
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
    name: "Clean Out Services",
    href: "/services/hoarding-cleanup-new-port-richey-fl",
    imageSrc: garagecleanout, // Replace with your actual image import or path
    imageAlt:
      "A cleared and clean space following a comprehensive clean out service.",
    description:
      "Full-service clean out solutions for homes, estates, and businesses. Leave the clean-ups to us, and enjoy a hassle-free service.",
  },
];

export default function Coreservices() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl uppercase text-center">
          Local Dumpster Rental Services
        </h2>
        <p className="mt-4 text-base text-gray-300 text-center">
          We provide a variety of dumpster sizes perfect for any project,
          ensuring efficient disposal with prompt delivery and pickup.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden lg:aspect-h-6 lg:aspect-w-5 group-hover:contrast-125 transition-all duration-300"
              >
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white uppercase">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
