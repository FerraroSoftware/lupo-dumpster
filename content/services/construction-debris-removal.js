import { lowestPrice, siteConfig } from "@/lib/site-config";

const constructionDebrisRemoval = {
  path: "/services/construction-debris-removal",
  kind: "junk",
  serviceType: "Construction debris removal",
  title: "Construction Debris Removal in Pasco County, FL | Lupo",
  description: `Construction debris removal in Pasco County, FL. We load and haul drywall, lumber, tile, and remodel waste. ${siteConfig.rating.value}-star rated. Firm price first.`,
  keywords: [
    "construction debris removal Pasco County",
    "construction debris removal near me",
    "remodel debris hauling",
    "drywall removal",
    "renovation waste removal",
    "contractor debris pickup",
  ],
  quoteTitle: "Get Your Debris Removal Price",
  quotePlaceholder: "e.g. Bathroom tear-out: drywall, old tub, tile, and vanity piled in the garage",
  hero: {
    eyebrow: "Construction debris removal · Pasco County, FL",
    title: ["Keep the Job Moving with ", "Construction Debris Removal in Pasco County"],
    intro:
      "Construction debris removal from Lupo means our crew loads the tear-out for you. We pick up drywall, lumber, tile, cabinets, and roofing scraps from homes and job sites in New Port Richey, Trinity, and across Pasco County, then haul it off in one trip. You get a firm price before we schedule.",
    image: "/images/services/construction-debris-removal/construction-debris-removal-pasco-county-fl.webp",
    imageAlt: "Crew loading torn-out drywall and lumber into a dump trailer for construction debris removal in Pasco County, FL",
  },
  stakes: {
    title: ["Demo Is Done. ", "The Pile Isn't."],
    intro: "Tearing out a kitchen takes a day. Getting rid of what came out can take a lot longer.",
    items: [
      { icon: "HardHat", title: "A pile that stalls the next trade", text: "The tile setter can't start while yesterday's demo is still stacked in the garage." },
      { icon: "Weight", title: "Pickup-bed dump runs", text: "Plaster and tile get heavy fast. Hauling it in your own truck means slow trips and a sagging suspension." },
      { icon: "AlertTriangle", title: "Nails and scrap left behind", text: "Loose screws and splintered trim in the driveway are a flat tire or a hurt foot waiting to happen." },
    ],
    closing: "Your crew should be building, not babysitting a debris pile.",
  },
  about: {
    eyebrow: "Removal vs. a dumpster",
    title: ["Debris Hauling, ", "Not Just a Dumpster Drop"],
    paragraphs: [
      "A construction dumpster works when your crew has time to load as they go. Debris removal is for everything else: the demo is already done and the pile is sitting there, the driveway can't hold a trailer for a week, or nobody on the job wants to spend an afternoon pitching drywall.",
      "We show up with our truck and trailer, load it by hand, rake up the small stuff, and leave. If you're running a long remodel with fresh debris every day, a construction dumpster rental usually makes more sense, and we'll tell you so.",
    ],
    perfectFor: ["Kitchen and bath tear-outs", "Flooring and tile removal", "Post-demo cleanup", "Contractor punch lists", "Deck and shed teardown debris", "Drywall and trim scraps"],
    image: "/images/services/construction-debris-removal/remodel-debris-pile-driveway-florida.webp",
    imageAlt: "Pile of drywall, lumber, broken tile, carpet, and an old vanity from a home remodel, ready for debris removal",
  },
  values: {
    title: ["Debris Gone, ", "Job Site Ready"],
    items: [
      { icon: "HardHat", title: "Built for job sites", text: "We work around open walls, bare subfloors, and other trades, and keep the path clear while we load." },
      { icon: "Weight", title: "Heavy loads welcome", text: "Tile, plaster, and broken concrete are normal for us. Tell us what's in the pile so we can price the weight fairly." },
      { icon: "Sparkles", title: "Raked and swept", text: "We clean up the spot where the pile sat, so the next trade starts on a clear floor." },
      { icon: "Building2", title: "Homeowners and builders", text: "One-time cleanups for DIY remodelers or repeat hauls for local contractors, with the same firm-price approach." },
    ],
  },
  proof: {
    title: ["Contractors and Homeowners ", "Who Call Us Back"],
    intro: "Builders and weekend remodelers across Pasco County keep our number handy. Here's why.",
    reviewNames: ["Kerry S.", "Joseph S.", "David C."],
  },
  steps: [
    { title: "Send photos of the pile", text: "Snap a few pictures of the debris and where it's sitting, then send them through the quote form or by text." },
    { title: "Get a price and a time", text: "We'll quote it firm, based on the volume and the material, and schedule around your crew's work." },
    { title: "We load, haul, and sweep", text: "Our crew hand-loads the debris, cleans up the scraps, and takes it all to disposal." },
  ],
  pricing: {
    title: ["Priced by the Pile, ", "Not by Guesswork"],
    intro:
      "Construction debris varies a lot. A trailer of drywall and a trailer of tile weigh very different amounts, so we look at what you have and set the price before we roll.",
    factors: [
      { title: "Volume of debris", text: "How much of our trailer the pile fills is the starting point." },
      { title: "Material weight", text: "Concrete, tile, plaster, and shingles are heavier and pricier to dump than lumber or cabinets." },
      { title: "Where it's sitting", text: "A neat pile by the driveway loads faster than debris spread across an upstairs bathroom." },
    ],
  },
  items: {
    title: ["Construction Debris ", "We Haul"],
    intro: "Most remodel and teardown waste can go. A few materials need a conversation first.",
    accepted: [
      "Drywall, plaster, and lath",
      "Lumber, trim, and framing scraps",
      "Tile, flooring, and carpet",
      "Cabinets, countertops, and vanities",
      "Shingles and roofing scraps",
      "Doors, windows, and fixtures",
    ],
  },
  story: {
    eyebrow: "Construction debris removal in Pasco County, FL",
    title: "Remodel Mess Out, Next Phase In",
    paragraphs: [
      "Every remodel has a messy middle. The old cabinets come out of a kitchen in Trinity, the carpet gets pulled in a Land O' Lakes bedroom, or a bathroom in Palm Harbor gets taken down to the studs, and suddenly there's a mountain of debris between you and the next step. Lupo Dumpster Rentals handles construction debris removal throughout Pasco County, plus parts of Pinellas, Hernando, and North Hillsborough, so that pile doesn't sit around for weeks.",
      "Homeowners call us when the DIY demo went faster than expected. Contractors in Wesley Chapel and Spring Hill call us when they need a site cleared before an inspection or a walkthrough. Either way, you send photos, we give you a firm price, and our crew handles the loading. We haul it off, take care of disposal, and sweep up behind us.",
      "If your project will produce debris for weeks, a flat-rate construction dumpster in the driveway is often the better value. If the mess is already made, construction debris removal gets it gone in one visit.",
    ],
  },
  nprText: "Remodeling closer to the coast?",
  related: [
    { name: "Junk Removal", href: "/services/junk-removal", text: "Full-service hauling for furniture, appliances, and cleanouts anywhere in Pasco County." },
    { name: "Construction Dumpster Rental", href: "/services/construction-dumpster-rental", text: `Load as you go with a flat-rate dumpster on site, starting at $${lowestPrice}.` },
    { name: "20-Yard Dumpster", href: "/services/20-yard-dump-trailer", text: "Our largest dump trailer for whole-home renovations and roofing jobs." },
  ],
  posts: [
    { title: "When to Rent a Dumpster: 5 Common Projects", href: "/blog/top-five-projects-that-call-for-a-dumpster-rental" },
    { title: "What Size Dumpster Do I Need?", href: "/blog/guide-to-roll-off-dumpster-trailers-choosing-the-right-size" },
    { title: "Junk Removal: How It Works, Costs, and Tips", href: "/blog/ultimate-guide-to-junk-removal" },
  ],
  faqTitle: ["Construction Debris Removal ", "FAQs"],
  faqs: [
    {
      q: "How much does construction debris removal cost?",
      a: "It depends on how much debris there is, how heavy the material is, and how easy it is to reach. Send photos and we'll give you a firm price before we schedule.",
    },
    {
      q: "Do you work with contractors or only homeowners?",
      a: "Both. We clear debris for homeowners after a DIY project and for contractors who need a site cleaned up between phases.",
    },
    {
      q: "Is debris removal or a construction dumpster the better deal?",
      a: `For ongoing projects where your crew can load as they go, a construction dumpster usually costs less, starting at $${lowestPrice} flat. If the pile is already there or nobody wants to load it, removal is simpler.`,
    },
    {
      q: "Can you take concrete, tile, and plaster?",
      a: "Yes, in most cases. Heavy materials cost more to dispose of, so let us know roughly how much there is when you ask for a price.",
    },
    {
      q: "Do I need to sort the debris first?",
      a: "No. It helps to keep loose nails and screws in a bucket and set aside any paint or chemicals, since those generally can't go with the load.",
    },
  ],
  ctaText: "Send us a few photos of the pile and get a firm price. We'll load it, haul it, and sweep up so the next phase can start.",
};

export default constructionDebrisRemoval;
