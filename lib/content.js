// Homepage content. Service names and bullets are written around the
// keyword clusters in SEO-KEYWORDS.md — edit wording here, not in components.

export const SERVICES = [
  {
    id: 'water-damage-restoration',
    icon: 'drop',
    title: 'Water Damage Restoration',
    lead: 'Emergency water removal, water extraction and structural drying for homes and businesses.',
    body: 'Burst pipes, AC drain line overflows, water heater failures and roof leaks are the most common calls we get. We extract standing water with truck-mounted and portable pumps, find hidden moisture with meters and thermal imaging, and dry walls, ceilings and cabinets in place whenever possible.',
    bullets: ['Emergency water extraction', 'Burst pipe & leak water damage', 'Ceiling & drywall water damage', 'Structural drying & dehumidification'],
  },
  {
    id: 'flood-storm-damage',
    icon: 'wave',
    title: 'Flood & Hurricane Damage Cleanup',
    lead: 'Flood cleanup, storm surge mud-out and emergency roof tarping after Florida storms.',
    body: 'After a hurricane or tropical storm we remove flood water, mud and debris, make flood cuts to open wet walls, tarp damaged roofs and board up openings to stop further damage. Flood water is treated as contaminated, so every affected surface is cleaned and sanitized.',
    bullets: ['Flood water removal & mud-out', 'Hurricane & storm damage restoration', 'Emergency roof tarping & board-up', 'Flood cuts & debris removal'],
  },
  {
    id: 'fire-smoke-damage',
    icon: 'flame',
    title: 'Fire & Smoke Damage Restoration',
    lead: 'Soot removal, smoke odor removal and cleanup after fire and firefighting water.',
    body: 'A fire leaves three problems behind: charred materials, acidic soot that keeps etching surfaces, and water from the fire hose. We secure the property, remove soot and smoke residue, deodorize with HEPA air scrubbers and hydroxyl or ozone treatment, and dry out everything the firefighting water reached.',
    bullets: ['Fire damage cleanup', 'Soot & smoke residue removal', 'Smoke odor removal', 'Water damage from firefighting'],
  },
  {
    id: 'mold-remediation',
    icon: 'mold',
    title: 'Mold Remediation & Mold Mitigation',
    lead: 'Mold inspection, containment and mold removal — and drying that stops it from coming back.',
    body: 'In Florida humidity, mold can start growing within 24 to 48 hours of a water event. Mold mitigation means drying fast so it never takes hold; mold remediation means containing, removing and cleaning an existing growth under negative air pressure with HEPA filtration, then fixing the moisture source.',
    bullets: ['Mold inspection & moisture mapping', 'Containment & HEPA air filtration', 'Mold removal & antimicrobial treatment', 'Mildew & musty odor removal'],
  },
  {
    id: 'water-damaged-floor-repair',
    icon: 'floor',
    title: 'Water-Damaged Floor Restoration',
    lead: 'Drying and saving hardwood, laminate, tile, vinyl and carpet before they warp or delaminate.',
    body: 'Wet floors hide water underneath. We use floor drying mats on hardwood, pull and dry wet carpet pad, check the subfloor and slab for moisture, and remove only what cannot be saved — cupped laminate, lifted vinyl plank or loose tile — so replacement stays limited.',
    bullets: ['Hardwood floor water damage', 'Laminate & vinyl plank flooring', 'Carpet & pad drying', 'Subfloor & concrete slab drying'],
  },
  {
    id: 'sewage-cleanup',
    icon: 'shield',
    title: 'Sewage Backup Cleanup',
    lead: 'Safe cleanup and sanitizing after toilet overflows, sewer backups and black water.',
    body: 'Sewage is Category 3 “black water” and needs protective equipment, removal of porous materials it touched, and disinfection. We contain the area, extract the water, clean and sanitize every surface, and verify the space is dry before rebuild.',
    bullets: ['Sewer & toilet backup cleanup', 'Black water (Category 3) removal', 'Disinfection & sanitizing', 'Odor control'],
  },
];

export const TIMELINE = [
  { when: 'First minutes', text: 'Water spreads through the floor, wicks into drywall and baseboards and soaks furniture, rugs and stored items.' },
  { when: '1 – 24 hours', text: 'Drywall swells and crumbles, wood furniture and cabinets start to warp, and a musty smell begins.' },
  { when: '24 – 72 hours', text: 'Mold can begin to grow, hardwood floors cup, paint blisters and metal starts to corrode.' },
  { when: 'After a week', text: 'Mold spreads, structural wood is compromised and restoration cost and time go up sharply.' },
];

