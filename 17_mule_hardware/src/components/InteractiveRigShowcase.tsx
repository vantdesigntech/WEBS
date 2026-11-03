import React, { useState } from 'react';
import { Crosshair, Activity, CheckCircle2 } from 'lucide-react';

interface ComponentHotspot {
  id: string;
  label: string;
  jpLabel: string;
  name: string;
  top: string; // % from top
  left: string; // % from left
  specs: { label: string; value: string }[];
  thumbUrl: string;
  category: string;
}

const RIG_HOTSPOTS: ComponentHotspot[] = [
  {
    id: 'cooling',
    label: 'COOLING',
    jpLabel: '水冷散熱塔',
    name: 'PcCooler CryoLoop 360mm ARGB AIO',
    top: '12%',
    left: '78%',
    category: 'THERMAL REGULATION',
    thumbUrl: '/assets/products/part_radiator_fans.webp',
    specs: [
      { label: 'Radiator Size', value: '360mm High-Density Aluminum Fin Stack' },
      { label: 'Fans Included', value: '3x 120mm ARGB Mag-Lev High-Static Pressure' },
      { label: 'Pump RPM', value: '3,200 RPM Silent Ceramic Bearing' },
      { label: 'TDP Dissipation', value: 'Rated up to 380W Continuous Load' }
    ]
  },
  {
    id: 'motherboard',
    label: 'MOTHERBOARD',
    jpLabel: '主基盤',
    name: 'AMD B650M Gaming Pro WiFi Armor',
    top: '25%',
    left: '60%',
    category: 'BUS INTERCONNECT',
    thumbUrl: '/assets/products/part_cpu_liquid_block.webp',
    specs: [
      { label: 'Chipset', value: 'AMD B650 Platform // AM5 Socket' },
      { label: 'Power Phases', value: '12+2+1 Duet Rail Power System 80A SPS' },
      { label: 'Expansion', value: '1x PCIe 5.0 x16 Steel Armor Slot' },
      { label: 'Networking', value: 'Realtek 2.5G LAN + WiFi 6E Ultra-Band' }
    ]
  },
  {
    id: 'cpu',
    label: 'CPU',
    jpLabel: '中央演算装置',
    name: 'AMD Ryzen 7 7800X3D (8C / 16T)',
    top: '34%',
    left: '42%',
    category: 'CENTRAL PROCESSING',
    thumbUrl: '/assets/products/part_cpu_liquid_block.webp',
    specs: [
      { label: 'Core / Thread', value: '8 Cores / 16 Threads 3D V-Cache' },
      { label: 'Boost Frequency', value: 'Up to 5.0 GHz Max Boost Clock' },
      { label: 'L3 Cache Pool', value: '96MB 3D V-Cache Ultra-Low Latency' },
      { label: 'Default TDP', value: '120W Optimized Thermal Envelope' }
    ]
  },
  {
    id: 'ram',
    label: 'RAM',
    jpLabel: '高速記憶装置',
    name: '32GB (2x16GB) Apacer NOX RGB Silver DDR5-6000',
    top: '40%',
    left: '58%',
    category: 'SYSTEM MEMORY',
    thumbUrl: '/assets/products/part_cpu_liquid_block.webp',
    specs: [
      { label: 'Capacity', value: '32GB (Dual-Channel 2x16GB)' },
      { label: 'Speed Rating', value: 'DDR5 6000 MT/s CL30 EXPO Ready' },
      { label: 'Heat Spreader', value: 'Milled Aluminum Armor in Brushed Silver' },
      { label: 'Lighting', value: 'Diffused Panoramic ARGB Synchronization' }
    ]
  },
  {
    id: 'gpu',
    label: 'GRAPHIC CARD',
    jpLabel: '画像演算加速素子',
    name: 'Gigabyte Eagle OC Ice GeForce RTX 5070 12GB',
    top: '48%',
    left: '32%',
    category: 'NEURAL GRAPHICS',
    thumbUrl: '/assets/products/part_rtx_gpu.webp',
    specs: [
      { label: 'GPU Engine', value: 'NVIDIA Blackwell // 6,144 CUDA Cores' },
      { label: 'VRAM Type', value: '12GB GDDR7 192-bit @ 28 Gbps' },
      { label: 'Cooling Design', value: 'Windforce Triple 90mm Blade Fans' },
      { label: 'AI Features', value: 'DLSS 4.x Frame Generation + Ray Tracing 4th Gen' }
    ]
  },
  {
    id: 'psu',
    label: 'POWER BLOCK',
    jpLabel: '電力供給装置',
    name: '850W 80-Plus Gold Modular ATX 3.1',
    top: '60%',
    left: '40%',
    category: 'POWER REGULATION',
    thumbUrl: '/assets/products/part_rtx_gpu.webp',
    specs: [
      { label: 'Output Power', value: '850W Continuous Clean Delivery' },
      { label: 'Certification', value: '80 PLUS Gold (92%+ Efficiency)' },
      { label: 'Connector', value: 'Native 12V-2x6 PCIe 5.1 600W Cable' },
      { label: 'Capacitors', value: '100% 105°C Japanese Primary Capacitors' }
    ]
  },
  {
    id: 'chassis',
    label: 'PC BUILD',
    jpLabel: '全景筐体',
    name: 'PcCooler C3B310 BK Panoramic Case',
    top: '68%',
    left: '84%',
    category: 'CHASSIS ENCLOSURE',
    thumbUrl: '/assets/products/ice_beast_cyan_hero_hq.webp',
    specs: [
      { label: 'View Angle', value: '270° Seamless Dual Tempered Glass' },
      { label: 'Chamber Design', value: 'Dual Compartment Thermal Isolation' },
      { label: 'Fan Support', value: 'Supports up to 10x 120mm ARGB Fans' },
      { label: 'Dimensions', value: '435mm x 280mm x 425mm High-Tensile Steel' }
    ]
  }
];

