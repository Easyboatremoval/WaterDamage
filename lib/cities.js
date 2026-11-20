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
