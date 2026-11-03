import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Gamepad2, 
  Sparkles, 
  ShoppingCart, 
  Check, 
  Gauge, 
  Fan
} from 'lucide-react';
import { Product } from '../data/products';

interface ConfigOption {
  id: string;
  name: string;
  series?: string;
  specs: string;
  priceDelta: number;
  priceDeltaUah: number;
  fpsMultiplier: number;
}

const GPU_OPTIONS: ConfigOption[] = [
  { id: 'rtx-5090', name: 'NVIDIA GeForce RTX 5090', series: 'SERIA RTX 50', specs: '24GB GDDR7 • 512-bit • DLSS 4.x', priceDelta: 1350, priceDeltaUah: 55000, fpsMultiplier: 1.55 },
  { id: 'rtx-5080', name: 'NVIDIA GeForce RTX 5080', series: 'SERIA RTX 50', specs: '16GB GDDR7 • 256-bit • DLSS 4.x', priceDelta: 650, priceDeltaUah: 26500, fpsMultiplier: 1.30 },
  { id: 'rtx-5070', name: 'Gigabyte Eagle OC Ice RTX 5070', series: 'SERIA RTX 50', specs: '12GB GDDR7 • 192-bit • Base Option', priceDelta: 0, priceDeltaUah: 0, fpsMultiplier: 1.0 },
  { id: 'rtx-5060ti', name: 'NVIDIA GeForce RTX 5060 Ti', series: 'SERIA RTX 50', specs: '16GB GDDR7 • 128-bit', priceDelta: -160, priceDeltaUah: -6500, fpsMultiplier: 0.82 },
  { id: 'rtx-4090', name: 'NVIDIA GeForce RTX 4090', series: 'SERIA RTX 40', specs: '24GB GDDR6X • 384-bit', priceDelta: 1100, priceDeltaUah: 45000, fpsMultiplier: 1.42 },
  { id: 'rtx-3090', name: 'NVIDIA GeForce RTX 3090', series: 'SERIA RTX 30', specs: '24GB GDDR6X • 384-bit Classic', priceDelta: 320, priceDeltaUah: 13000, fpsMultiplier: 1.05 }
];

const CPU_OPTIONS: ConfigOption[] = [
  { id: 'ryzen-7800x3d', name: 'AMD Ryzen 7 7800X3D', specs: '8 Cores / 16 Threads • 5.0 GHz • 96MB 3D V-Cache', priceDelta: 0, priceDeltaUah: 0, fpsMultiplier: 1.0 },
  { id: 'ryzen-7950x3d', name: 'AMD Ryzen 9 7950X3D', specs: '16 Cores / 32 Threads • 5.7 GHz • 128MB Cache', priceDelta: 260, priceDeltaUah: 10500, fpsMultiplier: 1.12 },
  { id: 'intel-14900ks', name: 'Intel Core i9-14900KS', specs: '24 Cores / 32 Threads • 6.2 GHz Extreme', priceDelta: 340, priceDeltaUah: 13800, fpsMultiplier: 1.14 },
  { id: 'ryzen-7500f', name: 'AMD Ryzen 5 7500F', specs: '6 Cores / 12 Threads • 5.0 GHz Entry', priceDelta: -150, priceDeltaUah: -6000, fpsMultiplier: 0.88 }
];

const RAM_OPTIONS: ConfigOption[] = [
  { id: 'ram-32', name: '32GB (2x16GB) Apacer NOX DDR5-6000', specs: '6000 MT/s • CL30 • RGB Silver Armor', priceDelta: 0, priceDeltaUah: 0, fpsMultiplier: 1.0 },
  { id: 'ram-64', name: '64GB (2x32GB) High-Speed DDR5-6400', specs: '6400 MT/s • CL32 • Ultra Low Latency', priceDelta: 140, priceDeltaUah: 5700, fpsMultiplier: 1.04 },
  { id: 'ram-128', name: '128GB (4x32GB) Quad-Channel DDR5-6000', specs: 'Workstation Tier • Multi-Tasking Bank', priceDelta: 320, priceDeltaUah: 13000, fpsMultiplier: 1.06 }
];

const COOLING_OPTIONS: ConfigOption[] = [
  { id: 'cool-360', name: 'PcCooler CryoLoop 360mm ARGB AIO', specs: 'Triple 120mm Radiator • Ceramic Pump • Base', priceDelta: 0, priceDeltaUah: 0, fpsMultiplier: 1.0 },
  { id: 'cool-420', name: 'Sub-Zero 420mm Custom Liquid Loop', specs: 'Thick Copper Core • Dual Pump High-Flow', priceDelta: 220, priceDeltaUah: 8900, fpsMultiplier: 1.03 },
  { id: 'cool-air', name: 'Mag-Lev Dual-Tower Air Cooler', specs: 'Direct Contact 7 Heatpipes • Stealth Matte', priceDelta: -60, priceDeltaUah: -2400, fpsMultiplier: 0.98 }
];

