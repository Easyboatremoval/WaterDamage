// Manatee, Sarasota, Charlotte (and DeSoto) county city pages. See lib/cityContent/index.js for the field guide.
const STORMS_2024 =
  'In 2024 the area was hit three times: Tropical Storm Debby’s rain in August, Hurricane Helene’s storm surge in September and Hurricane Milton, which made landfall near Siesta Key in October.';
const IAN = 'Hurricane Ian in 2022 brought catastrophic wind, storm surge and river flooding to Charlotte County and the surrounding area.';

export const SARASOTA_MANATEE_CHARLOTTE = {
  // ---------- Manatee County ----------
  'bradenton-fl': {
    heroLead:
      'Water damage in Bradenton? CWM provides 24/7 water extraction, drying and mold remediation — from Downtown and the Riverwalk to West Bradenton and Cortez.',
    neighborhoods: ['Downtown / Riverwalk', 'West Bradenton', 'Cortez', 'Palma Sola', 'Village of the Arts', 'Bayshore Gardens (nearby)', 'Manatee River waterfront', 'Wares Creek area'],
    about: [
      `Bradenton sits on the south bank of the Manatee River near Tampa Bay and the Gulf. ${STORMS_2024} Low areas near the river, Wares Creek and Palma Sola Bay flooded, and many homes are still drying out and rebuilding.`,
      'Many Bradenton homes date to the 1950s through 1970s, with original plumbing, cast-iron drains and older roofs. CWM extracts water, removes damaged materials, dries the structure, treats mold and documents everything for flood and homeowners insurance.',
    ],
  },

  'palmetto-fl': {
    heroLead: 'Water damage in Palmetto? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Downtown Palmetto', 'Manatee River waterfront', 'Terra Ceia (nearby)', 'US-41 corridor'],
    about: [
      `Palmetto sits on the north bank of the Manatee River across from Bradenton. ${STORMS_2024} Waterfront and low-lying streets flooded.`,
      'We extract water, remove damaged materials, dry the structure and prevent mold.',
    ],
  },

  'ellenton-fl': {
    heroLead: 'Water damage in Ellenton? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Ellenton residential', 'Gamble Plantation area', 'US-301 corridor', 'Manatee River area'],
    about: [
      'Ellenton is a small community along the Manatee River with homes and mobile home communities. River flooding, roof leaks and aging plumbing are the main risks.',
      'CWM extracts water and dries your home quickly.',
    ],
  },

  'parrish-fl': {
    heroLead: 'Water damage in Parrish? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['North River Ranch', 'Silverleaf', 'Copperstone', 'Foxbrook', 'US-301 corridor'],
    about: [
      'Parrish is one of the fastest-growing areas in Manatee County, with many new communities. Even new homes can have water heater, supply line, AC and construction-related leaks, and heavy rain can flood low ground.',
      'We extract water, dry the structure and document the damage for insurance or builder warranty claims.',
    ],
  },

  'lakewood-ranch-fl': {
    heroLead: 'Water damage in Lakewood Ranch? CWM provides 24/7 water extraction, drying, mold remediation and floor restoration.',
    neighborhoods: ['Main Street', 'Country Club', 'Waterside', 'Greenbrook', 'Summerfield', 'Edgewater', 'Esplanade', 'Lakewood National'],
    about: [
      'Lakewood Ranch is a large master-planned community spanning Manatee and Sarasota counties. Many homes are newer, with large tile and wood floors and second-floor bathrooms and laundry rooms. Water heater, supply line and AC leaks are the most common problems, and heavy rain from 2024’s storms flooded some low areas.',
      'CWM uses thermal imaging to find hidden moisture, dries the home thoroughly and restores floors and cabinetry.',
    ],
  },

  'bayshore-gardens-fl': {
    heroLead: 'Water damage in Bayshore Gardens? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Bayshore Gardens residential', '26th St W area', 'Sarasota Bay waterfront'],
    about: [
      `Bayshore Gardens is a residential area of mostly 1950s and 60s homes between Bradenton and Sarasota Bay. ${STORMS_2024}`,
      'We extract water, dry the structure and restore your home.',
    ],
  },

  'tallevast-fl': {
    heroLead: 'Water damage in Tallevast? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Tallevast residential', 'Tallevast Rd area', 'SRQ Airport area'],
    about: [
      'Tallevast is a small community near Sarasota Bradenton International Airport. Roof leaks, plumbing failures and heavy-rain flooding are the main risks.',
      'CWM extracts water and dries your home.',
    ],
  },

  'anna-maria-fl': {
    heroLead: 'Water damage on Anna Maria Island? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['City Pier area', 'Pine Avenue', 'Bean Point', 'Gulf-front homes'],
    about: [
      `The City of Anna Maria sits at the north end of Anna Maria Island. ${STORMS_2024} Helene’s surge flooded many island homes and rentals.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for flood insurance — for owners and rental managers.',
    ],
  },

  'holmes-beach-fl': {
    heroLead: 'Water damage in Holmes Beach? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Manatee Public Beach area', 'Key Royale', 'Gulf Dr', 'Marina Dr'],
    about: [
      `Holmes Beach is the largest city on Anna Maria Island, with canal homes, beach rentals and condos. ${STORMS_2024}`,
      'We remove floodwater and contaminated materials, dry the structure and document the damage.',
    ],
  },

  'bradenton-beach-fl': {
    heroLead: 'Water damage in Bradenton Beach? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Bridge Street', 'Coquina Beach area', 'Gulf Dr', 'Cortez Bridge area'],
    about: [
      `Bradenton Beach is at the south end of Anna Maria Island. ${STORMS_2024} Bridge Street and many homes and businesses flooded.`,
      'CWM extracts water, sanitizes, dries the structure and documents everything for insurance.',
    ],
  },

  // ---------- Sarasota County ----------
  'sarasota-fl': {
    heroLead:
      'Water damage in Sarasota? CWM answers 24/7 and sends a crew to extract the water, dry your home, condo or business and stop mold — from Downtown and St. Armands to Southside Village and Gulf Gate.',
    neighborhoods: ['Downtown Sarasota', 'St. Armands Circle', 'Lido Key', 'Bird Key', 'Southside Village', 'Laurel Park', 'Indian Beach / Sapphire Shores', 'Gulf Gate', 'Rosemary District', 'Harbor Acres', 'Gillespie Park'],
    about: [
      `Sarasota has historic bungalows near downtown, bayfront homes, and condo towers along the bay and on the keys. ${STORMS_2024} Debby’s rain flooded neighborhoods along Phillippi Creek, Helene’s surge reached the keys and bayfront, and Milton brought more wind and water.`,
      'CWM extracts water, removes flood-damaged drywall and flooring, dries the structure, treats mold and documents everything for flood and homeowners insurance. For condos, we coordinate with associations and building management.',
    ],
  },

  'siesta-key-fl': {
    heroLead: 'Water damage on Siesta Key? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Siesta Village', 'Crescent Beach', 'Point of Rocks', 'Turtle Beach', 'Siesta Key canal homes'],
    about: [
      `Siesta Key is a barrier island of beach homes, condos and vacation rentals. ${STORMS_2024}`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for flood insurance — for owners and rental managers.',
    ],
  },

  'longboat-key-fl': {
    heroLead: 'Water damage on Longboat Key? CWM provides 24/7 water extraction, drying and flood cleanup.',
    neighborhoods: ['Gulf of Mexico Dr condos', 'Longboat Key Club area', 'Village (north end)', 'Bayfront homes'],
    about: [
      `Longboat Key is a barrier island of condos, resorts and bayfront homes. ${STORMS_2024}`,
      'We work with owners and associations to extract water, dry the structure and document the damage.',
    ],
  },

  'fruitville-fl': {
    heroLead: 'Water damage in Fruitville? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Fruitville Rd corridor', 'Bee Ridge area', 'Palmer Blvd area', 'Celery Fields area'],
    about: [
      'Fruitville is a suburban area east of Sarasota. Heavy rain from 2024’s storms flooded low neighborhoods near creeks, and many homes see water heater, supply line and roof leaks.',
      'CWM extracts water, dries the structure and prevents mold.',
    ],
  },

  'palmer-ranch-fl': {
    heroLead: 'Water damage in Palmer Ranch? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Stoneybrook', 'Prestancia', 'Turtle Rock', 'Deer Hollow', 'Sawgrass'],
    about: [
      'Palmer Ranch is a planned area of gated communities south of Sarasota, with homes built mostly since the 1990s. Water heater failures, supply line leaks and AC overflows are the most common problems.',
      'We extract water, dry the structure and restore your home.',
    ],
  },

  'osprey-fl': {
    heroLead: 'Water damage in Osprey? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Oaks Club area', 'Historic Spanish Point area', 'Little Sarasota Bay waterfront', 'US-41 corridor'],
    about: [
      `Osprey is a coastal community on Little Sarasota Bay. ${STORMS_2024}`,
      'CWM extracts water, dries the structure and documents everything for insurance.',
    ],
  },

  'nokomis-fl': {
    heroLead: 'Water damage in Nokomis? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Casey Key', 'Nokomis Beach', 'Lyons Bay area', 'US-41 corridor'],
    about: [
      `Nokomis includes Casey Key and waterfront homes along Lyons Bay and Dona Bay. ${STORMS_2024}`,
      'We remove floodwater and damaged materials, dry the structure and prevent mold.',
    ],
  },

  'venice-fl': {
    heroLead: 'Water damage in Venice? CWM provides 24/7 water extraction, drying and mold remediation for homes, condos and businesses.',
    neighborhoods: ['Venice Island', 'Downtown Venice', 'Venice Gardens (nearby)', 'Waterford', 'Pelican Pointe', 'Venetian Golf & River Club', 'South Venice (nearby)'],
    about: [
      `Venice is a Gulf-coast city with historic homes on Venice Island and many 55+ and golf communities inland. ${STORMS_2024} Milton’s wind and rain caused widespread roof damage and leaks across the city.`,
      'CWM extracts water, dries the structure, treats mold and restores your home — and can keep seasonal residents updated remotely.',
    ],
  },

  'venice-gardens-fl': {
    heroLead: 'Water damage in Venice Gardens? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Venice Gardens residential', 'Jacaranda Blvd area', 'Venice Ave area'],
    about: [
      'Venice Gardens is a residential area of mostly 1960s and 70s homes east of Venice. Aging plumbing and roofs, and storm damage from Milton in 2024, are common sources of water damage.',
      'We extract water and dry your home.',
    ],
  },

  'south-venice-fl': {
    heroLead: 'Water damage in South Venice? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['South Venice Beach', 'Alligator Creek area', 'South Venice residential'],
    about: [
      `South Venice is a residential area of older homes along the Intracoastal and Lemon Bay. ${STORMS_2024}`,
      'CWM extracts water, dries the structure and prevents mold.',
    ],
  },

  'warm-mineral-springs-fl': {
    heroLead: 'Water damage in Warm Mineral Springs? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Warm Mineral Springs residential', 'US-41 corridor'],
    about: [
      'Warm Mineral Springs is a residential area within North Port, known for its natural spring. Roof leaks, plumbing failures and heavy-rain flooding are common.',
      'We extract water and dry your home.',
    ],
  },

  'north-port-fl': {
    heroLead: 'Water damage in North Port? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Warm Mineral Springs', 'Heron Creek', 'Bobcat Trail', 'Wellen Park', 'North Port Estates', 'Myakkahatchee Creek area'],
    about: [
      `North Port is one of Florida’s largest cities by land area, with many single-family homes and a network of drainage waterways. Hurricane Ian in 2022 caused major flooding along the Myakka River and Myakkahatchee Creek, and ${STORMS_2024.charAt(0).toLowerCase() + STORMS_2024.slice(1)}`,
      'CWM extracts water, removes damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'englewood-fl': {
    heroLead: 'Water damage in Englewood? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Dearborn St', 'Englewood Beach', 'Lemon Bay waterfront', 'Grove City', 'Englewood East'],
    about: [
      `Englewood sits on Lemon Bay, spanning Sarasota and Charlotte counties. ${STORMS_2024} Englewood and Manasota Key were among the hardest-hit areas.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for flood insurance.',
    ],
  },

  'manasota-key-fl': {
    heroLead: 'Water damage on Manasota Key? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Manasota Beach Rd area', 'Gulf-front homes', 'Lemon Bay homes'],
    about: [
      `Manasota Key is a narrow barrier island between the Gulf and Lemon Bay. ${STORMS_2024} Many homes on the key were heavily damaged.`,
      'We remove floodwater and contaminated materials, dry the structure and document the damage.',
    ],
  },

  // ---------- Charlotte County ----------
  'port-charlotte-fl': {
    heroLead: 'Water damage in Port Charlotte? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Harbor Heights (nearby)', 'Deep Creek', 'Gulf Cove', 'South Gulf Cove', 'Peachland', 'Murdock', 'Charlotte Harbor waterfront'],
    about: [
      `Port Charlotte is a large residential community of canal-front and inland homes along Charlotte Harbor and the Peace and Myakka rivers. ${IAN} Many homes have since had roofs and interiors rebuilt, and storms in 2024 caused more damage.`,
      'CWM extracts water, dries the structure, treats mold and restores your home, with full documentation for your insurance company.',
    ],
  },

  'punta-gorda-fl': {
    heroLead: 'Water damage in Punta Gorda? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Punta Gorda Isles', 'Burnt Store Isles', 'Historic Downtown', 'Burnt Store Marina', 'Seminole Lakes', 'Charlotte Harbor waterfront'],
    about: [
      `Punta Gorda sits where the Peace River meets Charlotte Harbor, with many canal-front homes in Punta Gorda Isles. ${IAN}`,
      'CWM extracts water, removes damaged materials, dries the structure and documents everything for insurance — and can keep seasonal residents updated remotely.',
    ],
  },

  'charlotte-harbor-fl': {
    heroLead: 'Water damage in Charlotte Harbor? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Charlotte Harbor residential', 'Peace River waterfront', 'US-41 corridor'],
    about: [
      `Charlotte Harbor is a community along the Peace River between Port Charlotte and Punta Gorda. ${IAN}`,
      'We extract water, dry the structure and prevent mold.',
    ],
  },

  'harbor-heights-fl': {
    heroLead: 'Water damage in Harbor Heights? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Harbor Heights residential', 'Peace River area', 'Kings Hwy area'],
    about: [
      `Harbor Heights is a residential community along the Peace River. River flooding is a real risk; ${IAN.charAt(0).toLowerCase() + IAN.slice(1)}`,
      'CWM extracts water and dries your home.',
    ],
  },

  'burnt-store-marina-fl': {
    heroLead: 'Water damage in Burnt Store Marina? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Burnt Store Marina condos', 'Burnt Store Rd corridor', 'Marina village homes'],
    about: [
      `Burnt Store Marina is a waterfront community of condos and homes on Charlotte Harbor. ${IAN}`,
      'We extract water, dry the structure and document the damage.',
    ],
  },

  'acline-fl': {
    heroLead: 'Water damage in Acline? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Acline residential', 'US-41 corridor'],
    about: [
      'Acline is a small community south of Punta Gorda. Roof leaks, plumbing failures and storm damage are the main risks.',
      'CWM extracts water and dries your home.',
    ],
  },

  'el-jobean-fl': {
    heroLead: 'Water damage in El Jobean? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['El Jobean residential', 'Myakka River area', 'SR-776 corridor'],
    about: [
      `El Jobean is a small community on the Myakka River. ${IAN}`,
      'We extract water and dry the structure.',
    ],
  },

  'rotonda-west-fl': {
    heroLead: 'Water damage in Rotonda West? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Rotonda West', 'Rotonda Lakes', 'Rotonda Shores', 'Rotonda Golf area'],
    about: [
      'Rotonda West is a circular planned community of golf-course and canal homes. Roof and window damage from Hurricane Ian in 2022 and the 2024 storms, aging water heaters and supply lines are common sources of water damage.',
      'CWM extracts water, dries the home and restores floors and walls.',
    ],
  },

  'cape-haze-fl': {
    heroLead: 'Water damage in Cape Haze? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Cape Haze residential', 'Placida Rd corridor', 'Lemon Bay area'],
    about: [
      `Cape Haze is a coastal community on the Cape Haze peninsula. ${STORMS_2024}`,
      'We extract water and dry your home.',
    ],
  },

  'placida-fl': {
    heroLead: 'Water damage in Placida? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Placida waterfront', 'Gasparilla Sound area', 'Boca Grande Causeway area'],
    about: [
      `Placida is a small fishing village on Gasparilla Sound near the Boca Grande Causeway. ${STORMS_2024}`,
      'CWM extracts water, dries the structure and documents the damage.',
    ],
  },

  // ---------- DeSoto County ----------
  'lake-suzy-fl': {
    heroLead: 'Water damage in Lake Suzy? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Lake Suzy residential', 'Kings Hwy area', 'Peace River area'],
    about: [
      'Lake Suzy is a small residential community near the Peace River and the Charlotte County line. River flooding, roof leaks and storm damage are the main risks; Hurricane Ian caused heavy flooding along the Peace River in 2022.',
      'CWM extracts water and dries your home.',
    ],
  },
};
