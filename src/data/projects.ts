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
  { slug: 'mlk-mixed-use', name: "MLK / Magnolia", kind: "Mixed use, Austin",
    summary: "This 24k sf mixed-use project was the first modular project of its kind in Austin.",
    body: ["Developed, designed and built by KRDB, the project consists of 17 condominium units and 3 small commercial spaces. Organized around a central courtyard, the modular units comprise 15 of the 17 condos and are of three types: 630sf, 1bd/1ba one-story units; 1330sf, 2bd/2ba two-story units; and 1850sf, 3bd/2.5ba three-story units."],
    facts: [{ label: "Size", value: "24,000 sf" }, { label: "Condominiums", value: "17" }, { label: "Commercial spaces", value: "3" }, { label: "Location", value: "Austin, TX" }],
    video: 'https://vimeo.com/325481966/c77c2022d8', photos: ph('mlk-mixed-use', 'MLK Mixed Use') },
  { slug: 'quintero', name: 'Quintero Small Lot', kind: 'Small lot, Los Angeles',
    summary: 'Four three-story homes in Echo Park.',
    body: ['Located a couple of blocks off Sunset Blvd in the Echo Park neighborhood of Los Angeles, this four-unit project is one of five on the boards with LOF partners. Using Los Angeles’ Small Lot Ordinance, the three-story, 2,000 sf plans have stellar views of the LA skyline from the roof decks.',
           'For the 2016 International Builders’ Show, ma modular and LOF Ventures built one of the Quintero units on the grounds of the Las Vegas Convention Center. It was fully fabricated and functional in three days.'],
    facts: [{ label: 'Units', value: '4' }, { label: 'Stories', value: '3' }, { label: 'Size', value: '2,000 sf each' }, { label: 'Location', value: 'Echo Park, Los Angeles' }],
    photos: ph('quintero', 'Quintero') },
  { slug: 'belmont', name: "Belmont Small Lot", kind: "Small lot, Los Angeles",
    summary: "This small lot development in the Echo Park neighborhood of Los Angeles consists of five 2000sf units on two lots that previously held two homes.",
    body: ["The three northern units have panoramic views over Echo Park Lake and the downtown skyline."],
    facts: [{ label: "Units", value: "5" }, { label: "Size", value: "2,000 sf each" }, { label: "Location", value: "Echo Park, Los Angeles" }],
    photos: ph('belmont', 'Belmont') },
  { slug: 'onteora', name: "Onteora", kind: "Hillside neighborhood, Los Angeles",
    summary: "Located on a 9 acre hillside tract in the Eagle Rock neighborhood of Los Angeles, the Onteora neighborhood will consist of 15 homes built in two phases.",
    body: ["Most of the units are comprised of the same two modules, configured according to the challenging hillside terrain."],
    facts: [{ label: "Homes", value: "15" }, { label: "Site", value: "9 acres" }, { label: "Location", value: "Eagle Rock, Los Angeles" }],
    photos: ph('onteora', 'Onteora') },
  { slug: 'kindred-uncommon', name: "Kindred Uncommon", kind: "Active adult community, Buda, TX",
    summary: "With a “Silver Tsunami” approaching, Kindred Uncommon proposes a much needed alternative to the standard active adult community.",
    body: ["Located in Buda, TX, 15 miles south of Austin, the 76 unit cottage style community is located on a 6 acre former organic farm, and only a 5 minute walk to the town center. The 550sf and 880sf units are arrayed around shared landscape spaces. The former farmhouse is a community house, and two maker spaces sit adjacent. A community garden, dog park, and pool area round out the site amenities."],
    facts: [{ label: "Units", value: "76" }, { label: "Site", value: "6 acres" }, { label: "Location", value: "Buda, TX" }],
    photos: [...Array(13)].map((_, i) => ({ src: `/images/portfolio/kindred-uncommon/${String(i + 1).padStart(2, '0')}.webp`, alt: `Kindred Uncommon, view ${i + 1}` })) },
  { slug: 'blue-sage-hotel', name: "Blue Sage Hotel", kind: "Hotel, Dripping Springs, TX",
    summary: "Located in the Hill Country hamlet of Dripping Springs, TX the Blue Sage Resort and Spa will sit on an 11 acre site, with 57 cabin style hotel rooms, plus a restaurant, spa, pool and event center.",
    facts: [{ label: "Hotel rooms", value: "57" }, { label: "Site", value: "11 acres" }, { label: "Location", value: "Dripping Springs, TX" }],
    photos: [...Array(19)].map((_, i) => ({ src: `/images/portfolio/blue-sage-hotel/${String(i + 1).padStart(2, '0')}.webp`, alt: `Blue Sage Hotel, view ${i + 1}` })) },
  { slug: 'st-louis-townhouses', name: "St. Louis Modular Townhouses", kind: "Townhouses, St. Louis, MO",
    summary: "Eight affordable townhouses in the Vandeventer neighborhood of St. Louis intended for US veterans.",
    facts: [{ label: "Units", value: "8" }, { label: "Location", value: "Vandeventer, St. Louis, MO" }],
    photos: [...Array(6)].map((_, i) => ({ src: `/images/portfolio/st-louis-townhouses/${String(i + 1).padStart(2, '0')}.webp`, alt: `St. Louis townhouses, view ${i + 1}` })) },
  { slug: 'ventura-mixed-use', name: "Ventura Mixed-Use", kind: "Mixed use, Ventura, CA",
    summary: "A former 6 acre industrial site will be converted to 125 condominium units and commercial spaces in Ventura, CA.",
    body: ["The mixed-use development will offer one-, two- and three-bedroom units, nine of which are expected to be designated as affordable. The community will also have 10,000 square feet of commercial space that’s expected to accommodate four tenants."],
    facts: [{ label: "Condominiums", value: "125" }, { label: "Site", value: "6 acres" }, { label: "Commercial", value: "10,000 sf" }, { label: "Location", value: "Ventura, CA" }],
    photos: ph('ventura-mixed-use', 'Ventura') },
  { slug: 'duplex', name: "Duplex", kind: "Concept study, Austin",
    summary: "Inspired by Austin’s updated LDC with the HOME ordinance, this three unit project looks at the most efficient way to put these units on a mid-block lot.",
    body: ["With two 1800sf, side-by-side, three story units upfront and an elevated ADU over parking in the rear, the duplexes still have space for back yards."],
    photos: [
      { src: '/images/portfolio/duplex/01.webp', alt: "Street view of the duplex: two three-story units clad in cedar over stucco, with covered balconies and a gravel drive alongside." },
      { src: '/images/portfolio/duplex/02.webp', alt: "Aerial rendering of the duplex and a second unit at the rear, with decks and a shared parking court." },
      { src: '/images/portfolio/duplex/03.webp', alt: "Aerial photo of the completed duplex, with a second building on stilts above covered parking." },
      { src: '/images/portfolio/duplex/04.webp', alt: "Aerial view of the duplex and a neighboring unit, each with a deck and plunge pool and a rooftop terrace." },
    ] },
  { slug: 'holly-mixed-use', name: "Mixed Zoning / Mixed Use", kind: "Concept study, Austin",
    summary: "This conceptual plan looked at two lots in Austin’s near East Holly neighborhood to explore possibilities for combining a HOME residential typology with a denser mixed-use typology.",
    body: ["A site that previously held only two homes in this context could support 9 residential units and one commercial space."],
    photos: [
      { src: '/images/portfolio/holly-mixed-use/01.webp', alt: "Aerial photo of the Holly project: modular townhouses in cedar and stucco arranged around a shared courtyard tree." },
      { src: '/images/portfolio/holly-mixed-use/02.webp', alt: "Street rendering of the Holly mixed-use project with a ground-floor patio and string lights." },
      { src: '/images/portfolio/holly-mixed-use/03.webp', alt: "Rendering of modular townhouses with cedar-clad balconies and roof terraces." },
      { src: '/images/portfolio/holly-mixed-use/04.webp', alt: "Aerial rendering of the Holly project: clustered modular homes with roof decks around a shared lane." },
    ] },
  { slug: 'oaksprings-townhouses', name: "Oaksprings Townhouses", kind: "Concept study, East Austin",
    summary: "A schematic exploration of a 1 acre site in East Austin. The rendered configuration yields 32 units.",
    photos: [
      { src: '/images/portfolio/oaksprings-townhouses/01.webp', alt: "Aerial photo of rows of modular townhouses with metal roofs, brick and cedar, around a shared drive." },
      { src: '/images/portfolio/oaksprings-townhouses/02.webp', alt: "Street rendering of two-story modular townhouses with cedar-clad balconies over stucco entries." },
    ] },
  { slug: 'pocket-neighborhood', name: "Pocket Neighborhood", kind: "Concept study, Austin",
    summary: "With the series of LDC changes in Austin, including HOME, minimum lot size reductions, and the elimination of the McMansion ordinance, this scheme explores the possibilities for a 1 acre pocket neighborhood.",
    photos: [
      { src: '/images/portfolio/pocket-neighborhood/01.webp', alt: "Aerial rendering of a pocket neighborhood of small modular homes along a tree-lined street." },
      { src: '/images/portfolio/pocket-neighborhood/02.webp', alt: "Photo of two modular homes with a shared driveway, balcony and landscaped front yards." },
    ] },
];
export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
