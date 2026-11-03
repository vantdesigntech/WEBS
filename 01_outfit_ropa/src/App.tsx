import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Minus, Sparkles, Box, Layers, Eye, Check, ShoppingBag, RotateCcw, X } from 'lucide-react';
import { PRODUCTS, Product } from './data/products';
import { ThreeClothCanvas } from './components/ThreeClothCanvas';

type ThemeMode = 'cream' | 'dark' | 'red';
type ViewState =
  | { page: 'home' }
  | { page: 'product'; product: Product }
  | { page: 'bag' }
  | { page: 'shipping' };

interface BagItem {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}

/** Exact geometric OUTFIT wordmark inspired by ++hellohello's SOTD */
const OutfitWordmark: React.FC<{ className?: string }> = ({ className = 'w-full h-auto fill-current' }) => (
  <svg viewBox="0 0 1391 296" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M140.7 296C60.2 296 0 235.4 0 148.2C0 60.8 60.2 0 140.7 0C221.1 0 281.1 60.8 281.1 148.2C281.1 235.4 221.1 296 140.7 296ZM141.1 242.5C184.5 242.5 214.6 205.8 214.6 148.2C214.6 90.4 184.5 52.7 141.1 52.7C97.4 52.7 66.5 90.4 66.5 148.2C66.5 205.8 97.4 242.5 141.1 242.5Z" />
    <path d="M432.4 296C354.8 296 310.2 251.2 310.2 174.6V4.5H376.8V171.2C376.8 216.4 397.8 241.6 433.2 241.6C468.5 241.6 489.6 216.4 489.6 171.2V4.5H556.2V174.6C556.2 251.2 510.1 296 432.4 296Z" />
    <path d="M669.8 291.5V58.2H582.4V4.5H823.8V58.2H736.4V291.5H669.8Z" />
    <path d="M852.6 291.5V4.5H1058.4V58.2H919.2V124.8H1038.6V177.5H919.2V291.5H852.6Z" />
    <path d="M1094.2 291.5V4.5H1160.8V291.5H1094.2Z" />
    <path d="M1276.4 291.5V58.2H1189V4.5H1390.5V58.2H1343V291.5H1276.4Z" />
  </svg>
);

