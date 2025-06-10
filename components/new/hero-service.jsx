import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Star } from "lucide-react";
import Image from "next/image";

// Props are implicitly handled in JSX, no explicit interface needed
// We'll assume the props are passed correctly:
// badgeText, title, description, heroChecklistItems,
// primaryButtonText, imageSrc, imageAlt, imageOverlayText

export default function HeroService({
  badgeText = "Default Badge",
  title = "Default Title",
  description = "Default description text.",
  heroChecklistItems = ["Checklist Item 1", "Checklist Item 2"], // Default to empty array if not provided
  primaryButtonText = "Get Started",
  imageSrc = "/placeholder.svg?width=600&height=400",
  imageAlt = "Hero image",
  imageOverlayText = "Overlay Text",
}) {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0">
        {/* Optional: Add a subtle background pattern or gradient here if desired */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              {badgeText}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-300">{description}</p>

            <div className="space-y-3 pt-2">
              {heroChecklistItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  {/* Assuming item is an object with a 'text' property, or just a string */}
                  <span className="text-lg text-zinc-100">
                    {typeof item === "string" ? item : item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold w-full sm:w-auto"
                >
                  {primaryButtonText}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white/90 w-full sm:w-auto"
                asChild
              >
                <Link
                  href="tel:7273176717"
                  className="flex items-center justify-center gap-2 "
                >
                  <Phone className="h-5 w-5" />
                  <span>(727) 317-6717</span>
                </Link>
              </Button>
            </div>

            {/* Star Ratings Section */}
            <div className="flex items-center gap-2 ">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-md text-zinc-300 font-bold">
                <span className="text-green-500">100+</span> 5-Star Ratings
              </span>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-xl shadow-2xl aspect-[3/2] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-red-600 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transform ">
              <span className="font-bold text-base md:text-lg">
                {imageOverlayText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
