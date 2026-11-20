import Image from 'next/image';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/content';
import { REGIONS } from '@/lib/cities';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Image src="/images/cwm-logo-160.png" alt="CWM logo" width={56} height={56} />
            <div>
              <strong>{SITE.name}</strong>
              <span>Water · Fire · Mold · Floors</span>
            </div>
          </div>
          <p>
            24/7 emergency water damage restoration, flood cleanup, fire and smoke damage restoration, mold
            remediation and water-damaged floor repair throughout Florida.
          </p>
          <a href={SITE.phoneHref} className="footer-phone">{SITE.phone}</a>
          <p className="footer-hours">{SITE.hours}</p>
        </div>
        <div>
          <h2 className="footer-h">Services</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}><a href={`/#${s.id}`}>{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Regions We Serve</h2>
          <ul>
            {REGIONS.map((r) => (
              <li key={r.slug}><a href="/#service-areas">{r.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} {SITE.name}. All rights reserved. Serving {SITE.state}, US.</p>
      </div>
    </footer>
  );
}
