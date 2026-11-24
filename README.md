# CWM Water Damage Restoration — Website

Built with **Next.js 15 (React 19, Node.js)**. Pages are rendered on the server, so Google gets complete HTML. Single-page React apps don't give Google that.

## Run locally

```bash
npm install
cp .env.example .env.local   # set your domain + Telegram bot
npm run dev                  # http://localhost:3000
```

## Production

```bash
npm install
npm run build
npm start                    # uses the PORT env var if set
```

**Render (Web Service):** Build command `npm install && npm run build`, start command `npm start` (the site URL `https://cwmwaterdamage.com` is set in `lib/site.js`).
Vercel works without any setup.

## Where things live

| What | File |
|---|---|
| Name, phone, hours, domain | `lib/site.js` |
| Services, process, FAQ, gallery text | `lib/content.js` |
| Florida city list (by region) + map pins | `lib/cities.js` |
| Florida map outline (generated) | `lib/florida-map.js` |
| Homepage sections | `app/page.jsx` |
| Title, description, Open Graph | `app/layout.jsx` |
| Schema.org structured data | `components/JsonLd.jsx` |
| Quote form (front end) | `components/QuoteForm.jsx` |
| Quote form API (Node) | `app/api/contact/route.js` |
| sitemap.xml / robots.txt | `app/sitemap.js`, `app/robots.js` |
| Styles | `app/globals.css` |
| Keyword strategy | `SEO-KEYWORDS.md` |

## Form leads → Telegram

The "Request an Inspection" form posts to `/api/contact`, which validates the lead, blocks spam with a honeypot field, and sends it to Telegram. Customers can attach up to 5 photos (optional). They're shrunk in the browser before upload, then posted to the chat after the text alert.

**Setup (about 3 minutes):**

1. 
## Next step: city landing pages

1. Create `app/water-damage-restoration/[city]/page.jsx` using `ALL_CITIES` from `lib/cities.js` and `generateStaticParams`.
2. Give each city its own content (see `SEO-KEYWORDS.md`).
3. Set `CITY_PAGES_LIVE = true` in `lib/cities.js`.

Original HERO:

Burst pipe, roof leak, hurricane flooding or a fire? CWM extracts the water, dries the structure, stops
              mold before it starts and restores your home or business — and documents everything for your insurance
              claim.