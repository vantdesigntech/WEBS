import React from 'react';
import { X, ShieldAlert, Cpu, Gauge, Zap, Flame, Radio, Plus, Minus, Trash2, Gamepad2 } from 'lucide-react';
import { Product } from '../data/products';

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl h-full bg-[#0a0d12] border-l border-[#ff5500]/40 flex flex-col shadow-2xl relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Military HUD Bar */}
        <div className="p-4 border-b border-[#202633] flex items-center justify-between bg-[#0e121a]">
          <div className="flex items-center space-x-3">
            <span className="h-2 w-2 bg-[#ff5500] animate-ping" />
            <span className="font-mono text-xs text-[#ff5500] tracking-widest font-bold">
              // TELEMETRY VIEW // {product.serialCode}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-6 flex-1 font-mono">
          {/* Header & Titles */}
          <div>
            <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-1">
              <span className="text-[#ff5500] font-bold">{product.category}</span>
              <span>•</span>
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] uppercase font-bold">
                {product.status}
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">
              {product.name}
            </h2>
            <p className="text-xs text-zinc-500 tracking-wider mt-0.5">
              {product.jpName}
            </p>
          </div>

          {/* Photographic Hardware Presentation */}
          <div className="relative bg-[#06080c] border border-zinc-800 p-4 flex items-center justify-center overflow-hidden">
            <div className="absolute top-2 left-2 text-[9px] text-zinc-600 font-bold">+PHOTOMETRIC CAPTURE</div>
            <div className="absolute top-2 right-2 text-[9px] text-[#ff5500] font-bold">1400PX AUTHENTIC</div>
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="max-h-64 object-contain select-none drop-shadow-[0_0_25px_rgba(255,85,0,0.15)]"
            />
          </div>

          {/* Price & Primary Callout */}
          <div className="p-4 bg-[#111622] border border-[#232b3c] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">
                Unit Clearance Cost
              </span>
              <span className="text-3xl font-black text-[#ff5500]">
                ${product.price.toLocaleString()} <span className="text-xs text-zinc-400 font-normal">USD</span>
              </span>
              <span className="block text-xs text-zinc-400 font-semibold mt-0.5">
                ≈ {product.priceUah.toLocaleString()} ₴ (Framerate UAH)
              </span>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="px-5 py-3 bg-[#ff5500] hover:bg-[#e04b00] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-2 shadow-lg shadow-[#ff5500]/20"
            >
              <span>+ ALLOCATE TO MANIFEST</span>
            </button>
          </div>

          {/* Gaming Benchmarks if available */}
          {product.benchmarks && product.benchmarks.length > 0 && (
            <div className="p-4 bg-[#0a0d13] border border-zinc-800 space-y-3">
              <div className="text-[10px] text-[#ff5500] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <Gamepad2 size={13} />
                <span>VERIFIED GAMING PERFORMANCE BENCHMARKS</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {product.benchmarks.map((b, idx) => (
                  <div key={idx} className="p-2 bg-[#06080b] border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block truncate">{b.game}</span>
                    <span className="text-lg font-black text-white">{b.fps} <span className="text-[9px] text-[#ff5500]">FPS</span></span>
                    <span className="text-[9px] text-zinc-600 block">{b.resolution}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-[#0d1017] border border-zinc-800">
              <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-1">
                <Gauge size={14} className="text-[#ff5500]" />
                <span>PAYLOAD WEIGHT</span>
              </div>
              <p className="text-sm text-zinc-200 font-semibold">{product.payloadWeight}</p>
            </div>

            <div className="p-3 bg-[#0d1017] border border-zinc-800">
              <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-1">
                <Zap size={14} className="text-amber-400" />
                <span>POWER DRAW</span>
              </div>
              <p className="text-sm text-zinc-200 font-semibold">{product.powerDraw}</p>
            </div>

            <div className="p-3 bg-[#0d1017] border border-zinc-800">
              <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-1">
                <Flame size={14} className="text-cyan-400" />
                <span>THERMAL RATING</span>
              </div>
              <p className="text-sm text-zinc-200 font-semibold">{product.thermalRating}</p>
            </div>

            <div className="p-3 bg-[#0d1017] border border-zinc-800">
              <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-1">
                <ShieldAlert size={14} className="text-emerald-400" />
                <span>CHIRAL DENSITY</span>
              </div>
              <p className="text-sm text-zinc-200 font-semibold">{product.chiralDensity}</p>
            </div>
          </div>

          {/* Detailed Specs List */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#ff5500] mb-3 flex items-center space-x-2">
              <Cpu size={14} />
              <span>Full Technical Specifications</span>
            </h3>
            <div className="border border-zinc-800 divide-y divide-zinc-800/80 bg-[#090c10]">
              {product.detailedSpecs.map((spec, i) => (
                <div key={i} className="p-3 flex justify-between text-xs">
                  <span className="text-zinc-400">{spec.label}</span>
                  <span className="text-zinc-200 text-right font-medium max-w-[60%]">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="p-4 bg-black/40 border-l-2 border-[#ff5500] text-xs text-zinc-300 leading-relaxed">
            <span className="text-[#ff5500] font-bold block mb-1">// FIELD OPERATIVE BRIEFING:</span>
            {product.description}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {product.highlightTags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 text-[10px] bg-[#161c28] border border-zinc-700 text-zinc-300 uppercase">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer info stamp */}
        <div className="p-4 border-t border-zinc-800 bg-[#090b0f] text-[10px] font-mono text-zinc-500 flex justify-between items-center">
          <span>STANAG CERTIFIED // M.U.L.E. CORP</span>
          <span className="text-[#ff5500]">VERIFIED STRAND ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
};

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  onCheckout
}) => {
  if (!isOpen) return null;

  const totalUsd = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalUah = cart.reduce((acc, item) => acc + item.product.priceUah * item.quantity, 0);
  const totalWeight = cart.reduce((acc, item) => {
    const w = parseFloat(item.product.payloadWeight) || 0;
    return acc + w * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md h-full bg-[#0a0d12] border-l border-[#ff5500]/40 flex flex-col shadow-2xl relative font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 border-b border-[#202633] flex items-center justify-between bg-[#0e121a]">
          <div className="flex items-center space-x-2">
            <Radio size={16} className="text-[#ff5500] animate-pulse" />
            <span className="text-xs text-white uppercase tracking-widest font-bold">
              /cart 大車 // CARGO MANIFEST ({cart.reduce((a, b) => a + b.quantity, 0)})
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cart List with Real Product Thumbnails */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 border border-dashed border-zinc-700 flex items-center justify-center text-zinc-600 text-xs">
                EMPTY
              </div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">
                NO HARDWARE ALLOCATED TO CURRENT RUN
              </p>
              <span className="text-[10px] text-zinc-600">
                Select compute modules from catalog or configurator.
              </span>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.product.id}
                className="p-3 bg-[#0e1219] border border-zinc-800 space-y-2 relative group"
              >
                <div className="flex space-x-3 items-center">
                  <div className="w-16 h-16 bg-black/70 border border-zinc-800 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[#ff5500] block truncate font-bold">
                      {item.product.serialCode}
                    </span>
                    <h4 className="text-xs text-white font-bold uppercase truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] text-zinc-400 block">
                      ${item.product.price.toLocaleString()} USD • ≈ {item.product.priceUah.toLocaleString()} ₴
                    </span>
                  </div>
                  <button 
                    onClick={() => onRemove(item.product.id)}
                    className="text-zinc-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-zinc-800/80">
                  <div className="flex items-center space-x-2 bg-[#05070a] border border-zinc-800 px-2 py-0.5">
                    <button 
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="text-zinc-400 hover:text-white text-xs cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-bold px-1 text-white">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="text-zinc-400 hover:text-white text-xs cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <span className="text-xs font-bold text-[#ff5500]">
                    ${(item.product.price * item.quantity).toLocaleString()} USD
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Bottom Summary */}
        {cart.length > 0 && (
          <div className="p-4 bg-[#0c1017] border-t border-zinc-800 space-y-4">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>ESTIMATED PAYLOAD WEIGHT:</span>
                <span className="text-zinc-200">{totalWeight.toFixed(1)} KG</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>CLEARANCE FEE:</span>
                <span className="text-emerald-400">WAIVED (MIL-COURIER)</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-400 pt-1">
                <span>UAH TOTAL ESTIMATE:</span>
                <span className="text-zinc-300 font-bold">{totalUah.toLocaleString()} ₴</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-2 border-t border-zinc-800 text-white">
                <span>TOTAL MANIFEST:</span>
                <span className="text-[#ff5500] text-base">${totalUsd.toLocaleString()} USD</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-[#ff5500] hover:bg-[#e04b00] text-black font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>CHECKOUT MANIFEST // 查看 →</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
