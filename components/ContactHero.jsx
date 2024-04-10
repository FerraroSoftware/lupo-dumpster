"use client";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  UsersIcon,
  ClockIcon,
  BoltIcon,
  SparklesIcon,
  PencilIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  BuildingOfficeIcon,
  LockClosedIcon,
  CloudIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  ArrowUpIcon,
  Battery100Icon,
  CurrencyDollarIcon,
  WifiIcon,
  CheckCircleIcon,
  CheckIcon,
  CheckBadgeIcon,
  PuzzlePieceIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { FadeIn } from "./FadeIn";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Image from "next/image";
import lupodumpster from "../public/lupo-dumpster.png";

export default function ContactHero({ header }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    makeApiCall();
    // createContact(data);
    reset();
    router.push("/thank-you");
  };
  const makeApiCall = async () => {
    //  await fetch("/api/sendgrid", {
    //    method: "POST",
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({
    //      firstname: watch("firstname"),
    //      lastname: watch("lastname"),
    //      email: watch("email"),
    //      phone: watch("phone"),
    //      message: watch("message"),
    //    }),
    //  });

    await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: watch("email"),
        firstname: watch("firstname"),
        lastname: watch("lastname"),
        message: watch("message"),
        phone: watch("phone"),
        //   days: watch("days"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const createContact = async (data) => {
    // console.log("incoming data to createContact", data);

    const res = await fetch("/api/contactdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });
  };
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-zinc-100 ring-1 ring-zinc-900/10 lg:w-1/2">
              {/* <svg
                className="absolute inset-0 h-full w-full stroke-zinc-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-zinc-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg> */}
              {/* <Image
                src={garagedoorsparatec}
                className="absolute inset-0 h-full w-full object-cover"
              ></Image> */}
              {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-zinc-900/10" /> */}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold  text-zinc-900 uppercase">
              {header}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Lupo Dumpster Rentals and Junk Removal is a locally owned and
              operated business that specializes in providing dumpster rentals
              and junk removal services and more in Pasco County, Florida.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-zinc-900">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <TruckIcon
                    className="h-7 w-6 text-red-500"
                    aria-hidden="true"
                  />
                </dt>
                <dd>10, 15, 20 Yard Dumpsters</dd>
              </div>
              {/*  */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <CurrencyDollarIcon
                    className="h-7 w-6 text-red-500"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Best Pricing Guaranteed</dd>
              </div>
              {/*  */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <ShieldCheckIcon
                    className="h-7 w-6 text-red-500"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Licensed &amp; Insured </dd>
              </div>
              {/*  */}
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-zinc-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  6626 Orchid Lake Road
                  <br />
                  New Port Richey, Florida 34653
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-zinc-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  13654 N 12th St, Unit 01
                  <br />
                  Tampa, Florida 33612
                </dd>
              </div> */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-red-500"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-zinc-700" href="tel:+17273176717">
                    +1 (727) 317-6717
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-red-500"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-zinc-700"
                    href="mailto:lupodumpsters@gmail.com"
                  >
                    Email Us
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 "
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-zinc-900 uppercase"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    {...register("firstname", { required: true })}
                    autoComplete="given-name"
                    className="block w-full  border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-zinc-900 uppercase"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    {...register("lastname", { required: true })}
                    autoComplete="family-name"
                    className="block w-full  border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-zinc-900 uppercase"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                    autoComplete="email"
                    className="block w-full  border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-zinc-900 uppercase"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    {...register("phone", { required: true })}
                    autoComplete="tel"
                    className="block w-full  border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-zinc-900 uppercase"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    {...register("message", { required: true })}
                    rows={4}
                    className="block w-full  border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 uppercase rounded-md"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
