// Material options and swatch photos, shared by the Features pages.
export interface Swatch { src?: string; alt: string; w?: number; h?: number }
export interface Group { t: string; i: string; p: Swatch[] }
export const standard: Group[] = [
 {
  "t": "Exterior Finish",
  "i": "home",
  "p": [
   {
    "src": "/images/features/standing-seam-roof.webp",
    "alt": "Standing seam metal roof",
    "w": 318,
    "h": 318
   },
   {
    "src": "/images/features/hardie.webp",
    "alt": "Fiber cement panels",
    "w": 1280,
    "h": 1610
   },
   {
    "src": "/images/features/painted-stucco.webp",
    "alt": "Painted stucco",
    "w": 1024,
    "h": 682
   },
   {
    "src": "/images/features/cedar.webp",
    "alt": "Cedar siding",
    "w": 318,
    "h": 318
   }
  ]
 },
 {
  "t": "Interior Finish",
  "i": "brush",
  "p": [
   {
    "src": "/images/features/orange-peel.webp",
    "alt": "Light orange-peel sheetrock",
    "w": 800,
    "h": 537
   },
   {
    "src": "/images/features/bamboo.webp",
    "alt": "Strand bamboo flooring",
    "w": 1000,
    "h": 1000
   }
  ]
 },
 {
  "t": "Cabinets",
  "i": "cab",
  "p": [
   {
    "src": "/images/features/gloss-white.webp",
    "alt": "Factory-built cabinets, gloss white",
    "w": 513,
    "h": 650
   },
   {
    "src": "/images/features/gloss-gray.webp",
    "alt": "Factory-built cabinets, gloss gray",
    "w": 513,
    "h": 650
   }
  ]
 },
 {
  "t": "Tile",
  "i": "tile",
  "p": [
   {
    "src": "/images/features/subway.webp",
    "alt": "Subway tile",
    "w": 700,
    "h": 546
   },
   {
    "src": "/images/features/koshi-grey.webp",
    "alt": "Imola Koshi, grey",
    "w": 504,
    "h": 504
   },
   {
    "src": "/images/features/koshi-white.webp",
    "alt": "Imola Koshi, white",
    "w": 800,
    "h": 805
   }
  ]
 },
 {
  "t": "Countertops",
  "i": "layers",
  "p": [
   {
    "src": "/images/features/stellar-night.webp",
    "alt": "Quartzite, black (Stellar Night)",
    "w": 1000,
    "h": 1000
   },
   {
    "src": "/images/features/blanco-maple.webp",
    "alt": "Quartzite, white (Blanco Maple)",
    "w": 1000,
    "h": 1000
   },
   {
    "src": "/images/features/grey-expo.webp",
    "alt": "Quartzite, grey (Grey Expo)",
    "w": 1000,
    "h": 1000
   }
  ]
 },
 {
  "t": "Plumbing Fixtures",
  "i": "drop",
  "p": [
   {
    "src": "/images/features/toilet.webp",
    "alt": "One-piece toilet",
    "w": 600,
    "h": 600
   },
   {
    "src": "/images/features/sink.webp",
    "alt": "Jasper single kitchen sink",
    "w": 150,
    "h": 87
   },
   {
    "src": "/images/features/bath-sink.webp",
    "alt": "Kilgore double sink",
    "w": 150,
    "h": 83
   },
   {
    "src": "/images/features/blanco-faucet.webp",
    "alt": "Blanco kitchen faucet",
    "w": 150,
    "h": 291
   },
   {
    "src": "/images/features/moen-kitchen.webp",
    "alt": "Moen Align kitchen faucet",
    "w": 600,
    "h": 600
   },
   {
    "src": "/images/features/kohler-ledena.webp",
    "alt": "Kohler Ledena",
    "w": 318,
    "h": 195
   },
   {
    "src": "/images/features/moen-shower.webp",
    "alt": "Moen Level shower",
    "w": 650,
    "h": 650
   },
   {
    "src": "/images/features/moen-align.webp",
    "alt": "Moen Align",
    "w": 600,
    "h": 600
   },
   {
    "src": "/images/features/rinnai.webp",
    "alt": "Rinnai tankless water heater",
    "w": 1024,
    "h": 1024
   }
  ]
 },
 {
  "t": "Appliances",
  "i": "power",
  "p": [
   {
    "src": "/images/features/ge-package.webp",
    "alt": "GE stainless package",
    "w": 1000,
    "h": 1000
   }
  ]
 },
 {
  "t": "Electrical Fixtures",
  "i": "bulb",
  "p": [
   {
    "src": "/images/features/pendant.webp",
    "alt": "West Elm globe pendant",
    "w": 710,
    "h": 710
   },
   {
    "src": "/images/features/sconce.webp",
    "alt": "Kovacs sconce",
    "w": 400,
    "h": 400
   },
   {
    "src": "/images/features/leviton.webp",
    "alt": "Leviton Decora switches",
    "w": 1280,
    "h": 2088
   },
   {
    "src": "/images/features/kichler.webp",
    "alt": "Kichler ceiling light",
    "w": 900,
    "h": 900
   }
  ]
 }
];
export const premium: Group[] = [
 {
  "t": "Exterior Finish",
  "i": "home",
  "p": [
   {
    "src": "/images/features/p-stucco.webp",
    "alt": "Integral color stucco",
    "w": 318,
    "h": 318
   },
   {
    "src": "/images/features/ipe.webp",
    "alt": "Ipe siding",
    "w": 700,
    "h": 467
   },
   {
    "src": "/images/features/metal-siding.webp",
    "alt": "Painted metal siding",
    "w": 1024,
    "h": 341
   },
   {
    "src": "/images/features/corten.webp",
    "alt": "Corten steel",
    "w": 900,
    "h": 1200
   }
  ]
 },
 {
  "t": "Interior Finish",
  "i": "brush",
  "p": [
   {
    "src": "/images/features/smooth-sheetrock.webp",
    "alt": "Smooth-finish sheetrock",
    "w": 640,
    "h": 480
   },
   {
    "src": "/images/features/longleaf.webp",
    "alt": "Long leaf pine flooring",
    "w": 1024,
    "h": 1024
   },
   {
    "src": "/images/features/mesquite.webp",
    "alt": "Mesquite flooring",
    "w": 1024,
    "h": 1024
   }
  ]
 },
 {
  "t": "Cabinets",
  "i": "cab",
  "p": [
   {
    "src": "/images/features/custom-cabinets.webp",
    "alt": "Custom cabinets",
    "w": 1024,
    "h": 695
   }
  ]
 },
 {
  "t": "Tile",
  "i": "tile",
  "p": [
   {
    "src": "/images/features/concrete-tile.webp",
    "alt": "Concrete tile",
    "w": 1280,
    "h": 1600
   },
   {
    "src": "/images/features/concrete-floor.webp",
    "alt": "Concrete tile floor",
    "w": 1024,
    "h": 1024
   },
   {
    "src": "/images/features/glass-mosaic.webp",
    "alt": "Vidrepur glass mosaic",
    "w": 377,
    "h": 376
   },
   {
    "src": "/images/features/interceramic.webp",
    "alt": "Interceramic glass",
    "w": 225,
    "h": 225
   }
  ]
 },
 {
  "t": "Countertops",
  "i": "layers",
  "p": [
   {
    "src": "/images/features/soapstone.webp",
    "alt": "Soapstone",
    "w": 374,
    "h": 197
   },
   {
    "src": "/images/features/carrara.webp",
    "alt": "Bianco Carrara marble",
    "w": 1024,
    "h": 632
   }
  ]
 },
 {
  "t": "Plumbing Fixtures",
  "i": "drop",
  "p": [
   {
    "src": "/images/features/hansgrohe.webp",
    "alt": "Hansgrohe",
    "w": 1000,
    "h": 1000
   },
   {
    "src": "/images/features/kohler-purist.webp",
    "alt": "Kohler Purist",
    "w": 1024,
    "h": 455
   }
  ]
 },
 {
  "t": "Appliances",
  "i": "power",
  "p": [
   {
    "src": "/images/features/jennair.webp",
    "alt": "Jenn-Air slide-in package",
    "w": 408,
    "h": 292
   }
  ]
 }
];
