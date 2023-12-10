import React from "react";
import Image from "next/image";
import noise from "../public/noise.png";
import gradient from "../public/gradient.svg";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden lg:py-20 xl:py-24 sm:py-16">
      <div className="absolute bottom-0 left-0 transform -translate-x-12  lg:translate-x-0">
        <Image src={gradient} alt="" />
      </div>

      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full opacity-50"
          src={noise}
          alt=""
        />
      </div>

      <FadeIn>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 xl:grid-cols-7 gap-x-8 xl:gap-x-16">
            <div className="max-w-md mx-auto text-center xl:col-span-3 lg:max-w-sm lg:mx-0 lg:text-left">
              <p className="uppercase text-3xl font-normal text-white sm:text-4xl">
                Serving all of Tampa Bay Area
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <Link
                  href="/contact"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal  bg-transparent 
                 text-gray-200 transition-all duration-200 border border-red-600  hover:bg-red-600 hover:text-white"
                  role="button"
                >
                  {" "}
                  Book Trailer Now{" "}
                </Link>
              </div>
            </div>

            <div className="overflow-hidden lg:-ml-12 lg:-my-8 bg-base-900 rounded-xl xl:col-span-4">
              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 gap-x-12 xl:gap-x-16">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Dumpsters
                    </h3>

                    <ul className="mt-6 space-y-4">
                      <li>
                        <Link
                          href="/services/dumpster-rental-new-port-richey-fl"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Dumpster Rentals{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/haul-away-junk"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Haul Away Junk{" "}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/junk-pick-up"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Junk Pick Up{" "}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/dumpster-trailer-rental"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Dumpster Trailers{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Junk Removals
                    </h3>

                    <ul className="mt-6 space-y-4">
                      <li>
                        <Link
                          href="/services/junk-removal-new-port-richey-fl"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Junk Removal{" "}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/hoarding-cleanup"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Hoarding Cleanup{" "}
                        </Link>
                      </li>

                      <li>
                        <a
                          href="/services/appliance-removal"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Appliance Removal{" "}
                        </a>
                      </li>

                      <li>
                        <Link
                          href="/services/construction-debris-removal"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Construction Debris{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Company
                    </h3>

                    <ul className="mt-6 space-y-4">
                      <li>
                        <Link
                          href="/services"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          All Services{" "}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/pricing"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Pricing{" "}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/contact"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Contact{" "}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/garage-cleaning-service"
                          title=""
                          className="flex text-base font-normal text-gray-300 transition-all transform hover:text-white "
                        >
                          {" "}
                          Garage Cleaning{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr className="mt-12 border-gray-800 sm:mt-16" />

                <div className="flex items-center justify-between mt-6">
                  <span className="text-lg font-normal text-gray-300">
                    {" "}
                    Follow us on:{" "}
                  </span>

                  <div className="flex items-center justify-end space-x-4">
                    <Link
                      href="https://www.facebook.com/LupoLLC"
                      title=""
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center w-8 h-8 text-white transition-all bg-transparent rounded-full hover:bg-green-800 duraiton-200"
                      aria-label="facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </Link>

                    <Link
                      href="https://www.instagram.com/lupoenterpricesllc/"
                      title=""
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center w-8 h-8 text-white transition-all bg-transparent rounded-full hover:bg-green-800 duraiton-200"
                      aria-label="instagram"
                    >
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="text-gray-500 mt-2 hover:text-green-800">
                  <Link
                    href="https://www.blackcatwebsitedesign.com/"
                    _target="blank"
                    rel="noopener noreferrer"
                  >
                    © Created by Black Cat Website Design{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
