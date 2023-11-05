import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

const services = [
  {
    name: "Home appliance recycling",
    description:
      "Get rid of your old refrigerators, washing machines, dryers, ovens, dishwashers, and air conditioners.",
    link: "/services/appliance-removal-new-port-richey-fl",
  },
  {
    name: "Construction Debris",
    link: "/services/construction-debris-removal-new-port-richey-fl",
    description:
      "Maintain the safety of the construction property by removing leaves, branches, and other debris.",
  },
  {
    name: "Haul Away Junk",
    link: "/services/haul-away-junk",
    description:
      "Let us haul away your junk from your property. We are ready for pick up today, give us a call.",
  },
  {
    name: "Dumpster Rental",
    link: "/services/dumpster-rental-new-port-richey-fl",
    description:
      "Rent a dumpster to get rid of your old appliances, furniture, and other household items.",
  },
  {
    name: "Garage Cleaning",
    link: "/services/garage-cleaning-service-new-port-richey-fl",
    description:
      "Call us to declutter your garage and make more room at the house. Enjoy the extra space you have now.",
  },
  {
    name: "Mattress Disposal",
    link: "/services/mattress-disposal",
    description:
      "Get rid of your old mattress and prevent the spread of allergens and other harmful organisms.",
  },
  {
    name: "Junk Removal",
    link: "/services/junk-removal-new-port-richey-fl",
    description:
      "Get rid of your old appliances, furniture, and other household items that are taking up space.",
  },
  {
    name: "Junk Pick Up",
    link: "/services/junk-pick-up",
    description:
      "Let us take care of your unneeded junk. We are ready for pick up today located near you.",
  },
];

export default function Otherservices({ header, subheader, ptag }) {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 sm:py-24 px-6  lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 ">
        <div>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600 uppercase">
            {header}
          </h2>
          <h3 className="mt-2 text-3xl font-semibold tracking-wide text-white sm:text-4xl uppercase">
            {subheader}
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-300">{ptag}</p>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <dl className="grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
            {services.map((feature, key) => (
              <div key={key} className="relative">
                <dt>
                  <ChevronDoubleRightIcon
                    className="absolute mt-1 h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                  <Link
                    className="ml-10 text-md font-semibold leading-8 text-white hover:text-red-600 uppercase"
                    href={feature.link}
                  >
                    {feature.name}
                  </Link>
                </dt>
                <dd className="mt-2 ml-10 text-base leading-7 text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
