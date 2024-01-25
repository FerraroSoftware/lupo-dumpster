"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

import Link from "next/link";

const commercial = [
  {
    name: "Appliance Removal",
    description:
      "Efficient removal and disposal of unwanted appliances from properties.",
    href: "/services/appliance-removal",
  },
  {
    name: "Construction Debris",
    description:
      "Rapid removal of debris from construction sites, ensuring safety and cleanliness.",
    href: "/services/construction-debris-removal",
  },
  {
    name: "Dumpster Rentals",
    description:
      "Providing various sized dumpsters for rent to accommodate different waste disposal needs.",
    href: "/services/dumpster-rental-new-port-richey-fl",
  },
  {
    name: "Furniture Removal",
    description:
      "Safe and efficient removal of unwanted furniture from homes or businesses.",
    href: "/services/furniture-removal",
  },
  {
    name: "Garage Cleaning",
    description:
      "Thorough cleaning services to declutter and organize residential garages.",
    href: "/services/garage-cleaning-service",
  },
  {
    name: "Haul Away Junk",
    description:
      "Professional services to remove and dispose of all types of junk from properties.",
    href: "/services/haul-away-junk",
  },
  {
    name: "Hoarding Cleanup",
    description:
      "Specialized cleaning and decluttering services for hoarding situations, restoring spaces to safe conditions.",
    href: "/services/hoarding-cleanup",
  },
  {
    name: "Junk Pick Up",
    description:
      "Convenient and timely pick-up services for household or commercial junk items.",
    href: "/services/junk-pick-up",
  },
  {
    name: "Junk Removal",
    description:
      "Comprehensive removal services for all types of junk, including large and bulky items.",
    href: "/services/junk-removal-new-port-richey-fl",
  },
  {
    name: "Mattress Removal",
    description:
      "Eco-friendly removal and disposal of old mattresses from residential or commercial properties.",
    href: "/services/mattress-disposal",
  },
  {
    name: "Trash Removal",
    description:
      "Efficient removal of trash from homes, businesses, and public spaces to maintain cleanliness.",
    href: "/services/trash-removal",
  },
  {
    name: "Yard Waste Removal",
    description:
      "Eco-friendly disposal of yard debris, leaves, branches, and other green waste to maintain beautiful outdoor spaces.",
    href: "/services/yard-waste-removal",
  },
];

const commercialAction = [
  {
    name: "Call Now - (727-317-6717)",
    href: "tel:+17273176717",
    icon: PhoneIcon,
  },
  {
    name: "View All Services",
    href: "/services",
    icon: RectangleGroupIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/LupoLLC/",
    icon: PlayCircleIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbartwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const [isCommercialShowing, setCommercialShowing] = useState(false);
  const [isLoadingDocksShowing, setLoadingDocksShowing] = useState(false);
  const [isResidentialShowing, setResidentialShowing] = useState(false);

  const [commercialTimeout, setCommercialTimeout] = useState(null);
  const [loadingDocksTimeout, setLoadingDocksTimeout] = useState(null);
  const [residentialTimeout, setResidentialTimeout] = useState(null);

  return (
    <header className="relative z-20 bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <div
            onMouseEnter={() => {
              clearTimeout(commercialTimeout);
              setCommercialShowing(true);
            }}
            onMouseLeave={() => {
              setCommercialTimeout(
                setTimeout(() => {
                  setCommercialShowing(false);
                }, 300)
              ); // delay of 300ms
            }}
          >
            <Popover className={classNames(isCommercialShowing && "open")}>
              <Popover.Button className="popover-button-class flex items-center gap-x-1 text-sm font-semibold leading-6 text-zinc-100 uppercase">
                Our Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-zinc-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                show={isCommercialShowing}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black pt-14 shadow-lg ring-1 ring-zinc-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {commercial.map((item) => (
                      <div
                        key={item.name}
                        className="group relative  p-6 text-sm leading-6 hover:bg-zinc-700"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setCommercialShowing(false)} // Add this line
                          className="mt-6 block font-semibold text-zinc-100 uppercase"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-zinc-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-zinc-900">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-zinc-900/5 border-x border-zinc-900/5">
                        {commercialAction.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-zinc-100 hover:bg-zinc-800"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-zinc-400"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>

          <Link
            href="/dumpster-rental-pricing"
            className="text-sm font-semibold leading-6 text-zinc-100 uppercase "
          >
            Pricing
          </Link>
          <Link
            href="https://www.google.com/search?q=Lupo+Dumpster+Rentals+and+Junk+Removal&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDayNExKs0gzMzU1Tza1MqgwNLA0s0i0MDFMTTRItkgyWsSq5lNakK_gUppbUFySWqQQlJpXkphTrJCYl6LgVZqXDRTIzS9LzAEA8FWdXFIAAAA&hl=en-US&mat=Cd5HiHnqFLTAElcB7PxHsfRGkZVXKNf9_PQRqEoxlePs5G42IjJpMyjK6OYTwtmxXUgcHuQDGlz6cym5Omb9IR7yq-jA4bPvQUNT4i6QbID6iOGPtSNL6fBoICiOdkZIFg4&authuser=6#lrd=0x88c291bf8f6557c5:0x10968a841ea0c8b2,1,,,,"
            className="text-sm font-semibold leading-6 text-zinc-100 uppercase "
            rel="noopener noreferrer"
            target="_blank"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-zinc-100 uppercase "
          >
            Contact
          </Link>
        </Popover.Group>
        {/* </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-xs xl:text-sm uppercase lg:px-3 lg:py-2 leading-7 text-white transition-all duration-300 bg-black border-2 border-red-700 hover:bg-red-700 hover:text-white hover:border-red-700 "
          >
            Rent a Dumpster{" "}
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src="/logo.svg" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-zinc-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-800 uppercase">
                        OUR SERVICES
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...commercial, ...commercialAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="uppercase block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-zinc-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/dumpster-rental-pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-700 uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="https://www.google.com/search?q=Lupo+Dumpster+Rentals+and+Junk+Removal&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDayNExKs0gzMzU1Tza1MqgwNLA0s0i0MDFMTTRItkgyWsSq5lNakK_gUppbUFySWqQQlJpXkphTrJCYl6LgVZqXDRTIzS9LzAEA8FWdXFIAAAA&hl=en-US&mat=Cd5HiHnqFLTAElcB7PxHsfRGkZVXKNf9_PQRqEoxlePs5G42IjJpMyjK6OYTwtmxXUgcHuQDGlz6cym5Omb9IR7yq-jA4bPvQUNT4i6QbID6iOGPtSNL6fBoICiOdkZIFg4&authuser=6#lrd=0x88c291bf8f6557c5:0x10968a841ea0c8b2,1,,,,"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-700 uppercase"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-700 uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="tel:+17273176717"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-700 uppercase"
                >
                  Call Now
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-700 uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
