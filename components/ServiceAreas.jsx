import Link from 'next/link';
import { REGIONS, CITY_PAGES_LIVE, cityPath } from '@/lib/cities';

// Reusable on future city pages as well.
export default function ServiceAreas({ heading = 'Water Damage Restoration Service Areas in Florida' }) {
  return (
    <section className="section areas" id="service-areas" aria-labelledby="areas-title">
      <div className="container">
        <p className="eyebrow">Statewide coverage</p>
        <h2 id="areas-title">{heading}</h2>
        <p className="section-lead">
          CWM provides emergency water damage restoration, flood cleanup, fire and smoke damage restoration, mold
          remediation and water-damaged floor repair in every major Florida city — from Miami-Dade and Broward up
          through Tampa Bay, Orlando, Jacksonville, the Panhandle and the Florida Keys.
        </p>
        <div className="areas-grid">
          {REGIONS.map((r) => (
            <div className="area-col" key={r.slug}>
              <h3>{r.name}</h3>
              <ul>
                {r.cities.map((c) => (
                  <li key={c.slug}>
                    {CITY_PAGES_LIVE ? (
                      <Link href={cityPath(c)} title={`Water damage restoration in ${c.name}, FL`}>
                        {c.name}
                      </Link>
                    ) : (
                      <span>{c.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
