import { SITE } from '@/lib/site';
import { ALL_CITIES, CITY_PAGES_LIVE, cityPath } from '@/lib/cities';

export default function sitemap() {
  const now = new Date();
  const pages = [{ url: `${SITE.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 }];
  if (CITY_PAGES_LIVE) {
    for (const c of ALL_CITIES) {
      pages.push({ url: `${SITE.url}${cityPath(c)}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
    }
  }
  return pages;
}
