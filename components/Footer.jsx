// import { FadeIn } from "@/components/FadeIn";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

// Comment for redeploy

const navigation = {
  solutions: [
    { name: "Dumpster Rentals", href: "/services/dumpster-rental" },
    { name: "Haul Away Junk", href: "/services/haul-away-junk" },
    { name: "Junk Pick Up", href: "/services/junk-pick-up" },
    { name: "Dumpster Trailers", href: "/services/dumpster-trailer-rental" },
    { name: "All Services", href: "/services" },
  ],
  support: [
    { name: "Junk Removal", href: "/services/junk-removal" },
    { name: "Hoarding Cleanup", href: "/services/hoarding-cleanup" },
    { name: "Appliance Removal", href: "/services/appliance-removal" },
    {
      name: "Construction Debris",
      href: "/services/construction-debris-removal",
    },
    { name: "Mattress Disposal", href: "/services/mattress-disposal" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
    { name: "Service Locations", href: "/service-locations" },
    { name: "Blog", href: "/blog" },
    { name: "Home", href: "/" },
  ],
  serviceLocationsPasco: [
    { name: "Dade City", href: "/services/dumpster-rental-dade-city-fl" },
    { name: "Holiday", href: "/services/dumpster-rental-holiday-fl" },
    { name: "Hudson", href: "/services/dumpster-rental-hudson-fl" },
    { name: "Land O Lakes", href: "/services/dumpster-rental-land-o-lakes-fl" },
    { name: "Lutz", href: "/services/dumpster-rental-lutz-fl" },
    {
      name: "New Port Richey",
      href: "/services/dumpster-rental-new-port-richey-fl",
    },
    { name: "Odessa", href: "/services/dumpster-rental-odessa-fl" },
    { name: "San Antonio", href: "/services/dumpster-rental-san-antonio-fl" },
    { name: "Spring Hill", href: "/services/dumpster-rental-spring-hill" },
    { name: "Trinity", href: "/services/dumpster-rental-trinity-fl" },
    {
      name: "Wesley Chapel",
      href: "/services/dumpster-rental-wesley-chapel-fl",
    },
    { name: "Westchase", href: "/services/dumpster-rental-westchase-fl" },
    { name: "Zephyrhills", href: "/services/dumpster-rental-zephyrhills-fl" },
  ],
  serviceLocationsPinellas: [
    { name: "Clearwater", href: "/services/dumpster-rental-clearwater-fl" },
    { name: "Dunedin", href: "/services/dumpster-rental-dunedin-fl" },
    { name: "Keystone", href: "/services/dumpster-rental-keystone-fl" },
    { name: "Largo", href: "/services/dumpster-rental-largo-fl" },
    { name: "Oldsmar", href: "/services/dumpster-rental-oldsmar-fl" },
    { name: "Palm Harbor", href: "/services/dumpster-rental-palm-harbor" },
    {
      name: "Pinellas Park",
      href: "/services/dumpster-rental-pinellas-park-fl",
    },
    {
      name: "Safety Harbor",
      href: "/services/dumpster-rental-safety-harbor-fl",
    },
    { name: "Seminole", href: "/services/dumpster-rental-seminole-fl" },
    {
      name: "St Petersburg",
      href: "/services/dumpster-rental-st-petersburg-fl",
    },
    { name: "Tampa Bay", href: "/services/dumpster-rental-tampa-bay" },
  ],
  serviceLocationsCounties: [
    { name: "Brooksville", href: "/services/dumpster-rental-brooksville-fl" },
    {
      name: "Hernando County",
      href: "/services/dumpster-rental-hernando-county-fl",
    },
    {
      name: "Hillsborough County",
      href: "/services/dumpster-rental-hillsborough-county-fl",
    },
    {
      name: "Pinellas County",
      href: "/services/dumpster-rental-pinellas-county-fl",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/LupoLLC",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lupodumpsterrentals/?hl=en",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Call",
      href: "tel:+17273176717",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          {...props}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:lupodumpsters@gmail.com",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          {...props}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <FadeIn className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <img
                className="h-16 rounded-full"
                src="/logo3.svg"
                alt="Company name"
              />
            </Link>
            <p className="text-sm leading-6 text-zinc-600">
              Lupo Enterprises LLC
              <br />
              LIC #L20000153106
              <br />
              Address: 5647 Andrea Dr, Holiday, FL 34690
              <br />
              Phone: (727) 317-6717
              <br />
              Hours: Monday - Sunday: 7:00 AM - 8:00 PM
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-400 hover:text-zinc-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 uppercase">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-zinc-600 hover:text-zinc-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 uppercase">
                  Junk Removal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-zinc-600 hover:text-zinc-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 uppercase">
                  Pasco County
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.serviceLocationsPasco.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-zinc-600 hover:text-zinc-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 uppercase">
                  Pinellas County
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.serviceLocationsPinellas.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-zinc-600 hover:text-zinc-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900 uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-zinc-600 hover:text-zinc-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
        <div className="mt-16 border-t border-zinc-900/10 pt-8 sm:mt-20 lg:mt-24">
          <Link
            href="https://www.blackcatwebsitedesign.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-xs leading-5 text-zinc-500"
          >
            &copy; Designed by Black Cat Website Design
          </Link>
        </div>
      </div>
    </footer>
  );
}
