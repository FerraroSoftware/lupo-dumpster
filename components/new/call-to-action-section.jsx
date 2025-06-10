import { Button } from "@/components/ui/button";
import Link from "next/link";

// Hardcoded elements for the CTA
const pillText = "Ready to Get Started?";
const buttonText = "Get Your Free Quote Now";
const buttonLink = "/contact"; // Or a more specific quote page like "/get-quote"

export function CallToActionSection({ title, description }) {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-6">
          {pillText}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto mb-10">
          {description}
        </p>
        <Link href={buttonLink}>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg font-semibold"
            aria-label={buttonText}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
