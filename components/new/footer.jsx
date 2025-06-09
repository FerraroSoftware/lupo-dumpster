import Link from "next/link"
import { Facebook, Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Lupo Dumpster Rentals</h3>
            <p className="mb-2">LIC #L20000153106</p>
            <p className="mb-2">Located in New Port Richey</p>
            <p className="mb-2">Monday - Friday: 7:00 am - 8:00 pm</p>
            <p className="mb-2">Saturday: 7:00 am - 8:00 pm</p>
            <p className="mb-2">Sunday: 7:00 am - 8:00 pm</p>

            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-300 hover:text-red-500">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-red-500">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="tel:7273176717" className="text-gray-300 hover:text-red-500">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Call</span>
              </Link>
              <Link href="mailto:info@lupodumpster.com" className="text-gray-300 hover:text-red-500">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Dumpster Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500">
                  Dumpster Rentals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Haul Away Junk
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Junk Pick Up
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Dumpster Trailers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Junk Removal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Hoarding Cleanup
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Appliance Removal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Construction Debris
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  Mattress Disposal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Dumpster Sizes</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-red-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  10 Yard Dumpster
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  15 Yard Dumpster
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  20 Yard Dumpster
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500">
                  All Dumpsters
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Lupo Dumpster Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
