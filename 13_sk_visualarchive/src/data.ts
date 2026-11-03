export interface ArchiveEventItem {
  id: string;
  catalogCode: string;
  title: string;
  jpTitle: string;
  date: string;
  venue: string;
  city: 'TOKYO' | 'BERLIN' | 'OSAKA';
  bpmRange: string;
  genre: string;
  poster: string;
  lineup: string[];
  visualDirector: string;
  ticketPrice: string;
  status: 'UPCOMING // RSVP OPEN' | 'SOLD OUT // ARCHIVED' | 'LIMITED DOOR';
  notes: string;
}

export const SONIK_ARCHIVE_EVENTS: ArchiveEventItem[] = [
  {
    id: 'thenightwatch-01',
    catalogCode: 'SK-VA // 001',
    title: 'THE NIGHT WATCH: SUB-BASS RITUAL',
    jpTitle: '夜警 — 音響視覚実験室',
    date: '2026.11.14 [SAT] 23:00–06:00',
    venue: 'VENT OMOTESANDO',
    city: 'TOKYO',
    bpmRange: '134 – 142 BPM',
    genre: 'Hypnotic Techno / Modular Live',
    poster: 'https://sk-visualarchive.vercel.app/_astro/thenightwatch01.tccThZP7_Z2kxsxd.webp',
    lineup: ['KAISEI SADATOKI (Live A/V)', 'WATA IGARASHI', 'DJ NOBU', 'HARUKA'],
    visualDirector: 'S.K. Visual Lab (TouchDesigner 4ch Laser)',
    ticketPrice: '¥4,500 ADV / ¥5,500 DOOR',
    status: 'UPCOMING // RSVP OPEN',
    notes:
      'Quadraphonic Funktion-One sound system calibrated with bespoke monochrome strobe choreography and real-time LIDAR crowd reactive projection.',
  },
  {
    id: 'weathertokyo-05',
    catalogCode: 'SK-VA // 002',
    title: 'WEATHER TOKYO: BAROMETRIC PRESSURE',
    jpTitle: '気象東京 — 低気圧電子音楽祭',
    date: '2026.11.28 [SAT] 22:00–05:30',
    venue: 'LIQUIDROOM EBISU',
    city: 'TOKYO',
    bpmRange: '128 – 160 BPM',
    genre: 'IDM / Leftfield Breaks / Ambient Dub',
    poster: 'https://sk-visualarchive.vercel.app/_astro/weathertokyo05.BYIiNWQr_tRPSw.webp',
    lineup: ['RHYTHM ARCHIVE', 'ENA (7-Hour Extended)', 'POWDER', 'YOUSUKE YUKIMATSU'],
    visualDirector: 'Studio Kaisei + CRT Wall Installation',
    ticketPrice: '¥4,000 ADV',
    status: 'UPCOMING // RSVP OPEN',
    notes:
      'Inspired by Tokyo meteorological telemetry maps—live atmospheric sensors modulate the hall’s sub-harmonic frequencies throughout the night.',
  },
  {
    id: 'shitai-01',
    catalogCode: 'SK-VA // 003',
    title: 'SHITAI: INDUSTRIAL METAMORPHOSIS',
    jpTitle: '視態 — 構造主義クラブナイト',
    date: '2026.12.05 [SAT] 23:59–10:00',
    venue: 'KRAFTWERK MITTE',
    city: 'BERLIN',
    bpmRange: '138 – 148 BPM',
    genre: 'Industrial Techno / Electro / EBM',
    poster: 'https://sk-visualarchive.vercel.app/_astro/shitai01.DZqQ_e4o_ZIngQa.webp',
    lineup: ['PHASE FATALE', 'DVS1', 'AKIKO Kiyama', 'SK-VA SOUND SYSTEM'],
    visualDirector: 'Kaisei Sadatoki (Brutalist Typography Projection)',
    ticketPrice: '€28 ADV',
    status: 'LIMITED DOOR',
    notes:
      'Tokyo meets Berlin exchange edition hosted inside the former turbine hall with 18-meter vertical typographic projections.',
  },
  {
    id: 'taihei-01',
    catalogCode: 'SK-VA // 004',
    title: 'TAIHEI: PACIFIC FREQUENCIES VOL. 4',
    jpTitle: '泰平 — アンビエント・ドローン公演',
    date: '2026.10.18 [SUN] 18:00–23:30',
    venue: 'WWW X SHIBUYA',
    city: 'TOKYO',
    bpmRange: '0 – 115 BPM',
    genre: 'Ambient / Buchla 200e Modular / Experimental',
    poster: 'https://sk-visualarchive.vercel.app/_astro/taihei01.3pzdJgky_JVAGm.webp',
    lineup: ['CHIHEI HATAKEYAMA', 'HAKOBUNE', 'MEITEI', 'KAISEI (Visuals)'],
    visualDirector: '16mm Film Loop & Generative Grain',
    ticketPrice: '¥3,800 ADV',
    status: 'SOLD OUT // ARCHIVED',
    notes:
      'Seated listening session featuring tape-loop synthesis, traditional koto resampling, and 35mm slide dissolve projections.',
  },
  {
    id: 'invoice-04',
    catalogCode: 'SK-VA // 005',
    title: 'BACKSTAGE RECEIPTS: RAW WAREHOUSE RAVE',
    jpTitle: '倉庫記録 — オーバーグラウンド',
    date: '2026.09.21 [SAT] 23:00–07:00',
    venue: 'CREATIVE CENTER NAMURA',
    city: 'OSAKA',
    bpmRange: '135 – 150 BPM',
    genre: 'Hardgroove / Acid / Dub Techno',
    poster: 'https://sk-visualarchive.vercel.app/_astro/invoice04.CJ0DRpf4_Z1pQneQ.webp',
    lineup: ['TAKAATSU', 'MARZY', 'OKADADA', 'SEKITOVA'],
    visualDirector: 'Thermal Printer Live Feed & DMX Matrix',
    ticketPrice: '¥3,500',
    status: 'SOLD OUT // ARCHIVED',
    notes:
      'Every attendee received a custom thermal-printed manifest stamped with time-of-entry and real-time decibel telemetry.',
  },
  {
    id: 'nattopasta-05',
    catalogCode: 'SK-VA // 006',
    title: 'FERMENTATION VOL. 5 — AFTERHOURS',
    jpTitle: '発酵深夜 — アフターアワーズ',
    date: '2026.08.15 [SUN] 05:00–13:00',
    venue: 'FORESTLIMIT HATAGAYA',
    city: 'TOKYO',
    bpmRange: '122 – 130 BPM',
    genre: 'Minimal House / Micro-Dub /Vinyl Only',
    poster: 'https://sk-visualarchive.vercel.app/_astro/nattopasta05.CDG26hIZ_Eq6E4.webp',
    lineup: ['KABUTO', 'SO (Mindgames)', 'KUNIYUKI TAKAHASHI'],
    visualDirector: 'Risograph Print Exhibition + Liquid Oil Lamps',
    ticketPrice: '¥2,500',
    status: 'SOLD OUT // ARCHIVED',
    notes:
      'Intimate 120-capacity sunrise session pairing rotary mixer vinyl sets with limited-edition risograph event zines.',
  },
  {
    id: 'businesscard-01',
    catalogCode: 'SK-VA // 007',
    title: 'ACCESS PASS // SECRET ROOFTOP SESSION',
    jpTitle: '極秘周波数 — 招待制セッション',
    date: '2026.12.31 [THU] NYE COUNTDOWN',
    venue: 'SHIBUYA PARCO ROOFTOP',
    city: 'TOKYO',
    bpmRange: '126 – 144 BPM',
    genre: 'Electro / Acid / New Year Anthology',
    poster: 'https://sk-visualarchive.vercel.app/_astro/businesscard01.C6mGVN_H_10QDM0.webp',
    lineup: ['FULL SK-VA RESIDENTS', 'SPECIAL SECRET GUEST (BERLIN)'],
    visualDirector: 'Full 360° Projection Mapping',
    ticketPrice: '¥6,000 EARLY / RSVP',
    status: 'UPCOMING // RSVP OPEN',
    notes:
      'Annual New Year’s Eve visual archive retrospective with 12 hours of continuous electronic music and printed archival book launch.',
  },
];
