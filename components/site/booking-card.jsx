"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft, ArrowRight, Check, Loader2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { getSize, lowestPrice, rental, siteConfig, sizes, telHref } from "@/lib/site-config";

const NOT_SURE = "not-sure";

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-brand-hover">
      {message}
    </p>
  );
}

const inputClass =
  "block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-3 text-base text-ink placeholder:text-zinc-500 focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

export function BookingCard({ selectedSize, onSizeChange, source = "Home page booking card" }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => setMinDate(todayISO()), []);

  const size = getSize(selectedSize);

  const goToStep2 = (e) => {
    e.preventDefault();
    const next = {};
    if (!selectedSize) next.size = "Pick a size, or choose “Not sure.”";
    if (!/^\d{5}$/.test(zip)) next.zip = "Enter your 5-digit ZIP code.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setStep(2);
      track("booking_started", { size: selectedSize, ...(size && { value: size.price, currency: "USD" }), source });
    }
  };

  const waitForRecaptcha = () =>
    new Promise((resolve, reject) => {
      let tries = 0;
      const check = () => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(resolve);
        } else if (tries++ > 50) {
          reject(new Error("recaptcha-unavailable"));
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!firstName.trim()) next.firstName = "Enter your first name.";
    if (!phone.trim()) next.phone = "Enter your phone number.";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Check your email address.";
    setErrors(next);
    if (Object.keys(next).length) return;
    if (company) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await waitForRecaptcha();
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit_form" },
      );

      const message = [
        `ZIP: ${zip}`,
        `Preferred delivery: ${date || "ASAP"}`,
        `Quoted flat price: ${size ? `$${size.price}` : "Needs help choosing a size"}`,
        `Source: ${source}`,
      ].join("\n");

      const res = await fetch("/api/sendinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: "",
          email: email.trim(),
          phone,
          serviceNeeded: size ? `${size.name} rental` : "Dumpster rental (help choosing a size)",
          message,
          company,
          recaptchaToken: token,
        }),
      });

      if (!res.ok) throw new Error("submit-failed");
      track("generate_lead", { form: "booking", size: selectedSize, ...(size && { value: size.price, currency: "USD" }), source });
      router.push({ pathname: "/thank-you", query: size ? { size: size.id } : {} });
    } catch {
      setSubmitError(
        `Something went wrong sending your request. Please call or text us at ${siteConfig.phone}.`,
      );
      setSubmitting(false);
    }
  };

  return (
    <div
      id="book"
      className="scroll-mt-32 rounded-2xl bg-white p-6 text-ink shadow-2xl ring-1 ring-black/5 sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="font-display text-3xl font-bold leading-none">Book Your Dumpster</h2>
        <p className="shrink-0 text-sm font-medium text-zinc-600" aria-live="polite">
          Step {step} of 2
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={goToStep2} noValidate className="space-y-5">
          <fieldset aria-describedby={errors.size ? "size-error" : undefined}>
            <legend className="mb-2 text-sm font-semibold">Dumpster size</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[...sizes, { id: NOT_SURE, shortName: "Not sure" }].map((s) => (
                <label key={s.id} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value={s.id}
                    checked={selectedSize === s.id}
                    onChange={() => {
                      onSizeChange(s.id);
                      if (s.price) track("price_shown", { size: s.id, value: s.price, currency: "USD", source });
                    }}
                    className="peer sr-only"
                  />
                  <span className="flex min-h-[64px] flex-col items-center justify-center rounded-lg border-2 border-zinc-200 px-2 py-2 text-center transition-colors peer-checked:border-brand peer-checked:bg-brand-soft peer-focus-visible:ring-2 peer-focus-visible:ring-brand/50 hover:border-zinc-400">
                    <span className="font-display text-xl font-bold leading-none">{s.shortName}</span>
                    {s.price && (
                      <span className="mt-1 text-xs font-medium text-zinc-600">${s.price}</span>
                    )}
                  </span>
                </label>
              ))}
            </div>
            <FieldError id="size-error" message={errors.size} />
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="book-zip" className="mb-1.5 block text-sm font-semibold">
                Delivery ZIP code
              </label>
              <input
                id="book-zip"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                aria-invalid={!!errors.zip}
                aria-describedby={errors.zip ? "zip-error" : undefined}
                className={inputClass}
                placeholder="34655"
              />
              <FieldError id="zip-error" message={errors.zip} />
            </div>
            <div>
              <label htmlFor="book-date" className="mb-1.5 block text-sm font-semibold">
                Delivery date <span className="font-normal text-zinc-600">(optional)</span>
              </label>
              <input
                id="book-date"
                type="date"
                min={minDate || undefined}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="rounded-xl bg-zinc-100 p-4" aria-live="polite">
            {size ? (
              <>
                <p className="text-sm font-medium text-zinc-600">Your flat price</p>
                <p className="font-display text-4xl font-extrabold leading-tight">
                  ${size.price}
                  <span className="ml-2 align-middle text-base font-semibold text-zinc-600">
                    {size.name} · {size.weight}
                  </span>
                </p>
              </>
            ) : (
              <p className="text-sm text-zinc-700">
                <span className="font-semibold text-ink">Flat prices from ${lowestPrice}.</span>{" "}
                {selectedSize === NOT_SURE
                  ? "No problem. We'll help you pick the right size when we confirm."
                  : "Pick a size to see your exact price."}
              </p>
            )}
            <ul className="mt-3 grid gap-1.5 text-sm text-zinc-700 sm:grid-cols-2">
              {rental.included.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-2">
                  <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 text-base font-bold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Continue to Reserve <ArrowRight aria-hidden className="h-5 w-5" />
          </button>
        </form>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-4">
          <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="book-company">Company</label>
            <input id="book-company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <div className="flex items-start justify-between gap-3 rounded-xl bg-zinc-100 p-4 text-sm">
            <p>
              <span className="font-semibold">{size ? `${size.name} · $${size.price} flat` : "Help choosing a size"}</span>
              <br />
              <span className="text-zinc-600">
                ZIP {zip} · {date || "As soon as possible"}
              </span>
            </p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1 rounded font-semibold text-brand-hover underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" /> Edit
            </button>
          </div>

          <div>
            <label htmlFor="book-name" className="mb-1.5 block text-sm font-semibold">
              First name
            </label>
            <input
              id="book-name"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "name-error" : undefined}
              className={inputClass}
              required
            />
            <FieldError id="name-error" message={errors.firstName} />
          </div>
          <div>
            <label htmlFor="book-phone" className="mb-1.5 block text-sm font-semibold">
              Mobile phone
            </label>
            <input
              id="book-phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClass}
              placeholder="(727) 555-0123"
              required
            />
            <FieldError id="phone-error" message={errors.phone} />
          </div>
          <div>
            <label htmlFor="book-email" className="mb-1.5 block text-sm font-semibold">
              Email <span className="font-normal text-zinc-600">(optional)</span>
            </label>
            <input
              id="book-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClass}
            />
            <FieldError id="email-error" message={errors.email} />
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
                Reserve My Dumpster <ArrowRight aria-hidden className="h-5 w-5" />
              </>
            )}
          </button>
          <p className="text-[11px] leading-snug text-zinc-500">
            Protected by reCAPTCHA. Google&apos;s{" "}
            <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
          </p>
        </form>
      )}

      <p className="mt-5 border-t border-zinc-200 pt-4 text-center text-sm text-zinc-600">
        Rather talk?{" "}
        <a href={telHref} className="inline-flex items-center gap-1 font-semibold text-ink hover:text-brand-hover">
          <Phone aria-hidden className="h-4 w-4" /> {siteConfig.phone}
        </a>
      </p>
    </div>
  );
}
