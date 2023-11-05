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

export default function Junkheader({
  image,
  alttext,
  location,
  service,
  ptag,
  cta,
}) {
  return (
    <div className="">
      <main>
        <div>
          <div className="relative pt-2">
            <div className="absolute inset-x-0 bottom-0 h-1/2 " />
            <div className="mx-auto">
              <div className="relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src={image}
                    alt={alttext}
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-wide leading-10 text-white sm:text-5xl uppercase">
                    <span className="block text-white uppercase">
                      {location}
                    </span>
                    <span className="block text-red-600 uppercase">
                      {service}
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
                    {ptag}
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      href="/contact"
                      title=""
                      className="bg-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400
                transition-all duration-300 uppercase"
                      role="button"
                    >
                      {cta}
                    </Link>

                    <Link
                      href="tel:7273176717"
                      title=""
                      className="border border-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400
                transition-all duration-300 uppercase"
                      role="button"
                    >
                      Call Us Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
