import React from "react";
import Link from "next/link";
const testimonials = [
  {
    name: "Brandi McLaughlin",
    review:
      "I had a wonderful experience with Lupo Enterprises.  They were helpful and friendly and professional on the phone.  They showed up on time and were polite and efficient. They really helped me out of a jam.",
    link: "https://g.co/kgs/r7rq87",
  },
  {
    name: "Star Hinshaw",
    review:
      "I can’t say enough good things about Lupo Enterprises. Alex, Amanda, and the Lupo team did an excellent job helping me out. I was in a time sensitive bind selling property and needed junk removal services.",
    link: "https://g.co/kgs/5SV4gd",
  },
  {
    name: "Don Brown",
    review:
      "Purchased new living room furniture yesterday. To my surprise, they are delivering the next day! I needed to find someone to take the old furniture away asap! Luckily I found Lupo Enterprises!",
    link: "https://g.co/kgs/fHknh9",
  },

  {
    name: "Vitina Stevens",
    review:
      "Alex made it extremely easy to rent. He always responds back to text & checked in on us to see if all was well. The dumpster was the perfect size, 20 yard, and fit a whole house gutting. I would definitely reccommend.",
    link: "https://g.co/kgs/9WPzpw",
  },
  {
    name: "Anne-Marie Hoeck",
    review:
      "Alex was very quick to respond to messages and work out details of scope of work needed. Quick and efficient on the day of the job at multiple locations. Second time hiring him and will definitely again.",
    link: "https://g.co/kgs/Z9fmVW",
  },
  {
    name: "Dominique Parise",
    review:
      "Very professional & reliable. I've used other dumpster rentals years ago but this one was hassle FREE. Thank you for making this junk removal less stressful. I highly recommend Lupo Dumpster Rentals.",
    link: "https://g.co/kgs/BM88tE",
  },
  {
    name: "Rosa Barbosa",
    review:
      "Lupo Dumpster Rental is a great company. Their owners and employees are reliable, dependable and honest. They serve with excellence and go the extra mile to help their clients.",
    link: "https://g.co/kgs/GvrQmk",
  },
  {
    name: "Don Lossing",
    review:
      "I called Alex today with an urgent dumpster need. After explaining the details surrounding my delimma, Alex simply said, 'I can make this work.' - TOP NOTCH CUSTOMER SERVICE!",
    link: "https://g.co/kgs/uGrBRx",
  },
];

export default function Testimonialsection() {
  return (
    <section className="py-10 sm:py-16 lg:py-24" id="testimonial">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-300">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div className="overflow-hidden bg-white rounded-md" key={index}>
              <div className="px-5 py-6">
                <div className="flex items-center justify-between ">
                  {/* <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg"
                    alt=""
                  /> */}
                  {/* ml-3 on this div */}
                  <div className="min-w-0  mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      {testimonial.name}
                    </p>
                  </div>
                  <Link
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.3232 11.1H12.7712V13.83H19.5524C19.2087 17.64 15.9066 19.27 12.7816 19.27C8.79199 19.27 5.29199 16.25 5.29199 12C5.29199 7.9 8.62533 4.73 12.792 4.73C16.0107 4.73 17.8962 6.7 17.8962 6.7L19.8753 4.72C19.8753 4.72 17.3337 2 12.6878 2C6.77116 2 2.19824 6.8 2.19824 12C2.19824 17.05 6.50033 22 12.8441 22C18.417 22 22.4795 18.33 22.4795 12.91C22.4795 11.76 22.3232 11.1 22.3232 11.1Z"
                        fill="#BA2525"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="mt-5 ">
                  <p className="text-base text-gray-800">
                    {testimonial.review}
                    <Link
                      href={testimonial.link}
                      className="block text-green-700 mt-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Review
                    </Link>
                    {/* <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center mt-10 font-sans text-base font-normal text-black group hover:text-green-400 duration-200"
                    >
                      See Review
                      <div className="inline-flex items-center justify-center w-8 h-8 ml-2 bg-transparent ">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
