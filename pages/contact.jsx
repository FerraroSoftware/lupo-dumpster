import Head from "next/head";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookingCard } from "@/components/site/booking-card";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand, IconChip, PlanSteps } from "@/components/site/home-sections";
import { FaqSection } from "@/components/site/faq-section";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { OPEN_TEXT_US_EVENT } from "@/components/site/sticky-mobile-bar";
import { serviceAreas, siteConfig, telHref } from "@/lib/site-config";
import { useBooking } from "@/lib/use-booking";

const title = "Book a Dumpster Rental | Contact Lupo Dumpster Rentals";
const description = `Book a 10, 15 or 20-yard dumpster online, or call or text ${siteConfig.phone}. ${siteConfig.hoursShort}. Serving Pasco, Pinellas, Hillsborough & Hernando.`;

const { address } = siteConfig;
const addressLine = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${siteConfig.name}, ${addressLine}`)}&output=embed`;

const contactFaqs = [
  {
    q: "What information do you need to book?",
    a: "Your name, phone number, delivery address, the size you want (or “not sure”), and roughly what you're throwing away. That's it. We'll confirm the rest by phone or text.",
  },
  {
    q: "How soon will I hear back?",
    a: `We confirm every booking by call or text during business hours (${siteConfig.hours}). If it's urgent, call ${siteConfig.phone} directly.`,
  },
  {
    q: "Can I book junk removal or a cleanout here?",
    a: `Yes. Call or text ${siteConfig.phone} with a few photos of what needs to go and we'll give you a firm price before we start.`,
  },
  {
    q: "Do you work on weekends?",
    a: "We're open 7 days a week, 7 AM to 8 PM. Weekend delivery depends on the schedule, so book early or call to check.",
  },
];

function openTextUs() {
  window.dispatchEvent(new Event(OPEN_TEXT_US_EVENT));
}

const cardClass =
  "group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export default function Contact() {
  const { selectedSize, setSelectedSize, scrollToBooking } = useBooking();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo title={title} description={description} path="/contact" />
      </Head>

      <PageHero
        eyebrow="Contact & booking"
        title={
          <>
            Book Your Dumpster <Highlight tone="dark">in Under a Minute</Highlight>
          </>
        }
        intro={`Pick a size, tell us where it's going, and we'll call or text to confirm your delivery. Rather talk? Call or text ${siteConfig.phone}. We're open 7 days, 7 AM to 8 PM.`}
        onBook={scrollToBooking}
        aside={<BookingCard selectedSize={selectedSize} onSizeChange={setSelectedSize} source="Contact page booking card" />}
      />
      <Breadcrumbs />

      <section aria-labelledby="reach-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          <SectionHeading
            id="reach-title"
            eyebrow="Other ways to reach us"
            title={
              <>
                Talk to a Real Person, <Highlight>Not a Call Center</Highlight>
              </>
            }
            intro="Lupo is local and owner-operated. You talk to us, not a national call center."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a href={telHref} className={cardClass}>
              <IconChip icon={Phone} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Call</h3>
              <p className="mt-2 text-zinc-600">Fastest way to book or ask a question.</p>
              <span className="mt-auto pt-5 text-lg font-bold text-brand-hover">{siteConfig.phone}</span>
            </a>
            <button type="button" onClick={openTextUs} className={cardClass}>
              <IconChip icon={MessageSquare} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Text</h3>
              <p className="mt-2 text-zinc-600">Send a photo of the job and get a quick answer.</p>
              <span className="mt-auto pt-5 text-lg font-bold text-brand-hover">Text us now</span>
            </button>
            <a href={`mailto:${siteConfig.email}`} className={cardClass}>
              <IconChip icon={Mail} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Email</h3>
              <p className="mt-2 text-zinc-600">For invoices, contractor accounts, and paperwork.</p>
              <span className="mt-auto break-all pt-5 font-bold text-brand-hover">{siteConfig.email}</span>
            </a>
            <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6">
              <IconChip icon={Clock} />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Hours</h3>
              <p className="mt-2 text-zinc-600">Calls and texts answered every day.</p>
              <span className="mt-auto pt-5 font-bold text-ink">{siteConfig.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="location-title" className="bg-zinc-100 py-20 lg:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center`}>
          <div>
            <SectionHeading
              id="location-title"
              eyebrow="Where we are"
              title="Locally Owned in Holiday, FL"
              align="left"
            />
            <address className="mt-8 space-y-4 not-italic text-lg text-zinc-700">
              <p className="flex gap-3">
                <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span>
                  <span className="block font-semibold text-ink">{siteConfig.legalName}</span>
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <a href={telHref} className="font-semibold text-ink hover:text-brand-hover">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden className="mt-1 h-5 w-5 shrink-0 text-brand" />
                {siteConfig.hours}
              </p>
            </address>
            <p className="mt-8 text-zinc-600">
              Delivering dumpsters across {serviceAreas.map((a) => a.county).join(", ").replace(/, ([^,]*)$/, " & $1")}.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-zinc-200 shadow-sm ring-1 ring-zinc-200" style={{ aspectRatio: "4 / 3" }}>
            <iframe
              title={`Map showing ${siteConfig.name} in ${address.city}, FL`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      <PlanSteps onBook={scrollToBooking} />

      <FaqSection
        id="contact-faq-title"
        title={
          <>
            Booking <Highlight>Questions</Highlight>
          </>
        }
        items={contactFaqs}
      />

      <CtaBand onBook={scrollToBooking} />
    </>
  );
}
