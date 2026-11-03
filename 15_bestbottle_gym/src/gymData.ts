export interface GymProduct {
  id: string;
  code: string;
  tag: string;
  title: string;
  subtitle: string;
  price: number;
  compareAtPrice: number;
  bgColor: string;
  textColor: 'light' | 'dark';
  png: string;
  gif: string;
  capacity: string;
  coldHours: string;
  hotHours: string;
  steelGrade: string;
  lidType: string;
  badge?: string;
  specs: string[];
  description: string;
}

export interface CustomizerColor {
  id: string;
  name: string;
  hex: string;
  rgbLabel: string;
  png: string;
  gif: string;
  stockNote: string;
}

export interface FlipLetterTile {
  char: string;
  frontImg: string;
  flipImg: string;
  bg: string;
}

export const PRODUCTS_LETTERS: FlipLetterTile[] = [
  { char: '↓', frontImg: '/assets/arrow-down.png', flipImg: '/assets/flip-arrowdown.png', bg: '#1E88E5' },
  { char: 'P', frontImg: '/assets/letter-p.png', flipImg: '/assets/flip-p.webp', bg: '#F4D738' },
  { char: 'R', frontImg: '/assets/letter-r.png', flipImg: '/assets/flip-r.webp', bg: '#2A93B5' },
  { char: 'O', frontImg: '/assets/letter-o.webp', flipImg: '/assets/flip-o.webp', bg: '#E87825' },
  { char: 'D', frontImg: '/assets/letter-d.png', flipImg: '/assets/flip-d.webp', bg: '#009B4D' },
  { char: 'U', frontImg: '/assets/letter-u.png', flipImg: '/assets/flip-u.webp', bg: '#E32929' },
  { char: 'C', frontImg: '/assets/letter-c.webp', flipImg: '/assets/flip-c.webp', bg: '#EDEAE2' },
  { char: 'T', frontImg: '/assets/letter-t.png', flipImg: '/assets/flip-t.webp', bg: '#F4D738' },
  { char: 'S', frontImg: '/assets/letter-s.webp', flipImg: '/assets/flip-s.webp', bg: '#2A93B5' },
];

export const BUNDLES_LETTERS: FlipLetterTile[] = [
  { char: '→', frontImg: '/assets/arrow.png', flipImg: '/assets/flip-arrow.webp', bg: '#E87825' },
  { char: 'B', frontImg: '/assets/Letter-b.png', flipImg: '/assets/flip-b.png', bg: '#F4D738' },
  { char: 'U', frontImg: '/assets/Letter-U2.png', flipImg: '/assets/flip-u.webp', bg: '#009B4D' },
  { char: 'N', frontImg: '/assets/Letter-N.png', flipImg: '/assets/flip-n.png', bg: '#2A93B5' },
  { char: 'D', frontImg: '/assets/Letter-D2.png', flipImg: '/assets/flip-d2.png', bg: '#E32929' },
  { char: 'L', frontImg: '/assets/Letter-L.png', flipImg: '/assets/flip-d.webp', bg: '#EDEAE2' },
  { char: 'E', frontImg: '/assets/Letter-Empng.png', flipImg: '/assets/flip-o.webp', bg: '#F396A6' },
  { char: 'S', frontImg: '/assets/Letter-S2.png', flipImg: '/assets/flip-s.webp', bg: '#F4D738' },
];

export const HERO_COLUMNS = [
  {
    id: 'hero-sherbet',
    code: 'NO. 01 // PRE-WORKOUT IGNITE',
    title: 'Sherbet PR Bottle',
    spec: '24H Cryo-Lock™ • Chug + Straw Lid',
    bg: '#F4D738',
    accentShape: '#151515',
    png: '/assets/bottle-sherbet.png',
    gif: '/assets/bottle-sherbet.gif',
    price: 34.95,
  },
  {
    id: 'hero-bubblegum',
    code: 'NO. 02 // CARDIO STUDIO SERIES',
    title: 'Bubblegum Aero',
    spec: 'Sweat-Proof Matte Coat • Zero Condensation',
    bg: '#F396A6',
    accentShape: '#9B2635',
    png: '/assets/bottle-bubblegum.png',
    gif: '/assets/bottle-bubblegum.gif',
    price: 34.95,
  },
  {
    id: 'hero-clover',
    code: 'NO. 03 // TURF & KETTLEBELL',
    title: 'Clover Turf Pro',
    spec: '316 Surgical Stainless • Cup-Holder Base',
    bg: '#009B4D',
    accentShape: '#151515',
    png: '/assets/bottle-clover.png',
    gif: '/assets/bottle-clover.gif',
    price: 34.95,
  },
  {
    id: 'hero-coal',
    code: 'NO. 04 // HEAVY IRON EDITION',
    title: 'Coal Stealth 950',
    spec: 'Drop-Shield Silicone Boot • Leak-Lock™',
    bg: '#FCFBF7',
    accentShape: '#9B2219',
    png: '/assets/bottle-coal.png',
    gif: '/assets/bottle-coal.gif',
    price: 39.95,
  },
];

