import { lowestPrice } from "@/lib/site-config";

const junkRemoval = {
  path: "/services/junk-removal",
  kind: "junk",
  serviceType: "Junk removal",
  title: "Junk Removal in Pasco County, FL | Lupo Dumpster",
  description:
    "Full-service junk removal in Pasco County, FL. We lift, load, and haul furniture, appliances, and cleanout junk. Get a firm price first.",
  keywords: [
    "junk removal Pasco County",
    "junk removal near me",
    "junk removal New Port Richey",
    "junk hauling",
    "furniture and appliance removal",
    "junk pickup",
  ],
  quoteTitle: "Get Your Junk Removal Price",
  hero: {
    eyebrow: "Full-service junk removal · Pasco County, FL",
    title: ["Clear the Clutter Fast with ", "Junk Removal in Pasco County"],
    intro:
      "Lupo's crew comes to your home or business in Pasco County, lifts and loads everything you point to, and hauls it away. You get a firm price before we start, and we sweep up when we're done. Furniture, appliances, garage junk, and full cleanouts are all welcome.",
    image: "/images/services/junk-removal/junk-removal-crew-pasco-county-fl.webp",
    imageAlt: "Junk removal crew carrying an old sofa from a garage to a dump trailer at a Pasco County, FL home",
  },
  stakes: {
    title: ["Junk Has a Way of ", "Taking Over"],
    intro: "The pile in the garage started small. Now it's the reason the car sits in the driveway.",
    items: [
      { icon: "CalendarX", title: "Weekends lost to dump runs", text: "Borrow a truck, load it, wait at the landfill, unload, repeat. One cleanup becomes a month of Saturdays." },
      { icon: "AlertTriangle", title: "Heavy lifting that hurts", text: "Sleeper sofas, old fridges, and dressers down the stairs are how backs get thrown out." },
      { icon: "BadgeDollarSign", title: "Haulers with vague prices", text: "A cheap quote on the phone turns into a much bigger number once the truck is loaded." },
    ],
    closing: "Getting your space back shouldn't cost you your weekend or your back.",
  },
  about: {
    eyebrow: "What full-service means",
    title: ["You Point. ", "We Lift, Load, and Haul."],
    paragraphs: [
      "Junk removal is the hands-off option. Instead of renting a dumpster and loading it yourself, our crew comes to you, carries everything out from wherever it sits (attic, garage, back bedroom, or yard), and hauls it away in one visit.",
      "It's the right fit when you have heavy or bulky items, not enough time, or no room for a dumpster. If you'd rather load at your own pace over a few days, a flat-rate dumpster rental usually costs less.",
    ],
    perfectFor: ["Garage cleanouts", "Furniture and appliances", "Move-outs", "Estate cleanouts", "Rental turnovers", "Yard debris"],
    image: "/images/services/junk-removal/junk-removal-trailer-loaded-new-port-richey.webp",
    imageAlt: "Dump trailer loaded with a recliner, dresser, boxes, and bagged trash during junk removal in New Port Richey, FL",
  },
  proof: {
    title: ["Neighbors Who ", "Got Their Space Back"],
    intro: "We know a cleanout can be stressful, especially after a move or a loss in the family. Here's what local customers say.",
    reviewNames: ["Owen R.", "Crystal D.", "Brian O."],
  },
  pricing: {
    title: ["A Firm Price ", "Before We Lift Anything"],
    intro:
      "Every junk removal job is different, so we price by what we're actually hauling. Send a description or a few photos and you'll get a firm number before anything is scheduled.",
    factors: [
      { title: "How much there is", text: "The main factor is volume: how much of our trailer your items fill." },
      { title: "What it is", text: "Heavy materials like concrete, dirt, or shingles cost more to dispose of than furniture or boxes." },
      { title: "How hard it is to reach", text: "Items out of a second floor or a tight attic take more labor than a pile at the curb." },
    ],
  },
  items: {
    title: ["What We ", "Haul Away"],
    accepted: [
      "Furniture, mattresses, and box springs",
      "Appliances like fridges, washers, and dryers",
      "Garage, attic, and shed clutter",
      "Yard debris and old fencing",
      "Remodel debris and old cabinets",
      "Hot tubs, playsets, and exercise equipment",
    ],
  },
  story: {
    eyebrow: "Junk removal in Pasco County, FL",
    title: "From Cluttered to Clear in One Visit",
    paragraphs: [
      "Whether it's a packed garage in New Port Richey, a move-out in Trinity, or a family home in Holiday that needs emptying, the hardest part of any cleanup is getting rid of it all. Lupo Dumpster Rentals offers full-service junk removal across Pasco County and nearby Pinellas, Hernando, and North Hillsborough communities, so you don't have to rent a truck or make a single dump run.",
      "Tell us what needs to go and we'll give you a firm price up front. Our crew does the lifting and loading, takes care of disposal, and sweeps up before we leave. Usable items are set aside for donation and metals for recycling whenever we can. You get your garage, your spare room, or your rental unit back, without the sore back or the surprise bill.",
    ],
  },
  nprText: "Clearing out a home closer to the coast?",
  areaLabel: "Dumpster rental",
  related: [
    { name: "Hoarding & Estate Cleanup", href: "/services/hoarding-cleanup", text: "Discreet, respectful cleanouts for families handling an estate or a hoarding situation." },
    { name: "Furniture Removal", href: "/services/furniture-removal", text: "Couches, sectionals, recliners, and dressers carried out and hauled away." },
    { name: "Dumpster Rental", href: "/services/dumpster-rental", text: "Load it yourself with a flat-rate 10, 15, or 20-yard dumpster in your driveway." },
  ],
  posts: [
    { title: "Junk Removal: How It Works, Costs, and Tips", href: "/blog/ultimate-guide-to-junk-removal" },
    { title: "Haul Junk Away: Your Guide to Junk Hauling", href: "/blog/haul-junk-away-your-guide-to-decluttering" },
    { title: "Estate Cleanout Services: A Step-by-Step Guide", href: "/blog/complete-guide-to-estate-cleanout-services" },
  ],
  faqTitle: ["Junk Removal ", "FAQs"],
  faqs: [
    {
      q: "How much does junk removal cost in Pasco County?",
      a: "It depends on how much we haul, what it is, and how hard it is to reach. Send a description or a few photos and we'll give you a firm price before anything is scheduled.",
    },
    {
      q: "What items can you remove?",
      a: "Furniture, mattresses, appliances, garage and attic clutter, yard debris, remodel debris, hot tubs, and more. We can't take hazardous chemicals, wet paint, or medical waste.",
    },
    {
      q: "Do I need to be home for junk removal?",
      a: "It helps for the first walk-through, but it isn't always required. For items outside or in an open garage, we can arrange a pickup while you're at work.",
    },
    {
      q: "What happens to my junk after you haul it?",
      a: "Usable items are set aside for donation and metals for recycling whenever we can. The rest goes to a licensed disposal facility.",
    },
    {
      q: "Should I choose junk removal or a dumpster rental?",
      a: `Choose junk removal if you want us to do the lifting or you have a few heavy items. Choose a dumpster if you'd rather load it yourself over a few days. Dumpsters start at $${lowestPrice} flat.`,
    },
    {
      q: "Do you remove junk for businesses and rentals?",
      a: "Yes. We clear offices, retail spaces, and rental units between tenants, including furniture, fixtures, and move-out junk.",
    },
  ],
};

export default junkRemoval;
