"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, ChevronDown, Clock, Menu, Phone, Star, X } from "lucide-react";
import { lowestPrice, navigation, siteConfig, telHref } from "@/lib/site-config";
import logo from "@/public/images/brand/lupo-logo.png";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

function Stars({ className = "h-3.5 w-3.5" }) {
  return (
    <span className="flex" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

function UtilityBar() {
  return (
    <div className="bg-brand text-white">
      <div className="flex h-9 items-center justify-between gap-4 px-4 text-xs font-medium sm:px-6 sm:text-sm lg:px-8 2xl:px-12">
        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Stars />
          <span>
            {siteConfig.rating.value}
            <span className="hidden sm:inline"> from {siteConfig.rating.countLabel} Google reviews</span>
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <p className="hidden items-center gap-1.5 md:flex">Same-day delivery available</p>
        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-1.5 lg:flex">
            <Clock aria-hidden className="h-3.5 w-3.5" />
            {siteConfig.hoursShort}
          </span>
          <a
            href={telHref}
            className="flex items-center gap-1.5 rounded font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone aria-hidden className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

function Logo({ onClick }) {
  return (
    <Link href="/" onClick={onClick} className={`flex shrink-0 items-center gap-3 rounded-lg ${focusRing}`}>
      <Image src={logo} alt="" aria-hidden priority width={51} height={44} className="h-11 w-auto" />
      <span className="whitespace-nowrap font-display text-xl font-bold uppercase leading-none tracking-wide text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Lupo <span className="text-brand-on-dark">Dumpster</span> Rentals
      </span>
      <span className="sr-only">, home</span>
    </Link>
  );
}

function DropdownPanel({ id, open, children, onClose }) {
  return (
    <div
      id={id}
      hidden={!open}
      className="absolute inset-x-8 top-full z-50 mx-auto max-w-6xl pt-2"
      onKeyDown={(e) => e.key === "Escape" && onClose(true)}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">{children}</div>
    </div>
  );
}

function DesktopNav({ isActive }) {
  const [open, setOpen] = useState("");
  const closeTimer = useRef(null);
  const buttons = useRef({});
  const navRef = useRef(null);

  const close = useCallback(
    (returnFocus) => {
      if (returnFocus && open) buttons.current[open]?.focus();
      setOpen("");
    },
    [open],
  );

  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => !navRef.current?.contains(e.target) && setOpen("");
    const onKey = (e) => e.key === "Escape" && close(true);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const hoverProps = (name) => ({
    onMouseEnter: () => {
      clearTimeout(closeTimer.current);
      setOpen(name);
    },
    onMouseLeave: () => {
      closeTimer.current = setTimeout(() => setOpen(""), 150);
    },
  });

  const trigger = (name, label) => (
    <button
      type="button"
      ref={(el) => (buttons.current[name] = el)}
      aria-expanded={open === name}
      aria-controls={`nav-${name}`}
      onClick={() => setOpen(open === name ? "" : name)}
      className={`flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 font-semibold text-white xl:px-3 transition-colors hover:text-brand-on-dark ${focusRing}`}
    >
      {label}
      <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open === name ? "rotate-180" : ""}`} />
    </button>
  );

  const linkClass = (href) =>
    `whitespace-nowrap rounded-md px-2.5 py-2 font-semibold transition-colors xl:px-3 ${focusRing} ${
      isActive(href) ? "text-brand-on-dark" : "text-white hover:text-brand-on-dark"
    }`;

  return (
    <nav ref={navRef} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-0.5 xl:gap-1">
        <li {...hoverProps("services")}>
          {trigger("services", "Services")}
          <DropdownPanel id="nav-services" open={open === "services"} onClose={close}>
            <div className="grid grid-cols-[1fr_1fr_18rem]">
              {navigation.services.map((group) => (
                <div key={group.title} className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-hover">{group.title}</p>
                  <ul className="mt-4 space-y-1">
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen("")}
                          className="block rounded-lg px-3 py-2 text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          <span className="font-semibold">{l.name}</span>
                          {l.description && <span className="block text-sm text-zinc-500">{l.description}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col justify-between bg-ink p-7 text-white">
                <div>
                  <p className="font-display text-2xl font-bold leading-tight">Flat prices from ${lowestPrice}.</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Delivery, pickup, and disposal up to the weight limit, all in one price.
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  <Link
                    href={navigation.bookHref}
                    onClick={() => setOpen("")}
                    className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Book Your Dumpster <ArrowRight aria-hidden className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/dumpster-rental-pricing"
                    onClick={() => setOpen("")}
                    className="block text-center text-sm font-semibold text-zinc-200 underline-offset-4 hover:underline"
                  >
                    See all pricing
                  </Link>
                </div>
              </div>
            </div>
          </DropdownPanel>
        </li>
        <li>
          <Link
            href={navigation.allAreasHref}
            className={linkClass(navigation.allAreasHref)}
            aria-current={isActive(navigation.allAreasHref) ? "page" : undefined}
          >
            Service Areas
          </Link>
        </li>
        {navigation.main.map((l) => (
          <li key={l.href} className={l.href === "/contact" ? "hidden xl:block" : undefined}>
            <Link href={l.href} className={linkClass(l.href)} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileMenu({ open, onClose, toggleRef, isActive }) {
  const panelRef = useRef(null);
  const [section, setSection] = useState("");

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () =>
      [...panel.querySelectorAll('a[href], button:not([disabled])')].filter((el) => el.offsetParent !== null);
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const toggle = toggleRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      toggle?.focus();
    };
  }, [open, onClose, toggleRef]);

  if (!open) return null;

  const row =
    "flex w-full min-h-[48px] items-center justify-between rounded-lg px-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

  const disclosure = (name, label, content) => (
    <div>
      <button type="button" className={row} aria-expanded={section === name} onClick={() => setSection(section === name ? "" : name)}>
        {label}
        <ChevronDown aria-hidden className={`h-5 w-5 transition-transform ${section === name ? "rotate-180" : ""}`} />
      </button>
      {section === name && <div className="px-4 pb-3 pt-1">{content}</div>}
    </div>
  );

  const subLink = "block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/10 hover:text-white";

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
        <Logo onClick={onClose} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 ${focusRing}`}
        >
          <X aria-hidden className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain px-2 py-4 sm:px-4">
        <div className="grid gap-3 px-2 pb-5">
          <Link
            href={navigation.bookHref}
            onClick={onClose}
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand text-lg font-bold text-white hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Book Your Dumpster <ArrowRight aria-hidden className="h-5 w-5" />
          </Link>
          <a
            href={telHref}
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/80 text-lg font-bold text-white hover:bg-white hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone aria-hidden className="h-5 w-5" /> Call {siteConfig.phone}
          </a>
          <p className="flex items-center justify-center gap-2 text-sm text-zinc-300">
            <span className="text-yellow-400">
              <Stars className="h-3.5 w-3.5" />
            </span>
            {siteConfig.rating.value} from {siteConfig.rating.countLabel} Google reviews
          </p>
        </div>

        <nav aria-label="Mobile" className="border-t border-white/10 pt-3">
          <Link href="/" onClick={onClose} className={row} aria-current={isActive("/") ? "page" : undefined}>
            Home
          </Link>
          {disclosure(
            "services",
            "Services",
            navigation.services.map((group) => (
              <div key={group.title} className="mb-4 last:mb-0">
                <p className="px-3 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-on-dark">{group.title}</p>
                <ul>
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={onClose} className={subLink}>
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )),
          )}
          <Link
            href={navigation.allAreasHref}
            onClick={onClose}
            className={row}
            aria-current={isActive(navigation.allAreasHref) ? "page" : undefined}
          >
            Service Areas
          </Link>
          {navigation.main.map((l) => (
            <Link key={l.href} href={l.href} onClick={onClose} className={row} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.name}
            </Link>
          ))}
        </nav>

        <p className="mt-6 border-t border-white/10 px-4 pt-5 text-sm text-zinc-400">
          {siteConfig.hours} · {siteConfig.address.city}, {siteConfig.address.state}
        </p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    router.events.on("routeChangeStart", closeMenu);
    return () => router.events.off("routeChangeStart", closeMenu);
  }, [router.events, closeMenu]);

  const path = router.asPath.split(/[?#]/)[0];
  const isActive = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-50 shadow-lg shadow-black/20">
      <a
        href="#main-content"
        className="sr-only z-[70] rounded-lg bg-white px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <UtilityBar />
      <div className="bg-ink">
        <div className="relative flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8 2xl:px-12">
          <Logo />
          <DesktopNav isActive={isActive} />
          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className={`hidden items-center gap-2 rounded-lg px-3 py-2 font-bold text-white transition-colors hover:text-brand-on-dark xl:flex ${focusRing}`}
            >
              <Phone aria-hidden className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href={navigation.bookHref}
              className={`hidden min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-5 font-bold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-hover sm:flex ${focusRing}`}
            >
              Book Your Dumpster <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={`-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden ${focusRing}`}
            >
              <Menu aria-hidden className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={closeMenu} toggleRef={toggleRef} isActive={isActive} />
    </header>
  );
}
