import Testimonialsection from "../components/Testimonialsection";
import Image from "next/image";
import Link from "next/link";
import trailerone from "../public/trailer-1.jpg";
import trailertwo from "../public/trailer-2.jpg";
import trailerthree from "../public/trailer-3.jpg";
import trailerfour from "../public/trailer-4.jpg";
import junkremovalnewportrichey from "../public/junk-removal-new-port-richey.png";
import construction from "../public/construction.jpg";
import Head from "next/head";
const timeline = [
  {
    name: "Founded company",
    description:
      "Lupo Enterprises was founded in 2020 by Alex Lupo. The company started as a small operation in Holiday, FL.",
    date: "June 2020",
    dateTime: "2020-06",
  },
  {
    name: "Increased Trailer Fleet",
    description:
      "The company expanded its fleet of dumpster trailers to over ten trailers better serve the needs of its customers.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Expanded to new markets",
    description:
      "We now service the entire Tampa Bay area, including Pasco, Pinellas, and Hillsborough counties.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
];
const jobOpenings = [
  {
    id: 1,
    role: "Dumpster Rentals",
    href: "#",
    description:
      "Our bread and butter. We have 10, 15, and 20 cubic yard trailers available for rent to homeowners, contractors, and roofers anytime they need them.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Demolition Services",
    href: "#",
    description:
      "We offer full-service demolition services for residential properties. We have the equipment and expertise to handle any job.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "Property Cleanouts",
    href: "#",
    description:
      "We offer property cleanout services for homeowners. We can remove junk, debris, and unwanted items from your property.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
];

const metatitle = "About Us | Lupo Dumpster Rental and Junk Removal";
const description =
  "Lupo Enterprises is a family-owned and operated dumpster rental and junk removal company serving the Tampa Bay area. We are committed to providing our customers with the best services.";

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>{metatitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
        <main className="isolate">
          {/* Hero section */}
          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-black-100/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-black-600/20 ring-1 ring-black-50 sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-4xl font-bold uppercase tracking-tight text-zinc-900 sm:text-5xl lg:col-span-2 xl:col-auto">
                  Walking with integrity is our primary mission when serving our
                  customers.
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-zinc-700">
                    At Lupo Enterprises, we are committed to providing our
                    customers with unparalleled service and solutions for their
                    waste management needs. Our team is committed to safety,
                    integrity, and quality in everything we do.
                  </p>
                </div>
                <img
                  src="/alex-lupo.png"
                  alt=""
                  className="mt-10 aspect-[6/5] w-full max-w-lg rounded-md object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>

          {/* Timeline section */}
          <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-sm font-semibold leading-6 text-black-600"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-zinc-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-zinc-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-zinc-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo cloud */}
          {/* <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-black px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our customers love us
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit
              occaecat labore proident cillum in nisi adipisicing officia
              excepteur tempor deserunt.
            </p>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div> */}
          <div className="pt-10">
            <Testimonialsection />
          </div>
          {/* Content section */}
          <div className="mt-32 overflow-hidden sm:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl uppercase">
                    Our Customers
                  </h2>
                  <p className="mt-6 text-xl leading-8 text-zinc-600">
                    We are proud to have served over 1000+ customers in the
                    Tampa Bay area. Our customers love us for our reliability,
                    pricing, and efficiency.
                  </p>
                  <p className="mt-6 text-base leading-7 text-zinc-600">
                    We offer a wide range of services, including dumpster
                    rentals, junk removal, demolition services and much more. We
                    are committed to providing our customers with the best
                    service possible.
                  </p>
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <Image
                      src={junkremovalnewportrichey}
                      alt="dumpster trailer one"
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-md bg-zinc-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <Image
                        src={trailertwo}
                        alt="dumpster trailer 2"
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-md bg-zinc-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <Image
                        src={trailerone}
                        alt="dumpster trailer 3"
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-md bg-zinc-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <Image
                        src={trailerfour}
                        alt="dumpster trailer 4"
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-md bg-zinc-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 uppercase sm:text-4xl">
                We approach every project with the same level of commitment and
                dedication.
              </h2>
              <p className="mt-6 text-base leading-7 text-zinc-600">
                Our team is dedicated to ensuring that every project is
                completed on time and within budget. We take pride in our work
                and strive to exceed our customers&apos; expectations.
              </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-zinc-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-zinc-900">
                  100+ Five Star Reviews
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-zinc-900">
                    High Satisfaction
                  </p>
                  <p className="mt-2 text-base leading-7 text-zinc-600">
                    Our customers report high satisfaction with our services,
                    highlighting reliability, pricing and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-black p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  1000+ Clean Ups
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Community Impact
                  </p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">
                    Supported over 1000 local projects, helping communities stay
                    clean and efficient.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-zinc-200 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-black">
                  60% Construction
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-black">
                    Diverse Projects
                  </p>
                  <p className="mt-2 text-base leading-7 text-zinc-700">
                    60% of our rentals serve construction and renovation
                    projects, while 40% support cleanouts and other waste
                    disposal needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
              <div className="w-full lg:max-w-lg lg:flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl uppercase">
                  We offer a wide range of services to meet your needs.
                </h2>
                <p className="mt-6 text-xl leading-8 text-zinc-700">
                  Our company is constantly growing and expanding our services
                  to meet the needs of our customers.
                </p>
                <Image
                  src={construction}
                  alt="construction site"
                  className="mt-16 aspect-[6/5] w-full rounded-md bg-zinc-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
              </div>
              <div className="w-full lg:max-w-xl lg:flex-auto">
                <h3 className="sr-only">Job openings</h3>
                <ul className="-my-8 divide-y divide-zinc-100">
                  {jobOpenings.map((opening) => (
                    <li key={opening.id} className="py-8">
                      <dl className="relative flex flex-wrap gap-x-3">
                        <dt className="sr-only">Role</dt>
                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-zinc-900">
                          <div>
                            {opening.role}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                          </div>
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="mt-2 w-full flex-none text-base leading-7 text-zinc-700">
                          {opening.description}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex border-t border-zinc-100 pt-8">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-black-600 hover:text-black-500"
                  >
                    Contact Us Now <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
