import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "10 Yard Dumpster",
    id: "tier-10-yard-dumpster",
    href: "/contact",
    priceMonthly: "$300",
    description: "Ideal for small-scale cleanouts and more.",
    features: [
      "Dump Fees Included",
      "Three Day Rental",
      "Suitable for Rooms",
      "Empty Small Storage",
      "Perfect for Personal Projects",
      "2 tons included in price",
    ],
    mostPopular: false,
  },
  {
    name: "15 Yard Dumpster",
    id: "tier-15-yard-dumpster",
    href: "/contact",
    priceMonthly: "$365",
    description: "Great for larger cleanouts and contractors.",
    features: [
      "Dump Fees Included",
      "Three Day Rental",
      "Useful for Property Cleanout",
      "Perfect for Contractors",
      "Suitable for Personal Projects",
      "3 tons included in price",
    ],
    mostPopular: true,
  },
  {
    name: "20 Yard Dumpster",
    id: "tier-enterprise",
    href: "/contact",
    priceMonthly: "$450",
    description: "For large-scale projects across various domains.",
    features: [
      "Dump Fees Included",
      "Three Day Rental",
      "Ideal for Large Scale Cleanouts",
      "Suitable for Major Renovations",
      "Perfect for Commercial Projects",
      "4 tons included in price",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewPricingthree() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white uppercase sm:text-4xl">
            Affordable Dumpster Rentals
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          We strive to offer affordable solutions that meet your needs without
          compromising on the quality of our services. Give us a call today.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between  bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-red-600" : "text-gray-900",
                      "text-lg font-semibold leading-8 uppercase"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  {/* <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span> */}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-red-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-red-600 text-white shadow-sm hover:bg-red-500"
                      : "text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300",
                    "mt-8 block  py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 uppercase"
                  )}
                >
                  Book Now
                </a>
                <div className="text-center mt-2 text-gray-500 text-sm">
                  Variables affect final pricing
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
