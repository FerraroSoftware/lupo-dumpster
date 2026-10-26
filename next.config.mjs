import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Merged pages (D15, docs/pre-launch.md §3): 301 into their cluster pillar.
  async redirects() {
    return [
      { source: "/services/junk-pick-up", destination: "/services/junk-removal", permanent: true },
      { source: "/services/trash-pick-up", destination: "/services/trash-removal", permanent: true },
      { source: "/services/garbage-removal-service", destination: "/services/trash-removal", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
