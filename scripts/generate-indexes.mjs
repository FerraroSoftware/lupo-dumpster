// Builds public/llms.txt and lib/blog-index.json from lib/site-config.js and
// the blog posts so neither drifts from the site. Runs before every build;
// run `npm run indexes` after adding or retitling a post.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { siteConfig, sizes, rental, acceptedItems, serviceAreas, navigation, lowestPrice } = await import(
  path.join(root, "lib/site-config.js")
);

const url = (href) => `${siteConfig.url}${href}`;
const link = (name, href, note) => `- [${name}](${url(href)})${note ? `: ${note}` : ""}`;
const { address: a } = siteConfig;

const otherServices = [
  ["Trash Removal", "/services/trash-removal", "Household and property trash hauled away."],
  ["Pasco County Trash Pickup", "/services/pasco-county-trash-pickup", "One-time trash pickup across Pasco County."],
  ["Haul-Away Junk", "/services/haul-away-junk", "Single-item and multi-item haul-away."],
  ["Bobcat Services", "/services/bobcat-services", "Grading, leveling, and debris cleanup."],
];

const localServices = [
  ["Junk Removal in New Port Richey", "/services/junk-removal-new-port-richey-fl"],
  ["Junk Removal in Port Richey", "/services/junk-removal-port-richey"],
  ["Junk Removal in Palm Harbor", "/services/junk-removal-palm-harbor"],
  ["Appliance Removal in New Port Richey", "/services/appliance-removal-new-port-richey-fl"],
  ["Construction Debris Removal in New Port Richey", "/services/construction-debris-removal-new-port-richey-fl"],
  ["Garage Cleanouts in New Port Richey", "/services/garage-cleaning-service-new-port-richey-fl"],
  ["Hoarding Cleanup in New Port Richey", "/services/hoarding-cleanup-new-port-richey-fl"],
];

const regionPages = [
  ["Dumpster Rental in Pinellas County", "/services/dumpster-rental-pinellas-county"],
  ["Dumpster Rental in Hillsborough County", "/services/dumpster-rental-hillsborough-county-fl"],
  ["Dumpster Rental in Hernando County", "/services/dumpster-rental-hernando-county-fl"],
  ["Dumpster Rental in the Tampa Bay Area", "/services/dumpster-rental-tampa-bay"],
];

const { priceOf } = await import(path.join(root, "lib/site-config.js"));
// Posts read prices and the phone from site-config via template literals; resolve
// the few expressions they use so the index shows real values.
const expand = (text) =>
  text
    .replace(/\$\{priceOf\("(\d+)"\)\}/g, (_, id) => priceOf(id))
    .replace(/\$\{lowestPrice\}/g, String(lowestPrice))
    .replace(/\$\{siteConfig\.phone\}/g, siteConfig.phone);
const field = (src, key) => {
  const m = src.match(new RegExp(`${key}:\\s*\\n?\\s*(?:"((?:[^"\\\\]|\\\\.)*)"|\`([^\`]*)\`)`));
  if (!m) return "";
  return m[1] !== undefined ? m[1].replace(/\\"/g, '"') : expand(m[2]);
};
const blogDir = path.join(root, "pages/blog");
const posts = readdirSync(blogDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    const src = readFileSync(path.join(blogDir, d.name, "index.mdx"), "utf8");
    return {
      slug: d.name,
      title: field(src, "title"),
      description: field(src, "description"),
      date: field(src, "date"),
      category: field(src, "category"),
      image: field(src, "image"),
      imageAlt: field(src, "imageAlt"),
    };
  })
  .filter((p) => p.title)
  .sort((x, y) => y.date.localeCompare(x.date));

const today = new Date().toISOString().slice(0, 10);

const lines = [
  `# ${siteConfig.name}`,
  "",
  `> ${siteConfig.legalName} (doing business as ${siteConfig.name}) is a locally owned dumpster rental and junk removal company based in ${a.city}, ${a.state}. We deliver ${sizes
    .map((s) => s.shortName.replace(" yd", ""))
    .join(", ")
    .replace(/, (?=[^,]*$)/, ", and ")}-yard dumpsters across ${serviceAreas
    .map((r) => r.county.replace(" County", ""))
    .join(", ")
    .replace(/, (?=[^,]*$)/, ", and ")} counties at flat rates starting at $${lowestPrice}.`,
  "",
  "## About",
  "",
  `- **Legal name:** ${siteConfig.legalName}`,
  `- **Brand:** ${siteConfig.name}`,
  `- **Based in:** ${a.street}, ${a.city}, ${a.state} ${a.zip}, USA`,
  `- **Phone:** [${siteConfig.phone}](tel:${siteConfig.phoneE164})`,
  `- **Email:** ${siteConfig.email}`,
  `- **Website:** <${siteConfig.url}>`,
  `- **Hours:** ${siteConfig.hours}`,
  `- **Founded:** ${siteConfig.foundedYear} by ${siteConfig.founders.join(" and ")}`,
  `- **Rating:** ${siteConfig.rating.value} out of 5 from ${siteConfig.rating.countLabel} Google reviews`,
  `- **Registration:** ${siteConfig.registration}`,
  "",
  "## Dumpster sizes and flat-rate prices",
  "",
  ...sizes.map(
    (s) => `- [${s.name}](${url(s.href)}): $${s.price} flat. ${s.dimensions}. ${s.loads}. ${s.weight}. Best for ${s.bestFor.toLowerCase()}.`
  ),
  "",
  `Every rental includes: ${rental.included.join("; ")}.`,
  "",
  `Common accepted materials: ${acceptedItems.join("; ")}. Call to confirm anything hazardous.`,
  "",
  "## Primary pages",
  "",
  link("Home", "/", "Book a dumpster online and see sizes, prices, and reviews."),
  link("Pricing", "/dumpster-rental-pricing", "Flat-rate prices for every size and what's included."),
  link("All services", "/services", "Every dumpster rental and junk removal service."),
  link("Service areas", navigation.allAreasHref, "Every city and county we deliver to."),
  link("About", "/about-us", "The family behind Lupo and how we work."),
  link("Contact", "/contact", "Call, text, or send a message."),
  link("Blog", "/blog", "Guides to sizing, pricing, and cleanouts."),
  "",
  ...navigation.services.flatMap((group) => [
    `## ${group.title}`,
    "",
    ...group.links.map((l) => link(l.name, l.href, l.description)),
    "",
  ]),
  "## Other services",
  "",
  ...otherServices.map(([n, h, d]) => link(n, h, d)),
  "",
  "## Local service pages",
  "",
  ...localServices.map(([n, h]) => link(`${n}, FL`, h)),
  "",
  ...serviceAreas.flatMap((r) => [
    `## Service area: ${r.county}, FL`,
    "",
    ...r.cities.map((c) => link(`Dumpster Rental in ${c.name}, FL`, c.href)),
    "",
  ]),
  "## Regional pages",
  "",
  ...regionPages.map(([n, h]) => link(n, h)),
  "",
  "## Guides",
  "",
  ...posts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)),
  "",
  "## Optional",
  "",
  link("XML sitemap", "/sitemap.xml"),
  link("Privacy Policy", "/privacy-policy"),
  link("Rental Terms", "/rental-terms"),
  "",
  "---",
  "",
  `Generated from site config on ${today}.`,
  "",
];

writeFileSync(path.join(root, "public/llms.txt"), lines.join("\n"));
writeFileSync(path.join(root, "lib/blog-index.json"), `${JSON.stringify(posts, null, 2)}\n`);
console.log(`llms.txt: ${lines.length} lines; blog-index.json: ${posts.length} posts`);
