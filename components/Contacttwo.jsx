import React from "react";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Contacttwo() {
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
      const res = await fetch("/api/sendcontacttwo", {
        body: JSON.stringify({
          email: watch("email"),
          fullname: watch("fullname"),
          message: watch("message"),
          phonenumber: watch("phonenumber"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      console.log(res);

      const { error } = await res.json();
    }
    console.log("COMPLETE");
  };
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
            <div className="flex flex-col self-stretch justify-between">
              <div className="flex-1 pb-6">
                <h2 className="text-3xl font-semibold tracking-wide text-white sm:text-4xl uppercase">
                  Our Junk Removal Pricing Starts at $75
                </h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">
                  Discover New Port Richey&apos;s Premier Junk Removal Services
                  for a Clutter-Free Life. We&apos;re here to help you get rid
                  of your junk. We offer a wide range of junk removal services.
                </p>
              </div>

              <div className="relative mt-10 overflow-hidden bg-red-600 lg:mt-0  -rotate-3">
                <div className="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>

                <div className="relative p-6 sm:px-8 sm:py-9">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-xl font-normal text-white">
                      &quot;Very professional & reliable. I&apos;ve used other
                      dumpster rentals years ago but this one was hassle FREE.
                      Thank you for making this junk removal less stressful. I
                      highly recommend Lupo Dumpster Rentals to everyone.&quot;
                    </p>
                  </blockquote>
                  <div className="flex items-center mt-6">
                    <img
                      className="object-cover rounded-full w-11 h-11 shrink-0"
                      src="/dominique.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-semibold text-white">
                        Dominique Parise
                      </p>
                      <Link
                        href="https://g.co/kgs/TEu9XU"
                        target="_blank"
                        rel="noopener"
                        className="text-sm font-normal text-gray-300"
                      >
                        See Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl ">
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Send us a message
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
                >
                  <div>
                    <label htmlFor="fullName" className="sr-only">
                      Your name
                    </label>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        defaultValue=""
                        placeholder="Your name"
                        {...register("fullname", { required: true })}
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-red-600 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        placeholder="Email address"
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-red-600 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1-222-333-4444"
                        {...register("phonenumber", { required: true })}
                        maxLength={15}
                        minLength={8}
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-red-600 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Write your message
                    </label>
                    <div>
                      <textarea
                        name="email"
                        {...register("message", {})}
                        placeholder="Write your message"
                        rows="4"
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-red-600 focus:ring-0"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-black transition-all duration-200  border border-red-500  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 hover:text-white"
                  >
                    Send message
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
