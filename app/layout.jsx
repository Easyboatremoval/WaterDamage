import { Oswald, Barlow } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icons';

const display = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });
const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });

const title = 'Water Damage Restoration Florida | 24/7 Emergency | CWM';
const description =
  '24/7 water damage restoration across Florida: water extraction, flood cleanup, fire & smoke damage, mold remediation & floor drying. Call (954) 836-9001.';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: '%s | CWM Water Damage Restoration' },
  description,
  applicationName: SITE.name,
  keywords: [
    'water damage restoration Florida',
    'emergency water removal',
    'water extraction',
    'flood damage restoration',
    'hurricane damage cleanup',
    'fire damage restoration',
    'smoke damage cleanup',
    'mold remediation',
    'mold mitigation',
    'mold removal',
    'water damaged floor repair',
    'hardwood floor water damage',
    'structural drying',
    'sewage cleanup',
    'burst pipe water damage',
    '24/7 water damage company',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE.name,
    title,
    description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'CWM Water Damage Restoration — 24/7 emergency response in Florida' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [SITE.ogImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  formatDetection: { telephone: true },
};

export const viewport = {
  themeColor: '#0a2540',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <nav className="callbar" aria-label="Quick contact">
          <a href={SITE.phoneHref} className="callbar-call" aria-label={`Call ${SITE.name} 24/7 at ${SITE.phone}`}>
            <Icon name="phone" size={20} />
            <span className="callbar-text"><small>Call 24/7</small>{SITE.phone}</span>
          </a>
          <a href="/#estimate" className="callbar-inspect">Request an Inspection</a>
        </nav>
      </body>
    </html>
  );
}
