// Tampa Bay city pages: Pinellas, Hillsborough and Pasco counties. See lib/cityContent/index.js for the field guide.
const HELENE_MILTON =
  'In 2024, Hurricane Helene’s storm surge flooded thousands of homes along the Tampa Bay coast, and Hurricane Milton followed two weeks later with damaging wind and record rainfall.';

export const TAMPA_BAY = {
  // ---------- Pinellas County ----------
  'st-petersburg-fl': {
    heroLead:
      'Water damage in St. Petersburg? CWM answers 24/7 and sends a crew to extract the water, dry your home, condo or business and stop mold — from Downtown and the Old Northeast to Shore Acres, Kenwood and Snell Isle.',
    neighborhoods: ['Downtown St. Pete', 'Old Northeast', 'Snell Isle', 'Shore Acres', 'Historic Kenwood', 'Crescent Lake', 'Old Southeast', 'Riviera Bay', 'Venetian Isles', 'Lakewood Estates', 'Disston Heights', 'Placido Bayou'],
    about: [
      `St. Petersburg is surrounded by water on three sides, and many neighborhoods — Shore Acres, Venetian Isles, Snell Isle and the Old Northeast — sit only a few feet above sea level. ${HELENE_MILTON} Shore Acres and other bayfront neighborhoods were among the hardest hit, and many homes are still being repaired.`,
      'Across the city, older bungalows and mid-century homes have original cast-iron drains and galvanized plumbing, and downtown condo towers see leaks spread from unit to unit. CWM extracts water, removes flood-damaged drywall and flooring, dries the structure, treats mold and documents everything for both flood and homeowners insurance claims.',
    ],
    localFaqs: [
      {
        q: 'My St. Petersburg home flooded from storm surge. What needs to be removed?',
        a: 'Storm surge is contaminated saltwater, so drywall, insulation, carpet and pad, and most cabinets it touched usually have to come out — typically a flood cut a foot or more above the waterline. We remove the damaged materials, clean and sanitize, dry the framing and slab, and document everything for your flood insurance claim.',
      },
    ],
  },

  'clearwater-fl': {
    heroLead:
      'Water damage in Clearwater? CWM provides 24/7 water extraction, drying and mold remediation — Clearwater Beach to Countryside and Downtown.',
    neighborhoods: ['Clearwater Beach', 'Island Estates', 'Sand Key', 'Downtown Clearwater', 'Countryside', 'Morningside', 'Skycrest', 'Harbor Oaks', 'Del Oro Groves', 'Lake Belleview area'],
    about: [
      `Clearwater ranges from Clearwater Beach and Island Estates on the barrier islands to established mainland neighborhoods and the Countryside area. ${HELENE_MILTON} Clearwater Beach, Sand Key and Island Estates took heavy surge damage.`,
      'Inland, homes from the 1950s through the 1980s often have aging plumbing, water heaters and roofs. CWM extracts water, removes contaminated materials after flooding, dries the structure and restores your home with full documentation for insurance.',
    ],
  },

  'largo-fl': {
    heroLead:
      'Water damage in Largo? CWM provides 24/7 water extraction, drying and mold remediation for homes, condos and mobile homes.',
    neighborhoods: ['Downtown Largo', 'Ridgecrest', 'Belleair Bluffs (nearby)', 'Largo Central Park area', 'East Bay Dr corridor', 'Walsingham area', 'Lake Seminole area'],
    about: [
      'Largo is a central Pinellas city with many 1960s and 70s homes, condos and large mobile home and 55+ communities. Aging plumbing, water heaters and roofs, plus flooding along the bay side and low-lying areas during heavy rain and storms, are the main sources of water damage.',
      'CWM extracts water, dries floors and walls, prevents mold and helps document the damage for your insurance company.',
    ],
  },

  'pinellas-park-fl': {
    heroLead:
      'Water damage in Pinellas Park? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Park Blvd corridor', 'Mainlands of Tamarac', 'Pinellas Park downtown', 'US-19 corridor', 'Gateway area'],
    about: [
      'Pinellas Park is a mostly residential city with homes, mobile home communities and businesses built from the 1950s onward. Older plumbing and roofs, and low-lying neighborhoods that flood during heavy rain, are common sources of water damage.',
      'We respond around the clock to extract water, dry the structure and restore your home.',
    ],
  },

  'dunedin-fl': {
    heroLead:
      'Water damage in Dunedin? CWM provides 24/7 water extraction, drying and mold remediation for homes, condos and businesses.',
    neighborhoods: ['Downtown Dunedin', 'Dunedin Causeway area', 'Fairway Estates', 'Dunedin Isles', 'Edgewater Dr waterfront'],
    about: [
      `Dunedin is a waterfront city on St. Joseph Sound with many older homes near downtown and along Edgewater Drive. ${HELENE_MILTON} Waterfront streets and homes near the Causeway were flooded.`,
      'CWM removes floodwater and damaged materials, dries the structure, prevents mold and documents everything for insurance.',
    ],
  },

  'tarpon-springs-fl': {
    heroLead:
      'Water damage in Tarpon Springs? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Sponge Docks', 'Downtown Tarpon Springs', 'Spring Bayou', 'Anclote area', 'Tarpon Springs historic district', 'Lake Tarpon area'],
    about: [
      `Tarpon Springs is known for its historic Sponge Docks and Greek heritage, with many older homes around Spring Bayou and the Anclote River. ${HELENE_MILTON} Low-lying neighborhoods along the bayous and river flooded.`,
      'We extract water, dry and sanitize the home and restore floors and walls.',
    ],
  },

  'palm-harbor-fl': {
    heroLead:
      'Water damage in Palm Harbor? CWM provides 24/7 water extraction, drying and mold remediation for homes and condos.',
    neighborhoods: ['Crystal Beach', 'Ozona', 'Innisbrook', 'Lansbrook', 'Highland Lakes', 'Lake Tarpon area', 'US-19 corridor'],
    about: [
      'Palm Harbor stretches from the Gulf-front communities of Crystal Beach and Ozona east to Lake Tarpon. Waterfront areas face storm surge, while inland neighborhoods from the 1970s through 1990s see aging water heaters, supply lines and roofs.',
      'CWM extracts water, dries the structure, treats mold and restores your home.',
    ],
  },

  'east-lake-fl': {
    heroLead:
      'Water damage in East Lake? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Lansbrook', 'Eagle Watch', 'Boot Ranch', 'East Lake Woodlands', 'Lake Tarpon area'],
    about: [
      'East Lake is a residential area of single-family homes and golf communities on the east side of Lake Tarpon. Many homes from the 1980s and 1990s now have aging water heaters, supply lines and AC systems, and heavy rain can flood low ground near the lake.',
      'We extract water, dry the structure and restore floors and walls.',
    ],
  },

  'safety-harbor-fl': {
    heroLead:
      'Water damage in Safety Harbor? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Downtown / Main St', 'Safety Harbor waterfront', 'Philippe Park area', 'Bayshore Blvd area'],
    about: [
      `Safety Harbor sits on the west shore of Old Tampa Bay with many historic homes near Main Street. ${HELENE_MILTON}`,
      'CWM removes water and damaged materials, dries the structure and documents everything for your insurance company.',
    ],
  },

  'oldsmar-fl': {
    heroLead:
      'Water damage in Oldsmar? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Downtown Oldsmar', 'East Lake Woodlands (nearby)', 'Forest Lakes Blvd area', 'Tampa Rd corridor', 'Bayfront area'],
    about: [
      'Oldsmar sits at the top of Old Tampa Bay. Bayfront neighborhoods face storm surge and flooding, and homes across the city see the usual water heater, supply line and roof leaks.',
      'We respond around the clock to extract water and dry your home.',
    ],
  },

  'seminole-fl': {
    heroLead:
      'Water damage in Seminole? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Lake Seminole area', 'Seminole City Center area', 'Bardmoor', 'Park Blvd corridor', 'Oakhurst'],
    about: [
      'Seminole is a residential city with many 1960s through 1980s homes and condos and a large population of retirees. Aging plumbing, water heaters and roofs, and flooding near Lake Seminole and the bayous, are the main risks.',
      'CWM extracts water, dries walls and floors and prevents mold.',
    ],
  },

  'belleair-fl': {
    heroLead:
      'Water damage in Belleair? CWM provides careful 24/7 water extraction, drying and restoration.',
    neighborhoods: ['Belleair Country Club area', 'Belleview Biltmore area', 'Clearwater Harbor waterfront'],
    about: [
      'Belleair is a small, historic town of large homes overlooking Clearwater Harbor. Older homes with original plumbing and fine finishes need careful drying, and waterfront properties face storm surge.',
      'We extract water, dry the structure and restore floors and finishes.',
    ],
  },

  'indian-rocks-beach-fl': {
    heroLead:
      'Water damage in Indian Rocks Beach? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Gulf Blvd beachfront', 'Intracoastal homes', 'Indian Rocks Beach residential'],
    about: [
      `Indian Rocks Beach is a barrier-island town between the Gulf and the Intracoastal Waterway. ${HELENE_MILTON} Many beach homes and condos were flooded.`,
      'CWM removes floodwater and damaged materials, dries and sanitizes the structure and documents everything for flood insurance.',
    ],
  },

  'indian-shores-fl': {
    heroLead:
      'Water damage in Indian Shores? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Gulf Blvd condos', 'Intracoastal homes'],
    about: [
      `Indian Shores is a narrow barrier-island town of condos and homes along Gulf Boulevard. ${HELENE_MILTON}`,
      'We extract water, dry the structure and document the damage for flood and homeowners claims.',
    ],
  },

  'madeira-beach-fl': {
    heroLead:
      'Water damage in Madeira Beach? CWM provides 24/7 flood cleanup, water extraction, drying and mold remediation.',
    neighborhoods: ['John’s Pass', 'Gulf Blvd beachfront', 'Crystal Island', 'Boca Ciega Bay waterfront'],
    about: [
      `Madeira Beach is home to John’s Pass and many waterfront homes along Boca Ciega Bay. ${HELENE_MILTON} Madeira Beach was among the hardest-hit beach towns.`,
      'CWM removes floodwater and contaminated materials, dries the structure and documents everything for flood insurance.',
    ],
  },

  'treasure-island-fl': {
    heroLead:
      'Water damage in Treasure Island? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Sunset Beach', 'Isle of Capri', 'Isle of Palms', 'Paradise Island', 'Gulf Blvd beachfront'],
    about: [
      `Treasure Island sits on a barrier island with many canal-front homes on its small islands. ${HELENE_MILTON} Treasure Island saw some of the worst surge flooding in Pinellas County.`,
      'We remove floodwater and damaged materials, sanitize and dry the structure, and document the damage for insurance.',
    ],
  },

  'st-pete-beach-fl': {
    heroLead:
      'Water damage in St. Pete Beach? CWM provides 24/7 flood cleanup, water extraction and drying for homes, condos and hotels.',
    neighborhoods: ['Pass-a-Grille', 'Don CeSar area', 'Gulf Blvd beachfront', 'Belle Vista', 'Vina del Mar'],
    about: [
      `St. Pete Beach stretches from Blind Pass to historic Pass-a-Grille. ${HELENE_MILTON} Homes, condos and hotels across the island were flooded.`,
      'CWM extracts water, removes contaminated materials, dries the structure and documents everything for flood insurance.',
    ],
  },

  // ---------- Hillsborough County ----------
  'tampa-fl': {
    heroLead:
      'Water damage in Tampa? CWM answers 24/7 and sends a crew to extract the water, dry your home, condo or business and stop mold — from South Tampa and Davis Islands to Seminole Heights, Westchase and New Tampa.',
    neighborhoods: ['South Tampa', 'Hyde Park', 'Davis Islands', 'Harbour Island', 'Downtown / Channel District', 'Ybor City', 'Seminole Heights', 'Palma Ceia', 'Bayshore Beautiful', 'Westshore', 'New Tampa', 'Sulphur Springs'],
    about: [
      `Tampa’s low-lying South Tampa peninsula, Davis Islands and Harbour Island sit just a few feet above Tampa Bay and are exposed to storm surge and street flooding. ${HELENE_MILTON} Many South Tampa and bayfront homes took on water, and Milton’s heavy rain caused flooding in neighborhoods across the city.`,
      'Inland, historic bungalows in Seminole Heights, Hyde Park and Tampa Heights have original plumbing and wood floors that need careful drying. CWM extracts water, removes damaged materials, dries the structure with commercial equipment, treats mold and documents everything for your insurance claims.',
    ],
  },

  'brandon-fl': {
    heroLead:
      'Water damage in Brandon? CWM provides 24/7 water extraction, drying and mold remediation for homes and businesses.',
    neighborhoods: ['Bloomingdale (nearby)', 'Providence Lakes', 'Kingsway', 'Brandon Lakes', 'Westfield Brandon area', 'Lumsden Rd area'],
    about: [
      'Brandon is a large suburban area east of Tampa with homes built from the 1960s through today. Water heater failures, supply line leaks, AC overflows and roof leaks are the most common problems, and heavy rain can flood low ground near creeks and retention ponds.',
      'CWM extracts water, dries the structure, prevents mold and restores your floors and walls.',
    ],
  },

  'riverview-fl': {
    heroLead:
      'Water damage in Riverview? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Panther Trace', 'Summerfield', 'Boyette', 'Rivercrest', 'South Fork', 'Alafia River area'],
    about: [
      'Riverview is one of the fastest-growing communities in Hillsborough County, with many newer homes along with older properties near the Alafia River. Riverfront areas can flood in heavy rain and storms, and new homes can still have water heater, supply line and AC leaks.',
      'We extract water, dry the structure and document the damage for insurance or builder warranty claims.',
    ],
  },

  'temple-terrace-fl': {
    heroLead:
      'Water damage in Temple Terrace? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Temple Terrace historic district', 'Riverhills', 'Hillsborough River area', 'USF area'],
    about: [
      'Temple Terrace has many homes from the 1920s Mediterranean Revival era through the 1960s along the Hillsborough River. Parts of the city near the river flooded during Hurricane Milton’s heavy rain in 2024, and older homes have aging plumbing.',
      'CWM extracts water, dries walls and floors, treats mold and restores your home.',
    ],
  },

  'town-n-country-fl': {
    heroLead:
      'Water damage in Town ’n’ Country? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Hillsborough Ave corridor', 'Sweetwater Creek area', 'Bay Port Colony', 'Rocky Point', 'Waters Ave area'],
    about: [
      'Town ’n’ Country is a large residential area near Tampa International Airport and Old Tampa Bay, with many homes from the 1960s and 1970s. Aging plumbing, roofs and drain lines are common sources of leaks, and low areas near Sweetwater Creek and the bay can flood.',
      'We extract water, dry the structure and prevent mold.',
    ],
  },

  'westchase-fl': {
    heroLead:
      'Water damage in Westchase? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['West Park Village', 'The Bridges', 'Fords', 'Stockbridge', 'Kingsford', 'Radcliffe'],
    about: [
      'Westchase is a planned community of homes built mostly in the 1990s and 2000s. Many now have original water heaters, supply lines and AC systems reaching the end of their life, and second-floor bathrooms and laundry rooms can leak through ceilings.',
      'CWM extracts water, dries the structure and restores floors and drywall.',
    ],
  },

  'greater-carrollwood-fl': {
    heroLead:
      'Water damage in Carrollwood? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Carrollwood Village', 'Original Carrollwood', 'Lake Carroll area', 'Dale Mabry corridor'],
    about: [
      'Greater Carrollwood is a residential area of lakes and established neighborhoods north of Tampa, with many homes from the 1960s through the 1980s. Aging plumbing, water heaters and roofs, and flooding near lakes during heavy rain, are common.',
      'We extract water, dry the structure and restore your home.',
    ],
  },

  'citrus-park-fl': {
    heroLead:
      'Water damage in Citrus Park? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Westfield Citrus Park area', 'Gunn Hwy corridor', 'Sheldon Rd area', 'Ehrlich Rd area'],
    about: [
      'Citrus Park is a suburban area in northwest Hillsborough with homes from the 1980s onward. Water heater failures, supply line leaks and roof leaks are the most common causes of damage.',
      'CWM extracts water, dries the structure and prevents mold.',
    ],
  },

  'university-fl': {
    heroLead:
      'Water damage near USF? CWM provides 24/7 water extraction, drying and mold remediation in the University area.',
    neighborhoods: ['USF area', 'Fowler Ave corridor', 'Bruce B. Downs corridor', 'Fletcher Ave area'],
    about: [
      'The University area around USF has many apartments, rental homes and older single-family houses. Leaks from aging plumbing, AC units and roofs are common, and stacked apartments can spread damage between units.',
      'We work with tenants, landlords and property managers to extract water, dry units and document the damage.',
    ],
  },

  'lutz-fl': {
    heroLead:
      'Water damage in Lutz? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Cheval', 'Lake Fern', 'Heritage Harbor', 'Lutz Lake Fern Rd area', 'Dale Mabry corridor'],
    about: [
      'Lutz is a semi-rural community of lakes, large lots and golf communities north of Tampa. Lakefront homes and low ground can flood in heavy rain, and many properties have wells and septic systems.',
      'CWM extracts water, dries the structure and handles septic contamination safely.',
    ],
  },

  'odessa-fl': {
    heroLead:
      'Water damage in Odessa? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Keystone', 'Gunn Hwy corridor', 'Lake Keystone area', 'Van Dyke Rd area'],
    about: [
      'Odessa is a rural-suburban area of lakes and larger properties in northwest Hillsborough and southwest Pasco. Lakefront homes and low ground can flood, and wells and septic systems add their own risks.',
      'We extract water, dry homes and outbuildings and prevent mold.',
    ],
  },

  'palm-river-clair-mel-fl': {
    heroLead:
      'Water damage in Palm River-Clair Mel? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Palm River', 'Clair Mel', '78th St area', 'McKay Bay area'],
    about: [
      'Palm River-Clair Mel is an area of older homes and mobile homes near McKay Bay and the Palm River. Low elevations make storm surge and heavy-rain flooding a real risk, and aging plumbing causes frequent leaks.',
      'CWM extracts water, sanitizes after flooding and dries the structure.',
    ],
  },

  'plant-city-fl': {
    heroLead:
      'Water damage in Plant City? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Downtown Plant City', 'Walden Lake', 'Strawberry Festival area', 'Park Rd corridor'],
    about: [
      'Plant City is known for its strawberry farms and historic downtown, with many older homes and newer communities such as Walden Lake. Aging plumbing and roofs, and flooding during heavy rain, are the main risks.',
      'We extract water, dry the structure and restore your home.',
    ],
  },

  'dover-fl': {
    heroLead: 'Water damage in Dover? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Dover residential', 'SR-60 corridor', 'Gallagher Rd area'],
    about: [
      'Dover is a rural community between Brandon and Plant City with farms, mobile homes and single-family homes. Roof leaks, plumbing failures and heavy-rain flooding are the main risks, and many homes use wells and septic.',
      'CWM extracts water and dries the structure quickly.',
    ],
  },

  'seffner-fl': {
    heroLead: 'Water damage in Seffner? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Seffner residential', 'Lake Weeks area', 'US-92 corridor'],
    about: [
      'Seffner is a residential area east of Tampa with homes and mobile homes on larger lots. Aging plumbing, roof leaks and flooding in low areas are common sources of damage.',
      'We extract water and dry your home.',
    ],
  },

  'thonotosassa-fl': {
    heroLead: 'Water damage in Thonotosassa? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Lake Thonotosassa area', 'US-301 corridor', 'Fowler Ave area'],
    about: [
      'Thonotosassa is a rural community around Lake Thonotosassa. Lakefront homes and low ground can flood in heavy rain, and many properties rely on wells and septic systems.',
      'CWM extracts water, dries the structure and handles contamination safely.',
    ],
  },

  'gibsonton-fl': {
    heroLead: 'Water damage in Gibsonton? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Gibsonton waterfront', 'Alafia River area', 'US-41 corridor'],
    about: [
      'Gibsonton sits on Hillsborough Bay at the mouth of the Alafia River. Low elevations make storm surge and river flooding a real risk for homes and mobile homes.',
      'We extract water, sanitize after flooding and dry the structure.',
    ],
  },

  'bloomingdale-fl': {
    heroLead: 'Water damage in Bloomingdale? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Bloomingdale Ave corridor', 'River Hills area', 'Lithia Pinecrest Rd area'],
    about: [
      'Bloomingdale is a suburban community south of Brandon with homes built mostly in the 1980s and 1990s. Aging water heaters, supply lines and roofs are common sources of leaks.',
      'CWM extracts water, dries the structure and restores your home.',
    ],
  },

  'apollo-beach-fl': {
    heroLead: 'Water damage in Apollo Beach? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Apollo Beach canal homes', 'MiraBay', 'Waterset', 'Symphony Isles', 'Apollo Beach Blvd area'],
    about: [
      `Apollo Beach is a canal-front community on Tampa Bay. ${HELENE_MILTON} Low-lying canal homes are especially exposed to surge.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'ruskin-fl': {
    heroLead: 'Water damage in Ruskin? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Little Manatee River area', 'US-41 corridor', 'Ruskin residential', 'Shell Point Rd area'],
    about: [
      'Ruskin sits along Tampa Bay and the Little Manatee River. Waterfront homes face storm surge and river flooding, and many older homes have aging plumbing and roofs.',
      'We extract water, dry the structure and prevent mold.',
    ],
  },

  'sun-city-center-fl': {
    heroLead: 'Water damage in Sun City Center? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Kings Point', 'Sun City Center residential', 'SR-674 corridor'],
    about: [
      'Sun City Center is a large 55+ community with homes and villas from the 1960s onward. Aging water heaters, supply lines and roofs are the main sources of leaks, and seasonal residents may not notice a leak for days.',
      'CWM extracts water, dries the home and can keep family members or property managers updated with photos and moisture readings.',
    ],
  },

  'wimauma-fl': {
    heroLead: 'Water damage in Wimauma? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Wimauma residential', 'SR-674 corridor', 'Balm area'],
    about: [
      'Wimauma is a rural-to-suburban area in southeast Hillsborough with farms, mobile homes and new communities. Roof leaks, plumbing failures and heavy-rain flooding are common.',
      'We extract water and dry the structure quickly.',
    ],
  },

  // ---------- Pasco County ----------
  'new-port-richey-fl': {
    heroLead: 'Water damage in New Port Richey? CWM provides 24/7 flood cleanup, water extraction, drying and mold remediation.',
    neighborhoods: ['Downtown New Port Richey', 'Pithlachascotee River area', 'Gulf Harbors (nearby)', 'US-19 corridor'],
    about: [
      `New Port Richey sits along the Pithlachascotee River near the Gulf. ${HELENE_MILTON} Riverfront and coastal neighborhoods in western Pasco flooded badly.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'holiday-fl': {
    heroLead: 'Water damage in Holiday? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Holiday residential', 'Gulf coast canal homes', 'US-19 corridor', 'Anclote area'],
    about: [
      `Holiday is a residential area of older homes and mobile homes along the Pasco Gulf coast. ${HELENE_MILTON}`,
      'We extract water, sanitize after flooding and dry the structure.',
    ],
  },

  'hudson-fl': {
    heroLead: 'Water damage in Hudson? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Hudson Beach', 'Sea Pines', 'Hudson canal homes', 'US-19 corridor'],
    about: [
      `Hudson is a Gulf-coast community of canal-front homes and older neighborhoods. ${HELENE_MILTON} Hudson’s low-lying coastal streets were among the hardest hit in Pasco County.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for flood insurance.',
    ],
  },

  'bayonet-point-fl': {
    heroLead: 'Water damage in Bayonet Point? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Bayonet Point residential', 'US-19 corridor', 'SR-52 area'],
    about: [
      'Bayonet Point is a residential area in western Pasco County with many older homes and mobile homes. Aging plumbing, roof leaks and storm flooding are common sources of damage.',
      'We extract water and dry your home.',
    ],
  },

  'land-o-lakes-fl': {
    heroLead: 'Water damage in Land O’ Lakes? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Connerton', 'Lake Padgett', 'Ballantrae', 'Oakstead', 'Plantation Palms', 'SR-54 corridor'],
    about: [
      'Land O’ Lakes is a fast-growing area of lakes and planned communities in central Pasco County. Lakefront homes can flood in heavy rain, and both older and newer homes see water heater, supply line and AC leaks.',
      'CWM extracts water, dries the structure and restores your home.',
    ],
  },
};
