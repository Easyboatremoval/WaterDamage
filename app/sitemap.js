import { SITE } from '@/lib/site';
import { CITIES_WITH_PAGES, cityPath } from '@/lib/cities';

export default function sitemap() {
  const now = new Date();
  const pages = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/water-damage-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
  for (const c of CITIES_WITH_PAGES) {
    pages.push({ url: `${SITE.url}${cityPath(c)}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
  }
  return pages;
}
