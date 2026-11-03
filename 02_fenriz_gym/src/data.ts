export type Lang = 'es' | 'de' | 'en';

export interface CourseItem {
  id: string;
  title: Record<Lang, string>;
  imgBw: string;
  imgColor: string;
  colorTag: string;
  subtitle: Record<Lang, string>;
  description: Record<Lang, string>;
  scheduleSummary: Record<Lang, string>;
  levels: string[];
  coaches: string[];
  equipment: Record<Lang, string>;
}

export interface EventItem {
  id: string;
  title: string;
  day: Record<Lang, string>;
  date: string;
  img: string;
  shortDesc: Record<Lang, string>;
  fullDesc: Record<Lang, string>;
  coach: string;
  time: string;
  level: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: Record<Lang, string>;
  disciplines: string[];
  img: string;
  beltImg?: string;
  bio: Record<Lang, string>;
}

export interface PriceTier {
  id: string;
  name: string;
  badge?: Record<Lang, string>;
  prices: {
    m12: string;
    m6: string;
    m1: string;
  };
  features: Record<Lang, string[]>;
}

export interface ShopProduct {
  id: string;
  name: string;
  category: Record<Lang, string>;
  price: number;
  img: string;
  sizes: string[];
  desc: Record<Lang, string>;
}

export interface ScheduleSlot {
  time: string;
  courseId: string;
  title: string;
  level: 'Beginner' | 'All Levels' | 'Advanced' | 'Sparring';
  duration: '60m' | '75m' | '90m';
  coach: string;
}

