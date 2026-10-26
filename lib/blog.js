// TODO: move to a `category` field in each post's metadata once posts are rewritten.
export function categoryFor(slug = "") {
  return /dumpster|trailer/.test(slug) ? "Dumpster Rentals" : "Junk Removal & Cleanouts";
}

export function formatPostDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
