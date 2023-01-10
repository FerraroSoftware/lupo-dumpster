import Link from "next/link";
import clsx from "clsx";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

// className =
//   "inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-200 transition-all duration-200 border border-red-600 rounded-md hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900";

const variantStyles = {
  primary: "rounded-full bg-red-900 py-1 px-3 text-white hover:bg-red-700",
  secondary: "rounded-full bg-red-100 py-1 px-3 text-red-900 hover:bg-red-200",
  filled: "rounded-full bg-red-900 py-1 px-3 text-white hover:bg-red-700",
  outline:
    "rounded-md px-6 py-2.5 text-gray-300 ring-1 ring-inset ring-red-600 hover:bg-red-700 hover:text-white text-base",
  text: "text-emerald-500 hover:text-emerald-600",
};

export function Button({
  variant = "primary",
  className,
  content,
  arrow,
  ...props
}) {
  let Component = props.href ? Link : "button";

  className = clsx(
    "inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition",
    variantStyles[variant],
    className
  );

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        "mt-0.5 h-5 w-5",
        variant === "text" && "relative top-px",
        arrow === "left" && "-ml-1 rotate-180",
        arrow === "right" && "-mr-1"
      )}
    />
  );

  return (
    <Component className={className} {...props}>
      {arrow === "left" && arrowIcon}
      {content}
      {arrow === "right" && arrowIcon}
    </Component>
  );
}