export const COURSES: CourseItem[] = [
  {
    id: 'muay-thai',
    title: { es: 'Muay Thai', de: 'Muay Thai', en: 'Muay Thai' },
    imgBw: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d0f9158698aa192e8ba5_course-thumb-mt-bw.webp',
    imgColor: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/657863433be3893ed75d3afc_course-thumb-muay-thai.webp',
    colorTag: '#f14553',
    subtitle: {
      es: 'El Arte de las Ocho Extremidades',
      de: 'Die Kunst der acht Gliedmaßen',
      en: 'The Art of Eight Limbs',
    },
    description: {
      es: 'Entrenamiento técnico e intenso de boxeo tailandés: combinaciones de puños, codos, rodillas, tibias y clinch. Desde clases de iniciación hasta sparring avanzado Kardia.',
      de: 'Technisches und intensives Thaibox-Training: Kombinationen aus Fäusten, Ellbogen, Knien, Schienbeinen und Clinch. Vom Einsteigerkurs bis zum Kardia-Wettkampfsparring.',
      en: 'Technical and intense Thai boxing training: combinations of fists, elbows, knees, shins and clinch work. From fundamentals to advanced Kardia sparring.',
    },
    scheduleSummary: {
      es: 'Lun – Dom · 28 clases semanales',
      de: 'Mo – So · 28 Kurse pro Woche',
      en: 'Mon – Sun · 28 classes per week',
    },
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Clinch & Pads', 'Sparring'],
    coaches: ['Robin', 'Jens', 'Niya'],
    equipment: {
      es: 'Guantes 14-16 oz, vendas, espinilleras y protector bucal.',
      de: 'Boxhandschuhe (14-16 oz), Bandagen, Schienbeinschoner & Mundschutz.',
      en: '14-16 oz gloves, handwraps, shin guards & mouthguard.',
    },
  },
  {
    id: 'bjj',
    title: { es: 'BJJ', de: 'BJJ', en: 'BJJ' },
    imgBw: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d14290d9454ed59c224b_course-thumb-bjj-bw.webp',
    imgColor: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/657863668fb8c6272436ab80_course-thumb-bjj.webp',
    colorTag: '#19477e',
    subtitle: {
      es: 'Brazilian Jiu-Jitsu (Gi & No-Gi / Grappling)',
      de: 'Brazilian Jiu-Jitsu (Gi & No-Gi / Grappling)',
      en: 'Brazilian Jiu-Jitsu (Gi & No-Gi / Grappling)',
    },
    description: {
      es: 'Domina el combate en suelo mediante palancas, estrangulaciones y control posicional. Entrenamos tanto con kimono (Gi) como sin kimono (No-Gi / Luta Livre) todos los días.',
      de: 'Beherrsche den Bodenkampf durch Hebel, Würgegriffe und Positionskontrolle. Wir trainieren täglich sowohl mit Gi als auch No-Gi / Grappling.',
      en: 'Master ground combat through joint locks, chokes and positional control. Daily classes in both Gi and No-Gi / Submission Grappling.',
    },
    scheduleSummary: {
      es: 'Lun – Dom · 34 clases semanales + Open Mat',
      de: 'Mo – So · 34 Kurse pro Woche + Open Mat',
      en: 'Mon – Sun · 34 classes per week + Open Mat',
    },
    levels: ['Fundamentals', 'All Levels Gi', 'No-Gi Grappling', 'Competition', 'Open Mat'],
    coaches: ['Ulf', 'Phillip', 'Lars', 'Charlize'],
    equipment: {
      es: 'Kimono BJJ (Gi) o Rashguard + shorts sin bolsillos (No-Gi).',
      de: 'BJJ Gi oder Rashguard + Shorts ohne Taschen (No-Gi).',
      en: 'BJJ Gi or Rashguard + pocketless shorts (No-Gi).',
    },
  },
  {
    id: 'mma',
    title: { es: 'MMA', de: 'MMA', en: 'MMA' },
    imgBw: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d12db0a52d74129f5d36_course-thumb-mma-bw.webp',
    imgColor: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a671be769713f93a55f0ca_course-thumb-mma.webp',
    colorTag: '#f9f383',
    subtitle: {
      es: 'Mixed Martial Arts · El ADN de Fenriz desde 2010',
      de: 'Mixed Martial Arts · Unsere DNA seit 2010',
      en: 'Mixed Martial Arts · Our DNA since 2010',
    },
    description: {
      es: 'Combina striking, derribos de lucha (Wrestling), control en jaula (Wall-Work) y sumisiones en suelo. Nuestro equipo de competición es referente en Alemania.',
      de: 'Verbinde Striking, Wrestling-Takedowns, Cage-Control (Wall-Work) und Bodenkampf. Unser Wettkampfteam gehört zu den erfolgreichsten in Deutschland.',
      en: 'Combine striking, wrestling takedowns, cage wall-work and ground submissions. Home to one of Germany’s premier MMA fight teams.',
    },
    scheduleSummary: {
      es: 'Lun – Sáb · 22 clases semanales',
      de: 'Mo – Sa · 22 Kurse pro Woche',
      en: 'Mon – Sat · 22 classes per week',
    },
    levels: ['MMA Basics', 'MMA Striking', 'MMA Grappling & Cage', 'Pro Team Sparring'],
    coaches: ['Jesse-Björn', 'Stas', 'Lars'],
    equipment: {
      es: 'Guantes de MMA (7 oz Sparring), espinilleras, bucal y coquilla.',
      de: 'MMA-Sparringshandschuhe (7 oz), Schienbeinschoner, Mund- & Tiefschutz.',
      en: 'MMA sparring gloves (7 oz), shin guards, mouthguard & groin guard.',
    },
  },
  {
    id: 'boxen',
    title: { es: 'Boxeo', de: 'Boxen', en: 'Boxing' },
    imgBw: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d1505bee8daebae0167c_course-thumb-boxen-bw.webp',
    imgColor: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65786370518890b6172022a4_course-thumb-boxen.webp',
    colorTag: '#f5966a',
    subtitle: {
      es: 'Boxeo Olímpico & Técnico en Kreuzberg',
      de: 'Klassisches & Technisches Boxen in Kreuzberg',
      en: 'Classic & Technical Boxing in Kreuzberg',
    },
    description: {
      es: 'Juego de pies, defensa, movimiento de cabeza y precisión en el golpeo. Entrena técnica, trabajo de saco, manoplas y sparring supervisado los sábados con Luciano.',
      de: 'Beinarbeit, Deckung, Meidbewegungen und Schlagpräzision. Techniktraining, Sandsack, Pratzenarbeit und betreutes Samstagssparring mit Luciano.',
      en: 'Footwork, defense, head movement and punching precision. Technique drills, heavy bag, pad work and supervised Saturday sparring with Luciano.',
    },
    scheduleSummary: {
      es: 'Lun – Sáb · 18 clases semanales',
      de: 'Mo – Sa · 18 Kurse pro Woche',
      en: 'Mon – Sat · 18 classes per week',
    },
    levels: ['Boxing Basics', 'All Levels Technique', 'Conditioning & Bags', 'Boxsparring'],
    coaches: ['Luciano', 'Andrii', 'Amine'],
    equipment: {
      es: 'Guantes de boxeo (14-16 oz), vendas de 4.5m y protector bucal.',
      de: 'Boxhandschuhe (14-16 oz), 4.5m Bandagen und Mundschutz.',
      en: 'Boxing gloves (14-16 oz), 4.5m handwraps and mouthguard.',
    },
  },
  {
    id: 'fitness',
    title: { es: 'Fitness', de: 'Fitness', en: 'Fitness' },
    imgBw: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d0e0b586d37d7a9ab834_course-thumb-fitness-bw.webp',
    imgColor: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d03c9ad56c822b52da90_course-thumb-fitness.webp',
    colorTag: '#7429d3',
    subtitle: {
      es: 'Strength & Conditioning para Atletas de Combate',
      de: 'Kraft & Kondition für Kampfsportler:innen',
      en: 'Strength & Conditioning for Combat Athletes',
    },
    description: {
      es: 'Zona completa de peso libre, racks olímpicos, kettlebells y clases dirigidas de HIIT, Functional Strength y acondicionamiento metabólico específico para luchadores.',
      de: 'Kompletter Freihantelbereich, Olympic Racks, Kettlebells sowie geführte HIIT-, Functional-Strength- und Fighter-Conditioning-Kurse.',
      en: 'Full free-weight area, Olympic racks, kettlebells and guided HIIT, Functional Strength and fighter conditioning classes.',
    },
    scheduleSummary: {
      es: 'Abierto 7 días · Zona libre + 20 clases dirigidas',
      de: '7 Tage geöffnet · Freies Training + 20 Kurse',
      en: 'Open 7 days · Open gym + 20 guided classes',
    },
    levels: ['Fighter Conditioning', 'Kettlebell & Core', 'Mobility & Strength', 'Open Gym'],
    coaches: ['Marike', 'Henning', 'Stella'],
    equipment: {
      es: 'Ropa deportiva cómoda, calzado limpio de interior y toalla.',
      de: 'Bequeme Sportkleidung, saubere Hallenschuhe und Handtuch.',
      en: 'Comfortable sportswear, clean indoor shoes and towel.',
    },
  },
  {
    id: 'recovery',
    title: { es: 'Recovery', de: 'Recovery', en: 'Recovery' },
    imgBw: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d11cbf8f3379cdb4a165_course-thumb-recovery-bw.webp',
    imgColor: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/6578630c8086346e7bfa60f3_course-thumb-recovery.webp',
    colorTag: '#ef8bff',
    subtitle: {
      es: 'Yoga para Luchadores, Movilidad & Masaje Deportivo',
      de: 'Yoga für Kampfsportler, Mobility & Sportmassage',
      en: 'Yoga for Fighters, Mobility & Sports Massage',
    },
    description: {
      es: 'El rendimiento exige recuperación activa. Sesiones de Vinyasa y Yin Yoga enfocadas en caderas, hombros y columna, además de servicio de fisioterapia y masaje en el gym.',
      de: 'Leistung braucht aktive Erholung. Vinyasa- und Yin-Yoga-Sessions für Hüfte, Schultern und Wirbelsäule sowie Sportmassage direkt im Gym.',
      en: 'Peak performance requires active recovery. Vinyasa & Yin Yoga tailored for hips, shoulders and spine, plus on-site sports massage.',
    },
    scheduleSummary: {
      es: 'Lun – Dom · Yoga diario & Masajes bajo reserva',
      de: 'Mo – So · Tägliches Yoga & Massage nach Buchung',
      en: 'Mon – Sun · Daily Yoga & Bookable Massage',
    },
    levels: ['Yoga for Fighters', 'Yin & Fascia Release', 'Breathwork', 'Sports Massage'],
    coaches: ['Laila', 'Sonnhild', 'Michelle'],
    equipment: {
      es: 'Esterillas y bloques incluidos en el estudio.',
      de: 'Yogamatten und Blöcke sind vor Ort vorhanden.',
      en: 'Yoga mats and blocks provided on site.',
    },
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'boxsparring-luciano',
    title: 'Boxsparring with Luciano',
    day: { es: 'SÁBADOS', de: 'SATURDAYS', en: 'SATURDAYS' },
    date: '14:00 – 15:30',
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65dc6f0ee3c8690d12b30c77_boxsparring.jpg',
    shortDesc: {
      es: 'Sparring de boxeo supervisado para boxeadores con experiencia.',
      de: 'Boxsparring für erfahrene Boxer:Innen.',
      en: 'Supervised boxing sparring for experienced boxers.',
    },
    fullDesc: {
      es: 'Sesión semanal de rondas de sparring técnico y condicional bajo la supervisión de nuestro entrenador de boxeo Luciano. Obligatorio protector bucal, casco opcional y guantes de al menos 16 oz.',
      de: 'Wöchentliche Sparring-Session mit gezielten Aufgaben- und freien Runden unter der Leitung von Boxtrainer Luciano. Mundschutz und mindestens 16 oz Handschuhe sind Pflicht.',
      en: 'Weekly sparring rounds combining technical drills and open rounds supervised by head boxing coach Luciano. Mouthguard and 16 oz gloves mandatory.',
    },
    coach: 'Luciano',
    time: '14:00 - 15:30 Uhr',
    level: 'Advanced / Experienced',
  },
  {
    id: 'kardia-muay-thai-sparring',
    title: 'Kardia - Muay Thai Sparring',
    day: { es: 'DOMINGOS', de: 'SONNTAGS', en: 'SUNDAYS' },
    date: '12:00 – 13:30',
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/68dba993b283e1eac4a38702_https___cdn.evbuc.com_images_767399399_573270992937_1_original.jpeg',
    shortDesc: {
      es: 'Sparring avanzado de Muay Thai y clinch.',
      de: 'Fortgeschrittenes Muay Thai Sparring',
      en: 'Advanced Muay Thai & clinch sparring',
    },
    fullDesc: {
      es: 'Encuentro dominical de sparring de Muay Thai organizado junto a Kardia. Rondas continuas de striking y clinch con compañeros de todos los pesos en nuestros 1.500 m² de tatami.',
      de: 'Das Sonntags-Highlight für fortgeschrittene NakMuays in Berlin: Viele Runden technisches Sparring und Clinch auf unserer großen Mattenfläche.',
      en: 'Sunday gathering for experienced Nak Muays in Berlin: technical striking and clinch rounds across our main mat area.',
    },
    coach: 'Robin & Jens',
    time: '12:00 - 13:30 Uhr',
    level: 'Intermediate / Advanced',
  },
  {
    id: 'gracie-academy-open-mat',
    title: 'Gracie Academy Berlin: Open Mat',
    day: { es: 'DOMINGOS', de: 'SONNTAGS', en: 'SUNDAYS' },
    date: '13:30 – 15:30',
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65d75f4bd61a931a1c0db133_open-mat-banner.png',
    shortDesc: {
      es: 'Open Mat abierto para Grappling y BJJ (Gi & No-Gi).',
      de: 'Open Mat für Grappling und BJJ',
      en: 'Open Mat for Grappling and BJJ (Gi & No-Gi)',
    },
    fullDesc: {
      es: 'Dos horas de tatami abierto para rolar con practicantes de BJJ y Luta Livre de todo Berlín. Tanto Gi como No-Gi son bienvenidos. Gratuito para socios de Fenriz Gym.',
      de: 'Zwei Stunden offene Matte zum Rollen, Austauschen und Technik-Drillen mit Grappler:innen aus ganz Berlin. Sowohl Gi als auch No-Gi.',
      en: 'Two hours of open mat for rolling and drilling with grapplers from all across Berlin. Both Gi and No-Gi welcome.',
    },
    coach: 'Ulf & Phillip',
    time: '13:30 - 15:30 Uhr',
    level: 'All Levels',
  },
];

