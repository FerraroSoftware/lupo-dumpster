import { Inter } from "next/font/google";
import { formatDate } from "../lib/formatDate";
import { FadeIn } from "../components/FadeIn";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Bloglayout({ children, title, date, description }) {
  return (
    <>
      <Head>
        <title>{`${title} | Lupo Dumpster Rentals`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn className="">
        <div className="">
          <div className="mt-24">
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="uppercase mt-6 mb-4 font-display font-semibold tracking-tight [text-wrap:balance] text-4xl text-white">
                {title}
              </h1>
              <time
                dateTime={date}
                className="order-first text-sm text-neutral-50"
              >
                {formatDate(date)}
              </time>
            </header>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className="w-full max-w-4xl px-4">{children}</div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