export const GYM_PRODUCTS: GymProduct[] = [
  {
    id: 'no72-coal-stealth',
    code: 'NO. 72',
    tag: '24h Ice-Lock™ • 316 Surgical Steel • Chalk-Grip Coat',
    title: 'No.72 Bold - Stealth Coal Gym Shaker',
    subtitle: 'Heavy Duty Vacuum Insulated Training Vessel',
    price: 34.95,
    compareAtPrice: 49.00,
    bgColor: '#272974',
    textColor: 'light',
    png: '/assets/bottle-coal.png',
    gif: '/assets/bottle-coal.gif',
    capacity: '32 OZ / 950ML',
    coldHours: '24 Hours Sub-Zero',
    hotHours: '12 Hours Thermal',
    steelGrade: '316 Medical-Grade Stainless',
    lidType: 'Dual-Flow Flip Straw + Wide Chug',
    badge: 'BEST SELLER',
    specs: [
      'Double-wall copper-lined vacuum insulation',
      'Chalk & sweat resistant Bauhaus powder coating',
      'Fits standard treadmill & spin bike cages (73mm base)',
      'Internal laser-etched ml/oz measurement lines',
    ],
    description:
      'Engineered for heavy compound sessions. Keeps BCAA, electrolytes or ice water below 4°C for 24 hours straight—even on heated gym floors.',
  },
  {
    id: 'no21-khaki-tactical',
    code: 'NO. 21',
    tag: 'Zero Condensation • Cup-Holder Ready • Silent Base',
    title: 'No.21 Hybrid - Khaki Tactical Bottle',
    subtitle: 'All-Terrain CrossFit & Hyrox Hydration Unit',
    price: 34.95,
    compareAtPrice: 48.00,
    bgColor: '#E2BD1B',
    textColor: 'dark',
    png: '/assets/bottle-khaki.png',
    gif: '/assets/bottle-khaki.gif',
    capacity: '24 OZ / 710ML',
    coldHours: '24 Hours Ice-Lock',
    hotHours: '12 Hours Hot',
    steelGrade: '316 Stainless + Silicone Bumper',
    lidType: 'One-Handed Lockable Flip Cap',
    badge: 'HYROX READY',
    specs: [
      'Anti-clang integrated silicone ring protects gym floors',
      'Zero-flavor transfer electropolished interior',
      '100% leak-proof inverted seal for gym duffels',
      'Wide 62mm mouth swallows full ice cubes & scoops',
    ],
    description:
      'Built to survive kettlebell bumps and turf sled drags. Textured olive-khaki matte exterior guarantees slip-free grip mid-set.',
  },
  {
    id: 'no18-rouge-power',
    code: 'NO. 18',
    tag: 'Electropolished Interior • Zero Metallic Aftertaste',
    title: 'No.18 Crimson - Rouge Powerlifting Vessel',
    subtitle: 'High-Flow Chug Spout for Intra-Workout Fuel',
    price: 34.95,
    compareAtPrice: 48.00,
    bgColor: '#A45B63',
    textColor: 'dark',
    png: '/assets/bottle-rouge.png',
    gif: '/assets/bottle-rouge.gif',
    capacity: '32 OZ / 950ML',
    coldHours: '24 Hours Ice-Lock',
    hotHours: '12 Hours Hot',
    steelGrade: '316 Surgical Stainless',
    lidType: 'Magnetic Chug Cap + Carry Loop',
    specs: [
      'Two-finger ergonomic carry loop clips to squat racks',
      'Odor-proof seal prevents pre-workout smell retention',
      'BPA, BPS & Phthalate free',
      'Dishwasher top-rack safe',
    ],
    description:
      'Designed with a high-velocity chug spout so you can rehydrate between heavy deadlift sets in seconds without removing the lid.',
  },
  {
    id: 'no09-sherbet-enduro',
    code: 'NO. 09',
    tag: 'Featherweight Vacuum Wall • Rapid Straw Sip',
    title: 'No.09 Citrus - Sherbet Enduro Bottle',
    subtitle: 'High-Visibility Metabolic Conditioning Bottle',
    price: 34.95,
    compareAtPrice: 46.00,
    bgColor: '#9B4719',
    textColor: 'dark',
    png: '/assets/bottle-sherbet.png',
    gif: '/assets/bottle-sherbet.gif',
    capacity: '24 OZ / 710ML',
    coldHours: '24 Hours Ice-Lock',
    hotHours: '12 Hours Hot',
    steelGrade: '316 Ultralight Stainless',
    lidType: 'Bite-Free High-Flow Straw Lid',
    badge: 'LIMITED DROP',
    specs: [
      '22% lighter spun-steel outer wall',
      'High-contrast Bauhaus finish never gets lost in the gym',
      'Snap-out silicone gasket for 10-second cleaning',
      'Includes stainless agitator ring for creatine & electrolytes',
    ],
    description:
      'Bright Bauhaus citrus colorway paired with our fastest-flowing straw lid for spin classes, HIIT circuits and treadmill intervals.',
  },
  {
    id: 'no44-clover-turf',
    code: 'NO. 44',
    tag: 'Micro-Textured Grip • Leak-Proof Gym Bag Lock',
    title: 'No.44 Bauhaus - Clover Conditioning Flask',
    subtitle: 'Architectural Precision Meets Daily Macros',
    price: 34.95,
    compareAtPrice: 48.00,
    bgColor: '#009B4D',
    textColor: 'light',
    png: '/assets/bottle-clover.png',
    gif: '/assets/bottle-clover.gif',
    capacity: '24 OZ / 710ML',
    coldHours: '24 Hours Ice-Lock',
    hotHours: '12 Hours Hot',
    steelGrade: '316 Surgical Stainless',
    lidType: 'Dual-Mode Flip Cap',
    specs: [
      'Triple-layer thermal barrier with copper shield',
      'Zero sweat exterior keeps phones & lifting straps dry',
      'Scratch-proof UV-cured Bauhaus geometric emblem',
      'Lifetime thermal warranty',
    ],
    description:
      'Iconic Bauhaus green finish with an internal thermal copper lining that keeps ice cubes solid from your morning commute through your evening lift.',
  },
  {
    id: 'no88-watermelon-pr',
    code: 'NO. 88',
    tag: '950ml Mega Capacity • Stainless Mixer Core',
    title: 'No.88 Nitro - Watermelon Pump Bottle',
    subtitle: 'Full-Session Hydration Without Refill Trips',
    price: 39.95,
    compareAtPrice: 54.00,
    bgColor: '#272974',
    textColor: 'light',
    png: '/assets/bottle-watermelon.png',
    gif: '/assets/bottle-watermelon.gif',
    capacity: '32 OZ / 950ML',
    coldHours: '26 Hours Sub-Zero',
    hotHours: '14 Hours Hot',
    steelGrade: '316 Surgical Stainless',
    lidType: 'Lockable Chug + Shaker Grate',
    badge: 'MEGA 950ML',
    specs: [
      'Detachable silent ice & powder grate',
      'Tapered base fits car & cardio machine cup holders',
      'Reinforced drop-resistant base curvature',
      'Ships in 24h with tracked express courier',
    ],
    description:
      'Stop walking to the water fountain mid-workout. 950ml capacity holds your entire intra-workout stack at glacial temperatures.',
  },
];

