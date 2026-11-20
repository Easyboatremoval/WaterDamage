# CWM Water Damage Restoration — Website

Built with **Next.js 15 (React 19, Node.js)**. Pages are rendered on the server, so Google gets complete HTML. Single-page React apps don't give Google that.

## Run locally

```bash
npm install
cp .env.example .env.local   # set your real domain
npm run dev                  # http://localhost:3000
```

## Production

```bash
npm install
npm run build
npm start                    # uses the PORT env var if set
```

**Render (Web Service):** Build command `npm install && npm run build`, start command `npm start`, and the environment variable `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com`.
Vercel works without any setup.

## Where things live

| What | File |
|---|---|
| Name, phone, hours, domain | `lib/site.js` |
| Services, process, FAQ, gallery text | `lib/content.js` |
| Florida city list (by region) | `lib/cities.js` |
| Homepage sections | `app/page.jsx` |
| Title, description, Open Graph | `app/layout.jsx` |
| Schema.org structured data | `components/JsonLd.jsx` |
| Quote form (front end) | `components/QuoteForm.jsx` |
| Quote form API (Node) | `app/api/contact/route.js` |
| sitemap.xml / robots.txt | `app/sitemap.js`, `app/robots.js` |
| Styles | `app/globals.css` |
| Keyword strategy | `SEO-KEYWORDS.md` |

## Form leads

`/api/contact` validates each submission, blocks spam with a honeypot field and logs the lead. To have leads forwarded, set `LEAD_WEBHOOK_URL`, for example to a Zapier or Make webhook that emails or texts you. You can also connect an email service in that file.

## Next step: city landing pages

1. Create `app/water-damage-restoration/[city]/page.jsx` using `ALL_CITIES` from `lib/cities.js` and `generateStaticParams`.
2. Give each city its own content (see `SEO-KEYWORDS.md`).
3. Set `CITY_PAGES_LIVE = true` in `lib/cities.js`.
