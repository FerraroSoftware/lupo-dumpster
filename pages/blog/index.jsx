import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageHero } from "@/components/site/page-hero";
import { container, CtaBand } from "@/components/site/home-sections";
import { Highlight, SectionHeading } from "@/components/site/section-heading";
import { categoryFor as categoryForSlug, formatPostDate as formatDate } from "@/lib/blog";
import { loadMDXMetadata } from "@/lib/loadMDXMetadata";
import heroImage from "@/public/new/dumping-at-dump.webp";

const categoryFor = (post) => post.category || categoryForSlug(post.id);

const title = "Dumpster Rental Tips & Junk Removal Guides | Lupo Blog";
const description =
  "Dumpster sizes, costs, what can go in, and cleanout tips from a local Pasco County dumpster rental company. Straight answers before you rent.";

function PostMeta({ post, tone = "light" }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${tone === "dark" ? "text-zinc-300" : "text-zinc-500"}`}>
      <span className={`font-semibold uppercase tracking-wider ${tone === "dark" ? "text-brand-on-dark" : "text-brand-hover"}`}>
        {categoryFor(post)}
      </span>
      <span aria-hidden>·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative bg-zinc-200" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <PostMeta post={post} />
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink group-hover:text-brand-hover">
          <Link href={post.href} className="focus:outline-none">
            <span aria-hidden className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-zinc-600">{post.description}</p>
        <span aria-hidden className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-hover">
          Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}

export default function BlogPage({ posts }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map(categoryFor))];
  const [featured, ...rest] = posts;
  const visible = category === "All" ? rest : rest.filter((p) => categoryFor(p) === category);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Seo
          title={title}
          description={description}
          path="/blog"
          keywords={["dumpster rental tips", "dumpster size guide", "junk removal tips", "dumpster rental Pasco County FL"]}
        />
      </Head>

      <PageHero
        image={heroImage}
        eyebrow="The Lupo blog"
        title={
          <>
            Dumpster Rental Tips <Highlight tone="dark">From a Local Crew</Highlight>
          </>
        }
        intro="What size do you need? What can go in? How do you avoid extra fees? Straight answers before you rent."
        showTrust={false}
      />
      <Breadcrumbs />

      <section aria-labelledby="featured-title" className="bg-white py-20 lg:py-28">
        <div className={container}>
          {featured && (
            <article className="group relative grid overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-2">
              <div className="relative min-h-[16rem] bg-zinc-800">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Latest article</p>
                <PostMeta post={featured} tone="dark" />
                <h2 id="featured-title" className="mt-3 font-display text-4xl font-extrabold leading-tight lg:text-5xl">
                  <Link href={featured.href} className="focus:outline-none">
                    <span aria-hidden className="absolute inset-0" />
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">{featured.description}</p>
                <span aria-hidden className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-on-dark">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          )}

          <div className="mt-20">
            <SectionHeading
              id="posts-title"
              eyebrow="All articles"
              title={
                <>
                  Guides for Your Next <Highlight>Cleanup</Highlight>
                </>
              }
            />
            <div role="group" aria-label="Filter articles by category" className="mt-8 flex flex-wrap justify-center gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    category === c ? "bg-ink text-white" : "bg-zinc-100 text-ink hover:bg-zinc-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export async function getStaticProps() {
  return { props: { posts: await loadMDXMetadata("blog") } };
}
