import { FadeIn } from "./FadeIn";
import Image from "next/image";
import dumpsterrental from "../public/dumpsterrental.png";
import autismcenter from "../public/junk-removal-new-port-richey.png";
import Link from "next/link";
export default function Example() {
  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={autismcenter}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black bg-opacity-50"
      />
      <FadeIn>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl uppercase">
            Walking with Integrity
          </h2>
          <p className="mt-3 text-lg text-white">
            We provide top-quality dumpster rental services to meet your unique
            needs. Our team is dedicated to delivering exceptional service and
            exceeding your expectations.
          </p>

          <Link
            href="/about-us"
            className="mt-8 block w-full px-8 py-3   hover:text-zinc-700 sm:w-auto
           uppercase text-sm font-semibold text-black shadow-sm  
                  transition-colors duration-300 bg-white rounded-md
          "
          >
            Read our story
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
