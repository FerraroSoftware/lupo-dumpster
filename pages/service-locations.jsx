import Head from "next/head";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand, PlanSteps } from "@/components/site/home-sections";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { lowestPrice, serviceAreas, siteConfig, telHref } from "@/lib/site-config";
import heroImage from "@/public/dumpster-rental-pasco-county.webp";

const cityCount = serviceAreas.reduce((n, a) => n + a.cities.length, 0);
const title = "Dumpster Rental Service Areas in Tampa Bay, FL | Lupo";
const description = `Flat-rate dumpsters from $${lowestPrice} delivered to ${cityCount}+ cities in Pasco, Pinellas, Hillsborough & Hernando, FL. Find your city or call ${siteConfig.phone}.`;

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent("Pasco County, FL")}&z=9&output=embed`;

const countyBlurbs = {
  "Pasco County": "Our home base in Holiday, covering the Gulf Coast to Dade City.",
  "Pinellas County": "North Pinellas down to St. Pete, from Palm Harbor to Pinellas Park.",
  "Hillsborough County": "Northwest Hillsborough, including Lutz, Westchase, and Keystone.",
  "Hernando County": "Spring Hill, Brooksville, and the surrounding communities.",
};

export default function ServiceLocations() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/service-locations" />
      </Head>

      <PageHero
        image={heroImage}
        eyebrow="Dumpster rental service areas"
        title={
          <>
            Dumpster Rental Delivered <Highlight tone="dark">Across Tampa Bay&apos;s North Side</Highlight>
          </>
        }
        intro={`Based in Holiday, FL, we deliver flat-rate dumpsters to ${cityCount}+ cities in ${serviceAreas.length} counties. Find yours below.`}
      />
      <Breadcrumbs />

      <section aria-labelledby="areas-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="areas-title"
            eyebrow="Find your city"
            title={
              <>
                Where We <Highlight>Deliver</Highlight>
              </>
            }
            intro="Pick your city for local delivery details and pricing."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <article
                key={area.county}
                aria-labelledby={`county-${i}`}
                className={`rounded-2xl p-8 ${i === 0 ? "bg-ink text-white lg:col-span-3" : "border border-zinc-200 bg-white"}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3
                      id={`county-${i}`}
                      className={`flex items-center gap-2 font-display text-3xl font-bold ${i === 0 ? "text-white" : "text-ink"}`}
                    >
                      <MapPin aria-hidden className={`h-6 w-6 ${i === 0 ? "text-brand-on-dark" : "text-brand"}`} />
                      Dumpster Rental in {area.county}
                    </h3>
                    <p className={`mt-2 ${i === 0 ? "text-zinc-300" : "text-zinc-600"}`}>{countyBlurbs[area.county]}</p>
                  </div>
                  {area.href && (
                    <Link
                      href={area.href}
                      className={`inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline ${
                        i === 0 ? "text-brand-on-dark" : "text-brand-hover"
                      }`}
                    >
                      All of {area.county} <ArrowRight aria-hidden className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <ul className={`mt-6 grid grid-cols-2 gap-3 ${i === 0 ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-3 lg:grid-cols-2"}`}>
                  {area.cities.map((city) => (
                    <li key={city.href}>
                      <Link
                        href={city.href}
                        className={`flex h-full items-center justify-between gap-2 rounded-lg px-4 py-3 font-semibold transition-colors ${
                          i === 0
                            ? "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 hover:text-brand-on-dark"
                            : "bg-zinc-100 text-ink hover:bg-brand-soft hover:text-brand-hover"
                        }`}
                      >
                        {city.name}
                        <ArrowRight aria-hidden className="h-4 w-4 shrink-0 opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-zinc-600">
            Serving the wider region?{" "}
            <Link
              href="/services/dumpster-rental-tampa-bay"
              className="font-semibold text-ink underline underline-offset-4 hover:text-brand-hover"
            >
              Dumpster rental in Tampa Bay
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="map-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center`}>
          <div>
            <SectionHeading
              id="map-title"
              eyebrow="Don't see your city?"
              title="We Probably Still Deliver"
              align="left"
              intro="If you're anywhere near Pasco County, give us a call. We'll tell you right away if you're in range."
            />
            <a
              href={telHref}
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand px-7 text-base font-bold text-white transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <Phone aria-hidden className="h-5 w-5" /> Call {siteConfig.phone}
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl bg-zinc-200 shadow-sm ring-1 ring-zinc-200" style={{ aspectRatio: "4 / 3" }}>
            <iframe
              title="Map of the Lupo Dumpster Rentals service area around Pasco County, FL"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      <PlanSteps />

      <CtaBand />
    </>
  );
}
