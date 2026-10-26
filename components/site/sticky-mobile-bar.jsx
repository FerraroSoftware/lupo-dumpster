import Link from "next/link";
import { CalendarCheck, MessageSquare, Phone } from "lucide-react";
import { navigation, telHref } from "@/lib/site-config";

export const OPEN_TEXT_US_EVENT = "lupo:open-text-us";

const item =
  "flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white";

export function StickyMobileBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-ink pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-4px_16px_rgba(0,0,0,0.25)] lg:hidden"
    >
      <a href={telHref} className={`${item} hover:bg-white/10`}>
        <Phone aria-hidden className="h-5 w-5" />
        Call
      </a>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event(OPEN_TEXT_US_EVENT))}
        className={`${item} border-x border-white/10 hover:bg-white/10`}
      >
        <MessageSquare aria-hidden className="h-5 w-5" />
        Text
      </button>
      <Link href={navigation.bookHref} className={`${item} bg-brand hover:bg-brand-hover`}>
        <CalendarCheck aria-hidden className="h-5 w-5" />
        Book
      </Link>
    </nav>
  );
}
