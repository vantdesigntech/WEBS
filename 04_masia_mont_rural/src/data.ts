export interface InsideSpace {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  cover: string;
  gallery: string[];
}

export interface RentalFormat {
  id: string;
  badge1: string;
  badge2: string;
  title: string;
  description: string;
  imageMain: string;
  imageSecondary: string;
  conditionsImage: string;
  priceFrom: string;
  conditionsList: string[];
}

export interface AdditionalService {
  id: string;
  number: string;
  title: string;
  bullets: string[];
  images: string[];
}

export const ASSETS = {
  logoCrest: 'https://static.tildacdn.com/tild3535-3133-4765-a432-646135636162/logo.svg',
  logoWordmark: 'https://static.tildacdn.com/tild3862-6566-4463-b039-306362373532/Mont_Rural.svg',
  heroVideo: 'https://cdnv.boomstream.com/balancer/f7NqdFMd-oRqb6s0L.mp4',
  heroPoster: 'https://static.tildacdn.com/tild3539-6139-4432-b434-666637333766/Screenshot_2026-05-0.avif',
  about: {
    archPhoto: 'https://static.tildacdn.com/tild3632-6633-4962-b534-333165653033/main-pic.avif',
    sketch: 'https://static.tildacdn.com/tild6235-3938-4465-a561-613734653735/Object_1.png',
    layer1: 'https://static.tildacdn.com/tild6563-3634-4633-b538-326431336364/Layer_1.jpg',
    rect1: 'https://static.tildacdn.com/tild3133-6138-4430-a132-353130626465/Rectangle-14666.avif',
    rect2: 'https://static.tildacdn.com/tild3461-6563-4466-a666-656265663366/Rectangle-14667.avif',
  },
  location: {
    img1: 'https://static.tildacdn.com/tild6162-3935-4339-b032-626166363939/Rectangle_14669-2.jpg',
    img2: 'https://static.tildacdn.com/tild3465-3237-4239-b938-336138333461/Rectangle_14673-2.jpg',
    map: 'https://static.tildacdn.com/tild6138-6366-4464-b535-646661326665/-2.jpg',
    vineyard: 'https://static.tildacdn.com/tild3238-3136-4833-b934-373666346264/VLAC4929_resized_1.jpg',
  },
  insideSketch: 'https://static.tildacdn.com/tild3836-6262-4639-b762-343065353763/Object_1.png',
  leavesOverlay: 'https://static.tildacdn.com/tild3261-6635-4362-a336-326435333834/leaves.avif',
  servicesHero: 'https://static.tildacdn.com/tild3039-3533-4437-b561-306263356666/Rectangle-14683.avif',
  contact: {
    veroPortrait: 'https://static.tildacdn.com/tild6462-6264-4361-a235-386136333834/-2.jpg',
    imgLeft: 'https://static.tildacdn.com/tild3434-6536-4565-b264-656637386162/Rectangle_14669-2.jpg',
    imgRight: 'https://static.tildacdn.com/tild6638-6430-4539-b537-633539363366/Rectangle_14692-2.jpg',
    footerBg: 'https://static.tildacdn.com/tild3537-6133-4936-a461-613964346561/-1-2.jpg',
  }
};