export const PROCESS = [
  { title: 'Call us 24/7', text: 'A real person answers, gets the details and dispatches a crew to your Florida property.' },
  { title: 'Inspection & moisture mapping', text: 'We find the source, map wet areas with moisture meters and thermal imaging, and photograph everything.' },
  { title: 'Water extraction', text: 'Standing water is pumped and extracted. Wet materials that cannot be saved are removed.' },
  { title: 'Drying & dehumidification', text: 'Air movers and commercial dehumidifiers dry the structure, checked with daily moisture readings.' },
  { title: 'Clean, sanitize & restore', text: 'Surfaces are cleaned and treated against mold, and your home is put back the way it was.' },
];

export const GALLERY = [
  { src: '/images/structural-drying-air-movers-dehumidifier.webp', alt: 'Air movers and a dehumidifier drying a bathroom after water damage', caption: 'Structural drying with air movers & dehumidifier' },
  { src: '/images/flood-damage-living-room-mud-cleanup.webp', alt: 'Living room covered in mud and debris after hurricane flooding in Florida', caption: 'Flood mud-out after storm surge' },
  { src: '/images/flood-cut-wall-demolition-studs.webp', alt: 'Walls opened to the studs with flood cuts after water damage', caption: 'Flood cuts to dry wall cavities' },
  { src: '/images/emergency-roof-tarping-storm-damage.webp', alt: 'Blue emergency tarp installed on a shingle roof after hurricane damage', caption: 'Emergency roof tarping' },
  { src: '/images/water-damaged-drywall-removal.webp', alt: 'Wet drywall removed and piled after a water leak', caption: 'Wet drywall removal' },
  { src: '/images/ceiling-damage-restoration-exposed-joists.webp', alt: 'Ceiling opened to the joists after water and storm damage', caption: 'Ceiling tear-out & drying' },
  { src: '/images/hurricane-flood-damage-pool-enclosure-florida.webp', alt: 'Flooded pool enclosure with debris after a Florida hurricane', caption: 'Hurricane debris & flood cleanup' },
];

export const WAIT_TIPS = [
  'Shut off the main water valve if the leak is from plumbing.',
  'Turn off power to wet rooms at the breaker — only if you can reach it without standing in water.',
  'Move rugs, electronics, documents and valuables to a dry area.',
  'Take photos and video of everything before cleanup starts.',
  'Do not use a household vacuum on water, and stay out of rooms with sagging ceilings.',
  'Call your insurance company to open a claim — we can help from there.',
];

export const FAQS = [
  {
    q: 'How fast can you get to my property?',
    a: 'We answer the phone 24 hours a day, 7 days a week, including holidays, and dispatch the nearest crew right away. Call (954) 560-4422 and we will give you an arrival time for your city.',
  },
  {
    q: 'Does homeowners insurance cover water damage in Florida?',
    a: 'Most policies cover sudden and accidental water damage, like a burst pipe or appliance failure. Damage from slow, long-term leaks is often excluded, and rising flood water usually needs a separate flood insurance policy. We document the loss with photos, moisture readings and itemized reports and can work with your adjuster. Your policy wording decides what is covered.',
  },
  {
    q: 'How long does it take to dry out water damage?',
    a: 'Structural drying usually takes about 3 to 5 days, depending on how much water there was, the materials involved and the humidity. We take moisture readings every day and only remove equipment once materials are back to normal dry levels.',
  },
  {
    q: 'How soon does mold grow after water damage?',
    a: 'Mold can begin growing within 24 to 48 hours on wet drywall, wood and carpet, and Florida humidity speeds that up. That is why fast water extraction and drying matter so much.',
  },
  {
    q: 'What is the difference between mold mitigation and mold remediation?',
    a: 'Mold mitigation is preventing and limiting mold — drying quickly, controlling humidity and stopping it from spreading. Mold remediation is removing mold that is already growing: containment, HEPA air filtration, removal of affected materials, cleaning and antimicrobial treatment.',
  },
  {
    q: 'Can water-damaged hardwood or laminate floors be saved?',
    a: 'Often hardwood can be saved if drying starts quickly, using floor drying mats that pull moisture out from below. Laminate and some vinyl plank floors trap water underneath and usually need to be lifted so the subfloor can dry. We check moisture levels before deciding.',
  },
  {
    q: 'Do you handle fire and smoke damage too?',
    a: 'Yes. We handle fire damage cleanup, soot and smoke residue removal, smoke odor removal, board-up and the water damage left by firefighting.',
  },
  {
    q: 'Which areas of Florida do you serve?',
    a: 'We serve all of Florida — from Miami, Fort Lauderdale and West Palm Beach to Tampa, Orlando, Jacksonville, Naples, the Panhandle and the Keys. See the full list of cities below.',
  },
];
