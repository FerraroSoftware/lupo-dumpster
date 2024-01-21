import { FadeIn } from "../../components/FadeIn";
import { loadMDXMetadata } from "../../lib/loadMDXMetadata";
import Image from "next/image";

export const metadata = {
  title: "Latest Blogs on Garage Doors and More | Paratec Door Solutions",
  description:
    "Dive into our blogs to learn about garage doors, loading docks, industrial fans, and the latest industry insights from Paratec Door Solutions.",
};

export default function BlogPage({ paths }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-3xl font-semibold uppercase tracking-tight text-neutral-900 sm:text-4xl">
              Latest from the blog
            </h1>
            <p className="mt-2 text-lg leading-8 text-neutral-600">
              Learn more about dumpster rentals, junk removal, and waste
              management from our blog.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {paths.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={480}
                      height={480}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-neutral-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.datetime}
                        className="text-neutral-500"
                      >
                        {post.date}
                      </time>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg uppercase font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-neutral-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-neutral-900/5 pt-6"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const paths = await loadMDXMetadata("blog");

  return {
    props: {
      paths,
    },
  };
}
