// Single source of truth for business details (NAP). Change here, changes everywhere.
export const SITE = {
  name: 'CWM Water Damage Restoration',
  shortName: 'CWM',
  phone: '(954) 836-9001',
  phoneHref: 'tel:+19548369001',
  phoneE164: '+1-954-836-9001',
  state: 'Florida',
  stateCode: 'FL',
  hours: 'Open 24 hours, 7 days a week',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com').replace(/\/$/, ''),
  logo: '/images/cwm-logo.png',
  ogImage: '/images/og-cwm-water-damage-restoration.jpg',
};
