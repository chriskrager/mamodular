// All ten plans on Find Your Ma. The three ADUs come from models.ts (richer data);
// the larger houses are defined here. Images are listed in images.json.
import { models } from './models';
import images from './images.json';

export interface Plan {
  slug: string;
  name: string;
  line: string; // "Texas Mod"
  sf: number;
  sfNote?: string;
  beds: string;
  baths: string;
  stories?: number;
  modules?: number | null;
  dims?: string;
  summary: string;
  description: string[];
  note?: string;
  hero: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  floorplan?: string;
  isAdu: boolean;
}

const imgs = images as Record<string, { photos: string[]; plan: string | null }>;
const fromImages = (slug: string, name: string) => {
  const p = imgs[slug].photos;
  return {
    hero: { src: p[0], alt: `${name}, exterior` },
    gallery: p.slice(1).map((src, i) => ({ src, alt: `${name}, photo ${i + 2}` })),
    floorplan: imgs[slug].plan ?? undefined,
  };
};

const big = (o: Omit<Plan, 'line' | 'isAdu' | 'hero' | 'gallery' | 'floorplan'>): Plan => ({
  line: 'Texas Mod', isAdu: false, ...o, ...fromImages(o.slug, o.name),
});

export const aduPlans: Plan[] = models.map((m) => ({
  slug: m.slug, name: m.name, line: 'Texas Mod', sf: m.sf, sfNote: m.sfNote, beds: String(m.beds), baths: m.baths,
  modules: m.modules, dims: m.dims, summary: m.summary, description: m.description, note: m.note,
  hero: { src: m.hero.src, alt: m.hero.alt },
  gallery: m.gallery.map((g) => ({ src: g.src, alt: g.alt })),
  floorplan: m.floorplan, isAdu: true,
}));

export const housePlans: Plan[] = [
  big({ slug: 'blanco-river', name: 'Blanco River', sf: 1300, beds: '3', baths: '2', stories: 1, summary: 'Your urban dwelling, your country house.',
    description: ["It's your urban dwelling, it's your country house. The cool flow of space, the large glass doors: it's as if you're living among the trees.", 'Featured in Sheri Koones’ book Prefabulous Small Houses, and on 2Modern.'] }),
  big({ slug: 'luna', name: 'Luna', sf: 1500, beds: '3', baths: '2', stories: 1, summary: 'Our most popular model.',
    description: ['Our most popular model. An open breezeway separates the living, dining and kitchen area from the bedrooms.', 'A wall of glass doors in the living room opens to expansive views.'] }),
  big({ slug: 'c-plan', name: 'C Plan', sf: 1600, beds: '3', baths: '2', stories: 1, summary: 'The ultimate courtyard house.',
    description: ['The ultimate courtyard house. Allowing for privacy but connected through a shared garden, lined with glass doors. Dreamy.'] }),
  big({ slug: 'z-plan', name: 'Z Plan', sf: 1750, beds: '3', baths: '2', stories: 1, summary: 'Comfort, privacy and flexibility.',
    description: ['Comfort, privacy and flexibility. A separate wing houses children or guests, while a dedicated home office stays apart.'] }),
  big({ slug: 'blue-crest', name: 'Blue Crest', sf: 1900, beds: '3', baths: '2', stories: 2, summary: 'A two-story urban infill model.',
    description: ['This ample two-story model includes indoor-outdoor spaces, a library and upstairs bedroom privacy. A great urban infill model.'] }),
  // Confirmed: 2,300 sf, 4 bed / 2.5 bath.
  big({ slug: 'fire-island', name: 'Fire Island', sf: 2300, beds: '4', baths: '2.5', stories: 1, summary: 'Light and airy, with an indoor-outdoor living room.',
    description: ['A light and airy home with multiple patio spaces, a fireplace and an indoor-outdoor living room for gatherings, overlooking the valley.'] }),
  big({ slug: 'marfa', name: 'Marfa', sf: 2300, beds: '3', baths: '2.5', stories: 1, modules: 2, summary: 'A rambling pavilion home with a guesthouse.',
    description: ['A rambling pavilion home. The large common space (two merged ma modules) and a separate guesthouse with a shared courtyard make this a perfect model for gatherings and guests.', 'Featured in Dwell, December 2016.'] }),
];

// Old Find Your Ma order: the three ADUs first, then by size.
export const plans: Plan[] = [...aduPlans, ...housePlans];
export const planBySlug = Object.fromEntries(plans.map((p) => [p.slug, p]));
