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
  CalendarDaysIcon,
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
import { MarqueeDemo } from "./MarqueeDemo";

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
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-zinc-100 ring-1 ring-zinc-900/10 lg:w-1/2"></div>
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
                    className="h-7 w-6 text-green-600"
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
                    className="h-7 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Best Pricing Guaranteed</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <CalendarDaysIcon
                    className="h-7 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Flexible Rental & Same Day Drop Off</dd>
              </div>
              {/*  */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <ShieldCheckIcon
                    className="h-7 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Licensed &amp; Insured </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-green-600"
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
                    className="h-7 w-6 text-green-600"
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

              {/* reviews */}
              <div className="flex gap-x-4">
                <div className="mt-4">
                  {/* <p className="text-md font-bold text-black underline underline-offset-4 uppercase ">
                    Trusted by Hundreds of Locals
                  </p> */}
                  {/* <div className="mt-4 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl"> */}
                  {/* <MarqueeDemo /> */}
                  {/* </div> */}
                  {/* <div className="flex items-center mt-3">
                    <div className="flex">
                      <svg
                        className="w-5 h-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <span className="ml-1 text-base font-normal text-neutral-900">
                      {" "}
                      (100+ Five Star Reviews){" "}
                    </span>
                  </div> */}
                </div>
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
