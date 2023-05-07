import trashremoval from "../public/trash-removal-1.png";
import trashremoval2 from "../public/trash-removal-2.png";
import trashremoval3 from "../public/trash-removal-3.png";
import trashremoval4 from "../public/trash-removal-4.png";
import trashremoval5 from "../public/trash-removal-5.png";
import trashremoval6 from "../public/trash-removal-6.png";
import trashremoval7 from "../public/trash-removal-7.png";
import trashremoval8 from "../public/trash-removal-8.png";

import Image from "next/image";

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity: 0.6,
    scale: 0.6,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0, 0.71, 0.2, 1.01],
    },
    delay: 0,
  },
};
const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval2,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval4,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval3,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval5,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval6,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval7,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval8,
  },
];

export default function Example() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center pb-10">
          <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl xl:text-5xl ">
            We Offer Junk Removal, Property Clean Outs and Much More Near New
            Port Richey
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">
            If you have junk, tree debris, construction debris, or any other
            type of debris that needs to be removed near New Port Richey, we can
            help. Contact us for a free quote.
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <motion.div
                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"
                viewport={{ once: true }}
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
              >
                <Image
                  src={file.source}
                  alt="junk removal"
                  className="pointer-events-none object-cover group-hover:opacity-90"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </motion.div>
              {/* <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-100">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {file.size}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
