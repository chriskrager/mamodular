// All fourteen plans on Find Your Ma. The three ADUs come from models.ts (richer data);
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
  floorplans?: { src: string; label: string }[];
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
  // Robbins: 1,630 sf, 3 stories, 3 bed / 3.5 bath, 4 modules. Three floor plans, one per level.
  {
    slug: 'robbins', name: 'Robbins', line: 'Texas Mod', sf: 1630, beds: '3', baths: '3.5', stories: 3, modules: 4, isAdu: false,
    summary: 'A three-story urban infill home with a roof terrace.',
    description: ['A narrow, three-story home built from four ma modules, made for tight urban lots. The ground level is an open kitchen, dining and living room with a powder room and glass doors to the yard; the second level has two bedroom suites.', 'The primary suite takes the top level and opens to a roof terrace under a pergola.'],
    hero: { src: '/images/portfolio/robbins/01.webp', alt: 'Robbins from the street: a three-story modular home with a terracotta bay, white stucco volume and roof pergola.' },
    gallery: [
      { src: '/images/portfolio/robbins/02.webp', alt: 'Aerial view of Robbins, a three-story modular home with a roof terrace, perforated metal canopy and fenced garden.' },
      { src: '/images/portfolio/robbins/03.webp', alt: 'Robbins as built, street side: a yellow bay with three deep window openings, gray panel walls and a steel pergola on the roof terrace.' },
      { src: '/images/portfolio/robbins/04.webp', alt: 'Living room with a wood media wall, sliding glass doors and a striped rug.' },
      { src: '/images/portfolio/robbins/05.webp', alt: 'Kitchen and dining area with wood cabinets, a dark counter and a sliding glass door to the yard.' },
      { src: '/images/portfolio/robbins/06.webp', alt: 'Roof terrace under a wood pergola with a perforated screen, outside the primary bedroom.' },
      { src: '/images/portfolio/robbins/07.webp', alt: 'Robbins as built, rear side: the roof terrace with steel pergola above a blue-gray bay and a sliding glass door.' },
    ],
    floorplans: [
      { src: '/images/portfolio/robbins/floorplan-1.webp', label: 'Level 1' },
      { src: '/images/portfolio/robbins/floorplan-2.webp', label: 'Level 2' },
      { src: '/images/portfolio/robbins/floorplan-3.webp', label: 'Level 3' },
    ],
  },
  big({ slug: 'z-plan', name: 'Z Plan', sf: 1750, beds: '3', baths: '2', stories: 1, summary: 'Comfort, privacy and flexibility.',
    description: ['Comfort, privacy and flexibility. A separate wing houses children or guests, while a dedicated home office stays apart.'] }),
  big({ slug: 'blue-crest', name: 'Blue Crest', sf: 1900, beds: '3', baths: '2', stories: 2, summary: 'A two-story urban infill model.',
    description: ['This ample two-story model includes indoor-outdoor spaces, a library and upstairs bedroom privacy. A great urban infill model.'],
    note: 'Decks, stairs and garage are site-built.',
    floorplans: [
      { src: '/images/portfolio/blue-crest/floorplan-1.webp', label: 'First floor' },
      { src: '/images/portfolio/blue-crest/floorplan-2.webp', label: 'Second floor' },
    ] }),
  // Alta Vista: 2,200 sf, 2 stories, 3 bed / 2.5 bath, 3 modules. Floor plans are one per level.
  {
    slug: 'alta-vista', name: 'Alta Vista', line: 'Texas Mod', sf: 2200, beds: '3', baths: '2.5', stories: 2, modules: 3, isAdu: false,
    summary: 'A two-story hillside home with a roof garden and a private courtyard.',
    description: ['A two-story home built from three ma modules. The upper level holds the open kitchen, dining and living space, with a deck along the glass wall and two bedrooms; the lower level adds a bedroom wing and a sheltered courtyard.', 'A planted roof and a covered outdoor dining area extend the living space outdoors.'],
    hero: { src: '/images/portfolio/alta-vista/01.webp', alt: 'Alta Vista at sunset: a two-story modular home with a cedar upper level, deck, roof garden and courtyard pool.' },
    gallery: [{ src: '/images/portfolio/alta-vista/02.webp', alt: 'Aerial view of Alta Vista on a hillside lot, with a roof garden, courtyard and plunge pool.' }],
    floorplans: [
      { src: '/images/portfolio/alta-vista/floorplan-1.webp', label: 'First floor' },
      { src: '/images/portfolio/alta-vista/floorplan-2.webp', label: 'Second floor' },
    ],
  },
  // Garwood: 2,200 sf, 2 stories, 4 bed / 4.5 bath, 4 modules.
  {
    slug: 'garwood', name: 'Garwood', line: 'Texas Mod', sf: 2200, beds: '4', baths: '4.5', stories: 2, modules: 4, isAdu: false,
    summary: 'An L-shaped two-story home with a bedroom suite on every level.',
    description: ['An L-shaped, two-story home built from four ma modules. The main level is an open kitchen, dining and living room along a wall of sliding glass, with a bedroom suite and powder room.', 'Upstairs are three more bedrooms, laundry and a second living area, with a covered balcony off the front. A rear deck makes room for outdoor dining and a plunge pool.'],
    hero: { src: '/images/portfolio/garwood/03.webp', alt: 'Aerial view of the Garwood home and its rear unit: cedar and stucco two-story modules around a courtyard with a plunge pool, pergola and fenced front garden.' },
    gallery: [{ src: '/images/portfolio/garwood/01.webp', alt: 'Aerial view of Garwood: an L-shaped two-story modular home with cedar siding, a rear deck and a plunge pool.' }, { src: '/images/portfolio/garwood/02.webp', alt: 'Garwood from the street, with a covered balcony, cedar and stucco walls and a fenced front yard.' }],
    floorplans: [
      { src: '/images/portfolio/garwood/floorplan-1.webp', label: 'First floor' },
      { src: '/images/portfolio/garwood/floorplan-2.webp', label: 'Second floor' },
    ],
  },
  // Confirmed: 2,300 sf, 4 bed / 2.5 bath.
  big({ slug: 'fire-island', name: 'Fire Island', sf: 2300, beds: '4', baths: '2.5', stories: 2, summary: 'An upside-down plan designed for vistas.',
    description: ['This "upside-down" plan was designed for vistas. The main living space, along with the primary bedroom, are upstairs, with multiple adjacent decks. This volume sits on top of three bedrooms below.'],
    floorplans: [
      { src: '/images/portfolio/fire-island/floorplan-1.webp', label: 'First floor' },
      { src: '/images/portfolio/fire-island/floorplan-2.webp', label: 'Second floor' },
    ] }),
  big({ slug: 'marfa', name: 'Marfa', sf: 2300, beds: '3', baths: '2.5', stories: 1, modules: 2, summary: 'A rambling pavilion home with a guesthouse.',
    description: ['A rambling pavilion home. The large common space (two merged ma modules) and a separate guesthouse with a shared courtyard make this a perfect model for gatherings and guests.', 'Featured in Dwell, December 2016.'] }),
  // Post: 2,500 sf, 2 stories, 4 bed / 2.5 bath, 5 modules.
  {
    slug: 'post', name: 'Post', line: 'Texas Mod', sf: 2500, beds: '4', baths: '2.5', stories: 2, modules: 5, isAdu: false,
    summary: 'A five-module home with a cantilevered cedar upper floor.',
    description: ['A two-story home built from five ma modules. The first level holds the open kitchen and living area, a ground-floor bedroom suite, laundry and a powder room.', 'A cedar-clad upper volume cantilevers over the entry and holds the remaining bedrooms and bath, with a covered balcony at one end.'],
    hero: { src: '/images/portfolio/post/02.webp', alt: 'The Post courtyard: a plunge pool between the white stucco wings, with the cedar-clad upper floor above.' },
    gallery: [
      { src: '/images/portfolio/post/01.webp', alt: 'Aerial view of Post: a long cedar-clad upper floor over white stucco wings that wrap a courtyard with a plunge pool.' },
      { src: '/images/portfolio/post/03.webp', alt: 'Post from the street: a cedar-clad upper floor with a covered balcony above a white stucco ground floor and entry stairs.' },
    ],
    floorplans: [
      { src: '/images/portfolio/post/floorplan-1.webp', label: 'First floor' },
      { src: '/images/portfolio/post/floorplan-2.webp', label: 'Second floor' },
    ],
  },
];

// Old Find Your Ma order: the three ADUs first, then by size.
export const plans: Plan[] = [...aduPlans, ...housePlans];
export const planBySlug = Object.fromEntries(plans.map((p) => [p.slug, p]));