interface PcConfiguratorProps {
  onAddConfiguredRig: (product: Product) => void;
}

export const PcConfigurator: React.FC<PcConfiguratorProps> = ({ onAddConfiguredRig }) => {
  const [selectedGpu, setSelectedGpu] = useState<ConfigOption>(GPU_OPTIONS[2]); // RTX 5070
  const [selectedCpu, setSelectedCpu] = useState<ConfigOption>(CPU_OPTIONS[0]); // Ryzen 7 7800X3D
  const [selectedRam, setSelectedRam] = useState<ConfigOption>(RAM_OPTIONS[0]); // 32GB
  const [selectedCooling, setSelectedCooling] = useState<ConfigOption>(COOLING_OPTIONS[0]); // 360mm

  // Base price: $1,099 USD / 44,999 ₴
  const basePriceUsd = 1099;
  const basePriceUah = 44999;

  const totalPriceUsd = basePriceUsd + selectedGpu.priceDelta + selectedCpu.priceDelta + selectedRam.priceDelta + selectedCooling.priceDelta;
  const totalPriceUah = basePriceUah + selectedGpu.priceDeltaUah + selectedCpu.priceDeltaUah + selectedRam.priceDeltaUah + selectedCooling.priceDeltaUah;

  // Combined benchmark multiplier
  const perfMultiplier = selectedGpu.fpsMultiplier * selectedCpu.fpsMultiplier * selectedRam.fpsMultiplier;

  // Base game FPS at base configuration
  const cyberpunkFps = Math.round(110 * perfMultiplier);
  const apexFps = Math.round(239 * perfMultiplier);
  const cs2Fps = Math.round(499 * perfMultiplier);

  const handleManifestRig = () => {
    const customRig: Product = {
      id: `custom-rig-${Date.now()}`,
      serialCode: `MLE-CFG//${selectedGpu.id.toUpperCase()}-${selectedCpu.id.slice(0, 5).toUpperCase()}`,
      category: 'HEAVY RIG',
      name: `CUSTOM M.U.L.E. RIG // ${selectedGpu.name}`,
      jpName: '特注機甲・個別最適化主機',
      price: totalPriceUsd,
      priceUah: totalPriceUah,
      status: 'NEW RELEASE',
      payloadWeight: '23.8 KG',
      powerDraw: '850W-1200W SOLID CAP',
      thermalRating: selectedCooling.name,
      chiralDensity: '0.009 µg/m³',
      armorClass: 'CUSTOM CHASSIS // DUAL CHAMBER',
      imageUrl: '/assets/products/ice_beast_cyan_hero_hq.webp',
      description: `Bespoke custom-configured gaming station featuring ${selectedGpu.name}, ${selectedCpu.name}, ${selectedRam.name}, and ${selectedCooling.name}.`,
      detailedSpecs: [
        { label: 'Graphics Card', value: `${selectedGpu.name} (${selectedGpu.specs})` },
        { label: 'Processor', value: `${selectedCpu.name} (${selectedCpu.specs})` },
        { label: 'Memory Bank', value: `${selectedRam.name} (${selectedRam.specs})` },
        { label: 'Cooling Unit', value: `${selectedCooling.name} (${selectedCooling.specs})` },
        { label: 'Chassis Hull', value: 'PcCooler C3B310 BK Dual Chamber Panoramic' },
        { label: 'Storage', value: '1TB NVMe PCIe 4.0 High Speed M.2' }
      ],
      highlightTags: ['CUSTOM-BUILD', selectedGpu.name.split(' ').slice(-2).join(' '), 'DLSS 4.X', 'HIGH-FPS'],
      benchmarks: [
        { game: 'Cyberpunk 2077 (RT Overdrive)', fps: cyberpunkFps, resolution: '1440p' },
        { game: 'Apex Legends', fps: apexFps, resolution: '1440p' },
        { game: 'Counter-Strike 2', fps: cs2Fps, resolution: '1080p' }
      ]
    };
    onAddConfiguredRig(customRig);
  };

  return (
    <section id="configurator" className="border border-[#1e2430] bg-[#07090e] p-6 lg:p-8 space-y-6">
      {/* Top Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 pb-4 text-xs font-mono">
        <div className="flex items-center space-x-3">
          <div className="px-2.5 py-1 bg-[#ff5500] text-black font-black uppercase text-[10px] tracking-widest flex items-center space-x-1.5">
            <Sparkles size={12} />
            <span>INTERACTIVE CONFIGURATOR</span>
          </div>
          <span className="text-white font-bold tracking-wider">
            BUILD YOUR OWN GAMING RIG // 組裝
          </span>
        </div>
        <div className="text-zinc-500 text-[11px]">
          REAL-TIME HARDWARE SIMULATION • 3 GAMES BENCHMARK
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3D Tower Display */}
        <div className="lg:col-span-5 bg-[#0a0d13] border border-[#202738] p-5 flex flex-col items-center justify-between relative group min-h-[500px]">
          <div className="w-full flex justify-between items-center text-[10px] font-mono text-zinc-500 pb-2 border-b border-zinc-800/80">
            <span className="text-[#ff5500] font-bold">PREVIEW CHASSIS</span>
            <span>PcCooler C3B310 BK</span>
          </div>

          <div className="my-auto relative max-w-[340px] w-full py-4 flex items-center justify-center">
            <img 
              src="/assets/products/ice_beast_cyan_hero_hq.webp" 
              alt="Configured PC Rig"
              className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(0,229,255,0.2)] transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Interactive Pulse on GPU area */}
            <div className="absolute top-[52%] left-[45%] w-3 h-3 bg-[#ff5500] rounded-full animate-ping pointer-events-none" />
          </div>

          <div className="w-full pt-3 border-t border-zinc-800/80 space-y-2 font-mono text-xs">
            <div className="flex justify-between text-[11px]">
              <span className="text-zinc-500">ACTIVE GPU:</span>
              <span className="text-white font-bold">{selectedGpu.name}</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-zinc-500">ACTIVE CPU:</span>
              <span className="text-white font-bold">{selectedCpu.name}</span>
            </div>
          </div>
        </div>

        {/* Center: Component Selector */}
        <div className="lg:col-span-4 space-y-6 font-mono">
          {/* GPU Series */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#ff5500] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <Gauge size={14} />
                <span>01 // GRAPHICS CARD (GPU)</span>
              </span>
              <span className="text-[10px] text-zinc-500">GDDR7 / BLACKWELL</span>
            </div>
            <div className="space-y-1.5">
              {GPU_OPTIONS.map((gpu) => {
                const isSelected = selectedGpu.id === gpu.id;
                return (
                  <button
                    key={gpu.id}
                    onClick={() => setSelectedGpu(gpu)}
                    className={`w-full p-2.5 text-left border text-xs transition-all flex justify-between items-center cursor-pointer ${
                      isSelected 
                        ? 'bg-[#1a1410] border-[#ff5500] text-white shadow-sm' 
                        : 'bg-[#0d1017] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center space-x-1.5">
                        {isSelected && <Check size={12} className="text-[#ff5500]" />}
                        <span>{gpu.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 block">{gpu.specs}</span>
                    </div>
                    <span className={`text-[11px] font-bold ${gpu.priceDelta > 0 ? 'text-[#ff5500]' : gpu.priceDelta < 0 ? 'text-emerald-400' : 'text-zinc-400'}`}>
                      {gpu.priceDelta > 0 ? `+$${gpu.priceDelta}` : gpu.priceDelta < 0 ? `-$${Math.abs(gpu.priceDelta)}` : 'BASE'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CPU Selection */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#ff5500] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <Cpu size={14} />
                <span>02 // PROCESSOR (CPU)</span>
              </span>
              <span className="text-[10px] text-zinc-500">AMD / INTEL</span>
            </div>
            <div className="space-y-1.5">
              {CPU_OPTIONS.map((cpu) => {
                const isSelected = selectedCpu.id === cpu.id;
                return (
                  <button
                    key={cpu.id}
                    onClick={() => setSelectedCpu(cpu)}
                    className={`w-full p-2.5 text-left border text-xs transition-all flex justify-between items-center cursor-pointer ${
                      isSelected 
                        ? 'bg-[#1a1410] border-[#ff5500] text-white shadow-sm' 
                        : 'bg-[#0d1017] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center space-x-1.5">
                        {isSelected && <Check size={12} className="text-[#ff5500]" />}
                        <span>{cpu.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 block">{cpu.specs}</span>
                    </div>
                    <span className={`text-[11px] font-bold ${cpu.priceDelta > 0 ? 'text-[#ff5500]' : cpu.priceDelta < 0 ? 'text-emerald-400' : 'text-zinc-400'}`}>
                      {cpu.priceDelta > 0 ? `+$${cpu.priceDelta}` : cpu.priceDelta < 0 ? `-$${Math.abs(cpu.priceDelta)}` : 'BASE'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RAM & Cooling Compact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* RAM */}
            <div className="space-y-2">
              <span className="text-[#ff5500] font-bold text-xs uppercase flex items-center space-x-1">
                <Layers size={12} />
                <span>03 // RAM</span>
              </span>
              <div className="space-y-1">
                {RAM_OPTIONS.map((ram) => (
                  <button
                    key={ram.id}
                    onClick={() => setSelectedRam(ram)}
                    className={`w-full p-2 text-left border text-[11px] transition-all cursor-pointer ${
                      selectedRam.id === ram.id 
                        ? 'bg-[#1a1410] border-[#ff5500] text-white' 
                        : 'bg-[#0d1017] border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <div className="font-bold truncate">{ram.name}</div>
                    <span className="text-[9px] text-[#ff5500]">
                      {ram.priceDelta > 0 ? `+$${ram.priceDelta}` : 'BASE'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cooling */}
            <div className="space-y-2">
              <span className="text-[#ff5500] font-bold text-xs uppercase flex items-center space-x-1">
                <Fan size={12} />
                <span>04 // COOLING</span>
              </span>
              <div className="space-y-1">
                {COOLING_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCooling(c)}
                    className={`w-full p-2 text-left border text-[11px] transition-all cursor-pointer ${
                      selectedCooling.id === c.id 
                        ? 'bg-[#1a1410] border-[#ff5500] text-white' 
                        : 'bg-[#0d1017] border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <div className="font-bold truncate">{c.name}</div>
                    <span className="text-[9px] text-[#ff5500]">
                      {c.priceDelta > 0 ? `+$${c.priceDelta}` : c.priceDelta < 0 ? `-$${Math.abs(c.priceDelta)}` : 'BASE'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary, Live Pricing & Gaming Benchmark */}
        <div className="lg:col-span-3 space-y-5 bg-[#0a0d13] border border-[#202738] p-5 font-mono">
          <div className="border-b border-zinc-800 pb-3">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">SYSTEM UNIT CHECKLIST</span>
            <h4 className="text-sm font-bold text-white uppercase mt-0.5">M.U.L.E. RIG SPECIFICATION</h4>
          </div>

          {/* Live Price Tag */}
          <div className="p-3 bg-[#111622] border border-[#232b3c] space-y-1">
            <span className="text-[9px] text-zinc-400 uppercase tracking-widest block">TOTAL BUILD CLEARANCE</span>
            <div className="text-2xl font-black text-[#ff5500] leading-none">
              ${totalPriceUsd.toLocaleString()} <span className="text-xs text-zinc-400 font-normal">USD</span>
            </div>
            <div className="text-xs text-zinc-400 font-semibold">
              ≈ {totalPriceUah.toLocaleString()} ₴ <span className="text-[10px] text-zinc-500">(Framerate UAH)</span>
            </div>
          </div>

          {/* Live Games Benchmark (Directly matching Framerate frame_13.png) */}
          <div className="space-y-3 pt-2">
            <div className="text-[10px] text-[#ff5500] font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <Gamepad2 size={13} />
              <span>LIVE GAME STATISTICS // FPS</span>
            </div>

            {/* Cyberpunk */}
            <div className="p-2.5 bg-[#07090d] border border-zinc-800 space-y-1.5">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-300 font-semibold">Cyberpunk 2077 (RT Overdrive)</span>
                <span className="text-[#ff5500] font-black">{cyberpunkFps} FPS</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 overflow-hidden">
                <div 
                  className="bg-[#ff5500] h-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (cyberpunkFps / 200) * 100)}%` }} 
                />
              </div>
            </div>

            {/* Apex Legends */}
            <div className="p-2.5 bg-[#07090d] border border-zinc-800 space-y-1.5">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-300 font-semibold">Apex Legends (1440p)</span>
                <span className="text-[#ff5500] font-black">{apexFps} FPS</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 overflow-hidden">
                <div 
                  className="bg-[#ff5500] h-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (apexFps / 360) * 100)}%` }} 
                />
              </div>
            </div>

            {/* CS2 */}
            <div className="p-2.5 bg-[#07090d] border border-zinc-800 space-y-1.5">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-300 font-semibold">Counter-Strike 2</span>
                <span className="text-[#00e5ff] font-black">{cs2Fps} FPS</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 overflow-hidden">
                <div 
                  className="bg-[#00e5ff] h-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (cs2Fps / 650) * 100)}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Buy PC Button */}
          <button
            onClick={handleManifestRig}
            className="w-full py-3.5 bg-[#ff5500] hover:bg-[#e04b00] text-black font-mono font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#ff5500]/25 flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={14} />
            <span>BUY CONFIGURED PC // 組裝購入</span>
          </button>
        </div>
      </div>
    </section>
  );
};
