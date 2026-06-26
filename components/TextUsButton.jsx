"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { MessageSquare, X, Phone, Send } from "lucide-react";

/**
 * TextUsButton — floating "Text Us" CTA in the bottom-right corner.
 *
 * Opens a compact popup that collects Name, Phone, and Message and submits to
 * the same lead pipeline as the main quote form (`/api/sendinfo` → SendGrid +
 * Zapier, gated by reCAPTCHA v3). On success the visitor is sent to
 * `/thank-you` (which fires the Google Ads conversion tag).
 *
 * Desktop behavior: the popup auto-opens once, ~10s after load. The
 * "only once" state is persisted in localStorage so it never nags a
 * returning visitor. Mobile never auto-opens — the button is tap-to-open only.
 */

const AUTO_OPEN_DELAY_MS = 10000;
const AUTO_OPEN_FLAG = "lupoTextUsAutoOpened";

export default function TextUsButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const nameInputRef = useRef(null);

  // Wait for reCAPTCHA v3 (loaded globally in _document.js) to be ready.
  useEffect(() => {
    let cancelled = false;
    const checkRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          if (!cancelled) setRecaptchaReady(true);
        });
      } else {
        setTimeout(checkRecaptcha, 100);
      }
    };
    checkRecaptcha();
    return () => {
      cancelled = true;
    };
  }, []);

  // Desktop-only: auto-open once, ~10s after load.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    let alreadyOpened = false;
    try {
      alreadyOpened = window.localStorage.getItem(AUTO_OPEN_FLAG) === "1";
    } catch (e) {
      alreadyOpened = false;
    }
    if (alreadyOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        window.localStorage.setItem(AUTO_OPEN_FLAG, "1");
      } catch (e) {
        /* ignore storage failures (private mode, etc.) */
      }
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  // Focus the first field when the popup opens.
  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit_form" },
      );

      const response = await fetch("/api/sendinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name.trim(),
          lastName: "",
          email: "",
          phone: form.phone.trim(),
          serviceNeeded: "Text Us (website widget)",
          message: form.message.trim(),
          recaptchaToken: token,
        }),
      });

      if (response.ok) {
        // Reset + minimize before navigating — this widget is mounted globally
        // in _app.js, so it survives the client-side route change to /thank-you
        // and would otherwise stay open with the button stuck on "Sending...".
        setForm({ name: "", phone: "", message: "" });
        setErrors({});
        setIsSubmitting(false);
        setIsOpen(false);
        router.push("/thank-you");
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(
          errorData.error ||
            "Something went wrong. Please try again or call us at (727) 317-6717.",
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Text Us submission failed:", error);
      alert(
        "An error occurred. Please try again or call us at (727) 317-6717.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Text us"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
        >
          <div className="flex items-center justify-between bg-black px-5 py-4 text-white">
            <div>
              <h3 className="text-lg font-bold leading-tight">Text Us</h3>
              <p className="text-xs text-zinc-300">
                We typically reply within minutes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close text us form"
              className="rounded-full p-1 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-5">
            <div>
              <label
                htmlFor="textus-name"
                className="mb-1 block text-sm font-medium text-zinc-800"
              >
                Name
              </label>
              <input
                id="textus-name"
                name="name"
                type="text"
                ref={nameInputRef}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500 ${
                  errors.name ? "border-red-500" : "border-zinc-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="textus-phone"
                className="mb-1 block text-sm font-medium text-zinc-800"
              >
                Phone
              </label>
              <input
                id="textus-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(727) 555-0123"
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500 ${
                  errors.phone ? "border-red-500" : "border-zinc-300"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="textus-message"
                className="mb-1 block text-sm font-medium text-zinc-800"
              >
                Message
              </label>
              <textarea
                id="textus-message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                className={`w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500 ${
                  errors.message ? "border-red-500" : "border-zinc-300"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !recaptchaReady}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : !recaptchaReady ? (
                "Loading..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Text Request
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1 text-center text-xs text-zinc-500">
              <Phone className="h-3 w-3" />
              Prefer to call? (727) 317-6717
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close text us form" : "Open text us form"}
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-black/30 ring-2 ring-white/20 transition-colors hover:bg-red-700 active:bg-red-800"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
        )}
        <span>{isOpen ? "Close" : "Text Us"}</span>
      </button>
    </div>
  );
}