export function App() {
  const [theme, setTheme] = useState<ThemeMode>('cream');
  const [view, setView] = useState<ViewState>({ page: 'home' });
  const [bag, setBag] = useState<BagItem[]>([
    {
      product: PRODUCTS[0],
      color: PRODUCTS[0].colors[0],
      size: 'L',
      quantity: 1,
    },
  ]);

  // Preloader state
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [preloaderCount, setPreloaderCount] = useState(0);
  const [preloaderImgIdx, setPreloaderImgIdx] = useState(0);

  // Curtain page transition state
  const [curtainActive, setCurtainActive] = useState(false);

  // Product detail selections
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [detailQty, setDetailQty] = useState<number>(1);
  const [justAdded, setJustAdded] = useState<boolean>(false);
  const [detail3DMode, setDetail3DMode] = useState<boolean>(false);

  // Home filter controls
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // Custom magnetic cursor
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  // Sync theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Preloader animation 000 -> 100
  useEffect(() => {
    if (preloaderDone) return;
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 14) + 7;
      if (current >= 100) {
        current = 100;
        setPreloaderCount(100);
        clearInterval(interval);
        setTimeout(() => setPreloaderDone(true), 420);
      } else {
        setPreloaderCount(current);
        setPreloaderImgIdx((prev) => (prev + 1) % 6);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [preloaderDone]);

  // Custom cursor tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const productEl = target?.closest('[data-cursor]');
      if (productEl) {
        setCursorLabel(productEl.getAttribute('data-cursor'));
      } else {
        setCursorLabel(null);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Curtain-wrapped navigation helper
  const navigateWithCurtain = (nextView: ViewState) => {
    setCurtainActive(true);
    setTimeout(() => {
      setView(nextView);
      if (nextView.page === 'product') {
        setSelectedColor(nextView.product.colors[0]);
        setSelectedSize(nextView.product.sizes.includes('L') ? 'L' : nextView.product.sizes[0]);
        setDetailQty(1);
        setDetail3DMode(false);
      }
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 320);
    setTimeout(() => {
      setCurtainActive(false);
    }, 680);
  };

  const switchTheme = (nextTheme: ThemeMode) => {
    if (nextTheme === theme) return;
    setCurtainActive(true);
    setTimeout(() => setTheme(nextTheme), 260);
    setTimeout(() => setCurtainActive(false), 620);
  };

  const totalBagCount = bag.reduce((acc, item) => acc + item.quantity, 0);
  const totalBagPrice = bag.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleAddToBag = (product: Product, color: string, size: string, quantity: number) => {
    setBag((prev) => {
      const idx = prev.findIndex(
        (i) => i.product.id === product.id && i.color === color && i.size === size
      );
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + quantity };
        return copy;
      }
      return [...prev, { product, color, size, quantity }];
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const updateBagQty = (index: number, delta: number) => {
    setBag((prev) =>
      prev
        .map((item, idx) =>
          idx === index ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Filtered products
  const filteredProducts =
    activeCategory === 'ALL'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category.toUpperCase() === activeCategory);

  const heroRowProducts = filteredProducts.filter((p) => p.gridSection === 'hero-row');
  const row2Products = filteredProducts.filter((p) => p.gridSection === 'row-2');
  const row3Products = filteredProducts.filter((p) => p.gridSection === 'row-3');
  const row4Products = filteredProducts.filter((p) => p.gridSection === 'row-4');

  return (
    <div className="min-h-screen relative selection:bg-[#ff0001] selection:text-white">
      {/* Custom Follower Cursor (Desktop) */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex items-center justify-center transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full font-bold uppercase tracking-widest transition-all duration-200 ${
            cursorLabel
              ? 'h-20 w-20 bg-[#ff0001] text-[10px] text-white shadow-xl scale-100'
              : 'h-3 w-3 bg-current opacity-40 scale-75'
          }`}
        >
          {cursorLabel}
        </div>
      </div>

      {/* PRELOADER CURTAIN (000 -> 100 + Rapid Editorial Flash) */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-[#ede4dd] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          preloaderDone ? 'pointer-events-none' : ''
        }`}
        style={{
          clipPath: preloaderDone ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)',
        }}
      >
        <div className="relative flex flex-col items-center justify-center">
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-65">
            <img
              src={PRODUCTS[preloaderImgIdx % PRODUCTS.length].frontImage}
              alt="Preloader frame"
              className="aspect-[9/12] w-[34vw] md:w-[14vw] object-cover shadow-2xl"
            />
          </div>
          <div className="relative z-10 w-[72vw] max-w-[30rem] mix-blend-difference">
            <OutfitWordmark className="w-full h-auto fill-[#ede4dd]" />
          </div>
          <div className="relative z-10 mt-6 font-mono text-2xl md:text-3xl font-black tracking-tighter text-[#ff0001]">
            {String(preloaderCount).padStart(3, '0')}
          </div>
        </div>
      </div>

      {/* PAGE TRANSITION CURTAIN (#layer) */}
      <div
        className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-black text-[#ede4dd] transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"
        style={{
          clipPath: curtainActive ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
        }}
      >
        <div className="w-48">
          <OutfitWordmark className="w-full h-auto fill-current" />
        </div>
      </div>

      {/* FIXED MIX-BLEND-DIFFERENCE HEADER */}
      <nav
        id="header"
        className="fixed top-0 left-0 z-30 flex w-full items-center justify-between text-white mix-blend-difference"
      >
        <div className="mx-auto flex w-full items-center justify-between px-4 py-6 lg:px-6">
          <button
            onClick={() => navigateWithCurtain({ page: 'home' })}
            className="mr-4 w-28 md:w-36 text-left cursor-pointer"
            aria-label="OUTFIT Home"
          >
            <OutfitWordmark className="w-full h-auto fill-current" />
          </button>

          <div className="flex items-center gap-6 md:gap-14">
            <ul className="flex items-center gap-6 md:gap-12 text-base md:text-2xl font-medium tracking-tight">
              <li>
                <button
                  onClick={() => navigateWithCurtain({ page: 'home' })}
                  className="link-hover cursor-pointer"
                  data-selected={view.page === 'home'}
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithCurtain({ page: 'bag' })}
                  className="link-hover cursor-pointer"
                  data-selected={view.page === 'bag'}
                >
                  Bag <span className="font-mono">({totalBagCount})</span>
                </button>
              </li>
            </ul>

            {/* Space reserved for the fixed 3-dot theme switcher */}
            <div className="w-16 md:w-20" />
          </div>
        </div>
      </nav>

      {/* FIXED 3-DOT THEME SWITCHER (Black / Cream / Red) */}
      <div
        id="theme-switcher"
        className="fixed top-6 right-4 lg:right-6 z-30 flex items-center gap-1.5 bg-black/10 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-current/15"
        title="Cambiar tema visual (Dark / Cream / Red Editorial)"
      >
        <button
          onClick={() => switchTheme('dark')}
          aria-label="Dark theme"
          className={`h-[1.15rem] w-[1.15rem] rounded-full bg-black transition-transform duration-200 cursor-pointer ${
            theme === 'dark' ? 'scale-125 ring-2 ring-[#ff0001]' : 'opacity-75 hover:opacity-100'
          }`}
        />
        <button
          onClick={() => switchTheme('cream')}
          aria-label="Cream theme"
          className={`h-[1.15rem] w-[1.15rem] rounded-full bg-[#ede4dd] border border-black/40 transition-transform duration-200 cursor-pointer ${
            theme === 'cream' ? 'scale-125 ring-2 ring-black' : 'opacity-75 hover:opacity-100'
          }`}
        />
        <button
          onClick={() => switchTheme('red')}
          aria-label="Red theme"
          className={`h-[1.15rem] w-[1.15rem] rounded-full bg-[#ff0001] transition-transform duration-200 cursor-pointer ${
            theme === 'red' ? 'scale-125 ring-2 ring-black' : 'opacity-75 hover:opacity-100'
          }`}
        />
      </div>

      {/* =========================================================
          VIEW 1: HOME (HERO + ASYMMETRIC 16-COL GRID)
         ========================================================= */}
      {view.page === 'home' && (
        <main id="page" data-page="home">
          <div className="px-4 lg:px-6 pt-24 md:pt-28">
            {/* HERO MONUMENTAL LOCKUP */}
            <div className="mb-6 relative">
              <div className="relative overflow-hidden py-2 mb-4">
                {/* Giant SVG Wordmark */}
                <OutfitWordmark className="w-full h-auto fill-current select-none" />
              </div>

              {/* Signature 5px Brutalist Horizontal Divider */}
              <div id="hero-line" className="mb-6 h-[5px] w-full origin-left bg-current" />

              {/* 4-Column Swiss Hero Metadata (aligned with the 4-col product grid) */}
              <div
                id="hero-content"
                className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-bold"
              >
                <div className="lg:col-span-1">
                  <h1 className="uppercase tracking-wider">OUTFIT® ARCHIVE</h1>
                  <p className="mt-1 opacity-60 font-normal">COLECCIÓN CÁPSULA // 001—015</p>
                </div>

                <div className="lg:col-span-2">
                  <h2 className="mb-3 uppercase tracking-wider">WHY</h2>
                  <p className="text-sm leading-5 tracking-tight md:max-w-[78%] font-medium">
                    Created by our design studio team, this store and signature collection celebrates
                    collective creativity, brutalist Swiss grids, and heavyweight apparel. Carefully
                    designed to be worn—or judged.
                  </p>
                </div>

                <div className="lg:col-span-1 flex justify-between items-start gap-4">
                  <div className="flex flex-col justify-between gap-2">
                    <span className="max-w-fit uppercase text-left opacity-80">
                      ++STUDIO EDITION
                    </span>
                    <button
                      onClick={() => navigateWithCurtain({ page: 'shipping' })}
                      className="link-hover max-w-fit uppercase text-left cursor-pointer"
                    >
                      Shipping &amp; Returns
                    </button>
                  </div>
                  <span>© 2026</span>
                </div>
              </div>
            </div>

            {/* CATEGORY FILTER PILLS */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-current/20 pb-4">
              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
                {['ALL', 'APPAREL', 'HEADWEAR', 'CARRY', 'OBJECTS'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 transition cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#ff0001] text-white'
                        : 'border border-current/30 hover:border-current'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <p className="text-xs font-mono uppercase opacity-70">
                MOSTRANDO {filteredProducts.length} PIEZAS DE EDICIÓN LIMITADA — PASA EL CURSOR PARA REVELAR
              </p>
            </div>

            {/* =====================================================
                ROW 1: 4 NORMAL CARDS (4 COLUMNS)
               ===================================================== */}
            {heroRowProducts.length > 0 && (
              <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {heroRowProducts.map((product) => (
                  <div key={product.id} className="col-span-1 flex">
                    <ProductCard
                      product={product}
                      onSelect={() => navigateWithCurtain({ page: 'product', product })}
                      onQuickAdd={(e) => {
                        e.stopPropagation();
                        handleAddToBag(product, product.colors[0], product.sizes[0], 1);
                      }}
                    />
                  </div>
                ))}
              </section>
            )}

            {/* =====================================================
                ROW 2: 2 NORMAL CARDS + 1 LARGE CARD (1 + 1 + 2 = 4 COLS)
               ===================================================== */}
            {row2Products.length > 0 && (
              <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {row2Products.map((product) => {
                  const isWide = product.aspect === 'square';
                  return (
                    <div
                      key={product.id}
                      className={`${isWide ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'} flex`}
                    >
                      <ProductCard
                        product={product}
                        isWide={isWide}
                        onSelect={() => navigateWithCurtain({ page: 'product', product })}
                        onQuickAdd={(e) => {
                          e.stopPropagation();
                          handleAddToBag(product, product.colors[0], product.sizes[0], 1);
                        }}
                      />
                    </div>
                  );
                })}
              </section>
            )}

            {/* =====================================================
                ROW 3: 4 NORMAL CARDS (4 COLUMNS)
               ===================================================== */}
            {row3Products.length > 0 && (
              <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {row3Products.map((product) => (
                  <div key={product.id} className="col-span-1 flex">
                    <ProductCard
                      product={product}
                      onSelect={() => navigateWithCurtain({ page: 'product', product })}
                      onQuickAdd={(e) => {
                        e.stopPropagation();
                        handleAddToBag(product, product.colors[0], product.sizes[0], 1);
                      }}
                    />
                  </div>
                ))}
              </section>
            )}

            {/* =====================================================
                ROW 4: 4 NORMAL CARDS (4 COLUMNS)
               ===================================================== */}
            {row4Products.length > 0 && (
              <section className="mb-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {row4Products.map((product) => (
                  <div key={product.id} className="col-span-1 flex">
                    <ProductCard
                      product={product}
                      onSelect={() => navigateWithCurtain({ page: 'product', product })}
                      onQuickAdd={(e) => {
                        e.stopPropagation();
                        handleAddToBag(product, product.colors[0], product.sizes[0], 1);
                      }}
                    />
                  </div>
                ))}
              </section>
            )}
          </div>
        </main>
      )}

      {/* =========================================================
          VIEW 2: PRODUCT DETAIL PAGE (12-COL STICKY SPLIT)
         ========================================================= */}
      {view.page === 'product' && (
        <main id="page" data-page="product" className="mx-auto pt-28 pb-36 px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left 7 Columns: Editorial Vertical Gallery */}
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-mono uppercase opacity-70">
                  PIEZA #{view.product.id} // {view.product.fabricSpec}
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <div className="relative aspect-[9/11] w-full overflow-hidden bg-[var(--bg-card)]">
                  <img
                    src={view.product.frontImage}
                    alt={`${view.product.title} — Front`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 bg-black/75 px-2.5 py-1 text-[11px] font-mono uppercase text-white">
                    01 / FRONT VIEW
                  </span>
                </div>
                <div className="relative aspect-[9/11] w-full overflow-hidden bg-[var(--bg-card)]">
                  <img
                    src={view.product.backImage}
                    alt={`${view.product.title} — Back`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 bg-black/75 px-2.5 py-1 text-[11px] font-mono uppercase text-white">
                    02 / BACK &amp; DETAIL VIEW
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Sticky Product Specification & Add to Bag */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <button
                  onClick={() => navigateWithCurtain({ page: 'home' })}
                  className="group mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tight cursor-pointer hover:opacity-70"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>Return to Shop</span>
                </button>

                <h1 className="mb-4 text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-7xl">
                  {view.product.title}
                </h1>

                <p className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                  ${(view.product.price * detailQty).toFixed(2)}
                </p>

                <p className="mb-8 text-lg md:text-2xl leading-snug tracking-tight opacity-90">
                  {view.product.description}
                </p>

                {/* Color Selector */}
                <dl className="mb-8 flex items-center justify-between gap-6 border-b-2 border-current pb-4">
                  <dt className="text-xl md:text-2xl font-medium tracking-tight">Color</dt>
                  <dd className="flex flex-wrap justify-end gap-3">
                    {view.product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 text-lg md:text-2xl transition cursor-pointer ${
                          selectedColor === color
                            ? 'ring-2 ring-current font-bold'
                            : 'opacity-65 hover:opacity-100'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </dd>
                </dl>

                {/* Size Selector */}
                <dl className="mb-8 flex items-center justify-between gap-6 border-b-2 border-current pb-4">
                  <dt className="text-xl md:text-2xl font-medium tracking-tight">Size</dt>
                  <dd className="flex flex-wrap justify-end gap-3">
                    {view.product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 text-lg md:text-2xl transition cursor-pointer ${
                          selectedSize === size
                            ? 'ring-2 ring-current font-bold'
                            : 'opacity-65 hover:opacity-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </dd>
                </dl>

                {/* Quantity & Oversized Add to Bag */}
                <div className="mb-8 flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b-2 border-current py-4 text-2xl md:text-4xl">
                    <span className="text-xl md:text-2xl font-medium tracking-tight">Quantity</span>
                    <div className="flex items-center gap-6">
                      <button
                        type="button"
                        onClick={() => setDetailQty((q) => Math.max(1, q - 1))}
                        className="p-2 hover:opacity-70 active:scale-90 transition cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-6 h-6" />
                      </button>
                      <span className="min-w-12 text-center font-mono font-bold">{detailQty}</span>
                      <button
                        type="button"
                        onClick={() => setDetailQty((q) => q + 1)}
                        className="p-2 hover:opacity-70 active:scale-90 transition cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleAddToBag(view.product, selectedColor, selectedSize, detailQty)
                    }
                    className="w-full py-6 px-8 text-2xl md:text-3xl font-black uppercase tracking-tighter bg-current text-[var(--bg-primary)] hover:bg-[#ff0001] hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-between"
                  >
                    <span className="mix-blend-difference text-white">
                      {justAdded ? 'Added to Bag ✓' : 'Add to Bag'}
                    </span>
                    <span className="mix-blend-difference text-white font-mono">
                      +${(view.product.price * detailQty).toFixed(2)}
                    </span>
                  </button>
                </div>

                {/* Spec Sheet Accordion / Metadata */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase opacity-75 pt-2">
                  <div>
                    <p className="font-bold">COMPOSICIÓN</p>
                    <p className="mt-1">{view.product.fabricSpec}</p>
                  </div>
                  <div>
                    <p className="font-bold">ENVÍO GLOBAL</p>
                    <p className="mt-1">Despacho en 24/48h con packaging de archivo numerado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* =========================================================
          VIEW 3: BAG PAGE (AWWWARDS EMPTY BAG + CHECKOUT)
         ========================================================= */}
      {view.page === 'bag' && (
        <main className="mx-auto pt-28 pb-36 px-4 lg:px-6 min-h-[75vh]">
          <div className="mb-8 flex items-center justify-between border-b-[5px] border-current pb-6">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              Your Bag ({totalBagCount})
            </h1>
            <button
              onClick={() => navigateWithCurtain({ page: 'home' })}
              className="link-hover text-sm md:text-lg font-bold uppercase cursor-pointer"
            >
              ← Continue Shopping
            </button>
          </div>

          {bag.length === 0 ? (
            <div className="py-16 grid gap-8 lg:grid-cols-16 items-center">
              <div className="lg:col-span-8">
                <p className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                  Your bag is currently empty. Negative space looks great, but our cotton feels better.
                </p>
                <button
                  onClick={() => navigateWithCurtain({ page: 'home' })}
                  className="px-8 py-4 bg-[#ff0001] text-white font-bold uppercase tracking-wider text-lg cursor-pointer hover:opacity-90"
                >
                  Explore Collection (13 Pieces)
                </button>
              </div>
              <div className="lg:col-span-8 h-[340px] border-2 border-current">
                <ThreeClothCanvas theme={theme} mode="showroom" wireframe />
              </div>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-16">
              <div className="lg:col-span-10 flex flex-col divide-y-2 divide-current">
                {bag.map((item, idx) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="py-6 flex gap-6 items-center">
                    <img
                      src={item.product.frontImage}
                      alt={item.product.title}
                      onClick={() => navigateWithCurtain({ page: 'product', product: item.product })}
                      className="w-24 h-32 md:w-32 md:h-40 object-cover bg-[var(--bg-card)] cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3
                          onClick={() => navigateWithCurtain({ page: 'product', product: item.product })}
                          className="text-2xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline"
                        >
                          {item.product.title}
                        </h3>
                        <p className="text-xl md:text-2xl font-mono font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm uppercase font-mono opacity-70">
                        Color: {item.color} — Size: {item.size}
                      </p>

                      <div className="mt-4 flex items-center gap-4">
                        <button
                          onClick={() => updateBagQty(idx, -1)}
                          className="h-8 w-8 border border-current flex items-center justify-center cursor-pointer hover:bg-current/10"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono font-bold text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateBagQty(idx, 1)}
                          className="h-8 w-8 border border-current flex items-center justify-center cursor-pointer hover:bg-current/10"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-6">
                <div className="border-2 border-current p-6 md:p-8 lg:sticky lg:top-28">
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-6 border-b-2 border-current pb-3">
                    Order Summary
                  </h2>
                  <div className="space-y-3 text-base font-medium mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono">${totalBagPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Worldwide Express Shipping</span>
                      <span className="font-mono">FREE</span>
                    </div>
                    <div className="flex justify-between text-2xl font-black pt-4 border-t-2 border-current">
                      <span>Total</span>
                      <span className="font-mono">${totalBagPrice.toFixed(2)} USD</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Demo Checkout: En producción conecta con Shopify Storefront API o Stripe Checkout.')}
                    className="w-full py-5 bg-[#ff0001] text-white text-xl font-black uppercase tracking-tight cursor-pointer hover:opacity-90 transition"
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* =========================================================
          VIEW 4: SHIPPING & RETURNS EDITORIAL PAGE
         ========================================================= */}
      {view.page === 'shipping' && (
        <main className="mx-auto pt-28 pb-36 px-4 lg:px-6 max-w-5xl">
          <button
            onClick={() => navigateWithCurtain({ page: 'home' })}
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Shop
          </button>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
            Shipping &amp; Returns
          </h1>
          <div className="h-[5px] w-full bg-current mb-10" />
          <div className="grid md:grid-cols-2 gap-10 text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold uppercase mb-3">01 / Global Dispatch</h2>
              <p className="opacity-85">
                All studio garments are produced in limited batches and ship worldwide via DHL
                Express within 48 hours. Tracking credentials are dispatched immediately upon
                archival verification.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase mb-3">02 / Returns &amp; Exchanges</h2>
              <p className="opacity-85">
                Unworn pieces with intact studio tags may be exchanged or returned within 14 days
                of delivery.
              </p>
            </div>
          </div>
        </main>
      )}

      {/* =========================================================
          ICONIC MONUMENTAL FOOTER ("Made to be worn. Or judged.")
         ========================================================= */}
      <footer className="mx-auto mb-10 px-4 text-sm lg:px-6">
        <div className="mb-6 h-[5px] w-full bg-current" />

        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex-1 text-[2.75rem] leading-[0.96] font-black tracking-tighter md:text-[6vw]">
            <p>Made to be worn.</p>
            <p className={theme === 'red' ? 'text-black' : 'text-[#5A5A5A]'}>
              Or judged. Or both.
            </p>
          </div>
          <div>
            <p className="text-[36vw] leading-[0.9] font-black tracking-tighter md:text-[12.75vw]">
              ©26
            </p>
          </div>
        </div>

        <div className="mt-20 mb-6 md:mt-36">
          <p className="max-w-[52ch] tracking-tight md:text-2xl font-medium">
            Created by the ++studio team, this store and signature collection celebrates our
            collective creativity and passion for apparel. Carefully designed.
          </p>
        </div>

        <hr className="mb-6 h-[2px] w-full bg-current border-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-bold">
          <div className="lg:col-span-1 flex flex-col justify-between">
            <span className="text-lg tracking-tighter font-black">++STUDIO / OUTFIT®</span>
            <span className="opacity-70 text-xs mt-1">All rights reserved © 2026</span>
          </div>

          <div className="lg:col-span-1 text-xs leading-5">
            Libertad 2529 <br />
            Studio 102 <br />
            Madrid / Montevideo
          </div>

          <div className="lg:col-span-1 text-xs">
            <button
              onClick={() => navigateWithCurtain({ page: 'shipping' })}
              className="link-hover uppercase cursor-pointer"
            >
              Shipping &amp; Privacy Policy
            </button>
          </div>

          <div className="lg:col-span-1 flex justify-end text-xs uppercase">
            <div className="flex flex-col gap-2">
              <button onClick={() => switchTheme('cream')} className="link-hover text-left cursor-pointer">
                Theme: Cream
              </button>
              <button onClick={() => switchTheme('dark')} className="link-hover text-left cursor-pointer">
                Theme: Dark
              </button>
              <button onClick={() => switchTheme('red')} className="link-hover text-left cursor-pointer">
                Theme: Red
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** Product Card with Outfit's exact clip-path polygon wipe + contrast flash hover */
const ProductCard: React.FC<{
  product: Product;
  isWide?: boolean;
  onSelect: () => void;
  onQuickAdd: (e: React.MouseEvent) => void;
}> = ({ product, isWide = false, onSelect, onQuickAdd }) => {
  const aspectClass = isWide
    ? 'aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-0'
    : 'aspect-[9/12]';

  return (
    <div
      onClick={onSelect}
      data-product="true"
      data-cursor="VIEW"
      className="group flex h-full w-full flex-col cursor-pointer"
    >
      <div className={`relative w-full overflow-hidden bg-[var(--bg-card)] ${aspectClass}`}>
        {/* Front Image */}
        <img
          src={product.frontImage}
          alt={product.title}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Back Image with Outfit's polygon clip-path wipe & brightness flash */}
        <img
          src={product.backImage}
          alt={`${product.title} back view`}
          loading="lazy"
          draggable={false}
          className="outfit-card-back absolute inset-0 h-full w-full object-cover"
        />

        {/* Quick +Bag button on hover */}
        <button
          type="button"
          onClick={onQuickAdd}
          data-cursor="+ BAG"
          className="absolute bottom-3 right-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white hover:bg-[#ff0001] px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider cursor-pointer"
        >
          + Quick Add
        </button>
      </div>

      {/* Product Meta */}
      <div className="mt-3 flex shrink-0 flex-col justify-between gap-1 text-lg leading-5 md:flex-row font-medium">
        <p className="tracking-tight">{product.title}</p>
        <p className="font-mono">${product.price.toFixed(2)}</p>
      </div>

      <div className="mt-1.5 flex shrink-0 items-center gap-1.5 text-[11px] uppercase font-bold opacity-80">
        <span className="h-2 w-2 rounded-full bg-current inline-block" />
        <span>{product.category}</span>
      </div>
    </div>
  );
};
