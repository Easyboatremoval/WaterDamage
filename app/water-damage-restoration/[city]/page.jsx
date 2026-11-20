import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icons';
import QuoteForm from '@/components/QuoteForm';
import { SITE } from '@/lib/site';
import { GALLERY } from '@/lib/content';
import { CITY_CONTENT } from '@/lib/cityContent';
import { CITIES_WITH_PAGES, getCityBySlug, getNearbyCities, cityPath, hasCityPage } from '@/lib/cities';

// Only cities with local content get a page; anything else is a 404 (via notFound() below).
// Don't set `dynamicParams = false` here: in Next.js 15 it logs "NoFallbackError" for every unknown city URL.

export function generateStaticParams() {
  return CITIES_WITH_PAGES.map((c) => ({ city: c.slug }));
}

function load(slug) {
  const city = getCityBySlug(slug);
  const local = CITY_CONTENT[slug];
  if (!city || !local) return null;
  return { city, local: { ...local, zips: local.zips ?? city.zips } };
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const data = load(slug);
  if (!data) return {};
  const { city } = data;
  const title = `Water Damage Restoration ${city.name}, FL | 24/7 Emergency | CWM`;
  const description = `24/7 water damage restoration in ${city.name}, FL: emergency water extraction, flood cleanup, fire & smoke damage, mold remediation & floor drying. Call ${SITE.phone}.`;
  const path = cityPath(city);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      siteName: SITE.name,
      title: `Water Damage Restoration ${city.name}, FL | CWM`,
      description,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `Water damage restoration in ${city.name}, Florida` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [SITE.ogImage] },
  };
}

// ---------- Page content built from the city name ----------
const servicesFor = (n) => [
  `Emergency Water Removal in ${n}`,
  'Water Extraction & Structural Drying',
  'Burst Pipe & Leak Water Damage',
  'Flood & Hurricane Damage Cleanup',
  'Fire & Smoke Damage Restoration',
  'Mold Remediation & Mold Mitigation',
  'Water-Damaged Floor Restoration',
  'Sewage Backup Cleanup',
];

const whyFor = (n, county) => [
  { title: '24/7 Local Response', text: `Water damage doesn't wait. We answer around the clock and dispatch a crew to ${n} right away — nights, weekends and holidays.` },
  { title: 'Fast Water Extraction', text: 'Truck-mounted and portable pumps remove standing water quickly, limiting damage to walls, floors and furniture.' },
  { title: 'Mold Prevention', text: `In ${county} County humidity, mold can grow within 24–48 hours. We dry fast and treat affected areas to stop it.` },
  { title: 'Insurance Claim Help', text: 'Date-stamped photos, moisture maps, drying logs and itemized estimates — everything your adjuster needs.' },
  { title: 'Professional Drying Equipment', text: 'Commercial air movers, dehumidifiers, moisture meters and thermal imaging find and dry hidden moisture.' },
  { title: 'Every Type of Damage', text: 'Water, flood, fire and smoke, mold, sewage and water-damaged floors — one company for the whole job.' },
];

const stepsFor = (n) => [
  { title: 'Call Us 24/7', text: `Call ${SITE.phone} or send the form. We get the details and send a crew to your ${n} property right away.` },
  { title: 'Inspect & Extract', text: 'We find the source, map the wet areas with moisture meters and thermal imaging, and extract the standing water.' },
  { title: 'Dry & Restore', text: 'Air movers and dehumidifiers dry the structure, checked daily. Then we clean, sanitize and restore your home.' },
];

