import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// This is a local sub-component, only used within this file.
const DumpsterCard = ({ dumpster, locationName }) => {
  const {
    imageUrl,
    imageAlt,
    isPopular,
    popularText,
    size,
    description,
    features,
    buttonText,
    buttonLink,
  } = dumpster;

  return (
    <div className="bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all flex flex-col">
      <div className="h-56 bg-zinc-200 relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        {isPopular && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold">
            {popularText || `POPULAR IN ${locationName.toUpperCase()}`}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{size}</h3>
        <p className="text-zinc-600 mb-4 text-sm">{description}</p>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Link href={buttonLink}>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// This is the main, exported component.
export function DumpsterOptions({
  locationName,
  pillText,
  title,
  subtitle,
  dumpsters,
  className = "py-16 bg-white",
}) {
  const defaultPillText = `Our Dumpster Options for ${locationName}`;

  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            {pillText || defaultPillText}
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dumpsters.map((dumpster) => (
            <DumpsterCard
              key={dumpster.id}
              dumpster={dumpster}
              locationName={locationName}
              buttonlink=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}
