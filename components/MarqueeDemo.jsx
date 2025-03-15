import { cn } from "../lib/utils";
import Marquee from "./Marquee";

import alexlupo from "../public/alex-lupo.png";
import Image from "next/image";

const reviews = [
  {
    name: "Brandi McLaughlin",
    username: "@jack",
    body: "I had a wonderful experience with Lupo Enterprises.  They were helpful and friendly and professional on the phone.  They showed up on time and were polite and efficient. They really helped me out of a jam.",
    img: alexlupo,
  },
  {
    name: "Star Hinshaw",
    username: "@jill",
    body: "I can’t say enough good things about Lupo Enterprises. Alex, Amanda, and the Lupo team did an excellent job helping me out. I was in a time sensitive bind selling property and needed junk removal services.",
    img: alexlupo,
  },
  {
    name: "Don Brown",
    username: "@john",
    body: "Purchased new living room furniture yesterday. To my surprise, they are delivering the next day! I needed to find someone to take the old furniture away asap! Luckily I found Lupo Enterprises!",
    img: alexlupo,
  },
  {
    name: "Vitina Stevens",
    username: "@jane",
    body: "Alex made it extremely easy to rent. He always responds back to text & checked in on us to see if all was well. The dumpster was the perfect size, 20 yard, and fit a whole house gutting. I would definitely reccommend.",
    img: alexlupo,
  },
  {
    name: "Anne-Marie Hoeck",
    username: "@jenny",
    body: "Alex was very quick to respond to messages and work out details of scope of work needed. Quick and efficient on the day of the job at multiple locations. Second time hiring him and will definitely again.",
    img: alexlupo,
  },
  {
    name: "Don Lossing",
    username: "@james",
    body: "I called Alex today with an urgent dumpster need I had. After explaining the details surrounding my delimma, Alex simply said, 'I can make this work.' - TOP NOTCH CUSTOMER SERVICE!",
    img: alexlupo,
  },
  {
    name: "Sava T",
    username: "@james",
    body: "Reservation and payment was easy, fair pricing. Quick delivery and pickup of the dumpster. Nice, professional people and high level of communication. Will use again if needed in the future.",
    img: alexlupo,
  },
  {
    name: "Adnan B",
    username: "@james",
    body: "The owner of the company is very easy to coordinate with. He assisted me very quickly and gave a great price and time for the dumpster drop off. Communication was simple throughout.",
    img: alexlupo,
  },
  {
    name: "Jonathan Greenip",
    username: "@james",
    body: "Needed help disposing of some old furniture and items we no longer needed. They were super quick to respond to my inquiry and were flexible on pickup days. Very reasonable pricing and we're so glad our junk is gone!",
    img: alexlupo,
  },
  {
    name: "Adani Webster",
    username: "@james",
    body: "Alex and his team are FANTASTIC! Rented from them this past weekend and couldn't be more impressed by their service, especially with the affordable pricing. 10/10 recommend!",
    img: alexlupo,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ImageCard = ({ src, alt }) => {
  return (
    <div className="relative w-64 h-64 overflow-hidden rounded-xl border">
      <Image
        className="object-cover w-full h-full"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        /> */}
        <div className="flex flex-col">
          {/*  */}
          <figcaption className="text-sm font-medium text-black mt-3">
            {name}
          </figcaption>

          {/*  */}
          <div className="flex items-center mt-1">
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
          </div>

          {/* <p className="text-xs font-medium text-zinc-600">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-zinc-600 text-sm">{body}</blockquote>
    </figure>
  );
};

export const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  border bg-white py-20 ">
      {/* header */}
      <div className="max-w-sm md:max-w-3xl mx-auto text-center pb-6">
        <h2 className="text-xl md:text-3xl font-bold tracking-wide text-black lg:text-4xl uppercase text-center">
          {/* Over 100 Five Star {""}
          <span class="text-googleBlue">G</span>
          <span class="text-googleRed">o</span>
          <span class="text-googleYellow">o</span>
          <span class="text-googleBlue">g</span>
          <span class="text-googleGreen">l</span>
          <span class="text-googleRed">e</span> Reviews! */}
          What Our Customers Are Saying
        </h2>
        <p className="max-w-5xl mx-auto mt-4 text-base leading-relaxed text-zinc-700">
          At Lupo Dumpster Rentals, we take pride in providing exceptional
          products and services that exceed our customers&apos; expectations.
          Give us a call today to experience the Lupo difference.
        </p>
      </div>

      {/* mar */}

      <Marquee pauseOnHover className="[--duration:35s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white "></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white "></div> */}
    </div>
  );
};
