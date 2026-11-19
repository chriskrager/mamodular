# ma modular website

The marketing site for ma modular, live at **https://www.mamodular.com**. It is a static [Astro](https://astro.build) site hosted on Netlify. There is no CMS: content lives in plain files in this repo. It keeps the same pages and URLs as the old WordPress site.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves the built dist/ (rebuild after changes)
```

Requires Node 22 (set in `netlify.toml`).

## Where things live
| To change | Edit |
|---|---|
| Phone, email, address, nav, financing note, `live` switch, GA4 ID | `src/config.ts` |
| The three ADUs (Grand-Ma 550, Dogtrot, Casita 1100): specs, text, hero and gallery photos | `src/data/models.ts` |
| The larger houses (14 plans in all appear on Find Your Ma) | `src/data/plans.ts`, with photos listed in `src/data/images.json` and alt text in `src/data/plan-alts.ts` |
| Development projects | `src/data/projects.ts` |
| News posts | `src/data/news.ts` (each post keeps its old dated URL) |
| FAQ, Myths, Steps, Features, About, Contact | `src/pages/*.astro` |
| Redirects and cache headers | `public/_redirects`, `public/_headers` |
| Colors and type | top of `src/styles/global.css` (the site uses Jost) |
| Page template, lightbox, analytics | `src/layouts/Base.astro` |

## Photos
- Files go in `public/images/portfolio/<slug>/` as `.webp`.
- Serve photos at the native size of the best original available, rather than scaling them down. The lightbox opens images fit to the window.
- When a larger original is not available, leave the existing file in place rather than upscaling it.
- The homepage hero is a single full-size image (`public/images/site/home-1.webp`, 1280 px wide).
- `incoming/` is a local drop folder for new originals. It is not committed.

## Hosting and launch settings
- **Netlify** builds from `main` and publishes `dist/`. Every pull request gets a Deploy Preview.
- **Domain:** `www.mamodular.com` is the primary domain. The bare domain and `http` redirect to it. DNS is managed in Netlify DNS (registrar: GoDaddy).
- **Indexing:** `live` in `src/config.ts` is `true`. While it is `false`, every page gets `noindex`, `robots.txt` blocks crawlers and analytics does not load. Set it back to `false` to take the site out of search.
- **Analytics:** GA4 (`ga4Id` in `src/config.ts`) loads only when `live` is `true`.
- **Search Console:** a Domain property for `mamodular.com`, with `/sitemap-index.xml` submitted.
- **Contact form:** an embedded Wufoo form. After submitting, Wufoo redirects to `/contact/thanks/`, which breaks out of the form's iframe.
- **Old host:** the old WordPress site's host (InMotion) is no longer in the DNS path. It was kept as a rollback and can be cancelled once nothing is needed from it.

## Redirects
Only these old paths changed; every other old URL still exists at the same address (`public/_redirects`):
- `/portfolio/` and `/portfolio/page/2/` go to `/find-your-ma/`
- `/news/page/2/` goes to `/news/`
- `/locations/` goes to `/contact/`
- `/2016/11/14/bluecrest-home-set/` goes to `/portfolio/blue-crest/`
- Old WordPress category, tag and menu archive pages go to their closest new page

## What changed from the old site
- No prices anywhere. Financing is a lender referral (second-lien construction loans for ADUs, underwritten with projected rent).
- Address is 1101 E 6th St, Suite A (the old site said 916 Springdale Rd).
- ADUs are Grand-Ma 550, Dogtrot (840 sf conditioned) and Casita 1100 (2 modules). Casita 850 is left out.
- Twitter, Player FM and a few dead links were removed or replaced.

## Open items
- **Larger originals** are needed for the photos still shown small (Belmont, Quintero, Fire Island, Kindred, Marfa and others). These are tracked in the project's Notion board.
- **Financing disclosure wording** (`financingNote` in `src/config.ts`) is still to be confirmed with the lender.
- "No custom designs" (old FAQ), the Features brands and options, and "Where ma" (Texas, Louisiana, Western States, East Coast) are carried over as written from the old site.

## Working on the site
Make changes on a branch and open a pull request into `main`. Check the Deploy Preview before merging. Merging to `main` publishes to production.
