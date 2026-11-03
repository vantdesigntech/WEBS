export interface KinetikWork {
  id: string;
  name: string;
  category: 'UI/UX Design' | 'Webflow & Framer' | 'Brand Identity';
  tagline: string;
  metric: string;
  turnaround: string;
  thumb: string;
  fullPreview: string;
  deliverables: string[];
  brief: string;
  execution: string;
}

export interface KinetikService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  poster: string;
  video: string;
  tags: string[];
}

export interface FounderReview {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  impactMetric: string;
}

export const KINETIK_WORKS: KinetikWork[] = [
  {
    id: 'kaelio',
    name: 'Kaelio AI',
    category: 'UI/UX Design',
    tagline: 'Autonomous enterprise analytics workspace & command surface',
    metric: '$14M Seed Raised',
    turnaround: '11 days to launch',
    thumb: 'https://www.ohhmydesign.com/assets/kaelionew.webp',
    fullPreview: 'https://www.ohhmydesign.com/assets/kaelio-full.webp',
    deliverables: ['Figma Design System', 'Product UI/UX', 'Interactive Webflow Site', 'Pitch Deck'],
    brief: 'Reposition an enterprise BI engine into a high-velocity AI copilot that Series A investors immediately understand.',
    execution: 'We stripped away legacy dashboard clutter in favor of a tactile command palette, dark-glass telemetry cards, and zero-latency motion.',
  },
  {
    id: 'harmonic',
    name: 'Harmonic Discovery',
    category: 'Brand Identity',
    tagline: 'Computational polypharmacology & molecular generative platform',
    metric: '3.4x Inbound Partner Leads',
    turnaround: '14 days sprint',
    thumb: 'https://www.ohhmydesign.com/assets/harmonic.webp',
    fullPreview: 'https://www.ohhmydesign.com/assets/harmonic-discovery.webp',
    deliverables: ['Brand Identity', '3D Molecular Visuals', 'Framer Flagship Site', 'Investor Guidelines'],
    brief: 'Translate multi-target kinase drug discovery into a visual language that feels both scientifically rigorous and editorial.',
    execution: 'Built an organic-meets-algorithmic visual identity with custom shaders, serif editorial headlines, and interactive target maps.',
  },
  {
    id: 'jupiter',
    name: 'Jupiter Exchange',
    category: 'Webflow & Framer',
    tagline: 'High-frequency DeFi liquidity aggregator & perpetuals terminal',
    metric: '+68% Onboarding Conversion',
    turnaround: '9 days delivery',
    thumb: 'https://www.ohhmydesign.com/assets/jupiternew.webp',
    fullPreview: 'https://www.ohhmydesign.com/assets/jupiter.webp',
    deliverables: ['Landing Architecture', 'Swap UI Kit', 'Motion Micro-Interactions', 'Token Launch Hub'],
    brief: 'Create a high-octane marketing and terminal portal capable of onboarding millions of retail and pro traders without friction.',
    execution: 'Engineered sub-second visual feedback loops, luminous emerald/amber dark surfaces, and modular bento grids.',
  },
  {
    id: 'corgi',
    name: 'Corgi Labs',
    category: 'UI/UX Design',
    tagline: 'AI-powered dispute defense & merchant revenue recovery engine',
    metric: 'YC W24 Top Performer',
    turnaround: '7 days sprint',
    thumb: 'https://www.ohhmydesign.com/assets/corgi.webp',
    fullPreview: 'https://www.ohhmydesign.com/assets/CorgiLabs.webp',
    deliverables: ['Brand Refresh', 'Merchant Dashboard UI', 'Framer Conversion Site', 'Social Launch Kit'],
    brief: 'Turn chargeback automation—a notoriously dry fintech vertical—into the most memorable brand in the YC batch.',
    execution: 'Paired bold kinetic typography with warm playful illustrations and an instant ROI calculator right in the hero.',
  },
  {
    id: 'cinedream',
    name: 'Cinedream Studio',
    category: 'Brand Identity',
    tagline: 'Real-time virtual production & spatial camera choreography',
    metric: 'Featured on Awwwards',
    turnaround: '12 days sprint',
    thumb: 'https://www.ohhmydesign.com/assets/cinedreamnew.webp',
    fullPreview: 'https://www.ohhmydesign.com/assets/cinedream.webp',
    deliverables: ['Cinema UI System', 'WebGL Reel Showcase', 'Visual Identity', 'Deck Templates'],
    brief: 'Showcase AI-assisted Unreal Engine camera workflows with the gravitas of an A24 film premiere.',
    execution: 'Designed an anamorphic widescreen interface with tactile timecode scrubbers and atmospheric lighting transitions.',
  },
  {
    id: 'savvy',
    name: 'Savvy Wealth',
    category: 'Webflow & Framer',
    tagline: 'Modern digital-first private wealth management for tech founders',
    metric: '$750M+ AUM Platform',
    turnaround: '16 days overhaul',
    thumb: 'https://www.ohhmydesign.com/assets/savvy.webp',
    fullPreview: 'https://www.ohhmydesign.com/assets/Savvy%20Wealth.webp',
    deliverables: ['Advisor Portal UX', 'Editorial Web Presence', 'Design Tokens', 'Data Visualization'],
    brief: 'Replace dusty private banking aesthetics with a sharp, transparent wealth interface built for modern operators.',
    execution: 'Crafted high-contrast Swiss grids, bespoke financial charts, and frictionless advisor matching flows.',
  },
];

