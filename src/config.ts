// Site-wide settings. Edit here; every page reads from this file.
export const site = {
  name: 'ma modular',
  url: 'https://www.mamodular.com',
  // While false: every page gets noindex and robots.txt blocks crawlers. Flip to true on launch day.
  live: false,
  email: 'info@mamodular.com',
  phone: '(512) 374-0946', // confirmed
  address: ['1101 E 6th St, Suite A', 'Austin, TX 78702'], // the old site said 916 Springdale Rd
  facebook: 'https://www.facebook.com/ma-modular-288219029546/',
  twitter: 'https://twitter.com/ma_modular',
  ga4Id: '', // e.g. 'G-XXXXXXXXXX'. Empty = no tracking script.
  // CONFIRM wording with the lender.
  financingNote:
    'Financing is provided by a third-party lender. Terms, approval and eligibility are set by the lender.',
};

// Same pages as the old site, same URLs.
export const nav = [
  { href: '/find-your-ma/', label: 'Find your ma' },
  { href: '/features/', label: 'Features' },
  { href: '/myths/', label: 'Myths' },
  { href: '/steps/', label: 'Getting started' },
  { href: '/about/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/news/', label: 'News' },
  { href: '/multi-family/', label: 'Development Projects', accent: true },
  { href: '/videos/', label: 'Podcasts and Videos' },
  { href: '/contact/', label: 'Contact' },
];
export const footerNav = [
  { href: '/adus-aka-granny-flat-tiny-house-etc/', label: "ADU's" },
  { href: '/locations/', label: 'Locations' },
  { href: 'http://www.krdb.com', label: 'KRDB' },
];