export const GYM_BUNDLES: GymProduct[] = [
  {
    id: 'bundle-four-squad',
    code: 'SQUAD PACK // SAVE 28%',
    tag: '4x Insulated Gym Bottles + 4x Spare Straw Lids',
    title: 'Four Flavour Gym Squad Pack',
    subtitle: 'Coal + Khaki + Rouge + Clover (4-Bottle Dropship Bundle)',
    price: 99.95,
    compareAtPrice: 139.80,
    bgColor: '#A45B63',
    textColor: 'dark',
    png: '/assets/combo-steel.png',
    gif: '/assets/combo-steel.gif',
    capacity: '4 × 24 OZ / 32 OZ',
    coldHours: '24 Hours Ice-Lock',
    hotHours: '12 Hours Hot',
    steelGrade: '316 Surgical Stainless',
    lidType: '4x Chug Lids + 4x Straw Lids + Brush Set',
    badge: 'FREE SHIPPING UNLOCKED',
    specs: [
      'Qualifies automatically for FREE Express Gym Shipping ($99+)',
      'Includes 4 full-size bottles in our top Bauhaus colorways',
      'Bonus stainless bottle brush + 4 silicone base boots',
      'Ideal for training partners, home gyms or weekly rotation',
    ],
    description:
      'Our highest-converting bundle: 4 complete Cryo-Lock™ gym bottles so you always have a clean, ice-cold vessel ready for pre-workout, electrolytes, and post-lift recovery.',
  },
  {
    id: 'bundle-partner-pr',
    code: 'DUO PACK // SAVE 22%',
    tag: '2x Insulated Bottles + Stainless Pre-Workout Scoop',
    title: 'Phin & Iron PR Partner Pack',
    subtitle: 'His & Hers / Gym Bro 2-Bottle Combo + Steel Dosing Funnel',
    price: 59.95,
    compareAtPrice: 79.90,
    bgColor: '#9B4719',
    textColor: 'dark',
    png: '/assets/combo-steel.png',
    gif: '/assets/combo-steel.gif',
    capacity: '2 × 32 OZ / 950ML',
    coldHours: '24 Hours Ice-Lock',
    hotHours: '12 Hours Hot',
    steelGrade: '316 Surgical Stainless',
    lidType: 'Dual Lids + Stainless Powder Funnel',
    badge: 'MOST GIFTED',
    specs: [
      '2x Cryo-Lock™ vacuum bottles (Coal Stealth + Rouge)',
      'Includes precision stainless steel pre-workout funnel',
      'Zero-spill gym bag guarantee',
      '30-Day Sweat-Test Trial',
    ],
    description:
      'Keep one in your gym locker and one in your car—or split with your lifting partner. Includes our signature stainless steel supplement dosing funnel.',
  },
];

