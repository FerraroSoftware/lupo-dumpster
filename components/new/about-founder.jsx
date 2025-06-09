import { Button } from "@/components/ui/button"
import alexlupo from "../../public/alex-lupo.png";
import Image from "next/image";
import Link from "next/link";
export default function AboutFounder() {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative transform transition-transform duration-500 ">
              <Image src={alexlupo} alt="Alex Lupo" className="rounded-xl shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white py-4 px-8 rounded-lg">
                <h3 className="text-xl font-bold">Alex Lupo</h3>
                <p>Founder, Lupo Dumpster Rentals</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Walking with Integrity</h2>
            <p className="text-lg text-zinc-700 mb-8">
              We provide top-quality dumpster rental services to meet your unique needs. Our team is dedicated to
              delivering exceptional service and exceeding your expectations.
            </p>

            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold" asChild>
              <Link
                href="/about-us"
                className="flex items-center gap-2"
              >
              Read our story
              </Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
