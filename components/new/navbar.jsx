"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Lupo Dumpster Rentals
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/dumpster-rentals" className="hover:text-red-500 transition-colors">
              Dumpster Rentals
            </Link>
            <Link href="/junk-removal" className="hover:text-red-500 transition-colors">
              Junk Removal
            </Link>
            <Link href="/bobcat-services" className="hover:text-red-500 transition-colors">
              Bobcat Services
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone Button */}
          <div className="hidden md:flex">
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="tel:7273176717" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>(727) 317-6717</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="py-2 hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/dumpster-rentals" className="py-2 hover:text-red-500 transition-colors">
                Dumpster Rentals
              </Link>
              <Link href="/junk-removal" className="py-2 hover:text-red-500 transition-colors">
                Junk Removal
              </Link>
              <Link href="/bobcat-services" className="py-2 hover:text-red-500 transition-colors">
                Bobcat Services
              </Link>
              <Link href="#" className="py-2 hover:text-red-500 transition-colors">
                About Us
              </Link>
              <Link href="#" className="py-2 hover:text-red-500 transition-colors">
                Contact
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full" asChild>
                <Link href="tel:7273176717" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>(727) 317-6717</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