export const CUSTOMIZER_COLORS: CustomizerColor[] = [
  {
    id: 'khaki',
    name: 'Khaki',
    hex: '#3B4928',
    rgbLabel: 'rgb(70 90 67)',
    png: '/assets/bottle-khaki.png',
    gif: '/assets/bottle-khaki.gif',
    stockNote: 'In Stock — Ships Today',
  },
  {
    id: 'rouge',
    name: 'Rouge',
    hex: '#8C2232',
    rgbLabel: 'rgb(163 35 57)',
    png: '/assets/bottle-rouge.png',
    gif: '/assets/bottle-rouge.gif',
    stockNote: 'In Stock — Ships Today',
  },
  {
    id: 'coal',
    name: 'Coal',
    hex: '#202124',
    rgbLabel: 'rgb(32 33 36)',
    png: '/assets/bottle-coal.png',
    gif: '/assets/bottle-coal.gif',
    stockNote: 'Most Popular — 14 Left',
  },
  {
    id: 'bubblegum',
    name: 'Bubblegum',
    hex: '#E691B8',
    rgbLabel: 'rgb(214 128 205)',
    png: '/assets/bottle-bubblegum.png',
    gif: '/assets/bottle-bubblegum.gif',
    stockNote: 'In Stock — Ships Today',
  },
  {
    id: 'clover',
    name: 'Clover',
    hex: '#198C61',
    rgbLabel: 'rgb(25 140 97)',
    png: '/assets/bottle-clover.png',
    gif: '/assets/bottle-clover.gif',
    stockNote: 'In Stock — Ships Today',
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    hex: '#D65C4D',
    rgbLabel: 'rgb(214 92 77)',
    png: '/assets/bottle-watermelon.png',
    gif: '/assets/bottle-watermelon.gif',
    stockNote: 'Limited Batch — 9 Left',
  },
  {
    id: 'sherbet',
    name: 'Sherbet',
    hex: '#D7C84B',
    rgbLabel: 'rgb(215 200 75)',
    png: '/assets/bottle-sherbet.png',
    gif: '/assets/bottle-sherbet.gif',
    stockNote: 'In Stock — Ships Today',
  },
];

export const CUSTOMIZER_SIZES = [
  {
    id: '24oz',
    badge: '24',
    label: 'OZ / 710ML Bino Gym',
    price: 34.95,
    compareAt: 48.0,
    dimensions: '215mm × 73mm • Fits all spin bike & treadmill cages',
  },
  {
    id: '32oz',
    badge: '32',
    label: 'OZ / 950ML Camino Pro',
    price: 39.95,
    compareAt: 54.0,
    dimensions: '255mm × 76mm • Full 90-min hypertrophy session capacity',
  },
];