export const TRAINERS: TrainerItem[] = [
  {
    id: 'robin',
    name: 'Robin',
    role: { es: 'Head Coach Muay Thai & K1', de: 'Head Coach Muay Thai & K1', en: 'Head Coach Muay Thai & K1' },
    disciplines: ['Muay Thai', 'MMA Striking'],
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a556ccdabe9fba4c40eb1b_Fenriz_Trainer_Robin.webp',
    bio: {
      es: 'Más de 15 años de experiencia en los rings de Tailandia y Europa. Especialista en clinch, timing y preparación de competidores.',
      de: 'Über 15 Jahre Erfahrung im Ring in Thailand und Europa. Spezialist für Clinch, Timing und Wettkampfvorbereitung.',
      en: 'Over 15 years of ring experience in Thailand and Europe. Specialist in clinch, timing and fight preparation.',
    },
  },
  {
    id: 'niya',
    name: 'Niya',
    role: { es: 'Entrenadora de Muay Thai & FLINTA*', de: 'Trainerin für Muay Thai & FLINTA*', en: 'Muay Thai & FLINTA* Coach' },
    disciplines: ['Muay Thai', 'Boxing'],
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a556e7dabe9fba4c410232_Fenriz_Trainer_Niya.webp',
    bio: {
      es: 'Competidora activa de Muay Thai. Sus clases destacan por el detalle técnico, el ritmo alto y un ambiente inclusivo para todos los niveles.',
      de: 'Aktive Muay-Thai-Wettkämpferin. Ihre Kurse zeichnen sich durch technische Präzision, hohes Tempo und eine inklusive Atmosphäre aus.',
      en: 'Active Muay Thai competitor known for technical precision, high pace and an inclusive training atmosphere.',
    },
  },
  {
    id: 'phillip',
    name: 'Phillip',
    role: { es: 'BJJ Black Belt (2 Stripes)', de: 'BJJ Black Belt (2 Stripes)', en: 'BJJ Black Belt (2 Stripes)' },
    disciplines: ['BJJ Gi', 'No-Gi Grappling'],
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a556d92983e6177438316a_Fenriz_Trainer_Phillip.webp',
    beltImg: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a5461a5f45f6ee5ce2d7c0_BELT-BLACK-02%20Stripes.webp',
    bio: {
      es: 'Cinturón negro 2º grado de Brazilian Jiu-Jitsu. Enfocado en conceptos modernos de guardia abierta, pases por presión y leglocks.',
      de: 'Brazilian Jiu-Jitsu Schwarzgurt (2. Grad). Fokus auf moderne Open-Guard-Konzepte, Pressure Passing und Leglocks.',
      en: '2nd degree Brazilian Jiu-Jitsu Black Belt focusing on modern open guard concepts, pressure passing and leglocks.',
    },
  },
  {
    id: 'lars',
    name: 'Lars',
    role: { es: 'Entrenador de MMA & BJJ', de: 'Trainer für MMA & BJJ', en: 'MMA & BJJ Coach' },
    disciplines: ['MMA', 'BJJ', 'Wrestling'],
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a5572afe80f3ea27f05abc_Fenriz_Trainer_Lars.webp',
    beltImg: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a5461a5f45f6ee5ce2d7c0_BELT-BLACK-02%20Stripes.webp',
    bio: {
      es: 'Pilar fundamental del equipo de competición de Fenriz desde sus inicios en Moritzplatz. Experto en transiciones de golpeo a derribo.',
      de: 'Seit den Anfängen am Moritzplatz fester Bestandteil des Fenriz-Trainerteams. Experte für Übergänge vom Stand- in den Bodenkampf.',
      en: 'Core member of the Fenriz coaching staff since the early Moritzplatz days. Expert in striking-to-grappling transitions.',
    },
  },
  {
    id: 'jens',
    name: 'Jens',
    role: { es: 'Entrenador de Muay Thai & Pads', de: 'Trainer für Muay Thai & Pratzen', en: 'Muay Thai & Padwork Coach' },
    disciplines: ['Muay Thai', 'Conditioning'],
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a55742ba6b3e0892c414a1_Fenriz_Trainer_Jens.webp',
    bio: {
      es: 'Especialista en trabajo de paos tailandeses, contragolpes y acondicionamiento físico específico para deportes de contacto.',
      de: 'Spezialist für thailändische Pratzenarbeit, Kontertechniken und kampfsportspezifisches Konditionstraining.',
      en: 'Specialist in Thai padwork, counter-striking and combat-specific conditioning.',
    },
  },
  {
    id: 'stas',
    name: 'Stanislav',
    role: { es: 'Entrenador de Lucha (Ringen) & MMA', de: 'Trainer für Ringen & MMA', en: 'Wrestling & MMA Coach' },
    disciplines: ['Wrestling', 'MMA'],
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a556ac44a01ca1478e0405_Fenriz_Trainer_Stas.webp',
    bio: {
      es: 'Experto en lucha libre olímpica y control en la jaula. Sus sesiones desarrollan explosividad, equilibrio y defensa de derribos.',
      de: 'Experte für Freistilringen und Cage-Control. Seine Einheiten fördern Explosivität, Balance und Takedown-Defense.',
      en: 'Freestyle wrestling and cage-control specialist building explosiveness, balance and takedown defense.',
    },
  },
];

