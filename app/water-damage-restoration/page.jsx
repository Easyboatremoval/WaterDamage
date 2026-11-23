import Link from 'next/link';
import Icon from '@/components/Icons';
import ServiceAreas from '@/components/ServiceAreas';
import { SITE } from '@/lib/site';
import { CITIES_WITH_PAGES, cityPath } from '@/lib/cities';

// Hub page listing every city that has its own landing page, grouped by county.
const PATH = '/water-damage-restoration';

// Counties in rough geographic order: South Florida → Keys → Gulf coast → Tampa Bay → Central → East coast → North & Panhandle.
const COUNTY_ORDER = [
  'Miami-Dade', 'Broward', 'Palm Beach', 'Monroe',
  'Collier', 'Lee', 'Charlotte', 'DeSoto', 'Sarasota', 'Manatee',
  'Hillsborough', 'Pinellas', 'Pasco', 'Polk', 'Orange',
  'Volusia', 'Brevard', 'Indian River', 'St. Lucie',
  'Marion', 'Alachua', 'St. Johns', 'Duval', 'Leon', 'Bay', 'Okaloosa', 'Escambia',
];

function byCounty() {
  const groups = new Map();
  for (const c of CITIES_WITH_PAGES) {
    if (!groups.has(c.county)) groups.set(c.county, []);
    groups.get(c.county).push(c);
  }
  const rank = (county) => (COUNTY_ORDER.includes(county) ? COUNTY_ORDER.indexOf(county) : COUNTY_ORDER.length);
  return [...groups.entries()]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([county, cities]) => ({ county, cities: cities.sort((a, b) => a.name.localeCompare(b.name)) }));
}

const countySlug = (county) => county.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const metadata = {
  title: { absolute: 'Water Damage Restoration Service Areas in Florida | All Cities | CWM' },
  description: `CWM provides 24/7 water damage restoration, flood cleanup, mold remediation and fire damage restoration in ${CITIES_WITH_PAGES.length}+ Florida cities. Find your city or call ${SITE.phone}.`,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    url: PATH,
    siteName: SITE.name,
    title: 'Florida Service Areas | CWM Water Damage Restoration',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'CWM water damage restoration service areas in Florida' }],
  },
};

export default function ServiceAreasPage() {
  const groups = byCounty();
  const url = `${SITE.url}${PATH}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: url },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Florida cities served by CWM Water Damage Restoration',
        numberOfItems: CITIES_WITH_PAGES.length,
        itemListElement: groups
          .flatMap((g) => g.cities)
          .map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: `${c.name}, FL`, url: `${SITE.url}${cityPath(c)}` })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <section className="hero page-hero" aria-labelledby="sa-title">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Service Areas</li>
            </ol>
          </nav>
          <h1 id="sa-title">
            Cities We Serve <span>Across Florida</span>
          </h1>
          <p className="hero-lead">
            CWM provides 24/7 water damage restoration, flood cleanup, mold remediation and fire damage restoration in{' '}
            {CITIES_WITH_PAGES.length} Florida cities and everywhere in between. Pick your city below, or call now and
            we&apos;ll dispatch the nearest crew.
          </p>
          <div className="hero-ctas">
            <a href={SITE.phoneHref} className="btn btn-call btn-lg">
              <Icon name="phone" size={20} /> Call {SITE.phone}
            </a>
            <a href="/#estimate" className="btn btn-ghost btn-lg">Request FREE Estimate</a>
          </div>
          <nav aria-label="Jump to county" className="county-jump">
            {groups.map((g) => (
              <a key={g.county} href={`#${countySlug(g.county)}`}>{g.county}</a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section" aria-label="Cities by county">
        <div className="container county-list">
          {groups.map((g) => (
            <section key={g.county} id={countySlug(g.county)} className="county-block" aria-labelledby={`h-${countySlug(g.county)}`}>
              <h2 id={`h-${countySlug(g.county)}`}>
                {g.county} County <small>{g.cities.length} {g.cities.length === 1 ? 'city' : 'cities'}</small>
              </h2>
              <ul>
                {g.cities.map((c) => (
                  <li key={c.slug}>
                    <Link href={cityPath(c)} title={`Water damage restoration in ${c.name}, FL`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <ServiceAreas heading="Map of Our Florida Service Areas" />
    </>
  );
}
