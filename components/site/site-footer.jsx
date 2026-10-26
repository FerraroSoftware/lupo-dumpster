import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react";
import { navigation, serviceAreas, siteConfig, telHref } from "@/lib/site-config";
import logo from "@/public/images/brand/lupo-logo.png";

const linkClass =
  "rounded text-zinc-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

function Column({ title, children, className = "", listClassName = "space-y-2.5" }) {
  return (
    <div className={className}>
      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{title}</h3>
      <ul className={`mt-4 text-sm ${listClassName}`}>{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  const [dumpsters, junk] = navigation.services;
  const pasco = serviceAreas[0];
  const countyHubs = serviceAreas.filter((a) => a.href);
  const { address } = siteConfig;

  return (
    <footer className="border-t-4 border-brand bg-ink text-zinc-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div className="col-span-2 lg:col-span-4 xl:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Image src={logo} alt="" aria-hidden width={65} height={56} className="h-14 w-auto" />
              <span className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-white">
                Lupo <span className="text-brand-on-dark">Dumpster</span> Rentals
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Flat-rate dumpster rental and junk removal for Pasco County and the Tampa Bay area. Locally owned since{" "}
              {siteConfig.foundedYear}.
            </p>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="flex text-yellow-400" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="font-semibold text-white">{siteConfig.rating.value}</span>
              <span>from {siteConfig.rating.countLabel} Google reviews</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lupo Dumpster Rentals on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Facebook aria-hidden className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lupo Dumpster Rentals on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Instagram aria-hidden className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Column title={dumpsters.title}>
            {dumpsters.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/dumpster-rental-pricing" className={linkClass}>
                Dumpster Rental Pricing
              </Link>
            </li>
          </Column>

          <Column title="Junk Removal">
            {junk.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
          </Column>

          <Column
            title="Service Areas"
            className="col-span-2 sm:col-span-1"
            listClassName="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:block sm:space-y-2.5"
          >
            {pasco.cities.slice(0, 6).map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={linkClass}>
                  {c.name}
                </Link>
              </li>
            ))}
            {countyHubs.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className={linkClass}>
                  {a.county}
                </Link>
              </li>
            ))}
            <li>
              <Link href={navigation.allAreasHref} className={`${linkClass} font-semibold text-white`}>
                All service areas →
              </Link>
            </li>
          </Column>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Contact</h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <a href={telHref} className={`flex items-center gap-2.5 text-base font-bold text-white ${linkClass}`}>
                <Phone aria-hidden className="h-4 w-4 shrink-0 text-brand-on-dark" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className={`flex items-center gap-2.5 break-all ${linkClass}`}>
                <Mail aria-hidden className="h-4 w-4 shrink-0 text-brand-on-dark" />
                {siteConfig.email}
              </a>
              <p className="flex gap-2.5">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-on-dark" />
                <span>
                  {siteConfig.legalName}
                  <br />
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock aria-hidden className="h-4 w-4 shrink-0 text-brand-on-dark" />
                {siteConfig.hours}
              </p>
            </address>
            <Link
              href={navigation.bookHref}
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-5 font-bold text-white transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book Your Dumpster <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-zinc-400 xl:flex-row xl:items-center xl:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} · {siteConfig.registration}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {[...navigation.company, ...navigation.legal].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
