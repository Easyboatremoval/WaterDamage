// Local text for each city landing page, keyed by city slug (see lib/cityData.js).
// A city only gets a page at /water-damage-restoration/<slug> once it has an entry here.
//
// heroLead      — one or two sentences under the H1
// neighborhoods — areas listed in the "Areas We Cover" box
// zips          — optional; defaults to the Census ZIP codes in lib/cityData.js
// about         — paragraphs for the "Water Damage Restoration in <City>" section; keep them specific to the city
// localFaqs     — optional extra FAQs that only make sense for this city: [{ q, a }]
import { BROWARD } from './broward';
import { MIAMI_DADE } from './miami-dade';
import { PALM_BEACH } from './palm-beach';
import { TAMPA_BAY } from './tampa-bay';
import { SARASOTA_MANATEE_CHARLOTTE } from './sarasota-manatee-charlotte';
import { LEE_COLLIER } from './lee-collier';
import { STATEWIDE } from './statewide';

export const CITY_CONTENT = {
  ...MIAMI_DADE,
  ...BROWARD,
  ...PALM_BEACH,
  ...TAMPA_BAY,
  ...SARASOTA_MANATEE_CHARLOTTE,
  ...LEE_COLLIER,
  ...STATEWIDE,
};
