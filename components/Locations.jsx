import Link from "next/link";
import { MapPin, Truck } from "lucide-react";

const serviceLocationsPasco = [
  {
    name: "Dade City",
    href: "/services/dumpster-rental-dade-city-fl",
    description: "Professional dumpster rental services in Dade City",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Holiday",
    href: "/services/dumpster-rental-holiday-fl",
    description: "Reliable waste management solutions in Holiday",
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Hudson",
    href: "/services/dumpster-rental-hudson-fl",
    description: "Fast dumpster delivery and pickup in Hudson",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Land O Lakes",
    href: "/services/dumpster-rental-land-o-lakes-fl",
    description: "Comprehensive dumpster rental in Land O Lakes",
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "Lutz",
    href: "/services/dumpster-rental-lutz-fl",
    description: "Affordable dumpster rentals in Lutz",
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    name: "New Port Richey",
    href: "/services/dumpster-rental-new-port-richey-fl",
    description: "Quality waste disposal services in New Port Richey",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    name: "Odessa",
    href: "/services/dumpster-rental-odessa-fl",
    description: "Efficient dumpster services in Odessa",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    name: "San Antonio",
    href: "/services/dumpster-rental-san-antonio-fl",
    description: "Local San Antonio dumpster rental experts",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    name: "Spring Hill",
    href: "/services/dumpster-rental-spring-hill",
    description: "Professional waste management in Spring Hill",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Trinity",
    href: "/services/dumpster-rental-trinity-fl",
    description: "Trinity's trusted dumpster rental service",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Wesley Chapel",
    href: "/services/dumpster-rental-wesley-chapel-fl",
    description: "Reliable dumpster rentals in Wesley Chapel",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Westchase",
    href: "/services/dumpster-rental-westchase-fl",
    description: "Fast service in Westchase community",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    name: "Zephyrhills",
    href: "/services/dumpster-rental-zephyrhills-fl",
    description: "Complete waste solutions in Zephyrhills",
    gradient: "from-rose-500 to-rose-600",
  },
];

const serviceLocationsPinellas = [
  {
    name: "Clearwater",
    href: "/services/dumpster-rental-clearwater-fl",
    description: "Professional dumpster services in Clearwater",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    name: "Dunedin",
    href: "/services/dumpster-rental-dunedin-fl",
    description: "Reliable waste management in Dunedin",
    gradient: "from-green-600 to-green-700",
  },
  {
    name: "Keystone",
    href: "/services/dumpster-rental-keystone-fl",
    description: "Quality dumpster rentals in Keystone",
    gradient: "from-purple-600 to-purple-700",
  },
  {
    name: "Largo",
    href: "/services/dumpster-rental-largo-fl",
    description: "Comprehensive services in Largo",
    gradient: "from-red-600 to-red-700",
  },
  {
    name: "Oldsmar",
    href: "/services/dumpster-rental-oldsmar-fl",
    description: "Fast delivery and pickup in Oldsmar",
    gradient: "from-yellow-600 to-yellow-700",
  },
  {
    name: "Palm Harbor",
    href: "/services/dumpster-rental-palm-harbor",
    description: "Trusted dumpster rentals in Palm Harbor",
    gradient: "from-teal-600 to-teal-700",
  },
  {
    name: "Pinellas Park",
    href: "/services/dumpster-rental-pinellas-park-fl",
    description: "Efficient waste solutions in Pinellas Park",
    gradient: "from-indigo-600 to-indigo-700",
  },
  {
    name: "Safety Harbor",
    href: "/services/dumpster-rental-safety-harbor-fl",
    description: "Professional service in Safety Harbor",
    gradient: "from-pink-600 to-pink-700",
  },
  {
    name: "Seminole",
    href: "/services/dumpster-rental-seminole-fl",
    description: "Local dumpster experts in Seminole",
    gradient: "from-orange-600 to-orange-700",
  },
  {
    name: "St Petersburg",
    href: "/services/dumpster-rental-st-petersburg-fl",
    description: "Metro St Petersburg waste management",
    gradient: "from-cyan-600 to-cyan-700",
  },
  {
    name: "Tampa Bay",
    href: "/services/dumpster-rental-tampa-bay",
    description: "Tampa Bay area dumpster rental solutions",
    gradient: "from-emerald-600 to-emerald-700",
  },
];

const serviceLocationsCounties = [
  {
    name: "Brooksville",
    href: "/services/dumpster-rental-brooksville-fl",
    description: "Serving Brooksville and surrounding areas",
    gradient: "from-slate-500 to-slate-600",
  },
  {
    name: "Hernando County",
    href: "/services/dumpster-rental-hernando-county-fl",
    description: "County-wide Hernando dumpster services",
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Hillsborough County",
    href: "/services/dumpster-rental-hillsborough-county-fl",
    description: "Complete Hillsborough County coverage",
    gradient: "from-zinc-500 to-zinc-600",
  },
  {
    name: "Pinellas County",
    href: "/services/dumpster-rental-pinellas-county",
    description: "Full Pinellas County service area coverage",
    gradient: "from-stone-500 to-stone-600",
  },
];

export default function Locations() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Service Areas
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            We Serve Pasco, Pinellas, Hillsborough & Hernando Counties
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive dumpster rental services across the Tampa Bay area and
            surrounding communities.
          </p>
        </div>

        {/* Pasco County Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pasco County
            </h2>
            <p className="text-gray-600">
              Serving all major cities and communities in Pasco County
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceLocationsPasco.map((location, index) => (
              <Link key={index} href={location.href}>
                <article className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${location.gradient} rounded-t-xl`}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${location.gradient}`}
                    >
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <Truck className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {location.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {location.description}
                  </p>

                  <div className="flex items-center text-red-600 text-sm font-medium">
                    <span>Learn More</span>
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Pinellas County Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pinellas County
            </h2>
            <p className="text-gray-600">
              Professional dumpster rental throughout Pinellas County
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceLocationsPinellas.map((location, index) => (
              <Link key={index} href={location.href}>
                <article className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${location.gradient} rounded-t-xl`}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${location.gradient}`}
                    >
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <Truck className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {location.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {location.description}
                  </p>

                  <div className="flex items-center text-red-600 text-sm font-medium">
                    <span>Learn More</span>
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Counties & Additional Areas Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Additional Service Areas
            </h2>
            <p className="text-gray-600">
              Extended coverage across multiple counties
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLocationsCounties.map((location, index) => (
              <Link key={index} href={location.href}>
                <article className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${location.gradient} rounded-t-xl`}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${location.gradient}`}
                    >
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <Truck className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {location.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {location.description}
                  </p>

                  <div className="flex items-center text-red-600 text-sm font-medium">
                    <span>Learn More</span>
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Service Outside These Areas?
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re expanding our service area regularly. Contact us to
              check availability in your location.
            </p>
            <Link href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