export const PRICE_TIERS: PriceTier[] = [
  {
    id: 'fenriz-s',
    name: 'Fenriz S',
    prices: { m12: '69€', m6: '79€', m1: '89€' },
    features: {
      es: ['1 curso por semana', 'Zona de Fitness & Pesas incluida', 'Sauna & Zona de Relax', 'App de reservas MySports'],
      de: ['1 Kurs pro Woche', 'Inkl. Fitness- & Kraftbereich', 'Sauna & Ruhebereich', 'MySports Buchungs-App'],
      en: ['1 class per week', 'Includes Fitness & Weight Area', 'Sauna & Lounge Area', 'MySports Booking App'],
    },
  },
  {
    id: 'fenriz-m',
    name: 'Fenriz M',
    prices: { m12: '89€', m6: '99€', m1: '109€' },
    features: {
      es: ['2 cursos por semana', 'Zona de Fitness & Pesas ilimitada', 'Open Mat de Domingo incluido', 'Descuento 10% en Seminarios'],
      de: ['2 Kurse pro Woche', 'Unbegrenzter Fitnessbereich', 'Inkl. Sonntags Open Mat', '10% Rabatt auf Seminare'],
      en: ['2 classes per week', 'Unlimited Fitness Area', 'Includes Sunday Open Mat', '10% Seminar Discount'],
    },
  },
  {
    id: 'fenriz-l',
    name: 'Fenriz L',
    badge: { es: 'POPULAR', de: 'BELIEBT', en: 'POPULAR' },
    prices: { m12: '105€', m6: '115€', m1: '125€' },
    features: {
      es: ['3 cursos por semana', 'Todas las disciplinas (MMA, BJJ, MT, Box)', 'Zona Fitness + Open Mat ilimitado', 'Congelación gratuita 1 mes/año'],
      de: ['3 Kurse pro Woche', 'Alle Kampfsportarten inklusive', 'Fitness + Open Mat unbegrenzt', '1 Freimonat Pause pro Jahr'],
      en: ['3 classes per week', 'All disciplines included', 'Unlimited Fitness + Open Mat', '1 free pause month/year'],
    },
  },
  {
    id: 'fenriz-flat',
    name: 'Fenriz Flat',
    badge: { es: 'ILIMITADO', de: 'ALL-IN', en: 'UNLIMITED' },
    prices: { m12: '119€', m6: '129€', m1: '139€' },
    features: {
      es: ['Cursos ilimitados (+140/semana)', 'Acceso total los 7 días (1.500 m²)', 'Todos los Sparrings & Open Mats', 'Yoga & Recovery incluidos'],
      de: ['Unbegrenzt alle Kurse (+140/Woche)', 'Voller Zugang an 7 Tagen (1.500 m²)', 'Alle Sparrings & Open Mats', 'Inkl. Yoga & Recovery Kurse'],
      en: ['Unlimited classes (+140/week)', 'Full 7-day access (1,500 m²)', 'All Sparring & Open Mats', 'Includes Yoga & Recovery'],
    },
  },
];

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'classic-tshirt',
    name: 'Fenriz Classic T-Shirt',
    category: { es: '100% Algodón Orgánico · Negro', de: '100% Bio-Baumwolle · Schwarz', en: '100% Organic Cotton · Black' },
    price: 35,
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a4e79bdf2123b063ac849a_product-t-shirt.webp',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    desc: {
      es: 'Camiseta oficial Fenriz Gym Kreuzberg en algodón pesado de 220 g/m² con serigrafía frontal en blanco.',
      de: 'Offizielles Fenriz Gym Kreuzberg T-Shirt aus schwerer 220 g/m² Bio-Baumwolle mit weißem Frontprint.',
      en: 'Official Fenriz Gym Kreuzberg T-Shirt in heavyweight 220 gsm organic cotton with crisp white chest print.',
    },
  },
  {
    id: 'fenriz-hoodie',
    name: 'Fenriz Heavy Hoodie',
    category: { es: 'Fleece 400 g/m² · Blanco / Negro', de: 'Heavy Fleece 400 g/m² · Weiß / Schwarz', en: 'Heavy Fleece 400 gsm · White / Black' },
    price: 69,
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a4e7fa1b70cf7f74c5c497_product-hoodie.webp',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: {
      es: 'Sudadera con capucha de corte relajado berlinés, interior cepillado ultra cálido y logotipo Fenriz bordado.',
      de: 'Relaxed-Fit Hoodie mit weich angerauter Innenseite und hochwertigem Fenriz-Logo-Print.',
      en: 'Relaxed Berlin-fit hoodie with brushed fleece interior and high-density Fenriz logo print.',
    },
  },
  {
    id: 'organic-dad-hat',
    name: 'Fenriz Organic Dad Hat',
    category: { es: 'Gorra Bordada · Talla Única', de: 'Bestickte Cap · One Size', en: 'Embroidered Cap · One Size' },
    price: 29,
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65a4e84a88420b743eb41b5d_product-hat.webp',
    sizes: ['ONE SIZE'],
    desc: {
      es: 'Gorra de 6 paneles en sarga de algodón orgánico con cierre metálico ajustable y bordado frontal Fenriz.',
      de: '6-Panel Dad Hat aus Bio-Baumwolltwill mit verstellbarem Metallverschluss und Front-Stickerei.',
      en: '6-panel organic cotton twill dad hat with adjustable metal strap and 3D front embroidery.',
    },
  },
  {
    id: 'duffle-gearbag',
    name: 'Fenriz Pro Gearbag 65L',
    category: { es: 'Bolsa de Entrenamiento & Mochila', de: 'Trainingstasche & Rucksack 65L', en: 'Convertible Gym Duffle 65L' },
    price: 79,
    img: 'https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b2731f2fd03ce5743faff7_product-gearbag.webp',
    sizes: ['65 LITROS'],
    desc: {
      es: 'Diseñada para guantes, espinilleras y kimono. Compartimento ventilado separado para ropa húmeda y correas de mochila.',
      de: 'Platz für Boxhandschuhe, Schienbeinschoner und Gi. Mit belüftetem Nassfach und verstaubaren Rucksackträgern.',
      en: 'Built to fit gloves, shin guards and Gi with a ventilated wet compartment and convertible backpack straps.',
    },
  },
];

