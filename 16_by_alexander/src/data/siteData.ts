export interface EditorialStory {
  id: string;
  slug: string;
  cycle?: string;
  category: string;
  title: string;
  deck: string;
  credits: {
    col3: string[];
    col4: string[];
    col5: string[];
    col6: string[];
  };
  images: string[];
  heroAspect?: 'three-col' | 'full-bleed';
  stageVideo?: string;
  stagePoster?: string;
  pullQuote: string;
  interview: {
    speaker?: string;
    text: string;
  }[];
}

export interface VinylTrack {
  number: number;
  title: string;
  duration: string;
  bpm: number;
  rootFreq: number;
}

export interface StoreProduct {
  id: string;
  slug: string;
  category: string;
  price: number;
  priceFormatted: string;
  title: string;
  subtitle?: string;
  image: string;
  gallery?: string[];
  inStock: boolean;
  featuredOnHome?: boolean;
  isMagazine?: boolean;
  isVinyl?: boolean;
  magazineCredits?: {
    edition: string;
    availableAt: string[];
    featuring: string;
    photographyBy: string;
    workFrom: string;
  };
  tracks?: VinylTrack[];
  details: string;
  shipping: string;
  weightAndSize: string;
}

export interface CameraStream {
  id: number;
  label: string;
  location: string;
  videoUrl: string;
  posterUrl: string;
  status: string;
}

export interface PlaylistTrack {
  id: number;
  title: string;
  artist: string;
  duration: string;
  explicit?: boolean;
  freq: number;
}

export const CAMERA_STREAMS: CameraStream[] = [
  {
    id: 1,
    label: '1',
    location: 'CAM 01 · MAIN STAGE — 66 GREENE ST SOHO NY',
    videoUrl: '/assets/cam_1.mp4',
    posterUrl: '/assets/cam_1.jpeg',
    status: 'LIVE · 1080P 60FPS',
  },
  {
    id: 2,
    label: '2',
    location: 'CAM 02 · GALLERY FLOOR & PRINT ARCHIVE',
    videoUrl: '/assets/cam_2.mp4',
    posterUrl: '/assets/cam_2.jpeg',
    status: 'LIVE · IR MONOCHROME',
  },
  {
    id: 3,
    label: '3',
    location: 'CAM 03 · SOUND ROOM & VINYL BOOTH',
    videoUrl: '/assets/cam_3.mp4',
    posterUrl: '/assets/cam_3.jpeg',
    status: 'LIVE · BOOTH FEED',
  },
  {
    id: 4,
    label: '4',
    location: 'CAM 04 · GREENE STREET STOREFRONT',
    videoUrl: '/assets/cam_4.mp4',
    posterUrl: '/assets/cam_4.jpeg',
    status: 'LIVE · EXTERIOR',
  },
];

export const SPOTIFY_PLAYLIST: PlaylistTrack[] = [
  { id: 1, title: 'TRUMPETS', artist: '_BY.ALEXANDER', duration: '03:18', freq: 110 },
  { id: 2, title: 'Consumer', artist: 'Blackhaine', duration: '04:02', explicit: true, freq: 98 },
  { id: 3, title: '+Star101', artist: 'Venna', duration: '03:44', explicit: true, freq: 130.8 },
  { id: 4, title: 'Relax Baby Be Cool', artist: 'Stereo Total', duration: '02:56', freq: 146.8 },
  { id: 5, title: '000 Channel Black', artist: '_BY.ALEXANDER', duration: '03:51', freq: 123.5 },
  { id: 6, title: 'Encore (Live at 66 Greene)', artist: 'Chi', duration: '03:29', freq: 164.8 },
];

