"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, Facebook } from "lucide-react";
import { Button } from "./ui/button";

// Organized services into logical categories
const services = {
  "Dumpster Rental": [
    {
      title: "Clearwater",
      href: "/services/dumpster-rental-clearwater-fl",
    },
    {
      title: "Holiday",
      href: "/services/dumpster-rental-holiday-fl",
    },
    {
      title: "Hudson",
      href: "/services/dumpster-rental-hudson-fl",
    },
    {
      title: "Lutz",
      href: "/services/dumpster-rental-lutz-fl",
    },
    {
      title: "New Port Richey",
      href: "/services/dumpster-rental-new-port-richey-fl",
    },
    {
      title: "Odessa",
      href: "/services/dumpster-rental-odessa-fl",
    },
    {
      title: "Palm Harbor",
      href: "/services/dumpster-rental-palm-harbor",
    },
    {
      title: "Pinellas County",
      href: "/services/dumpster-rental-pinellas-county",
    },
    {
      title: "Spring Hill",
      href: "/services/dumpster-rental-spring-hill",
    },
    {
      title: "Tampa Bay",
      href: "/services/dumpster-rental-tampa-bay",
    },
    {
      title: "Trinity",
      href: "/services/dumpster-rental-trinity-fl",
    },
    {
      title: "Westchase",
      href: "/services/dumpster-rental-westchase-fl",
    },
  ],
  "Cleanup Services": [
    { title: "Appliance Removal", href: "/services/appliance-removal" },
    { title: "Furniture Removal", href: "/services/furniture-removal" },
    {
      title: "Garage Cleaning Service",
      href: "/services/garage-cleaning-service",
    },
    { title: "Hoarding Cleanup", href: "/services/hoarding-cleanup" },
  ],

  "Specialized Services": [
    {
      title: "15-Yard Dump Trailer",
      href: "/services/15-yard-dump-trailer",
    },
    {
      title: "Construction Debris Removal",
      href: "/services/construction-debris-removal",
    },
    {
      title: "Construction Dumpster Rental",
      href: "/services/construction-dumpster-rental",
    },
    {
      title: "Dumpster Trailer Rental",
      href: "/services/dumpster-trailer-rental",
    },
    { title: "Mattress Disposal", href: "/services/mattress-disposal" },
  ],
  "Trash & Waste Services": [
    {
      title: "Garbage Removal Service",
      href: "/services/garbage-removal-service",
    },
    { title: "Junk Removal", href: "/services/junk-removal" },
    { title: "Trash Pick-Up", href: "/services/trash-pick-up" },
    { title: "Trash Pickup", href: "/services/pasco-county-trash-pickup" },
    { title: "Trash Removal", href: "/services/trash-removal" },
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
      {/* Top Bar - remains the same */}
      <div className="bg-zinc-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center text-sm">
          <p className="text-center md:text-left mb-2 md:mb-0">
            Serving all of Pasco and Pinellas County
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+17273176717"
              className="flex items-center hover:text-red-500 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>Call Now - (727) 317-6717</span>
            </a>
            <a
              href="https://www.facebook.com/LupoLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-red-500 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-black transition-all duration-300 ${
          isScrolled ? "shadow-lg py-2" : "py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - remains the same */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-normal tracking-wide text-white hover:text-red-500 transition-colors flex items-center"
              >
                {/* <Trash2 className="h-6 w-6 mr-2" /> */}
                {/* logo image icon */}
                <img
                  src="/logo.svg"
                  alt="Lupo Dumpster Rentals"
                  className="h-12 mr-3 w-auto"
                />
                Lupo Dumpster Rentals
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="flex items-center text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
              >
                Home
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services{" "}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] rounded-md shadow-lg bg-black border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div
                    className="p-4"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {Object.entries(services).map(([category, items]) => (
                        <div key={category}>
                          <div className="font-medium text-red-500 mb-2">
                            {category}
                          </div>
                          {items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-sm"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about-us"
                className="flex items-center text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
              >
                About Us
              </Link>

              <Link
                href="/dumpster-rental-pricing"
                className="flex items-center text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className="flex items-center text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
              >
                Contact
              </Link>

              <Link href="/contact">
                <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors text-sm font-medium">
                  Book My Dumpster
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
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
                className="flex items-center w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
                  onClick={() => toggleDropdown("services")}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={
                    activeDropdown === "services"
                      ? "px-4 py-2 bg-zinc-900 rounded-md mt-1 max-h-[60vh] overflow-y-auto"
                      : "hidden"
                  }
                >
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category} className="mb-3">
                      <div className="font-medium text-red-500 mb-1">
                        {category}
                      </div>
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/about-us"
                className="flex items-center w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/dumpster-rental-pricing"
                className="flex items-center w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className="flex items-center w-full text-sm text-white hover:bg-white/10 hover:text-red-500 transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-4 px-3 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors font-medium">
                    Book My Dumpster
                  </Button>
                </Link>
                <Link
                  href="https://www.facebook.com/LupoLLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full text-white hover:text-red-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  <span>Follow us on Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