export const WEEKLY_SCHEDULE: Record<string, ScheduleSlot[]> = {
  'MO': [
    { time: '07:30', courseId: 'bjj', title: 'BJJ Gi Morning', level: 'All Levels', duration: '75m', coach: 'Phillip' },
    { time: '12:00', courseId: 'muay-thai', title: 'Muay Thai Lunch', level: 'All Levels', duration: '60m', coach: 'Jens' },
    { time: '17:00', courseId: 'mma', title: 'MMA Basics', level: 'Beginner', duration: '75m', coach: 'Lars' },
    { time: '18:30', courseId: 'muay-thai', title: 'Muay Thai Technique', level: 'All Levels', duration: '75m', coach: 'Robin' },
    { time: '19:45', courseId: 'bjj', title: 'No-Gi Grappling', level: 'Advanced', duration: '90m', coach: 'Ulf' },
    { time: '20:00', courseId: 'boxen', title: 'Boxen Classic', level: 'All Levels', duration: '75m', coach: 'Luciano' },
  ],
  'DI': [
    { time: '08:00', courseId: 'fitness', title: 'Fighter Conditioning', level: 'All Levels', duration: '60m', coach: 'Henning' },
    { time: '12:00', courseId: 'bjj', title: 'No-Gi Lunch Roll', level: 'All Levels', duration: '60m', coach: 'Lars' },
    { time: '17:30', courseId: 'boxen', title: 'Boxing Fundamentals', level: 'Beginner', duration: '60m', coach: 'Andrii' },
    { time: '18:30', courseId: 'mma', title: 'MMA Wall & Wrestling', level: 'Advanced', duration: '90m', coach: 'Stanislav' },
    { time: '19:30', courseId: 'muay-thai', title: 'Muay Thai Pads & Clinch', level: 'All Levels', duration: '75m', coach: 'Niya' },
    { time: '20:15', courseId: 'recovery', title: 'Yoga for Fighters', level: 'All Levels', duration: '60m', coach: 'Laila' },
  ],
  'MI': [
    { time: '07:30', courseId: 'muay-thai', title: 'Early Bird Muay Thai', level: 'All Levels', duration: '60m', coach: 'Jens' },
    { time: '12:00', courseId: 'mma', title: 'MMA Striking', level: 'All Levels', duration: '60m', coach: 'Jesse-Björn' },
    { time: '17:00', courseId: 'bjj', title: 'BJJ Fundamentals', level: 'Beginner', duration: '75m', coach: 'Charlize' },
    { time: '18:30', courseId: 'bjj', title: 'BJJ Gi Competition', level: 'Advanced', duration: '90m', coach: 'Phillip' },
    { time: '19:00', courseId: 'fitness', title: 'Kettlebell & Core', level: 'All Levels', duration: '60m', coach: 'Marike' },
    { time: '20:00', courseId: 'muay-thai', title: 'Muay Thai Drills', level: 'All Levels', duration: '75m', coach: 'Robin' },
  ],
  'DO': [
    { time: '08:00', courseId: 'recovery', title: 'Mobility & Breathwork', level: 'All Levels', duration: '60m', coach: 'Sonnhild' },
    { time: '12:00', courseId: 'boxen', title: 'Lunch Boxing Bags', level: 'All Levels', duration: '60m', coach: 'Luciano' },
    { time: '17:30', courseId: 'muay-thai', title: 'Muay Thai Beginners', level: 'Beginner', duration: '75m', coach: 'Niya' },
    { time: '18:45', courseId: 'mma', title: 'MMA Pro Sparring', level: 'Sparring', duration: '90m', coach: 'Lars' },
    { time: '19:30', courseId: 'bjj', title: 'No-Gi Leglocks', level: 'Advanced', duration: '75m', coach: 'Phillip' },
  ],
  'FR': [
    { time: '07:30', courseId: 'bjj', title: 'BJJ Morning Flow', level: 'All Levels', duration: '75m', coach: 'Ulf' },
    { time: '12:00', courseId: 'muay-thai', title: 'Muay Thai Clinch', level: 'All Levels', duration: '60m', coach: 'Robin' },
    { time: '17:00', courseId: 'fitness', title: 'HIIT Combat Circuit', level: 'All Levels', duration: '60m', coach: 'Stella' },
    { time: '18:00', courseId: 'boxen', title: 'Boxing Combinations', level: 'All Levels', duration: '75m', coach: 'Amine' },
    { time: '19:15', courseId: 'mma', title: 'MMA All Levels', level: 'All Levels', duration: '75m', coach: 'Stanislav' },
  ],
  'SA': [
    { time: '10:30', courseId: 'muay-thai', title: 'Muay Thai Weekend', level: 'All Levels', duration: '75m', coach: 'Niya' },
    { time: '12:00', courseId: 'bjj', title: 'BJJ Gi All Levels', level: 'All Levels', duration: '90m', coach: 'Phillip' },
    { time: '14:00', courseId: 'boxen', title: 'Boxsparring with Luciano', level: 'Sparring', duration: '90m', coach: 'Luciano' },
    { time: '15:00', courseId: 'recovery', title: 'Yin Yoga & Fascia', level: 'All Levels', duration: '60m', coach: 'Laila' },
  ],
  'SO': [
    { time: '11:00', courseId: 'mma', title: 'Intro to Combat (Probetraining)', level: 'Beginner', duration: '60m', coach: 'Lars' },
    { time: '12:00', courseId: 'muay-thai', title: 'Kardia Muay Thai Sparring', level: 'Sparring', duration: '90m', coach: 'Robin' },
    { time: '13:30', courseId: 'bjj', title: 'Gracie Academy Open Mat', level: 'All Levels', duration: '90m', coach: 'Ulf' },
    { time: '15:30', courseId: 'recovery', title: 'Sunday Restore Yoga', level: 'All Levels', duration: '60m', coach: 'Michelle' },
  ],
};