export const CHANNEL_BLACK_TRACKS: VinylTrack[] = [
  { number: 1, title: 'LE MERVEILLEUX RÉSUMÉ', duration: '02:48', bpm: 92, rootFreq: 110 },
  { number: 2, title: 'TRUMPETS', duration: '03:18', bpm: 118, rootFreq: 123.47 },
  { number: 3, title: 'ST. REGIS (FEAT. 070 SHAKE)', duration: '03:54', bpm: 104, rootFreq: 130.81 },
  { number: 4, title: 'NO EGO', duration: '02:39', bpm: 126, rootFreq: 146.83 },
  { number: 5, title: 'SNOW ON THE BLUFF', duration: '03:12', bpm: 88, rootFreq: 98.0 },
  { number: 6, title: 'L’INCONNU', duration: '02:15', bpm: 96, rootFreq: 164.81 },
  { number: 7, title: 'OUT OF CONVENIENCE', duration: '03:41', bpm: 112, rootFreq: 116.54 },
  { number: 8, title: 'A.I.', duration: '03:06', bpm: 132, rootFreq: 138.59 },
  { number: 9, title: 'HOLD UP WAIT A MINUTE', duration: '02:58', bpm: 120, rootFreq: 155.56 },
  { number: 10, title: 'UNSTATED INTERLUDE', duration: '01:52', bpm: 84, rootFreq: 103.83 },
  { number: 11, title: 'THE MONSTER & THE MUSE (FEAT. IRINA SHAYK)', duration: '04:26', bpm: 108, rootFreq: 110.0 },
];

