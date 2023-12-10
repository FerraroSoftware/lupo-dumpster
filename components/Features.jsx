import {
  UsersIcon,
  ClockIcon,
  BoltIcon,
  SparklesIcon,
  PencilIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  TruckIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { FadeIn, FadeInStagger } from "./FadeIn";

const incentives = [
  {
    name: "Same-Day Service",
    description:
      "Need a dumpster today? We offer prompt same-day service to ensure your project stays on track without any delays.",
    imageSrc: ClockIcon,
  },
  {
    name: "Varied Dumpster Sizes",
    description:
      "From small home renovations to large construction projects, we provide a full range of dumpster sizes to suit any job.",
    imageSrc: TruckIcon,
  },
  {
    name: "Competitive Pricing",
    description:
      "Get the best value for your money with our transparent, competitive pricing structure with no hidden fees.",
    imageSrc: CurrencyDollarIcon,
  },
  {
    name: "Flexible Rental Periods",
    description:
      "We offer flexible rental periods so you can work at a pace that suits you, without worrying about strict deadlines.",
    imageSrc: CalendarDaysIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <FadeInStagger>
          <ul
            role="list"
            className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8"
          >
            {incentives.map((incentive) => (
              <li key={incentive.name}>
                <FadeIn>
                  <div key={incentive.name}>
                    <div className="">
                      <incentive.imageSrc
                        className="h-10 w-10 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-6 text-md font-medium text-white uppercase">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-md text-zinc-300">
                      {incentive.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </div>
  );
}
