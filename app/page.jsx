import Image from 'next/image';
import Icon from '@/components/Icons';
import QuoteForm from '@/components/QuoteForm';
import ServiceAreas from '@/components/ServiceAreas';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { SERVICES, TIMELINE, PROCESS, GALLERY, WAIT_TIPS, FAQS } from '@/lib/content';

const TRUST = [
  { icon: 'clock', title: '24/7/365'},
  { icon: 'pin', title: 'PROUDLY SERVING ALL OF FLORIDA'},
  { icon: 'doc', title: 'FULLY LICENSED AND INSURED'},
  { icon: 'home', title: 'RESIDENTIAL AND COMMERCIAL'},
];

export default function HomePage() {
  return (
    <>
      <JsonLd />

      {/* ---------- HERO ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">24/7 Emergency Water Damage Response</p>
            <h1 id="hero-title">
              FLORIDA'S MOST RELIABLE <span>WATER DAMAGE RESTORATION COMPANY</span>
            </h1>
            <p className="hero-lead">
              Flooded home? Mold? Burst pipe? Fire damage? Call CWM now — 24/7 emergency response. We stop the leak, remove the water and get rid of the mold.
            </p>
            <div className="hero-ctas">
              <a href={SITE.phoneHref} className="btn btn-call btn-lg">
                <Icon name="phone" size={20} /> Call {SITE.phone}
              </a>
              <a href="#estimate" className="btn btn-ghost btn-lg">Request FREE Estimate</a>
            </div>
            <ul className="hero-checks">
              <li><Icon name="check" size={18} /> Water &amp; flood damage</li>
              <li><Icon name="check" size={18} /> Mold removal &amp; mitigation</li> 
              <li><Icon name="check" size={18} /> Storm damage</li>
              <li><Icon name="check" size={18} /> Fire &amp; smoke damage</li>
              <li><Icon name="check" size={18} /> Roof tarping</li>
              <li><Icon name="check" size={18} /> Property damage restoration</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
        <svg className="hero-waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60c240 40 480 40 720 0s480-40 720 0v60H0Z" fill="#fff" fill-opacity="0.25" />
          <path d="M0 85c240 30 480 30 720 0s480-30 720 0v35H0Z" fill="#fff" fill-opacity="0.5" />
          <path d="M0 105c240 18 480 18 720 0s480-18 720 0v15H0Z" fill="#f5f8fc" />
        </svg>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="trust" aria-label="Why choose CWM">
        <div className="container trust-grid">
          {TRUST.map((t) => (
            <div className="trust-item" key={t.title}>
              <Icon name={t.icon} size={28} />
              <div>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
 {/* ---------- GALLERY ---------- */}
      <section className="section section-tint" aria-labelledby="work-title">
        <div className="container">
          <p className="eyebrow">From the field</p>
          <h2 id="work-title">Water, Flood &amp; Storm Damage Projects in Florida</h2>
          <div className="gallery">
            {GALLERY.map((g, i) => (
              <figure key={g.src} className={i === 0 ? 'gallery-feature' : undefined}>
                <Image src={g.src} alt={g.alt} width={480} height={640} sizes="(max-width: 700px) 50vw, 25vw" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section" id="services" aria-labelledby="services-title">
        <div className="container">
          <p className="eyebrow">What we restore</p>
          <h2 id="services-title">Water, Fire, Mold &amp; Flood Damage Restoration Services</h2>
          <p className="section-lead">
            One call covers the whole job — from emergency water removal and flood cleanup to fire and smoke damage
            restoration, mold remediation and saving water-damaged floors. Our technicians use commercial air movers,
            dehumidifiers, moisture meters and thermal imaging to find every pocket of water and dry it out fast.
          </p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <article className="service-card" id={s.id} key={s.id}>
                <div className="service-icon"><Icon name={s.icon} size={28} /></div>
                <h3>{s.title}</h3>
                <p className="service-lead">{s.lead}</p>
                <p>{s.body}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}><Icon name="check" size={16} /> {b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="section timeline-section" aria-labelledby="timeline-title">
        <div className="container">
          <p className="eyebrow eyebrow-light">Time ticks, damage worsens</p>
          <h2 id="timeline-title">Why Every Hour Matters After Water Damage</h2>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.when}>
                <span className="timeline-when">{t.when}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
          <div className="timeline-cta">
            <p>Water damage does not wait for business hours — and neither do we.</p>
            <a href={SITE.phoneHref} className="btn btn-call">
              <Icon name="phone" size={18} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section" id="process" aria-labelledby="process-title">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title">Our Water Damage Restoration Process</h2>
          <ol className="process">
            {PROCESS.map((p, i) => (
              <li key={p.title}>
                <span className="process-num">{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
     
      {/* ---------- FLORIDA CONTEXT + INSURANCE ---------- */}
      <section className="section" id="insurance" aria-labelledby="insurance-title">
        <div className="container split">
          <div>
            <p className="eyebrow">Florida homes &amp; insurance</p>
            <h2 id="insurance-title">Water Damage in Florida — and Your Insurance Claim</h2>
            <p>
              Florida properties face water from every direction: hurricanes and tropical storms, king tides and
              storm surge, roof leaks in summer downpours, failed AC drain lines and water heaters, and old plumbing in
              slab homes and condos. High humidity means wet drywall, carpet and wood stay wet longer — so mold
              mitigation starts the moment we arrive.
            </p>
            <p>
              We document each loss the way adjusters expect: date-stamped photos, moisture maps and daily drying
              logs, an itemized scope of work and equipment records. You get copies for your claim, and we can
              communicate directly with your insurance adjuster.
            </p>
            <ul className="checklist">
              <li><Icon name="check" size={18} /> Photo and video documentation of all damage</li>
              <li><Icon name="check" size={18} /> Moisture readings and drying logs</li>
              <li><Icon name="check" size={18} /> Itemized estimates for your adjuster</li>
              <li><Icon name="check" size={18} /> Help with homeowners and commercial claims</li>
            </ul>
          </div>
          <aside className="tips-card" aria-labelledby="tips-title">
            <h3 id="tips-title">What to do while you wait for us</h3>
            <ol>
              {WAIT_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
            <a href={SITE.phoneHref} className="btn btn-primary btn-block">
              <Icon name="phone" size={18} /> Call {SITE.phone}
            </a>
          </aside>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section-tint" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">Water Damage Restoration FAQ</h2>
          <div className="faq">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <div>
            <h2 id="cta-title">Water in your home right now?</h2>
            <p>Call CWM 24/7. The sooner drying starts, the less you lose.</p>
          </div>
          <a href={SITE.phoneHref} className="btn btn-call btn-lg">
            <Icon name="phone" size={20} /> {SITE.phone}
          </a>
        </div>
      </section>

      {/* ---------- CITIES ---------- */}
      <ServiceAreas />
    </>
  );
}