export const INSIDE_SPACES: InsideSpace[] = [
  {
    id: 'bedrooms',
    number: '01',
    title: '6 BEDROOMS IN A UNIQUE STYLE',
    subtitle: 'Comfortably accommodates up to 12 adults and children',
    cover: 'https://static.tildacdn.com/tild6531-3731-4232-b963-333166646261/Rectangle_14696.jpg',
    gallery: [
      'https://static.tildacdn.com/tild6531-3731-4232-b963-333166646261/Rectangle_14696.jpg',
      'https://static.tildacdn.com/tild3966-3533-4963-a530-613963313332/_3.jpg',
      'https://static.tildacdn.com/tild6166-3530-4262-b262-333838363235/_2.jpg',
      'https://static.tildacdn.com/tild3730-6330-4730-b137-333366663330/__6.jpg',
      'https://static.tildacdn.com/tild6436-6162-4766-b837-323134316132/_5.jpg',
      'https://static.tildacdn.com/tild6235-3436-4363-a663-336436366236/_1.jpg',
      'https://static.tildacdn.com/tild3233-3936-4361-b033-613432376231/_4.jpg',
    ]
  },
  {
    id: 'dining',
    number: '02',
    title: 'BRIGHT DINING ROOM WITH ACCESS TO THE TERRACE',
    subtitle: 'Spacious area for shared lunches and dinners',
    cover: 'https://static.tildacdn.com/tild3064-3564-4439-a331-343530643333/Rectangle_14678.jpg',
    gallery: [
      'https://static.tildacdn.com/tild3064-3564-4439-a331-343530643333/Rectangle_14678.jpg',
      'https://static.tildacdn.com/tild3264-6364-4762-a633-653234306663/_1.jpg',
      'https://static.tildacdn.com/tild3433-3638-4434-a237-626561363434/_2.jpg',
    ]
  },
  {
    id: 'outdoor',
    number: '03',
    title: 'LARGE OUTDOOR AREA FOR RELAXATION',
    subtitle: 'With a swimming pool, barbecue area, and sun loungers',
    cover: 'https://static.tildacdn.com/tild3938-6439-4163-a430-343732643835/Rectangle_14700.jpg',
    gallery: [
      'https://static.tildacdn.com/tild3938-6439-4163-a430-343732643835/Rectangle_14700.jpg',
      'https://static.tildacdn.com/tild3462-6365-4133-a365-366536303735/_1.jpg',
      'https://static.tildacdn.com/tild3436-3664-4539-b431-353364333133/3.jpg',
      'https://static.tildacdn.com/tild6330-3631-4562-b930-333531333931/_2.jpg',
      'https://static.tildacdn.com/tild3839-3661-4833-b337-383237393163/_4.jpg',
    ]
  },
  {
    id: 'terrace',
    number: '04',
    title: 'COVERED TERRACE WITH VINEYARD VIEW',
    subtitle: 'For breakfasts and dinners, yoga sessions, and relaxation',
    cover: 'https://static.tildacdn.com/tild3438-3835-4435-a533-643165346537/Rectangle_14699.jpg',
    gallery: [
      'https://static.tildacdn.com/tild3438-3835-4435-a533-643165346537/Rectangle_14699.jpg',
      'https://static.tildacdn.com/tild3764-3636-4962-b066-653363383566/_1.jpg',
      'https://static.tildacdn.com/tild6339-3935-4235-a434-323264323236/_3.jpg',
      'https://static.tildacdn.com/tild3162-3366-4532-b161-363939306232/_2.jpg',
    ]
  },
  {
    id: 'bathrooms',
    number: '05',
    title: 'PRIVATE BATHROOM IN EVERY ROOM',
    subtitle: 'For relaxation at the end of the day',
    cover: 'https://static.tildacdn.com/tild3135-6631-4466-a335-613131353932/Rectangle_14676.jpg',
    gallery: [
      'https://static.tildacdn.com/tild3135-6631-4466-a335-613131353932/Rectangle_14676.jpg',
      'https://static.tildacdn.com/tild6435-6138-4236-a534-326136663665/_1.jpg',
      'https://static.tildacdn.com/tild3631-3930-4138-b237-303562633833/_2.jpg',
    ]
  },
  {
    id: 'kitchen',
    number: '06',
    title: 'FULLY EQUIPPED KITCHEN IN A RUSTIC STYLE',
    subtitle: 'Large and comfortable cooking space',
    cover: 'https://static.tildacdn.com/tild6164-6336-4532-b036-613637363433/Rectangle_14677.jpg',
    gallery: [
      'https://static.tildacdn.com/tild6164-6336-4532-b036-613637363433/Rectangle_14677.jpg',
      'https://static.tildacdn.com/tild3264-6364-4762-a633-653234306663/_1.jpg',
    ]
  },
  {
    id: 'living',
    number: '07',
    title: 'TWO SPACIOUS LIVING ROOMS WITH FIREPLACES',
    subtitle: 'Ideal for intimate gatherings, reading, retreats, and workshops',
    cover: 'https://static.tildacdn.com/tild3039-3964-4437-a630-316632373761/Rectangle_14698.jpg',
    gallery: [
      'https://static.tildacdn.com/tild3039-3964-4437-a630-316632373761/Rectangle_14698.jpg',
      'https://static.tildacdn.com/tild6137-6462-4137-b334-356231376534/_1.jpg',
      'https://static.tildacdn.com/tild3461-6333-4661-b862-376165306462/_2.jpg',
      'https://static.tildacdn.com/tild3065-6136-4534-a263-336530386364/_3.jpg',
    ]
  },
  {
    id: 'bodega',
    number: '08',
    title: 'BODEGA SPACE - LOWER FLOOR WITH A SEPARATE ENTRANCE',
    subtitle: 'Consists of two stone halls and a wine cellar. An atmospheric space for tastings, dates, and workshops',
    cover: 'https://static.tildacdn.com/tild3166-3831-4532-b762-393630323964/Rectangle_14675.jpg',
    gallery: [
      'https://static.tildacdn.com/tild3166-3831-4532-b762-393630323964/Rectangle_14675.jpg',
      'https://static.tildacdn.com/tild6430-3261-4165-b736-366239616230/_2.jpg',
      'https://static.tildacdn.com/tild6238-3134-4965-a430-336631386335/_1.jpg',
      'https://static.tildacdn.com/tild3334-6263-4332-b566-373131666530/_3.jpg',
    ]
  },
];

