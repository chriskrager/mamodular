// Development projects (the old Multi-Family page). Images are listed in images.json.
import images from './images.json';
const imgs = images as Record<string, { photos: string[]; plan: string | null }>;

export interface Project {
  slug: string; name: string; kind: string; summary: string;
  body?: string[]; facts?: { label: string; value: string }[];
  video?: string; photos: { src: string; alt: string }[];
}
const ph = (slug: string, name: string) => imgs[slug].photos.map((src, i) => ({ src, alt: `${name}, view ${i + 1}` }));

export const projects: Project[] = [
  { slug: 'mlk-mixed-use', name: 'MLK Mixed Use', kind: 'Mixed use, Austin',
    summary: "ma modular's first mixed-use / multi-family project in Austin.",
    body: ["Magnolia is ma modular's first mixed-use multi-family project: 17 units on a half-acre lot, just blocks from downtown Austin."],
    facts: [{ label: 'Units', value: '17' }, { label: 'Site', value: '½ acre' }, { label: 'Location', value: 'Austin, TX' }],
    video: 'https://vimeo.com/325481966/c77c2022d8', photos: ph('mlk-mixed-use', 'MLK Mixed Use') },
  { slug: 'quintero', name: 'Quintero Small Lot', kind: 'Small lot, Los Angeles',
    summary: 'Four three-story homes in Echo Park.',
    body: ['Located a couple of blocks off Sunset Blvd in the Echo Park neighborhood of Los Angeles, this four-unit project is one of five on the boards with LOF partners. Using Los Angeles’ Small Lot Ordinance, the three-story, 2,000 sf plans have stellar views of the LA skyline from the roof decks.',
           'For the 2016 International Builders’ Show, ma modular and LOF Ventures built one of the Quintero units on the grounds of the Las Vegas Convention Center. It was fully fabricated and functional in three days.'],
    facts: [{ label: 'Units', value: '4' }, { label: 'Stories', value: '3' }, { label: 'Size', value: '2,000 sf each' }, { label: 'Location', value: 'Echo Park, Los Angeles' }],
    photos: ph('quintero', 'Quintero') },
  { slug: 'belmont', name: 'Belmont Small Lot', kind: 'Small lot', summary: 'Small-lot homes, shown from the street and from the rear.', photos: ph('belmont', 'Belmont') },
  { slug: 'onteora', name: 'Onteora', kind: 'Residential', summary: 'A ma modular residential project.', photos: ph('onteora', 'Onteora') },
  { slug: 'ventura-mixed-use', name: 'Ventura Mixed-Use Development', kind: 'Mixed use', summary: 'Architectural renderings of a mixed-use development with courtyards and a central park.', photos: ph('ventura-mixed-use', 'Ventura') },
];
export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
