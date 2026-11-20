// Lee and Collier county city pages. See lib/cityContent/index.js for the field guide.
const IAN = 'Hurricane Ian made landfall in Southwest Florida in September 2022 as a Category 4 storm, and its storm surge flooded thousands of homes across Lee and Collier counties.';
const IAN_LC = IAN.charAt(0).toLowerCase() + IAN.slice(1);

export const LEE_COLLIER = {
  // ---------- Lee County ----------
  'fort-myers-fl': {
    heroLead:
      'Water damage in Fort Myers? CWM answers 24/7 and sends a crew to extract the water, dry your home, condo or business and stop mold — from the River District and McGregor to Gateway and the Colonial corridor.',
    neighborhoods: ['Downtown / River District', 'McGregor Blvd', 'Edison Park', 'Whiskey Creek', 'Gateway', 'Dunbar', 'Colonial Blvd corridor', 'Villas', 'Fort Myers Shores (nearby)'],
    about: [
      `Fort Myers sits along the Caloosahatchee River, with historic homes on McGregor Boulevard, riverfront condos downtown and newer communities to the east. ${IAN} Riverfront neighborhoods and the downtown River District took on surge water, and many homes are still being restored.`,
      'Older homes near downtown and McGregor have original plumbing, wood floors and plaster that need careful drying, while condos see leaks spread from unit to unit. CWM extracts water, removes flood-damaged materials, dries the structure, treats mold and documents everything for flood and homeowners insurance.',
    ],
  },

  'cape-coral-fl': {
    heroLead:
      'Water damage in Cape Coral? CWM provides 24/7 water extraction, drying and mold remediation for canal-front and inland homes across the Cape.',
    neighborhoods: ['Cape Coral Yacht Club area', 'Southwest Cape', 'Southeast Cape', 'Pelican', 'Cape Harbour', 'Tarpon Point', 'Northwest Cape', 'Cape Coral Pkwy corridor'],
    about: [
      `Cape Coral has more than 400 miles of canals, and many homes sit right on the water. ${IAN} The southern canal neighborhoods closest to the Caloosahatchee were hit hardest, and wind-driven rain damaged roofs across the city.`,
      'Many Cape homes were built from the 1960s through the 2000s on slab foundations with tile floors. CWM extracts water, removes damaged drywall and flooring, dries the slab and framing, treats mold and documents everything for your insurance company.',
    ],
  },

  'fort-myers-beach-fl': {
    heroLead: 'Water damage on Fort Myers Beach? CWM provides 24/7 flood cleanup, water extraction, drying and mold remediation.',
    neighborhoods: ['Times Square', 'Estero Blvd', 'San Carlos Island', 'Bay Beach', 'Matanzas Pass area'],
    about: [
      `Fort Myers Beach on Estero Island took the full force of Hurricane Ian’s storm surge in September 2022, and much of the island has been rebuilt since. Helene and Milton brought more surge and wind in 2024.`,
      'CWM removes floodwater and contaminated materials, dries the structure and documents everything for flood insurance — for owners, rental managers and businesses.',
    ],
  },

  'bonita-springs-fl': {
    heroLead: 'Water damage in Bonita Springs? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Old 41 / Downtown Bonita', 'Bonita Beach', 'Imperial River area', 'Bonita Bay', 'Pelican Landing', 'Spanish Wells', 'Hunters Ridge'],
    about: [
      `Bonita Springs runs from Bonita Beach on the Gulf to communities along the Imperial River and I-75. The Imperial River has flooded nearby neighborhoods during heavy rain, and ${IAN_LC}`,
      'CWM extracts water, removes damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'estero-fl': {
    heroLead: 'Water damage in Estero? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['The Brooks', 'Shadow Wood', 'Grandezza', 'Wildcat Run', 'Coconut Point area', 'Estero River area'],
    about: [
      'Estero is a village of gated golf and country-club communities between Fort Myers and Bonita Springs. Most homes are newer, with large tile and wood floors; water heater, supply line and AC leaks are the most common problems, and low areas near the Estero River can flood.',
      'We find hidden moisture with thermal imaging, dry the home and restore floors and cabinetry — and can keep seasonal residents updated remotely.',
    ],
  },

  'north-fort-myers-fl': {
    heroLead: 'Water damage in North Fort Myers? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Lochmoor', 'Suncoast Estates', 'Hancock Bridge Pkwy area', 'Caloosahatchee riverfront', 'Mobile home communities'],
    about: [
      `North Fort Myers lies across the Caloosahatchee from downtown Fort Myers, with riverfront homes, mobile home communities and older neighborhoods. ${IAN}`,
      'CWM extracts water, dries the structure and documents everything for insurance.',
    ],
  },

  'cypress-lake-fl': {
    heroLead: 'Water damage in Cypress Lake? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Cypress Lake Dr area', 'Summerlin Rd corridor', 'Cypress Lake Country Club area'],
    about: [
      'Cypress Lake is a residential area south of Fort Myers with many homes and condos from the 1960s through the 1980s. Aging plumbing, roofs and AC systems are common sources of leaks.',
      'We extract water and dry your home.',
    ],
  },

  'iona-fl': {
    heroLead: 'Water damage in Iona? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['McGregor Blvd corridor', 'Punta Rassa area', 'Iona canal homes'],
    about: [
      `Iona sits between Fort Myers and the Sanibel Causeway, with many canal-front homes. ${IAN}`,
      'CWM removes floodwater and damaged materials, dries the structure and documents the damage.',
    ],
  },

  'tice-fl': {
    heroLead: 'Water damage in Tice? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Tice residential', 'Palm Beach Blvd corridor', 'Caloosahatchee area'],
    about: [
      'Tice is a community east of downtown Fort Myers with older homes and mobile homes. Roof leaks, plumbing failures and flooding are the main risks.',
      'We extract water and dry your home.',
    ],
  },

  'san-carlos-park-fl': {
    heroLead: 'Water damage in San Carlos Park? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['San Carlos Park residential', 'US-41 corridor', 'Three Oaks Pkwy area'],
    about: [
      'San Carlos Park is a residential area between Fort Myers and Estero. Low ground can flood during heavy rain, and older homes have aging plumbing and roofs.',
      'CWM extracts water and dries the structure.',
    ],
  },

  'pine-island-fl': {
    heroLead: 'Water damage on Pine Island? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Bokeelia', 'Pineland', 'Pine Island Center', 'St. James City', 'Matlacha'],
    about: [
      `Pine Island is Lee County’s largest island, with small communities, canal homes and mobile homes. ${IAN} Pine Island and Matlacha were among the hardest-hit areas.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'matlacha-fl': {
    heroLead: 'Water damage in Matlacha? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['Pine Island Rd', 'Matlacha Pass waterfront', 'Matlacha Isles'],
    about: [
      `Matlacha is a small fishing village on the road to Pine Island. ${IAN}`,
      'We remove floodwater, sanitize and dry the structure.',
    ],
  },

  'st-james-city-fl': {
    heroLead: 'Water damage in St. James City? CWM provides 24/7 flood cleanup, water extraction and drying.',
    neighborhoods: ['St. James City canal homes', 'Monroe Canal area', 'Stringfellow Rd'],
    about: [
      `St. James City is at the southern tip of Pine Island, with many canal-front homes. ${IAN}`,
      'CWM extracts water, dries the structure and documents the damage.',
    ],
  },

  'bokeelia-fl': {
    heroLead: 'Water damage in Bokeelia? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Bokeelia waterfront', 'Main St Bokeelia', 'Stringfellow Rd'],
    about: [
      `Bokeelia is at the northern tip of Pine Island. ${IAN}`,
      'We extract water and dry your home.',
    ],
  },

  'pineland-fl': {
    heroLead: 'Water damage in Pineland? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Pineland waterfront', 'Pineland Rd'],
    about: [
      `Pineland is a small historic community on the west side of Pine Island. ${IAN}`,
      'CWM extracts water and dries the structure.',
    ],
  },

  'boca-grande-fl': {
    heroLead: 'Water damage in Boca Grande? CWM provides careful 24/7 water extraction, drying and restoration.',
    neighborhoods: ['Boca Grande Village', 'Gulf Blvd', 'Gasparilla Island homes'],
    about: [
      `Boca Grande is the historic village on Gasparilla Island, with many older homes and fine finishes. ${IAN} The 2024 storms brought more surge.`,
      'We extract water, dry the structure carefully and document everything for insurance — and can coordinate with property managers for seasonal owners.',
    ],
  },

  'cayo-costa-fl': {
    heroLead: 'Water damage on Cayo Costa? CWM can help with water extraction and drying for island properties.',
    neighborhoods: ['Cayo Costa island properties'],
    about: [
      'Cayo Costa is a barrier island reachable only by boat, mostly a state park with a few private properties. Hurricane Ian made landfall here in September 2022.',
      'Call us to discuss access and timing for water extraction and drying.',
    ],
  },

  // ---------- Collier County ----------
  'naples-fl': {
    heroLead:
      'Water damage in Naples? CWM answers 24/7 and sends a crew to extract the water, dry your home, condo or business and stop mold — from Old Naples and Port Royal to Park Shore and Golden Gate.',
    neighborhoods: ['Old Naples', 'Port Royal', 'Aqualane Shores', 'Park Shore', 'Moorings', 'Coquina Sands', 'Royal Harbor', 'Olde Naples / 5th Ave S', 'Lake Park'],
    about: [
      `Naples is a coastal city of historic cottages, luxury estates and Gulf-front condos. ${IAN} Old Naples, Port Royal, Aqualane Shores and Royal Harbor saw significant surge flooding.`,
      'Many homes have high-end finishes — hardwood, marble and custom cabinetry — that need careful drying and restoration. CWM extracts water, removes damaged materials, dries the structure, treats mold and documents everything for insurance, and can work with property managers for seasonal residents.',
    ],
  },

  'naples-park-fl': {
    heroLead: 'Water damage in Naples Park? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Naples Park residential', 'Vanderbilt Beach area', 'US-41 corridor'],
    about: [
      `Naples Park is a neighborhood of older homes near Vanderbilt Beach. ${IAN} Naples Park was one of the most heavily flooded neighborhoods in Collier County.`,
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'pelican-bay-fl': {
    heroLead: 'Water damage in Pelican Bay? CWM provides careful 24/7 water extraction, drying and restoration.',
    neighborhoods: ['Pelican Bay condos', 'Pelican Bay homes', 'Waterside Shops area'],
    about: [
      'Pelican Bay is a planned community of Gulf-front condo towers and homes in north Naples. Leaks between stacked units and wind-driven rain during storms are the main risks.',
      'We work with owners, associations and building management to extract water, dry each unit and document the damage.',
    ],
  },

  'pelican-marsh-fl': {
    heroLead: 'Water damage in Pelican Marsh? CWM provides 24/7 water extraction, drying and restoration.',
    neighborhoods: ['Pelican Marsh Golf Club area', 'Pelican Marsh residential'],
    about: [
      'Pelican Marsh is a gated golf community in north Naples with homes built since the 1990s. Water heater, supply line and AC leaks are the most common problems.',
      'CWM dries the structure and restores floors and finishes.',
    ],
  },

  'vineyards-fl': {
    heroLead: 'Water damage in Vineyards? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Vineyards Country Club area', 'Vanderbilt Beach Rd area'],
    about: [
      'Vineyards is a golf community in northeast Naples with homes and villas from the late 1980s onward. Aging water heaters, supply lines and AC systems cause most leaks.',
      'We extract water and dry the home.',
    ],
  },

  'island-walk-fl': {
    heroLead: 'Water damage in Island Walk? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Island Walk residential', 'Vanderbilt Beach Rd area'],
    about: [
      'Island Walk is a gated community of homes and villas built around lakes in north Naples. Plumbing, water heater and AC leaks are the most common problems.',
      'CWM extracts water and dries your home.',
    ],
  },

  'heritage-bay-fl': {
    heroLead: 'Water damage in Heritage Bay? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Heritage Bay Golf & Country Club', 'Immokalee Rd area'],
    about: [
      'Heritage Bay is a gated golf community in northeast Naples with newer homes and condos. Water heater, supply line and AC leaks are the main sources of water damage.',
      'We extract water and dry the structure.',
    ],
  },

  'golden-gate-fl': {
    heroLead: 'Water damage in Golden Gate? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Golden Gate City', 'Golden Gate Pkwy corridor', 'Santa Barbara Blvd area'],
    about: [
      'Golden Gate is a residential area east of Naples with many homes and apartments from the 1960s through the 1990s. Aging plumbing, roofs and heavy-rain flooding are common sources of damage.',
      'CWM extracts water, dries the structure and prevents mold.',
    ],
  },

  'berkshire-lakes-fl': {
    heroLead: 'Water damage in Berkshire Lakes? CWM provides 24/7 water extraction and drying.',
    neighborhoods: ['Berkshire Lakes residential', 'Davis Blvd area', 'Santa Barbara Blvd area'],
    about: [
      'Berkshire Lakes is a residential community of homes and villas east of Naples. Aging water heaters, supply lines and roofs are common sources of leaks.',
      'We extract water and dry your home.',
    ],
  },

  'lely-fl': {
    heroLead: 'Water damage in Lely? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Lely residential', 'US-41 / Rattlesnake Hammock area'],
    about: [
      'Lely is a residential area in East Naples with homes from the 1970s onward. Aging plumbing and roofs, and flooding during storms like Ian, are the main risks.',
      'CWM extracts water and dries the structure.',
    ],
  },

  'lely-resort-fl': {
    heroLead: 'Water damage in Lely Resort? CWM provides 24/7 water extraction, drying and mold remediation.',
    neighborhoods: ['Lely Resort Golf & Country Club', 'Collier Blvd area'],
    about: [
      'Lely Resort is a gated golf community in East Naples with homes and condos built since the 1990s. Water heater, supply line and AC leaks are the most common problems.',
      'We extract water and dry your home.',
    ],
  },

  'marco-island-fl': {
    heroLead: 'Water damage on Marco Island? CWM provides 24/7 water extraction, drying, mold remediation and flood cleanup.',
    neighborhoods: ['Marco Island beachfront condos', 'Estates section', 'Hideaway Beach', 'Old Marco', 'Marco canal homes'],
    about: [
      `Marco Island is a barrier island of canal-front homes and Gulf-front condos. ${IAN}`,
      'CWM extracts water, removes damaged materials, dries the structure and documents everything for insurance — and works with associations and property managers.',
    ],
  },

  'goodland-fl': {
    heroLead: 'Water damage in Goodland? CWM provides 24/7 flood cleanup and drying.',
    neighborhoods: ['Goodland village', 'Goodland waterfront'],
    about: [
      `Goodland is a small fishing village on the southeast side of Marco Island. ${IAN}`,
      'We remove floodwater and dry the structure.',
    ],
  },

  'everglades-city-fl': {
    heroLead: 'Water damage in Everglades City? CWM provides 24/7 flood cleanup and drying.',
    neighborhoods: ['Everglades City', 'Chokoloskee (nearby)', 'Plantation Island (nearby)'],
    about: [
      'Everglades City is a small town at the edge of the Ten Thousand Islands. It was flooded by storm surge during Hurricane Irma in 2017 and again during Hurricane Ian in 2022.',
      'CWM removes floodwater and damaged materials, dries the structure and documents everything for insurance.',
    ],
  },

  'chokoloskee-fl': {
    heroLead: 'Water damage in Chokoloskee? CWM provides 24/7 flood cleanup and drying.',
    neighborhoods: ['Chokoloskee Island'],
    about: [
      'Chokoloskee is a small island community south of Everglades City. Storm surge from hurricanes is the main risk.',
      'We remove floodwater and dry the structure.',
    ],
  },
};