export const KINETIK_SERVICES: KinetikService[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    subtitle: 'Figma.',
    description: ' Zero-bloat product interfaces, design systems, and clickable prototypes engineered to convert users and impress VCs in 48-hour drops.',
    poster: 'https://www.ohhmydesign.com/assets/svc-uiux-poster.webp',
    video: 'https://www.ohhmydesign.com/assets/svc-uiux.mp4',
    tags: ['Design Systems', 'Web & Mobile Apps', 'Interactive Prototypes', 'UX Audits'],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    subtitle: 'Webflow & Framer.',
    description: 'Pixel-accurate, 60fps marketing sites with custom GSAP/WebGL motion, CMS architecture, and technical SEO baked in from day one.',
    poster: 'https://www.ohhmydesign.com/assets/svc-webdev-poster.webp',
    video: 'https://www.ohhmydesign.com/assets/svc-webdev.mp4',
    tags: ['Framer Sites', 'Webflow Enterprise', 'Custom Shaders', 'Conversion Optimization'],
  },
  {
    id: 'brand',
    title: 'Brand Design',
    subtitle: 'Logo, decks, guidelines.',
    description: 'Unmistakable visual identities, fundraising pitch decks that close rounds, and comprehensive brand books built for speed.',
    poster: 'https://www.ohhmydesign.com/assets/svc-brand-poster.webp',
    video: 'https://www.ohhmydesign.com/assets/svc-brand.mp4',
    tags: ['Visual Identity', 'Series A/B Pitch Decks', 'Typography & Color', '3D Motion Assets'],
  },
];

export const FOUNDER_REVIEWS: FounderReview[] = [
  {
    id: 'kate',
    name: 'Kate Lindqvist',
    role: 'Co-Founder & CEO',
    company: 'Kaelio AI',
    avatar: 'https://www.ohhmydesign.com/assets/kate-poster.webp',
    quote: 'We dropped KINETIK into our Slack on a Monday. By Thursday our entire product UI and fundraising narrative looked like a $100M Series B company.',
    impactMetric: 'Closed $14M Seed in 3 weeks',
  },
  {
    id: 'mike',
    name: 'Mike Chen',
    role: 'Head of Product',
    company: 'Corgi Labs (YC W24)',
    avatar: 'https://www.ohhmydesign.com/assets/mike-poster.webp',
    quote: 'No 6-week discovery phases, no bloated account managers. Just senior designers shipping lethal Figma files and Framer pages every 48 hours.',
    impactMetric: '4.2x Demo Request Rate',
  },
  {
    id: 'rayees',
    name: 'Rayees Rashid',
    role: 'Founding Partner',
    company: 'Harmonic Discovery',
    avatar: 'https://www.ohhmydesign.com/assets/rayees-poster.webp',
    quote: 'Every biotech investor we pitched asked the exact same question on slide two: "Wait—who designed your brand and website?"',
    impactMetric: '100% Partner Meeting Conversion',
  },
  {
    id: 'mrinalini',
    name: 'Mrinalini Rao',
    role: 'VP of Growth',
    company: 'Savvy Wealth',
    avatar: 'https://www.ohhmydesign.com/assets/mrinalini.jpg',
    quote: 'KINETIK replaced three separate agencies for us. Faster turnarounds, sharper taste, and zero hand-holding required.',
    impactMetric: '-65% Time-to-Market',
  },
];

export const NOSY_FAQS = [
  {
    q: 'Why not just hire a full-time senior designer?',
    a: 'A senior principal designer with brand, UI/UX, and Framer/Webflow chops costs $165k+/year plus benefits and takes 3 months to recruit. With KINETIK, you start today, get a multi-disciplinary pod, and can pause or cancel whenever your roadmap slows down.',
  },
  {
    q: 'How fast do we actually see work?',
    a: 'Most requests are delivered in 24 to 48 hours. Larger multi-page builds or complete brand systems are broken into daily async milestones so you never go more than 48 hours without tangible Figma or Framer links.',
  },
  {
    q: 'Do you do endless discovery calls and status meetings?',
    a: 'Never. We operate 100% async via Slack, Loom, and Linear—unless you explicitly book a 15-minute jam session. All energy goes straight into the pixels.',
  },
  {
    q: 'What if we don’t love the first direction?',
    a: 'We iterate until you’re obsessed. Because we share raw work early and often with Loom walkthroughs, course corrections happen in hours, not weeks.',
  },
  {
    q: 'Can we just book a one-off launch sprint instead of monthly?',
    a: 'Yes. Pick our 2-Week Launch Sprint if you have a hard fundraising, YC Demo Day, or product launch deadline and want a complete brand + website drop.',
  },
];
