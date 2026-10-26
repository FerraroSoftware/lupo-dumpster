import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { container } from "@/components/site/home-sections";
import { Highlight } from "@/components/site/section-heading";
import { navigation, siteConfig, telHref } from "@/lib/site-config";

const links = [
  { name: "Book a dumpster", href: navigation.bookHref },
  { name: "Dumpster rental pricing", href: "/dumpster-rental-pricing" },
  { name: "All services", href: "/services" },
  { name: "Junk removal", href: "/services/junk-removal" },
  { name: "Service areas", href: "/service-locations" },
  { name: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{`Page Not Found | ${siteConfig.name}`}</title>
        <meta name="robots" content="noindex" key="robots" />
      </Head>
      <section aria-labelledby="nf-title" className="bg-ink py-24 text-white lg:py-32">
        <div className={`${container} max-w-3xl text-center`}>
          <p className="font-display text-8xl font-extrabold text-brand-on-dark">404</p>
          <h1 id="nf-title" className="mt-4 font-display text-5xl font-extrabold leading-tight md:text-6xl">
            This Page Got <Highlight tone="dark">Hauled Away</Highlight>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
            The page you&apos;re looking for moved or no longer exists. Here&apos;s where most people are headed:
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex min-h-[52px] items-center justify-between rounded-xl bg-white/5 px-5 font-semibold ring-1 ring-white/10 hover:bg-white/10"
                >
                  {l.name} <ArrowRight aria-hidden className="h-4 w-4 text-brand-on-dark" />
                </Link>
              </li>
            ))}
          </ul>
          <a href={telHref} className="mt-10 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4">
            <Phone aria-hidden className="h-4 w-4" /> Or call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
