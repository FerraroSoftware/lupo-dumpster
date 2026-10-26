import Image from "next/image";
import Link from "next/link";

// Typography comes from the `prose` wrapper in `Bloglayout`; only behavior lives here.
export function useMDXComponents(components) {
  return {
    a: ({ href = "", children, ...rest }) =>
      href.startsWith("/") || href.startsWith("#") ? (
        <Link href={href} {...rest}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      ),

    img: ({ alt, src, ...rest }) => (
      <Image
        src={src}
        width={1200}
        height={800}
        sizes="(max-width: 768px) 100vw, 720px"
        className="h-auto w-full rounded-2xl object-cover"
        alt={alt || "Lupo Dumpster Rentals blog image"}
        {...rest}
      />
    ),

    table: ({ children }) => (
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-zinc-200">
        <table className="w-full min-w-[32rem] text-left text-sm [&_td]:border-t [&_td]:border-zinc-200 [&_td]:px-4 [&_td]:py-3 [&_td]:text-zinc-700 [&_th]:bg-zinc-100 [&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-ink">
          {children}
        </table>
      </div>
    ),

    ...components,
  };
}
