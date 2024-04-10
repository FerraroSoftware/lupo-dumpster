import Image from "next/image";
import orlando from "../public/orlando.png";

import newportrichey from "../public/new-port-richey.jpg";
import springhill from "../public/spring-hill.jpg";
import hudson from "../public/hudson.jpg";
import portrichey from "../public/port-richey.jpg";
import palmharbor from "../public/palm-harbor.jpg";
import holiday from "../public/holiday.jpg";
import pinellas from "../public/pinellas.jpg";
import tampa from "../public/tampa.jpg";
import lutz from "../public/lutz.jpg";
import odessa from "../public/odessa.jpg";
import trinity from "../public/trinity.jpg";

const posts = [
  {
    id: 1,
    title: "Holiday, FL",
    href: "/services/dumpster-rental-holiday-fl",
    imageUrl: holiday,
    imageAlt: "holiday",
  },
  {
    id: 2,
    title: "Hudson, FL",
    href: "/services/dumpster-rental-hudson-fl",
    imageUrl: hudson,
    imageAlt: "hudson",
  },
  {
    id: 3,
    title: "Lutz, FL",
    href: "/services/dumpster-rental-lutz-fl",
    imageUrl: lutz,
    imageAlt: "lutz",
  },
  {
    id: 4,
    title: "New Port Richey, FL",
    href: "/services/dumpster-rental-new-port-richey-fl",
    imageUrl: newportrichey,
    imageAlt: "newportrichey",
  },
  {
    id: 5,
    title: "Odessa, FL",
    href: "/services/dumpster-rental-odessa-fl",
    imageUrl: odessa,
    imageAlt: "odessa",
  },
  {
    id: 6,
    title: "Palm Harbor",
    href: "/services/dumpster-rental-palm-harbor",
    imageUrl: palmharbor,
    imageAlt: "palmharbor",
  },
  {
    id: 7,
    title: "Pinellas County",
    href: "/services/dumpster-rental-pinellas-county",
    imageUrl: pinellas,
    imageAlt: "pinellas",
  },
  {
    id: 8,
    title: "Spring Hill",
    href: "/services/dumpster-rental-spring-hill",
    imageUrl: springhill,
    imageAlt: "springhill",
  },
  {
    id: 9,
    title: "Tampa Bay",
    href: "/services/dumpster-rental-tampa-bay",
    imageUrl: tampa,
    imageAlt: "tampa",
  },
  {
    id: 10,
    title: "Trinity, FL",
    href: "/services/dumpster-rental-trinity-fl",
    imageUrl: trinity,
    imageAlt: "trinity",
  },
];

export default function Locations() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
            We serve Pasco, Pinellas, and Hillsborough County
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Don&apos;t see your city? No problem, we can still help!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden  bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10  ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg uppercase font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
