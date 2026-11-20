import { MAP_CITIES, cityPathByName } from '@/lib/cities';
import { FL_MAP, FL_PATH, NEIGHBOR_PATH } from '@/lib/florida-map';

const project = ({ lat, lon }) => ({
  x: (lon - FL_MAP.lon0) * FL_MAP.cos * FL_MAP.k,
  y: (FL_MAP.lat1 - lat) * FL_MAP.k,
});

const LABEL = {
  l: { dx: -16, dy: 8, anchor: 'end' },
  r: { dx: 16, dy: 8, anchor: 'start' },
  t: { dx: 0, dy: -18, anchor: 'middle' },
  b: { dx: 0, dy: 34, anchor: 'middle' },
};

// Reusable on future city pages as well.
export default function ServiceAreas({ heading = 'Water Damage Restoration Service Areas in Florida' }) {
  const pins = MAP_CITIES.map((c) => ({ ...c, ...project(c) }));
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
        <figure className="fl-map">
          <svg
            viewBox={`0 0 ${FL_MAP.width} ${FL_MAP.height}`}
            role="img"
            aria-labelledby="fl-map-title"
          >
            <title id="fl-map-title">
              Map of Florida showing CWM service cities: {MAP_CITIES.map((c) => c.name).join(', ')}
            </title>
            <path d={NEIGHBOR_PATH} className="fl-neighbor" />
            <text x="250" y="45" className="fl-state">ALABAMA</text>
            <text x="700" y="45" className="fl-state">GEORGIA</text>
            <text x="250" y="520" className="fl-sea">Gulf of Mexico</text>
            <text x="1080" y="400" className="fl-sea">Atlantic</text>
            <text x="1080" y="432" className="fl-sea">Ocean</text>
            <path d={FL_PATH} className="fl-land" />
            {pins.map((p) => {
              const l = LABEL[p.label];
              return (
                <a key={p.name} href={cityPathByName(p.name)} className={`fl-pin tier-${p.tier}`} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`}>
                  <title>{`Water damage restoration in ${p.name}, FL`}</title>
                  <circle r="24" className="fl-hit" />
                  <circle r="16" className="fl-pulse" />
                  <circle r={p.tier === 1 ? 8 : 6} className="fl-dot" />
                  <text x={l.dx} y={l.dy} textAnchor={l.anchor} className={`fl-label${p.short ? ' has-short' : ''}`}>{p.name}</text>
                  {p.short && (
                    <text x={l.dx} y={l.dy} textAnchor={l.anchor} className="fl-label fl-label-short" aria-hidden="true">{p.short}</text>
                  )}
                </a>
              );
            })}
          </svg>
          <figcaption>
            <span className="fl-key" aria-hidden="true" /> 24/7 crews dispatched to these cities and everywhere in between
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
