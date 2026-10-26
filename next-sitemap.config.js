/**
 * next-sitemap configuration — see §7.1 of docs/legacy/seo-updates.md.
 *
 * Runs at postbuild time (see `scripts.postbuild` in package.json) and
 * writes a single flat `public/sitemap.xml` containing every indexable
 * URL with an accurate per-URL `lastmod`. `robots.txt` is NOT generated
 * by next-sitemap because we maintain a hand-tuned `public/robots.txt`
 * (see §7.2).
 *
 * We keep `generateIndexSitemap: false` because the site has well under
 * the 50,000-URL / 50 MB per-sitemap limit, so a sitemap index layer is
 * unnecessary. If we ever grow past ~5,000 URLs or want to split into
 * per-section sitemaps (services, blog, etc.), flip this back to `true`
 * and next-sitemap will re-emit the index plus `sitemap-0.xml`,
 * `sitemap-1.xml`, …
 *
 * Priority ladder:
 *   1.0  home
 *   0.9  New Port Richey hub (primary target city)
 *   0.9  blog index
 *   0.8  other `/services/*` pages
 *   0.7  everything else (about, contact, blog posts, etc.)
 *
 * Excluded from the sitemap (but still reachable, just not indexed):
 *   /thank-you       — conversion page, also marked `noindex`
 *   /facebook-offer  — paid-ad landing page, also marked `noindex`
 *   /api/*
 */
const blogDates = Object.fromEntries(
  require("./lib/blog-index.json").map((p) => [`/blog/${p.slug}`, p.updated || p.date]),
);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.lupodumpsterrentals.com",
  sourceDir: process.env.NEXT_DIST_DIR || ".next",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/thank-you", "/facebook-offer", "/api/*"],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (path.startsWith("/services/dumpster-rental-new-port-richey")) {
      priority = 0.9;
    } else if (path === "/blog") {
      priority = 0.9;
    } else if (path.startsWith("/services/")) {
      priority = 0.8;
    } else if (path.startsWith("/blog/")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: blogDates[path] ? new Date(`${blogDates[path]}T12:00:00Z`).toISOString() : new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
