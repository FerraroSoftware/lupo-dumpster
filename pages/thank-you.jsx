import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { CalendarCheck, CheckCircle2, Phone, PhoneCall, Ruler, ShieldAlert, Star, Truck } from "lucide-react";
import Seo from "@/components/Seo";
import { container, IconChip, ReviewCard } from "@/components/site/home-sections";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { getSize, reviews, siteConfig, telHref } from "@/lib/site-config";

const title = "Thank You | Lupo Dumpster Rentals";
const description = `Thanks for contacting Lupo Dumpster Rentals. We'll be in touch shortly. For anything urgent, call ${siteConfig.phone}.`;

const steps = [
  {
    icon: PhoneCall,
    title: "We confirm by call or text",
    text: `A member of the Lupo team reaches out to confirm your address, size, and delivery time. We're available 7 days a week, 7 AM to 8 PM.`,
  },
  {
    icon: Truck,
    title: "We drop it where you want it",
    text: "We place your dumpster on protective boards to keep your driveway safe.",
  },
  {
    icon: CalendarCheck,
    title: "Fill it up and call us",
    text: "When you're done, call or text and we'll haul it away. No dump runs, no hassle.",
  },
];

const quoteSteps = [
  {
    icon: PhoneCall,
    title: "We review your request",
    text: `A member of the Lupo team looks over what needs to go and reaches out by call or text, 7 days a week, 7 AM to 8 PM.`,
  },
  {
    icon: Truck,
    title: "You get a firm price",
    text: "We quote the job up front. Nothing is scheduled until you say yes.",
  },
  {
    icon: CalendarCheck,
    title: "We load it and haul it",
    text: "Our crew does the lifting and sweeps up. Your space is clear.",
  },
];

const quotePrep = [
  {
    icon: Ruler,
    title: "Snap a few photos",
    text: "Photos of the pile or the room help us give you an accurate price faster. Text them to us anytime.",
  },
  {
    icon: ShieldAlert,
    title: "Set aside what stays",
    text: "Separate anything you're keeping so there's no confusion on pickup day.",
  },
  {
    icon: Phone,
    title: "Keep your phone handy",
    text: `We'll call or text from ${siteConfig.phone}. Save the number so you don't miss us.`,
  },
];

const prep = [
  {
    icon: Ruler,
    title: "Clear the drop spot",
    text: "Move cars, trash cans, and anything low-hanging away from where the dumpster goes. Leave room for the truck to back in.",
  },
  {
    icon: ShieldAlert,
    title: "Know what can't go in",
    // TODO(D9): link to /what-can-go-in-a-dumpster once the list is confirmed.
    text: "Hazardous chemicals, wet paint, and tires can't go in. Not sure about something? Just ask when we call.",
  },
  {
    icon: Phone,
    title: "Keep your phone handy",
    text: `We'll call or text from ${siteConfig.phone}. Save the number so you don't miss us.`,
  },
];

export default function ThankYou() {
  const { query } = useRouter();
  const size = typeof query.size === "string" ? getSize(query.size) : null;
  const isQuote = query.service === "quote";
  const nextSteps = isQuote ? quoteSteps : steps;
  const prepItems = isQuote ? quotePrep : prep;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex, nofollow" key="robots" />
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/thank-you" />
      </Head>

      {/* Lead conversion tracking. The base pixel + PageView load in _app; this fires Lead once. */}
      <Script
        id="facebook-pixel-lead"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var hadPixel = !!window.fbq;
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            if(!hadPixel){fbq('init', '892278365833500');}
            fbq('track', 'Lead');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=892278365833500&ev=Lead&noscript=1"
          alt=""
        />
      </noscript>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11112846382" strategy="afterInteractive" />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11112846382');
          `,
        }}
      />

      <section aria-labelledby="hero-title" className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <CheckCircle2 aria-hidden className="mx-auto h-16 w-16 text-green-400" />
          <h1
            id="hero-title"
            className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl"
          >
            Got It! <Highlight tone="dark">We&apos;ll Be in Touch Shortly.</Highlight>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-200 md:text-xl">
            Your request is in. The hard part&apos;s done: we&apos;ll handle the drop-off, the pickup, and the dump.
          </p>

          {size && (
            <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-6 text-left text-ink shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Your request</p>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <p className="font-display text-3xl font-bold">{size.name}</p>
                <p className="font-display text-3xl font-bold text-brand">${size.price}</p>
              </div>
              <p className="mt-1 text-zinc-600">
                Flat rate · {size.weight} · delivery, pickup &amp; disposal included
              </p>
            </div>
          )}

          <p className="mt-10 text-zinc-300">Need it sooner or want to change something?</p>
          <a
            href={telHref}
            className="mt-3 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand px-7 text-base font-bold text-white transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <Phone aria-hidden className="h-5 w-5" /> Call {siteConfig.phone}
          </a>
        </div>
      </section>

      <section aria-labelledby="next-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="next-title"
            eyebrow="What happens next"
            title={
              <>
                Three Steps to a <Highlight>Clean Property</Highlight>
              </>
            }
          />
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-zinc-200 p-8">
                <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-zinc-100">
                  {i + 1}
                </span>
                <IconChip icon={s.icon} />
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="prep-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="prep-title"
            eyebrow="Before we arrive"
            title={isQuote ? "How to Get Ready" : "How to Get Ready for Delivery"}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {prepItems.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <IconChip icon={p.icon} />
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="reviews-title" className="bg-ink py-20 text-white lg:py-28">
        <div className={container}>
          <SectionHeading
            id="reviews-title"
            tone="dark"
            eyebrow="You're in good hands"
            title={
              <>
                <Highlight tone="dark">{siteConfig.rating.countLabel}</Highlight> Five-Star Google Reviews
              </>
            }
          />
          <div className="mt-6 flex justify-center gap-1" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
