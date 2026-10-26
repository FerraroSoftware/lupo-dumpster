"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { track } from "@/lib/analytics";
import { ArrowRight, Loader2, MessageSquare, Phone } from "lucide-react";
import { siteConfig, telHref } from "@/lib/site-config";
import { OPEN_TEXT_US_EVENT } from "./sticky-mobile-bar";

const inputClass =
  "block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-3 text-base text-ink placeholder:text-zinc-500 focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-brand-hover">
      {message}
    </p>
  );
}

function waitForRecaptcha() {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const check = () => {
      if (window.grecaptcha && window.grecaptcha.ready) window.grecaptcha.ready(resolve);
      else if (tries++ > 50) reject(new Error("recaptcha-unavailable"));
      else setTimeout(check, 100);
    };
    check();
  });
}

/**
 * Quote request for crew-loaded services (junk removal, cleanouts), where the
 * price depends on what we haul. Posts to the same lead route as BookingCard.
 */
export function QuoteCard({
  service = "Junk removal",
  title = "Get Your Junk Removal Price",
  placeholder = "Example: old couch, two mattresses, and about 10 boxes in the garage",
  intro = "Tell us what needs to go. We'll text you a firm price before anything is scheduled.",
  detailsLabel = "What needs to go?",
  requireDetails = true,
  submitLabel = "Get My Price",
  thankYouQuery = { service: "quote" },
  source,
}) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [details, setDetails] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (company) return;
    const next = {};
    if (!firstName.trim()) next.firstName = "Enter your first name.";
    if (!phone.trim()) next.phone = "Enter your phone number.";
    if (!/^\d{5}$/.test(zip)) next.zip = "Enter your 5-digit ZIP code.";
    if (requireDetails && !details.trim()) next.details = "Tell us roughly what needs to go.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await waitForRecaptcha();
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: "submit_form",
      });
      const res = await fetch("/api/sendinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: "",
          email: "",
          phone,
          serviceNeeded: service,
          message: [`ZIP: ${zip}`, `${detailsLabel} ${details.trim() || "(not provided)"}`, `Source: ${source || `${service} quote card`}`].join("\n"),
          company,
          recaptchaToken: token,
        }),
      });
      if (!res.ok) throw new Error("submit-failed");
      track("generate_lead", { form: "quote", service, source: source || `${service} quote card` });
      router.push({ pathname: "/thank-you", query: thankYouQuery });
    } catch {
      setSubmitError(`Something went wrong sending your request. Please call or text us at ${siteConfig.phone}.`);
      setSubmitting(false);
    }
  };

  return (
    <div id="quote" className="scroll-mt-32 rounded-2xl bg-white p-6 text-ink shadow-2xl ring-1 ring-black/5 sm:p-8">
      <h2 className="font-display text-3xl font-bold leading-none">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">{intro}</p>
      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="quote-company">Company</label>
          <input id="quote-company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className="mb-1.5 block text-sm font-semibold">
              First name
            </label>
            <input
              id="quote-name"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "quote-name-error" : undefined}
              className={inputClass}
            />
            <FieldError id="quote-name-error" message={errors.firstName} />
          </div>
          <div>
            <label htmlFor="quote-zip" className="mb-1.5 block text-sm font-semibold">
              ZIP code
            </label>
            <input
              id="quote-zip"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              aria-invalid={!!errors.zip}
              aria-describedby={errors.zip ? "quote-zip-error" : undefined}
              className={inputClass}
              placeholder="34655"
            />
            <FieldError id="quote-zip-error" message={errors.zip} />
          </div>
        </div>
        <div>
          <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-semibold">
            Mobile phone
          </label>
          <input
            id="quote-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
            className={inputClass}
            placeholder="(727) 555-0123"
          />
          <FieldError id="quote-phone-error" message={errors.phone} />
        </div>
        <div>
          <label htmlFor="quote-details" className="mb-1.5 block text-sm font-semibold">
            {detailsLabel}
            {!requireDetails && <span className="font-normal text-zinc-600"> (optional)</span>}
          </label>
          <textarea
            id="quote-details"
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            aria-invalid={!!errors.details}
            aria-describedby={errors.details ? "quote-details-error" : undefined}
            className={inputClass}
            placeholder={placeholder}
          />
          <FieldError id="quote-details-error" message={errors.details} />
        </div>

        {submitError && (
          <p role="alert" className="rounded-lg bg-brand-soft p-3 text-sm font-medium text-brand-hover">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 text-base font-bold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-80"
        >
          {submitting ? (
            <>
              <Loader2 aria-hidden className="h-5 w-5 animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              {submitLabel} <ArrowRight aria-hidden className="h-5 w-5" />
            </>
          )}
        </button>
        <p className="text-[11px] leading-snug text-zinc-500">
          Protected by reCAPTCHA. Google&apos;s{" "}
          <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
        </p>
      </form>
      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-200 pt-4 text-sm">
        <a href={telHref} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-300 py-2.5 font-semibold hover:border-ink">
          <Phone aria-hidden className="h-4 w-4" /> Call
        </a>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_TEXT_US_EVENT))}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-300 py-2.5 font-semibold hover:border-ink"
        >
          <MessageSquare aria-hidden className="h-4 w-4" /> Text photos
        </button>
      </div>
    </div>
  );
}
