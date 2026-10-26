import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft, ArrowRight, Check, Clock, Phone } from "lucide-react";
import Seo from "./Seo";
import Breadcrumbs from "./Breadcrumbs";
import { CtaBand, PrimaryButton } from "./site/home-sections";
import { categoryFor, formatPostDate } from "@/lib/blog";
import { navigation, rental, siteConfig, sizes, telHref } from "@/lib/site-config";
import alexPhoto from "@/public/alex-lupo.webp";
import blogIndex from "@/lib/blog-index.json";

const BASE_URL = "https://www.lupodumpsterrentals.com";
const DEFAULT_IMAGE = "/dumpster-rental-pros.webp";

// Derive a stable schema id from the post's URL slug so each post emits a
// uniquely-identifiable BlogPosting.
function schemaIdFromPath(path) {
  const slug = (path || "").replace(/[?#].*$/, "").replace(/\/$/, "").split("/").pop() || "post";
  return `blog-posting-${slug}`;
}

const META_TITLE_MAX = 59;

// Longest branded title that stays under the meta-title limit.
export function blogMetaTitle(title) {
  for (const suffix of [" | Lupo Dumpster Rentals", " | Lupo"]) {
    if (title.length + suffix.length <= META_TITLE_MAX) return title + suffix;
  }
  return title;
}

const proseClass = [
  "prose prose-lg prose-zinc max-w-none",
  "prose-headings:scroll-mt-32 prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink",
  "prose-h2:mt-14 prose-h2:text-4xl prose-h3:mt-10 prose-h3:text-2xl prose-h4:text-xl",
  "prose-p:leading-relaxed prose-p:text-zinc-700 prose-li:text-zinc-700 prose-li:marker:text-brand",
  "prose-a:font-semibold prose-a:text-brand-hover prose-a:underline-offset-4 prose-a:decoration-brand/30 hover:prose-a:decoration-brand",
  "prose-strong:text-ink prose-img:rounded-2xl",
  "prose-blockquote:border-l-brand prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-zinc-700",
].join(" ");

function SidebarCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="font-display text-2xl font-bold text-ink">Need a dumpster?</p>
      <p className="mt-1 text-sm text-zinc-600">Flat rates. Delivery, pickup &amp; disposal included.</p>
      <ul className="mt-5 divide-y divide-zinc-100 rounded-xl bg-zinc-50 px-4">
        {sizes.map((s) => (
          <li key={s.id} className="flex items-center justify-between py-3 text-sm">
            <Link href={s.href} className="font-semibold text-ink hover:text-brand-hover">
              {s.name}
            </Link>
            <span className="font-display text-xl font-bold text-ink">${s.price}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-5 space-y-2">
        {rental.included.slice(0, 2).map((item) => (
          <li key={item} className="flex gap-2 text-sm text-zinc-600">
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>
      <PrimaryButton href={navigation.bookHref} className="mt-6 w-full">
        Book Your Dumpster <ArrowRight aria-hidden className="h-5 w-5" />
      </PrimaryButton>
      <a
        href={telHref}
        className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-ink hover:text-brand-hover"
      >
        <Phone aria-hidden className="h-4 w-4" /> or call {siteConfig.phone}
      </a>
    </div>
  );
}

function relatedPosts(slug, category, count = 3) {
  const others = blogIndex.filter((p) => p.slug !== slug);
  return [...others.filter((p) => p.category === category), ...others.filter((p) => p.category !== category)].slice(0, count);
}

function RelatedPosts({ posts }) {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="related-posts-title" className="border-t border-zinc-200 bg-zinc-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="related-posts-title" className="font-display text-4xl font-bold tracking-tight text-ink">
          Keep Reading
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative bg-zinc-200" style={{ aspectRatio: "16 / 10" }}>
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-hover">{post.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink group-hover:text-brand-hover">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span aria-hidden className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <span aria-hidden className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-brand-hover">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Bloglayout({
  children,
  title,
  date,
  dateModified,
  description,
  image = DEFAULT_IMAGE,
  imageAlt,
  keywords = [],
  category: categoryProp,
  faqs = [],
}) {
  const router = useRouter();
  // Canonical path: no query string, hash, or trailing slash.
  const path = (router.asPath || "/").split(/[?#]/)[0].replace(/(.)\/$/, "$1");
  const slug = path.split("/").filter(Boolean).pop() || "";
  const category = categoryProp || categoryFor(slug);
  const fullTitle = blogMetaTitle(title);
  const url = `${BASE_URL}${path}`;
  const absImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  const articleRef = useRef(null);
  const [readMinutes, setReadMinutes] = useState(null);
  useEffect(() => {
    const words = articleRef.current?.innerText.trim().split(/\s+/).length || 0;
    setReadMinutes(Math.max(1, Math.round(words / 230)));
  }, [path]);

  // BlogPosting JSON-LD. Author = Alex Lupo; publisher references the global
  // Organization @id so Google can merge this post with the site's publisher entity.
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
    articleSection: category,
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
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

  // `faqs` must mirror the post's visible "Frequently Asked Questions" section.
  const faqSchema = faqs.length > 0 && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="bg-white">
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <Seo
          title={fullTitle}
          description={description}
          path={path}
          image={image}
          imageAlt={imageAlt || title}
          type="article"
          keywords={keywords}
        />
        <meta property="article:published_time" content={date} key="article:published_time" />
        <meta property="article:modified_time" content={dateModified || date} key="article:modified_time" />
        <meta property="article:author" content={`${BASE_URL}/about-us`} key="article:author" />
        <meta property="article:section" content={category} key="article:section" />
        {keywords.map((k) => (
          <meta property="article:tag" content={k} key={`article:tag:${k}`} />
        ))}
        <script
          type="application/ld+json"
          key={schemaIdFromPath(path)}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            key="blog-faq-schema"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      <Breadcrumbs currentLabel={title} />

      <header className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 lg:pt-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 hover:text-brand-hover"
        >
          <ArrowLeft aria-hidden className="h-4 w-4" /> All articles
        </Link>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-hover">{category}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">{description}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-zinc-500">
          <span className="flex items-center gap-3">
            <Image
              src={alexPhoto}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
            />
            <span className="text-left">
              <span className="block font-semibold text-ink">Alex Lupo</span>
              Owner, {siteConfig.name}
            </span>
          </span>
          <span aria-hidden className="hidden h-8 w-px bg-zinc-200 sm:block" />
          <time dateTime={date}>{formatPostDate(date)}</time>
          {readMinutes && (
            <>
              <span aria-hidden>·</span>
              <span className="flex items-center gap-1.5">
                <Clock aria-hidden className="h-4 w-4" /> {readMinutes} min read
              </span>
            </>
          )}
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-100 shadow-xl" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:px-8 lg:py-20">
        <article ref={articleRef} className={`mx-auto w-full max-w-[44rem] ${proseClass}`}>
          {children}
        </article>

        <aside aria-label="Book a dumpster" className="hidden lg:block">
          <div className="sticky top-32">
            <SidebarCard />
          </div>
        </aside>

        <div className="mx-auto w-full max-w-[44rem] lg:col-start-1">
          <div className="flex flex-col gap-5 rounded-2xl bg-zinc-100 p-6 sm:flex-row sm:items-center">
            <Image
              src={alexPhoto}
              alt="Alex Lupo, owner of Lupo Dumpster Rentals"
              width={72}
              height={72}
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-xl font-bold text-ink">Written by Alex Lupo</p>
              <p className="mt-1 text-zinc-600">
                Alex co-founded {siteConfig.name} in Holiday, FL in {siteConfig.foundedYear}. Have a question
                about your project?{" "}
                <a href={telHref} className="font-semibold text-brand-hover underline underline-offset-4">
                  Call or text {siteConfig.phone}
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-8 lg:hidden">
            <SidebarCard />
          </div>
        </div>
      </div>

      <RelatedPosts posts={relatedPosts(slug, category)} />
      <CtaBand />
    </div>
  );
}
