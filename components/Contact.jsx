import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { FadeIn } from "./FadeIn";

export default function Contact() {
  const cities = [
    { name: "Dade City", url: "#" },
    { name: "Holiday", url: "/services/dumpster-rental-holiday-fl" },
    { name: "Hudson", url: "/services/dumpster-rental-hudson-fl" },
    { name: "Land O Lakes", url: "#" },
    { name: "Lutz", url: "/services/dumpster-rental-lutz-fl" },
    {
      name: "New Port Richey",
      url: "/services/dumpster-rental-new-port-richey-fl",
    },
    { name: "Odessa", url: "/services/dumpster-rental-odessa-fl" },
    { name: "Oldsmar", url: "#" },
    { name: "Palm Harbor", url: "/services/dumpster-rental-palm-harbor" },
    { name: "Pasco County", url: "#" },
    {
      name: "Pinellas County",
      url: "/services/dumpster-rental-pinellas-county",
    },
    { name: "Port Richey", url: "/services/junk-removal-port-richey" },
    { name: "Spring Hill", url: "/services/dumpster-rental-spring-hill" },
    { name: "Tampa", url: "/services/dumpster-rental-tampa-bay" },
    { name: "Tarpon Springs", url: "#" },
    { name: "Trinity", url: "/services/dumpster-rental-trinity-fl" },
  ];

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const notify = () => toast("Your message has been sent successfully!");

  const onSubmit = (data) => {
    // console.log(data);
    handlesub(data);
    reset();
    notify();

    router.push("/thank-you");
  };
  const handlesub = async (e) => {
    // console.log("sending");
    if (true) {
      // console.log("sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: watch("email"),
          fullname: watch("fullname"),
          message: watch("message"),
          phonenumber: watch("phonenumber"),
          days: watch("days"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      // console.log(res);

      const { error } = await res.json();
    }
    console.log("COMPLETE");
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24" id="contact">
      <FadeIn>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl uppercase text-center">
              Get Rid of Your Junk Today
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Don&apos;t hesitate to let us assist you in finding the solution
              that best fits your needs for your project. We service all of
              Tampa Bay, including:{" "}
            </p>

            {/*  */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-400 mt-6">
              {cities.map((city, index) => (
                <div key={index} className="col-span-1">
                  <ul className="list-none">
                    <Link href={city.url}>
                      <h3 className="cursor-pointer hover:underline hover:text-red-500">
                        {city.name}
                      </h3>
                    </Link>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white ">
                <div className="p-6 ">
                  <Link href="tel:7273176717">
                    <svg
                      className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </Link>
                  <div className="mt-6">
                    <Link
                      href="tel:7273176717"
                      className=" text-lg font-medium text-gray-900 hover:text-red-600"
                    >
                      727-317-6717
                    </Link>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden bg-white ">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    Based in New Port Richey, FL 34690 Serving all of Tampa Bay
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-white ">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:lupodumpsters@gmail.com">
                    <p className="mt-6 text-md sm:text-lg font-medium text-gray-900">
                      lupodumpsters@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white ">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          defaultValue=""
                          placeholder="Enter Your Full Name"
                          {...register("fullname", { required: true })}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200  focus:outline-none focus:border-red-600 caret-red-600"
                        />
                        {errors.fullname && (
                          <span className="text-base font-normal text-red-400">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          {...register("email", { required: true })}
                          defaultValue=""
                          placeholder="Enter Your Email"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200  focus:outline-none focus:border-red-600 caret-red-600"
                        />
                        {errors.message && (
                          <span className="text-base font-normal text-red">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          defaultValue=""
                          placeholder="Enter Your Phone Number"
                          {...register("phonenumber", { required: true })}
                          maxLength={14}
                          minLength={8}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200  focus:outline-none focus:border-red-600 caret-red-600"
                        />
                        {errors.message && (
                          <span className="text-base font-normal text-red">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Days Needed{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          {...register("days", { required: true })}
                          defaultValue=""
                          placeholder="Enter How Many Rental Days"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200  focus:outline-none focus:border-red-600 caret-red-600"
                        />
                        {errors.message && (
                          <span className="text-base font-normal text-red">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Message{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          {...register("message", {})}
                          placeholder="Your Message"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200  resize-y focus:outline-none focus:border-red-600 caret-red-600"
                          rows="4"
                        ></textarea>
                        {errors.message && (
                          <span className="text-base font-normal text-red">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent  focus:outline-none hover:bg-red-700 focus:bg-red-700"
                      >
                        Send Message
                      </button>
                      <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
