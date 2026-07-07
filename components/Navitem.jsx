"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown, Menu, Phone, Star, X, Clock } from "lucide-react";
import { Button } from "./ui/button";

const PHONE_DISPLAY = "(727) 317-6717";
const PHONE_HREF = "tel:+17273176717";

const serviceLocations = [
  { title: "Brooksville", href: "/services/dumpster-rental-brooksville-fl" },
  { title: "Clearwater", href: "/services/dumpster-rental-clearwater-fl" },
  { title: "Dade City", href: "/services/dumpster-rental-dade-city-fl" },
  { title: "Dunedin", href: "/services/dumpster-rental-dunedin-fl" },
  {
    title: "Hernando",
    href: "/services/dumpster-rental-hernando-county-fl",
  },
  {
    title: "Hillsborough",
    href: "/services/dumpster-rental-hillsborough-county-fl",
  },
  { title: "Holiday", href: "/services/dumpster-rental-holiday-fl" },
  { title: "Hudson", href: "/services/dumpster-rental-hudson-fl" },
  { title: "Keystone", href: "/services/dumpster-rental-keystone-fl" },
  { title: "Land O Lakes", href: "/services/dumpster-rental-land-o-lakes-fl" },
  { title: "Largo", href: "/services/dumpster-rental-largo-fl" },
  { title: "Lutz", href: "/services/dumpster-rental-lutz-fl" },
  {
    title: "New Port Richey",
    href: "/services/dumpster-rental-new-port-richey-fl",
  },
  { title: "Odessa", href: "/services/dumpster-rental-odessa-fl" },
  { title: "Oldsmar", href: "/services/dumpster-rental-oldsmar-fl" },
  { title: "Palm Harbor", href: "/services/dumpster-rental-palm-harbor" },
  {
    title: "Pinellas County",
    href: "/services/dumpster-rental-pinellas-county",
  },
  {
    title: "Pinellas Park",
    href: "/services/dumpster-rental-pinellas-park-fl",
  },
  {
    title: "Safety Harbor",
    href: "/services/dumpster-rental-safety-harbor-fl",
  },
  { title: "San Antonio", href: "/services/dumpster-rental-san-antonio-fl" },
  { title: "Seminole", href: "/services/dumpster-rental-seminole-fl" },
  { title: "Spring Hill", href: "/services/dumpster-rental-spring-hill" },
  {
    title: "St Petersburg",
    href: "/services/dumpster-rental-st-petersburg-fl",
  },
  { title: "Tampa Bay", href: "/services/dumpster-rental-tampa-bay" },
  { title: "Trinity", href: "/services/dumpster-rental-trinity-fl" },
  {
    title: "Wesley Chapel",
    href: "/services/dumpster-rental-wesley-chapel-fl",
  },
  { title: "Westchase", href: "/services/dumpster-rental-westchase-fl" },
  { title: "Zephyrhills", href: "/services/dumpster-rental-zephyrhills-fl" },
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
    { title: "Appliance Removal", href: "/services/appliance-removal" },
    {
      title: "Construction Dumpster Rental",
      href: "/services/construction-dumpster-rental",
    },
    { title: "Furniture Removal", href: "/services/furniture-removal" },

    { title: "Mattress Disposal", href: "/services/mattress-disposal" },
  ],
  "Junk Services": [
    { title: "Junk Removal", href: "/services/junk-removal" },
    { title: "Yard Waste Removal", href: "/services/yard-waste-removal" },
  ],
};

const mainLinks = [
  { title: "Home", href: "/" },
  { title: "Pricing", href: "/dumpster-rental-pricing" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact", href: "/contact" },
];

export default function LupoNavbar() {
  const router = useRouter();
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

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    const close = () => {
      setIsMobileMenuOpen(false);
      setActiveDropdown("");
    };
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? "" : name);
  };

  const isActive = (href) =>
    href === "/" ? router.asPath === "/" : router.asPath.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* ---------------------------- Trust / utility bar ---------------------------- */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="flex items-center" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                ))}
              </span>
              <span className="whitespace-nowrap">5.0/5</span>
              <span className="hidden sm:inline text-white/80">
                · 160+ Reviews
              </span>
              <span className="hidden md:inline text-white/50">|</span>
              <span className="hidden md:inline">
                Same-Day Delivery Available
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden lg:flex items-center gap-1.5 text-white/90">
                <Clock className="h-3.5 w-3.5" />
                Open 7 Days · 7AM–8PM
              </span>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 font-bold hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------- Main navbar -------------------------------- */}
      <nav
        className={`bg-black transition-all duration-300 ${
          isScrolled ? "shadow-lg py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center space-x-7">
              <Link
                href="/"
                className={`transition-colors font-medium ${
                  isActive("/")
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                Home
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center text-white hover:text-red-500 transition-colors font-medium"
                  aria-haspopup="true"
                >
                  Services{" "}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] rounded-lg shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 ease-in-out z-50">
                  <div className="p-6 bg-white" role="menu">
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

              <div className="relative group">
                <button
                  className="flex items-center text-white hover:text-red-500 transition-colors font-medium"
                  aria-haspopup="true"
                >
                  Locations{" "}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] rounded-lg shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 ease-in-out z-50">
                  <div className="p-6 bg-white" role="menu">
                    <div className="grid grid-cols-4 gap-4">
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

              <Link
                href="/about-us"
                className={`transition-colors font-medium ${
                  isActive("/about-us")
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                About
              </Link>

              <Button
                className="bg-red-600 text-white hover:bg-red-700 transition-colors font-bold shadow-lg shadow-red-600/20"
                asChild
              >
                <Link href="/contact">Get a Free Quote →</Link>
              </Button>
            </div>

            {/* Mobile: always-visible quote CTA + menu toggle */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                size="sm"
                className="bg-red-600 text-white hover:bg-red-700 font-bold"
                asChild
              >
                <Link href="/contact">Free Quote</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 hover:text-white px-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* -------------------------------- Mobile Menu -------------------------------- */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-zinc-800 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {/* Conversion actions first */}
            <div className="px-4 pt-4 pb-3 space-y-3 border-b border-zinc-800">
              <Button
                className="w-full h-12 bg-red-600 text-white hover:bg-red-700 font-bold text-base"
                asChild
              >
                <Link href="/contact">Get a Free Quote →</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white font-bold text-base"
                asChild
              >
                <a href={PHONE_HREF} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
                <span className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </span>
                <span>5.0/5 · 160+ reviews · Open 7 days</span>
              </div>
            </div>

            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                href="/"
                className="flex items-center w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2.5 rounded-md font-medium"
              >
                Home
              </Link>

              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2.5 rounded-md font-medium"
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
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2.5 rounded-md font-medium"
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
                      >
                        {location.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about-us"
                className="flex items-center w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2.5 rounded-md font-medium"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="flex items-center w-full text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2.5 rounded-md font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
