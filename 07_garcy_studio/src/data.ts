export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  field: string;
  headline: string;
  pullQuote: string;
  summary: string;
  story: string[];
  services: string[];
  thumb: string;
  logo?: string;
  video?: string;
  gallery: string[];
  metrics?: string;
}

export const GARCY_ASSETS = {
  logo: 'https://www.garcy.studio/assets/logo.svg',
  loaderLogo: 'https://www.garcy.studio/assets/loader/logo.svg',
  asterisk: 'https://www.garcy.studio/assets/asterisk.svg',
  opening: 'https://www.garcy.studio/assets/loader/opening.webp',
  portraitGrid: 'https://www.garcy.studio/assets/portraits/notification-grid-16.webp',
  joySvg: 'https://www.garcy.studio/assets/final/joy.svg',
  reelVideo: 'https://www.garcy.studio/reel-02.mp4',
  podcastAudio: 'https://www.garcy.studio/assets/audio/garcy-podcast.mp3',
  ambientAudio: 'https://www.garcy.studio/assets/audio/starfall-master.mp3',
  studio: {
    interior: 'https://www.garcy.studio/assets/final/interior.webp',
    terrace: 'https://www.garcy.studio/assets/final/terrace.webp',
    team: [
      {
        name: 'Loren Goodknight',
        role: 'Studio Manager & Project Lead',
        email: 'hello@garcy.studio',
        image: 'https://www.garcy.studio/assets/final/loren.webp',
      },
      {
        name: 'Tom Garcy',
        role: 'Managing Director & Design Lead',
        email: 'hello@garcy.studio',
        image: 'https://www.garcy.studio/assets/final/tom.webp',
      },
      {
        name: 'Venca Šrámek',
        role: 'Lead Designer',
        email: 'hello@garcy.studio',
        image: 'https://www.garcy.studio/assets/final/venca.webp',
      },
    ],
  },
};

