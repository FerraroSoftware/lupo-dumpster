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

const residential = [
  {
    name: "Garage Door Openers",
    description:
      "Effortless operation with our range of advanced garage door openers, designed for convenience and longevity.",
    href: "/residential/garage-door-opener",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Garage Door Repair",
    description:
      "Professional and timely repair services to restore functionality and ensure the longevity of your garage door.",
    href: "/residential/garage-door-repair",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Garage Door Springs",
    description:
      "High-quality springs designed for optimal performance, ensuring smooth operation and extended door life.",
    href: "/residential/garage-door-springs",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "New Garage Doors",
    description:
      "Explore our range of stylish and durable garage doors, tailored to enhance the aesthetics and security of your home.",
    href: "/residential/new-garage-door",
    icon: CursorArrowRaysIcon,
  },
];

const loadingdocks = [
  {
    name: "Dock leveler",
    description:
      "Enhance efficiency and safety during loading and unloading with our premium dock levelers.",
    href: "/loading-dock/dock-leveler",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Dock Lifts",
    description:
      "Crafted to elevate or lower goods to the perfect height, they bridge the gap for efficient transfers.",
    href: "/loading-dock/dock-lift",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Dock Seals",
    description:
      "Protect your goods and maintain optimal temperatures with our Dock Seals.",
    href: "/loading-dock/dock-seals",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Scissor Lifts",
    description:
      "Flexible elevation solutions, perfect for maintenance, inventory, and other vertical tasks.",
    href: "/loading-dock/scissor-lift",
    icon: CursorArrowRaysIcon,
  },
];

const commercial = [
  // Starting new
  {
    name: "Aircraft Hangar Doors",
    description:
      "Specialized doors designed for vast aviation facilities, ensuring optimal functionality.",
    href: "/commercial/aircraft-hangar-doors",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: "Aluminum-Framed Glass Doors",
  //   description:
  //     "Blending aesthetics with durability, these doors offer visibility and strength.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  {
    name: "Automatic Doors",
    description:
      "Seamless, sensor-activated doors enhancing user convenience and flow.",
    href: "/commercial/automatic-doors",
    icon: SquaresPlusIcon,
  },
  {
    name: "Garage Door Repair",
    description:
      "Professional and timely repair services to restore functionality and longevity.",
    href: "/commercial/commercial-garage-door-repair",
    icon: SquaresPlusIcon,
  },
  // {
  //   name: "Counter Doors",
  //   description:
  //     "Compact, functional doors ideal for service counters and similar spaces.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Fire Station Doors",
  //   description:
  //     "Rapid-response doors built to ensure immediate access during emergencies.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  {
    name: "Fire-Rated Doors",
    description:
      "Safety-centric doors designed to resist and contain fire, safeguarding premises.",
    href: "/commercial/fire-rated-doors",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: "High Performance Doors",
  //   description:
  //     "Optimized for functionality and durability under frequent usage conditions.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "High-Speed Rubber Doors",
  //   description:
  //     "Rapid action doors made of resilient rubber for demanding environments.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "High-Speed Fabric Doors",
  //   description:
  //     "Lightweight yet sturdy, these doors offer quick access while ensuring security.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "High-Speed Metal Doors",
  //   description:
  //     "Metal-based doors designed for rapid operation without compromising on strength.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  {
    name: "Hurricane Garage Doors",
    description:
      "Engineered to withstand extreme weather conditions, ensuring safety and security.",
    href: "/commercial/hurricane-garage-doors",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: "Insulated Sectional Steel-Back Doors",
  //   description:
  //     "Combining insulation with robust steel backing for energy efficiency and durability.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Loading Dock Doors",
  //   description:
  //     "Engineered for the rigors of loading docks, ensuring seamless logistics.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  {
    name: "Overhead Doors",
    description:
      "Space-saving doors that retract overhead, suitable for varied commercial spaces.",
    href: "/commercial/overhead-doors",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: "Parking Facility Doors",
  //   description:
  //     "Optimized for frequent operation, ensuring smooth vehicle movement in parking areas.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Rolling Service Doors",
  //   description:
  //     "Compact, efficient doors that roll up, perfect for service areas and stores.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Rolling Sheet Doors",
  //   description:
  //     "Lightweight and easy to operate, these doors are ideal for storage units.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  {
    name: "Roll Up Doors",
    description:
      "Compact, space-efficient doors designed for versatile commercial applications.",

    href: "/commercial/roll-up-doors",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Rolling Shutters",
    description:
      "Offering both security and aesthetic appeal for storefronts and commercial outlets.",
    href: "/commercial/rolling-shutters",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: "Security Grilles",
  //   description:
  //     "Ensure premises security without compromising on visibility or aesthetics.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Sectional Steel Doors",
  //   description:
  //     "Modular doors that offer flexibility, durability, and security for varied needs.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Side Folding Grills",
  //   description:
  //     "Space-efficient grills that provide security and adapt to architectural needs.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Thermacore Doors",
  //   description:
  //     "Advanced insulated doors that optimize temperature control and energy conservation.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: "Wind Load Doors",
  //   description:
  //     "Reinforced doors designed to withstand strong wind pressures and adverse conditions.",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  // },
];

const commercialAction = [
  { name: "Call Now", href: "tel:+18449440362", icon: PhoneIcon },
  {
    name: "View All Commercial Doors",
    href: "/commercial",
    icon: RectangleGroupIcon,
  },
  {
    name: "Social Media",
    href: "https://www.facebook.com/paratecdoor",
    icon: PlayCircleIcon,
  },
];
const residentialAction = [
  { name: "Call Now", href: "tel:+18449440362", icon: PhoneIcon },
  {
    name: "View All Residential Solutions",
    href: "/residential",
    icon: RectangleGroupIcon,
  },
  {
    name: "Social Media",
    href: "https://www.facebook.com/paratecdoor",
    icon: PlayCircleIcon,
  },
];

const loadingDocksAction = [
  { name: "Call Now", href: "tel:+18449440362", icon: PhoneIcon },
  {
    name: "View All Loading Solutions",
    href: "/loading-dock",
    icon: RectangleGroupIcon,
  },
  {
    name: "Social Media",
    href: "https://www.facebook.com/paratecdoor",
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
