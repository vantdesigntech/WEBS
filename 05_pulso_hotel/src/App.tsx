import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Calendar,
  Users,
  MapPin,
  ArrowUpRight,
  Check,
  Sparkles,
  Music,
  Utensils,
  Phone,
  Mail
} from 'lucide-react';
import {
  PULSO_ASSETS,
  HOTEL_LIVING_SLIDES,
  ACCOMMODATIONS,
  GASTRONOMY_VENUES,
  DIARY_EVENTS,
  WELLNESS_SPACES,
  EVENT_VENUES,
  EXPERIENCES_PACKAGES,
  AccommodationItem,
  DiaryEvent
} from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'pt-BR'>('EN');
  const [activeDropdown, setActiveDropdown] = useState<'gastro' | 'exp' | null>(null);

  // Interactive Sliders & Tabs
  const [livingIndex, setLivingIndex] = useState(0);
  const [activeRoomTab, setActiveRoomTab] = useState<'deluxe' | 'suite'>('deluxe');
  const [roomPhotoIndex, setRoomPhotoIndex] = useState(0);
  const [activeWellnessTab, setActiveWellnessTab] = useState<'spa' | 'pool' | 'gym'>('spa');
  const [activeEventTab, setActiveEventTab] = useState(0);

  // Modals
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<AccommodationItem | null>(null);
  const [selectedTicketEvent, setSelectedTicketEvent] = useState<DiaryEvent | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreset, setBookingPreset] = useState<string>('Pulso Deluxe Room');

  // Sticky Bottom Reservation Bar State
  const [checkInDate, setCheckInDate] = useState('2026-11-20');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-23');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const currentRoom = ACCOMMODATIONS.find((r) => r.id === activeRoomTab) || ACCOMMODATIONS[0];
  const currentWellness =
    WELLNESS_SPACES.find((w) => w.id === activeWellnessTab) || WELLNESS_SPACES[0];

  const handleOpenBooking = (preset?: string) => {
    if (preset) setBookingPreset(preset);
    setBookingConfirmed(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f2] text-[#333333] font-acid selection:bg-[#333333] selection:text-[#f7f7f2]">
      {/* =====================================================================
          HEADER / NAVBAR (Transparent over hero, architectural minimalist bar)
      ====================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f7f7f2]/92 backdrop-blur-md border-b border-[#333333]/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src={PULSO_ASSETS.logo}
              alt="Pulso Hotel"
              className="h-7 sm:h-8 w-auto invert"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-light tracking-[1.6px] uppercase text-[#333333]">
            <a href="#hotel" className="hover:text-[#867f78] transition-colors">
              Hotel
            </a>
            <a href="#accommodations" className="hover:text-[#867f78] transition-colors">
              Accommodations
            </a>
            <a href="#sarau" className="hover:text-[#867f78] transition-colors">
              Sarau Bar
            </a>

            {/* Gastronomy Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('gastro')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 uppercase tracking-[1.6px] hover:text-[#867f78] transition-colors cursor-pointer py-2">
                <span>Gastronomy</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {activeDropdown === 'gastro' && (
                <div className="absolute top-full left-0 w-56 bg-[#f7f7f2] border border-[#333333]/15 shadow-xl p-4 space-y-3">
                  <a
                    href="#gastronomy"
                    className="block text-xs uppercase tracking-[1.6px] hover:text-[#867f78]"
                  >
                    Charlô Bistro
                  </a>
                  <a
                    href="#gastronomy"
                    className="block text-xs uppercase tracking-[1.6px] hover:text-[#867f78]"
                  >
                    Cha Cha Boulangerie
                  </a>
                </div>
              )}
            </div>

            <a href="#wellness" className="hover:text-[#867f78] transition-colors">
              Wellness &amp; Spa
            </a>
            <a href="#events" className="hover:text-[#867f78] transition-colors">
              Events
            </a>

            {/* Experiências Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('exp')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 uppercase tracking-[1.6px] hover:text-[#867f78] transition-colors cursor-pointer py-2">
                <span>Experiências</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {activeDropdown === 'exp' && (
                <div className="absolute top-full left-0 w-64 bg-[#f7f7f2] border border-[#333333]/15 shadow-xl p-4 space-y-3">
                  {EXPERIENCES_PACKAGES.map((pkg) => (
                    <a
                      key={pkg.id}
                      href="#experiences"
                      className="block text-xs uppercase tracking-[1.4px] hover:text-[#867f78]"
                    >
                      {pkg.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="hover:text-[#867f78] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Actions: Language Toggle & Book Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'EN' ? 'pt-BR' : 'EN')}
              className="text-xs font-medium uppercase tracking-[1.6px] px-2.5 py-1 border border-[#333333]/20 hover:border-[#333333] transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'pt-BR' : 'EN'}
            </button>

            <button
              onClick={() => handleOpenBooking()}
              className="px-6 py-2.5 bg-[#333333] text-[#f7f7f2] hover:bg-transparent hover:text-[#333333] border border-[#333333] text-xs uppercase tracking-[1.6px] transition-all cursor-pointer"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#333333] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#f7f7f2] border-b border-[#333333]/15 px-6 py-8 space-y-4">
            {[
              { label: 'Hotel', href: '#hotel' },
              { label: 'Accommodations', href: '#accommodations' },
              { label: 'Gastronomy (Charlô & Cha Cha)', href: '#gastronomy' },
              { label: 'Sarau Bar', href: '#sarau' },
              { label: 'Diary (Estúdio Pulso)', href: '#diary' },
              { label: 'Wellness & Spa', href: '#wellness' },
              { label: 'Events', href: '#events' },
              { label: 'Experiências', href: '#experiences' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-[1.6px] py-1.5 border-b border-[#333333]/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* =====================================================================
          HERO VIDEO SECTION + STICKY RESERVATION ENGINE BAR
      ====================================================================== */}
      <section className="relative h-screen min-h-[680px] w-full pt-20 overflow-hidden bg-[#222222] text-[#f7f7f2] flex flex-col justify-end">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <img
            src={PULSO_ASSETS.heroPoster}
            alt="Pulso Hotel Faria Lima"
            className="w-full h-full object-cover"
          />
          <video
            src={PULSO_ASSETS.heroVideo}
            poster={PULSO_ASSETS.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
        </div>

        {/* Center-Left Editorial Overlay */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-10 pb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#d9b57d] text-[#333333] text-[11px] font-bold uppercase tracking-[1.6px]">
              Michelin Key Distinction
            </span>
            <span className="px-3 py-1 bg-white/15 backdrop-blur-md text-[#f7f7f2] text-[11px] font-light uppercase tracking-[1.6px]">
              Studio Arthur Casas Architecture
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-wide leading-[1.1] max-w-4xl">
            PULSO HOTEL <span className="text-[#d9b57d] font-light">Faria Lima</span>
          </h1>
          <p className="mt-3 text-base sm:text-xl font-light text-[#f7f7f2]/85 tracking-[1.6px]">
            Art, Design, Gastronomy, Culture and Encounters in São Paulo.
          </p>
        </div>

        {/* Bottom Architectural Reservation Bar ("Make your reservation") */}
        <div className="relative z-10 w-full bg-[#f7f7f2]/95 backdrop-blur-md text-[#333333] border-t border-[#333333]/15">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-3">
              <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#867f78] block">
                Direct Booking Guarantee
              </span>
              <div className="text-sm sm:text-base font-medium uppercase tracking-[1.6px]">
                Make your reservation
              </div>
            </div>

            <div className="md:col-span-3 flex items-center gap-3 border-b md:border-b-0 md:border-l border-[#333333]/15 pb-2 md:pb-0 md:pl-4">
              <Calendar className="w-4 h-4 text-[#867f78] shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78]">
                  Check-in — Check-out
                </label>
                <div className="flex items-center gap-1 text-xs font-medium mt-0.5">
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="bg-transparent focus:outline-none"
                  />
                  <span>—</span>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex items-center gap-3 border-b md:border-b-0 md:border-l border-[#333333]/15 pb-2 md:pb-0 md:pl-4">
              <Users className="w-4 h-4 text-[#867f78] shrink-0" />
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78]">
                    Guests
                  </span>
                  <span className="text-xs font-medium">
                    {adults} {adults === 1 ? 'Adult' : 'Adults'} · {children} Children
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-6 h-6 border border-[#333333]/25 text-xs flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setAdults(Math.min(4, adults + 1))}
                    className="w-6 h-6 border border-[#333333]/25 text-xs flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex justify-end">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full md:w-auto px-10 py-3.5 bg-[#333333] hover:bg-[#d9b57d] text-[#f7f7f2] hover:text-[#333333] text-xs font-bold uppercase tracking-[1.6px] transition-colors cursor-pointer"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: PULSO HOTEL FARIA LIMA (Living / Living Bar / Nuno Ramos)
      ====================================================================== */}
      <section id="hotel" className="py-24 sm:py-32 px-4 sm:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
              PULSO HOTEL Faria Lima
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#333333]">
              Art, Design, Gastronomy, Culture and Encounters.
            </h3>
          </div>
        </div>

        {/* Interactive Space Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#333333]/15 pb-4 mb-8">
          <div className="flex flex-wrap items-center gap-6">
            {HOTEL_LIVING_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setLivingIndex(idx)}
                className={`text-xs sm:text-sm uppercase tracking-[1.6px] pb-2 transition-all cursor-pointer ${
                  livingIndex === idx
                    ? 'font-bold text-[#333333] border-b-2 border-[#333333]'
                    : 'font-light text-[#867f78] hover:text-[#333333]'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setLivingIndex(
                  (livingIndex - 1 + HOTEL_LIVING_SLIDES.length) %
                    HOTEL_LIVING_SLIDES.length
                )
              }
              className="w-10 h-10 border border-[#333333]/20 hover:border-[#333333] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setLivingIndex((livingIndex + 1) % HOTEL_LIVING_SLIDES.length)
              }
              className="w-10 h-10 border border-[#333333]/20 hover:border-[#333333] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Living Slide Display */}
        <div className="relative overflow-hidden bg-[#cbc0ad]/20">
          <div className="h-[420px] sm:h-[620px] w-full overflow-hidden">
            <img
              src={HOTEL_LIVING_SLIDES[livingIndex].image}
              alt={HOTEL_LIVING_SLIDES[livingIndex].label}
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="p-6 sm:p-8 bg-[#f7f7f2] border-x border-b border-[#333333]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[1.6px] text-[#333333]">
                {HOTEL_LIVING_SLIDES[livingIndex].label}
              </div>
              <p className="text-sm font-light text-[#333333]/80 mt-1">
                {HOTEL_LIVING_SLIDES[livingIndex].architectNote}
              </p>
            </div>
            <span className="text-[11px] uppercase tracking-[1.6px] text-[#867f78] shrink-0">
              {HOTEL_LIVING_SLIDES[livingIndex].caption}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: ACCOMMODATIONS (Deluxe & Suite)
      ====================================================================== */}
      <section
        id="accommodations"
        className="py-24 sm:py-32 px-4 sm:px-10 bg-[#cbc0ad]/25 border-y border-[#333333]/10"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
                ACCOMMODATIONS
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#333333] max-w-2xl">
                Works of art from the Pulso collection, prospected design and technology. Curated accommodations with local identity.
              </h3>
              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={() => setSelectedRoomDetail(currentRoom)}
                  className="pulso-link text-xs uppercase tracking-[1.6px] cursor-pointer"
                >
                  Learn more
                </button>
                <button
                  onClick={() => handleOpenBooking(currentRoom.title)}
                  className="px-6 py-2.5 bg-[#333333] text-[#f7f7f2] text-xs uppercase tracking-[1.6px] hover:bg-[#d9b57d] hover:text-[#333333] transition-colors cursor-pointer"
                >
                  Book
                </button>
              </div>
            </div>
          </div>

          {/* Category Switcher: Deluxe | suite */}
          <div className="flex items-center gap-6 mb-8 border-b border-[#333333]/15 pb-4">
            {ACCOMMODATIONS.map((room) => (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomTab(room.id as 'deluxe' | 'suite');
                  setRoomPhotoIndex(0);
                }}
                className={`text-lg sm:text-2xl uppercase tracking-[1.6px] transition-all cursor-pointer ${
                  activeRoomTab === room.id
                    ? 'font-medium text-[#333333] underline underline-offset-8'
                    : 'font-extralight text-[#867f78] hover:text-[#333333]'
                }`}
              >
                {room.category}
              </button>
            ))}
          </div>

          {/* Room Gallery + Architectural Spec Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative">
              <div className="h-[380px] sm:h-[540px] overflow-hidden bg-[#333333]">
                <img
                  src={currentRoom.images[roomPhotoIndex]}
                  alt={currentRoom.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {currentRoom.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setRoomPhotoIndex(i)}
                      className={`w-16 h-12 overflow-hidden border-2 transition-all cursor-pointer ${
                        roomPhotoIndex === i
                          ? 'border-[#333333]'
                          : 'border-transparent opacity-50'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setRoomPhotoIndex(
                        (roomPhotoIndex - 1 + currentRoom.images.length) %
                          currentRoom.images.length
                      )
                    }
                    className="w-10 h-10 border border-[#333333]/25 hover:border-[#333333] flex items-center justify-center cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setRoomPhotoIndex(
                        (roomPhotoIndex + 1) % currentRoom.images.length
                      )
                    }
                    className="w-10 h-10 border border-[#333333]/25 hover:border-[#333333] flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#f7f7f2] p-8 border border-[#333333]/10 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#867f78]">
                  {currentRoom.size} · {currentRoom.occupancy}
                </span>
                <h4 className="text-2xl font-light text-[#333333] mt-1">
                  {currentRoom.title}
                </h4>
                <p className="text-xs uppercase tracking-[1.6px] text-[#d9b57d] font-bold mt-2">
                  {currentRoom.rate}
                </p>
              </div>

              <p className="text-sm font-light leading-relaxed text-[#333333]/85">
                {currentRoom.description}
              </p>

              <ul className="space-y-2.5 border-t border-[#333333]/10 pt-4">
                {currentRoom.highlights.map((h, i) => (
                  <li key={i} className="text-xs font-light flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#d9b57d] rounded-full mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => handleOpenBooking(currentRoom.title)}
                  className="w-full py-3.5 bg-[#333333] hover:bg-[#d9b57d] text-[#f7f7f2] hover:text-[#333333] text-xs font-bold uppercase tracking-[1.6px] transition-colors cursor-pointer"
                >
                  Reserve {currentRoom.category}
                </button>
                <button
                  onClick={() => setSelectedRoomDetail(currentRoom)}
                  className="w-full py-3 border border-[#333333]/25 hover:border-[#333333] text-xs uppercase tracking-[1.6px] transition-colors cursor-pointer"
                >
                  View Full Room Specifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: GASTRONOMY (Charlô Bistrô & Cha Cha Boulangerie)
      ====================================================================== */}
      <section id="gastronomy" className="py-24 sm:py-32 px-4 sm:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
              gastronomy
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#333333]">
              Our cuisine, signed by Charlô Whately, celebrates the personality and creativity of a São Paulo classic.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {GASTRONOMY_VENUES.map((venue) => (
            <div
              key={venue.id}
              className="group bg-[#f7f7f2] border border-[#333333]/10 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-[360px] sm:h-[440px] overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[1.6px] text-[#867f78]">
                    <span>{venue.chefOrConcept}</span>
                    <span>{venue.hours}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-light text-[#333333]">
                    {venue.name}
                  </h4>
                  <p className="text-sm font-light text-[#333333]/85 leading-relaxed">
                    {venue.description}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {venue.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-light text-[#333333]/75 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#d9b57d]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#333333]/10 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenBooking(`Table Reservation — ${venue.name}`)}
                    className="pulso-link text-xs uppercase tracking-[1.6px] cursor-pointer"
                  >
                    Learn more &amp; Reserve a Table
                  </button>
                  <ArrowUpRight className="w-4 h-4 text-[#867f78]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: SOIREE BAR — SARAU BAR
      ====================================================================== */}
      <section id="sarau" className="py-24 sm:py-32 px-4 sm:px-10 bg-[#333333] text-[#f7f7f2]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#d9b57d]">
                Soiree bar
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#f7f7f2] max-w-2xl">
                Sarau Bar: cocktail bar designed by Gabriel Santana in an intimate and vibrant environment.
              </h3>
              <button
                onClick={() => handleOpenBooking('Sarau Bar — Evening Table')}
                className="pulso-link text-xs uppercase tracking-[1.6px] text-[#d9b57d] shrink-0 cursor-pointer"
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[600px] overflow-hidden">
            <img
              src={PULSO_ASSETS.sarauBarHero}
              alt="Sarau Bar Pulso Hotel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6 sm:p-12">
              <div className="max-w-2xl space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#d9b57d]">
                  Mixology by Gabriel Santana · Musical Curation by Rômulo Fróes
                </span>
                <p className="text-sm sm:text-base font-light text-[#f7f7f2]/90">
                  An intimate 30-seat listening bar dedicated to Brazilian musical heritage, vinyl culture, and award-winning signature cocktails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: DIARY (Estúdio Pulso Live Cultural Agenda)
      ====================================================================== */}
      <section id="diary" className="py-24 sm:py-32 px-4 sm:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
              DIARY
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#333333]">
              Estúdio Pulso — Intimate pocket shows and cultural encounters at Sarau Bar.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {DIARY_EVENTS.map((ev) => (
            <div
              key={ev.id}
              className="grid grid-cols-1 sm:grid-cols-12 bg-[#f7f7f2] border border-[#333333]/15 overflow-hidden"
            >
              <div className="sm:col-span-5 h-72 sm:h-auto overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[1.6px] text-[#867f78]">
                    <span>{ev.series}</span>
                    <span className="text-[#333333]">{ev.dateBadge}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-medium text-[#333333] leading-snug">
                    {ev.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-[#333333]/80 leading-relaxed">
                    {ev.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#333333]/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[1.6px] text-[#333333]">
                    {ev.price}
                  </span>
                  <button
                    onClick={() => setSelectedTicketEvent(ev)}
                    className="px-5 py-2.5 bg-[#333333] hover:bg-[#d9b57d] text-[#f7f7f2] hover:text-[#333333] text-xs uppercase tracking-[1.6px] transition-colors cursor-pointer"
                  >
                    Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: WELLNESS & SPA (Pulso Spa by L'Occitane, Pool, Gym)
      ====================================================================== */}
      <section
        id="wellness"
        className="py-24 sm:py-32 px-4 sm:px-10 bg-[#cbc0ad]/20 border-y border-[#333333]/10"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
                WELLNESS &amp; SPA
              </h2>
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#333333]">
                Pulso Spa by L&apos;Occitane, heated pool and 24-hour gym. Our wellness area has a complete structure for relaxing, moving and recharging.
              </h3>
            </div>
          </div>

          {/* Wellness Tabs */}
          <div className="flex flex-wrap items-center gap-6 border-b border-[#333333]/15 pb-4 mb-8">
            {WELLNESS_SPACES.map((w) => (
              <button
                key={w.id}
                onClick={() => setActiveWellnessTab(w.id as 'spa' | 'pool' | 'gym')}
                className={`text-sm sm:text-base uppercase tracking-[1.6px] pb-2 transition-all cursor-pointer ${
                  activeWellnessTab === w.id
                    ? 'font-bold text-[#333333] border-b-2 border-[#333333]'
                    : 'font-light text-[#867f78] hover:text-[#333333]'
                }`}
              >
                {w.tabLabel}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 h-[380px] sm:h-[520px] overflow-hidden">
              <img
                src={currentWellness.image}
                alt={currentWellness.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="lg:col-span-4 space-y-6 bg-[#f7f7f2] p-8 border border-[#333333]/10">
              <h4 className="text-2xl font-light text-[#333333]">
                {currentWellness.title}
              </h4>
              <p className="text-sm font-light text-[#333333]/85 leading-relaxed">
                {currentWellness.subtitle}
              </p>
              <ul className="space-y-2.5 border-t border-[#333333]/10 pt-4">
                {currentWellness.details.map((d, i) => (
                  <li key={i} className="text-xs font-light flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d9b57d] mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleOpenBooking(`Wellness Ritual — ${currentWellness.title}`)}
                className="w-full py-3.5 bg-[#333333] hover:bg-[#d9b57d] text-[#f7f7f2] hover:text-[#333333] text-xs uppercase tracking-[1.6px] transition-colors cursor-pointer"
              >
                Book Wellness Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: EVENTS (Living, Boardroom, Garden, Sarau Bar)
      ====================================================================== */}
      <section id="events" className="py-24 sm:py-32 px-4 sm:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
              Events
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h3 className="text-2xl sm:text-4xl font-extralight leading-[1.35] text-[#333333] max-w-2xl">
              Celebrate unique moments or hold corporate meetings with sophistication — our exclusive spaces adapt to your occasion.
            </h3>
            <button
              onClick={() => handleOpenBooking('Corporate / Private Event Inquiry')}
              className="pulso-link text-xs uppercase tracking-[1.6px] shrink-0 cursor-pointer"
            >
              Discover our spaces
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_VENUES.map((venue, idx) => (
            <div
              key={venue.id}
              onClick={() => setActiveEventTab(idx)}
              className={`border transition-all cursor-pointer flex flex-col justify-between ${
                activeEventTab === idx
                  ? 'border-[#333333] bg-white shadow-lg'
                  : 'border-[#333333]/15 bg-[#f7f7f2]'
              }`}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[1.6px] text-[#867f78]">
                    <span>{venue.area}</span>
                    <span>{venue.capacity}</span>
                  </div>
                  <h4 className="text-xl font-light text-[#333333] mt-1">{venue.name}</h4>
                  <p className="text-xs font-light text-[#333333]/80 mt-2 leading-relaxed">
                    {venue.description}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenBooking(`Event Space — ${venue.name}`);
                  }}
                  className="pt-3 text-left text-[11px] font-bold uppercase tracking-[1.6px] text-[#333333] hover:text-[#d9b57d]"
                >
                  Inquire about {venue.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: EXPERIÊNCIAS & LOCALIZATION (Pinheiros, São Paulo)
      ====================================================================== */}
      <section
        id="experiences"
        className="py-24 sm:py-32 px-4 sm:px-10 bg-[#333333] text-[#f7f7f2]"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Curated Experiences Packages */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[1.6px] text-[#d9b57d]">
                Experiências Exclusivas
              </span>
              <h3 className="text-2xl sm:text-4xl font-extralight">
                Tailored stays in the cultural heart of São Paulo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {EXPERIENCES_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="p-6 border border-[#f7f7f2]/15 hover:border-[#d9b57d] transition-colors flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <h4 className="text-lg font-medium text-[#f7f7f2]">{pkg.title}</h4>
                      <p className="text-xs font-light text-[#f7f7f2]/75 mt-2 leading-relaxed">
                        {pkg.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-[#f7f7f2]/10">
                      <span className="text-xs text-[#d9b57d] font-bold">{pkg.price}</span>
                      <button
                        onClick={() => handleOpenBooking(pkg.title)}
                        className="text-[11px] uppercase tracking-[1.6px] underline cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Localization Card */}
            <div className="lg:col-span-5 bg-[#222222] p-8 sm:p-10 border border-[#f7f7f2]/15 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={PULSO_ASSETS.mapMarker}
                    alt="Pulso Pin"
                    className="w-8 h-8"
                  />
                  <span className="text-xs font-bold uppercase tracking-[1.6px] text-[#d9b57d]">
                    Localization
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light">PULSO FARIA LIMA</h3>
                <p className="text-sm font-light text-[#f7f7f2]/85 leading-relaxed">
                  R. Henrique Monteiro, 154
                  <br />
                  Pinheiros, São Paulo - SP 05423-020
                </p>
                <p className="text-xs font-light text-[#f7f7f2]/65 leading-relaxed pt-2">
                  Steps away from Avenida Brigadeiro Faria Lima, Pinheiros art galleries, and São Paulo’s premier gastronomic corridor.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#f7f7f2]/15 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://maps.google.com/?q=R.+Henrique+Monteiro,+154+-+Pinheiros,+Sao+Paulo"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#d9b57d] text-[#333333] text-xs font-bold uppercase tracking-[1.6px] hover:bg-[#f7f7f2] transition-colors"
                >
                  View on Google Maps
                </a>
                <span className="text-[11px] uppercase tracking-[1.6px] text-[#f7f7f2]/60">
                  23°34&apos;12&quot;S 46°41&apos;30&quot;W
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: FOOTER (Awards, Newsletter, Reservation Center, Estancorp)
      ====================================================================== */}
      <footer
        id="contact"
        className="bg-[#f7f7f2] text-[#333333] pt-20 pb-14 px-4 sm:px-10 border-t border-[#333333]/15"
      >
        <div className="max-w-[1440px] mx-auto space-y-16">
          {/* Top Row: Symbol + International Distinctions (Michelin Key, Archello, Preferred Hotels LVX) */}
          <div className="flex flex-wrap items-center justify-between gap-8 pb-12 border-b border-[#333333]/15">
            <div className="flex items-center gap-4">
              <img
                src={PULSO_ASSETS.symbol}
                alt="Pulso Symbol"
                className="h-12 w-auto invert"
              />
              <div>
                <div className="text-sm font-bold uppercase tracking-[1.6px]">
                  PULSO FARIA LIMA
                </div>
                <div className="text-xs font-light text-[#867f78]">
                  A company Estancorp · São Paulo
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 bg-[#333333] px-6 py-4">
              <img
                src={PULSO_ASSETS.awards.michelinKey}
                alt="Michelin Key"
                className="h-10 w-auto object-contain"
              />
              <img
                src={PULSO_ASSETS.awards.archello}
                alt="Archello Awards 2024 Winner"
                className="h-10 w-auto object-contain"
              />
              <img
                src={PULSO_ASSETS.awards.preferredHotels}
                alt="Preferred Hotels & Resorts LVX"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Middle Columns: Newsletter, Address, Reservation Center, Reception */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Newsletter */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold uppercase tracking-[1.6px] text-[#867f78]">
                newsletter
              </div>
              <p className="text-sm font-light">
                Receive news and offers from Pulso Hotel in your inbox.
              </p>
              {newsletterSent ? (
                <div className="p-3 bg-[#47614d] text-[#f7f7f2] text-xs">
                  Thank you, we&apos;ve already received your email!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSent(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 border border-[#333333]/30 bg-transparent px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#333333]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#333333] text-[#f7f7f2] text-xs uppercase tracking-[1.6px] cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* More about the pulse */}
            <div className="lg:col-span-2 space-y-2.5 text-xs">
              <div className="font-bold uppercase tracking-[1.6px] text-[#867f78] mb-3">
                More about the pulse
              </div>
              <a href="#hotel" className="block hover:underline">Who we are</a>
              <a href="#accommodations" className="block hover:underline">Perguntas Frequentes</a>
              <a href="#wellness" className="block hover:underline">Accessibility</a>
              <a href="#contact" className="block hover:underline">Privacy Policy</a>
            </div>

            {/* Reservation Center */}
            <div className="lg:col-span-3 space-y-2 text-xs">
              <div className="font-bold uppercase tracking-[1.6px] text-[#867f78] mb-3">
                RESERVATION CENTER
              </div>
              <p className="font-medium">São Paulo Capital: +55 (11) 3035 3070</p>
              <p className="font-medium">Other locations: +55 (11) 0800 726 1500</p>
              <a
                href="mailto:reservas.fl@pulsohotel.com.br"
                className="block text-[#867f78] hover:text-[#333333] underline pt-1"
              >
                reservas.fl@pulsohotel.com.br
              </a>
              <a
                href="mailto:eventos@pulsohotel.com.br"
                className="block text-[#867f78] hover:text-[#333333] underline"
              >
                eventos@pulsohotel.com.br
              </a>
            </div>

            {/* Reception & Social */}
            <div className="lg:col-span-3 space-y-2 text-xs">
              <div className="font-bold uppercase tracking-[1.6px] text-[#867f78] mb-3">
                reception &amp; address
              </div>
              <p>R. Henrique Monteiro, 154 — Pinheiros, SP</p>
              <p>+55 (11) 3035-3070</p>
              <a
                href="mailto:recepcao.fl@pulsohotel.com.br"
                className="block text-[#867f78] hover:text-[#333333] underline"
              >
                recepcao.fl@pulsohotel.com.br
              </a>
              <div className="flex items-center gap-4 pt-3 font-bold uppercase tracking-[1.6px]">
                <a
                  href="https://wa.me/551130353070"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#d9b57d]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#d9b57d]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#333333]/10 flex flex-wrap items-center justify-between text-xs text-[#867f78]">
            <span>© 2025 Pulso Hotel — All rights reserved.</span>
            <span>A company Estancorp</span>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: ROOM DETAILS LIGHTBOX
      ====================================================================== */}
      {selectedRoomDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f7f7f2] text-[#333333] max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedRoomDetail(null)}
              className="absolute top-6 right-6 w-9 h-9 border border-[#333333]/25 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#867f78]">
              {selectedRoomDetail.size} · {selectedRoomDetail.bed}
            </span>
            <h3 className="text-3xl font-light mt-1 mb-4">{selectedRoomDetail.title}</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {selectedRoomDetail.images.slice(0, 2).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-48 object-cover"
                />
              ))}
            </div>
            <p className="text-sm font-light leading-relaxed mb-6">
              {selectedRoomDetail.description}
            </p>
            <ul className="space-y-2 mb-8">
              {selectedRoomDetail.highlights.map((h, i) => (
                <li key={i} className="text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#47614d]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const title = selectedRoomDetail.title;
                setSelectedRoomDetail(null);
                handleOpenBooking(title);
              }}
              className="w-full py-4 bg-[#333333] text-[#f7f7f2] text-xs font-bold uppercase tracking-[1.6px] cursor-pointer"
            >
              Reserve {selectedRoomDetail.title} ({selectedRoomDetail.rate})
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: ESTÚDIO PULSO TICKETS MODAL
      ====================================================================== */}
      {selectedTicketEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f7f7f2] text-[#333333] max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedTicketEvent(null)}
              className="absolute top-5 right-5 w-8 h-8 border border-[#333333]/25 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-[1.6px] text-[#867f78]">
              {selectedTicketEvent.series} · {selectedTicketEvent.dateBadge}
            </span>
            <h3 className="text-xl font-medium mt-1 mb-3">{selectedTicketEvent.title}</h3>
            <p className="text-xs font-light text-[#333333]/80 mb-6">
              {selectedTicketEvent.description}
            </p>
            <div className="p-4 bg-[#cbc0ad]/25 mb-6 flex items-center justify-between text-xs">
              <span>{selectedTicketEvent.venue}</span>
              <strong className="text-sm">{selectedTicketEvent.price} / seat</strong>
            </div>
            <button
              onClick={() => {
                const title = `Ticket: ${selectedTicketEvent.title}`;
                setSelectedTicketEvent(null);
                handleOpenBooking(title);
              }}
              className="w-full py-3.5 bg-[#333333] text-[#f7f7f2] text-xs font-bold uppercase tracking-[1.6px] cursor-pointer"
            >
              Proceed to Table &amp; Ticket Reservation
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: RESERVATION ENGINE MODAL
      ====================================================================== */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f7f7f2] text-[#333333] max-w-lg w-full p-6 sm:p-10 relative border border-[#333333]">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 border border-[#333333]/25 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-[#47614d] text-[#f7f7f2] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-light">Reservation Request Confirmed</h3>
                <p className="text-xs font-light text-[#333333]/80 leading-relaxed">
                  Our Reservation Center at <strong>Pulso Hotel Faria Lima</strong> has received your request for <strong>{bookingPreset}</strong> ({checkInDate} to {checkOutDate}).
                </p>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-8 py-3 bg-[#333333] text-[#f7f7f2] text-xs uppercase tracking-[1.6px] cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingConfirmed(true);
                }}
                className="space-y-4"
              >
                <span className="text-[10px] font-bold uppercase tracking-[1.6px] text-[#867f78]">
                  Pulso Hotel Faria Lima · São Paulo
                </span>
                <h3 className="text-2xl font-light">Make your reservation</h3>

                <div>
                  <label className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78] mb-1">
                    Selection
                  </label>
                  <input
                    type="text"
                    value={bookingPreset}
                    onChange={(e) => setBookingPreset(e.target.value)}
                    className="w-full border border-[#333333]/30 bg-white px-3.5 py-2.5 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78] mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full border border-[#333333]/30 bg-white px-3 py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78] mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full border border-[#333333]/30 bg-white px-3 py-2 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Henrique Almeida"
                    className="w-full border border-[#333333]/30 bg-white px-3.5 py-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[1.6px] text-[#867f78] mb-1">
                    Email / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+55 (11) 99999-0000"
                    className="w-full border border-[#333333]/30 bg-white px-3.5 py-2.5 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#333333] hover:bg-[#d9b57d] text-[#f7f7f2] hover:text-[#333333] text-xs font-bold uppercase tracking-[1.6px] transition-colors cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
