import { CITY_CONTENT } from './cityContent';

// Florida service areas, grouped by region.
// City landing pages live at /water-damage-restoration/<city>-fl.
// A city gets a page (and a sitemap entry) only once it has local text in lib/cityContent.js.

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// City center coordinates (US Census 2023 Gazetteer), used to find nearby cities.
const COORDS = {
  "Fort Lauderdale": [26.1412, -80.1467],
  "Hollywood": [26.031, -80.1646],
  "Pompano Beach": [26.2416, -80.1339],
  "Coral Springs": [26.2707, -80.2593],
  "Pembroke Pines": [26.0147, -80.3402],
  "Miramar": [25.9725, -80.3386],
  "Davie": [26.0792, -80.283],
  "Plantation": [26.1256, -80.2618],
  "Sunrise": [26.1716, -80.2616],
  "Deerfield Beach": [26.3117, -80.1254],
  "Weston": [26.1004, -80.4021],
  "Margate": [26.248, -80.2112],
  "Tamarac": [26.2033, -80.256],
  "Coconut Creek": [26.2809, -80.1847],
  "Miami": [25.7752, -80.2086],
  "Miami Beach": [25.8106, -80.1489],
  "Hialeah": [25.8699, -80.3029],
  "Doral": [25.816, -80.3576],
  "Kendall": [25.6695, -80.3547],
  "Coral Gables": [25.6831, -80.2617],
  "Miami Gardens": [25.9489, -80.2436],
  "North Miami": [25.9008, -80.1686],
  "Aventura": [25.9602, -80.133],
  "Homestead": [25.4663, -80.443],
  "Cutler Bay": [25.5761, -80.334],
  "West Palm Beach": [26.7451, -80.127],
  "Boca Raton": [26.3727, -80.1037],
  "Delray Beach": [26.4559, -80.0904],
  "Boynton Beach": [26.5283, -80.0807],
  "Jupiter": [26.9186, -80.1169],
  "Palm Beach Gardens": [26.8488, -80.1671],
  "Wellington": [26.649, -80.2672],
  "Lake Worth Beach": [26.6197, -80.0587],
  "Port St. Lucie": [27.2806, -80.3883],
  "Fort Pierce": [27.4261, -80.3425],
  "Stuart": [27.1953, -80.2441],
  "Vero Beach": [27.6472, -80.3931],
  "Naples": [26.1505, -81.7953],
  "Fort Myers": [26.6201, -81.8295],
  "Cape Coral": [26.6432, -81.9974],
  "Bonita Springs": [26.355, -81.7842],
  "Port Charlotte": [26.9895, -82.1137],
  "Punta Gorda": [26.8978, -82.0658],
  "Sarasota": [27.3383, -82.5437],
  "Venice": [27.117, -82.4152],
  "North Port": [27.0582, -82.198],
  "Bradenton": [27.4898, -82.5768],
  "Tampa": [27.9663, -82.4776],
  "Brandon": [27.936, -82.2993],
  "St. Petersburg": [27.7627, -82.6441],
  "Clearwater": [27.9794, -82.7713],
  "Largo": [27.9059, -82.7672],
  "Wesley Chapel": [28.2052, -82.3171],
  "Spring Hill": [28.4792, -82.5297],
  "Lakeland": [28.0555, -81.9548],
  "Orlando": [28.4087, -81.2548],
  "Winter Park": [28.5966, -81.3457],
  "Kissimmee": [28.3028, -81.4178],
  "Sanford": [28.7894, -81.2756],
  "Clermont": [28.5333, -81.7202],
  "Ocala": [29.1775, -82.151],
  "Gainesville": [29.6795, -82.3468],
  "Daytona Beach": [29.1907, -81.0971],
  "Deltona": [28.9051, -81.211],
  "Melbourne": [28.1104, -80.6627],
  "Palm Bay": [27.9649, -80.6583],
  "Jacksonville": [30.3369, -81.6616],
  "St. Augustine": [29.8962, -81.3111],
  "Tallahassee": [30.4535, -84.2523],
  "Pensacola": [30.441, -87.1912],
  "Panama City": [30.1663, -85.6702],
  "Destin": [30.4044, -86.4714],
  "Fort Walton Beach": [30.4249, -86.6218],
  "Key West": [24.5651, -81.7755],
  "Key Largo": [25.1226, -80.4116],
  "Marathon": [24.7323, -81.0251],
};

const region = (name, cities) => ({
  name,
  slug: slugify(name),
  cities: cities.map(([city, county]) => ({
    name: city,
    county,
    slug: `${slugify(city)}-fl`,
    lat: COORDS[city][0],
    lon: COORDS[city][1],
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

export const getCityBySlug = (slug) => ALL_CITIES.find((c) => c.slug === slug);
export const hasCityPage = (city) => Boolean(CITY_CONTENT[city.slug]);
export const CITIES_WITH_PAGES = ALL_CITIES.filter(hasCityPage);

// Straight-line distance in miles.
const miles = (a, b) => {
  const r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r;
  const dLon = (b.lon - a.lon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2;
  return 3959 * 2 * Math.asin(Math.sqrt(h));
};

// The closest other cities, nearest first.
export const getNearbyCities = (city, count = 12) =>
  ALL_CITIES.filter((c) => c.slug !== city.slug)
    .map((c) => ({ ...c, miles: miles(city, c) }))
    .sort((a, b) => a.miles - b.miles)
    .slice(0, count);

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