export const EDITORIAL_STORIES: EditorialStory[] = [
  {
    id: 'chi-encore',
    slug: 'chi-is-ready-for-her-encore',
    cycle: 'CYCLE 07',
    category: 'PROFILE STORY',
    title: 'CHI IS READY FOR HER ENCORE',
    deck: 'THE ARTIST STEPS INTO A CHAPTER OF HER CAREER THAT’S NAVIGATED ON HER OWN TERMS.',
    credits: {
      col3: ['TEXT BY KAYLA CURTIS-EVANS', 'PHOTOGRAPHY BY FERNANDO TOMAZ'],
      col4: ['STYLING BY RACHEL POLYCARPE', 'STYLING ASSISTANT: HANNAH RUBIN'],
      col5: ['MAKEUP BY MARLA V', 'HAIR BY NATE B'],
      col6: ['LIGHTING DIRECTOR: CONNOR', 'PRODUCTION BY 66 GREENE'],
    },
    images: ['/assets/chi_1.png', '/assets/chi_2.jpg', '/assets/chi_3.jpg'],
    heroAspect: 'three-col',
    stageVideo: '/assets/cam_3.mp4',
    stagePoster: '/assets/cam_3.jpeg',
    pullQuote: '“I STOPPED WAITING FOR THE ROOM TO VALIDATE THE SOUND. WHEN WE STEPPED INTO 66 GREENE, THE STAGE ALREADY KNEW WHAT IT WANTED TO BE.”',
    interview: [
      {
        text: 'Inside the cast-iron acoustics of 66 Greene Street, Chi tests the low end of a custom monitor mix before doors open to lower Manhattan. After a whirlwind year of major-label expectations and viral detours, the singer and multi-instrumentalist is stripping her process down to raw tape, live brass, and unscripted intimacy.',
      },
      {
        speaker: 'KAYLA CURTIS-EVANS',
        text: 'You’ve called this new cycle an “encore,” even though for many listeners it feels like a debut statement. Why frame it that way?',
      },
      {
        speaker: 'CHI',
        text: 'Because the first act happened in private—and partially inside someone else’s blueprint. An encore is what happens after the polite applause ends and only the people who really came to feel something stay in the room. That’s where my real voice begins.',
      },
      {
        speaker: 'KAYLA CURTIS-EVANS',
        text: 'How did performing the new material live at 66 Greene change the arrangements?',
      },
      {
        speaker: 'CHI',
        text: 'In a studio you can hide behind forty vocal stacks. At 66 Greene, the audience is three feet from the mic stand and the cameras are rolling in black and white. If a lyric doesn’t carry weight, you feel it immediately in your chest.',
      },
    ],
  },
  {
    id: 'audrey-nuna',
    slug: 'audrey-nuna-is-rawdogging-life',
    cycle: 'CYCLE 08',
    category: 'PROFILE STORY',
    title: 'AUDREY NUNA IS RAWDOGGING LIFE',
    deck: 'AUDREY NUNA IS REBUILDING FROM THE CRATER SHE MADE. SHE’S HAD AN UNBELIEVABLE 2026, AND INSTEAD OF THERE BEING NOWHERE TO GO BUT UP, SHE’S PLOTTING HOW TO CRASH-LAND BACK INTO HERSELF.',
    credits: {
      col3: ['TEXT BY DEVON IVIE', 'PHOTOGRAPHY BY TAREK MAHAD'],
      col4: ['CREATIVE DIRECTION BY ALEXANDER', 'STYLING BY SERGIO ESTRADA'],
      col5: ['HAIR BY DAVEY MATTHEW', 'MAKEUP BY MOLLIE GLOSS'],
      col6: ['SET DESIGN BY UNSTATED', 'SHOT AT 66 GREENE ST SOHO'],
    },
    images: ['/assets/audrey_1.png', '/assets/audrey_2.jpg', '/assets/audrey_3.jpg'],
    heroAspect: 'three-col',
    stageVideo: '/assets/cam_1.mp4',
    stagePoster: '/assets/cam_1.jpeg',
    pullQuote: '“SUCCESS CAN MAKE YOU STERILE IF YOU LET IT. I WANT THE TEXTURE, THE CONCRETE, THE MISTAKES LEFT IN THE FINAL MASTER.”',
    interview: [
      {
        text: 'Audrey Nuna arrives at 66 Greene wearing an oversized leather trench coat and zero interest in small talk. Fresh off global festival stages and cinematic voice roles, she is deliberately steering away from polished pop predictability.',
      },
      {
        speaker: 'DEVON IVIE',
        text: 'You mentioned wanting to “crash-land back into yourself” this year. What does that look like day to day in New York?',
      },
      {
        speaker: 'AUDREY NUNA',
        text: 'It means no buffer between the thought and the output. No twenty-person committee deciding whether a synth bass is too abrasive. When you strip away all the gloss, you find out if the song actually bleeds.',
      },
    ],
  },
  {
    id: 'shemar-pierre',
    slug: 'shemar-pierre-is-built-different',
    cycle: 'CYCLE 06',
    category: 'PROFILE STORY',
    title: 'SHEMAR PIERRE IS BUILT DIFFERENT',
    deck: 'FOR SHEMAR PIERRE, MAKING MUSIC IS LESS ABOUT FITTING INTO A GENRE THAN BUILDING A WORLD ENTIRELY OF HIS OWN.',
    credits: {
      col3: ['TEXT BY IAN MCRAE', 'PHOTOGRAPHY BY JAMES BEE'],
      col4: ['STYLING BY CASSIE JEKANOSKI', 'PRODUCTION BY 66 GREENE'],
      col5: ['GROOMING BY ASHLEY YSABELLE', 'LIGHTING BY MAX HEILBRONN'],
      col6: ['SOUND BY 000 CHANNEL', 'ARCHIVE 2026'],
    },
    images: ['/assets/shemar_1.png', '/assets/shemar_2.jpg', '/assets/shemar_3.jpg'],
    heroAspect: 'three-col',
    pullQuote: '“GENRE IS AN ALGORITHM PROBLEM, NOT A HUMAN PROBLEM. WE BUILD WORLDS FIRST AND LET THE LABELS CATCH UP LATER.”',
    interview: [
      {
        text: 'Across three hours in the SoHo listening room, Shemar Pierre plays unreleased demos straight from an weathered field recorder, layering distorted 808s over chamber strings.',
      },
      {
        speaker: 'IAN MCRAE',
        text: 'Your visual language is as disciplined as your drum programming. Do they start at the same time?',
      },
      {
        speaker: 'SHEMAR PIERRE',
        text: 'Always. Before I write a hook, I know the lighting temperature, the grain of the coat, and the exact room it belongs in.',
      },
    ],
  },
  {
    id: 'turns-one',
    slug: '66-greene-turns-one',
    category: 'PROFILE STORY',
    title: '66 GREENE TURNS ONE',
    deck: 'ONE YEAR AFTER OPENING ITS DOORS IN SOHO, 66 GREENE CELEBRATED ITS FIRST ANNIVERSARY DURING NEW YORK FASHION WEEK WITH THE LAUNCH OF ITS DEBUT PRINT ISSUE, A NEW FRAGRANCE, AND A PACKED NIGHT OF COLLABORATORS, CREATIVES, AND FRIENDS.',
    credits: {
      col3: ['PHOTOGRAPHY BY MARC MERCHANT', 'PHOTOGRAPHY BY PHI VU'],
      col4: ['CURATION BY ALEXANDER', 'SOUND BY TOCCORORO & SUNSHINE BENZI'],
      col5: ['PRINT LAUNCH: ISSUE 01', 'LOCATION: 66 GREENE ST SOHO'],
      col6: ['NEW YORK FASHION WEEK', 'SEPTEMBER ARCHIVE'],
    },
    images: ['/assets/turns_one_1.jpg', '/assets/turns_one_2.jpg', '/assets/turns_one_3.jpg'],
    heroAspect: 'three-col',
    stageVideo: '/assets/cam_2.mp4',
    stagePoster: '/assets/cam_2.jpeg',
    pullQuote: '“WHAT BEGAN AS A SPACE BECAME A WORLD OF ITS OWN—PART PUBLICATION, PART RETAIL SPACE, AND PART LATE-NIGHT CONVERGENCE POINT.”',
    interview: [
      {
        text: 'One year after opening its doors in SoHo, 66 Greene celebrated its first anniversary during New York Fashion Week with the launch of its debut annual print issue, a bespoke fragrance experiment, and a packed room of downtown New York’s defining voices.',
      },
      {
        text: 'Photographers, stylists, musicians, models, filmmakers, and editors spilled from the cast-iron storefront onto Greene Street, proving that when URL and IRL are treated as a single continuous medium, community forms without friction.',
      },
    ],
  },
  {
    id: 'ayra-starr',
    slug: 'the-city-has-a-new-starr',
    cycle: 'CYCLE 05',
    category: 'PROFILE STORY',
    title: 'THE CITY HAS A NEW STARR',
    deck: 'AYRA STARR IS LEARNING WHAT IT MEANS TO MOVE THROUGH THE WORLD ON HER OWN TERMS. AS SHE ENTERS A NEW ERA OF INDEPENDENCE, SELF-DISCOVERY, AND STARRGIRL, THE GLOBAL SUPERSTAR IS FINALLY LEARNING TO HEAR HER OWN VOICE.',
    credits: {
      col3: ['TEXT BY SHARIFA MORRIS', 'PHOTOGRAPHY BY RUBEN CHAMORRO'],
      col4: ['STYLING BY JENNI IVA WIMMERSTEDT', 'MAKEUP BY CHIKA NISHIYAMA'],
      col5: ['HAIR BY ROBERTO CAMPISI', 'PRODUCED AT 66 GREENE'],
      col6: ['COVER ARCHIVE', 'ISSUE 01 FEATURE'],
    },
    images: ['/assets/ayra_1.jpg', '/assets/ayra_2.jpg', '/assets/ayra_3.jpg'],
    heroAspect: 'three-col',
    pullQuote: '“NEW YORK MOVES AT THE SAME FREQUENCY I DO. NOBODY APOLOGIZES FOR TAKING UP SPACE HERE.”',
    interview: [
      {
        text: 'Captured for one of the three inaugural covers of 66 Greene Annual Print Magazine, Ayra Starr reflects on relocating her creative center of gravity and commanding global stages without losing her edge.',
      },
    ],
  },
  {
    id: 'tinashe-popstar',
    slug: 'the-anatomy-of-a-popstar',
    cycle: 'CYCLE 04',
    category: 'PROFILE STORY',
    title: 'THE ANATOMY OF A POPSTAR',
    deck: 'TINASHE HAS NEVER NEEDED PERMISSION TO REINVENT HERSELF. SHE TURNS THE IDEA OF THE POP STAR INSIDE OUT WHILE FULLY CLAIMING IT ON HER OWN TERMS.',
    credits: {
      col3: ['TEXT BY CADEN SWIFT', 'PHOTOGRAPHY BY CODY LIDTKE'],
      col4: ['CREATIVE DIRECTION BY ALEXANDER', 'STYLING BY WILLYUM BECK'],
      col5: ['HAIR BY CASS LEE', 'MAKEUP BY MOLLIE GLOSS'],
      col6: ['INAUGURAL PRINT COVER', '66 GREENE ST SOHO'],
    },
    images: ['/assets/tinashe_ed_1.png', '/assets/tinashe_ed_2.jpg', '/assets/tinashe_ed_3.jpg'],
    heroAspect: 'three-col',
    pullQuote: '“INDEPENDENCE ISN’T AN AESTHETIC CHOICE—IT’S OWNING THE MASTER, THE FRAME, AND THE TIMELINE.”',
    interview: [
      {
        text: 'Over a decade into a boundary-pushing discography, Tinashe sits down at 66 Greene to dissect autonomy, choreography as architecture, and why her most experimental work is also her most resonant.',
      },
    ],
  },
  {
    id: 'love-spells',
    slug: 'love-spells-no-mystery',
    cycle: 'CYCLE 03',
    category: 'PROFILE STORY',
    title: 'LOVE SPELLS IN WIDE SCREEN',
    deck: 'LOVE SPELLS MAY BE KNOWN FOR HIS DREAMY, EMOTIONALLY CHARGED MUSIC, BUT BEHIND THE CINEMATIC VISUALS IS AN ARTIST WITH LITTLE INTEREST IN MYSTERY FOR MYSTERY’S SAKE.',
    credits: {
      col3: ['TEXT BY MAX WEINSTEIN', 'PHOTOGRAPHY BY DIEGO BENDEZU'],
      col4: ['STYLING BY DAX REEDY', 'LIGHTING BY ARTURO ALCALA'],
      col5: ['SOUND RECORDING: 66 GREENE', 'SOHO NY'],
      col6: ['CYCLE 03 ARCHIVE', 'BY.ALEXANDER'],
    },
    images: ['/assets/lovespells_1.jpg', '/assets/lovespells_2.jpg', '/assets/lovespells_3.jpg'],
    heroAspect: 'three-col',
    pullQuote: '“I WANT THE SONGS TO FEEL LIKE WALKING OUT OF A SUBWAY STATION AT 4 A.M. INTO RAIN.”',
    interview: [
      {
        text: 'Between late-night soundcheck and an intimate set at 66 Greene, Love Spells breaks down how tactile analog guitars and unvarnished storytelling anchor his sound.',
      },
    ],
  },
  {
    id: 'aerosol-couture',
    slug: 'aerosol-couture',
    category: 'FEATURE STORY',
    cycle: 'PROFILE STORY',
    title: 'AEROSOL COUTURE',
    deck: 'SFX ARTIST MAB TURNS HUMAN ANATOMY INTO LIVING ARTISTRY.',
    credits: {
      col3: ['TEXT BY INTERNET X', 'PHOTOGRAPHY BY ALEXIS BELHUMEUR'],
      col4: ['PROSTHETICS & AIRBRUSH BY MAB', 'CREATIVE DIRECTION BY ALEXANDER'],
      col5: ['LIGHTING BY CALIXTE LENKA', 'STUDIO: 66 GREENE SOHO'],
      col6: ['ISSUE 01 ARCHIVE', 'SPECIAL FEATURE'],
    },
    images: ['/assets/aerosol_hero.jpg', '/assets/turns_one_4.jpg', '/assets/turns_one_5.jpg'],
    heroAspect: 'full-bleed',
    pullQuote: '“SKIN IS ONLY THE FIRST LAYER. WITH AIR, PIGMENT, AND SILICONE, ANATOMY BECOMES SCULPTURE.”',
    interview: [
      {
        text: 'Working at the intersection of prosthetic special effects, avant-garde runway couture, and airbrushed body sculpture, SFX artist MAB transforms the human silhouette into a living canvas inside 66 Greene.',
      },
    ],
  },
];

