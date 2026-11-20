// Local text for each city landing page, keyed by city slug (see lib/cities.js).
// A city only gets a page at /water-damage-restoration/<slug> once it has an entry here.
//
// heroLead     — one or two sentences under the H1
// neighborhoods — areas listed in the "Areas We Cover" box
// zips          — ZIP codes (US Census ZCTAs that overlap the city)
// about         — paragraphs for the "Water Damage Restoration in <City>" section; keep them specific to the city
// localFaqs     — extra FAQs that only make sense for this city: [{ q, a }]

export const CITY_CONTENT = {
  'pompano-beach-fl': {
    heroLead:
      'Burst pipe, AC leak, roof leak or storm flooding in Pompano Beach? CWM sends a restoration crew 24/7 to extract the water, dry your home or condo and stop mold before it starts — from the beachfront high-rises on A1A to the homes west of I-95.',
    neighborhoods: [
      'Beachfront & A1A condos',
      'Downtown / Old Pompano',
      'Harbor Village',
      'Garden Isles',
      'Cresthaven',
      'Leisureville',
      'Palm Aire',
      'Cypress Bend',
      'Pompano Beach Highlands',
    ],
    zips: ['33060', '33062', '33064', '33069'],
    about: [
      'Pompano Beach stretches from the Atlantic beaches and the Intracoastal Waterway west past I-95 and the Florida Turnpike, so the water damage we see here is just as varied. Along A1A and the waterfront neighborhoods, it is often wind-driven rain, storm surge and king-tide flooding. In the condo towers, one leaking water heater, supply line or AC drain pan can soak the units below before anyone notices. Inland, older single-family homes built in the 1950s through the 1970s still have aging galvanized or cast-iron plumbing that can fail without warning.',
      'Heavy rain is a real risk too. When a storm stalls over Broward County — like the April 2023 rainstorm that flooded streets and homes across the county — canals and storm drains back up quickly in low-lying areas near the Cypress Creek Canal and the Intracoastal. Standing water and South Florida humidity let mold start growing within 24 to 48 hours, which is why fast extraction and professional drying matter so much here.',
      'CWM handles the whole job in Pompano Beach: emergency water removal, moisture mapping with meters and thermal cameras, structural drying, mold remediation, sewage cleanup, fire and smoke damage restoration, and repair of water-damaged tile, laminate and hardwood floors. We document every step with photos and drying logs for your insurance company, and for condos we can coordinate with your association and building management.',
    ],
    localFaqs: [
      {
        q: 'A leak in the condo above damaged my Pompano Beach unit. Who pays for the repairs?',
        a: 'It depends on where the leak started and on your association’s declaration. In general the association handles common elements, while each owner’s HO-6 policy covers the inside of their unit. Either way, start drying right away: we extract the water, document the source and the damage with photos and moisture readings, and give you and your association a clear report for the insurance claims.',
      },
      {
        q: 'My Pompano Beach home flooded from rain or a king tide. Is that covered?',
        a: 'Rising water from outside — storm surge, tidal flooding or water coming in at ground level — is usually covered by flood insurance (NFIP or private), not a standard homeowners policy. Water that comes through a storm-damaged roof or window is often handled by your homeowners policy. We document the cause carefully so your claim goes to the right policy.',
      },
    ],
  },
};
