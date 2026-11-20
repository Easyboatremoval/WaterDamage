import { SITE } from '@/lib/site';
import { SERVICES, FAQS } from '@/lib/content';
import { ALL_CITIES } from '@/lib/cities';

// Structured data for Google: local business (service-area business, no street
// address shown), the services offered, the website, and the FAQ.
export default function JsonLd() {
  const businessId = `${SITE.url}/#business`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': businessId,
        name: SITE.name,
        alternateName: 'CWM',
        url: SITE.url,
        telephone: SITE.phoneE164,
        logo: `${SITE.url}${SITE.logo}`,
        image: `${SITE.url}${SITE.ogImage}`,
        description:
          '24/7 water damage restoration in Florida: emergency water extraction, structural drying, flood and hurricane cleanup, fire and smoke damage restoration, mold remediation and water-damaged floor repair.',
        address: { '@type': 'PostalAddress', addressRegion: SITE.stateCode, addressCountry: 'US' },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        areaServed: [
          { '@type': 'State', name: 'Florida' },
          ...ALL_CITIES.map((c) => ({ '@type': 'City', name: `${c.name}, FL` })),
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Restoration services',
          itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.lead,
              serviceType: s.title,
              areaServed: { '@type': 'State', name: 'Florida' },
              provider: { '@id': businessId },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': businessId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
