import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist. Need help with water damage now?</p>
        <p>
          <a href={SITE.phoneHref} className="btn btn-call">Call {SITE.phone}</a>{' '}
          <Link href="/" className="btn btn-primary">Go to homepage</Link>
        </p>
      </div>
    </section>
  );
}
