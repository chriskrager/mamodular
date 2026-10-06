# ma modular website (Astro + Netlify), page-for-page rebuild

Same pages and URLs as the old WordPress site, rebuilt as a static site. No CMS: content lives in plain files.

```
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

## Where things live
| To change | Edit |
|---|---|
| Phone, email, address, nav, financing note | `src/config.ts` |
| The 10 plans | ADUs: `src/data/models.ts`. Larger houses: `src/data/plans.ts`. Photos: `src/data/images.json` and `public/images/portfolio/<slug>/` |
| Development projects | `src/data/projects.ts` |
| News posts | `src/data/news.ts` (each post keeps its old dated URL) |
| FAQ, Myths, Steps, Features, About, Locations | `src/pages/*.astro` |
| Colors and type | top of `src/styles/global.css` |

## What changed from the old site
- No prices anywhere. Financing is a lender referral (second-lien construction loans for ADUs, underwritten with projected rent).
- Address is 1101 E 6th St, Suite A (the old site said 916 Springdale Rd).
- ADUs are Grand-Ma 550, Dogtrot (840 sf conditioned) and Casita 1100 (2 modules). Casita 850 is left out.
- Contact is a Netlify form (the old one was Wufoo). Turn on notifications in Netlify > Forms.
- Only `/portfolio/`, `/portfolio/page/2/` and `/news/page/2/` redirect; every other old URL still exists.

## Confirmed
Phone, 6-12 month timeline, about 90% factory completion, Fire Island at 2,300 sf, 4 bed / 2.5 bath, MLK Mixed Use = Magnolia, the Vox video link (YouTube) and the Hive podcast link.

## Still to confirm before launch
- Quintero is Echo Park, Los Angeles (from the old news post). Belmont, Onteora and Ventura have no text on the old site.
- "No custom designs" (old FAQ), the Features brands and options, and "Where ma" (Texas, Louisiana, Western States, East Coast) are carried over as written.
- Other press and news links may be dead.
- Photo alt text on the larger houses is generic ("Luna, photo 3").
- Financing disclosure wording with the lender.

## Launch checklist
1. Push to GitHub (keep the folder structure; upload the folder contents, not a zip). Connect to Netlify.
2. Netlify > Forms: notifications to the right inbox (form name `lot`).
3. Set `ga4Id`. Set up Search Console and record a baseline first.
4. `live: true` in `src/config.ts`, point DNS at Netlify, submit `/sitemap-index.xml`.