export const GARCY_PROJECTS: CaseStudy[] = [
  {
    id: 'sofa',
    title: 'SOFA, Society for All',
    client: 'SOFA, Society for All',
    field: 'Education / Nonprofit',
    headline: 'Serious change does not have to look serious',
    pullQuote: 'A SERIOUS MISSION CAN STILL FEEL HUMAN.',
    summary:
      'SOFA works on some of the most complex issues in Czech education: inclusion, mental wellbeing and systemic change. The transformation started with a new name and a human, optimistic visual world.',
    story: [
      'SOFA needed to feel credible enough for institutions and experts, but human enough for teachers, parents and everyone affected by the education system.',
      'A sofa is familiar, welcoming and open — a place where people come together, talk and feel safe. Together with illustrator Barbora Idesová, we created a visual language full of personality, bold typography and human moments.',
      'The brand expanded into the SOFA website and a growing digital ecosystem of educational content, services and tools.',
    ],
    services: ['Naming', 'Brand identity', 'Illustration', 'Website design', 'Digital product design'],
    thumb: 'https://www.garcy.studio/assets/projects/society-for-all.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/sofa.svg',
    gallery: [
      'https://www.garcy.studio/assets/project-content/sofa-1.webp',
      'https://www.garcy.studio/assets/project-content/sofa-4.webp',
      'https://www.garcy.studio/assets/project-content/sofa-7.webp',
      'https://www.garcy.studio/assets/project-content/sofa-5.webp',
      'https://www.garcy.studio/assets/project-content/sofa-10.webp',
      'https://www.garcy.studio/assets/project-content/sofa-2.webp',
    ],
  },
  {
    id: 'goodveri',
    title: 'Goodveri',
    client: 'Goodveri',
    field: 'AI / Content Verification',
    headline: 'Truth in the age of synthetic media',
    pullQuote: 'CLARITY AND MOTION THAT STAND OUT FROM AI SAMENESS.',
    summary:
      'Brand identity, 3D motion language and high-impact web experience for Goodveri — designed to stop visitors mid-scroll with tactile visual storytelling.',
    story: [
      'In a market flooded with generic tech gradients, Goodveri required an unmistakable visual signature that communicates precision, verification and trust.',
      'We combined custom 3D motion studies, expressive typography and an interactive digital product showcase.',
    ],
    services: ['Branding', 'Website design', '3D Motion', 'Product storytelling'],
    thumb: 'https://www.garcy.studio/assets/goodveri/thumb.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/goodveri.svg',
    video: 'https://www.garcy.studio/assets/goodveri/hero-video-hp.mp4',
    gallery: [
      'https://www.garcy.studio/assets/goodveri/goodveri-1.webp',
      'https://www.garcy.studio/assets/goodveri/goodveri-2.webp',
      'https://www.garcy.studio/assets/goodveri/goodveri-3.webp',
      'https://www.garcy.studio/assets/goodveri/goodveri-4.webp',
      'https://www.garcy.studio/assets/goodveri/goodveri-6.webp',
      'https://www.garcy.studio/assets/goodveri/goodveri-8.webp',
    ],
  },
  {
    id: 'unit',
    title: 'UNIT architekti',
    client: 'UNIT architekti',
    field: 'Architecture / Urbanism',
    headline: 'Simple enough to last for decades',
    pullQuote: 'A LOT OF MATH. VERY LITTLE NOISE.',
    summary:
      'We spent almost two years building a visual identity system for one of the most recognised architecture and urbanism studios in the region — across hundreds of plans, urban studies and digital touchpoints.',
    story: [
      'Instead of treating the original UNIT square as a conventional logo mark, we turned it into the main structural anchor of the entire brand architecture.',
      'Set in Moderat by Tightype with outlined urban maps and mathematical layout rules, the system stays quiet so architecture and plans can breathe.',
    ],
    services: ['Brand identity', 'Visual system', 'Brand guidelines', 'Website design'],
    thumb: 'https://www.garcy.studio/assets/projects/unit-architects.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/unit.svg',
    gallery: [
      'https://www.garcy.studio/assets/project-content/unit-1.webp',
      'https://www.garcy.studio/assets/project-content/unit-4-landscape.webp',
      'https://www.garcy.studio/assets/project-content/unit-2.webp',
      'https://www.garcy.studio/assets/project-content/unit-5.webp',
      'https://www.garcy.studio/assets/project-content/unit-10.webp',
      'https://www.garcy.studio/assets/project-content/unit-6.webp',
    ],
  },
  {
    id: 'otk',
    title: 'Oslo Tennisklubb',
    client: 'Oslo Tennisklubb',
    field: 'Sports & Heritage Club',
    headline: 'A century of Norwegian tennis heritage reimagined',
    pullQuote: 'HERITAGE WITH A CONTEMPORARY PULSE.',
    summary:
      'Complete brand identity, strategy and digital platform for Oslo Tennisklubb, blending classic court elegance with kinetic digital typography.',
    story: [
      'Oslo Tennisklubb needed an identity that honors its historic legacy while energizing a new generation of players and members.',
      'We crafted a bespoke typographic and motion system paired with an intuitive digital club experience.',
    ],
    services: ['Branding', 'Website design', 'Strategy', 'Motion design'],
    thumb: 'https://www.garcy.studio/assets/project-content/otk-cover-1.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/otk.svg',
    video: 'https://www.garcy.studio/assets/case-studies/otk-video-1.mp4',
    gallery: [
      'https://www.garcy.studio/assets/project-content/otk-cover-2.webp',
      'https://www.garcy.studio/assets/case-studies/otk-2.webp',
      'https://www.garcy.studio/assets/case-studies/otk-3.webp',
      'https://www.garcy.studio/assets/case-studies/otk-4.webp',
      'https://www.garcy.studio/assets/case-studies/otk-5.webp',
    ],
  },
  {
    id: 'nachonacho',
    title: 'NachoNacho',
    client: 'NachoNacho (San Francisco)',
    field: 'SaaS / Fintech Marketplace',
    headline: 'Different on purpose. +800% conversion growth.',
    pullQuote: 'IF EVERYONE LOOKS THE SAME, BEING DIFFERENT BECOMES AN ADVANTAGE.',
    summary:
      'San Francisco platform for discovering, buying and managing SaaS and fintech spend. We simplified the story, rebuilt the UX journey and created a fearless visual identity.',
    story: [
      'Fintech and SaaS brands often converge around safe colours and interchangeable interfaces. We deliberately went the other way.',
      'NachoNacho became vivid, bold and immediately recognisable — while our product UX overhaul made virtual cards, subscriptions and SaaS discovery effortless.',
      'In the tracked period following launch, conversion increased by more than 800%.',
    ],
    services: ['Brand strategy', 'Brand identity', 'Product design', 'Website design', 'User research'],
    thumb: 'https://www.garcy.studio/assets/project-content/nachonacho1.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/nachonacho.svg',
    metrics: '+800% Conversion Increase',
    gallery: [
      'https://www.garcy.studio/assets/project-content/nachonacho1.webp',
      'https://www.garcy.studio/assets/project-content/nachonacho4.webp',
      'https://www.garcy.studio/assets/project-content/nachonacho5.webp',
      'https://www.garcy.studio/assets/project-content/nacho-cards.webp',
      'https://www.garcy.studio/assets/project-content/nacho-subscription.webp',
      'https://www.garcy.studio/assets/project-content/nachonacho8.webp',
    ],
  },
  {
    id: 'koscom',
    title: 'Koscom 30',
    client: 'Koscom, Luxury Guide',
    field: 'Haute Horlogerie / Editorial',
    headline: 'One magazine. Twenty-five different stories.',
    pullQuote: 'CONSISTENCY DOES NOT HAVE TO MEAN REPETITION.',
    summary:
      'Editorial art direction for Koscom’s anniversary luxury watchmaking publication — 25 bespoke visual worlds bound into one coherent collector’s object.',
    story: [
      'Instead of forcing every article into the same template, we treated each of the 25 stories like its own visual world.',
      'Scale, contrast and typographic hierarchy gave every timepiece feature its own rhythm while maintaining an unmistakable editorial attitude.',
    ],
    services: ['Art direction', 'Editorial design', 'Typography'],
    thumb: 'https://www.garcy.studio/assets/projects/koscom-30.webp',
    gallery: [
      'https://www.garcy.studio/assets/project-content/koscom1.webp',
      'https://www.garcy.studio/assets/project-content/koscom3.webp',
      'https://www.garcy.studio/assets/project-content/koscom5.webp',
      'https://www.garcy.studio/assets/project-content/koscom6.webp',
      'https://www.garcy.studio/assets/project-content/koscom10.webp',
      'https://www.garcy.studio/assets/project-content/koscom8.webp',
    ],
  },
  {
    id: 'walletii',
    title: 'Walletii',
    client: 'Creative Dock, Ooredoo',
    field: 'Fintech / MENA Digital Wallet',
    headline: 'From one screen to an entire financial ecosystem',
    pullQuote: 'COMPLEX MONEY FLOWS. SIMPLE HUMAN ACTIONS.',
    summary:
      'Three-year product, UX/UI and design system partnership building a multi-market digital wallet across the MENA region.',
    story: [
      'What began as a sketch of a home screen expanded into hundreds of screens, remittance flows, chat-like payment experiences and an adaptable multi-language design system.',
      'We unified the app UX with physical cards, retail packaging and regional brand communications.',
    ],
    services: ['Product design', 'UX/UI design', 'Design system', 'Brand digital system', 'Service design'],
    thumb: 'https://www.garcy.studio/assets/case-studies/walletii/cover.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/walletii.svg',
    gallery: [
      'https://www.garcy.studio/assets/case-studies/walletii/hero.webp',
      'https://www.garcy.studio/assets/case-studies/walletii/walletii-3.webp',
      'https://www.garcy.studio/assets/case-studies/walletii/walletii-5.webp',
      'https://www.garcy.studio/assets/case-studies/walletii/walletii-7.webp',
      'https://www.garcy.studio/assets/case-studies/walletii/walletii-10.webp',
      'https://www.garcy.studio/assets/case-studies/walletii/walletii-12.webp',
    ],
  },
  {
    id: 'magu',
    title: 'Magu',
    client: 'Magu Kombucha',
    field: 'Functional Beverage / Luxury CPG',
    headline: 'Turning a living elixir into a cult lifestyle object',
    pullQuote: 'PACKAGING THAT FEELS LIKE A RITUAL.',
    summary:
      'Branding, packaging architecture and strategic positioning for Magu — one of Europe’s fastest-growing functional kombucha brands.',
    story: [
      'We stripped away cliché health-store visuals and positioned Magu with the restraint and desirability of fine champagne and apothecary craft.',
    ],
    services: ['Branding', 'Packaging', 'Strategy'],
    thumb: 'https://www.garcy.studio/assets/projects/magu.webp',
    logo: 'https://www.garcy.studio/assets/case-studies/magu-logo.svg',
    gallery: [
      'https://www.garcy.studio/assets/case-studies/magu-0.webp',
      'https://www.garcy.studio/assets/case-studies/magu-1.webp',
      'https://www.garcy.studio/assets/case-studies/magu-2.webp',
      'https://www.garcy.studio/assets/case-studies/magu-4.webp',
      'https://www.garcy.studio/assets/case-studies/magu-5.webp',
      'https://www.garcy.studio/assets/case-studies/magu-6.webp',
    ],
  },
  {
    id: 'aomu',
    title: 'AOMU',
    client: 'AOMU Aromatherapy',
    field: 'Wellness / Sensory Design',
    headline: 'Building a sensory wellness brand from the first mark',
    pullQuote: 'DIFFERENT PRODUCTS. ONE CLEAR BRAND.',
    summary:
      'Ground-up brand identity, wordmark, color atmosphere and tactile packaging system for AOMU inhalation sticks and essential oil blends.',
    story: [
      'We wanted AOMU to feel contemporary, calm and premium without becoming cold or clinical. Each product carries its own chromatic mood while belonging unmistakably to one family.',
    ],
    services: ['Brand identity', 'Logo design', 'Packaging design', 'Visual system'],
    thumb: 'https://www.garcy.studio/assets/projects/aomu.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/aomu.svg',
    gallery: [
      'https://www.garcy.studio/assets/project-content/aomu-1.webp',
      'https://www.garcy.studio/assets/project-content/aomu-2.webp',
      'https://www.garcy.studio/assets/project-content/aomu-3.webp',
      'https://www.garcy.studio/assets/project-content/aomu-4.webp',
      'https://www.garcy.studio/assets/project-content/aomu-5.webp',
      'https://www.garcy.studio/assets/project-content/aomu-8.webp',
    ],
  },
  {
    id: 'arkady',
    title: 'Arkády Pankrác',
    client: 'CBRE, Trigea',
    field: 'Retail Destination',
    headline: 'A shopping centre with unmistakable personality',
    pullQuote: 'VIVID COLOUR AND TYPOGRAPHY AS ARCHITECTURE.',
    summary:
      'High-visibility retail rebrand for Arkády shopping centre — replacing polished mall neutrality with electric orange energy and bold custom typography.',
    story: [
      'Shopping centres often look interchangeable. For Arkády, we built a dynamic visual system that commands outdoor billboards, wayfinding and seasonal campaigns.',
    ],
    services: ['Brand identity', 'Typography', 'Visual system', 'Retail communication'],
    thumb: 'https://www.garcy.studio/assets/projects/oslo-02.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/arkady.svg',
    gallery: [
      'https://www.garcy.studio/assets/project-content/arkady-2.webp',
      'https://www.garcy.studio/assets/project-content/arkady-6.webp',
      'https://www.garcy.studio/assets/project-content/arkady-1.webp',
      'https://www.garcy.studio/assets/project-content/arkady-3.webp',
      'https://www.garcy.studio/assets/project-content/arkady-5.webp',
      'https://www.garcy.studio/assets/project-content/arkady-8.webp',
    ],
  },
  {
    id: 'luxury-travel',
    title: 'Luxury Travel Digest',
    client: 'Luxury Travel Digest',
    field: 'Publishing & Hospitality',
    headline: 'Editorial identity for discerning global travellers',
    pullQuote: 'TIMELESS TYPOGRAPHY MEETS SLOW JOURNALISM.',
    summary:
      'Editorial identity, custom masthead and print/digital magazine system celebrating extraordinary hotels and journeys.',
    story: [
      'Designed to feel collectible both in print and on screen, giving large-format photography and long-form travel writing room to breathe.',
    ],
    services: ['Editorial identity', 'Art direction', 'Magazine design'],
    thumb: 'https://www.garcy.studio/assets/projects/luxury-travel-digest.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/luxury-travel-digest.svg',
    gallery: [
      'https://www.garcy.studio/assets/case-studies/luxury-travel-digest/luxurytravel-3.webp',
      'https://www.garcy.studio/assets/case-studies/luxury-travel-digest/luxurytravel-1.webp',
      'https://www.garcy.studio/assets/case-studies/luxury-travel-digest/luxurytravel-5.webp',
      'https://www.garcy.studio/assets/case-studies/luxury-travel-digest/luxurytravel-9.webp',
      'https://www.garcy.studio/assets/case-studies/luxury-travel-digest/luxurytravel-10.webp',
    ],
  },
  {
    id: 'sunnysoft',
    title: 'Sunnysoft',
    client: 'Sunnysoft',
    field: 'E-commerce & Tech Retail',
    headline: 'Reinventing a tech pioneer for modern e-commerce',
    pullQuote: 'CLARITY ACROSS THOUSANDS OF PRODUCTS.',
    summary:
      'Complete brand overhaul, e-commerce UX architecture and design system for a beloved technology retailer.',
    story: [
      'We unified brand identity and conversion-focused e-commerce UX so customers can navigate complex product catalogs with zero friction.',
    ],
    services: ['Brand identity', 'E-commerce UX', 'Website design'],
    thumb: 'https://www.garcy.studio/assets/projects/sunnysoft-cover.webp',
    logo: 'https://www.garcy.studio/assets/project-logos/sunnysoft.svg',
    video: 'https://www.garcy.studio/assets/project-content/sunnysoft-main.mp4',
    gallery: [
      'https://www.garcy.studio/assets/project-content/sunnysoft-1.webp',
      'https://www.garcy.studio/assets/project-content/sunnysoft-2.webp',
      'https://www.garcy.studio/assets/project-content/sunnysoft-3.webp',
      'https://www.garcy.studio/assets/project-content/sunnysoft-4.webp',
      'https://www.garcy.studio/assets/project-content/sunnysoft-5.webp',
    ],
  },
];