const faqsFor = (n, county, local) => [
  {
    q: `How fast can you respond to water damage in ${n}?`,
    a: `We answer 24 hours a day, 7 days a week, and dispatch the nearest crew to ${n} immediately. Call ${SITE.phone} and we'll give you an arrival time.`,
  },
  {
    q: `Which parts of ${n} do you serve?`,
    a: `All of ${n}${local.neighborhoods.length ? `, including ${local.neighborhoods.slice(0, 5).join(', ')}` : ''}${local.zips?.length ? ` (ZIP codes ${local.zips.join(', ')})` : ''}, plus the surrounding ${county} County communities.`,
  },
  {
    q: `Does homeowners insurance cover water damage in ${n}?`,
    a: 'Most policies cover sudden and accidental water damage, like a burst pipe or appliance leak. Slow long-term leaks are often excluded, and rising flood water usually needs separate flood insurance. We document everything and can work directly with your adjuster — your policy decides what is covered.',
  },
  {
    q: `Do you also handle mold, fire damage and water-damaged floors in ${n}?`,
    a: `Yes. Besides water extraction and drying, we provide mold remediation and mold mitigation, fire and smoke damage restoration, sewage cleanup and restoration of water-damaged hardwood, laminate, tile and carpet in ${n}.`,
  },
  ...(local.localFaqs || []),
];

