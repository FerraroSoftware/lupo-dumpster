import React from "react";

export default function Steps() {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-5xl lg:grid-cols-2 gap-y-12 gap-x-16">
          <div>
            <p className="text-base font-semibold text-red-600">
              Say hello to Landingfolio
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-8">
              Get your project going in 3 steps
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
              Clarity gives you the blocks & components you need to create a
              truly professional website for your SaaS and gives the blocks.
            </p>
          </div>

          <div>
            <ul className="space-y-12">
              <li className="flex flex-col items-start sm:flex-row">
                <div className="inline-flex items-center justify-center w-16 h-16 text-red-600 bg-gray-100 rounded-full shrink-0">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
                <div className="mt-6 sm:mt-0 sm:ml-8">
                  <h3 className="text-xl font-semibold text-gray-500">
                    Step-1:{" "}
                    <span className="text-gray-900">
                      Start with a great design
                    </span>
                  </h3>
                  <p className="mt-4 text-base font-normal text-gray-700">
                    Clarity gives you the blocks & components you need to create
                    a website.
                  </p>
                </div>
              </li>

              <li className="flex flex-col items-start sm:flex-row">
                <div className="inline-flex items-center justify-center w-16 h-16 text-red-600 bg-gray-100 rounded-full shrink-0">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <div className="mt-6 sm:mt-0 sm:ml-8">
                  <h3 className="text-xl font-semibold text-gray-500">
                    Step-2:{" "}
                    <span className="text-gray-900">
                      Add clever content areas
                    </span>
                  </h3>
                  <p className="mt-4 text-base font-normal text-gray-700">
                    Clarity gives you the blocks & components you need to create
                    a website.
                  </p>
                </div>
              </li>

              <li className="flex flex-col items-start sm:flex-row">
                <div className="inline-flex items-center justify-center w-16 h-16 text-red-600 bg-gray-100 rounded-full shrink-0">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <div className="mt-6 sm:mt-0 sm:ml-8">
                  <h3 className="text-xl font-semibold text-gray-500">
                    Step-3:{" "}
                    <span className="text-gray-900">
                      Easily update your site
                    </span>
                  </h3>
                  <p className="mt-4 text-base font-normal text-gray-700">
                    Clarity gives you the blocks & components you need to create
                    a website.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