export const RENTAL_FORMATS: RentalFormat[] = [
  {
    id: 'full-masia',
    badge1: 'entire house',
    badge2: 'up to 12 people + 3 children',
    title: 'Masia Rental',
    description: 'MontRural masia exclusively for your group, with no outside guests. This option is ideal for private stays, birthdays, family gatherings, retreats, or relaxed weekends among the vineyards.',
    imageMain: 'https://static.tildacdn.com/tild3163-6664-4234-b864-306661353361/Rectangle_14679-2.jpg',
    imageSecondary: 'https://static.tildacdn.com/tild3131-3332-4062-b130-646236663630/Rectangle_14682-2.jpg',
    conditionsImage: 'https://static.tildacdn.com/tild6139-3836-4336-b636-343032376365/Frame_1948756322.jpg',
    priceFrom: 'From €950 / night (minimum 2 nights)',
    conditionsList: [
      'Exclusive access to all 6 en-suite bedrooms, two living rooms, rustic kitchen, pool & vineyard terraces',
      'Check-in from 16:00 · Check-out until 12:00 (flexible upon request)',
      'Welcome local Penedès cava & organic olive oil pack included',
      'Final cleaning, premium linens, organic bath amenities & firewood included'
    ]
  },
  {
    id: 'day-events',
    badge1: 'entire house without accommodation',
    badge2: 'from 4 hours',
    title: 'Masia Rental',
    description: 'Suitable for workshops, art events, retreats, and intimate corporate meetings. The space allows you to organize an event with elegant table setting, catering, or an invited chef.',
    imageMain: 'https://static.tildacdn.com/tild3131-3336-4434-a162-643336373861/Rectangle_14711.jpg',
    imageSecondary: 'https://static.tildacdn.com/tild3237-6464-4666-b430-386463393931/VLAC4929_resized_10.jpg',
    conditionsImage: 'https://static.tildacdn.com/tild3936-3636-4466-b933-346266373132/Frame_1948756324.jpg',
    priceFrom: 'From €650 / half-day event',
    conditionsList: [
      'Access to indoor dining room, fireplace lounges, covered vineyard terrace & pool gardens',
      'Capacity for up to 24 daytime event or retreat participants',
      'Optional private chef, farm-to-table brunch, or sommelier-led cava tasting',
      'Dedicated on-site coordinator (Vero) for seamless logistics'
    ]
  },
  {
    id: 'bodega-space',
    badge1: 'private area',
    badge2: 'from 2 to 8 guests',
    title: 'Bodega Space',
    description: 'An intimate independent space suitable for wine and local product tastings, romantic dinners, small workshops, or meetings.',
    imageMain: 'https://static.tildacdn.com/tild3036-6330-4262-b933-383331363234/Rectangle_14709.jpg',
    imageSecondary: 'https://static.tildacdn.com/tild3261-6164-4730-b463-303735333930/VLAC4929_resized_11.jpg',
    conditionsImage: 'https://static.tildacdn.com/tild3463-6631-4838-b765-356335343338/Frame_1948756323.jpg',
    priceFrom: 'From €320 / private experience',
    conditionsList: [
      'Historic 15th-century vaulted stone wine fermentation halls with separate entrance',
      'Curated candlelight table setting & private sommelier wine/cava cellar session',
      'Artisanal Catalan cheese, jamón ibérico, honey & olive oil pairing board',
      'Available for evening romantic dates, birthdays, or creative workshops'
    ]
  }
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'gastronomy',
    number: '01',
    title: 'Wine and gastronomy',
    bullets: [
      'Farm-to-table breakfasts and brunches',
      'Lunches and dinners with a private or guest chef',
      'Cava and local wine tastings',
      'Farm product tastings (olive oils, cheeses, honey, jamón)',
      'Welcome pack upon arrival'
    ],
    images: [
      'https://static.tildacdn.com/tild3062-3137-4666-b535-396339386266/Slide_16_9_-_3.jpg',
      'https://static.tildacdn.com/tild6265-3836-4663-b330-613834313031/Slide_16_9_-_6.jpg',
      'https://static.tildacdn.com/tild3030-6666-4239-a239-323663306334/Slide_16_9_-_5.jpg',
      'https://static.tildacdn.com/tild3935-6536-4237-b636-636336346332/Slide_16_9_-_4.jpg',
    ]
  },
  {
    id: 'experiences',
    number: '02',
    title: 'Special experiences',
    bullets: [
      'Wine tours in Penedès',
      'Guided cycling tours',
      'Visits to cheese farms and olive estates',
      'Creative workshops (ceramics, painting, crafts)',
      'Transfer from Barcelona or driver for the whole day',
      'Custom itinerary planning'
    ],
    images: [
      'https://static.tildacdn.com/tild3730-3935-4639-b336-316565646364/Slide_16_9_-_12.jpg',
      'https://static.tildacdn.com/tild6464-3162-4333-b164-613533633235/Slide_16_9_-_13.jpg',
      'https://static.tildacdn.com/tild6336-6161-4639-a535-336430313462/Slide_16_9_-_8.jpg',
      'https://static.tildacdn.com/tild6634-3337-4036-b565-316633363131/Slide_16_9_-_11.jpg',
    ]
  },
  {
    id: 'decor',
    number: '03',
    title: 'Decor and atmosphere',
    bullets: [
      'Table setting and space decoration',
      'Masia floral decoration',
      'Styling tailored to your event',
      'Event photography and videography'
    ],
    images: [
      'https://static.tildacdn.com/tild6533-3433-4832-a362-613362323063/Slide_16_9_-_21.jpg',
      'https://static.tildacdn.com/tild6138-3662-4733-b135-346161656539/Slide_16_9_-_18.jpg',
      'https://static.tildacdn.com/tild3634-3732-4163-b832-336432656239/Slide_16_9_-_19.jpg',
      'https://static.tildacdn.com/tild6533-3262-4463-b563-343461366434/Slide_16_9_-_22.jpg',
    ]
  }
];