export const UI_COPY = {
  es: {
    navCourses: 'Cursos',
    navEvents: 'Eventos',
    navPrices: 'Precios',
    navSchedule: 'Horario',
    navAbout: 'Sobre nosotros',
    navMembers: 'Miembros',
    navShop: 'Tienda',
    navHelp: 'Ayuda',
    navTrial: 'Clase de prueba',
    heroSubtitle:
      'Ven a entrenar con nosotros en el corazón de Berlín. Te espera una comunidad increíble con entrenadores experimentados. Juntos sacaremos lo mejor de ti.',
    heroCta: 'descubrir cursos ahora',
    coursesHeading: 'NUESTROS CURSOS',
    coursesIntro1:
      'En más de 1.500 m² te ofrecemos un amplio espectro de deportes de combate, fitness y recuperación. Tú decides si prefieres Mixed Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, Boxeo o Lucha: en Fenriz Gym encontrarás todo lo que un artista marcial puede desear. Tanto si vienes a tu primera clase de prueba como si eres un competidor ambicioso, tenemos el curso adecuado para ti.',
    coursesIntro2:
      'Para tu recuperación activa, también puedes asistir a nuestras clases de Yoga o reservar un masaje deportivo.',
    learnMore: 'Más información',
    trialHeading: 'clase de prueba',
    trialText1:
      '¿Quieres conocer Fenriz Gym y nuestro entrenamiento? Con nosotros puedes concertar una clase de prueba gratuita o reservar directamente uno de nuestros cursos regulares de introducción para diferentes artes marciales.',
    trialText2:
      'En la sección de clase de prueba descubrirás cómo funciona todo y qué disciplina se adapta mejor a ti.',
    trialCta: 'Reservar Clase de Prueba',
    aboutHeading: 'sobre nosotros',
    aboutText1:
      'Nos fundamos en el año 2010 y desde entonces nuestro hogar está en Moritzplatz (Kreuzberg). Comenzamos originalmente como un gimnasio puro de MMA, pero con el tiempo nos hemos convertido en un centro de referencia para múltiples deportes de combate con foco en MMA, BJJ y Muay Thai.',
    aboutText2:
      'Siete días a la semana, nuestro equipo y comunidad ofrecen más de 140 clases semanales. Nuestra zona de fitness y las amplias áreas de tatami también permiten el entrenamiento libre de fuerza, técnica o sesiones de sparring con amigos.',
    aboutCta: 'Conocer el Equipo',
    partnersHeading: 'Nuestros Partners Oficiales',
    scheduleHeading: 'horario y tarifas',
    eventsHeading: 'events',
    eventsIntro:
      'Seminarios con luchadores locales e internacionales o torneos en todas las disciplinas forman parte regular de nuestro programa.',
    allEventsCta: 'Todos los Eventos',
    contactHeading: 'faq & contact',
    contactText1: '¿Tienes preguntas sobre el gimnasio, los cursos, la clase de prueba o tu membresía?',
    contactText2: 'Visita nuestro Centro de Ayuda, consulta las preguntas frecuentes (FAQs) o escríbenos directamente.',
    contactText3: 'Si no encuentras la respuesta en el Helpcenter, envíanos un correo electrónico.',
    contactText4: 'Para consultas comerciales y colaboraciones, haz clic en el botón "Colaboraciones". ¡Estaremos encantados de ayudarte!',
    helpCenterBtn: 'Centro de Ayuda (FAQ)',
    emailUsBtn: 'Escríbenos un E-Mail',
    collabBtn: 'Colaboraciones',
    shopHeading: 'shop',
    shopIntro1:
      '¿Te apetece merchandising de Fenriz, Kardia o Gracie? En nuestra tienda online encontrarás camisetas, sudaderas, gorras y bolsas de entrenamiento.',
    shopIntro2:
      '¿Necesitas equipamiento como guantes de boxeo, rashguards o kimonos (Gis)? Los tienes disponibles directamente en recepción con asesoramiento personalizado.',
    orderNow: 'Pedir ahora',
    toShopBtn: 'IR A LA TIENDA',
    footerAddressTitle: 'Dirección',
    footerHoursTitle: 'HORARIO DE APERTURA:*',
    footerMonFri: 'Lun-Vie',
    footerSat: 'Sábado',
    footerSun: 'Domingo',
    footerHolidayNote: '* Ten en cuenta horarios especiales en festivos y eventos',
    footerFollowTitle: 'SÍGUENOS:',
  },
  de: {
    navCourses: 'Kurse',
    navEvents: 'Events',
    navPrices: 'Preise',
    navSchedule: 'Kursplan',
    navAbout: 'Über uns',
    navMembers: 'Mitglieder',
    navShop: 'Shop',
    navHelp: 'Hilfe',
    navTrial: 'Probetraining',
    heroSubtitle:
      'Komm vorbei und trainiere mit uns im Herzen von Berlin. Dich erwartet eine tolle Community mit erfahrenen Trainer:innen. Gemeinsam holen wir das Beste aus dir raus.',
    heroCta: 'jetzt kurse entdecken',
    coursesHeading: 'UNSERE KURSE',
    coursesIntro1:
      'Auf über 1500 m² bieten wir dir ein breites Spektrum an Kampfsport, Fitness und Erholung. Du entscheidest selbst, ob Mixed Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, Boxen oder Ringen – im Fenriz Gym findest du alles, was man sich als Kampfsportler:in nur wünschen kann. Egal, ob für ein erstes Probetraining oder als ambitionierte:r Wettkämpfer:in, wir haben den richtigen Kurs für dich.',
    coursesIntro2:
      'Für deine aktive Erholung kannst du zusätzlich unsere Yoga Kurse besuchen oder dir eine entspannende Massage buchen.',
    learnMore: 'Mehr erfahren',
    trialHeading: 'probetraining',
    trialText1:
      'Du möchtest Fenriz Gym und unser Training kennenlernen? Bei uns kannst du ein kostenloses Probetraining vereinbaren oder direkt einen unserer regelmäßig angebotenen Introduction-Kurse für verschiedene Kampfsportarten buchen.',
    trialText2:
      'Auf der Probetrainings-Seite erfährst du, wie alles funktioniert und was am besten zu dir passt.',
    trialCta: 'Mehr zum Probetraining',
    aboutHeading: 'über uns',
    aboutText1:
      'Wir haben uns im Jahr 2010 gegründet und sind seitdem am Moritzplatz zuhause. Wir begannen ursprünglich als reines MMA-Gym, haben uns jedoch im Laufe der Zeit zu einem Stützpunkt für verschiedene Kampfsportarten mit Fokus auf MMA, BJJ und Muay Thai entwickelt.',
    aboutText2:
      'An sieben Tagen in der Woche sorgen unser Team und Community in über 140 Kursen für eine riesige Auswahl an Aktivitäten. Unser Fitnessbereich und die großen Mattenflächen bieten außerdem Gelegenheit für selbstständiges Kraft- und Techniktraining oder Sparringseinheiten mit Freunden.',
    aboutCta: 'Mehr Erfahren',
    partnersHeading: 'Unsere Partner',
    scheduleHeading: 'kursplan & preise',
    eventsHeading: 'events',
    eventsIntro:
      'Seminare mit lokalen und internationalen Kampfsportler:innen oder Turniere in allen Bereichen, stehen bei uns regelmäßig auf dem Programm.',
    allEventsCta: 'Alle Events',
    contactHeading: 'faq & contact',
    contactText1: 'Du hast Fragen zum Gym, den Kursen, dem Probetraining oder deiner Mitgliedschaft?',
    contactText2: 'Besuche unser Helpcenter, lies dich durch unsere FAQs oder lass dir über unseren Chat weiterhelfen.',
    contactText3: 'Wenn du die Antwort nicht in unserem Helpcenter findest, dann schreibe uns bitte eine E-Mail.',
    contactText4: 'Für geschäftsbezogene Anfragen und Kooperationen klicke bitte auf die Schaltfläche "Kollaborationen" unten. Wir helfen dir gerne!',
    helpCenterBtn: 'Zum Hilfecenter',
    emailUsBtn: 'E-Mail Uns',
    collabBtn: 'Kollaborationen',
    shopHeading: 'shop',
    shopIntro1:
      'Fenriz, Kardia oder Gracie Merch gefällig? In unserem Onlineshop bekommst du T-Shirts, Hoodies, Caps und mehr.',
    shopIntro2:
      'Du brauchst Trainingsausstattung wie Boxhandschuhe, Rashguards oder Gis? Diese bekommst du bei uns vor Ort. Wir beraten dich gern am Tresen.',
    orderNow: 'Jetzt bestellen',
    toShopBtn: 'ZUM SHOP',
    footerAddressTitle: 'Adresse',
    footerHoursTitle: 'ÖFFNUNGSZEITEN:*',
    footerMonFri: 'Mo-Fr',
    footerSat: 'Samstag',
    footerSun: 'Sonntag',
    footerHolidayNote: '* Bitte beachte gesonderte Öffnungszeiten an Feiertagen & Events',
    footerFollowTitle: 'FOLGE UNS:',
  },
  en: {
    navCourses: 'Courses',
    navEvents: 'Events',
    navPrices: 'Pricing',
    navSchedule: 'Schedule',
    navAbout: 'About us',
    navMembers: 'Members',
    navShop: 'Shop',
    navHelp: 'Help',
    navTrial: 'Trial Class',
    heroSubtitle:
      'Come by and train with us in the heart of Berlin. A welcoming community and experienced coaches await you. Together we bring out the best in you.',
    heroCta: 'discover courses now',
    coursesHeading: 'OUR COURSES',
    coursesIntro1:
      'Across more than 1,500 m² we offer a wide spectrum of combat sports, fitness and recovery. Whether Mixed Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, Boxing or Wrestling – at Fenriz Gym you will find everything a martial artist could wish for, from your first trial class to pro fight preparation.',
    coursesIntro2:
      'For active recovery, you can also attend our daily Yoga classes or book a relaxing sports massage.',
    learnMore: 'Learn more',
    trialHeading: 'trial training',
    trialText1:
      'Want to get to know Fenriz Gym and our training? Book a free trial session or join one of our regular Introduction Courses for various martial arts.',
    trialText2:
      'Find out how everything works and which discipline suits you best.',
    trialCta: 'Book Trial Session',
    aboutHeading: 'about us',
    aboutText1:
      'Founded in 2010, we have called Moritzplatz in Berlin-Kreuzberg home ever since. Originally started as a pure MMA gym, we have grown into a premier hub for martial arts focusing on MMA, BJJ and Muay Thai.',
    aboutText2:
      'Seven days a week, our team and community deliver over 140 classes. Our strength area and expansive mat spaces also offer plenty of room for independent training or sparring with friends.',
    aboutCta: 'Meet the Team',
    partnersHeading: 'Our Partners',
    scheduleHeading: 'schedule & pricing',
    eventsHeading: 'events',
    eventsIntro:
      'Seminars with local and international fighters as well as in-house tournaments across all disciplines are a regular part of our program.',
    allEventsCta: 'All Events',
    contactHeading: 'faq & contact',
    contactText1: 'Have questions about the gym, classes, trial training or your membership?',
    contactText2: 'Visit our Helpcenter, browse our FAQs or reach out via chat.',
    contactText3: 'If you cannot find your answer in our Helpcenter, please send us an email.',
    contactText4: 'For business inquiries and collaborations, click the "Collaborations" button below. We are happy to help!',
    helpCenterBtn: 'To Helpcenter',
    emailUsBtn: 'Email Us',
    collabBtn: 'Collaborations',
    shopHeading: 'shop',
    shopIntro1:
      'Looking for Fenriz, Kardia or Gracie merch? Get T-shirts, hoodies, caps and gear bags in our shop.',
    shopIntro2:
      'Need training gear like boxing gloves, rashguards or Gis? Pick them up directly at our front desk in Kreuzberg.',
    orderNow: 'Order now',
    toShopBtn: 'VISIT SHOP',
    footerAddressTitle: 'Address',
    footerHoursTitle: 'OPENING HOURS:*',
    footerMonFri: 'Mon-Fri',
    footerSat: 'Saturday',
    footerSun: 'Sunday',
    footerHolidayNote: '* Please note special hours on public holidays & events',
    footerFollowTitle: 'FOLLOW US:',
  },
};
