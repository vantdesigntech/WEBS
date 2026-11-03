import React, { useState } from 'react';
import { 
  MULE_PRODUCTS, 
  CATEGORIES, 
  Product, 
  SYSTEM_TELEMETRY 
} from './data/products';
import { TechIllustration } from './components/TechIllustration';
import { ProductDrawer, CartDrawer, CartItem } from './components/Drawers';
import { 
  Terminal, 
  ShoppingCart, 
  SlidersHorizontal, 
  ShieldCheck, 
  Radio, 
  Crosshair, 
  ChevronRight,
  Barcode,
  Activity,
  Maximize2
} from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL ARTIFACTS');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([
    { product: MULE_PRODUCTS[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [bannerAlert, setBannerAlert] = useState<string | null>(null);

  // Filter products
  const filteredProducts = selectedCategory === 'ALL ARTIFACTS'
    ? MULE_PRODUCTS
    : MULE_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setBannerAlert(`ALLOCATED: ${product.serialCode} ADDED TO CARGO MANIFEST`);
    setTimeout(() => setBannerAlert(null), 3000);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const handleRemove = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const handleCheckout = () => {
    alert("CARGO ALLOCATION SECURED: Delivery protocol initialized via M.U.L.E. Sub-Network.");
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#060709] text-zinc-100 relative selection:bg-[#ff5500] selection:text-black">
      {/* Background Grid & Scanline */}
      <div className="fixed inset-0 tech-grid-bg pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 scanline-overlay z-40 pointer-events-none" />

      {/* Floating System Alert Notification */}
      {bannerAlert && (
        <div className="fixed top-4 right-4 z-50 bg-[#ff5500] text-black font-mono text-xs px-4 py-2 font-bold uppercase tracking-widest shadow-2xl flex items-center space-x-2 animate-bounce">
          <Terminal size={14} />
          <span>{bannerAlert}</span>
        </div>
      )}

      {/* Main Framework Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">

        {/* Top Edge Military Status Bar */}
        <header className="border border-[#1e2430] bg-[#0a0d13]/90 backdrop-blur-md p-3 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#ff5500] font-black tracking-widest text-sm">
              <Crosshair size={18} />
              <span>M.U.L.E. 一軸工業</span>
            </div>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-300">
              SYS PROTOCOL: <strong className="text-white">v4.98-EXT</strong>
            </span>
            <span className="hidden lg:inline text-zinc-600">|</span>
            <span className="hidden lg:inline text-zinc-400">
              CLEARANCE: <span className="text-emerald-400 font-bold">LVL-4 STRAND OK</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 bg-black/50 border border-zinc-800 text-[11px]">
              <Activity size={12} className="text-emerald-400 animate-pulse" />
              <span>CHIRAL INTERFERENCE: 0.00%</span>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 bg-[#ff5500] hover:bg-[#e04b00] text-black font-bold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-[#ff5500]/20"
            >
              <ShoppingCart size={14} />
              <span>/CART 大車 [{cart.reduce((a, b) => a + b.quantity, 0)}]</span>
            </button>
          </div>
        </header>

        {/* Hero Banner: Industrial Kojima Worldbuilding */}
        <section className="relative border border-[#232b3c] bg-[#0c1017] p-6 lg:p-10 overflow-hidden">
          {/* Top Edge Ruler Coordinates */}
          <div className="absolute top-2 left-4 right-4 flex justify-between text-[9px] font-mono text-zinc-600 select-none pointer-events-none">
            <span>+00.291.LAT</span>
            <span>GRID: SECTOR-07_NORTH</span>
            <span>TIME-FALL DAMPENING: ACTIVE</span>
            <span>+14.882.LONG</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-[#1a1410] border border-[#ff5500]/50 text-[#ff5500] text-xs font-mono font-bold uppercase tracking-widest">
                <Radio size={12} className="animate-pulse" />
                <span>HEAVY COMPUTATIONAL INFRASTRUCTURE // HIGH FALLOUT RATED</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-mono text-white leading-none">
                M.U.L.E. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ffaa00] to-white">
                  TACTICAL HARDWARE
                </span>
              </h1>

              <p className="text-sm sm:text-base font-mono text-zinc-400 max-w-2xl leading-relaxed">
                Autonomous, radiation-shielded server racks, sub-zero liquid coolers, and neural-accelerated GPUs engineered for field-deployed AI processing and ruggedized data survival.
              </p>

              {/* Quick Spec Tags */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  ⚡ 1650W SOLID CAP
                </span>
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  ❄ -35°C CRYOLITE
                </span>
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  🛡 STANAG LEVEL 3
                </span>
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  ⚙ DIRECT-DIE LIQUID
                </span>
              </div>
            </div>

            {/* Featured Rig Hero Visual */}
            <div className="lg:col-span-5 relative bg-[#07090d] border border-[#262f40] p-4 group">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#ff5500] font-bold">
                FLAGSHIP ARTIFACT
              </div>
              <TechIllustration type="rig" className="w-full h-56 object-contain" />
              <div className="mt-2 pt-2 border-t border-zinc-800 flex justify-between items-center text-xs font-mono">
                <div>
                  <span className="text-[10px] text-zinc-500 block">MLE-SYS//VOID-5090T</span>
                  <span className="font-bold text-white uppercase">VOID-01 CRYORACK</span>
                </div>
                <button
                  onClick={() => setActiveProduct(MULE_PRODUCTS[0])}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-[#ff5500] hover:text-black text-zinc-200 font-bold transition-all text-xs flex items-center space-x-1"
                >
                  <span>INSPECT</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter & Command Bar */}
        <nav className="border border-[#1e2430] bg-[#0a0d13] p-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal size={14} className="text-[#ff5500] ml-2" />
            <span className="text-zinc-500 uppercase tracking-wider hidden sm:inline">FILTER ARTIFACTS:</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 transition-all uppercase cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ff5500] text-black font-black shadow-xs'
                    : 'bg-black/40 text-zinc-400 hover:text-white hover:bg-zinc-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-2 text-[11px] text-zinc-500 pr-2">
            <Barcode size={16} />
            <span>LOC: MAD-TERMINAL-01</span>
          </div>
        </nav>

        {/* Products Grid: Framerate Hardware + IP-AXIS Industrial Cards */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#0b0e14] border border-[#202736] hover:border-[#ff5500] transition-colors p-4 flex flex-col justify-between group relative"
            >
              {/* Corner targeting brackets */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-zinc-700 group-hover:border-[#ff5500] transition-colors" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-zinc-700 group-hover:border-[#ff5500] transition-colors" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-zinc-700 group-hover:border-[#ff5500] transition-colors" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-zinc-700 group-hover:border-[#ff5500] transition-colors" />

              {/* Card Header */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[#ff5500] font-bold tracking-widest">{prod.serialCode}</span>
                  <span className="px-2 py-0.5 bg-black/60 border border-zinc-800 text-zinc-400 uppercase">
                    {prod.status}
                  </span>
                </div>

                <h3 className="font-mono text-base font-bold text-white uppercase group-hover:text-[#ff5500] transition-colors pt-1">
                  {prod.name}
                </h3>
                <p className="font-mono text-xs text-zinc-500 tracking-wider">
                  {prod.jpName}
                </p>
              </div>

              {/* Schematic Illustration Area */}
              <div 
                onClick={() => setActiveProduct(prod)}
                className="my-3 p-2 bg-[#06080b] border border-zinc-800/80 cursor-pointer relative overflow-hidden group-hover:border-zinc-700 transition-colors"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 text-[10px] font-mono text-[#ff5500] flex items-center space-x-1">
                  <Maximize2 size={10} />
                  <span>EXPAND SPECS</span>
                </div>
                <TechIllustration type={prod.imageSvgType} className="w-full h-44 object-contain" />
              </div>

              {/* Key Specs Pills */}
              <div className="space-y-2 pt-2 border-t border-zinc-800/80 font-mono text-xs">
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="text-zinc-400">
                    <span className="text-zinc-600 block text-[9px]">PAYLOAD:</span>
                    {prod.payloadWeight}
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-zinc-600 block text-[9px]">POWER DRAW:</span>
                    {prod.powerDraw}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span className="block text-[9px] text-zinc-500 tracking-wider">CLEARANCE COST</span>
                    <span className="text-xl font-bold font-mono text-white">
                      ${prod.price.toLocaleString()}{' '}
                      <span className="text-[10px] text-zinc-500 font-normal">USD</span>
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setActiveProduct(prod)}
                      className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono font-semibold transition-all cursor-pointer"
                    >
                      SPECS
                    </button>
                    <button
                      onClick={() => handleAddToCart(prod)}
                      className="px-3.5 py-2 bg-[#ff5500] hover:bg-[#e04b00] text-black text-xs font-mono font-bold uppercase transition-all cursor-pointer shadow-md shadow-[#ff5500]/20"
                    >
                      + ALLOCATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Industrial Footer Manifest (IP-AXIS Barcode & Worldbuilding) */}
        <footer className="border border-[#1e2430] bg-[#0a0d13] p-6 text-xs font-mono space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-zinc-400">
            <div>
              <span className="text-white font-bold block mb-1">M.U.L.E. CORP // 一軸工業</span>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Specialized in deep fallout computing architecture, armored modular server frames, and extreme cold-loop heat dissipation.
              </p>
            </div>

            <div>
              <span className="text-white font-bold block mb-1">SECURITY CLEARANCE</span>
              <ul className="text-[11px] text-zinc-500 space-y-1">
                <li>• MIL-STD-810H Tested</li>
                <li>• Stanag Level 3 Hull Hardening</li>
                <li>• Chiral Resonance Certified</li>
              </ul>
            </div>

            <div>
              <span className="text-white font-bold block mb-1">NETWORK PROTOCOLS</span>
              <ul className="text-[11px] text-zinc-500 space-y-1">
                <li>• Terminal: {SYSTEM_TELEMETRY.terminalId}</li>
                <li>• Latency: {SYSTEM_TELEMETRY.networkLatency}</li>
                <li>• State: {SYSTEM_TELEMETRY.serverStatus}</li>
              </ul>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end">
              <div className="text-right">
                <span className="text-[#ff5500] font-black text-sm tracking-widest block">
                  ALL RIGHTS RESERVED © 2026
                </span>
                <span className="text-[10px] text-zinc-600">PORTFOLIO DEMO EXPERIENCE</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-600 pt-2">
                <ShieldCheck size={16} className="text-[#ff5500]" />
                <span className="text-[10px]">TIME-FALL SEAL VERIFIED</span>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* Slide-over Drawers */}
      <ProductDrawer
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;
