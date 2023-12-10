import trashremoval from "../public/trash-removal-1.png";
import trashremoval2 from "../public/trash-removal-2.png";
import trashremoval3 from "../public/trash-removal-3.png";
import trashremoval4 from "../public/trash-removal-4.png";
import trashremoval5 from "../public/trash-removal-5.png";
import trashremoval6 from "../public/trash-removal-6.png";
import trashremoval7 from "../public/trash-removal-7.png";
import trashremoval8 from "../public/trash-removal-8.png";
import dumpsterrental from "../public/dumpsterrental.png";
import dumpstertrailer1 from "../public/dumpster-trailer-1.png";
import junktrailer from "../public/junk-trailer.png";
import junkbefore from "../public/junkbefore.jpg";
import junkafter from "../public/junkafter.jpg";

import Image from "next/image";

import { motion } from "framer-motion";

import { FadeIn, FadeInStagger } from "./FadeIn";

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
    source: junkbefore,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: junkafter,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: dumpstertrailer1,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: dumpsterrental,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: junktrailer,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: trashremoval8,
  },
];

export default function Imagegridclone({ header, ptag }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <FadeIn>
        <div className=" mx-auto max-w-9xl ">
          <div className="max-w-4xl mx-auto text-center pb-10">
            <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl uppercase text-center">
              {header}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">
              {ptag}
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 "
          >
            {files.map((file) => (
              <li key={file.source} className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden">
                  <Image
                    src={file.source}
                    alt="junk removal"
                    className="pointer-events-none object-cover group-hover:opacity-90"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
