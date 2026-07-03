# POOLS of Pompano

Marketing site for POOLS of Pompano — weekly pool cleaning, green pool recovery,
equipment repair, and storm cleanup for Pompano Beach & Broward County, FL.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4, per the
AvenueOS contractor-vertical dev stack (Next.js + Tailwind + Vercel).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes (home, services, service-areas, about, reviews, contact, faq)
- `src/components` — shared UI
- `src/lib/data` — services, service-area cities, reviews, and FAQ content
- `src/lib/constants.ts` — business info (phone, email, hours, site URL)

## Before going live

- Swap placeholder testimonials in `src/lib/data/reviews.ts` for real customer reviews
- Wire `src/app/api/contact/route.ts` to real lead delivery (email/CRM/ClickUp Form)
- Update `siteUrl` in `src/lib/constants.ts` once a custom domain is attached
- The Open Graph image (`src/app/opengraph-image.tsx`) is generated from brand
  colors/type — swap in real photography-based art if/when available