export const GARCY_TESTIMONIALS = [
  {
    quote:
      'From where we started to where we are now, the difference is night and day. garcy.studio is next level in terms of taking a mock up or an idea and turning it into something better than you even conceptualized.',
    name: 'Andy Karuza',
    role: 'Head of Marketing',
    company: 'NachoNacho',
    tags: ['Branding', 'Website Design', 'Strategy'],
    avatar: 'https://www.garcy.studio/assets/testimonials/andy.webp',
    video: 'https://www.garcy.studio/assets/testimonials/andy-loop.mp4',
  },
  {
    quote:
      'Garcy.studio revitalized our website, skyrocketing our growth and customer engagement beyond expectations. We need very quick back and forth, and it has definitely moved us to the upper tier.',
    name: 'Lukáš Kovařík',
    role: 'CEO',
    company: 'Bohemian Research',
    tags: ['Branding', 'Website Design', 'User Experience'],
    avatar: 'https://www.garcy.studio/assets/testimonials/lukas.webp',
    video: 'https://www.garcy.studio/assets/testimonials/lukas-loop.mp4',
  },
  {
    quote:
      'Our new brand has elevated us to a whole new level. It has helped us confirm our credibility and relevance as the number one in driving systemic changes in education in Czechia.',
    name: 'Magdalena Olšanová',
    role: 'Project Lead',
    company: 'SOFA, Society for All',
    tags: ['Branding', 'Website Design'],
    avatar: 'https://www.garcy.studio/assets/testimonials/magdalena.webp',
  },
  {
    quote:
      'garcy.studio offers a full package of services and that’s a really big benefit. It’s not only that we get a Figma file with ready screens, but we can really get into complex discussions about user needs and branding.',
    name: 'Michal Beran',
    role: 'Product Owner',
    company: 'Creative Dock',
    tags: ['User Experience', 'App Design'],
    avatar: 'https://www.garcy.studio/assets/testimonials/michal.webp',
  },
  {
    quote:
      'My first collaboration with garcy.studio was one of the best rebrandings that I’ve seen. Plus we always had pleasant, smooth discussions where we could challenge one another and the project.',
    name: 'Pavel Urban',
    role: 'Head Of Shopping Centers Marketing CZ/SK',
    company: 'CPI Property Group',
    tags: ['Branding', 'Strategy'],
    avatar: 'https://www.garcy.studio/assets/testimonials/pavel.webp',
  },
  {
    quote:
      'We’re always impressed by garcy.studio’s ability to consistently deliver something extra. The collaboration is smooth and the work is always completed efficiently and professionally.',
    name: 'Martin Šetek',
    role: 'CEO',
    company: 'Resimo',
    tags: ['Website Design', 'User Experience'],
    avatar: 'https://www.garcy.studio/assets/testimonials/martin.webp',
  },
];
