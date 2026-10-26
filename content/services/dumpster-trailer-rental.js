import { lowestPrice, sizes, siteConfig } from "@/lib/site-config";

const priceList = sizes.map((s) => `${s.shortName.replace(" yd", "-yard")} $${s.price}`).join(", ");
const ids = sizes.map((s) => s.id);
const sizeList = `${ids.slice(0, -1).join(", ")}, and ${ids[ids.length - 1]}`;

const dumpsterTrailerRental = {
  path: "/services/dumpster-trailer-rental",
  kind: "rental",
  serviceType: "Dumpster trailer rental",
  title: "Dumpster Trailer Rental in Pasco County, FL | Lupo Dumpster",
  description: `Dumpster trailer rental in Pasco County, FL from $${lowestPrice} flat. Low-profile dump trailers on protective boards, with delivery and disposal included.`,
  keywords: [
    "dumpster trailer rental",
    "dump trailer dumpster",
    "dumpster trailer Pasco County",
    "dump trailer rental near me",
    "roll off dumpster alternative",
  ],
  hero: {
    eyebrow: "Dump-trailer dumpsters · Pasco County, FL",
    title: ["Make Cleanup Easier with ", "Dumpster Trailer Rental"],
    intro: `Dumpster trailer rental from Lupo puts a low-profile dump trailer in your driveway instead of a tall steel roll-off box. We tow it in, set it on protective boards, and haul it off when you're done. Three sizes start at $${lowestPrice} flat in Holiday, New Port Richey, and across Pasco County.`,
    image: "/dumpster-trailer-1.webp",
    imageAlt: "Lupo dumpster trailer with its bed raised in Pasco County",
  },
  stakes: {
    title: ["Not Every Driveway ", "Wants a Roll-Off Box"],
    intro: "A traditional roll-off is a big steel container slid off the back of a truck. That isn't always the easiest fit for a home project.",
    items: [
      { icon: "Ruler", title: "Walls you can't reach", text: "Tall container sides mean heaving debris up and over every time you toss something in." },
      { icon: "Truck", title: "Big trucks, tight streets", text: "Roll-off trucks need plenty of room to drop and pick up the box, which can be tricky on a neighborhood street." },
      { icon: "CalendarX", title: "Waiting on a big hauler", text: "Larger companies can be booked out for days when you need a dumpster this week." },
    ],
    closing: "A dump-trailer dumpster gives you the same flat-rate disposal in a lower, simpler package.",
  },
  about: {
    eyebrow: "Dump trailer vs. roll-off",
    title: ["What Is a ", "Dumpster Trailer?"],
    paragraphs: [
      "A dumpster trailer is just what it sounds like: a heavy-duty dump trailer that works as your dumpster. Instead of a steel box slid off a roll-off truck, we back the trailer into place with a pickup and leave it for you to fill.",
      "Because the trailer is low-profile, the sides are easier to reach when you're tossing in bags, boards, or boxes. We set it on protective boards in your driveway or on the job site. When you're finished, we hitch it up and tip the load at the disposal facility, so you never handle it twice.",
      `You get the same ${sizeList}-yard sizes as any dumpster rental, at one flat price that includes delivery, pickup, and disposal up to the weight limit.`,
    ],
    perfectFor: ["Driveway projects", "Home cleanouts", "Remodels", "Roofing jobs", "Yard cleanups", "Moving out"],
    image: "/trailer-1.webp",
    imageAlt: "Lupo dumpster trailer tipping its load at a disposal facility after a Pasco County rental",
  },
  proof: {
    title: ["Simple Booking, ", "Quick Pickups"],
    intro: "Here's what Tampa Bay customers say about renting from a small, family-run dumpster company.",
    reviewNames: ["Brian O.", "Crystal D.", "David C."],
  },
  items: {
    intro: "The same rules apply to every dumpster trailer, whatever the size.",
  },
  story: {
    eyebrow: "Dumpster trailer rental in Pasco County, FL",
    title: "A Lower, Simpler Kind of Dumpster",
    paragraphs: [
      "Plenty of homeowners in Holiday, Hudson, and Palm Harbor have never heard of a dumpster trailer until they rent one. It does the same job as a roll-off dumpster, holding your debris until it's hauled to the dump, but it arrives behind a pickup truck and sits low in the driveway.",
      `Lupo Dumpster Rentals has offered dumpster trailer rental out of Holiday, FL since ${siteConfig.foundedYear}, serving Pasco County along with nearby Pinellas, Hernando, and North Hillsborough. Pick a ${sizeList}-yard trailer, and the flat price, starting at $${lowestPrice}, covers delivery, pickup, and disposal up to the weight limit.`,
      "We set the trailer on protective boards, you load it whenever it suits you, and we come back when you call or text. For cleanouts in New Port Richey, remodels in Trinity, or yard work in Spring Hill, it's a straightforward way to get the mess out without hauling it yourself.",
    ],
  },
  related: [
    { name: "Dumpster Rental", href: "/services/dumpster-rental", text: "Our main rental page, with every size, price, and booking option." },
    { name: "15-Yard Dumpster", href: "/services/15-yard-dump-trailer", text: "The trailer size most customers choose for remodels and move-outs." },
    { name: "Construction Dumpster Rental", href: "/services/construction-dumpster-rental", text: "Job-site trailers for contractors, roofers, and remodelers." },
  ],
  posts: [
    { title: "Dump Trailer Rental: How It Works and What It Costs", href: "/blog/dump-trailer-services-explained" },
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "How to Rent a Dumpster: Step-by-Step Tips", href: "/blog/how-to-rent-a-dumpster-tips-tricks-and-advice" },
  ],
  faqTitle: ["Dumpster Trailer ", "FAQs"],
  faqs: [
    {
      q: "What's the difference between a dumpster trailer and a roll-off dumpster?",
      a: "A roll-off is a steel box dropped off a large truck. A dumpster trailer is a low-profile dump trailer towed in by pickup and set on protective boards. Both hold your debris until it's hauled away.",
    },
    {
      q: "How much does dumpster trailer rental cost?",
      a: `${priceList}, all flat rates. Delivery, pickup, and disposal up to the included weight are part of the price.`,
    },
    {
      q: "Is a dumpster trailer easier to load?",
      a: "It sits lower than a typical roll-off box, so getting bags and debris over the side takes less lifting.",
    },
    {
      q: "Where can you put the trailer?",
      a: "Most customers have it in the driveway. We can also place it on a job site or other solid, level ground we can back into. A permit is usually only needed if it has to sit on the street.",
    },
    {
      q: "What sizes do your dumpster trailers come in?",
      a: `${sizes.map((s) => `${s.name.replace(" Dumpster", "")} (${s.dimensions})`).join(", ")}. If you're between two, size up.`,
    },
  ],
};

export default dumpsterTrailerRental;
