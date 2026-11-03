import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Check,
  Phone,
  MessageCircle,
  Wine,
  Compass,
  Camera
} from 'lucide-react';
import {
  ASSETS,
  INSIDE_SPACES,
  RENTAL_FORMATS,
  ADDITIONAL_SERVICES,
  InsideSpace,
  RentalFormat
} from './data';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'CAST' | 'RU'>('EN');
  const [activeGallery, setActiveGallery] = useState<{ space: InsideSpace; index: number } | null>(null);
  const [activeConditions, setActiveConditions] = useState<RentalFormat | null>(null);
  const [bookingModal, setBookingModal] = useState<{ open: boolean; presetFormat?: string }>({ open: false });
  const [serviceSlides, setServiceSlides] = useState<Record<string, number>>({
    gastronomy: 0,
    experiences: 0,
    decor: 0,
  });

  // Booking form state
  const [checkIn, setCheckIn] = useState('2026-06-12');
  const [checkOut, setCheckOut] = useState('2026-06-15');
  const [guests, setGuests] = useState('8 Adults, 2 Children');
  const [selectedFormat, setSelectedFormat] = useState('Masia Rental — Entire House');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestComment, setGuestComment] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Interactive hover image preview on Location section
  const [hoverLocationImg, setHoverLocationImg] = useState<string | null>(null);

  const cycleServiceSlide = (id: string, dir: number, total: number) => {
    setServiceSlides((prev) => ({
      ...prev,
      [id]: (prev[id] + dir + total) % total,
    }));
  };

  const openBooking = (formatTitle?: string) => {
    if (formatTitle) setSelectedFormat(formatTitle);
    setBookingSubmitted(false);
    setBookingModal({ open: true, presetFormat: formatTitle });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#EFE1C8] text-[#443e2b] selection:bg-[#37482f] selection:text-[#f8e8c5]">
      {/* FIXED TOP NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 flex items-center justify-between pointer-events-none">
        {/* Left: Language Selector + Menu Trigger */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setMenuOpen(true)}
            className="h-10 px-4 rounded-full bg-[#37482f]/95 hover:bg-[#293B21] text-[#f8e8c5] flex items-center gap-2.5 text-[11px] font-bold tracking-wider uppercase transition-all shadow-lg backdrop-blur-md cursor-pointer"
          >
            <Menu className="w-3.5 h-3.5 text-[#cfa65a]" />
            <span>Menu</span>
          </button>

          <div className="hidden sm:flex items-center bg-[#37482f]/90 backdrop-blur-md rounded-full p-1 border border-[#f8e8c5]/15">
            {(['EN', 'CAST', 'RU'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase transition-all cursor-pointer ${
                  lang === l
                    ? 'bg-[#cfa65a] text-[#443e2b]'
                    : 'text-[#f8e8c5]/80 hover:text-[#f8e8c5]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Center Crest Logo */}
        <a
          href="#"
          className="pointer-events-auto flex items-center justify-center bg-[#37482f]/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#cfa65a]/30 shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={ASSETS.logoCrest}
            alt="MontRural Crest"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </a>

        {/* Right: Book Now Pill */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <a
            href="#formats"
            className="hidden md:inline-flex items-center h-10 px-4 rounded-full bg-[#f8e8c5]/90 hover:bg-[#f8e8c5] text-[#443e2b] text-[11px] font-bold uppercase tracking-tight transition-all shadow-md"
          >
            Rental Formats
          </a>
          <button
            onClick={() => openBooking('Masia Rental — Entire House')}
            className="h-10 px-5 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-[11px] font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* FULL-SCREEN NAVIGATION DRAWER (#37482f Forest Green) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#37482f] text-[#f8e8c5] flex flex-col justify-between p-6 sm:p-12 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#f8e8c5]/15 pb-6">
            <div className="flex items-center gap-3">
              <img src={ASSETS.logoCrest} alt="MontRural" className="h-8 w-auto" />
              <span className="text-xs uppercase tracking-widest text-[#cfa65a] font-bold">
                Penedès · Catalonia
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="h-11 px-5 rounded-full border border-[#f8e8c5]/25 hover:border-[#cfa65a] text-[#f8e8c5] flex items-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-auto py-8">
            <nav className="lg:col-span-7 flex flex-col gap-3 sm:gap-5">
              {[
                { label: 'About the Masia', href: '#about', num: '01' },
                { label: 'Penedès Location', href: '#location', num: '02' },
                { label: 'What Is Inside', href: '#inside', num: '03' },
                { label: 'Rental Formats', href: '#formats', num: '04' },
                { label: 'Additional Services', href: '#service', num: '05' },
                { label: 'Contacts & Booking', href: '#contact', num: '06' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 text-3xl sm:text-5xl md:text-6xl font-playfair tracking-tight text-[#f8e8c5] hover:text-[#cfa65a] transition-colors"
                >
                  <span className="text-xs font-sans font-bold text-[#cfa65a]/80">
                    ({item.num})
                  </span>
                  <span className="group-hover:italic transition-all">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="lg:col-span-5 flex flex-col justify-between bg-[#293B21] rounded-2xl p-6 sm:p-8 border border-[#f8e8c5]/10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#cfa65a] mb-3">
                  ( Private Concierge )
                </p>
                <h3 className="font-playfair text-2xl sm:text-3xl text-[#f8e8c5] leading-tight mb-4">
                  Vero — Personal Manager & Event Organisator
                </h3>
                <p className="text-sm text-[#f8e8c5]/80 leading-relaxed mb-6">
                  We speak Spanish, English, and Russian. Reach out directly for availability, private chef menus, or bespoke wine retreats in Penedès.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/34631261499"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +34 631 26 14 99</span>
                </a>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full py-3.5 px-5 rounded-full border border-[#f8e8c5]/30 hover:bg-[#f8e8c5] hover:text-[#37482f] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Check Availability Calendar
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#f8e8c5]/15 pt-6 text-xs text-[#f8e8c5]/70">
            <span>10 min from Vilafranca del Penedès · 1 hr from Barcelona</span>
            <span>MontRural © 2026 — Boutique Vacation in Catalonia</span>
          </div>
        </div>
      )}

      {/* =====================================================================
          HERO SECTION (rec2230137531)
      ====================================================================== */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-28 pb-10 px-4 sm:px-10 bg-[#37482f] text-[#f8e8c5]">
        {/* Background Video + Aerial Vineyard Fallback */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroPoster}
            alt="Masia MontRural Aerial Vineyards"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <video
            src={ASSETS.heroVideo}
            poster={ASSETS.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#293B21]/65 via-[#293B21]/35 to-[#293B21]/85" />
        </div>

        {/* Top Micro Badges */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {[
              'Boutique vacation in Catalonia',
              '6 bedrooms (up to 12 guests)',
              'Full organization',
            ].map((badge, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-[#37482f]/75 backdrop-blur-md border border-[#f8e8c5]/25 text-[#f8e8c5] text-[11px] font-bold uppercase tracking-tight"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Center Editorial Title Lockup */}
        <div className="relative z-10 max-w-6xl mx-auto w-full text-center my-auto py-12">
          <h1 className="font-playfair text-[#f8e8c5] text-5xl sm:text-7xl md:text-8xl lg:text-[104px] leading-[0.9] tracking-[-0.04em] select-none">
            <span className="block">Private Masia</span>
            <span className="block mt-1">
              <i className="font-playfair italic font-normal text-[#f8e8c5]/95 mr-3">Among</i>
              <span>the Vineyards</span>
            </span>
            <span className="block mt-1">
              <i className="font-playfair italic font-normal text-[#cfa65a] mr-3">of</i>
              <span>Penedès</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-sm sm:text-base text-[#f8e8c5]/90 font-medium leading-relaxed">
            Rent a masia for a peaceful and cozy getaway just an hour&apos;s drive from Barcelona.
            Perfect for nature retreats, family gatherings, and intimate events.
          </p>

          {/* Hero Dual CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => openBooking('Masia Rental — Entire House')}
              className="w-full sm:w-auto min-w-[210px] py-4 px-8 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-all shadow-xl cursor-pointer"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => openBooking('Check Dates & Availability')}
              className="w-full sm:w-auto min-w-[210px] py-4 px-8 rounded-full bg-[#f8e8c5]/15 hover:bg-[#f8e8c5] text-[#f8e8c5] hover:text-[#443e2b] border border-[#f8e8c5]/50 backdrop-blur-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#f8e8c5]/75 border-t border-[#f8e8c5]/20 pt-4">
          <span>41°20&apos;N 01°41&apos;E · Vilafranca del Penedès</span>
          <a href="#about" className="hover:text-[#cfa65a] transition-colors">
            Scroll to explore ↓
          </a>
        </div>
      </section>

      {/* =====================================================================
          ABOUT SECTION (#about — rec2230009221)
      ====================================================================== */}
      <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#EFE1C8] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top Section Tag + Editorial Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold uppercase tracking-tight text-[#443e2b]">
                ( Boutique vacation in Catalonia )
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-[78px] leading-[0.92] tracking-[-0.04em] text-[#443e2b]">
                <span>MontRural — </span>
                <i className="italic font-normal text-[#8f8637]">a place</i>
                <br />
                <span>where time slows down</span>
              </h2>
            </div>
          </div>

          {/* Asymmetric Tilda Zero-Block Collage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Historic 15th-century note + small vineyard photo */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-md border border-[#443e2b]/10">
                <img
                  src={ASSETS.about.rect1}
                  alt="MontRural Exterior Stone Facade"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-sm leading-relaxed text-[#443e2b]/90">
                This large historic house began to be built around the <strong>15th century</strong>. Today it stands isolated from neighbors and is suitable for a peaceful vacation surrounded by Catalan vineyards and serene natural landscapes.
              </p>
              <div className="pt-2">
                <img
                  src={ASSETS.about.sketch}
                  alt="Botanical Sketch"
                  className="w-36 h-auto opacity-75"
                />
              </div>
            </div>

            {/* Center Column: Signature Rounded-Arch Portrait Photo */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[390px]">
                <div className="overflow-hidden rounded-t-[200px] rounded-b-2xl shadow-2xl border-4 border-[#f8e8c5]">
                  <img
                    src={ASSETS.about.archPhoto}
                    alt="MontRural Archway View"
                    className="w-full h-[490px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Philosophy + Ground Floor Wine Halls + Who It's For */}
            <div className="lg:col-span-4 space-y-6 order-3">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-tight leading-snug text-[#443e2b]">
                MONTRURAL IS A COMFORTABLE AND THOUGHTFUL BOUTIQUE MASIA FOR THOSE WHO VALUE AESTHETICS, SILENCE, AND PRIVACY. HERE YOU CAN EXHALE, DISCONNECT FROM THE CITY RHYTHM, AND SPEND TIME WITH LOVED ONES.
              </p>

              <p className="text-sm leading-relaxed text-[#443e2b]/90">
                In the past, wine was produced on the ground floor — halls where fresh grapes fermented in barrels are still preserved here. Today this atmosphere continues to live in a new format — through tastings, gastronomic evenings, and intimate events.
              </p>

              {/* Who Our Retreat Is For Card */}
              <div className="bg-[#f8e8c5] rounded-2xl p-6 border border-[#443e2b]/10 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#37482f] mb-4">
                  WHO OUR RETREAT IS FOR
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#443e2b]">
                  {[
                    'Families and groups of friends for any occasion',
                    'Couples for romantic getaways',
                    'Retreat organizers for a unique experience',
                    'Teams for joint retreats',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cfa65a] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-md border border-[#443e2b]/10">
                <img
                  src={ASSETS.about.rect2}
                  alt="Rustic Interior Detail"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LOCATION SECTION (#location — rec2230011121 + rec2240636141)
      ====================================================================== */}
      <section
        id="location"
        className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#37482f] text-[#f8e8c5] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold uppercase tracking-tight text-[#cfa65a]">
                ( Comfortable location )
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-[-0.04em] text-[#f8e8c5]">
                <span>MontRural is located in </span>
                <i className="italic font-normal text-[#cfa65a]">the wine heart</i>
                <span> of Catalonia — Penedès region</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Illustrated Map of Catalonia / Penedès */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#f8e8c5] p-3 shadow-2xl">
                <img
                  src={ASSETS.location.map}
                  alt="MontRural Penedès Map"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 py-1 text-[11px] font-bold uppercase text-[#443e2b]">
                  <span>• 10 min from Vilafranca del Penedès</span>
                  <span>• 25 min to Sitges Beaches</span>
                  <span>• 55 min to Barcelona</span>
                </div>
              </div>
            </div>

            {/* Right Narrative + Interactive Hover Triggers */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl h-48 sm:h-56">
                  <img
                    src={hoverLocationImg || ASSETS.location.img1}
                    alt="Penedès Vineyards"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-48 sm:h-56">
                  <img
                    src={ASSETS.location.vineyard}
                    alt="Catalan Masia Landscape"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#f8e8c5]/90 leading-relaxed">
                The masia is located <strong>10 minutes from Vilafranca del Penedès</strong> and approximately an hour from Barcelona. The Penedès region is one of the most renowned wine-producing regions of Spain — it is here that most of the famous Spanish cava is produced.
              </p>

              <p className="text-sm sm:text-base text-[#f8e8c5]/80 leading-relaxed">
                This is a region of gentle hills, picturesque landscapes, historic masias, and family wineries. MontRural can become your starting point for{' '}
                <span
                  onMouseEnter={() => setHoverLocationImg(ASSETS.location.img2)}
                  onMouseLeave={() => setHoverLocationImg(null)}
                  className="underline decoration-[#cfa65a] text-[#cfa65a] font-semibold cursor-pointer"
                >
                  cava and wine tours
                </span>
                , gastronomic routes,{' '}
                <span
                  onMouseEnter={() => setHoverLocationImg(ASSETS.location.vineyard)}
                  onMouseLeave={() => setHoverLocationImg(null)}
                  className="underline decoration-[#cfa65a] text-[#cfa65a] font-semibold cursor-pointer"
                >
                  cycling through vineyards
                </span>
                , and trips to{' '}
                <span
                  onMouseEnter={() => setHoverLocationImg(ASSETS.location.img1)}
                  onMouseLeave={() => setHoverLocationImg(null)}
                  className="underline decoration-[#cfa65a] text-[#cfa65a] font-semibold cursor-pointer"
                >
                  Sitges, Montserrat, or Tarragona
                </span>
                .
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { dist: '10 min', place: 'Vilafranca del Penedès' },
                  { dist: '25 min', place: 'Sitges Coastline' },
                  { dist: '55 min', place: 'Barcelona Airport' },
                ].map((d, i) => (
                  <div
                    key={i}
                    className="bg-[#293B21] border border-[#f8e8c5]/15 rounded-xl p-4"
                  >
                    <div className="font-playfair text-2xl sm:text-3xl text-[#cfa65a]">
                      {d.dist}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-tight text-[#f8e8c5]/80 mt-1">
                      {d.place}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          WHAT IS INSIDE SECTION (#inside — rec2230012501 & rec2233723911)
      ====================================================================== */}
      <section id="inside" className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#EFE1C8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold uppercase tracking-tight text-[#443e2b]">
                ( what is inside )
              </span>
              <img
                src={ASSETS.insideSketch}
                alt="Masia Sketch"
                className="w-28 h-auto mt-4 opacity-80 hidden lg:block"
              />
            </div>
            <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-[-0.04em] text-[#443e2b]">
                <span>A </span>
                <i className="italic font-normal text-[#8f8637]">historic masia</i>
                <br />
                <span>with modern comfort</span>
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-[#443e2b]/70 max-w-xs">
                Click on any space card to inspect the full multi-photo gallery
              </p>
            </div>
          </div>

          {/* 8 Interactive Space Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIDE_SPACES.map((space) => (
              <div
                key={space.id}
                onClick={() => setActiveGallery({ space, index: 0 })}
                className="group bg-[#f8e8c5] rounded-2xl overflow-hidden border border-[#443e2b]/10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={space.cover}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#37482f]/90 text-[#f8e8c5] text-[10px] font-bold uppercase">
                    ({space.number})
                  </div>
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#cfa65a] text-[#f8e8c5] flex items-center justify-center shadow-md group-hover:bg-[#37482f] transition-colors">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-tight text-[#443e2b] leading-snug mb-2">
                      {space.title}
                    </h3>
                    <p className="text-xs text-[#443e2b]/80 leading-relaxed">
                      {space.subtitle}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#443e2b]/10 flex items-center justify-between text-[10px] font-bold uppercase text-[#8f8637] group-hover:text-[#37482f]">
                    <span>View {space.gallery.length} Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          RENTAL FORMATS SECTION (#formats — rec2230016231 to rec2291543141)
      ====================================================================== */}
      <section id="formats" className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#f8e8c5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold uppercase tracking-tight text-[#443e2b]">
                ( rental formats )
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-[-0.04em] text-[#443e2b]">
                <i className="italic font-normal text-[#8f8637]">Choose </i>
                <span>the rental format</span>
                <br />
                <span>that suits you</span>
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {RENTAL_FORMATS.map((format, idx) => (
              <div
                key={format.id}
                className="relative rounded-3xl bg-[#37482f] text-[#f8e8c5] p-6 sm:p-10 overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Info Column */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#f8e8c5] text-[#443e2b] text-[11px] font-bold uppercase tracking-tight">
                        {format.badge1}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full border border-[#f8e8c5]/40 text-[#f8e8c5] text-[11px] font-bold uppercase tracking-tight">
                        {format.badge2}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#cfa65a]">
                        Format 0{idx + 1}
                      </span>
                      <h3 className="font-playfair text-4xl sm:text-5xl text-[#f8e8c5] mt-1">
                        {format.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[#f8e8c5]/85 leading-relaxed max-w-xl">
                      {format.description}
                    </p>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#cfa65a]">
                      {format.priceFrom}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => openBooking(`${format.title} (${format.badge1})`)}
                        className="py-3.5 px-7 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        BOOK NOW
                      </button>
                      <button
                        onClick={() => setActiveConditions(format)}
                        className="py-3.5 px-7 rounded-full border border-[#f8e8c5]/40 hover:bg-[#f8e8c5] hover:text-[#443e2b] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        CONDITIONS
                      </button>
                    </div>
                  </div>

                  {/* Right Dual Photos Column */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-2xl h-64 sm:h-72">
                      <img
                        src={format.imageMain}
                        alt={format.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl h-64 sm:h-72">
                      <img
                        src={format.imageSecondary}
                        alt={`${format.title} detail`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          ADDITIONAL SERVICES SECTION (#service — rec2230017721 & sliders)
      ====================================================================== */}
      <section id="service" className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#EFE1C8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold uppercase tracking-tight text-[#443e2b]">
                ( additional services )
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl leading-[0.92] tracking-[-0.04em] text-[#443e2b]">
                <span>We </span>
                <i className="italic font-normal text-[#8f8637]">organise</i>
                <br />
                <span>unforgettable stays in Catalonia</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#443e2b]/85 max-w-xl leading-relaxed">
                MontRural is not only a venue rental but also event organisation throughout Catalonia. Our team includes experienced wine guides, chefs, decorators, and drivers.
              </p>
            </div>
          </div>

          {/* 3 Interactive Service Sliders */}
          <div className="space-y-12">
            {ADDITIONAL_SERVICES.map((srv) => {
              const currentSlide = serviceSlides[srv.id] || 0;
              return (
                <div
                  key={srv.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f8e8c5] rounded-3xl p-6 sm:p-10 border border-[#443e2b]/10 shadow-md"
                >
                  {/* Image Carousel */}
                  <div className="lg:col-span-7 relative overflow-hidden rounded-2xl h-72 sm:h-[380px] group">
                    <img
                      src={srv.images[currentSlide]}
                      alt={srv.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Prev/Next Controls */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <button
                        onClick={() => cycleServiceSlide(srv.id, -1, srv.images.length)}
                        className="w-10 h-10 rounded-full bg-[#37482f]/90 hover:bg-[#cfa65a] text-[#f8e8c5] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => cycleServiceSlide(srv.id, 1, srv.images.length)}
                        className="w-10 h-10 rounded-full bg-[#37482f]/90 hover:bg-[#cfa65a] text-[#f8e8c5] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Slide Dots */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-1.5">
                      {srv.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setServiceSlides((prev) => ({ ...prev, [srv.id]: idx }))
                          }
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            currentSlide === idx
                              ? 'w-6 bg-[#cfa65a]'
                              : 'w-2 bg-[#f8e8c5]/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Service Text & Bullets */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#37482f] text-[#f8e8c5]">
                        Service {srv.number}
                      </span>
                    </div>

                    <h3 className="font-playfair text-3xl sm:text-4xl text-[#443e2b]">
                      {srv.title}
                    </h3>

                    <ul className="space-y-3">
                      {srv.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-[#443e2b]/90 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8f8637] mt-2 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-[#443e2b]/15 space-y-3">
                      <p className="text-xs text-[#443e2b]/75">
                        If you are interested in this experience, please contact Vero by phone or WhatsApp:
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href="https://wa.me/34631261499"
                          target="_blank"
                          rel="noreferrer"
                          className="py-3 px-6 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          +34 631 26 14 99
                        </a>
                        <button
                          onClick={() => openBooking(`Experience: ${srv.title}`)}
                          className="py-3 px-6 rounded-full border border-[#443e2b]/30 hover:bg-[#37482f] hover:text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Request in Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CONTACT & CONCIERGE SECTION (#contact — rec2410391531)
      ====================================================================== */}
      <section
        id="contact"
        className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#37482f] text-[#f8e8c5] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#cfa65a] mb-4">
              ( Welcome to Penedès )
            </span>
            <h2 className="font-playfair text-5xl sm:text-7xl md:text-8xl leading-[0.9] tracking-[-0.04em]">
              <span>MontRural </span>
              <i className="italic font-normal text-[#cfa65a]">awaits you</i>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#f8e8c5]/85 max-w-xl mx-auto leading-relaxed">
              Spend time in the silence of the vineyards. Arrange a dinner overlooking the sunset. Gather your loved ones in a cozy atmosphere. Enjoy the moment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Framed Vineyard Photo */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="overflow-hidden rounded-2xl h-80 border border-[#f8e8c5]/15">
                <img
                  src={ASSETS.contact.imgLeft}
                  alt="Sunset over Penedès"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Concierge Card (Vero) */}
            <div className="lg:col-span-6 bg-[#f8e8c5] text-[#443e2b] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#cfa65a]/40 text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-5 border-4 border-[#cfa65a] shadow-md">
                <img
                  src={ASSETS.contact.veroPortrait}
                  alt="Vero — Personal Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#443e2b]">
                Vero, personal manager and event organisator
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#8f8637] mt-2">
                We speak Spanish, English, and Russian
              </p>
              <div className="my-6 text-2xl sm:text-3xl font-playfair font-medium text-[#37482f]">
                +34 631 26 14 99
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/34631261499"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  ASK A QUESTION ON WHATSAPP
                </a>
                <button
                  onClick={() => openBooking()}
                  className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#37482f] hover:bg-[#293B21] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  RESERVE ONLINE
                </button>
              </div>
            </div>

            {/* Right Framed Masia Photo */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="overflow-hidden rounded-2xl h-80 border border-[#f8e8c5]/15">
                <img
                  src={ASSETS.contact.imgRight}
                  alt="MontRural Table Setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER (rec2241529041)
      ====================================================================== */}
      <footer className="relative bg-[#293B21] text-[#f8e8c5] pt-16 pb-12 px-4 sm:px-10 border-t border-[#f8e8c5]/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <img
            src={ASSETS.logoWordmark}
            alt="MontRural"
            className="w-full max-w-3xl h-auto opacity-90 mb-10"
          />

          <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#f8e8c5]/15 text-xs text-[#f8e8c5]/70">
            <span>MontRural © 2026 — Private Masia in Penedès, Catalonia</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-[#cfa65a]">About</a>
              <a href="#location" className="hover:text-[#cfa65a]">Location</a>
              <a href="#inside" className="hover:text-[#cfa65a]">Inside</a>
              <a href="#formats" className="hover:text-[#cfa65a]">Formats</a>
              <a href="#service" className="hover:text-[#cfa65a]">Services</a>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          LIGHTBOX GALLERY MODAL FOR "WHAT IS INSIDE" (rec2245249141–rec2245258941)
      ====================================================================== */}
      {activeGallery && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-5xl w-full bg-[#f8e8c5] text-[#443e2b] rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 bg-[#37482f] text-[#f8e8c5]">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#cfa65a] mr-2">
                  ({activeGallery.space.number})
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {activeGallery.space.title}
                </span>
              </div>
              <button
                onClick={() => setActiveGallery(null)}
                className="w-9 h-9 rounded-full bg-[#293B21] hover:bg-[#cfa65a] flex items-center justify-center text-[#f8e8c5] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-[340px] sm:h-[520px] bg-black">
              <img
                src={activeGallery.space.gallery[activeGallery.index]}
                alt={activeGallery.space.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() =>
                  setActiveGallery((prev) =>
                    prev
                      ? {
                          ...prev,
                          index:
                            (prev.index - 1 + prev.space.gallery.length) %
                            prev.space.gallery.length,
                        }
                      : null
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#37482f]/90 hover:bg-[#cfa65a] text-[#f8e8c5] flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveGallery((prev) =>
                    prev
                      ? {
                          ...prev,
                          index: (prev.index + 1) % prev.space.gallery.length,
                        }
                      : null
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#37482f]/90 hover:bg-[#cfa65a] text-[#f8e8c5] flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 bg-[#f8e8c5]">
              <p className="text-xs sm:text-sm font-medium text-[#443e2b]">
                {activeGallery.space.subtitle} — Photo {activeGallery.index + 1} of{' '}
                {activeGallery.space.gallery.length}
              </p>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {activeGallery.space.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setActiveGallery((prev) => (prev ? { ...prev, index: i } : null))
                    }
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeGallery.index === i
                        ? 'border-[#37482f] scale-105'
                        : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          CONDITIONS MODAL (rec2291381501 / rec2291537891 / rec2291545351)
      ====================================================================== */}
      {activeConditions && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-[#f8e8c5] text-[#443e2b] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 bg-[#37482f] text-[#f8e8c5] sticky top-0 z-10">
              <span className="text-xs font-bold uppercase tracking-wider">
                Rental Conditions — {activeConditions.title} ({activeConditions.badge1})
              </span>
              <button
                onClick={() => setActiveConditions(null)}
                className="w-9 h-9 rounded-full bg-[#293B21] hover:bg-[#cfa65a] flex items-center justify-center text-[#f8e8c5] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-[#443e2b]/15">
                <img
                  src={activeConditions.conditionsImage}
                  alt={activeConditions.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-playfair text-2xl text-[#37482f]">
                  Included in {activeConditions.title}
                </h4>
                <ul className="space-y-2.5">
                  {activeConditions.conditionsList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#443e2b]">
                      <Check className="w-4 h-4 text-[#37482f] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#443e2b]/15">
                <button
                  onClick={() => {
                    const title = `${activeConditions.title} (${activeConditions.badge1})`;
                    setActiveConditions(null);
                    openBooking(title);
                  }}
                  className="py-3.5 px-8 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Book This Format
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          RESERVATION & AVAILABILITY MODAL (rec2291395731 & custom #37482F calendar)
      ====================================================================== */}
      {bookingModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-xl w-full bg-[#37482f] text-[#f8e8c5] rounded-3xl overflow-hidden shadow-2xl border border-[#cfa65a]/30">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#f8e8c5]/15">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#cfa65a] block">
                  ( Direct Reservation Request )
                </span>
                <h3 className="font-playfair text-2xl text-[#f8e8c5]">
                  Reserve Masia MontRural
                </h3>
              </div>
              <button
                onClick={() => setBookingModal({ open: false })}
                className="w-9 h-9 rounded-full bg-[#293B21] hover:bg-[#cfa65a] flex items-center justify-center text-[#f8e8c5] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#cfa65a] text-[#f8e8c5] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-playfair text-3xl text-[#f8e8c5]">
                  Reservation Request Sent
                </h4>
                <p className="text-sm text-[#f8e8c5]/85 leading-relaxed">
                  Thank you, <strong>{guestName || 'Guest'}</strong>. Vero (Personal Manager) will confirm availability for <strong>{selectedFormat}</strong> ({checkIn} → {checkOut}) via WhatsApp or phone shortly.
                </p>
                <button
                  onClick={() => setBookingModal({ open: false })}
                  className="mt-4 py-3.5 px-8 rounded-full bg-[#cfa65a] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Return to Masia MontRural
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-4">
                <p className="text-xs text-[#f8e8c5]/80">
                  Please fill out the form below to reserve your selected accommodation option.
                </p>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cfa65a] mb-1.5">
                    Selected Rental Format
                  </label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full rounded-xl bg-[#293B21] border border-[#f8e8c5]/20 px-4 py-3 text-xs font-semibold text-[#f8e8c5] focus:outline-none focus:border-[#cfa65a]"
                  >
                    <option>Masia Rental — Entire House (up to 12+3 guests)</option>
                    <option>Masia Rental — Daytime Event (from 4 hours)</option>
                    <option>Bodega Space — Private Tasting/Dinner (2 to 8 guests)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cfa65a] mb-1.5">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-xl bg-[#293B21] border border-[#f8e8c5]/20 px-3.5 py-2.5 text-xs text-[#f8e8c5]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cfa65a] mb-1.5">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded-xl bg-[#293B21] border border-[#f8e8c5]/20 px-3.5 py-2.5 text-xs text-[#f8e8c5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cfa65a] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full rounded-xl bg-[#293B21] border border-[#f8e8c5]/20 px-3.5 py-2.5 text-xs text-[#f8e8c5] placeholder:text-[#f8e8c5]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cfa65a] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full rounded-xl bg-[#293B21] border border-[#f8e8c5]/20 px-3.5 py-2.5 text-xs text-[#f8e8c5] placeholder:text-[#f8e8c5]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cfa65a] mb-1.5">
                    Additional Requests & Extra Services
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Private chef dinner, Penedès cava tasting, transfer from Barcelona..."
                    value={guestComment}
                    onChange={(e) => setGuestComment(e.target.value)}
                    className="w-full rounded-xl bg-[#293B21] border border-[#f8e8c5]/20 px-3.5 py-2 text-xs text-[#f8e8c5] placeholder:text-[#f8e8c5]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#cfa65a] hover:bg-[#a8833f] text-[#f8e8c5] text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  Confirm Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
