import Head from "next/head";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, telHref } from "@/lib/site-config";

/** Plain long-form layout for policy pages. `sections` = [{ title, body: string[] | JSX }]. */
export function LegalPage({ title, metaTitle, description, path, updated, intro, sections }) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <Seo title={metaTitle} description={description} path={path} />
      </Head>
      <Breadcrumbs currentLabel={title} />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
          <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight text-ink md:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-zinc-500">Last updated {updated}</p>
          {intro && <p className="mt-8 text-lg leading-relaxed text-zinc-700">{intro}</p>}
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <section key={s.title} aria-labelledby={`${s.title}-h`.replace(/\W+/g, "-")}>
                <h2
                  id={`${s.title}-h`.replace(/\W+/g, "-")}
                  className="font-display text-3xl font-bold text-ink"
                >
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-zinc-700">
                  {Array.isArray(s.body) ? s.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>) : s.body}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-14 rounded-2xl bg-zinc-100 p-6 text-zinc-700">
            Questions about this page? Contact {siteConfig.legalName}, {siteConfig.address.street},{" "}
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}, call{" "}
            <a href={telHref} className="font-semibold text-ink underline underline-offset-4">
              {siteConfig.phone}
            </a>
            , or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink underline underline-offset-4">
              {siteConfig.email}
            </a>
            .
          </div>
        </div>
      </article>
    </>
  );
}
