import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ClockIcon,
  HomeModernIcon,
  HandThumbUpIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import junkpickup from "../public/junk-pickup.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  offscreen: {
    opacity: 0.2,
    scale: 1,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0, 0.31, 0.5, 1.01],
    },
    delay: 0,
    y: 0,
  },
};

const features = [
  {
    name: "Estate Clean Outs.",
    description:
      "We offer flat rate pricing for all of our services. No hidden fees or surprises.",
    icon: HomeModernIcon,
  },
  {
    name: "Demolition Clean Ups.",
    description:
      "Our team is on time and ready to help you with all your demo clean ups needs near New Port Richey.",
    icon: ClockIcon,
  },
  {
    name: "Tree Removal.",
    description:
      "We offer affordable tree removal services in the greater Tampa Bay area. ",
    icon: UsersIcon,
  },
  {
    name: "Property Clean Outs.",
    description:
      "We offer property services for all your junk removal needs. Contact us today for a free quote.",
    icon: HomeIcon,
  },
];

export default function Junkremoval() {
  return (
    <div className="overflow-hidden py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">
                Junk Removal
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Clean Up Your Space with Affordable Junk Removal Options
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Have junk that needs to be removed near New Port Richey? We
                offer affordable junk removal services in the greater Tampa Bay
                area. Our team is ready to help you with all your junk removal
                needs. Give us a call today for a free quote!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <Link
                href="/services/junk-removal-new-port-richey-fl"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-gray-200 bg-transparent 
                border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-all duration-200"
                role="button"
              >
                {" "}
                More on Junk Removal{" "}
              </Link>
            </div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
          >
            <Image
              src={junkpickup}
              alt="Junk removal new port richey"
              className="w-[25rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
