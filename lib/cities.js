// Florida service areas, grouped by region.
// City landing pages will live at /water-damage-restoration/<city>-fl
// Flip CITY_PAGES_LIVE to true once those pages exist, so the homepage
// list turns into links and the cities are added to sitemap.xml.
export const CITY_PAGES_LIVE = false;

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const region = (name, cities) => ({
  name,
  slug: slugify(name),
  cities: cities.map(([city, county]) => ({
    name: city,
    county,
    slug: `${slugify(city)}-fl`,
  })),
});

export const REGIONS = [
  region('Broward County', [
    ['Fort Lauderdale', 'Broward'],
    ['Hollywood', 'Broward'],
    ['Pompano Beach', 'Broward'],
    ['Coral Springs', 'Broward'],
    ['Pembroke Pines', 'Broward'],
    ['Miramar', 'Broward'],
    ['Davie', 'Broward'],
    ['Plantation', 'Broward'],
    ['Sunrise', 'Broward'],
    ['Deerfield Beach', 'Broward'],
    ['Weston', 'Broward'],
    ['Margate', 'Broward'],
    ['Tamarac', 'Broward'],
    ['Coconut Creek', 'Broward'],
  ]),
  region('Miami-Dade County', [
    ['Miami', 'Miami-Dade'],
    ['Miami Beach', 'Miami-Dade'],
    ['Hialeah', 'Miami-Dade'],
    ['Doral', 'Miami-Dade'],
    ['Kendall', 'Miami-Dade'],
    ['Coral Gables', 'Miami-Dade'],
    ['Miami Gardens', 'Miami-Dade'],
    ['North Miami', 'Miami-Dade'],
    ['Aventura', 'Miami-Dade'],
    ['Homestead', 'Miami-Dade'],
    ['Cutler Bay', 'Miami-Dade'],
  ]),
  region('Palm Beach County', [
    ['West Palm Beach', 'Palm Beach'],
    ['Boca Raton', 'Palm Beach'],
    ['Delray Beach', 'Palm Beach'],
    ['Boynton Beach', 'Palm Beach'],
    ['Jupiter', 'Palm Beach'],
    ['Palm Beach Gardens', 'Palm Beach'],
    ['Wellington', 'Palm Beach'],
    ['Lake Worth Beach', 'Palm Beach'],
  ]),
  region('Treasure Coast', [
    ['Port St. Lucie', 'St. Lucie'],
    ['Fort Pierce', 'St. Lucie'],
    ['Stuart', 'Martin'],
    ['Vero Beach', 'Indian River'],
  ]),
  region('Southwest Florida', [
    ['Naples', 'Collier'],
    ['Fort Myers', 'Lee'],
    ['Cape Coral', 'Lee'],
    ['Bonita Springs', 'Lee'],
    ['Port Charlotte', 'Charlotte'],
    ['Punta Gorda', 'Charlotte'],
    ['Sarasota', 'Sarasota'],
    ['Venice', 'Sarasota'],
    ['North Port', 'Sarasota'],
    ['Bradenton', 'Manatee'],
  ]),
  region('Tampa Bay', [
    ['Tampa', 'Hillsborough'],
    ['Brandon', 'Hillsborough'],
    ['St. Petersburg', 'Pinellas'],
    ['Clearwater', 'Pinellas'],
    ['Largo', 'Pinellas'],
    ['Wesley Chapel', 'Pasco'],
    ['Spring Hill', 'Hernando'],
    ['Lakeland', 'Polk'],
  ]),
  region('Central Florida & Space Coast', [
    ['Orlando', 'Orange'],
    ['Winter Park', 'Orange'],
    ['Kissimmee', 'Osceola'],
    ['Sanford', 'Seminole'],
    ['Clermont', 'Lake'],
    ['Ocala', 'Marion'],
    ['Gainesville', 'Alachua'],
    ['Daytona Beach', 'Volusia'],
    ['Deltona', 'Volusia'],
    ['Melbourne', 'Brevard'],
    ['Palm Bay', 'Brevard'],
  ]),
  region('North Florida & Panhandle', [
    ['Jacksonville', 'Duval'],
    ['St. Augustine', 'St. Johns'],
    ['Tallahassee', 'Leon'],
    ['Pensacola', 'Escambia'],
    ['Panama City', 'Bay'],
    ['Destin', 'Okaloosa'],
    ['Fort Walton Beach', 'Okaloosa'],
  ]),
  region('Florida Keys', [
    ['Key West', 'Monroe'],
    ['Key Largo', 'Monroe'],
    ['Marathon', 'Monroe'],
  ]),
];

