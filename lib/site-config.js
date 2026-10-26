/**
 * Single source of truth for business facts used by the rebuilt pages.
 * See docs/brand.md §8 and docs/todo.md §2.1. Values marked `TODO(D#)` are
 * awaiting sign-off in docs/todo.md §0 — don't hard-code alternatives in
 * components; change them here.
 */

export const siteConfig = {
  name: "Lupo Dumpster Rentals",
  legalName: "Lupo Enterprises LLC",
  url: "https://www.lupodumpsterrentals.com",
  phone: "(727) 317-6717",
  phoneE164: "+17273176717",
  email: "a.lupollc@gmail.com", // TODO(D18): domain email
  address: {
    street: "5647 Andrea Dr",
    city: "Holiday",
    state: "FL",
    zip: "34690",
  },
  // Sunbiz document number for the LLC, not a contractor license. TODO(D4): add license # if one applies.
  registration: "FL LLC #L20000153106",
  hours: "Open 7 days, 7 AM – 8 PM",
  hoursShort: "Open 7 days · 7AM–8PM",
  openingHours: "Mo-Su 07:00-20:00",
  geo: { latitude: 28.1877, longitude: -82.7393 },
  foundedYear: 2020,
  founders: ["Alex Lupo", "Amanda Lupo"],
  // TODO(D3): confirm against Google before each release.
  rating: { value: "5.0", count: 160, countLabel: "160+" },
  googleReviewsUrl: "https://www.google.com/maps/place/Lupo+Enterprises+LLC",
  social: {
    facebook: "https://www.facebook.com/LupoLLC",
    instagram: "https://www.instagram.com/lupodumpsterrentals/",
  },
};

export const telHref = `tel:${siteConfig.phoneE164}`;
export const smsHref = `sms:${siteConfig.phoneE164}`;

// TODO(D1): lock prices, rental days, overweight and extra-day fees.
export const rental = {
  rentalDays: null,
  included: [
    "Delivery & pickup in our service area",
    "Disposal & dump fees up to the weight limit",
    "Driveway-safe placement on protective boards",
    "Call when you're done — we haul it away",
  ],
};

// TODO(D9): confirm the prohibited list and any per-item fees with Alex.
export const acceptedItems = [
  "Household junk and furniture",
  "Construction and remodel debris",
  "Drywall, lumber, and flooring",
  "Roofing shingles",
  "Yard waste, branches, and palm fronds",
  "Cabinets, fixtures, and old carpet",
];

export const prohibitedItems = [
  "Hazardous chemicals and solvents",
  "Wet paint",
  "Tires",
  "Batteries and propane tanks",
  "Medical waste",
];

export const sizes = [
  {
    id: "10",
    name: "10-Yard Dumpster",
    shortName: "10 yd",
    price: 325,
    dimensions: "12' L × 8' W × 3.5' H",
    loads: "About 3 pickup-truck loads",
    weight: "2 tons included",
    bestFor: "Garage cleanouts, small remodels, yard debris",
    href: "/services/10-yard-dump-trailer",
  },
  {
    id: "15",
    name: "15-Yard Dumpster",
    shortName: "15 yd",
    price: 400,
    dimensions: "14' L × 8' W × 4' H",
    loads: "About 4–5 pickup-truck loads",
    weight: "3 tons included",
    bestFor: "Kitchen remodels, flooring tear-outs, mid-size cleanouts",
    href: "/services/15-yard-dump-trailer",
    popular: true,
  },
  {
    id: "20",
    name: "20-Yard Dumpster",
    shortName: "20 yd",
    price: 500,
    dimensions: "16' L × 8' W × 5' H",
    loads: "About 6–7 pickup-truck loads",
    weight: "4 tons included",
    bestFor: "Whole-home renovations, roofing jobs, full property cleanouts",
    href: "/services/20-yard-dump-trailer",
  },
];

// TODO(D2): confirm the Facebook ad offer stays live and its terms.
export const facebookOffer = {
  sizeId: "10",
  price: 275,
  days: 3,
  label: "Online special",
};

export const getSize = (id) => sizes.find((s) => s.id === id);
export const lowestPrice = Math.min(...sizes.map((s) => s.price));
export const priceOf = (id) => `$${getSize(id).price}`;

export const reviews = [
  {
    name: "David C.",
    date: "2025-08-15",
    text: "Lupo was quick to respond, pricing was great, and the dumpster was dropped off less than 24 hours from the time we received our quote. I ended up needing a second dumpster and they accommodated that as well.",
  },
  {
    name: "Kerry S.",
    date: "2025-07-22",
    text: "I shopped around and made a few calls before deciding on Lupo. Booking the dumpster was very easy and it was delivered the very same day. My contractor took a few days longer than expected but they were very accommodating.",
  },
  {
    name: "Owen R.",
    date: "2025-05-18",
    text: "After the passing of our father, we needed to clean 40 years of collected stuff out of the house. Lupo did an excellent job. Great communication. Had the dumpster for over a week and they were very accommodating.",
  },
  {
    name: "Crystal D.",
    date: "2025-04-28",
    text: "Friendly and fast service. Their prices were a lot better than most places and I loved that there wasn't any extra fees.",
  },
  {
    name: "Joseph S.",
    date: "2025-07-08",
    text: "I have worked with Lupo several times and have had a good experience each time. Their prices are fair and they show up when they say they are going to.",
  },
  {
    name: "Brian O.",
    date: "2025-09-05",
    text: "Were able to work with me for the drop off time. And pickup was very quick once the trailer was loaded. Great people. Only company I would use in the area!",
  },
];

