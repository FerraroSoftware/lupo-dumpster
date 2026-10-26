import { useEffect } from "react";
import { useRouter } from "next/router";

export function track(event, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { page_path: window.location.pathname, ...params });
}

const SCROLL_MARKS = [50, 75];

// Sitewide call/text click events (any tel:/sms: link) and scroll depth.
// GA4 enhanced measurement already reports 90% scroll.
export function useSiteTracking() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="tel:"], a[href^="sms:"]');
      if (!link) return;
      const isCall = link.getAttribute("href").startsWith("tel:");
      track(isCall ? "call_click" : "text_click", {
        link_text: link.textContent.trim().slice(0, 60),
      });
      if (isCall && typeof window.gtag_report_conversion === "function") window.gtag_report_conversion();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const fired = new Set();
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const percent = (window.scrollY / max) * 100;
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !fired.has(mark)) {
          fired.add(mark);
          track("scroll_depth", { percent_scrolled: mark });
        }
      }
      if (fired.size === SCROLL_MARKS.length) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [router.asPath]);
}
