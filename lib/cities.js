/**
 * City / area data for the shared 14-section dumpster rental page template.
 * Each entry powers one `/services/dumpster-rental-*` page via
 * `components/new/city-dumpster-page.jsx` and `components/new/*` sections.
 *
 * Fields:
 * - city            Display name shown in H1s, meta, section headings
 * - state           Always "FL" for this business
 * - county          Parent county (also used for permit fallback wording)
 * - urlSlug         Exact URL slug after "/services/dumpster-rental-"
 * - zipCodes        Real ZIP codes served (shown as pills + used in copy)
 * - neighborhoods   4-12 known neighborhoods / subdivisions
 * - nearbyCities    3-8 adjacent cities for the "Nearby" chip row
 * - geoCoords       Used by LocationSchema (JSON-LD)
 * - countyPermitPhone  Used by PermitsInfo (e.g. "(727) 847-8032")
 * - cityPermitPhone    Optional, only when confirmed
 *
 * `isCountyPage: true` signals county-wide pages (Pinellas/Hillsborough/
 * Hernando County, Tampa Bay) so copy reads as area-wide instead of city-wide.
 */

export const cities = {
  // -------------------------------- Pasco County ---------------------------------
  "new-port-richey-fl": {
    city: "New Port Richey",
    state: "FL",
    county: "Pasco County",
    urlSlug: "new-port-richey-fl",
    zipCodes: ["34652", "34653", "34654", "34655"],
    neighborhoods: [
      "Downtown New Port Richey",
      "Gulf Harbors",
      "Sea Ranch on Gulf",
      "Flor A Mar",
      "Beacon Square",
      "Seven Springs",
      "Jasmine Lakes",
      "Embassy Hills",
      "Heritage Lake",
      "Meadow Oaks",
      "River Ridge",
      "Longleaf",
      "River Oaks",
      "Tanglewood Village",
      "Regency Park",
      "Magnolia Valley",
      "Orchid Lake",
      "Veterans Village",
    ],
    nearbyCities: [
      "Port Richey",
      "Trinity",
      "Holiday",
      "Hudson",
      "Elfers",
      "Spring Hill",
      "Odessa",
      "Land O' Lakes",
    ],
    geoCoords: { latitude: 28.2442, longitude: -82.7193 },
    countyPermitPhone: "(727) 847-8032",
    cityPermitPhone: "(727) 853-1026",
  },

  "trinity-fl": {
    city: "Trinity",
    state: "FL",
    county: "Pasco County",
    urlSlug: "trinity-fl",
    zipCodes: ["34655"],
    neighborhoods: [
      "Heritage Springs",
      "Trinity Oaks",
      "Trinity West",
      "Fox Wood",
      "Thousand Oaks",
      "Mitchell Ranch",
      "Champions Club",
      "Chelsea Place",
      "Villages of Fox Hollow",
    ],
    nearbyCities: [
      "New Port Richey",
      "Odessa",
      "Land O' Lakes",
      "Holiday",
      "Palm Harbor",
      "Tarpon Springs",
    ],
    geoCoords: { latitude: 28.1806, longitude: -82.6804 },
    countyPermitPhone: "(727) 847-8032",
  },

  "holiday-fl": {
    city: "Holiday",
    state: "FL",
    county: "Pasco County",
    urlSlug: "holiday-fl",
    zipCodes: ["34690", "34691"],
    neighborhoods: [
      "Holiday Lake Estates",
      "Aloha Gardens",
      "Forest Hills",
      "Colonial Hills",
      "Crane's Roost",
      "Buena Vista",
      "Orangewood Village",
    ],
    nearbyCities: [
      "New Port Richey",
      "Tarpon Springs",
      "Trinity",
      "Port Richey",
      "Palm Harbor",
    ],
    geoCoords: { latitude: 28.1868, longitude: -82.7378 },
    countyPermitPhone: "(727) 847-8032",
  },

  "hudson-fl": {
    city: "Hudson",
    state: "FL",
    county: "Pasco County",
    urlSlug: "hudson-fl",
    zipCodes: ["34667", "34669"],
    neighborhoods: [
      "Beacon Woods",
      "Sea Pines",
      "Leisure Beach",
      "Meadow Oaks",
      "Gulf Coast Acres",
      "Autumn Palms",
      "Heritage Pines",
    ],
    nearbyCities: [
      "New Port Richey",
      "Port Richey",
      "Spring Hill",
      "Bayonet Point",
      "Aripeka",
    ],
    geoCoords: { latitude: 28.3639, longitude: -82.6937 },
    countyPermitPhone: "(727) 847-8032",
  },

  "land-o-lakes-fl": {
    city: "Land O' Lakes",
    state: "FL",
    county: "Pasco County",
    urlSlug: "land-o-lakes-fl",
    zipCodes: ["34638", "34639"],
    neighborhoods: [
      "Stonegate",
      "Lake Padgett Estates",
      "Wilderness Lake Preserve",
      "Connerton",
      "Plantation Palms",
      "Lakeshore Ranch",
      "Ballantrae",
      "Suncoast Lakes",
    ],
    nearbyCities: [
      "Wesley Chapel",
      "Odessa",
      "Lutz",
      "Dade City",
      "Trinity",
      "New Port Richey",
    ],
    geoCoords: { latitude: 28.2192, longitude: -82.4551 },
    countyPermitPhone: "(727) 847-8032",
  },

  "dade-city-fl": {
    city: "Dade City",
    state: "FL",
    county: "Pasco County",
    urlSlug: "dade-city-fl",
    zipCodes: ["33523", "33525", "33526"],
    neighborhoods: [
      "Historic Downtown Dade City",
      "Lake Jovita",
      "Highland Park",
      "Azalea Park",
      "Meridian",
      "Stagecoach Village",
    ],
    nearbyCities: [
      "Zephyrhills",
      "San Antonio",
      "Wesley Chapel",
      "Bushnell",
      "Lacoochee",
      "New Port Richey",
    ],
    geoCoords: { latitude: 28.3650, longitude: -82.1959 },
    countyPermitPhone: "(727) 847-8032",
  },

  "wesley-chapel-fl": {
    city: "Wesley Chapel",
    state: "FL",
    county: "Pasco County",
    urlSlug: "wesley-chapel-fl",
    zipCodes: ["33543", "33544", "33545", "33559"],
    neighborhoods: [
      "Seven Oaks",
      "Meadow Pointe",
      "Lexington Oaks",
      "Saddlebrook",
      "Quail Hollow",
      "Country Walk",
      "Wiregrass Ranch",
      "Estancia",
      "Epperson Ranch",
      "Watergrass",
    ],
    nearbyCities: [
      "Land O' Lakes",
      "Zephyrhills",
      "Lutz",
      "Dade City",
      "San Antonio",
      "New Port Richey",
    ],
    geoCoords: { latitude: 28.2333, longitude: -82.3278 },
    countyPermitPhone: "(727) 847-8032",
  },

  "zephyrhills-fl": {
    city: "Zephyrhills",
    state: "FL",
    county: "Pasco County",
    urlSlug: "zephyrhills-fl",
    zipCodes: ["33539", "33540", "33541", "33542"],
    neighborhoods: [
      "Silverado",
      "Link Lakes",
      "Copeland Creek",
      "Hill 'n Dale",
      "Palm View Gardens",
      "Betmar Acres",
      "Abbott Square",
    ],
    nearbyCities: [
      "Dade City",
      "Wesley Chapel",
      "San Antonio",
      "Crystal Springs",
      "Lacoochee",
      "New Port Richey",
    ],
    geoCoords: { latitude: 28.2336, longitude: -82.1812 },
    countyPermitPhone: "(727) 847-8032",
  },

  "san-antonio-fl": {
    city: "San Antonio",
    state: "FL",
    county: "Pasco County",
    urlSlug: "san-antonio-fl",
    zipCodes: ["33576"],
    neighborhoods: [
      "Downtown San Antonio",
      "Mirada",
      "Tampa Bay Golf & Country Club",
      "Lake Jovita",
    ],
    nearbyCities: [
      "Dade City",
      "Zephyrhills",
      "Wesley Chapel",
      "Saint Leo",
      "New Port Richey",
    ],
    geoCoords: { latitude: 28.3358, longitude: -82.2740 },
    countyPermitPhone: "(727) 847-8032",
  },

  "lutz-fl": {
    city: "Lutz",
    state: "FL",
    county: "Hillsborough County",
    urlSlug: "lutz-fl",
    zipCodes: ["33548", "33549", "33558", "33559"],
    neighborhoods: [
      "Cheval",
      "Cordoba Ranch",
      "Calusa Trace",
      "Steinbrenner",
      "Crystal Lake Manor",
      "Van Dyke Farms",
      "Heritage Harbor",
    ],
    nearbyCities: [
      "Wesley Chapel",
      "Land O' Lakes",
      "Odessa",
      "Carrollwood",
      "Tampa",
    ],
    geoCoords: { latitude: 28.1511, longitude: -82.4618 },
    countyPermitPhone: "(813) 635-5400",
  },

  "odessa-fl": {
    city: "Odessa",
    state: "FL",
    county: "Pasco & Hillsborough County",
    urlSlug: "odessa-fl",
    zipCodes: ["33556"],
    neighborhoods: [
      "Steeplechase",
      "The Eagles",
      "Starkey Ranch",
      "Keystone Park Colony",
      "Lake Patience",
      "Asturia",
      "Trinity Oaks",
    ],
    nearbyCities: [
      "Trinity",
      "Land O' Lakes",
      "Lutz",
      "Keystone",
      "New Port Richey",
      "Westchase",
    ],
    geoCoords: { latitude: 28.1881, longitude: -82.5904 },
    countyPermitPhone: "(727) 847-8032",
  },

  // -------------------------------- Pinellas County ------------------------------
  "clearwater-fl": {
    city: "Clearwater",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "clearwater-fl",
    zipCodes: ["33755", "33756", "33759", "33760", "33761", "33763", "33765"],
    neighborhoods: [
      "Clearwater Beach",
      "Downtown Clearwater",
      "Island Estates",
      "Sand Key",
      "Countryside",
      "Bay Aristocrat Village",
      "Belleair",
      "Morningside",
      "Skycrest",
    ],
    nearbyCities: [
      "Dunedin",
      "Largo",
      "Safety Harbor",
      "Belleair",
      "Palm Harbor",
      "St. Petersburg",
    ],
    geoCoords: { latitude: 27.9659, longitude: -82.8001 },
    countyPermitPhone: "(727) 464-8900",
  },

  "dunedin-fl": {
    city: "Dunedin",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "dunedin-fl",
    zipCodes: ["34698"],
    neighborhoods: [
      "Downtown Dunedin",
      "Honeymoon Island",
      "Dunedin Country Club",
      "Fairway Estates",
      "San Christopher",
      "Curlew Landings",
      "Weybridge Woods",
    ],
    nearbyCities: [
      "Palm Harbor",
      "Clearwater",
      "Safety Harbor",
      "Ozona",
      "Tarpon Springs",
    ],
    geoCoords: { latitude: 28.0197, longitude: -82.7723 },
    countyPermitPhone: "(727) 464-8900",
  },

  "largo-fl": {
    city: "Largo",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "largo-fl",
    zipCodes: ["33770", "33771", "33773", "33774", "33778"],
    neighborhoods: [
      "Downtown Largo",
      "Belleair Bluffs",
      "Indian Rocks Beach",
      "Harbor Bluffs",
      "Feather Sound",
      "Ridgecrest",
      "Windsor Woods",
    ],
    nearbyCities: [
      "Clearwater",
      "Seminole",
      "Pinellas Park",
      "Belleair",
      "Indian Rocks Beach",
    ],
    geoCoords: { latitude: 27.9094, longitude: -82.7873 },
    countyPermitPhone: "(727) 464-8900",
  },

  "oldsmar-fl": {
    city: "Oldsmar",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "oldsmar-fl",
    zipCodes: ["34677"],
    neighborhoods: [
      "East Lake Woodlands",
      "Gull-Aire Village",
      "Cross Creek",
      "Bay Arbor",
      "Forest Lakes",
      "Eastlake Oaks",
    ],
    nearbyCities: [
      "Safety Harbor",
      "Palm Harbor",
      "Tampa",
      "Westchase",
      "Clearwater",
    ],
    geoCoords: { latitude: 28.0334, longitude: -82.6651 },
    countyPermitPhone: "(727) 464-8900",
  },

  "palm-harbor": {
    city: "Palm Harbor",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "palm-harbor",
    zipCodes: ["34683", "34684", "34685"],
    neighborhoods: [
      "Ozona",
      "Crystal Beach",
      "Lansbrook",
      "Innisbrook",
      "Highland Lakes",
      "Gleneagles",
      "Boot Ranch",
      "Village of Woodland Hills",
    ],
    nearbyCities: [
      "Dunedin",
      "Oldsmar",
      "Tarpon Springs",
      "Clearwater",
      "Trinity",
      "New Port Richey",
    ],
    geoCoords: { latitude: 28.0780, longitude: -82.7637 },
    countyPermitPhone: "(727) 464-8900",
  },

  "pinellas-park-fl": {
    city: "Pinellas Park",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "pinellas-park-fl",
    zipCodes: ["33781", "33782"],
    neighborhoods: [
      "Bardmoor",
      "Mainlands",
      "Bayou Club Estates",
      "Lealman",
      "Kenneth City",
      "Cross Bayou",
    ],
    nearbyCities: ["St. Petersburg", "Largo", "Seminole", "Kenneth City", "Clearwater"],
    geoCoords: { latitude: 27.8428, longitude: -82.6995 },
    countyPermitPhone: "(727) 464-8900",
  },

  "safety-harbor-fl": {
    city: "Safety Harbor",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "safety-harbor-fl",
    zipCodes: ["34695"],
    neighborhoods: [
      "Downtown Safety Harbor",
      "Briar Creek",
      "Main Street",
      "Espiritu Santo Springs",
      "Green Springs",
      "Huntington Trails",
    ],
    nearbyCities: ["Oldsmar", "Clearwater", "Dunedin", "Palm Harbor", "Tampa"],
    geoCoords: { latitude: 27.9902, longitude: -82.6957 },
    countyPermitPhone: "(727) 464-8900",
  },

  "seminole-fl": {
    city: "Seminole",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "seminole-fl",
    zipCodes: ["33772", "33776", "33777"],
    neighborhoods: [
      "Bay Pines",
      "Lake Seminole",
      "Pinebrook Estates",
      "Ridge Manor",
      "Bayside Gardens",
      "Tyrone",
    ],
    nearbyCities: [
      "Largo",
      "St. Petersburg",
      "Madeira Beach",
      "Treasure Island",
      "Redington Beach",
    ],
    geoCoords: { latitude: 27.8389, longitude: -82.7903 },
    countyPermitPhone: "(727) 464-8900",
  },

  "st-petersburg-fl": {
    city: "St. Petersburg",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "st-petersburg-fl",
    zipCodes: ["33701", "33702", "33703", "33704", "33705", "33710", "33711", "33712", "33713", "33714"],
    neighborhoods: [
      "Downtown St. Pete",
      "Old Northeast",
      "Historic Kenwood",
      "Snell Isle",
      "Shore Acres",
      "Jungle Prada",
      "Gulfport",
      "Tierra Verde",
      "Allendale Terrace",
      "Crescent Lake",
    ],
    nearbyCities: ["Pinellas Park", "Gulfport", "Kenneth City", "Seminole", "South Pasadena"],
    geoCoords: { latitude: 27.7676, longitude: -82.6403 },
    countyPermitPhone: "(727) 464-8900",
  },

  // ---------------------------- Hillsborough County ------------------------------
  "westchase-fl": {
    city: "Westchase",
    state: "FL",
    county: "Hillsborough County",
    urlSlug: "westchase-fl",
    zipCodes: ["33626"],
    neighborhoods: [
      "Radcliffe",
      "Woodbay",
      "Harbor Links",
      "The Bridges",
      "The Vineyards",
      "Greenpointe",
      "Baybridge",
    ],
    nearbyCities: ["Citrus Park", "Town 'N' Country", "Oldsmar", "Odessa", "Keystone"],
    geoCoords: { latitude: 28.0628, longitude: -82.6190 },
    countyPermitPhone: "(813) 635-5400",
  },

  "keystone-fl": {
    city: "Keystone",
    state: "FL",
    county: "Hillsborough County",
    urlSlug: "keystone-fl",
    zipCodes: ["33556"],
    neighborhoods: [
      "Keystone Park Colony",
      "Lake Keystone",
      "Stillwater",
      "Steeplechase",
      "The Eagles",
      "Tampa Bay Golf",
    ],
    nearbyCities: ["Odessa", "Westchase", "Lutz", "Trinity", "Land O' Lakes"],
    geoCoords: { latitude: 28.1364, longitude: -82.5993 },
    countyPermitPhone: "(813) 635-5400",
  },

  // ----------------------------- Hernando County ---------------------------------
  "brooksville-fl": {
    city: "Brooksville",
    state: "FL",
    county: "Hernando County",
    urlSlug: "brooksville-fl",
    zipCodes: ["34601", "34602", "34604"],
    neighborhoods: [
      "Historic Downtown Brooksville",
      "Quarry Ridge",
      "Southern Hills Plantation",
      "Oak Hill",
      "Hernando Oaks",
      "Royal Highlands",
    ],
    nearbyCities: ["Spring Hill", "Weeki Wachee", "Dade City", "Ridge Manor", "Masaryktown"],
    geoCoords: { latitude: 28.5553, longitude: -82.3895 },
    countyPermitPhone: "(352) 754-4060",
  },

  "spring-hill": {
    city: "Spring Hill",
    state: "FL",
    county: "Hernando County",
    urlSlug: "spring-hill",
    zipCodes: ["34606", "34607", "34608", "34609", "34610", "34613"],
    neighborhoods: [
      "Seven Hills",
      "Sterling Hill",
      "Silverthorn",
      "Wellington",
      "Timber Pines",
      "Glen Lakes",
      "Pristine Place",
      "Villages of Avalon",
    ],
    nearbyCities: ["Brooksville", "Hudson", "Weeki Wachee", "Aripeka", "New Port Richey"],
    geoCoords: { latitude: 28.4769, longitude: -82.5256 },
    countyPermitPhone: "(352) 754-4060",
  },

  // --------------------------- County / area pages -------------------------------
  "pinellas-county": {
    city: "Pinellas County",
    state: "FL",
    county: "Pinellas County",
    urlSlug: "pinellas-county",
    isCountyPage: true,
    zipCodes: ["33701", "33755", "33770", "33781", "34677", "34683", "34695", "34698"],
    neighborhoods: [
      "Clearwater",
      "St. Petersburg",
      "Dunedin",
      "Largo",
      "Palm Harbor",
      "Seminole",
      "Oldsmar",
      "Pinellas Park",
      "Safety Harbor",
      "Tarpon Springs",
    ],
    nearbyCities: ["Tampa", "Brandon", "Bradenton", "Hillsborough County", "Pasco County"],
    geoCoords: { latitude: 27.8878, longitude: -82.7385 },
    countyPermitPhone: "(727) 464-8900",
  },

  "hillsborough-county-fl": {
    city: "Hillsborough County",
    state: "FL",
    county: "Hillsborough County",
    urlSlug: "hillsborough-county-fl",
    isCountyPage: true,
    zipCodes: ["33548", "33556", "33558", "33559", "33626", "33634", "33635"],
    neighborhoods: [
      "Tampa",
      "Brandon",
      "Westchase",
      "Lutz",
      "Carrollwood",
      "Citrus Park",
      "Town 'N' Country",
      "Keystone",
      "Riverview",
      "Valrico",
    ],
    nearbyCities: ["Pinellas County", "Pasco County", "Polk County", "Manatee County"],
    geoCoords: { latitude: 27.9904, longitude: -82.3018 },
    countyPermitPhone: "(813) 635-5400",
  },

  "hernando-county-fl": {
    city: "Hernando County",
    state: "FL",
    county: "Hernando County",
    urlSlug: "hernando-county-fl",
    isCountyPage: true,
    zipCodes: ["34601", "34602", "34604", "34606", "34607", "34608", "34609", "34613"],
    neighborhoods: [
      "Spring Hill",
      "Brooksville",
      "Weeki Wachee",
      "Hernando Beach",
      "Ridge Manor",
      "Masaryktown",
      "Aripeka",
      "Istachatta",
    ],
    nearbyCities: ["Pasco County", "Citrus County", "Sumter County"],
    geoCoords: { latitude: 28.5540, longitude: -82.4640 },
    countyPermitPhone: "(352) 754-4060",
  },

  "tampa-bay": {
    city: "Tampa Bay",
    state: "FL",
    county: "Tampa Bay Area",
    urlSlug: "tampa-bay",
    isCountyPage: true,
    zipCodes: ["33602", "33701", "33755", "34652", "34677", "34698"],
    neighborhoods: [
      "Tampa",
      "St. Petersburg",
      "Clearwater",
      "New Port Richey",
      "Trinity",
      "Palm Harbor",
      "Wesley Chapel",
      "Land O' Lakes",
      "Brandon",
      "Westchase",
    ],
    nearbyCities: [
      "New Port Richey",
      "Bradenton",
      "Sarasota",
      "Lakeland",
      "Ocala",
    ],
    geoCoords: { latitude: 27.9506, longitude: -82.4572 },
    countyPermitPhone: "(727) 847-8032",
  },
};

