"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";

const serviceLocations = [
  { title: "Clearwater", href: "/services/dumpster-rental-clearwater-fl" },
  { title: "Holiday", href: "/services/dumpster-rental-holiday-fl" },
  { title: "Hudson", href: "/services/dumpster-rental-hudson-fl" },
  { title: "Lutz", href: "/services/dumpster-rental-lutz-fl" },
  {
    title: "New Port Richey",
    href: "/services/dumpster-rental-new-port-richey-fl",
  },
  { title: "Odessa", href: "/services/dumpster-rental-odessa-fl" },
  { title: "Palm Harbor", href: "/services/dumpster-rental-palm-harbor" },
  {
    title: "Pinellas County",
    href: "/services/dumpster-rental-pinellas-county",
  },
  { title: "Spring Hill", href: "/services/dumpster-rental-spring-hill" },
  { title: "Tampa Bay", href: "/services/dumpster-rental-tampa-bay" },
  { title: "Trinity", href: "/services/dumpster-rental-trinity-fl" },
  { title: "Westchase", href: "/services/dumpster-rental-westchase-fl" },
];

const services = {
  "Cleanup Services": [
    {
      title: "Dumpster Trailers",
      href: "/services/dumpster-trailer-rental",
    },

    {
      title: "Garage Cleaning Service",
      href: "/services/garage-cleaning-service",
    },
    { title: "Hoarding Cleanup", href: "/services/hoarding-cleanup" },
  ],
  "Quick Services": [
    // { title: "15-Yard Dump Trailer", href: "/services/15-yard-dump-trailer" },
    // {
    //   title: "Construction Debris Removal",
    //   href: "/services/construction-debris-removal",
    // },
    { title: "Appliance Removal", href: "/services/appliance-removal" },
    {
      title: "Construction Dumpster Rental",
      href: "/services/construction-dumpster-rental",
    },
    { title: "Furniture Removal", href: "/services/furniture-removal" },

    { title: "Mattress Disposal", href: "/services/mattress-disposal" },
  ],
  "Junk Services": [
    // {
    //   title: "Garbage Removal Service",
    //   href: "/services/garbage-removal-service",
    // },
    { title: "Junk Removal", href: "/services/junk-removal" },
    // { title: "Trash Pick-Up", href: "/services/trash-pick-up" },
    // { title: "Trash Pickup", href: "/services/pasco-county-trash-pickup" },
    // { title: "Trash Removal", href: "/services/trash-removal" },
    { title: "Yard Waste Removal", href: "/services/yard-waste-removal" },
  ],
};

export default function LupoNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? "" : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-black">
      {/* Main Navbar */}
      <nav
        className={`bg-black transition-all duration-300 ${
          isScrolled ? "shadow-lg py-3" : "py-4"
        }`}
      >
        {/* Increased max width from max-w-7xl to max-w-8xl */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-normal tracking-wide text-white hover:text-red-500 transition-colors flex items-center"
              >
                <img
                  src="/logo.svg"
                  alt="Lupo Dumpster Rentals"
                  className="h-12 mr-3 w-auto"
                />
                <span className="hidden sm:inline font-bold">
                  Lupo Dumpster Rentals
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-red-500 transition-colors font-medium"
              >
                Home
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center text-white hover:text-red-500 transition-colors font-medium"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Service Locations{" "}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[400px] rounded-lg shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div
                    className="p-6 bg-white"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {serviceLocations.map((location) => (
                        <Link
                          key={location.href}
                          href={location.href}
                          className="block text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors px-2 py-1.5 rounded"
                        >
                          {location.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  className="flex items-center text-white hover:text-red-500 transition-colors font-medium"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services{" "}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] rounded-lg shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div
                    className="p-6 bg-white"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(services).map(([category, items]) => (
                        <div key={category}>
                          <div className="font-semibold text-red-600 mb-3 text-sm uppercase tracking-wide">
                            {category}
                          </div>
                          <div className="space-y-1">
                            {items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors px-2 py-1.5 rounded"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about-us"
                className="text-white hover:text-red-500 transition-colors font-medium"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-white hover:text-red-500 transition-colors font-medium"
              >
                Contact
              </Link>

              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium bg-transparent"
                  asChild
                >
                  <a href="tel:+17273176717" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    (727) 317-6717
                  </a>
                </Button>

                <Button
                  className="bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
                  asChild
                >
                  <Link href="/contact">Book My Dumpster</Link>
                </Button>
              </div>
            </div>

            {/* Updated mobile call button to show phone number */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium bg-transparent text-xs"
                asChild
              >
                <a href="tel:+17273176717" className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  <span className="hidden xs:inline">(727) 317-6717</span>
                  <span className="xs:hidden">Call (727) 317-6717</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-zinc-800 max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="flex items-center w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md font-medium"
                  onClick={() => toggleDropdown("locations")}
                  aria-expanded={activeDropdown === "locations"}
                >
                  <span>Service Locations</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "locations" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={
                    activeDropdown === "locations"
                      ? "px-4 py-3 bg-zinc-900 rounded-md mt-1 max-h-[40vh] overflow-y-auto"
                      : "hidden"
                  }
                >
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLocations.map((location) => (
                      <Link
                        key={location.href}
                        href={location.href}
                        className="block text-sm text-white hover:text-red-500 hover:bg-white/10 transition-colors px-2 py-1.5 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {location.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md font-medium"
                  onClick={() => toggleDropdown("services")}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={
                    activeDropdown === "services"
                      ? "px-4 py-3 bg-zinc-900 rounded-md mt-1 max-h-[60vh] overflow-y-auto"
                      : "hidden"
                  }
                >
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category} className="mb-4">
                      <div className="font-semibold text-red-400 mb-2 text-sm uppercase tracking-wide">
                        {category}
                      </div>
                      <div className="space-y-1">
                        {items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-white hover:text-red-400 hover:bg-zinc-800 transition-colors px-2 py-1.5 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/about-us"
                className="flex items-center w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="flex items-center w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-4 px-3 space-y-3">
                <Button
                  className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
                  asChild
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book My Dumpster
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
