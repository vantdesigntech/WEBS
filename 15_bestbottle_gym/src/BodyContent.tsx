import React, { useState, useMemo } from 'react';
import {
  PRODUCTS_LETTERS,
  BUNDLES_LETTERS,
  HERO_COLUMNS,
  GYM_PRODUCTS,
  GYM_BUNDLES,
  CUSTOMIZER_COLORS,
  CUSTOMIZER_SIZES,
  VERIFIED_REVIEWS,
  GYM_CLUB_PARTNERS,
  GYM_FAQS,
  GymProduct,
} from './gymData';

interface CartItem {
  id: string;
  title: string;
  variant: string;
  price: number;
  qty: number;
  image: string;
}

export default function BodyContent() {
  // Navigation & Page tab state ('home' | 'story')
  const [activeTab, setActiveTab] = useState<'home' | 'story'>('home');
  const [bottlesMenuOpen, setBottlesMenuOpen] = useState(false);

  // Hero interactive columns state
  const [hoveredHeroCol, setHoveredHeroCol] = useState<string | null>(null);

  // Product card hover & filter state
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [capacityFilter, setCapacityFilter] = useState<'ALL' | '24 OZ' | '32 OZ'>('ALL');
  const [quickViewProduct, setQuickViewProduct] = useState<GymProduct | null>(null);

  // Cloud Sky Customizer state (aww_hero.png)
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0); // 0 = Khaki (matches aww_hero.png)
  const [selectedSizeIdx, setSelectedSizeIdx] = useState<number>(0); // 0 = 24 OZ, 1 = 32 OZ
  const [customizerSpin, setCustomizerSpin] = useState<boolean>(false);

  // Modals & Drawers
  const [promoModalOpen, setPromoModalOpen] = useState<boolean>(false);
  const [discountUnlocked, setDiscountUnlocked] = useState<boolean>(false);
  const [promoEmail, setPromoEmail] = useState<string>('');
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [trackerOpen, setTrackerOpen] = useState<boolean>(false);
  const [trackingNumber, setTrackingNumber] = useState<string>('BBBG-89421-AU');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Cart items initialized with 1 popular bottle so user can test cart immediately
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'no72-coal-stealth',
      title: 'No.72 Bold - Stealth Coal Gym Shaker',
      variant: '32 OZ / 950ML • Coal',
      price: 34.95,
      qty: 1,
      image: '/assets/bottle-coal.png',
    },
  ]);

  const activeColor = CUSTOMIZER_COLORS[selectedColorIdx];
  const activeSize = CUSTOMIZER_SIZES[selectedSizeIdx];

  const filteredProducts = useMemo(() => {
    if (capacityFilter === 'ALL') return GYM_PRODUCTS;
    return GYM_PRODUCTS.filter((p) => p.capacity.includes(capacityFilter));
  }, [capacityFilter]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0), [cart]);
  const cartSubtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart]
  );
  const freeShippingThreshold = 99;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const addToCart = (item: Omit<CartItem, 'qty'>, openDrawer = true) => {
    setCart((prev) => {
      const idx = prev.findIndex((x) => x.id === item.id && x.variant === item.variant);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    if (openDrawer) {
      setCartOpen(true);
    } else {
      showToast(`Added ${item.title} to Gym Bag`);
    }
  };

  const updateCartQty = (id: string, variant: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const scrollToSection = (id: string) => {
    setBottlesMenuOpen(false);
    if (activeTab !== 'home' && id !== 'our-story-top') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#151515] font-body selection:bg-[#F4D738] selection:text-[#151515]">
      {/* 1. TOP BLACK SHIPPING BAR */}
      <div className="bg-[#151515] text-[#FCFBF7] text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase py-2.5 px-4 border-b border-[#151515] flex items-center justify-center gap-4">
        <span>FREE SHIPPING OVER $99! • 24H ICE-LOCK™ GYM HYDRATION</span>
        <span className="hidden md:inline-block text-[#F4D738]">•</span>
        <button
          onClick={() => setPromoModalOpen(true)}
          className="hidden md:inline-block text-[#F4D738] underline underline-offset-4 hover:text-white transition cursor-pointer"
        >
          CLAIM 15% OFF FIRST DROP
        </button>
      </div>

      {/* 2. STICKY BAUHAUS HEADER */}
      <header className="sticky top-0 z-40 bg-[#FCFBF7]/95 backdrop-blur-md border-b border-[#151515]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left: Geometric Monogram Logo */}
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group cursor-pointer text-left"
            title="Best Bottle Best Gym"
          >
            <img
              src="/assets/logo-bbbc.png"
              alt="BBBG Bauhaus Monogram"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block leading-none">
              <span className="font-display font-bold text-sm tracking-tight block">
                BEST BOTTLE
              </span>
              <span className="font-display text-[11px] tracking-[0.16em] text-[#55534E] block">
                BEST GYM • 316
              </span>
            </div>
          </button>

          {/* Center: White Pill Capsule Navigation (exact match to live_00_top.png & aww_el2.png) */}
          <nav className="relative hidden lg:flex items-center bg-white border border-[#151515]/15 rounded-full px-7 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] gap-7 text-xs font-medium tracking-[0.06em] uppercase">
            <div
              className="relative"
              onMouseEnter={() => setBottlesMenuOpen(true)}
              onMouseLeave={() => setBottlesMenuOpen(false)}
            >
              <button
                onClick={() => scrollToSection('products-section')}
                className="flex items-center gap-1.5 hover:text-[#9B4719] transition cursor-pointer"
              >
                <span>BOTTLES</span>
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Mega Dropdown for Bottles */}
              {bottlesMenuOpen && (
                <div className="absolute left-0 top-full pt-4 w-[540px] z-50">
                  <div className="bg-[#FCFBF7] border-2 border-[#151515] rounded-2xl p-4 shadow-[8px_8px_0px_#151515] grid grid-cols-3 gap-3">
                    {CUSTOMIZER_COLORS.slice(0, 6).map((c, idx) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedColorIdx(idx);
                          setBottlesMenuOpen(false);
                          scrollToSection('customizer-section');
                        }}
                        className="flex items-center gap-2.5 p-2 rounded-xl border border-[#151515]/15 hover:border-[#151515] hover:bg-[#EDEAE2] transition text-left cursor-pointer"
                      >
                        <img src={c.png} alt={c.name} className="w-10 h-12 object-contain" />
                        <div>
                          <div className="font-display font-bold text-xs text-[#151515]">
                            {c.name}
                          </div>
                          <div className="text-[10px] text-[#55534E]">24h Cryo-Lock</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('customizer-section')}
              className="hover:text-[#1E56A0] transition cursor-pointer"
            >
              3D CUSTOMIZER
            </button>
            <button
              onClick={() => scrollToSection('bundles-section')}
              className="hover:text-[#009B4D] transition cursor-pointer"
            >
              SQUAD BUNDLES
            </button>
            <button
              onClick={() => {
                setActiveTab(activeTab === 'story' ? 'home' : 'story');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition cursor-pointer ${
                activeTab === 'story' ? 'underline underline-offset-4 font-bold' : 'hover:opacity-70'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('partners-section')}
              className="hover:opacity-70 transition cursor-pointer"
            >
              GYM WHOLESALE
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              className="hover:opacity-70 transition cursor-pointer"
            >
              FAQS
            </button>
          </nav>

          {/* Right: Circular Utility Buttons + Black Cart Pill */}
          <div className="flex items-center gap-2.5">
            {/* Dropship Order Tracker Button */}
            <button
              onClick={() => setTrackerOpen(true)}
              className="w-10 h-10 rounded-full border border-[#151515]/20 bg-white flex items-center justify-center hover:border-[#151515] transition cursor-pointer"
              title="Track Express Gym Order"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Quick Customizer Jump / Search Button */}
            <button
              onClick={() => scrollToSection('customizer-section')}
              className="w-10 h-10 rounded-full border border-[#151515]/20 bg-white flex items-center justify-center hover:border-[#151515] transition cursor-pointer"
              title="Customize Bottle Color"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M21 21l-4.35-4.35M16.65 10.8a5.85 5.85 0 11-11.7 0 5.85 5.85 0 0111.7 0z"
                />
              </svg>
            </button>

            {/* Black Cart Pill */}
            <button
              onClick={() => setCartOpen(true)}
              className="h-10 px-5 rounded-full bg-[#151515] text-[#FCFBF7] flex items-center gap-2.5 text-xs font-medium tracking-wide hover:bg-[#272974] transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span>Cart</span>
              <span className="bg-[#F4D738] text-[#151515] font-display font-bold text-[11px] px-1.5 py-0.5 rounded-full leading-none">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* IF USER CLICKED "ABOUT" TAB: Show Dedicated About Page Header first (matching about_00_top.png) */}
      {activeTab === 'story' && (
        <section id="our-story-top" className="bg-[#FCFBF7] pt-14 pb-8 border-b border-[#151515]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="font-display text-sm md:text-base tracking-[0.2em] uppercase mb-4">
              OUR JOURNEY
            </p>
            <h1 className="font-display font-normal text-4xl sm:text-6xl md:text-[74px] leading-[1.03] tracking-[-0.02em] uppercase mb-8">
              BAUHAUS ROOTS. GLOBAL GYM ENGINEERING. BUILT IN MELBOURNE
            </h1>
            <button
              onClick={() => setActiveTab('home')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#151515] text-xs font-display uppercase tracking-widest hover:bg-[#151515] hover:text-white transition cursor-pointer"
            >
              ← Back to Full Storefront
            </button>
          </div>
        </section>
      )}

      {/* 3. HERO SECTION: BAUHAUS MOSAIC + 4 INTERACTIVE COLOR COLUMNS (live_00_top.png + live_01_y750.png) */}
      <section className="relative bg-[#FCFBF7] overflow-hidden">
        {/* Top Hero Title & Subtle Bauhaus Pattern */}
        <div className="relative pt-10 pb-12 px-4 sm:px-8 border-b border-[#151515]">
          {/* Subtle geometric background pattern from Cover_5.svg */}
          <div
            className="absolute inset-x-0 bottom-0 h-44 opacity-[0.07] pointer-events-none bg-repeat-x bg-bottom"
            style={{ backgroundImage: "url('/assets/Cover_5.svg')", backgroundSize: '640px auto' }}
          />

          <div className="max-w-[1440px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDEAE2] border border-[#151515]/20 text-[11px] font-display uppercase tracking-[0.14em] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#009B4D]" />
              <span>316 SURGICAL STEEL • ZERO HUMAN PHOTOS • PURE BAUHAUS HARDWARE</span>
            </div>

            <h1 className="font-display font-normal text-[34px] sm:text-[56px] lg:text-[68px] leading-[1.04] tracking-[-0.02em] uppercase max-w-5xl mx-auto">
              VACUUM INSULATED GYM BOTTLES IN BAUHAUS GEOMETRY
            </h1>
          </div>
        </div>

        {/* 4 Interactive Primary-Colored Bottle Columns (Yellow, Pink, Green, Cream) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#151515]">
          {HERO_COLUMNS.map((col, idx) => {
            const isHovered = hoveredHeroCol === col.id;
            return (
              <div
                key={col.id}
                onMouseEnter={() => setHoveredHeroCol(col.id)}
                onMouseLeave={() => setHoveredHeroCol(null)}
                className={`relative min-h-[430px] sm:min-h-[490px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
                  idx < 3 ? 'border-b lg:border-b-0 sm:border-r border-[#151515]' : ''
                }`}
                style={{ backgroundColor: col.bg }}
              >
                {/* Top Geometric Bauhaus Emblem (matching live_01_y750.png top cutoffs) */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full bg-[#FCFBF7]/85 border border-[#151515]">
                    {col.code}
                  </span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: col.id,
                        title: col.title,
                        variant: '24 OZ / 710ML',
                        price: col.price,
                        image: col.png,
                      })
                    }
                    className="w-9 h-9 rounded-full bg-[#FCFBF7] border border-[#151515] flex items-center justify-center font-display text-lg hover:bg-[#151515] hover:text-white transition cursor-pointer"
                    title={`Quick add ${col.title}`}
                  >
                    +
                  </button>
                </div>

                {/* Center Bottle Render (swaps PNG to 360° GIF on hover) */}
                <div className="relative my-4 flex items-center justify-center h-64">
                  {/* Decorative Bauhaus Arch Behind Bottle */}
                  <div
                    className="w-40 h-40 rounded-full opacity-20 transition-transform duration-500"
                    style={{
                      backgroundColor: col.accentShape,
                      transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                    }}
                  />
                  <img
                    src={isHovered ? col.gif : col.png}
                    alt={col.title}
                    className="absolute inset-0 m-auto h-60 w-auto object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.22)] transition-transform duration-300"
                    style={{ transform: isHovered ? 'scale(1.07) translateY(-4px)' : 'scale(1)' }}
                  />
                </div>

                {/* Bottom Spec Bar */}
                <div className="bg-[#FCFBF7]/90 backdrop-blur-sm border border-[#151515] rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm uppercase">{col.title}</div>
                    <div className="text-[11px] text-[#55534E]">{col.spec}</div>
                  </div>
                  <span className="font-display font-bold text-sm">${col.price.toFixed(2)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BAUHAUS YELLOW MARQUEE BANNER (live_01_y750.png) */}
      <div className="bg-[#F4D738] border-b border-[#151515] py-3.5 overflow-hidden">
        <div className="animate-bbbc-marquee flex items-center">
          {[0, 1].map((loopIdx) => (
            <div key={loopIdx} className="flex items-center shrink-0">
              {[
                '24H SUB-ZERO ICE-LOCK™ VACUUM INSULATION',
                'FROM HEAVY DEADLIFTS TO HYROX TURF SESSIONS',
                '316 MEDICAL-GRADE STAINLESS STEEL INTERIOR',
                'ZERO SWEAT POWDER-COAT CHALK GRIP',
                'FAST 24H DISPATCH • FREE SHIPPING OVER $99',
              ].map((phrase, i) => (
                <div key={i} className="flex items-center mx-7">
                  <span className="font-display text-sm sm:text-base tracking-[0.08em] uppercase text-[#151515]">
                    {phrase}
                  </span>
                  {/* Bauhaus Semi-Circle + Dot Icon (exact match to live_01_y750.png) */}
                  <span className="ml-7 inline-flex flex-col items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#151515] mb-0.5" />
                    <span className="w-4 h-2 rounded-t-full bg-[#151515]" />
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE FLIP-LETTER "PRODUCTS" BAUHAUS GRID (aww_el2.png + live_01_y750.png) */}
      <section id="products-section" className="bg-[#FCFBF7] border-b border-[#151515]">
        {/* Row 1 + Row 2 Letter Flip Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border-b border-[#151515]">
          {/* First 5 Tiles: [↓] [P] [R] [O] [D] */}
          {PRODUCTS_LETTERS.slice(0, 5).map((tile, i) => (
            <div
              key={i}
              className="letter-tile aspect-square border-r border-b border-[#151515] flex items-center justify-center cursor-pointer bg-[#FCFBF7]"
            >
              <img
                src={tile.frontImg}
                alt={tile.char}
                className="img-front w-full h-full object-cover"
              />
              <img
                src={tile.flipImg}
                alt={`${tile.char} Bauhaus`}
                className="img-flip w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Top-Right 3-Column Technical Showcase Cell (replaces cafe shelf photo with 100% non-human Cryo-Lock Bottle Lineup) */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3 border-b border-[#151515] bg-[#EDEAE2] p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-[#151515] text-[#F4D738] rounded">
                CRYO-LOCK™ LAB RACK // 0% CONDENSATION
              </span>
              <span className="font-display text-xs font-bold text-[#009B4D]">● -2.4°C CORE</span>
            </div>

            <div className="my-2 flex items-center justify-around gap-2 z-10 py-2">
              {CUSTOMIZER_COLORS.slice(0, 5).map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedColorIdx(idx);
                    scrollToSection('customizer-section');
                  }}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <img
                    src={c.png}
                    alt={c.name}
                    className="h-24 sm:h-28 w-auto object-contain group-hover:-translate-y-2 transition-transform"
                  />
                  <span className="text-[10px] font-display uppercase mt-1 text-[#151515]/70 group-hover:text-[#151515]">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#55534E] border-t border-[#151515]/15 pt-2 z-10">
              <span>DOUBLE-WALL COPPER VACUUM SHIELD</span>
              <span className="font-display font-bold text-[#151515]">7 BAUHAUS FINISHES →</span>
            </div>
          </div>

          {/* Second Row Left: Non-Human Bauhaus Geometric Architecture Poster (replaces human portrait in aww_el2.png) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 row-span-2 border-r border-[#151515] bg-[#151515] text-[#FCFBF7] p-6 flex flex-col justify-between relative overflow-hidden">
            <img
              src="/assets/Illus-1.svg"
              alt="Bauhaus Geometric Architecture"
              className="w-full h-44 object-contain my-auto"
            />
            <div className="mt-4 pt-4 border-t border-white/15">
              <div className="font-display text-xs uppercase tracking-[0.18em] text-[#F4D738] mb-1">
                ARCHITECTURAL HYDRATION
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Engineered with zero plastic taste, magnetic chug caps, and scratch-proof Bauhaus
                powder coating for daily heavy training.
              </p>
            </div>
          </div>

          {/* Remaining 4 Letter Tiles: [U] [C] [T] [S] */}
          {PRODUCTS_LETTERS.slice(5, 9).map((tile, i) => (
            <div
              key={i}
              className="letter-tile aspect-square border-r border-b border-[#151515] flex items-center justify-center cursor-pointer bg-[#FCFBF7]"
            >
              <img
                src={tile.frontImg}
                alt={tile.char}
                className="img-front w-full h-full object-cover"
              />
              <img
                src={tile.flipImg}
                alt={`${tile.char} Bauhaus`}
                className="img-flip w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Right Filler Cell on Row 2 */}
          <div className="col-span-2 lg:col-span-2 border-b border-[#151515] bg-[#FCFBF7] p-6 flex flex-col justify-center">
            <div className="font-display text-xs uppercase tracking-[0.14em] text-[#55534E] mb-2">
              FILTER BY CAPACITY
            </div>
            <div className="flex flex-wrap gap-2">
              {(['ALL', '24 OZ', '32 OZ'] as const).map((cap) => (
                <button
                  key={cap}
                  onClick={() => setCapacityFilter(cap)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase border border-[#151515] transition cursor-pointer ${
                    capacityFilter === cap
                      ? 'bg-[#151515] text-[#F4D738]'
                      : 'bg-white text-[#151515] hover:bg-[#EDEAE2]'
                  }`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3 Strip (matches bottom of aww_el2.png & live_02_y1500.png with Scroll More [→] button) */}
          <div className="col-span-2 sm:col-span-6 lg:col-span-6 bg-[#FCFBF7] px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/assets/logo_sub.svg" alt="Bauhaus Shapes" className="h-7 w-auto" />
              <span className="text-xs sm:text-sm font-medium text-[#55534E]">
                Hover any bottle to inspect <strong>360° Spin</strong> or click <strong>+</strong>{' '}
                for instant gym bag checkout.
              </span>
            </div>

            <button
              onClick={() => scrollToSection('product-grid-5050')}
              className="flex items-center gap-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer group shrink-0"
            >
              <span>Scroll More</span>
              <span className="w-9 h-9 bg-[#E85C25] text-white flex items-center justify-center border border-[#151515] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* 6. 50/50 FULL-BLEED PRODUCT CARDS GRID (exact match to live_02_y1500.png) */}
        <div id="product-grid-5050" className="grid grid-cols-1 md:grid-cols-2">
          {filteredProducts.map((product, idx) => {
            const isHovered = hoveredProductId === product.id;
            const isLightText = product.textColor === 'light';
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className={`relative min-h-[560px] sm:min-h-[640px] p-7 sm:p-12 flex flex-col justify-between overflow-hidden border-b border-[#151515] ${
                  idx % 2 === 0 ? 'md:border-r border-[#151515]' : ''
                }`}
                style={{ backgroundColor: product.bgColor }}
              >
                {/* Bottom Bauhaus Geometric Watermark Pattern (exact match to live_02_y1500.png & live_04_y3000.png) */}
                <div
                  className="absolute inset-x-0 bottom-0 h-48 opacity-15 pointer-events-none bg-repeat-x bg-bottom"
                  style={{
                    backgroundImage: "url('/assets/Cover_5.svg')",
                    backgroundSize: '520px auto',
                  }}
                />

                {/* Top Header of Product Card */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="max-w-md">
                    {/* Checkmark circle + Spec Tag */}
                    <div
                      className={`flex items-center gap-2 text-xs sm:text-sm font-medium mb-3 ${
                        isLightText ? 'text-[#FCFBF7]/85' : 'text-[#151515]/80'
                      }`}
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none">
                        <circle
                          cx="10"
                          cy="10"
                          r="8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6.5 10.2L8.9 12.6L13.8 7.7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{product.tag}</span>
                    </div>

                    {/* Large Helvetica Now Display Product Title */}
                    <h2
                      className={`font-display font-normal text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] ${
                        isLightText ? 'text-[#FCFBF7]' : 'text-[#151515]'
                      }`}
                    >
                      {product.title}
                    </h2>
                  </div>

                  {/* Top-Right Circular '+' Button (exact match to live_02_y1500.png) */}
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        title: product.title,
                        variant: product.capacity,
                        price: product.price,
                        image: product.png,
                      })
                    }
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FCFBF7] text-[#151515] border border-[#151515] flex items-center justify-center text-2xl font-light hover:bg-[#F4D738] hover:scale-105 transition cursor-pointer shrink-0 shadow-sm"
                    title={`Add ${product.title} to Cart`}
                  >
                    +
                  </button>
                </div>

                {/* Center Product Bottle Image (PNG static -> 360° GIF on hover) */}
                <div
                  onClick={() => setQuickViewProduct(product)}
                  className="relative z-10 my-6 flex items-center justify-center h-72 sm:h-80 cursor-pointer group"
                >
                  {product.badge && (
                    <span className="absolute top-0 left-0 px-3 py-1 rounded-full bg-[#F4D738] text-[#151515] border border-[#151515] font-display font-bold text-[11px] uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={isHovered ? product.gif : product.png}
                    alt={product.title}
                    className="h-full w-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.32)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Card Bar: Price + Capacity + Quick Specs Trigger */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-current/15">
                  <div className={isLightText ? 'text-[#FCFBF7]' : 'text-[#151515]'}>
                    <span className="font-display font-bold text-xl sm:text-2xl">
                      ${product.price.toFixed(2)} AUD
                    </span>
                    <span className="ml-2.5 text-xs line-through opacity-60">
                      ${product.compareAtPrice.toFixed(2)}
                    </span>
                    <span className="block text-xs opacity-80 mt-0.5">
                      {product.capacity} • {product.coldHours}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="px-4 py-2 rounded-full bg-[#FCFBF7]/90 text-[#151515] border border-[#151515] text-xs font-display font-bold uppercase tracking-wider hover:bg-[#F4D738] transition cursor-pointer"
                    >
                      Specs +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. "BUNDLES" INTERACTIVE FLIP-LETTER HEADER + DROPSHIPPING PACKS (live_04_y3000.png & live_05_y3750.png) */}
      <section id="bundles-section" className="bg-[#FCFBF7] border-b border-[#151515]">
        {/* 8-Column Flip-Letter Row: [→] [B] [U] [N] [D] [L] [E] [S] */}
        <div className="grid grid-cols-4 sm:grid-cols-8 border-b border-[#151515]">
          {BUNDLES_LETTERS.map((tile, i) => (
            <div
              key={i}
              className="letter-tile aspect-square border-r border-[#151515] last:border-r-0 flex items-center justify-center cursor-pointer bg-[#FCFBF7]"
            >
              <img
                src={tile.frontImg}
                alt={tile.char}
                className="img-front w-full h-full object-cover"
              />
              <img
                src={tile.flipImg}
                alt={`${tile.char} Flip`}
                className="img-flip w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 50/50 Bundles Cards Row (Rose #A45B63 & Terracotta #9B4719 from live_04_y3000.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#151515]">
          {GYM_BUNDLES.map((bundle, idx) => {
            const isHovered = hoveredProductId === bundle.id;
            return (
              <div
                key={bundle.id}
                onMouseEnter={() => setHoveredProductId(bundle.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className={`relative min-h-[540px] sm:min-h-[600px] p-7 sm:p-12 flex flex-col justify-between overflow-hidden ${
                  idx === 0 ? 'border-b md:border-b-0 md:border-r border-[#151515]' : ''
                }`}
                style={{ backgroundColor: bundle.bgColor }}
              >
                {/* Bauhaus Geometric Watermark at Bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-48 opacity-15 pointer-events-none bg-repeat-x bg-bottom"
                  style={{
                    backgroundImage: "url('/assets/Cover_5.svg')",
                    backgroundSize: '520px auto',
                  }}
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#151515]/85 mb-2.5">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none">
                        <circle
                          cx="10"
                          cy="10"
                          r="8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6.5 10.2L8.9 12.6L13.8 7.7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{bundle.tag}</span>
                    </div>
                    <h3 className="font-display font-normal text-3xl sm:text-5xl text-[#151515] tracking-[-0.02em]">
                      {bundle.title}
                    </h3>
                  </div>

                  <button
                    onClick={() =>
                      addToCart({
                        id: bundle.id,
                        title: bundle.title,
                        variant: bundle.capacity,
                        price: bundle.price,
                        image: bundle.png,
                      })
                    }
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FCFBF7] text-[#151515] border border-[#151515] flex items-center justify-center text-2xl hover:bg-[#F4D738] transition cursor-pointer shrink-0"
                    title={`Add ${bundle.title}`}
                  >
                    +
                  </button>
                </div>

                <div
                  onClick={() => setQuickViewProduct(bundle)}
                  className="relative z-10 my-6 flex items-center justify-center h-72 sm:h-80 cursor-pointer"
                >
                  {bundle.badge && (
                    <span className="absolute top-0 left-0 px-3 py-1 rounded-full bg-[#F4D738] text-[#151515] border border-[#151515] font-display font-bold text-[11px] uppercase tracking-wider">
                      {bundle.badge}
                    </span>
                  )}
                  <img
                    src={isHovered ? bundle.gif : bundle.png}
                    alt={bundle.title}
                    className="h-full w-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.28)] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#151515]/20">
                  <div>
                    <span className="font-display font-bold text-2xl text-[#151515]">
                      ${bundle.price.toFixed(2)} AUD
                    </span>
                    <span className="ml-2.5 text-sm line-through text-[#151515]/60">
                      ${bundle.compareAtPrice.toFixed(2)}
                    </span>
                    <span className="block text-xs text-[#151515]/80 mt-0.5">
                      {bundle.subtitle}
                    </span>
                  </div>
                  <button
                    onClick={() => setQuickViewProduct(bundle)}
                    className="px-4 py-2 rounded-full bg-[#151515] text-[#FCFBF7] text-xs font-display uppercase tracking-wider hover:bg-[#F4D738] hover:text-[#151515] transition cursor-pointer"
                  >
                    Inspect Pack +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Split CTA Row: "More Hydration Awaits" (#EDEAE2) + Pop-Art Illustration (#40A4B8) (exact match to live_05_y3750.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#EDEAE2] p-10 sm:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#151515]">
            <h3 className="font-display font-normal text-4xl sm:text-5xl text-[#151515] tracking-[-0.02em] mb-4">
              More Gym Gear Awaits
            </h3>
            <p className="text-sm sm:text-base text-[#55534E] max-w-md mb-8 leading-relaxed">
              We’ve got spare magnetic chug lids, silicone barbell-bumper boots, and custom laser-etched
              club editions waiting for your next personal record.
            </p>
            <div>
              <button
                onClick={() => scrollToSection('customizer-section')}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#151515] text-[#FCFBF7] text-sm font-display font-medium hover:bg-[#272974] transition cursor-pointer"
              >
                <span>Explore Customizer</span>
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          </div>

          <div className="bg-[#40A4B8] relative min-h-[380px] sm:min-h-[440px] overflow-hidden flex items-center justify-center">
            <img
              src="/assets/banner-illustration.webp"
              alt="Bauhaus Pop Art Vessel Illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 right-5 bg-[#FCFBF7] border-2 border-[#151515] px-4 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider shadow-[4px_4px_0px_#151515]">
              LIFT HEAVY • SIP ICE COLD
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOUD SKY INTERACTIVE BOTTLE CUSTOMIZER (1:1 match to aww_hero.png, aww_el1.png & live_06_y4500.png) */}
      <section
        id="customizer-section"
        className="relative min-h-[760px] lg:min-h-[840px] bg-[#0B4F9F] text-white overflow-hidden flex flex-col justify-between border-b border-[#151515]"
      >
        {/* Cloud Sky Background Image */}
        <img
          src="/assets/featured-background.webp"
          alt="Blue Sky Clouds Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Subtle Bottom Bauhaus Geometric Overlay (visible at bottom of aww_hero.png & live_06_y4500.png) */}
        <div
          className="absolute inset-x-0 bottom-0 h-36 opacity-20 pointer-events-none bg-repeat-x bg-bottom"
          style={{
            backgroundImage: "url('/assets/Cover_5.svg')",
            backgroundSize: '480px auto',
            filter: 'invert(1)',
          }}
        />

        {/* Main 3-Column Customizer Stage */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-12 py-16 lg:py-24 my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title, Bauhaus Mini-Logo + Price, Yellow "See more +" Pill + White Cart Circle */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-[11px] font-display uppercase tracking-[0.16em]">
              <span>INTERACTIVE GYM CUSTOMIZER</span>
            </div>

            <h2 className="font-display font-normal text-5xl sm:text-6xl leading-[1.02] tracking-[-0.02em]">
              Reusable Gym Bottle
            </h2>

            {/* Colorful Bauhaus Mini-Logo + Price (exact match to aww_hero.png) */}
            <div className="flex items-center gap-4 pt-1">
              <img
                src="/assets/logo_sub.svg"
                alt="BBBG Bauhaus Color Shapes"
                className="h-7 w-auto object-contain"
              />
              <span className="text-white/60">•</span>
              <span className="font-display font-medium text-xl sm:text-2xl tracking-tight">
                ${activeSize.price.toFixed(2)} AUD
              </span>
            </div>

            <p className="text-sm text-white/85 max-w-sm leading-relaxed">
              Color: <strong className="text-[#F4D738]">{activeColor.name}</strong> ({activeSize.label}).{' '}
              {activeSize.dimensions}.
            </p>

            {/* Yellow "See more +" Button & Circular White Cart Icon Button */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() =>
                  setQuickViewProduct({
                    id: `custom-${activeColor.id}-${activeSize.id}`,
                    code: `BBBG-${activeColor.name.toUpperCase()}`,
                    tag: '316 Surgical Stainless • 24H Cryo-Lock™ Vacuum',
                    title: `BBBG ${activeColor.name} Gym Bottle (${activeSize.badge}oz)`,
                    subtitle: activeSize.label,
                    price: activeSize.price,
                    compareAtPrice: activeSize.compareAt,
                    bgColor: activeColor.hex,
                    textColor: 'light',
                    png: activeColor.png,
                    gif: activeColor.gif,
                    capacity: activeSize.label,
                    coldHours: '24 Hours Sub-Zero',
                    hotHours: '12 Hours Hot',
                    steelGrade: '316 Surgical Stainless Steel',
                    lidType: 'Dual Chug + Flip-Straw Gym Cap',
                    specs: [
                      activeSize.dimensions,
                      'Sweat-proof matte powder coat finish',
                      'Zero metallic aftertaste electropolished interior',
                      '100% leak-proof locking flip cap',
                    ],
                    description:
                      'Customized directly in our interactive cloud studio. Built to endure daily heavy barbell sessions while keeping ice solid all day.',
                  })
                }
                className="h-12 px-7 rounded-full bg-[#F4D738] text-[#151515] font-display font-medium text-sm flex items-center gap-2.5 hover:bg-[#ffe44d] hover:scale-105 transition cursor-pointer shadow-lg"
              >
                <span>See more</span>
                <span className="text-lg leading-none">+</span>
              </button>

              <button
                onClick={() =>
                  addToCart({
                    id: `custom-${activeColor.id}-${activeSize.id}`,
                    title: `Reusable Gym Bottle (${activeColor.name})`,
                    variant: activeSize.label,
                    price: activeSize.price,
                    image: activeColor.png,
                  })
                }
                className="w-12 h-12 rounded-full bg-white text-[#151515] flex items-center justify-center hover:bg-[#F4D738] hover:scale-105 transition cursor-pointer shadow-lg"
                title="Add Customized Bottle to Cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-4h.01"
                  />
                </svg>
              </button>

              <button
                onClick={() => setCustomizerSpin(!customizerSpin)}
                className={`h-12 px-4 rounded-full border text-xs font-display uppercase tracking-wider transition cursor-pointer ${
                  customizerSpin
                    ? 'bg-white text-[#151515] border-white'
                    : 'bg-white/10 text-white border-white/40 hover:bg-white/20'
                }`}
              >
                {customizerSpin ? '360° Spin: ON' : '360° Spin'}
              </button>
            </div>
          </div>

          {/* Center Column: Thin White Glass Frame with Floating Bottle (exact match to aww_hero.png) */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div
              onClick={() => setCustomizerSpin(!customizerSpin)}
              className="relative w-full max-w-[370px] h-[460px] sm:h-[510px] border border-white/65 bg-white/[0.04] backdrop-blur-[2px] flex flex-col items-center justify-center p-8 cursor-pointer group"
              title="Click to toggle 360° spin"
            >
              <img
                src={customizerSpin ? activeColor.gif : activeColor.png}
                alt={`BBBG ${activeColor.name} Bottle`}
                className="h-[360px] sm:h-[400px] w-auto object-contain animate-float-bottle drop-shadow-[0_28px_36px_rgba(0,0,0,0.45)] transition-all duration-300"
              />
              <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] font-display uppercase tracking-widest text-white/75">
                <span>{activeColor.stockNote}</span>
                <span>{customizerSpin ? '● 360° ACTIVE' : 'CLICK TO SPIN ↻'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: COLOR & SIZE Selectors (exact match to aww_hero.png & aww_el1.png) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-10 sm:gap-12">
            {/* COLOR LIST */}
            <div>
              <div className="font-display text-xs uppercase tracking-[0.14em] text-white/80 mb-4">
                COLOR:
              </div>
              <div className="space-y-2.5">
                {CUSTOMIZER_COLORS.map((color, idx) => {
                  const isSelected = idx === selectedColorIdx;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColorIdx(idx)}
                      className="flex items-center gap-3 group text-left cursor-pointer w-full"
                    >
                      {/* Left pointer arrow (visible on active color in aww_hero.png) */}
                      <span
                        className={`text-sm transition-all ${
                          isSelected
                            ? 'opacity-100 translate-x-0 text-white'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-50'
                        }`}
                      >
                        →
                      </span>

                      {/* Rounded Square Color Swatch */}
                      <span
                        className={`w-6 h-6 rounded-md border transition-transform ${
                          isSelected
                            ? 'border-white scale-110 shadow-[0_0_0_2px_rgba(255,255,255,0.35)]'
                            : 'border-white/60 group-hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />

                      <span
                        className={`font-display text-sm tracking-wide transition ${
                          isSelected ? 'text-white font-bold' : 'text-white/65 group-hover:text-white'
                        }`}
                      >
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SIZE LIST */}
            <div>
              <div className="font-display text-xs uppercase tracking-[0.14em] text-white/80 mb-4">
                SIZE:
              </div>
              <div className="space-y-3">
                {CUSTOMIZER_SIZES.map((sz, idx) => {
                  const isSelected = idx === selectedSizeIdx;
                  return (
                    <button
                      key={sz.id}
                      onClick={() => setSelectedSizeIdx(idx)}
                      className="flex items-center gap-3 group text-left cursor-pointer"
                    >
                      <span
                        className={`text-sm transition-all ${
                          isSelected
                            ? 'opacity-100 translate-x-0 text-white'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-50'
                        }`}
                      >
                        →
                      </span>

                      <span
                        className={`w-7 h-7 rounded-md border flex items-center justify-center font-display text-xs font-bold transition ${
                          isSelected
                            ? 'bg-[#151515] text-white border-white'
                            : 'bg-[#151515]/50 text-white/75 border-white/50 group-hover:border-white'
                        }`}
                      >
                        {sz.badge}
                      </span>

                      <span
                        className={`font-display text-sm tracking-wide transition ${
                          isSelected ? 'text-white font-bold' : 'text-white/65 group-hover:text-white'
                        }`}
                      >
                        {sz.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BAUHAUS PHILOSOPHY & 3 SEMICIRCULAR ARCHES SECTION (exact match to aww_el3.png, about_00_top.png & about_01_mid.png) */}
      <section className="relative bg-[#FCFBF7] py-20 sm:py-28 border-b border-[#151515] overflow-hidden">
        {/* Decorative Black Semicircle Side Fins + White Arch Showcase (from about_00_top.png & about_01_mid.png) */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 mb-20">
          <div className="relative flex items-center justify-center">
            {/* Left Black Semicircle Fins */}
            <div className="hidden lg:flex items-center absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-16 h-56 bg-[#151515] rounded-l-full" />
              <div className="w-28 h-72 bg-[#151515] rounded-l-full" />
            </div>

            {/* Center White Rounded Capsule Showcase */}
            <div className="bg-white border border-[#151515]/15 rounded-[140px] px-8 sm:px-16 py-12 max-w-2xl w-full text-center shadow-sm relative z-10">
              <span className="text-[11px] font-display uppercase tracking-[0.18em] text-[#55534E] block mb-2">
                Crafted by BBBG Thermal Lab
              </span>
              <div className="flex items-center justify-center gap-6 my-4">
                <img
                  src={activeColor.png}
                  alt="BBBG Hero Vessel"
                  className="h-52 sm:h-60 w-auto object-contain drop-shadow-xl"
                />
                <div className="text-left space-y-2 hidden sm:block">
                  <div className="font-display font-bold text-2xl uppercase">CRYO-LOCK™ 316</div>
                  <div className="text-xs text-[#55534E] max-w-[210px]">
                    Double-wall vacuum + electrolytic copper shield keeps hydration ice-cold through
                    the toughest hypertrophy blocks.
                  </div>
                  <div className="pt-2 flex gap-2">
                    <span className="px-2.5 py-1 bg-[#F4D738] text-[#151515] font-display font-bold text-[10px] rounded uppercase">
                      24H COLD
                    </span>
                    <span className="px-2.5 py-1 bg-[#151515] text-white font-display font-bold text-[10px] rounded uppercase">
                      12H HOT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Black Semicircle Fins */}
            <div className="hidden lg:flex items-center absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-28 h-72 bg-[#151515] rounded-r-full" />
              <div className="w-16 h-56 bg-[#151515] rounded-r-full" />
            </div>
          </div>
        </div>

        {/* Center Story Copy + 3 Iconic Bauhaus Polychrome Arches (exact match to aww_el3.png) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-display font-normal text-3xl sm:text-5xl uppercase tracking-[-0.02em] mb-5">
            WE JUST LOVE COLD HYDRATION
          </h2>
          <p className="text-sm sm:text-base text-[#55534E] max-w-2xl mx-auto leading-relaxed mb-16">
            At Best Bottle Best Gym, we believe an ice-cold sip between heavy sets is a ritual. It
            sharpens focus, fuels personal records, and connects lifters, runners, and athletes who
            refuse lukewarm plastic shakers.
          </p>

          {/* 3 Bauhaus Semicircular Arches Grid (PEOPLE / WORK / CHANGE from aww_el3.png) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10">
            {/* Arch 1: COMMUNITY / PEOPLE (Orange + Green Semicircle) */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 240 125" className="w-60 h-32 mb-6 overflow-visible">
                {/* Left half orange, right half green */}
                <path d="M 10 120 A 110 110 0 0 1 120 10 L 120 120 Z" fill="#E87825" />
                <path d="M 120 10 A 110 110 0 0 1 230 120 L 120 120 Z" fill="#009B4D" />
                {/* Inner black semicircle base */}
                <path d="M 92 120 A 28 28 0 0 1 148 120 Z" fill="#151515" />
                {/* Yellow circle with white lower half */}
                <circle cx="120" cy="72" r="20" fill="#F4D738" />
                <path d="M 108 72 A 12 12 0 0 0 132 72 Z" fill="#FCFBF7" />
              </svg>
              <h3 className="font-display font-medium text-xl uppercase tracking-wide mb-2">
                ATHLETES
              </h3>
              <p className="text-xs sm:text-sm text-[#55534E] max-w-xs leading-relaxed">
                We value every lifter, runner, and coach pushing their limits—from garage racks to
                commercial strength floors.
              </p>
            </div>

            {/* Arch 2: WORK (Yellow + Navy Semicircle with Concentric Rings) */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 240 125" className="w-60 h-32 mb-6 overflow-visible">
                <path d="M 10 120 A 110 110 0 0 1 120 10 L 120 120 Z" fill="#F4D738" />
                <path d="M 120 10 A 110 110 0 0 1 230 120 L 120 120 Z" fill="#272974" />
                {/* Concentric target circles */}
                <circle cx="120" cy="78" r="42" fill="#151515" />
                <circle cx="120" cy="78" r="28" fill="#272974" />
                <circle cx="120" cy="78" r="15" fill="#FCFBF7" />
                <path d="M 90 120 A 30 30 0 0 1 150 120 Z" fill="#E87825" />
              </svg>
              <h3 className="font-display font-medium text-xl uppercase tracking-wide mb-2">
                WORK
              </h3>
              <p className="text-xs sm:text-sm text-[#55534E] max-w-xs leading-relaxed">
                We value the daily discipline it takes to build strength, hit macros, and engineer
                bottles that never leak or sweat.
              </p>
            </div>

            {/* Arch 3: CHANGE (Crimson + Pink Semicircle with Dual Discs) */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 240 125" className="w-60 h-32 mb-6 overflow-visible">
                <path d="M 10 120 A 110 110 0 0 1 120 10 L 120 120 Z" fill="#D9232E" />
                <path d="M 120 10 A 110 110 0 0 1 230 120 L 120 120 Z" fill="#F396A6" />
                {/* Left orange/black circle */}
                <path d="M 72 68 A 24 24 0 0 1 120 68 Z" fill="#E87825" />
                <path d="M 72 68 A 24 24 0 0 0 120 68 Z" fill="#151515" />
                {/* Right green/yellow target circle */}
                <circle cx="144" cy="68" r="26" fill="#009B4D" />
                <circle cx="144" cy="68" r="14" fill="#F4D738" />
              </svg>
              <h3 className="font-display font-medium text-xl uppercase tracking-wide mb-2">
                CHANGE
              </h3>
              <p className="text-xs sm:text-sm text-[#55534E] max-w-xs leading-relaxed">
                Replacing single-use gym plastics with surgical-grade 316 steel vessels built to
                last a lifetime of training cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE 5.0 ★ VERIFIED REVIEWS SECTION (live_06_y4500.png & live_07_y5250.png — ZERO HUMAN FACES) */}
      <section className="bg-[#FCFBF7] py-16 px-4 sm:px-8 border-b border-[#151515]">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Summary Pill Bar */}
          <div className="bg-[#F4F3EF] border border-[#151515]/10 rounded-2xl p-5 sm:px-8 flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#151515] text-[#F4D738] flex items-center justify-center font-display font-bold text-sm">
                BBBG
              </div>
              <div>
                <div className="font-display font-bold text-sm sm:text-base">
                  Best Bottle Best Gym Official Store
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="font-bold text-[#E87825]">5.0</span>
                  <span className="text-[#F4B400] tracking-widest">★★★★★</span>
                  <span className="text-[#55534E]">553 verified gym reviews on</span>
                  <span className="font-bold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => showToast('Verified buyer review form opened!')}
              className="px-5 py-2.5 rounded-xl bg-white border border-[#151515]/15 text-xs font-display font-medium hover:border-[#151515] transition cursor-pointer"
            >
              Leave a Review
            </button>
          </div>

          {/* 4 Review Cards Grid (Monogram Avatars + Bottle Product Thumbnails — ZERO human faces) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VERIFIED_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#F4F3EF] border border-[#151515]/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full text-white font-display font-bold text-xs flex items-center justify-center"
                        style={{ backgroundColor: rev.avatarBg }}
                      >
                        {rev.initials}
                      </div>
                      <div>
                        <div className="font-display font-bold text-xs">{rev.author}</div>
                        <div className="text-[11px] text-[#55534E]">{rev.timeAgo}</div>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-[#4285F4]">G</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#F4B400] text-xs mb-3">
                    <span>★★★★★</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#4285F4] text-white text-[9px] flex items-center justify-center">
                      ✓
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-3 mt-2">
                  <p className="text-xs text-[#55534E] leading-relaxed">{rev.text}</p>
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#151515]/15 p-1.5 shrink-0 flex items-center justify-center">
                    <img
                      src={rev.bottleThumb}
                      alt={rev.colorBought}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION FOR DROPSHIPPING CONVERSION */}
      <section id="faq-section" className="bg-[#FCFBF7] py-16 px-4 sm:px-8 border-b border-[#151515]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-display text-xs uppercase tracking-[0.18em] text-[#55534E]">
              TECHNICAL SPECIFICATIONS & SHIPPING
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl uppercase mt-2">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="divide-y divide-[#151515] border-t border-b border-[#151515]">
            {GYM_FAQS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-display text-base sm:text-lg font-medium cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="w-8 h-8 rounded-full border border-[#151515] flex items-center justify-center text-sm shrink-0 ml-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm text-[#55534E] leading-relaxed pr-10">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. "WHERE TO FIND BBBG" BAUHAUS GEOMETRIC MURAL (exact match to live_07_y5250.png & live_08_y6000.png) */}
      <section id="partners-section" className="bg-[#FCFBF7] pt-16 overflow-hidden border-b border-[#151515]">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="font-display font-normal text-4xl sm:text-6xl uppercase tracking-[-0.02em] mb-3">
            WHERE TO FIND BBBG
          </h2>
          <p className="text-sm sm:text-base text-[#55534E]">
            Stocked at leading strength clubs, CrossFit boxes, and recovery studios across Australia
            & worldwide.
          </p>
        </div>

        {/* Full-Bleed Bauhaus Geometric Mosaic with Partner Strength Club Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-[#151515]">
          {GYM_CLUB_PARTNERS.map((club, i) => (
            <div
              key={i}
              className="aspect-square border-r border-b lg:border-b-0 border-[#151515] last:border-r-0 p-5 flex flex-col items-center justify-between relative overflow-hidden bg-[#EDEAE2]"
            >
              {/* Bauhaus Semicircles Top Decoration */}
              <div className="w-full flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#2A93B5]" />
                <span className="w-8 h-4 rounded-b-full bg-[#F4D738]" />
                <span className="w-8 h-8 rounded-full bg-[#E32929]" />
              </div>

              {/* Circular Partner Gym Crest */}
              <div
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center text-center p-4 border-2 border-[#151515] shadow-md transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: club.bg, color: club.fg }}
              >
                <span className="text-[9px] font-display tracking-[0.2em] opacity-75">
                  {club.code}
                </span>
                <span className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase mt-1 leading-tight">
                  {club.name}
                </span>
                <span className="text-[9px] tracking-[0.15em] uppercase mt-1 opacity-85">
                  {club.sub}
                </span>
              </div>

              {/* Bauhaus Semicircles Bottom Decoration */}
              <div className="w-full flex items-center justify-between">
                <span className="w-8 h-4 rounded-t-full bg-[#009B4D]" />
                <span className="w-8 h-8 rounded-full bg-[#9B4719]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. BLACK FOOTER WITH BAUHAUS MONOGRAM & NEWSLETTER (exact match to live_08_y6000.png) */}
      <footer className="bg-[#050505] text-[#FCFBF7] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10">
          {/* Col 1: Our HQ / Showroom */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm text-white/75">
            <div className="font-display font-bold text-white uppercase tracking-wider mb-4">
              Our Fulfillment Lab
            </div>
            <p>Unit 62/2 Thomsons Road,</p>
            <p>Keilor Park VIC 3042, Australia</p>
            <p>Ph. (03) 7013 9427</p>
            <div className="pt-3 space-y-1 text-white/60">
              <p>Dispatch: Mon – Fri: 6 am – 5 pm</p>
              <p>Saturday: 7:30 am – 1 pm</p>
              <p>24/7 Automated Dropship API</p>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div className="lg:col-span-3 space-y-2.5 text-xs sm:text-sm text-white/75">
            <div className="font-display font-bold text-white uppercase tracking-wider mb-4">
              Menu
            </div>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setTrackerOpen(true)}
                  className="hover:text-[#F4D738] transition cursor-pointer"
                >
                  Track Express Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('customizer-section')}
                  className="hover:text-[#F4D738] transition cursor-pointer"
                >
                  3D Bottle Customizer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq-section')}
                  className="hover:text-[#F4D738] transition cursor-pointer"
                >
                  Help & Cryo-Lock™ Specs
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('30-Day Sweat-Test Warranty active on all orders.')}
                  className="hover:text-[#F4D738] transition cursor-pointer"
                >
                  Refund & Lifetime Warranty
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('Terms of Service & Dropship Policy')}
                  className="hover:text-[#F4D738] transition cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter Subscribe */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl leading-snug text-white">
              Unlock 15% off your first gym bottle drop & limited Bauhaus colorways.
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDiscountUnlocked(true);
                showToast('15% OFF VIP Code BBBG15 applied to your session!');
              }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your athlete email..."
                className="flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-[#F4D738]"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-lg bg-[#A68B1B] hover:bg-[#F4D738] text-[#151515] font-display font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Col 4: Social */}
          <div className="lg:col-span-2 lg:text-right space-y-3">
            <div className="font-display font-bold text-white uppercase tracking-wider text-xs sm:text-sm mb-4">
              Social
            </div>
            <div className="flex lg:flex-col lg:items-end gap-3">
              {['IG', 'TT', 'YT'].map((soc) => (
                <button
                  key={soc}
                  onClick={() => showToast(`Opening @BestBottleBestGym on ${soc}`)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-display hover:border-[#F4D738] hover:text-[#F4D738] transition cursor-pointer"
                >
                  {soc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Giant Bauhaus Monogram & Copyright */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo-bbbc.png"
              alt="BBBG Footer Emblem"
              className="h-12 w-auto invert opacity-85"
            />
            <span className="font-display text-xs text-white/50">
              © 2026 BEST BOTTLE BEST GYM (BBBG). Bauhaus Thermal Architecture.
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-display uppercase tracking-widest text-white/50">
            <span>VISA</span>
            <span>•</span>
            <span>MASTERCARD</span>
            <span>•</span>
            <span>APPLE PAY</span>
            <span>•</span>
            <span>AFTERPAY</span>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING BOTTOM-LEFT "GET 15% OFF" PILL + BOTTOM-RIGHT SCROLL-TOP ARROW (exact match to aww_el3.png & live_01_y750.png) */}
      <button
        onClick={() => setPromoModalOpen(true)}
        className="fixed bottom-5 left-5 z-40 h-11 px-6 rounded-full bg-[#050505] text-white border border-white/20 font-display font-medium text-xs uppercase tracking-wider shadow-xl hover:bg-[#272974] transition cursor-pointer"
      >
        {discountUnlocked ? '✓ 15% OFF ACTIVE' : 'GET 15% OFF'}
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-[#FCFBF7]/90 border border-[#151515] text-[#151515] flex items-center justify-center shadow-md hover:bg-[#F4D738] transition cursor-pointer"
        title="Back to top"
      >
        ↑
      </button>

      {/* 15. ICONIC 15% OFF POPUP MODAL (exact 1:1 match to live_00_top.png) */}
      {promoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-[#FCFBF7] border-2 border-[#151515] max-w-[760px] w-full grid grid-cols-1 md:grid-cols-2 shadow-[12px_12px_0px_#151515] overflow-hidden">
            {/* Close X Button */}
            <button
              onClick={() => setPromoModalOpen(false)}
              className="absolute top-3.5 right-3.5 z-20 w-8 h-8 flex items-center justify-center text-[#151515] hover:rotate-90 transition cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left Column: Pop-Art Vessel Illustration (banner-illustration.webp) */}
            <div className="relative min-h-[280px] md:min-h-[430px] bg-[#64C7FF] border-b md:border-b-0 md:border-r border-[#151515]">
              <img
                src="/assets/banner-illustration.webp"
                alt="Best Bottle Best Gym Pop Art"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Bauhaus Mini-Logo + 15% OFF Copy + Black Pill CTA */}
            <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
              <img
                src="/assets/logo_sub.svg"
                alt="BBBG Bauhaus Logo"
                className="h-9 w-auto mb-5"
              />
              <h3 className="font-display font-normal text-4xl sm:text-5xl text-[#151515] mb-4">
                15% OFF
              </h3>
              <p className="text-xs sm:text-sm text-[#55534E] max-w-xs leading-relaxed mb-6">
                Sign up to get 15% off your first Cryo-Lock™ gym bottle order and exclusive access
                to subscriber-only Bauhaus drops!
              </p>

              <input
                type="email"
                value={promoEmail}
                onChange={(e) => setPromoEmail(e.target.value)}
                placeholder="Enter your email (optional)..."
                className="w-full max-w-xs h-10 px-3.5 mb-3 rounded-full border border-[#151515]/25 bg-white text-xs text-center focus:outline-none focus:border-[#151515]"
              />

              <button
                onClick={() => {
                  setDiscountUnlocked(true);
                  setPromoModalOpen(false);
                  showToast('15% OFF automatically applied at checkout!');
                }}
                className="h-11 px-9 rounded-full bg-[#050505] text-white font-display text-xs uppercase tracking-widest hover:bg-[#272974] transition cursor-pointer mb-4"
              >
                ORDER NOW
              </button>

              <p className="text-[11px] text-[#55534E]">
                Discount applied at checkout
                <br />
                without a code
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 16. PRODUCT QUICK-VIEW & TECHNICAL SPECS MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FCFBF7] border-2 border-[#151515] rounded-2xl max-w-3xl w-full overflow-hidden shadow-[10px_10px_0px_#151515] grid grid-cols-1 md:grid-cols-2">
            <div
              className="p-8 flex flex-col items-center justify-center relative min-h-[320px]"
              style={{ backgroundColor: quickViewProduct.bgColor }}
            >
              <img
                src={quickViewProduct.gif}
                alt={quickViewProduct.title}
                className="h-72 w-auto object-contain drop-shadow-2xl"
              />
              <span className="mt-3 px-3 py-1 rounded-full bg-[#FCFBF7] text-[#151515] font-display font-bold text-[10px] uppercase tracking-widest">
                360° LIVE ROTATION
              </span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-[#9B4719]">
                    {quickViewProduct.code} • {quickViewProduct.steelGrade}
                  </span>
                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="w-8 h-8 rounded-full border border-[#151515] flex items-center justify-center text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-2">
                  {quickViewProduct.title}
                </h3>
                <div className="font-display font-bold text-xl mb-3">
                  ${quickViewProduct.price.toFixed(2)} AUD{' '}
                  <span className="text-xs line-through text-[#55534E] font-normal">
                    ${quickViewProduct.compareAtPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-[#55534E] leading-relaxed mb-4">
                  {quickViewProduct.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {quickViewProduct.specs.map((s, i) => (
                    <li key={i} className="text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009B4D]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  addToCart({
                    id: quickViewProduct.id,
                    title: quickViewProduct.title,
                    variant: quickViewProduct.capacity,
                    price: quickViewProduct.price,
                    image: quickViewProduct.png,
                  });
                  setQuickViewProduct(null);
                }}
                className="w-full h-12 rounded-full bg-[#151515] text-[#F4D738] font-display font-bold text-xs uppercase tracking-widest hover:bg-[#272974] hover:text-white transition cursor-pointer"
              >
                ADD TO GYM BAG — ${quickViewProduct.price.toFixed(2)} AUD
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 17. DROPSHIPPING EXPRESS ORDER TRACKER MODAL */}
      {trackerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FCFBF7] border-2 border-[#151515] rounded-2xl max-w-md w-full p-6 shadow-[8px_8px_0px_#151515]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-bold text-sm uppercase tracking-wider">
                EXPRESS GYM DISPATCH TRACKER
              </span>
              <button
                onClick={() => setTrackerOpen(false)}
                className="w-7 h-7 rounded-full border border-[#151515] text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            <label className="block text-xs text-[#55534E] mb-1.5">Tracking Number</label>
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full h-10 px-3 rounded-lg border border-[#151515] bg-white text-xs font-display mb-4"
            />
            <div className="bg-[#EDEAE2] border border-[#151515] rounded-xl p-4 space-y-2 text-xs">
              <div className="flex justify-between font-display font-bold">
                <span>STATUS: IN TRANSIT (EXPRESS)</span>
                <span className="text-[#009B4D]">● ON SCHEDULE</span>
              </div>
              <p className="text-[#55534E]">
                Origin: Melbourne Thermal Fulfillment Center → Direct Courier Dispatch.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 18. SLIDE-OVER CART DRAWER WITH FREE SHIPPING METER & 1-CLICK UPSELL */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex justify-end">
          <div className="bg-[#FCFBF7] border-l-2 border-[#151515] w-full max-w-md h-full flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#151515]">
                <div className="font-display font-bold text-lg uppercase">
                  YOUR GYM BAG ({cartCount})
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-8 h-8 rounded-full border border-[#151515] flex items-center justify-center text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Free Shipping Progress Meter */}
              <div className="my-4 p-3.5 rounded-xl bg-[#EDEAE2] border border-[#151515]">
                <div className="text-xs font-display font-bold uppercase mb-1.5">
                  {amountToFreeShipping === 0
                    ? '🎉 FREE EXPRESS GYM SHIPPING UNLOCKED!'
                    : `Add $${amountToFreeShipping.toFixed(2)} more for FREE Express Shipping`}
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[#151515]/30">
                  <div
                    className="h-full bg-[#009B4D] transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="space-y-3 max-h-[46vh] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <p className="text-xs text-[#55534E] py-8 text-center">
                    Your gym bag is empty. Pick a Bauhaus colorway to start!
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={`${item.id}-${item.variant}`}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white border border-[#151515]"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-14 object-contain shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-bold text-xs truncate">{item.title}</div>
                        <div className="text-[11px] text-[#55534E]">{item.variant}</div>
                        <div className="font-display font-bold text-xs mt-1">
                          ${(item.price * item.qty).toFixed(2)} AUD
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateCartQty(item.id, item.variant, -1)}
                          className="w-6 h-6 rounded border border-[#151515] text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-display font-bold w-4 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.id, item.variant, 1)}
                          className="w-6 h-6 rounded border border-[#151515] text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Upsell + Checkout Footer */}
            <div className="pt-4 border-t border-[#151515] space-y-4">
              {/* 1-Click Dropship Upsell */}
              <div className="p-3 rounded-xl bg-[#F4D738]/35 border border-[#151515] flex items-center justify-between gap-2">
                <div className="text-xs">
                  <span className="font-display font-bold block uppercase">
                    + Spare Magnetic Chug Lid & Silicone Boot
                  </span>
                  <span className="text-[11px] text-[#55534E]">One-click athlete add-on ($9.95)</span>
                </div>
                <button
                  onClick={() =>
                    addToCart({
                      id: 'upsell-chug-boot',
                      title: 'Magnetic Chug Cap + Silicone Bumper Boot',
                      variant: 'Universal 24oz/32oz Fit',
                      price: 9.95,
                      image: '/assets/bottle-khaki.png',
                    })
                  }
                  className="px-3 py-1.5 rounded-full bg-[#151515] text-white font-display text-[11px] uppercase cursor-pointer shrink-0"
                >
                  Add +$9.95
                </button>
              </div>

              <div className="space-y-1 text-xs">
                {discountUnlocked && (
                  <div className="flex justify-between text-[#009B4D] font-bold">
                    <span>15% FIRST ORDER DISCOUNT</span>
                    <span>-${(cartSubtotal * 0.15).toFixed(2)} AUD</span>
                  </div>
                )}
                <div className="flex justify-between font-display font-bold text-base">
                  <span>TOTAL</span>
                  <span>
                    $
                    {(discountUnlocked ? cartSubtotal * 0.85 : cartSubtotal).toFixed(2)} AUD
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCartOpen(false);
                  showToast('Express Checkout initialized — 24h Dispatch Confirmed!');
                }}
                className="w-full h-12 rounded-full bg-[#151515] text-[#F4D738] font-display font-bold text-xs uppercase tracking-widest hover:bg-[#009B4D] hover:text-white transition cursor-pointer"
              >
                PROCEED TO EXPRESS CHECKOUT →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-16 right-5 z-50 bg-[#151515] text-[#F4D738] border-2 border-[#F4D738] px-5 py-3 rounded-xl font-display text-xs uppercase tracking-wider shadow-xl">
          {toastMsg}
        </div>
      )}
    </div>
  );
}