/**
 * Derived helpers — generate consistent copy from raw city data.
 */
export function getCityMeta(data) {
  const { city, state = "FL", county } = data;
  const cityState = `${city}, ${state}`;

  const metatitle = `Dumpster Rental in ${cityState} | Lupo Dumpster Rentals`;
  const description = `Dumpster rental in ${cityState}. Lupo Dumpster Rentals: 10/15/20-yard roll-offs, same-day delivery, flat-rate pricing. Call (727) 317-6717.`;
  const keywords = [
    `${city} dumpster rental`,
    `dumpster rental ${cityState}`,
    `10 yard dumpster ${city}`,
    `15 yard dumpster ${city}`,
    `20 yard dumpster ${city}`,
    `roll off dumpster ${city}`,
    `junk removal ${cityState}`,
    `dumpster rental services`,
  ].join(", ");
  const path = `/services/dumpster-rental-${data.urlSlug}`;
  const locationUrl = `https://www.lupodumpsterrentals.com${path}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${city}, ${state}`
  )}&output=embed`;

  return {
    metatitle,
    description,
    keywords,
    path,
    locationUrl,
    mapEmbedSrc,
  };
}

export function getCity(slug) {
  return cities[slug];
}

/**
 * Resolve a display city name ("Trinity", "Land O' Lakes") to its registry
 * entry. Returns `undefined` for names that don't have a city page yet
 * (e.g. "Port Richey", "Elfers"), so callers can filter them out.
 */
export function getCityByName(name) {
  return Object.values(cities).find((entry) => entry.city === name);
}

/**
 * Build a `[{ name, state, href }]` list of nearby dumpster-rental pages for
 * a given city registry entry — the input for <ServiceAreaNearby> (§8.4).
 * Names without a matching city-page slug are skipped so we never ship broken
 * internal links.
 */
export function getNearbyLinks(data) {
  if (!data || !Array.isArray(data.nearbyCities)) return [];
  return data.nearbyCities
    .map((name) => {
      const entry = getCityByName(name);
      if (!entry) return null;
      return {
        name: entry.city,
        state: entry.state,
        href: `/services/dumpster-rental-${entry.urlSlug}`,
      };
    })
    .filter(Boolean);
}

export default cities;