export const ALL_CITIES = REGIONS.flatMap((r) => r.cities);

export const cityPath = (city) => `/water-damage-restoration/${city.slug}`;

// Look up a city's page path by its display name, e.g. cityPathByName('Miami').
export const cityPathByName = (name) => {
  const city = ALL_CITIES.find((c) => c.name === name);
  if (!city) throw new Error(`Unknown city: ${name}`);
  return cityPath(city);
};

// "Cities We Serve" list in the footer.
export const FOOTER_CITIES = [
  'Miami',
  'Fort Lauderdale',
  'West Palm Beach',
  'Orlando',
  'Daytona Beach',
  'Jacksonville',
  'Naples',
  'Fort Myers',
  'Sarasota',
  'Tampa',
  'St. Petersburg',
  'Tallahassee',
];

// Cities flagged on the Florida service-area map.
// tier 1 = always labeled; tier 2 = labeled on larger screens.
// label = which side of the pin the name sits on (l, r, t, b).
// short = shorter name shown on phones so the label isn't cut off at the map edge.
export const MAP_CITIES = [
  { name: 'Pensacola', lat: 30.421, lon: -87.217, tier: 1, label: 'b' },
  { name: 'Destin', lat: 30.393, lon: -86.496, tier: 2, label: 'b' },
  { name: 'Panama City', lat: 30.159, lon: -85.66, tier: 1, label: 'b' },
  { name: 'Tallahassee', lat: 30.438, lon: -84.281, tier: 1, label: 't' },
  { name: 'Jacksonville', lat: 30.332, lon: -81.656, tier: 1, label: 'r' },
  { name: 'St. Augustine', lat: 29.901, lon: -81.313, tier: 2, label: 'r' },
  { name: 'Gainesville', lat: 29.652, lon: -82.325, tier: 1, label: 'l' },
  { name: 'Ocala', lat: 29.187, lon: -82.14, tier: 2, label: 'l' },
  { name: 'Daytona Beach', lat: 29.211, lon: -81.023, tier: 1, label: 'r' },
  { name: 'Orlando', lat: 28.538, lon: -81.379, tier: 1, label: 'r' },
  { name: 'Melbourne', lat: 28.084, lon: -80.608, tier: 2, label: 'r' },
  { name: 'Lakeland', lat: 28.04, lon: -81.95, tier: 2, label: 'r' },
  { name: 'Tampa', lat: 27.951, lon: -82.458, tier: 1, label: 't' },
  { name: 'Clearwater', lat: 27.966, lon: -82.8, tier: 2, label: 'l' },
  { name: 'St. Petersburg', lat: 27.768, lon: -82.64, tier: 1, label: 'l' },
  { name: 'Sarasota', lat: 27.336, lon: -82.531, tier: 1, label: 'l' },
  { name: 'Vero Beach', lat: 27.639, lon: -80.398, tier: 2, label: 'r' },
  { name: 'Port St. Lucie', lat: 27.273, lon: -80.354, tier: 1, label: 'r' },
  { name: 'Fort Myers', lat: 26.64, lon: -81.872, tier: 1, label: 'r' },
  { name: 'Cape Coral', lat: 26.563, lon: -81.95, tier: 2, label: 'l' },
  { name: 'Naples', lat: 26.142, lon: -81.795, tier: 1, label: 'l' },
  { name: 'West Palm Beach', lat: 26.715, lon: -80.053, tier: 1, label: 'r', short: 'W. Palm Beach' },
  { name: 'Boca Raton', lat: 26.368, lon: -80.128, tier: 2, label: 'r' },
  { name: 'Fort Lauderdale', lat: 26.122, lon: -80.137, tier: 1, label: 'r', short: 'Ft. Lauderdale' },
  { name: 'Miami', lat: 25.762, lon: -80.192, tier: 1, label: 'r' },
  { name: 'Homestead', lat: 25.468, lon: -80.477, tier: 2, label: 'l' },
  { name: 'Key Largo', lat: 25.087, lon: -80.447, tier: 2, label: 'r' },
  { name: 'Key West', lat: 24.555, lon: -81.78, tier: 1, label: 'b' },
];
