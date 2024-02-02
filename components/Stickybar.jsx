import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Stickybar({ isMenuOpen }) {
  const hiddenClass = isMenuOpen ? "hidden" : "";

  return (
    <div
      className={`sticky top-0 z-50 flex items-center gap-x-6 bg-zinc-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${hiddenClass}`}
    >
      <p className="text-sm leading-6 text-white">
        <a href="tel:7273176717">
          <strong className="font-semibold">Call Now (727-317-6717)</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Serving all of Pasco, Pinellas, and Hernando Counties
        </a>
      </p>
      <div className="flex flex-1 justify-end"></div>
    </div>
  );
}
