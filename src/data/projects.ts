// Development projects (the old Multi-Family page). Images are listed in images.json.
import images from './images.json';
const imgs = images as Record<string, { photos: string[]; plan: string | null }>;

export interface Project {
  slug: string; name: string; kind: string; summary: string;
  body?: string[]; facts?: { label: string; value: string }[];
  video?: string; hidden?: boolean; photos: { src: string; alt: string }[];
}
const ph = (slug: string, name: string) => imgs[slug].photos.map((src, i) => ({ src, alt: `${name}, view ${i + 1}` }));

export const projects: Project[] = [
  { slug: 'mlk-mixed-use', name: 'MLK / Magnolia', kind: 'Mixed use, Austin',
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
  { slug: 'kindred-uncommon', name: 'Kindred Uncommon', kind: 'Active adult community, Buda, TX',
    summary: '76-unit prototype active adult community in Buda, TX.',
    body: ['A 76-unit prototype active adult community in Buda, Texas, with a clubhouse, a commons and a maker space.'],
    facts: [{ label: 'Units', value: '76' }, { label: 'Location', value: 'Buda, TX' }, { label: 'Status', value: 'In progress' }],
    photos: [...Array(13)].map((_, i) => ({ src: `/images/portfolio/kindred-uncommon/${String(i + 1).padStart(2, '0')}.webp`, alt: `Kindred Uncommon, view ${i + 1}` })) },
  { slug: 'blue-sage-hotel', name: 'Blue Sage / Dripping Springs Hotel', kind: 'Hotel, Dripping Springs, TX',
    summary: 'A hotel in Dripping Springs, Texas.',
    body: ['Blue Sage is a hotel project in Dripping Springs, Texas.'],
    facts: [{ label: 'Location', value: 'Dripping Springs, TX' }],
    photos: [...Array(19)].map((_, i) => ({ src: `/images/portfolio/blue-sage-hotel/${String(i + 1).padStart(2, '0')}.webp`, alt: `Blue Sage Hotel, view ${i + 1}` })) },
  { slug: 'st-louis-townhouses', name: 'St. Louis Modular Townhouses', kind: 'Townhouses, St. Louis, MO',
    summary: 'Eight modular townhouses for veterans in the Vandeventer neighborhood.',
    body: ['Eight modular townhouses in the Vandeventer neighborhood just west of downtown St. Louis. The project is affordable housing for veterans.'],
    facts: [{ label: 'Units', value: '8' }, { label: 'Location', value: 'Vandeventer, St. Louis, MO' }, { label: 'Status', value: 'In progress' }],
    photos: [...Array(6)].map((_, i) => ({ src: `/images/portfolio/st-louis-townhouses/${String(i + 1).padStart(2, '0')}.webp`, alt: `St. Louis townhouses, view ${i + 1}` })) },
  { slug: 'ventura-mixed-use', name: 'Ventura Mixed-Use Development', kind: 'Mixed use', summary: 'Architectural renderings of a mixed-use development with courtyards and a central park.', photos: ph('ventura-mixed-use', 'Ventura') },
  // CONFIRM: details for the four projects below were not provided; text is descriptive only.
  { slug: 'duplex', name: 'Duplex', kind: 'Modular duplex', summary: 'A modular duplex in cedar and stucco, with a second building at the rear.',
    photos: [
      { src: '/images/portfolio/duplex/01.webp', alt: "Street view of the duplex: two three-story units clad in cedar over stucco, with covered balconies and a gravel drive alongside." },
      { src: '/images/portfolio/duplex/02.webp', alt: "Aerial rendering of the duplex and a second unit at the rear, with decks and a shared parking court." },
      { src: '/images/portfolio/duplex/03.webp', alt: "Aerial photo of the completed duplex, with a second building on stilts above covered parking." },
      { src: '/images/portfolio/duplex/04.webp', alt: "Aerial view of the duplex and a neighboring unit, each with a deck and plunge pool and a rooftop terrace." },
    ] },
  { slug: 'holly-mixed-use', name: 'Holly Mixed Use', kind: 'Mixed use', summary: 'Modular townhouses and a ground-floor patio around a shared courtyard.',
    photos: [
      { src: '/images/portfolio/holly-mixed-use/01.webp', alt: "Aerial photo of the Holly project: modular townhouses in cedar and stucco arranged around a shared courtyard tree." },
      { src: '/images/portfolio/holly-mixed-use/02.webp', alt: "Street rendering of the Holly mixed-use project with a ground-floor patio and string lights." },
      { src: '/images/portfolio/holly-mixed-use/03.webp', alt: "Rendering of modular townhouses with cedar-clad balconies and roof terraces." },
      { src: '/images/portfolio/holly-mixed-use/04.webp', alt: "Aerial rendering of the Holly project: clustered modular homes with roof decks around a shared lane." },
    ] },
  { slug: 'oaksprings-townhouses', name: 'Oaksprings Townhouses', kind: 'Townhouses', summary: 'Rows of modular townhouses with balconies, around a shared drive.',
    photos: [
      { src: '/images/portfolio/oaksprings-townhouses/01.webp', alt: "Aerial photo of rows of modular townhouses with metal roofs, brick and cedar, around a shared drive." },
      { src: '/images/portfolio/oaksprings-townhouses/02.webp', alt: "Street rendering of two-story modular townhouses with cedar-clad balconies over stucco entries." },
    ] },
  { slug: 'pocket-neighborhood', name: 'Pocket Neighborhood', kind: 'Pocket neighborhood', summary: 'Small modular homes arranged along a shared drive and green.',
    photos: [
      { src: '/images/portfolio/pocket-neighborhood/01.webp', alt: "Aerial rendering of a pocket neighborhood of small modular homes along a tree-lined street." },
      { src: '/images/portfolio/pocket-neighborhood/02.webp', alt: "Photo of two modular homes with a shared driveway, balcony and landscaped front yards." },
    ] },
];
export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
