import { useCallback, useState } from "react";

/** Shared state for pages that render a `BookingCard` (#book) plus size pickers that feed it. */
export function useBooking() {
  const [selectedSize, setSelectedSize] = useState("");

  const scrollToBooking = useCallback(() => {
    const el = document.getElementById("book");
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    // Wait a frame so a just-selected size is rendered as checked before focusing it.
    requestAnimationFrame(() => {
      const target = el.querySelector("input:checked") || el.querySelector("input, button");
      target?.focus({ preventScroll: true });
    });
  }, []);

  const bookSize = useCallback(
    (id) => {
      setSelectedSize(id);
      scrollToBooking();
    },
    [scrollToBooking],
  );

  return { selectedSize, setSelectedSize, scrollToBooking, bookSize };
}