export default async function CityPage({ params }) {
  const { city: slug } = await params;
  const data = load(slug);
  if (!data) notFound();
  const { city, local } = data;
  const n = city.name;

  const services = servicesFor(n);
  const why = whyFor(n, city.county);
  const steps = stepsFor(n);
  const faqs = faqsFor(n, city.county, local);
  const nearby = getNearbyCities(city, 12);
  const photos = GALLERY.slice(0, 4);
  const url = `${SITE.url}${cityPath(city)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Water Damage Restoration in ${n}, FL`,
        serviceType: 'Water damage restoration',
        description: `24/7 water damage restoration, water extraction, flood cleanup, fire and smoke damage restoration, mold remediation and floor drying in ${n}, Florida.`,
        provider: {
          '@type': 'HomeAndConstructionBusiness',
          '@id': `${SITE.url}/#business`,
          name: SITE.name,
          telephone: SITE.phoneE164,
          url: SITE.url,
          image: `${SITE.url}${SITE.ogImage}`,
          address: { '@type': 'PostalAddress', addressRegion: SITE.stateCode, addressCountry: 'US' },
        },
        areaServed: {
          '@type': 'City',
          name: `${n}, FL`,
          containedInPlace: { '@type': 'AdministrativeArea', name: `${city.county} County, Florida` },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Restoration services in ${n}`,
          itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/water-damage-restoration` },
          { '@type': 'ListItem', position: 3, name: `${n}, FL`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      {/* ---------- HERO ---------- */}
      <section className="hero city-hero" aria-labelledby="city-title">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/water-damage-restoration">Service Areas</Link></li>
              <li aria-current="page">{n}, FL</li>
            </ol>
          </nav>
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="city-tag"><Icon name="pin" size={18} /> {n}, Florida · {city.county} County</p>
            <h1 id="city-title">
              Water Damage Restoration <span>in {n}, FL</span>
            </h1>
            <p className="hero-lead">{local.heroLead}</p>
            <div className="hero-ctas">
              <a href={SITE.phoneHref} className="btn btn-call btn-lg">
                <Icon name="phone" size={20} /> Call {SITE.phone}
              </a>
              <a href="#estimate" className="btn btn-ghost btn-lg">Request an Inspection</a>
            </div>
            <ul className="hero-checks">
              <li><Icon name="check" size={18} /> 24/7 emergency water removal</li>
              <li><Icon name="check" size={18} /> Flood &amp; storm damage cleanup</li>
              <li><Icon name="check" size={18} /> Mold remediation &amp; mitigation</li>
              <li><Icon name="check" size={18} /> Fire, smoke &amp; floor damage</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
        <svg className="hero-waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60c240 40 480 40 720 0s480-40 720 0v60H0Z" fill="#113a63" />
          <path d="M0 85c240 30 480 30 720 0s480-30 720 0v35H0Z" fill="#1d6aa5" />
          <path d="M0 105c240 18 480 18 720 0s480-18 720 0v15H0Z" fill="#f4f8fb" />
        </svg>
      </section>

      {/* ---------- PHOTOS ---------- */}
      <section className="section-tint city-photos" aria-label={`Water damage restoration work near ${n}`}>
        <div className="container photo-strip">
          {photos.map((g) => (
            <figure key={g.src}>
              <Image src={g.src} alt={g.alt} width={480} height={640} sizes="(max-width: 700px) 50vw, 25vw" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section section-tint" aria-labelledby="why-title">
        <div className="container">
          <div className="center-head">
            <h2 id="why-title">Why Choose <span className="hl">CWM</span> in {n}?</h2>
            <p className="section-lead">Trusted water damage restoration for {n} and all of {city.county} County</p>
          </div>
          <div className="why-grid">
            {why.map((w) => (
              <article className="why-card" key={w.title}>
                <Icon name="check" size={30} />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES + AREAS ---------- */}
      <section className="section" id="services" aria-labelledby="svc-title">
        <div className="container split">
          <div>
            <h2 id="svc-title">Complete Water Damage Restoration Services in {n}</h2>
            <p className="section-lead">
              Whether it&apos;s a burst pipe flooding your kitchen, a roof leak after a storm, an overflowing AC unit or
              smoke damage after a fire, CWM handles the whole job for {n} homeowners, condo owners and businesses —
              from emergency water extraction to final restoration.
            </p>
            <ul className="svc-list">
              {services.map((s) => (
                <li key={s}><Icon name="check" size={18} /> {s}</li>
              ))}
            </ul>
            <a href="#estimate" className="btn btn-primary btn-lg svc-btn">Request a Free Inspection</a>
          </div>
          <aside className="areas-card" aria-labelledby="areas-card-title">
            <h3 id="areas-card-title">{n} Areas We Cover</h3>
            <p className="areas-card-sub">Service in every part of the city</p>
            <ul>
              {local.neighborhoods.map((a) => (
                <li key={a}><Icon name="pin" size={16} /> {a}</li>
              ))}
            </ul>
            {local.zips?.length > 0 && <p className="areas-card-zips">ZIP codes: {local.zips.join(', ')}</p>}
            <p className="areas-card-sub">And all nearby neighborhoods in {city.county} County</p>
          </aside>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section section-tint" aria-labelledby="steps-title">
        <div className="container">
          <div className="center-head">
            <h2 id="steps-title">Our Simple 3-Step Process</h2>
            <p className="section-lead">Fast, stress-free water damage restoration in {n}</p>
          </div>
          <ol className="steps3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="process-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <div className="center-head">
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p className="section-lead">Answers to common questions about water damage restoration in {n}</p>
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LOCAL CALL ---------- */}
      <section className="section section-tint local-call" aria-labelledby="call-title">
        <div className="container narrow">
          <Image src="/images/cwm-logo.png" alt="CWM Water Damage Restoration logo" width={120} height={120} className="local-call-logo" />
          <h2 id="call-title">Call <span className="hl">CWM</span> Now!</h2>
          <p className="section-lead">
            Call <a href={SITE.phoneHref}>{SITE.phone}</a> to talk with our water damage specialist for {n} and all of{' '}
            {city.county} County. The sooner drying starts, the less damage — and cost — you face.
          </p>
          <a href={SITE.phoneHref} className="btn btn-call btn-lg">
            <Icon name="phone" size={20} /> {SITE.phone}
          </a>
        </div>
      </section>

      {/* ---------- LOCAL CONTENT ---------- */}
      <section className="section" aria-labelledby="about-title">
        <div className="container narrow prose">
          <h2 id="about-title">Water Damage Restoration in {n}, Florida</h2>
          {local.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ---------- NEARBY CITIES ---------- */}
      <section className="section section-tint" aria-labelledby="nearby-title">
        <div className="container">
          <h2 id="nearby-title">Water Damage Restoration Near {n}</h2>
          <p className="section-lead">CWM also provides 24/7 water, fire and mold restoration in these nearby cities:</p>
          <ul className="nearby">
            {nearby.map((c) => (
              <li key={c.slug}>
                {hasCityPage(c) ? (
                  <Link href={cityPath(c)}>Water damage restoration {c.name}</Link>
                ) : (
                  <span>{c.name}, FL</span>
                )}
              </li>
            ))}
          </ul>
          <p className="nearby-all"><Link href="/water-damage-restoration">See all Florida service areas →</Link></p>
        </div>
      </section>
    </>
  );
}
