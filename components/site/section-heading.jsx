import { cn } from "@/lib/utils";

export function Eyebrow({ children, tone = "light", className }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "dark" ? "text-brand-on-dark" : "text-brand-hover",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-0.5 w-8 rounded-full",
          tone === "dark" ? "bg-brand-on-dark" : "bg-brand",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "center",
  className,
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className={cn("mb-4", centered && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-zinc-300" : "text-zinc-600",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function Highlight({ children, tone = "light" }) {
  return (
    <span className={tone === "dark" ? "text-brand-on-dark" : "text-brand"}>
      {children}
    </span>
  );
}
