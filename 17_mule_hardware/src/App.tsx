import React, { useState } from 'react';
import { 
  MULE_PRODUCTS, 
  CATEGORIES, 
  Product, 
  SYSTEM_TELEMETRY 
} from './data/products';
import { InteractiveRigShowcase } from './components/InteractiveRigShowcase';
import { PcConfigurator } from './components/PcConfigurator';
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
  Maximize2,
  Cpu,
  Layers,
  Gamepad2,
  Sparkles,
  Zap
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
        <div className="fixed top-4 right-4 z-50 bg-[#ff5500] text-black font-mono text-xs px-4 py-2 font-bold uppercase tracking-widest shadow-2xl flex items-center space-x-2 animate-bounce border border-black">
          <Terminal size={14} />
          <span>{bannerAlert}</span>
        </div>
      )}

      {/* Main Framework Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">

        {/* Top Edge Military Status Bar */}
        <header className="border border-[#1e2430] bg-[#0a0d13]/95 backdrop-blur-md p-3 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#ff5500] font-black tracking-widest text-sm">
              <Crosshair size={18} />
              <span>M.U.L.E. 一軸工業</span>
            </div>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-300">
              SYS PROTOCOL: <strong className="text-white">v4.98-EXT // FRAMERATE CO-OP</strong>
            </span>
            <span className="hidden lg:inline text-zinc-600">|</span>
            <span className="hidden lg:inline text-zinc-400">
              CLEARANCE: <span className="text-emerald-400 font-bold">LVL-4 STRAND OK</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <nav className="hidden lg:flex items-center space-x-4 text-[11px] text-zinc-400 mr-2">
              <a href="#breakdown" className="hover:text-[#ff5500] transition-colors flex items-center space-x-1">
                <Layers size={11} />
                <span>EXPLODED_VIEW</span>
              </a>
              <a href="#configurator" className="hover:text-[#ff5500] transition-colors flex items-center space-x-1">
                <Cpu size={11} />
                <span>PC_CONFIGURATOR</span>
              </a>
              <a href="#catalogue" className="hover:text-[#ff5500] transition-colors flex items-center space-x-1">
                <Gamepad2 size={11} />
                <span>CATALOGUE</span>
              </a>
            </nav>

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

        {/* Hero Banner: Industrial Kojima Worldbuilding + Real Photographic Rig */}
        <section className="relative border border-[#232b3c] bg-[#0c1017] p-6 lg:p-10 overflow-hidden">
          {/* Top Edge Ruler Coordinates */}
          <div className="absolute top-2 left-4 right-4 flex justify-between text-[9px] font-mono text-zinc-600 select-none pointer-events-none">
            <span>+00.291.LAT // MULE.TACTICAL</span>
            <span>GRID: SECTOR-07_NORTH // KYIV-BASE-01</span>
            <span>TIME-FALL DAMPENING: ACTIVE</span>
            <span>+14.882.LONG // 50.4501° N</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-[#1a1410] border border-[#ff5500]/50 text-[#ff5500] text-xs font-mono font-bold uppercase tracking-widest">
                <Radio size={12} className="animate-pulse" />
                <span>FRAMERATE E-COMMERCE × M.U.L.E. HEAVY COMPUTATIONAL HARDWARE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-mono text-white leading-none">
                TACTICAL PC <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#00f0ff] to-white">
                  BATTLE STATIONS
                </span>
              </h1>

              <p className="text-sm sm:text-base font-mono text-zinc-300 max-w-2xl leading-relaxed">
                Hand-built liquid-cooled battle rigs, RTX 50-series graphics units, and high-frequency Ryzen 7800X3D platforms. Engineered with dual-chamber airflow, custom cryo-loops, and IP-AXIS industrial armor.
              </p>

              {/* Quick Spec Tags */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300 flex items-center space-x-1">
                  <Zap size={11} className="text-[#ff5500]" />
                  <span>RTX 5090 & 5070 GDDR7</span>
                </span>
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  ❄ 360MM CRYO-AIO LIQUID
                </span>
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  ⚡ 850W-1300W TITANIUM PSU
                </span>
                <span className="px-2.5 py-1 bg-black/60 border border-zinc-700 text-zinc-300">
                  🎮 CYBERPUNK 142+ FPS
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="#configurator"
                  className="px-5 py-2.5 bg-[#ff5500] hover:bg-[#e04b00] text-black font-mono font-black text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-lg shadow-[#ff5500]/25 cursor-pointer"
                >
                  <Cpu size={14} />
                  <span>CUSTOM BUILD CONFIGURATOR</span>
                </a>
                <a
                  href="#breakdown"
                  className="px-5 py-2.5 bg-[#0a0d14] hover:bg-zinc-800 border border-[#00f0ff]/40 text-[#00f0ff] font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <Layers size={14} />
                  <span>3D COMPONENT BREAKDOWN</span>
                </a>
              </div>
            </div>

            {/* Featured Rig Hero Visual (Real Scraped Framerate Asset) */}
            <div className="lg:col-span-5 relative bg-[#07090d] border border-[#262f40] p-4 group">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#00f0ff] font-bold flex items-center space-x-1 bg-black/80 px-2 py-0.5 border border-[#00f0ff]/30">
                <Sparkles size={10} />
                <span>FLAGSHIP RIG // ICE BEAST V2</span>
              </div>
              <div className="w-full h-72 flex items-center justify-center p-2 relative overflow-hidden bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-black/40">
                <img 
                  src="/assets/products/ice_beast_cyan_hero_hq.webp" 
                  alt="MULE Ice Beast V2 Custom Rig" 
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,240,255,0.25)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-2 pt-2 border-t border-zinc-800 flex justify-between items-center text-xs font-mono">
                <div>
                  <span className="text-[10px] text-zinc-500 block">MLE-SYS//ICE-BEAST-V2</span>
                  <span className="font-bold text-white uppercase">ICE BEAST V2 (RTX 5070 + R7 7800X3D)</span>
                </div>
                <button
                  onClick={() => setActiveProduct(MULE_PRODUCTS[0])}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-[#ff5500] hover:text-black text-zinc-200 font-bold transition-all text-xs flex items-center space-x-1 cursor-pointer"
                >
                  <span>INSPECT RIG</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Interactive Rig Breakdown (Framerate frame_12.png) */}
        <section id="breakdown">
          <InteractiveRigShowcase />
        </section>

        {/* SECTION 2: Custom PC Builder Configurator (Framerate frame_13.png) */}
        <section id="configurator">
          <PcConfigurator 
            onAddConfiguredRig={(customProduct: Product) => {
              handleAddToCart(customProduct);
              setIsCartOpen(true);
            }} 
          />
        </section>

        {/* SECTION 3: Catalog Header & Filter Command Bar */}
        <section id="catalogue" className="space-y-4">
          <nav className="border border-[#1e2430] bg-[#0a0d13] p-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={14} className="text-[#ff5500] ml-2" />
              <span className="text-zinc-400 font-bold uppercase tracking-wider hidden sm:inline">HARDWARE REPERTORY:</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 transition-all uppercase cursor-pointer text-xs font-mono ${
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
              <span>TERMINAL-KYIV-KY</span>
            </div>
          </nav>

          {/* Products Grid: Real Scraped Framerate Hardware + IP-AXIS Industrial Cards */}
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

                {/* Real Photographic Hardware Product Image */}
                <div 
                  onClick={() => setActiveProduct(prod)}
                  className="my-3 p-3 bg-[#06080b] border border-zinc-800/80 cursor-pointer relative overflow-hidden group-hover:border-[#ff5500]/50 transition-colors flex items-center justify-center min-h-[220px]"
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 px-2 py-1 text-[10px] font-mono text-[#ff5500] flex items-center space-x-1 border border-[#ff5500]/40 z-10">
                    <Maximize2 size={10} />
                    <span>EXPAND SPECS</span>
                  </div>

                  <img 
                    src={prod.imageUrl} 
                    alt={prod.name}
                    className="max-h-48 max-w-full object-contain filter group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />

                  {/* Corner crosshairs */}
                  <span className="absolute bottom-1 left-1 text-[8px] font-mono text-zinc-600 select-none">+</span>
                  <span className="absolute bottom-1 right-1 text-[8px] font-mono text-zinc-600 select-none">+</span>
                </div>

                {/* Live Gaming Benchmarks (if available) */}
                {prod.benchmarks && prod.benchmarks.length > 0 && (
                  <div className="mb-2 p-2 bg-[#080b10] border border-zinc-800 text-[10px] font-mono space-y-1">
                    <div className="text-zinc-500 flex justify-between items-center text-[9px]">
                      <span>FPS BENCHMARK:</span>
                      <span className="text-[#00f0ff] font-bold">{prod.benchmarks[0].game}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-zinc-800 h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#00f0ff] to-[#ff5500] h-full"
                          style={{ width: `${Math.min(100, (prod.benchmarks[0].fps / 240) * 100)}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">{prod.benchmarks[0].fps} FPS</span>
                    </div>
                  </div>
                )}

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

                  {/* Dual Pricing (USD & ₴ UAH Framerate) & Actions */}
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <span className="block text-[9px] text-zinc-500 tracking-wider">
                        {prod.priceUah ? `${prod.priceUah.toLocaleString()} ₴ UAH` : 'MULE TARIFF'}
                      </span>
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
        </section>

        {/* Industrial Footer Manifest (IP-AXIS Barcode & Worldbuilding) */}
        <footer className="border border-[#1e2430] bg-[#0a0d13] p-6 text-xs font-mono space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-zinc-400">
            <div>
              <span className="text-white font-bold block mb-1">M.U.L.E. × FRAMERATE // 一軸工業</span>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Direct integration of Framerate PC hardware components with Kojima Productions / IP-AXIS dystopian techwear framework. High-frequency liquid cooling and field-deployed AI processing.
              </p>
            </div>

            <div>
              <span className="text-white font-bold block mb-1">SECURITY CLEARANCE</span>
              <ul className="text-[11px] text-zinc-500 space-y-1">
                <li>• MIL-STD-810H Tested Chassis</li>
                <li>• Dual 360mm CryoLoop Heat Dissipation</li>
                <li>• Chiral Resonance Certified Level-4</li>
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
                <span className="text-[10px] text-zinc-600">FRAMERATED E-COMMERCE DEMO</span>
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