export const VERIFIED_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Marcus V.',
    initials: 'MV',
    avatarBg: '#272974',
    timeAgo: '2 weeks ago',
    colorBought: 'Coal Stealth • 32oz',
    bottleThumb: '/assets/bottle-coal.png',
    text: 'Left my BBBG Coal bottle in a 38°C car during a 2-hour deadlift session. Came back and the ice cubes had barely melted. Zero condensation on my lifting belt in my gym bag.',
  },
  {
    id: 'rev-2',
    author: 'Elena K.',
    initials: 'EK',
    avatarBg: '#198C61',
    timeAgo: '1 month ago',
    colorBought: 'Khaki + Clover Duo',
    bottleThumb: '/assets/bottle-khaki.png',
    text: 'Finally a gym bottle that fits the StairMaster and Peloton cup holders while still holding 710ml. The matte powder coat never slips even when my hands are covered in chalk.',
  },
  {
    id: 'rev-3',
    author: 'Devon R.',
    initials: 'DR',
    avatarBg: '#9B4719',
    timeAgo: '3 weeks ago',
    colorBought: 'Four Flavour Squad Pack',
    bottleThumb: '/assets/combo-steel.png',
    text: 'Ordered the 4-pack for our garage gym crew. Arrived in 48 hours, packaging looks like a museum piece, and the 316 steel leaves zero pre-workout smell after rinsing.',
  },
  {
    id: 'rev-4',
    author: 'Sora T.',
    initials: 'ST',
    avatarBg: '#8C2232',
    timeAgo: '5 days ago',
    colorBought: 'Sherbet + Rouge • 24oz',
    bottleThumb: '/assets/bottle-sherbet.png',
    text: 'I dropped my Sherbet bottle straight off a squat rack onto concrete—not a single dent and the lock cap stayed 100% sealed. Best gym upgrade I have bought this year.',
  },
];

export const GYM_CLUB_PARTNERS = [
  { name: 'IRONHAUS BERLIN', sub: 'STRENGTH CLUB', bg: '#272974', fg: '#F4D738', code: 'IH//01' },
  { name: 'KETTLE & BAR', sub: 'MELBOURNE TURF', bg: '#7A232E', fg: '#FCFBF7', code: 'KB//02' },
  { name: 'CRYO ATHLETICA', sub: 'RECOVERY LAB', bg: '#009B4D', fg: '#FCFBF7', code: 'CA//03' },
  { name: 'VAKNA BARBELL', sub: 'POWERLIFTING', bg: '#8B3224', fg: '#EDEAE2', code: 'VB//04' },
  { name: 'BAUHAUS FIT', sub: 'STUDIO COLLECTIVE', bg: '#151515', fg: '#F4D738', code: 'BF//05' },
  { name: 'PULSE HYROX', sub: 'ENDURANCE BOX', bg: '#1E56A0', fg: '#FCFBF7', code: 'PH//06' },
];

export const GYM_FAQS = [
  {
    q: 'How long does Cryo-Lock™ keep water ice-cold on the gym floor?',
    a: 'Every BBBG bottle uses double-wall vacuum insulation with an internal thermal copper lining. Lab-tested to hold ice below 4°C for up to 24 hours and hot drinks for 12 hours with zero exterior sweat.',
  },
  {
    q: 'Why 316 Surgical Stainless Steel instead of standard 304 steel?',
    a: 'Standard 304 steel can retain acidic pre-workout, BCAA, or electrolyte flavors over time. Our electropolished 316 medical-grade interior is non-porous, corrosion-proof, and rinses 100% odor-free in seconds.',
  },
  {
    q: 'Will it leak inside my gym duffel next to my electronics?',
    a: 'Never. Both our Chug and Flip-Straw lids feature dual food-grade silicone O-rings and a mechanical snap-lock latch. Backed by our 100% Leak-Proof Gym Bag Guarantee.',
  },
  {
    q: 'How fast is shipping and what is your return policy?',
    a: 'All orders dispatch within 24 hours via tracked express courier (Free on orders over $99). Every bottle includes a 30-Day Sweat-Test Trial and a Lifetime Thermal Insulation Warranty.',
  },
];