export const serviceAreas = [
  {
    county: "Pasco County",
    cities: [
      { name: "New Port Richey", href: "/services/dumpster-rental-new-port-richey-fl" },
      { name: "Holiday", href: "/services/dumpster-rental-holiday-fl" },
      { name: "Trinity", href: "/services/dumpster-rental-trinity-fl" },
      { name: "Hudson", href: "/services/dumpster-rental-hudson-fl" },
      { name: "Odessa", href: "/services/dumpster-rental-odessa-fl" },
      { name: "Land O' Lakes", href: "/services/dumpster-rental-land-o-lakes-fl" },
      { name: "Wesley Chapel", href: "/services/dumpster-rental-wesley-chapel-fl" },
      { name: "Zephyrhills", href: "/services/dumpster-rental-zephyrhills-fl" },
      { name: "Dade City", href: "/services/dumpster-rental-dade-city-fl" },
      { name: "San Antonio", href: "/services/dumpster-rental-san-antonio-fl" },
    ],
  },
  {
    county: "Pinellas County",
    href: "/services/dumpster-rental-pinellas-county",
    cities: [
      { name: "Palm Harbor", href: "/services/dumpster-rental-palm-harbor" },
      { name: "Dunedin", href: "/services/dumpster-rental-dunedin-fl" },
      { name: "Oldsmar", href: "/services/dumpster-rental-oldsmar-fl" },
      { name: "Safety Harbor", href: "/services/dumpster-rental-safety-harbor-fl" },
      { name: "Clearwater", href: "/services/dumpster-rental-clearwater-fl" },
      { name: "Largo", href: "/services/dumpster-rental-largo-fl" },
      { name: "Seminole", href: "/services/dumpster-rental-seminole-fl" },
      { name: "Pinellas Park", href: "/services/dumpster-rental-pinellas-park-fl" },
      { name: "St. Petersburg", href: "/services/dumpster-rental-st-petersburg-fl" },
    ],
  },
  {
    county: "Hillsborough County",
    href: "/services/dumpster-rental-hillsborough-county-fl",
    cities: [
      { name: "Lutz", href: "/services/dumpster-rental-lutz-fl" },
      { name: "Westchase", href: "/services/dumpster-rental-westchase-fl" },
      { name: "Keystone", href: "/services/dumpster-rental-keystone-fl" },
    ],
  },
  {
    county: "Hernando County",
    href: "/services/dumpster-rental-hernando-county-fl",
    cities: [
      { name: "Spring Hill", href: "/services/dumpster-rental-spring-hill" },
      { name: "Brooksville", href: "/services/dumpster-rental-brooksville-fl" },
    ],
  },
];

export const navigation = {
  services: [
    {
      title: "Dumpster Rentals",
      links: [
        { name: "Dumpster Rental", href: "/services/dumpster-rental", description: "Flat-rate 10, 15 & 20-yard" },
        { name: "10-Yard Dumpster", href: "/services/10-yard-dump-trailer" },
        { name: "15-Yard Dumpster", href: "/services/15-yard-dump-trailer" },
        { name: "20-Yard Dumpster", href: "/services/20-yard-dump-trailer" },
        { name: "Construction Dumpsters", href: "/services/construction-dumpster-rental" },
        { name: "Dumpster Trailer Rental", href: "/services/dumpster-trailer-rental" },
      ],
    },
    {
      title: "Junk Removal & Cleanouts",
      links: [
        { name: "Junk Removal", href: "/services/junk-removal", description: "We load it, we haul it" },
        { name: "Hoarding & Estate Cleanup", href: "/services/hoarding-cleanup" },
        { name: "Garage Cleanouts", href: "/services/garage-cleaning-service" },
        { name: "Construction Debris Removal", href: "/services/construction-debris-removal" },
        { name: "Appliance Removal", href: "/services/appliance-removal" },
        { name: "Furniture Removal", href: "/services/furniture-removal" },
        { name: "Mattress Disposal", href: "/services/mattress-disposal" },
        { name: "Yard Waste Removal", href: "/services/yard-waste-removal" },
      ],
    },
  ],
  main: [
    { name: "Pricing", href: "/dumpster-rental-pricing" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ],
  company: [
    { name: "About Lupo", href: "/about-us" },
    { name: "Pricing", href: "/dumpster-rental-pricing" },
    { name: "All Services", href: "/services" },
    { name: "Service Areas", href: "/service-locations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "SMS Terms", href: "/sms-terms" },
    { name: "Rental Terms", href: "/rental-terms" },
  ],
  bookHref: "/#book",
  allAreasHref: "/service-locations",
};
