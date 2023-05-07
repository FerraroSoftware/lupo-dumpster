import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dumpsterrental from "../public/dumpsterrental.png";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Junkheader() {
  return (
    <div className="">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative pt-20">
            <div className="absolute inset-x-0 bottom-0 h-1/2 " />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src={dumpsterrental}
                    alt="dumpster rental"
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      New Port Richey&apos;s Premier
                    </span>
                    <span className="block text-red-600">
                      Junk Removal Service
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
                    Experience unparalleled professionalism and efficiency with
                    New Port Richey&apos;s premier junk removal service,
                    catering to all your disposal needs responsibly.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                      >
                        Contact Us Now
                      </Link>
                      <Link
                        href="#junkremoval"
                        className="flex items-center justify-center rounded-md border border-transparent bg-red-600 bg-opacity-90 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          {/* <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
