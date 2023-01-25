import React, { useState } from "react";
import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="py-4 sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" title="" className="">
                <Image className="w-auto h-14" src={logo} alt="logo" />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              <Link
                href="/services"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Services
              </Link>

              <Link
                href="#pricing"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Pricing
              </Link>

              {/* <Link
                href="#testimonial"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Testimonials
              </Link> */}

              <Link
                href="#contact"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-300 transition-all duration-200 border border-transparent rounded-md hover:text-white"
              >
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <Link
                href="tel:7273176717"
                title=""
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-200 transition-all duration-200 border border-red-600 rounded-md hover:bg-red-600 hover:text-white "
                role="button"
              >
                Call Now
              </Link>
            </div>

            {/* menu */}
            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                aria-label="menu button"
                className="inline-flex items-center p-2.5 text-gray-300 duration-200 border border-zinc-700 rounded-md hover:bg-zinc-900 hover:text-white transiton-all "
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span x-show="expanded" aria-hidden="true">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
          {isOpen ? (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6 text-center">
                <Link
                  href="/services"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Services{" "}
                </Link>

                <Link
                  href="#pricing"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Pricing{" "}
                </Link>

                {/* <Link
                  href="#testimonial"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Testimonials{" "}
                </Link> */}

                <Link
                  href="#contact"
                  title=""
                  className="text-base font-normal text-zinc-300 transition-all duration-200 hover:text-zinc-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {" "}
                  Contact{" "}
                </Link>

                <div className="relative inline-flex items-center justify-center group">
                  <Link
                    href="#contact"
                    title=""
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-transparent border border-red-600 rounded-md hover:bg-opacity-90"
                    role="button"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {" "}
                    Book now{" "}
                  </Link>
                </div>
              </div>
            </nav>
          ) : null}
        </div>
      </header>
    </div>
  );
}
