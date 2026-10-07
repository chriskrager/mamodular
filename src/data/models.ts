// One entry per ADU model. To change a spec, description or photo, edit it here:
// every page that mentions the model updates.
//
// Footprints are drawn in FEET from the floor plans, for the to-scale comparison.
// They are schematic (offsets and porches approximated), not construction drawings.

export type Rect = { x: number; y: number; w: number; h: number; kind?: 'module' | 'open' | 'porch' };
export type Img = { src: string; alt: string; kind: 'built' | 'rendering' };

export interface Model {
  slug: string;
  name: string;
  sf: number;
  sfNote?: string; // shown on the model page next to the size
  beds: number;
  baths: string; // "1", "1.5"
  modules: number | null; // null = not confirmed yet, hidden on the page
  dims: string; // overall plan dimensions as drawn
  summary: string; // one line for lists
  description: string[]; // paragraphs for the model page
  hero: Img;
  floorplan: string;
  gallery: Img[];
  footprint: Rect[];
  note?: string; // small caption under the plan
}

const img = (dir: string, file: string, alt: string, kind: Img['kind']): Img => ({
  src: `/images/portfolio/${dir}/${file}`,
  alt,
  kind,
});

export const models: Model[] = [
  {
    slug: 'grand-ma-550',
    name: 'Grand-Ma 550',
    sf: 550,
    beds: 1,
    baths: '1',
    modules: 1,
    dims: `38' × 15'`,
    summary: 'The guesthouse, studio, office or granny flat.',
    description: [
      'The guesthouse, studio, office or granny flat of your dreams.',
      'One module, one bedroom, one bath, and an open living room. It is the smallest plan in the ADU line.',
    ],
    hero: img('grand-ma-550', 'img-8520-scaled.webp', 'Gray built unit with glass doors and landscaping in gravel and bamboo.', 'built'),
    floorplan: '/images/portfolio/grand-ma-550/floorplan.webp',
    footprint: [{ x: 0, y: 0, w: 38, h: 15 }],
    gallery: [
      img('grand-ma-550', '525-2.webp', 'Front of the same house with a red entry door and sliding glass doors.', 'built'),
      img('grand-ma-550', '525-3.webp', 'Interior kitchen with white cabinets and stainless appliances, bamboo floor beyond.', 'built'),
      img('grand-ma-550', '525-4.webp', 'Interior living space with floor-to-ceiling sliders and clerestory windows.', 'built'),
      img('grand-ma-550', '525-8.webp', 'A built unit with a turquoise door on a raised deck, on a hillside lot.', 'built'),
      img('grand-ma-550', '525-1.webp', 'Small modern backyard house with a wood fascia, white siding, glass door and a wood deck, set among trees.', 'built'),
      img('grand-ma-550', '550-ext-1.webp', 'Rendering of the 550 in a landscaped yard with palms, dark and gray siding.', 'rendering'),
      img('grand-ma-550', '550-ext-2.webp', 'Rendering of the 550 from the end, with glass doors and a stone path.', 'rendering'),
      img('grand-ma-550', '550-int-1.webp', 'Rendering of the open living and dining room.', 'rendering'),
      img('grand-ma-550', '550-int-3.webp', 'Rendering of the living room with sofa and glass wall.', 'rendering'),
      img('grand-ma-550', '550-int-4.webp', 'Rendering of the bedroom.', 'rendering'),
      img('grand-ma-550', '550-int-7.webp', 'Rendering of the bathroom with a round mirror and tub.', 'rendering'),
      img('grand-ma-550', 'ma-casita-bar-front-scaled.webp', 'Rendering of the plan placed in a fenced backyard.', 'rendering'),
    ],
  },
  {
    slug: 'dogtrot',
    name: 'Dogtrot',
    sf: 840,
    sfNote: 'conditioned; the breezeway is not included',
    beds: 2,
    baths: '1.5',
    modules: 3,
    dims: `43'9" × 34'3"`,
    summary: 'Indoor-outdoor living around a central breezeway.',
    description: [
      'Light-filled indoor-outdoor space, high ceilings and a generous layout make this home a kind of sanctuary. A vacation or guesthouse you will want to stay in.',
      'Bedrooms and bath sit in one module; the living, dining and kitchen area, with a powder bath, sits in another. An unconditioned breezeway between them, glazed on both sides, opens to a site-built porch on each side.',
      'Featured in Dwell.',
    ],
    hero: img('dogtrot', 'ruth-1-scaled.webp', 'Dogtrot-plan house with a rust-colored wall, corrugated siding and a wall of windows, set among live oaks.', 'built'),
    floorplan: '/images/portfolio/dogtrot/floorplan.webp',
    footprint: [
      { x: 0, y: 0, w: 14.5, h: 29 },
      { x: 14.625, y: 0, w: 14.5, h: 34.25, kind: 'open' },
      { x: 29.25, y: 5.25, w: 14.5, h: 29 },
    ],
    note: 'Porches are site-built.',
    gallery: [
      img('dogtrot', 'ruth-2-scaled.webp', 'The house at dusk with warm light through the glazed breezeway.', 'built'),
      img('dogtrot', 'ruth-3-scaled.webp', 'Corrugated metal and rust-toned siding with a red door, seen through landscaping.', 'built'),
      img('dogtrot', 'ruth-4-scaled.webp', 'The breezeway with a dining table, rug and a wall of windows under exposed beams.', 'built'),
      img('dogtrot', 'ruth-5-scaled.webp', 'Living room with high ceiling, clerestory windows and a butterfly chair.', 'built'),
      img('dogtrot', 'ruth-6-scaled.webp', 'Breezeway dining area looking toward the living room.', 'built'),
      img('dogtrot', 'ruth-7-scaled.webp', 'Living room with leather sofa, kilim rug and tall windows.', 'built'),
      img('dogtrot', 'ruth-8-scaled.webp', 'Kitchen with a bar, birch cabinets and pendant lights.', 'built'),
      img('dogtrot', 'ruth-9-scaled.webp', 'Bedroom with a green daybed and large windows.', 'built'),
      img('dogtrot', 'ruth-10-e1479927846227-scaled.webp', 'The breezeway from the end, with exposed beams and a corrugated wall.', 'built'),
    ],
  },
  {
    slug: 'casita-1100',
    name: 'Casita 1100',
    sf: 1100,
    beds: 3,
    baths: '1',
    modules: 2,
    dims: `30' × 36'`,
    summary: 'A compact three-bedroom home.',
    description: [
      'A compact three-bedroom home. A perfect ADU or small residence.',
      'Three bedrooms share one bath, with an open living and dining room across the second module.',
    ],
    hero: img('casita-1100', '1100-2.webp', 'Rendering of the Casita 1100 with a low-slope roof and a wall of sliding glass.', 'rendering'),
    floorplan: '/images/portfolio/casita-1100/floorplan.webp',
    footprint: [
      { x: 0, y: 4.4, w: 15, h: 36 },
      { x: 15, y: 0, w: 15, h: 36 },
    ],
    gallery: [
      img('casita-1100', '1100-1.webp', 'Rendering of the Casita 1100 from above and to the side.', 'rendering'),
      img('casita-1100', '1100-3-scaled.webp', 'Rendering of the Casita 1100 with a large picture window.', 'rendering'),
    ],
  },
];

export const bySlug = (slug: string) => models.find((m) => m.slug === slug)!;
