import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icons';
import { SITE } from '@/lib/site';

const NAV = [
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Our Process' },
  { href: '/#insurance', label: 'Insurance' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#service-areas', label: 'Service Areas' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <p>
            <span className="pulse" aria-hidden="true" /> 24/7 Emergency Response · Serving All of Florida
          </p>
          <a href={SITE.phoneHref} className="topbar-phone">
            Call now: <strong>{SITE.phone}</strong>
          </a>
        </div>
      </div>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label={`${SITE.name} — home`}>
          <Image src="/images/cwm-logo-160.png" alt="CWM Water Damage Restoration logo" width={52} height={52} priority />
          <span className="brand-text">
            <span className="brand-name">C.W.M</span>
            <span className="brand-sub">Water Damage Restoration</span>
          </span>
        </Link>
        <nav aria-label="Main">
          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={SITE.phoneHref} className="btn btn-call nav-call">
          <Icon name="phone" size={18} /> {SITE.phone}
        </a>
      </div>
    </header>
  );
}
