import { Inter } from "next/font/google";
import Script from "next/script";
import { formatDate } from "../lib/formatDate";
import { FadeIn } from "../components/FadeIn";
import Head from "next/head";
import { useRouter } from "next/router";
import Seo from "./Seo";
import Breadcrumbs from "./Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.lupodumpsterrentals.com";
const DEFAULT_IMAGE = "/dumpster-rental-pros.jpg";

// Derive a stable schema id from the post's URL slug so each post emits a
// uniquely-identifiable BlogPosting.
function schemaIdFromPath(path) {
  const slug = (path || "").replace(/[?#].*$/, "").replace(/\/$/, "").split("/").pop() || "post";
  return `blog-posting-${slug}`;
}

export default function Bloglayout({
  children,
  title,
  date,
  dateModified,
  description,
  image = DEFAULT_IMAGE,
  imageAlt,
}) {
  const router = useRouter();
  const path = router.asPath || "/";
  const fullTitle = `${title} | Lupo Dumpster Rentals`;
  const url = `${BASE_URL}${path.split(/[?#]/)[0]}`;
  const absImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  // BlogPosting JSON-LD — see §9.2 of seo-updates.md. Author = Alex Lupo,
  // publisher references the global Organization @id so Google can merge
  // this post with the site's publisher entity.
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: title,
    description,
    image: [absImage],
    datePublished: date,
    dateModified: dateModified || date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: {
      "@type": "Person",
      name: "Alex Lupo",
      url: `${BASE_URL}/about-us`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
      "@type": "Organization",
      name: "Lupo Dumpster Rentals",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.svg`,
      },
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Seo
          title={fullTitle}
          description={description}
          path={path}
          image={image}
          imageAlt={imageAlt || title}
          type="article"
        />
      </Head>
      <Script
        id={schemaIdFromPath(path)}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <FadeIn className="">
        <div className="">
          <div className="mt-24">
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="uppercase mt-6 mb-4 font-display font-semibold tracking-tight [text-wrap:balance] text-4xl text-white">
                {title}
              </h1>
              <time
                dateTime={date}
                className="order-first text-sm text-neutral-50"
              >
                {formatDate(date)}
              </time>
            </header>
          </div>

          {/* Breadcrumbs — below hero per §8.6 */}
          <Breadcrumbs />

          <div className="flex items-center justify-center py-2">
            <div className="w-full max-w-4xl px-4 pb-16">{children}</div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
