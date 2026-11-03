export interface HotelSpaceSlide {
  id: string;
  label: string;
  caption: string;
  image: string;
  architectNote: string;
}

export interface AccommodationItem {
  id: string;
  category: string;
  title: string;
  size: string;
  bed: string;
  occupancy: string;
  rate: string;
  description: string;
  highlights: string[];
  images: string[];
}

export interface GastronomyVenue {
  id: string;
  name: string;
  chefOrConcept: string;
  hours: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface DiaryEvent {
  id: string;
  dateBadge: string;
  series: string;
  title: string;
  description: string;
  venue: string;
  price: string;
  image: string;
}

export interface WellnessSpace {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  image: string;
  details: string[];
}

export interface EventVenue {
  id: string;
  name: string;
  ptName: string;
  capacity: string;
  area: string;
  description: string;
  image: string;
}

export const PULSO_ASSETS = {
  logo: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682734f58902ff40dd6abcb5_logo%20pulso.svg',
  symbol: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682cddb0d1502fdca58b95e5_symbol.svg',
  mapMarker: 'https://cdn.prod.website-files.com/64932d3f776dd709e3ba22e1/6499a7625a0710a0723030e6_pulso-marker.svg',
  heroVideo: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d%2F68c9bcdb4b8767175404dbdc_0916%282%29-transcode.webm',
  heroPoster: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6900b52bfa627ed0ea367b22_videoframe_0.webp',
  sarauBarHero: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682cef623cbbd10016036296__DSF3456%201-p-2000.avif',
  awards: {
    preferredHotels: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682ce747d80b5e92e42d4b67_LVX_Preferred_Hotels__Resorts_Logo%201.svg',
    archello: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/685db0704e3597fde0a93fa0_ArchelloAwards2024_Badge_Interior%20of%20the%20Year_PublicVoteWinner_FullColorOnBlack%201.svg',
    michelinKey: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68ffbd059b3101af5c3cf353_key%20michellin%20dourada.svg',
  }
};

export const HOTEL_LIVING_SLIDES: HotelSpaceSlide[] = [
  {
    id: 'living',
    label: 'Living',
    caption: 'Architecture & Interior Design by Studio Arthur Casas · Art Curation by Guilherme Wisnik',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682b74e46db35d6baba536e0__DSF4141.avif',
    architectNote: 'An open-air ground-floor gallery framed by floor-to-ceiling glass, exposed architectural concrete, and warm Brazilian wood.',
  },
  {
    id: 'living-bar',
    label: 'Living Bar',
    caption: 'Curated encounters between Pinheiros cultural vitality and Faria Lima sophistication',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682b74e4051d7034ebfe35dd__DSF4141-1.avif',
    architectNote: 'Designed as a porous urban square where guests, collectors, and locals gather from morning espresso to evening vinyl sessions.',
  },
  {
    id: 'nuno-ramos',
    label: 'Living and garden with work by Nuno Ramos',
    caption: 'Permanent 30-meter sculptural installation "Mácula" by Nuno Ramos integrated into the vertical garden',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682b74e451668923c2b2d3b7__DSF4141-2.avif',
    architectNote: 'A living museum blending brutalist minimalism with lush tropical landscaping and museum-grade Brazilian contemporary art.',
  }
];

export const ACCOMMODATIONS: AccommodationItem[] = [
  {
    id: 'deluxe',
    category: 'Deluxe',
    title: 'Pulso Deluxe Room',
    size: '35 m²',
    bed: 'King-Size Bed · 400-thread-count Egyptian cotton',
    occupancy: 'Up to 2 Adults',
    rate: 'R$ 2.850 / night',
    description: 'Works of art from the Pulso collection, prospected design furniture found in São Paulo antique markets, and seamless smart room technology.',
    highlights: [
      'Original Brazilian contemporary artwork curated by Guilherme Wisnik',
      'Bespoke Studio Arthur Casas furniture & retro-accented fluted glass bath',
      'L’Occitane au Brésil bath amenities & Nespresso Barista station',
      'Acoustic floor-to-ceiling glazing overlooking Pinheiros treetops'
    ],
    images: [
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6836153b96d12f4cf2aa8fd5_3e0cd86213b2dd9a7f895e7423ed6ed0eee31b4e.avif',
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68868fdb617c419e4ba5df80__DSF7146.avif',
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68868fdb044314a33485ac4a__DSF7168-1.avif',
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68868fdb40ff0915c959b960__DSF7188.avif',
    ]
  },
  {
    id: 'suite',
    category: 'suite',
    title: 'Pulso Suite Faria Lima',
    size: '70 m²',
    bed: 'King-Size Bed + Private Living Lounge & Balcony',
    occupancy: 'Up to 3 Guests',
    rate: 'R$ 4.900 / night',
    description: 'Expansive corner sanctuary featuring a private landscaped terrace, freestanding soaking tub, rare Brazilian modernist books, and dedicated concierge.',
    highlights: [
      'Separate living room with signed Brazilian modernist armchairs',
      'Private terrace with vertical garden & skyline views of Faria Lima',
      'Freestanding immersion bathtub & dual rain shower',
      'Complimentary pressing, private bar curation by Gabriel Santana & priority Sarau Bar table'
    ],
    images: [
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68869076826db4c61cbb84cd__DSF7076.avif',
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6886907640ff0915c959cfae__DSF7030.avif',
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/688690765578009ffc07f077__DSF7019.avif',
      'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68869076fb048f33f6061c3d__DSF7053.avif',
    ]
  }
];

export const GASTRONOMY_VENUES: GastronomyVenue[] = [
  {
    id: 'charlo-bistro',
    name: 'Charlô Bistrô',
    chefOrConcept: 'Signed by Charlô Whately',
    hours: 'Daily · 12:00 – 15:30 & 19:00 – 23:30',
    description: 'Charlô classics and contemporary reinterpretations that value local flavors. Our cuisine celebrates the personality and creativity of a São Paulo classic.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6900c20747a8323e3db6acfa_682cec4fbcd55256dd88553a__DSF3743-p-800%20(1).avif',
    highlights: [
      'Steak Tartare Charlô with artisanal potato crisps & green salad',
      'Roasted Robalo with heart-of-palm purée, toasted Brazil nuts & citrus beurre blanc',
      'Curated Old & South American wine cellar with 180+ labels'
    ]
  },
  {
    id: 'cha-cha',
    name: 'Cha Cha Boulangerie',
    chefOrConcept: 'Artisanal Viennoiserie & Specialty Coffee',
    hours: 'Daily · 07:00 – 20:00',
    description: 'Naturally sourced breads, viennoiseries and other delicacies. Cha Cha is an invitation to the pleasure of encounters.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6900c205d2ef41791f3adeb9_682cec4f2282ab2d194c163f__DSF3743-1-p-800%20(1).avif',
    highlights: [
      '48-hour wild-fermented sourdough loaves & flaky French butter croissants',
      'Single-origin Brazilian specialty microlot coffees from Cerrado & Mantiqueira',
      'All-day brunch, tartines, and patisserie overlooking the open sidewalk terrace'
    ]
  }
];

export const DIARY_EVENTS: DiaryEvent[] = [
  {
    id: 'alaide-costa',
    dateBadge: '24 / 11 · 21:00',
    series: 'ESTÚDIO PULSO',
    title: 'ESTÚDIO PULSO APRESENTA ALAÍDE COSTA',
    description: 'No dia 24/11 o Sarau Bar recebe Alaíde Costa para mais uma edição de Estúdio Pulso. Uma noite íntima dedicada à lenda da música brasileira com curadoria musical de Rômulo Fróes.',
    venue: 'Sarau Bar · Intimate 30-seat Listening Room',
    price: 'R$ 280',
    image: 'https://cdn.prod.website-files.com/682f573c1dfe19b5816da445/6a35691bc980bf917c4e2d76_06%20FEED.jpg',
  },
  {
    id: 'bem-gil-moreno-veloso',
    dateBadge: '08 / 12 · 21:00',
    series: 'ESTÚDIO PULSO',
    title: 'ESTÚDIO PULSO APRESENTA BEM GIL E MORENO VELOSO',
    description: 'No dia 08/12 o Sarau Bar recebe Bem Gil e Moreno Veloso para mais uma edição de Estúdio Pulso. Coquetelaria autoral por Gabriel Santana e sessão acústica exclusiva.',
    venue: 'Sarau Bar · Intimate 30-seat Listening Room',
    price: 'R$ 320',
    image: 'https://cdn.prod.website-files.com/682f573c1dfe19b5816da445/6a35696810375007e2cc247e_07%20FEED.jpg',
  }
];

export const WELLNESS_SPACES: WellnessSpace[] = [
  {
    id: 'spa',
    tabLabel: 'Pulso Spa by L\'Occitane',
    title: 'Pulso Spa by L\'Occitane',
    subtitle: 'Sensory rituals, Provençal essential oils, and Brazilian botanicals designed to slow down the urban pulse.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68963a85ac092ea52e43d797__C5A5844.avif',
    details: [
      'Signature Shea Nourishing & Immortelle Divine facial and body rituals',
      'Private treatment suites with acoustic isolation & chromotherapy',
      'Dry & steam saunas with organic herbal infusions'
    ]
  },
  {
    id: 'pool',
    tabLabel: 'Pool',
    title: 'Suspended Heated Pool',
    subtitle: 'An architectural glass-enclosed volume cantilevered above the treetops of Pinheiros.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6836161834b42e9aaa23459c_5e99e47529f35fdd3dcc9818bba00a9d1ccb4e8f.avif',
    details: [
      'Heated 20-meter lap and relaxation pool at 29°C year-round',
      'Floor-to-ceiling glass walls bathed in natural zenithal light',
      'Poolside towel & detox juice service'
    ]
  },
  {
    id: 'gym',
    tabLabel: 'Gym',
    title: '24-Hour Movement Studio',
    subtitle: 'Complete Technogym Artis structure for strength, cardio, mobility, and personal training.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/683dee86630daf6dbad14f6b_178d75e73512b4230f046ee26ac8a937a5c4cb60.avif',
    details: [
      'Open 24/7 exclusively for hotel guests',
      'Latest generation Technogym Artis line & free-weights area',
      'On-demand personal trainer and private yoga sessions'
    ]
  }
];

export const EVENT_VENUES: EventVenue[] = [
  {
    id: 'living',
    name: 'Living',
    ptName: 'Living',
    capacity: 'Up to 80 guests',
    area: '140 m²',
    description: 'Surrounded by contemporary Brazilian art and Studio Arthur Casas furniture, ideal for cocktail receptions, book launches, and private talks.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/682b9c06a252fbcc4d6abbb7__DSF4141.avif',
  },
  {
    id: 'boardroom',
    name: 'Boardroom',
    ptName: 'Sala de reuniões',
    capacity: 'Up to 18 executives',
    area: '48 m²',
    description: 'High-privacy executive boardroom equipped with 4K conferencing, acoustic wood paneling, and bespoke catering by Charlô Bistrô.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/68c85cffe69ba234db6c3f1f_WhatsApp%20Image%202025-09-15%20at%2015.21.32.jpeg',
  },
  {
    id: 'garden',
    name: 'Garden',
    ptName: 'Jardim',
    capacity: 'Up to 60 guests',
    area: '110 m²',
    description: 'Open-air vertical garden framed by Nuno Ramos’s sculpture "Mácula", offering an unforgettable backdrop for al-fresco celebrations.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6890f0262fd2c8414146f324__C5A7239%201.avif',
  },
  {
    id: 'sarau-bar',
    name: 'Sarau Bar',
    ptName: 'Sarau Bar',
    capacity: 'Up to 45 guests',
    area: '65 m²',
    description: 'Intimate listening room and cocktail bar with stage acoustics, custom sound system, and signature mixology by Gabriel Santana.',
    image: 'https://cdn.prod.website-files.com/68265b957b542bbddcc21b1d/6890f02684a9856c2751f4fc__C5A8059%201.avif',
  }
];

export const EXPERIENCES_PACKAGES = [
  {
    id: 'private-stay',
    title: 'A Private Stay at Pulso',
    subtitle: 'Guided art tour of the Pulso collection + Chef’s tasting dinner at Charlô Bistrô + late check-out at 16:00.',
    price: 'From R$ 3.600',
  },
  {
    id: 'wellness-escape',
    title: 'A Wellness Escape at Pulso',
    subtitle: '90-minute Pulso Spa by L’Occitane duo ritual + Cha Cha Boulangerie breakfast in bed + heated pool access.',
    price: 'From R$ 3.950',
  },
  {
    id: 'weekend-pulso',
    title: 'Weekend at Pulso',
    subtitle: 'Friday to Sunday cultural immersion with reserved seats at Sarau Bar live sessions & welcome cocktails by Gabriel Santana.',
    price: 'From R$ 5.400 (2 nights)',
  },
  {
    id: 'just-married',
    title: 'Just Married',
    subtitle: 'Pulso Suite celebration with vintage Champagne, floral styling, L’Occitane bath ritual, and custom monogrammed robes.',
    price: 'From R$ 5.800',
  }
];