export const InteractiveRigShowcase: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<ComponentHotspot>(RIG_HOTSPOTS[4]); // default GPU

  return (
    <section className="border border-[#1e2430] bg-[#090c12] p-6 lg:p-8 relative overflow-hidden">
      {/* Top Coordinate Banner */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/80 pb-4 mb-6 text-xs font-mono">
        <div className="flex items-center space-x-3">
          <div className="px-2 py-0.5 bg-[#ff5500] text-black font-black uppercase text-[10px] tracking-widest">
            EXPLODED RIG TELEMETRY
          </div>
          <span className="text-white font-bold tracking-wider">
            ICE BEAST V2 // HARDWARE COMPONENT BREAKDOWN
          </span>
          <span className="text-zinc-500 font-mono hidden sm:inline">・ 構造分解図</span>
        </div>
        <div className="text-zinc-500 text-[11px] font-mono flex items-center space-x-3">
          <span>INTERACTIVE PINS [7 NODES]</span>
          <span className="text-emerald-400 flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>ONLINE</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Rig Photograph with Clickable Hotspots */}
        <div className="lg:col-span-7 relative bg-[#05070a] border border-[#202736] p-2 flex items-center justify-center min-h-[460px] group">
          {/* Outer grid crosshairs */}
          <div className="absolute top-2 left-2 text-[#ff5500] text-xs font-mono font-bold">+01</div>
          <div className="absolute top-2 right-2 text-zinc-600 text-xs font-mono font-bold">+02</div>
          <div className="absolute bottom-2 left-2 text-zinc-600 text-xs font-mono font-bold">+03</div>
          <div className="absolute bottom-2 right-2 text-[#ff5500] text-xs font-mono font-bold">+04</div>

          {/* Scraped Real Hardware Tower Image */}
          <div className="relative max-w-[480px] w-full">
            <img 
              src="/assets/products/ice_beast_tower_detail.webp" 
              alt="ICE BEAST V2 Hardware Breakdown" 
              className="w-full h-auto object-contain select-none drop-shadow-[0_0_35px_rgba(0,229,255,0.15)]"
            />

            {/* Clickable Hotspot Pins Overlay */}
            {RIG_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: spot.top, left: spot.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group/btn cursor-pointer transition-all duration-300 z-20 ${
                    isSelected ? 'scale-110 ring-2 ring-[#ff5500]' : 'hover:scale-105'
                  }`}
                  title={`${spot.label}: ${spot.name}`}
                >
                  <div className={`px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider flex items-center space-x-1 uppercase transition-colors shadow-lg ${
                    isSelected 
                      ? 'bg-[#ff5500] text-black border border-white' 
                      : 'bg-black/90 text-zinc-300 border border-zinc-700 hover:border-[#ff5500] hover:text-[#ff5500]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black animate-ping' : 'bg-[#ff5500]'}`} />
                    <span>{spot.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-3 left-4 text-[10px] font-mono text-zinc-600 flex items-center space-x-2 pointer-events-none">
            <Crosshair size={12} className="text-[#ff5500]" />
            <span>CLICK ANY PIN TO INSPECT COMPONENT TELEMETRY</span>
          </div>
        </div>

        {/* Right Column: Active Component Live Telemetry Sheet */}
        <div className="lg:col-span-5 bg-[#0b0e14] border border-[#222938] p-6 space-y-5 relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-mono text-[#ff5500] font-bold tracking-widest uppercase flex items-center space-x-2">
                <Activity size={12} />
                <span>{activeHotspot.category}</span>
                <span>•</span>
                <span>{activeHotspot.jpLabel}</span>
              </div>
              <h3 className="text-xl font-mono font-bold text-white uppercase mt-1 leading-snug">
                {activeHotspot.name}
              </h3>
            </div>
            <span className="px-2 py-1 bg-[#1a1410] border border-[#ff5500]/60 text-[#ff5500] font-mono text-xs font-bold">
              {activeHotspot.label}
            </span>
          </div>

          {/* Component Thumbnail Card */}
          <div className="relative border border-zinc-800 bg-[#05070a] p-3 flex items-center space-x-4">
            <div className="w-24 h-24 bg-black/80 border border-zinc-700/80 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img 
                src={activeHotspot.thumbUrl} 
                alt={activeHotspot.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-1 font-mono text-xs">
              <span className="text-[10px] text-zinc-500 uppercase block">AUTHENTIC PART SPECIFICATION</span>
              <p className="text-zinc-200 font-semibold leading-relaxed">
                Directly assembled in Framerate ICE BEAST V2 production chassis.
              </p>
              <div className="flex items-center space-x-2 text-[10px] text-emerald-400 pt-1">
                <CheckCircle2 size={12} />
                <span>GENUINE COMPONENT CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="space-y-2 font-mono">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
              ENGINEERING PARAMETERS // 仕様
            </div>
            <div className="border border-zinc-800/80 divide-y divide-zinc-800/60 bg-[#080a0f] text-xs">
              {activeHotspot.specs.map((item, idx) => (
                <div key={idx} className="p-2.5 flex justify-between items-center">
                  <span className="text-zinc-400">{item.label}:</span>
                  <span className="text-white font-medium text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Selector Pills */}
          <div className="pt-2 border-t border-zinc-800 flex flex-wrap gap-1.5">
            {RIG_HOTSPOTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveHotspot(s)}
                className={`px-2.5 py-1 text-[10px] font-mono transition-colors uppercase ${
                  activeHotspot.id === s.id
                    ? 'bg-[#ff5500] text-black font-black'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
