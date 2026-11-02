// Configurator data for the Casita 550 pilot. Colors are flat approximations of each selection.
// Names match /selections/ (siding and roof colors are generic placeholders until confirmed).
export interface CfgOpt { name: string; color: string }
export interface CfgSlot { id: string; label: string; mat: string[]; rough: number; metal: number; opts: CfgOpt[]; def: number }
export const cfg550: { model: string; slug: string; name: string; slots: CfgSlot[]; fixed: Record<string, { color: string; rough?: number; metal?: number; opacity?: number }>; roofOff: string[] } = {
  model: '/models/casita-550.glb',
  slug: 'grand-ma-550',
  name: 'Grand-Ma 550',
  slots: [
  {
    "id": "siding",
    "label": "Exterior cladding",
    "mat": [
      "siding"
    ],
    "rough": 0.85,
    "metal": 0,
    "opts": [
      {
        "name": "Fiber cement, white",
        "color": "#ecebe7"
      },
      {
        "name": "Fiber cement, warm gray",
        "color": "#c8c3ba"
      },
      {
        "name": "Fiber cement, charcoal",
        "color": "#4a4d50"
      },
      {
        "name": "Fiber cement, sage",
        "color": "#9ba692"
      },
      {
        "name": "Wood, natural",
        "color": "#b58a5b"
      },
      {
        "name": "Wood, dark stain",
        "color": "#5a4332"
      }
    ],
    "def": 1
  },
  {
    "id": "roof",
    "label": "Roof",
    "mat": [
      "roof"
    ],
    "rough": 0.4,
    "metal": 0.55,
    "opts": [
      {
        "name": "Standing seam metal, charcoal",
        "color": "#4b4f53"
      },
      {
        "name": "Standing seam metal, black",
        "color": "#232628"
      },
      {
        "name": "Standing seam metal, light gray",
        "color": "#b7bbbd"
      },
      {
        "name": "Standing seam metal, bronze",
        "color": "#6b5a4a"
      },
      {
        "name": "Standing seam metal, white",
        "color": "#e9e9e6"
      }
    ],
    "def": 0
  },
  {
    "id": "floor",
    "label": "Flooring",
    "mat": [
      "floor"
    ],
    "rough": 0.55,
    "metal": 0,
    "opts": [
      {
        "name": "Sanctuary Oak, Serenity",
        "color": "#d7b79a"
      },
      {
        "name": "Sanctuary Oak, Haven",
        "color": "#a7937c"
      },
      {
        "name": "Sanctuary Oak, Hearth",
        "color": "#66584a"
      },
      {
        "name": "Sanctuary Oak, Fireside",
        "color": "#c19d75"
      }
    ],
    "def": 0
  },
  {
    "id": "counter",
    "label": "Countertops",
    "mat": [
      "counter"
    ],
    "rough": 0.25,
    "metal": 0,
    "opts": [
      {
        "name": "Arctic White",
        "color": "#f3f1ef"
      },
      {
        "name": "Alabaster White",
        "color": "#ddd7d3"
      },
      {
        "name": "Calacatta Abezzo",
        "color": "#e8e9e9"
      },
      {
        "name": "Fossil Gray",
        "color": "#8c8783"
      },
      {
        "name": "Manhattan Gray",
        "color": "#56524f"
      },
      {
        "name": "Midnight Corvo",
        "color": "#151719"
      },
      {
        "name": "Soapstone Mist",
        "color": "#b9b5b3"
      },
      {
        "name": "New Carrara Marmi",
        "color": "#efedec"
      }
    ],
    "def": 0
  },
  {
    "id": "cabinets",
    "label": "Cabinets",
    "mat": [
      "cabinets"
    ],
    "rough": 0.6,
    "metal": 0,
    "opts": [
      {
        "name": "Wilsonart laminate, Crystal Matte",
        "color": "#ebe9e4"
      },
      {
        "name": "Wilsonart laminate, Charcoal Matte",
        "color": "#3b3d40"
      },
      {
        "name": "Wood-look cabinets (Egger)",
        "color": "#b58f66"
      }
    ],
    "def": 0
  },
  {
    "id": "tile",
    "label": "Tile (backsplash and tub surround)",
    "mat": [
      "tile"
    ],
    "rough": 0.3,
    "metal": 0,
    "opts": [
      {
        "name": "Restore Bright White 3\"×12\" subway",
        "color": "#e6e6e6"
      },
      {
        "name": "Restore Arctic White hexagon mosaic",
        "color": "#f0f1ef"
      },
      {
        "name": "Restore Matte Black hexagon mosaic",
        "color": "#747573"
      },
      {
        "name": "Rittenhouse Square Matte Black 3\"×6\" subway",
        "color": "#808080"
      },
      {
        "name": "Rittenhouse Square Urban Putty 3\"×6\" subway",
        "color": "#e6dfd7"
      },
      {
        "name": "Remedy Herbal fluted wall tile",
        "color": "#d0d5d1"
      },
      {
        "name": "Artcrafted Aloe 3\"×12\" wall tile",
        "color": "#e2e4df"
      },
      {
        "name": "Artefino Element Stone mosaic",
        "color": "#a8aaa4"
      }
    ],
    "def": 0
  }
],
  fixed: {
    walls: { color: '#f1efea' }, ceiling: { color: '#fafaf8' }, subfloor: { color: '#d8d3c8' },
    glazing: { color: '#8fa4ad', opacity: 0.5, rough: 0.1 }, trim: { color: '#f2f2f0' },
    appliance: { color: '#b9bdc1', metal: 0.6, rough: 0.35 }, fixture: { color: '#fbfbfb', rough: 0.3 },
    furniture: { color: '#cfc9bf' }, light: { color: '#e8dcc0' }, misc: { color: '#f2f2f0' },
  },
  roofOff: ['roof', 'ceiling', 'trim', 'light'],
};
