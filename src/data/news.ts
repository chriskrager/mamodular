// News posts at their original dated URLs. Newest first.
export interface Post {
  path: string; // /2019/05/23/slug/
  date: string; // ISO
  title: string;
  image: string;
  body: string[];
  links?: { label: string; href: string }[];
  embed?: { kind: 'youtube' | 'vimeo'; id: string };
  monthOnly?: boolean; // show “Month YYYY” instead of a full date
  extra?: string[]; // additional images shown on the post page
}
const img = (n: string) => `/images/news/${n}.webp`;

export const posts: Post[] = [
  { path: '/2026/10/01/groundbreaking-two-new-spec-homes-in-east-austin/', date: '2026-10-01', monthOnly: true,
    title: 'Groundbreaking: two new spec homes in East Austin', image: img('groundbreaking'),
    body: ['ma modular has broken ground on the construction of two new houses (and new floorplans) in East Austin. The modules will be set in early December ’26 and the project is expected to be complete in the Spring of 2027. Look for info here on an open house. Email chris@krdb.com for more information.'],
    links: [{ label: 'Email chris@krdb.com', href: 'mailto:chris@krdb.com' }] },
  { path: '/2026/09/01/greenwood-residences/', date: '2026-09-01', monthOnly: true,
    title: 'Greenwood Residences', image: img('greenwood'),
    body: ['ma modular recently completed construction of a multi-generational family compound in East Austin. Utilizing the HOME ordinance, the 12k sf lot has three residences and an accessory building on site.'],
    links: [{ label: 'See the video', href: '/videos/' }] },
  { path: '/2025/08/01/robbins-place-first-modular-home-ordinance-project/', date: '2025-08-01', monthOnly: true,
    title: 'Robbins Place: First modular HOME ordinance project', image: img('robbins'),
    body: ['One of the first HOME ordinance projects built, and the first modular version, this three-unit project serves as student housing in UT’s West Campus neighborhood. The three, three-story, 3bd/3.5ba units all have generous front yards and rooftop decks.'],
    links: [{ label: 'See the videos', href: '/videos/' }] },
  { path: '/2024/09/01/new-dogtrot-plan-set-in-austin/', date: '2024-09-01', monthOnly: true,
    title: 'New Dogtrot plan set in Austin', image: img('dogtrot-allandale'),
    body: ['Set on a tree-challenged lot in the Allandale neighborhood of Austin, this version of one of our most popular plans, the Dogtrot, will serve as a primary residence on this site.'],
    links: [{ label: 'The Dogtrot plan', href: '/portfolio/dogtrot/' }] },
  { path: '/2023/08/01/blue-sage-hotel-permitted-in-dripping-springs/', date: '2023-08-01', monthOnly: true,
    title: 'Blue Sage Hotel permitted in Dripping Springs', image: img('blue-sage'),
    body: ['ma modular and KRDB are very excited about the 58 room Blue Sage Hotel in Dripping Springs. The cabin style hotel will have modular sleeping quarters, while the main space, containing a Southwest style restaurant, a gym, spa and conference facility, all surrounding a pool, will be fabricated from CLT and glulams. The groundbreaking for the fully-entitled project is TBD.'],
    links: [{ label: 'Blue Sage Hotel', href: '/portfolio/blue-sage-hotel/' }] },
  { path: '/2022/07/01/kindred-uncommon-permits-approved/', date: '2022-07-01', monthOnly: true,
    title: 'Kindred Uncommon permits approved', image: img('kindred'),
    body: ['ma modular and KRDB are partners in the upcoming Kindred Uncommon 55+ community in Buda, TX, 15 minutes south of Austin. The 76 unit rental project will have 600sf 1bd/1ba units and 880sf 2bd/1.5ba units on a 6 acre site that was formerly an organic farm. The existing farmhouse will be a shared common house and additional amenity will include two maker-spaces, a community garden, a dog park and pool area.'],
    links: [{ label: 'Kindred Uncommon', href: '/portfolio/kindred-uncommon/' }] },
  { path: '/2019/08/27/https-www-hiveforhousing-com-re-think-podcast-modular-may-not-be-new-but-its-benefits-are_o-2/', date: '2019-08-27',
    title: 'Chris Krager, KRDB Principal, featured on Hive’s “Re:think” podcast discussing modular innovation.', image: img('hive'),
    body: ['HIVE (Housing, Innovation, Vision and Economics) community transforms housing with conversation to inspire creativity, higher performance and better solutions in design, finance, demographics, business management and products.'],
    links: [{ label: 'Listen to the podcast', href: 'https://podcasts.apple.com/cr/podcast/modular-may-not-be-new-but-its-benefits-are/id1459396026?i=1000446907341&l=en-GB' }] },
  { path: '/2019/05/23/ma-magnolia/', date: '2019-05-23', title: 'ma modular’s first mixed-use/multi-family project in ATX', image: img('magnolia'),
    body: ['Magnolia is here! ma modular’s first mixed-use multi-family project. 17 units on a half-acre lot, just blocks from downtown Austin.'],
    links: [{ label: 'See the video', href: 'https://youtu.be/vp0QHf-LCx0' }, { label: 'MLK Mixed Use', href: '/portfolio/mlk-mixed-use/' }] },
  { path: '/2018/10/30/vox-home-of-the-future/', date: '2018-10-30', title: 'ma house featured in Vox Media’s “Home of the Future”', image: img('vox'),
    body: ['ma modular and Vox Media/The Verge recently partnered to create a web series entitled “the Home of the Future”. Hosted by Grant Imahara (of MythBusters), the series is a deep dive into modular construction and the sustainable and smart technology integrated in the project.'],
    links: [{ label: 'See the video', href: 'https://www.youtube.com/watch?v=6L68XIics5c' }] },
  { path: '/2018/10/30/making-sense-of-modular/', date: '2018-10-30', title: '“Making Sense of Modular”', image: img('making-sense'),
    body: ['For the 2016 International Builders’ Show, ma modular teamed with development partner LOF Ventures to construct one of the Quintero units on the grounds of the Las Vegas Convention Center.',
           'The house was fully fabricated and functional in 3 days, and was visited by many of the 80,000 attendees of the IBS.', 'Builder Magazine interviewed partners Chris Krager and Noah Ornstein about this project, and modular in general.'] },
  { path: '/2018/10/30/best-prefab-modular-in-the-us/', date: '2018-10-30', title: '“The Best Prefab/Modular Home Builders in the United States”', image: img('best-prefab'),
    body: ['Homebuilder Digest recently published a list of the “Best Prefab/Modular Homebuilders in the US”, and ma modular is proud to be listed as #4.'],
    links: [{ label: 'Read the full article', href: 'https://www.homebuilderdigest.com/the-best-prefab-modular-home-builders-in-the-united-states/' }] },
  { path: '/2018/08/01/five-unit-belmont-project-set-in-echo-park-los-angeles/', date: '2018-08-01', monthOnly: true,
    title: 'Five unit Belmont project set in Echo Park, Los Angeles', image: img('belmont'), extra: [img('belmont-2')],
    body: ['ma modular’s second Small Lot Ordinance project in the Echo Park neighborhood of Los Angeles perches 5 single family homes on a bluff overlooking the Echo Park Lake, and the downtown skyline.'],
    links: [{ label: 'Belmont', href: '/portfolio/belmont/' }] },
  { path: '/2017/05/01/ma-modular-in-upstate-ny/', date: '2017-05-01', monthOnly: true,
    title: 'ma modular in Upstate NY', image: img('upstate-ny'),
    body: ['One of our most popular plans, the Luna House, was completed in Millerton, NY, about two hours north of Manhattan, and is our first, of hopefully many houses in the region.'],
    links: [{ label: 'The Luna plan', href: '/portfolio/luna/' }] },
  { path: '/2016/12/12/set-begins-for-quintero-4-unit-project-in-echo-park/', date: '2016-12-12', title: 'Quintero four unit small lot project set under way', image: img('quintero-set'),
    body: ['Located just a couple blocks off of Sunset Blvd, in the Echo Park neighborhood of Los Angeles, this four unit project is one of five projects on the boards with LOF partners. Using Los Angeles’ Small Lot Ordinance, these three story, 2000sf plans have stellar views of the LA skyline from the roof decks.'],
    links: [{ label: 'Quintero Small Lot', href: '/portfolio/quintero/' }] },
  { path: '/2016/11/18/marfa-dwell-prefab-issue/', date: '2016-11-18', title: 'Marfa House Featured in Dwell Annual Prefab Issue', image: img('marfa-dwell'),
    body: ['Situated on one of the highest spots in the West Texas town of Marfa, ma modular’s Marfa house commands panoramic views of the Chihuahuan Desert, the town, and dramatic sunsets.'],
    links: [{ label: 'The Marfa plan', href: '/portfolio/marfa/' }] },
  { path: '/2016/11/15/marfa-modern-book-release/', date: '2016-11-15', title: 'Marfa Modern Book Release', image: img('marfa-book'),
    body: ['[Taken from The Monacelli Press article by Helen Thompson]', 'Twenty-one houses in and around Marfa, Texas, provide a glimpse at creative life and design in one of the art world’s most intriguing destinations.',
           'In keeping with Judd’s site-specific intentions, those who call Marfa home have made a choice to live in concert with their untamed, open surroundings. Marfa Modern features houses that represent unique responses to this setting: the sky, its light and sense of isolation.'],
    links: [{ label: 'The Monacelli Press', href: 'http://www.monacellipress.com/book/' }, { label: 'Architectural Digest’s commentary', href: 'http://www.architecturaldigest.com/gallery/modernist-marfa-homes-that-epitomize-high-desert-style/all' }] },
  { path: '/2016/11/15/pre-fabulous-small-houses/', date: '2016-11-15', title: 'Pre-Fabulous Small Houses', image: img('prefabulous'),
    body: ['ma’s Blanco River house is featured in Sheri Koones’ recent book by Taunton Press, Prefabulous Small Houses, which explores the beauty, variety, design and environmentally positive benefits of prefab construction. The houses range in size from 400 sq. ft. to 2,000 sq. ft.'],
    links: [{ label: 'About the book', href: 'https://www.sherikoones.com/prefabulous-small-houses/' }, { label: 'The Blanco River plan', href: '/portfolio/blanco-river/' }] },
  { path: '/2016/11/14/ruth-house/', date: '2016-11-14', title: 'Ruth House', image: img('ruth'), body: [], embed: { kind: 'youtube', id: 'K5d0whVwbIQ' }, links: [{ label: 'The Dogtrot plan', href: '/portfolio/dogtrot/' }] },
  { path: '/2016/11/14/bluecrest-home-set/', date: '2016-11-14', title: 'Bluecrest Home Set', image: img('bluecrest'), body: [], embed: { kind: 'vimeo', id: '19729209' }, links: [{ label: 'The Blue Crest plan', href: '/portfolio/blue-crest/' }] },
  { path: '/2016/11/14/luna-time-lapse/', date: '2016-11-14', title: 'Luna Time Lapse', image: img('luna'), body: [], embed: { kind: 'youtube', id: 'u8onA1Zjnb8' }, links: [{ label: 'The Luna plan', href: '/portfolio/luna/' }] },
  { path: '/2016/11/14/york-hill-time-lapse/', date: '2016-11-14', title: 'ma modular’s first Los Angeles mod in Eagle Rock', image: img('york-hill'), embed: { kind: 'youtube', id: 'ekY1M8SCRr0' },
    body: ['After fabricating the 2300sf Fire Island plan at the International Builder’s Show in Las Vegas in 2014, the house was moved to a hillside site in the Eagle Rock neighborhood of Los Angeles.'],
  },
];
export const fmtDate = (iso: string, monthOnly = false) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', monthOnly ? { month: 'long', year: 'numeric' } : { month: 'long', day: 'numeric', year: 'numeric' });