const MAGAZINE_SHARED_CREDITS = {
  edition: 'INAUGURAL EDITION OF 66 GREENE ANUAL PRINT MAGAZINE',
  availableAt: [
    '66 GREENE STREET SOHO',
    'ICONIC MAGAZINES MULBERRY STREET',
    'ICONIC MAGAZINES LAFAYETTE STREET',
    'CASA MAGAZINES',
  ],
  featuring:
    'AMELIA GRAY, AYRA STARR, BENNETT COAST, CHOKER, CHXRRY, DET BLEV SENT, EKKSTACY, GABRIEL JACOBY, HAWA, LOVE SPELLS, MAB, MIDRIFT, PARRIS GOEBEL, RAGA MALAK, SADBOI, SALIMATA, SUNSHINE BENZI, THELONIOUS STOKES, TINASHE, TOCCORORO, WILLY CHAVARRIA, ZEP',
  photographyBy:
    'AARON KIRK, AJ KYSER, ALEXIS BELHUMEUR, ARTURO ALCALA, CALIXTE LENKA, CODY LIDTKE, DIEGO BENDEZU, FERNANDO TOMAZ, JAMES BEE, JOAQUIN CASTILLO, MARC MERCHANT, MAX HEILBRONN, PHI VU, RUBEN CHAMORRO, TAREK MAHAD',
  workFrom:
    'CADEN SWIFT, CASSIE JEKANOSKI, DAX REEDY, IAN MCRAE, INTERNET X, JAHULIE, MAX WEINSTEIN, RANXELLE SORIA, SHARIFA MORRIS, VVUTURA, WILLYUM BECK, ASHLEY YSABELLE, CASS LEE, MOLLIE GLOSS, CHIKA NISHIYAMA, DAVEY MATTHEW, JENNI IVA WIMMERSTEDT, RACHEL POLYCARPE, ROBERTO CAMPISI, SERGIO ESTRADA, TAKAYUKI',
};

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 'mag-alex',
    slug: '66-greene-magazine-alex',
    category: 'MAGAZINE',
    price: 38,
    priceFormatted: '38.00 USD',
    title: '66 GREENE MAGAZINE - ALEX',
    image: '/assets/store_mag_alex.jpg',
    inStock: false,
    isMagazine: true,
    magazineCredits: MAGAZINE_SHARED_CREDITS,
    details: '340-page heavyweight archival uncoated & gloss mixed-stock annual print publication. Cover 01 of 03 featuring Alexander.',
    shipping: 'Ships worldwide from 66 Greene St SoHo, New York within 3–5 business days in custom reinforced board packaging.',
    weightAndSize: '240mm × 320mm · 1.65 kg (3.6 lbs) · Smyth-sewn lay-flat binding.',
  },
  {
    id: 'mag-ayra',
    slug: '66-greene-magazine-ayra',
    category: 'MAGAZINE',
    price: 38,
    priceFormatted: '38.00 USD',
    title: '66 GREENE MAGAZINE - AYRA',
    image: '/assets/store_mag_ayra.jpg',
    inStock: false,
    isMagazine: true,
    magazineCredits: MAGAZINE_SHARED_CREDITS,
    details: '340-page heavyweight archival uncoated & gloss mixed-stock annual print publication. Cover 02 of 03 featuring Ayra Starr.',
    shipping: 'Ships worldwide from 66 Greene St SoHo, New York within 3–5 business days in custom reinforced board packaging.',
    weightAndSize: '240mm × 320mm · 1.65 kg (3.6 lbs) · Smyth-sewn lay-flat binding.',
  },
  {
    id: 'mag-tinashe',
    slug: '66-greene-magazine-tinashe',
    category: 'MAGAZINE',
    price: 38,
    priceFormatted: '38.00 USD',
    title: '66 GREENE MAGAZINE - TINASHE',
    image: '/assets/store_mag_tinashe.jpg',
    inStock: false,
    featuredOnHome: true,
    isMagazine: true,
    magazineCredits: MAGAZINE_SHARED_CREDITS,
    details: '340-page heavyweight archival uncoated & gloss mixed-stock annual print publication. Cover 03 of 03 featuring Tinashe.',
    shipping: 'Ships worldwide from 66 Greene St SoHo, New York within 3–5 business days in custom reinforced board packaging.',
    weightAndSize: '240mm × 320mm · 1.65 kg (3.6 lbs) · Smyth-sewn lay-flat binding.',
  },
  {
    id: 'vinyl-channel-black',
    slug: '000-channel-black',
    category: 'VINYL RECORD',
    price: 15,
    priceFormatted: '15.00 USD',
    title: '000 CHANNEL BLACK',
    subtitle: 'BY.ALEXANDER',
    image: '/assets/store_vinyl_channel_black.jpg',
    inStock: true,
    featuredOnHome: true,
    isVinyl: true,
    tracks: CHANNEL_BLACK_TRACKS,
    details: '180g heavyweight black vinyl LP pressed at 33 1/3 RPM. Includes anti-static Japanese inner sleeve and insert recorded & mixed between 66 Greene St SoHo and Paris.',
    shipping: 'Immediate dispatch from 66 Greene St SoHo NY. Packed in whiplash-proof LP mailers with corner protection.',
    weightAndSize: '12" LP (315mm × 315mm) · 180g Audiophile Pressing · Total runtime 34:09.',
  },
  {
    id: 'vinyl-memories-4-sale',
    slug: 'vinyl-record-memories-4-sale-at-66-greene-st-soho-ny',
    category: 'VINYL RECORD',
    price: 20,
    priceFormatted: '20.00 USD',
    title: 'MEMORIES 4 SALE AT 66 GREENE ST SOHO NY',
    subtitle: 'BY.ALEXANDER',
    image: '/assets/store_vinyl_memories.png',
    inStock: true,
    isVinyl: true,
    tracks: CHANNEL_BLACK_TRACKS.slice(0, 8),
    details: 'Limited pressing capturing the live sonic installations and collaborative sessions from the Memories 4 Sale exhibition at 66 Greene.',
    shipping: 'Immediate dispatch from 66 Greene St SoHo NY. Worldwide tracked courier.',
    weightAndSize: '12" Gatefold LP · 180g Clear Smoke Vinyl · Numbered edition of 500.',
  },
  {
    id: 'book-manifesto-large',
    slug: 'manifesto',
    category: 'BOOK',
    price: 110,
    priceFormatted: '110.00 USD',
    title: 'MANIFESTO BY ALEXANDER LARGE BOOK',
    image: '/assets/store_book_large.png',
    inStock: true,
    details: 'Hardcover linen-bound monograph documenting the architectural, sartorial, and sonic foundation of _BY.ALEXANDER and 66 Greene.',
    shipping: 'Ships worldwide in custom foam-lined archival box within 2–4 business days.',
    weightAndSize: '290mm × 370mm · 412 pages · 2.9 kg · Foil-stamped cloth hardcover.',
  },
  {
    id: 'book-manifesto-small',
    slug: 'memories-4-sale-book',
    category: 'BOOK',
    price: 55,
    priceFormatted: '55.00 USD',
    title: 'MANIFESTO BY ALEXANDER SMALL BOOK',
    image: '/assets/store_book_small.png',
    inStock: true,
    details: 'Compact field-edition monograph featuring polaroids, contact sheets, studio notes, and lyrics from 66 Greene St SoHo NY.',
    shipping: 'Ships worldwide within 2–4 business days from New York.',
    weightAndSize: '170mm × 230mm · 256 pages · 0.85 kg · Exposed spine softcover.',
  },
];

// WebAudio atmospheric synthesizer for live preview of vinyl & Spotify tracks
class AlexanderSoundEngine {
  private ctx: AudioContext | null = null;
  private intervalId: number | null = null;
  private isPlaying = false;

  public start(rootFreq = 110) {
    this.stop();
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    const triggerNote = (step: number) => {
      if (!this.ctx || !this.isPlaying) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const sub = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      const ratios = [1, 1.1892, 1.3348, 1.4983, 1.7818];
      const freq = rootFreq * ratios[step % ratios.length];

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      sub.type = 'sine';
      sub.frequency.setValueAtTime(freq * 0.5, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(520 + (step % 3) * 180, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.06, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.65);

      osc.connect(filter);
      sub.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      sub.start(now);
      osc.stop(now + 0.7);
      sub.stop(now + 0.7);
    };

    let step = 0;
    triggerNote(step++);
    this.intervalId = window.setInterval(() => {
      triggerNote(step++);
    }, 520);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

export const soundEngine = new AlexanderSoundEngine();
