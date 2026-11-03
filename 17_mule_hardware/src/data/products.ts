export interface Product {
  id: string;
  serialCode: string;
  category: 'HEAVY RIG' | 'NEURAL GPU' | 'EXO COOLING' | 'CORE MODULE' | 'CHASSIS' | 'STRAND LINK';
  name: string;
  jpName: string;
  price: number;
  status: 'IN STOCK' | 'SECURED BATCH' | 'MIL-SPEC ONLY' | 'PROTOTYPE';
  payloadWeight: string;
  powerDraw: string;
  thermalRating: string;
  chiralDensity: string;
  armorClass: string;
  description: string;
  detailedSpecs: { label: string; value: string }[];
  highlightTags: string[];
  imageSvgType: 'rig' | 'gpu' | 'cooler' | 'core' | 'chassis' | 'terminal';
}

export const CATEGORIES = [
  'ALL ARTIFACTS',
  'HEAVY RIG',
  'NEURAL GPU',
  'EXO COOLING',
  'CORE MODULE',
  'CHASSIS'
] as const;

export const MULE_PRODUCTS: Product[] = [
  {
    id: 'mule-rig-01',
    serialCode: 'MLE-SYS//VOID-5090T',
    category: 'HEAVY RIG',
    name: 'VOID-01 EXTREME CRYORACK',
    jpName: '極冷演算主機・零号機',
    price: 5850,
    status: 'SECURED BATCH',
    payloadWeight: '26.8 KG',
    powerDraw: '1650W TITANIUM QUAD-BUS',
    thermalRating: 'SUB-ZERO CRYOLITE -35°C',
    chiralDensity: '0.042 µg/m³',
    armorClass: 'STANAG LEVEL 3 TITANIUM CAGE',
    description: 'Enclosed reinforced computational rig engineered for high-radiation fallout zones, atmospheric chiral storm dampening, and dense neural network rendering.',
    detailedSpecs: [
      { label: 'Compute Architecture', value: 'Blackwell Ada-X // 28,160 CUDA Neural Cores' },
      { label: 'Thermal Loop', value: 'Closed Cryolite-Hex Dual Phase Sub-Zero Loop' },
      { label: 'Chassis Hull', value: 'Milled Aeronautic Titanium + Chiral-Resistant Carbon' },
      { label: 'Data Bus', value: 'PCIe 6.0 x16 Optic-Strand Bus (256 GB/s)' },
      { label: 'Power Regulation', value: 'Mil-Grade 1650W Solid-Cap Modular Power Distribution' }
    ],
    highlightTags: ['CHIRAL-SHIELD', 'SUB-ZERO', '24GB GDDR7', 'EMP-RESIST'],
    imageSvgType: 'rig'
  },
  {
    id: 'mule-gpu-02',
    serialCode: 'MLE-ACC//TITAN-RTX90',
    category: 'NEURAL GPU',
    name: 'STRAND TITAN-RTX HEAVY ACCELERATOR',
    jpName: '神経加速演算素子・重装型',
    price: 2490,
    status: 'IN STOCK',
    payloadWeight: '4.85 KG',
    powerDraw: '650W DUAL 12V-2X6',
    thermalRating: 'ACTIVE JET VAPOR CHAMBER',
    chiralDensity: '0.012 µg/m³',
    armorClass: 'REINFORCED EXOSKELETAL FRAME',
    description: 'Industrial quad-slot compute core designed with internal anti-sag hydraulic piston and high-torque turbine fans for 24/7 unthrottled deep learning telemetry.',
    detailedSpecs: [
      { label: 'Tensor Cores', value: '5th Gen Tensor Array with FP4/FP8 Matrix Micro-Engines' },
      { label: 'VRAM Buffer', value: '32GB Ultra-Wide GDDR7 @ 32 Gbps (2,048 GB/s Bandwidth)' },
      { label: 'Cooling Block', value: 'Micro-Channel Copper Fin Matrix with Graphene Vapor Core' },
      { label: 'Structural Reinforce', value: 'Cast Magnesium Backbone with Integrated Rail Mounts' }
    ],
    highlightTags: ['32GB GDDR7', 'DUAL 12V-2X6', 'QUAD-SLOT', '4K-UNLOCKED'],
    imageSvgType: 'gpu'
  },
  {
    id: 'mule-cool-03',
    serialCode: 'MLE-THM//CRYO-HEX-420',
    category: 'EXO COOLING',
    name: 'EXO-CRYO 420 LIQUID CONDENSER',
    jpName: '外部極冷液環散熱塔',
    price: 680,
    status: 'IN STOCK',
    payloadWeight: '6.40 KG',
    powerDraw: '95W ULTRA-PWM INDUSTRIAL',
    thermalRating: 'RATED TO 750W TDP HEAT DISSIPATION',
    chiralDensity: '0.005 µg/m³',
    armorClass: 'BRAIDED STEEL HYDRAULIC CASING',
    description: 'External triple-radiator heat dissipation system equipped with industrial brushless mag-lev pumps, quick-disconnect dry break couplings, and digital chiral flow meters.',
    detailedSpecs: [
      { label: 'Radiator Volume', value: '420mm Double-Thick 65mm High-Density Copper Array' },
      { label: 'Pumping Velocity', value: 'Dual Ceramic Bearing Pumps @ 4,800 RPM Flow Rate' },
      { label: 'Hose Armor', value: 'Braided Stainless Steel with Anti-Puncture Kevlar Sleeve' },
      { label: 'Telemetry Display', value: '1.9" O-LED Live Coolant Pressure & Flow Diagnostics' }
    ],
    highlightTags: ['750W TDP', 'MAG-LEV', 'KEVLAR HOSING', 'DRY-BREAK'],
    imageSvgType: 'cooler'
  },
  {
    id: 'mule-cpu-04',
    serialCode: 'MLE-PROC//STRAND-128X',
    category: 'CORE MODULE',
    name: 'NEURAL STRAND 128-THREAD HYPERPROCESSOR',
    jpName: '量子連鎖百弐拾八線核',
    price: 3200,
    status: 'MIL-SPEC ONLY',
    payloadWeight: '0.42 KG',
    powerDraw: '380W SUSTAINED CONTINUOUS',
    thermalRating: 'DIRECT-DIE LIQUID METAL READY',
    chiralDensity: '0.089 µg/m³',
    armorClass: 'INTEGRATED CERAMIC HEAT SPREADER',
    description: '64-Core, 128-Thread hybrid architecture chip manufactured on 1.8nm EUV nodes, delivering real-time simulation physics and military-grade cryptographic hashing.',
    detailedSpecs: [
      { label: 'Compute Nodes', value: '64 Cores / 128 Threads @ 5.8 GHz All-Core Clock' },
      { label: 'L3 Cache Pool', value: '512MB 3D-Stacked Low-Latency Cache Matrix' },
      { label: 'Interface Socket', value: 'LGA-9200 Gold-Plated Hardened Contact Grid' },
      { label: 'Hardware Crypto', value: 'Post-Quantum Lattice Cryptographic Engine Built-in' }
    ],
    highlightTags: ['64C / 128T', '512MB CACHE', '1.8NM EUV', 'DIRECT-DIE'],
    imageSvgType: 'core'
  },
  {
    id: 'mule-chs-05',
    serialCode: 'MLE-HULL//APEX-CARGO-99',
    category: 'CHASSIS',
    name: 'M.U.L.E. BRIDGES FIELD-OPERATIVE CARGO CHASSIS',
    jpName: '遠征作戦型補給筐体',
    price: 1150,
    status: 'IN STOCK',
    payloadWeight: '19.2 KG (BARE HULL)',
    powerDraw: 'PASSIVE GROUNDING',
    thermalRating: 'DUAL DUCTED AIR CONDUITS',
    chiralDensity: '0.001 µg/m³ (HERMETIC)',
    armorClass: 'MIL-STD-810H CERTIFIED SEALED',
    description: 'Ruggedized weather-proof transport chassis featuring ergonomic load-bearing carabiner harness mounts, quick-swap drive canisters, and dual dust-proof electromagnetic filtration grilles.',
    detailedSpecs: [
      { label: 'Hull Construction', value: 'Hydraulically Pressed 3mm Anodized Aircraft Aluminum' },
      { label: 'Carrier Integration', value: 'M.U.L.E. Exoskeleton Back-Rack & Cargo Rail Latches' },
      { label: 'Sealing Rating', value: 'IP68 Immersion & Timefall Weather Shielding' },
      { label: 'Expansion Slots', value: '9x Full-Height Reinforced PCIe Toolless Lock Sliders' }
    ],
    highlightTags: ['IP68 SEALED', 'MIL-STD-810H', 'RACK-READY', 'CARGO-LATCH'],
    imageSvgType: 'chassis'
  },
  {
    id: 'mule-rig-06',
    serialCode: 'MLE-SYS//OBSIDIAN-07',
    category: 'HEAVY RIG',
    name: 'OBSIDIAN RECON TAC-COMPUTE RIG',
    jpName: '漆黒索敵戦術演算装置',
    price: 4350,
    status: 'PROTOTYPE',
    payloadWeight: '15.5 KG',
    powerDraw: '1000W HYBRID BATTERY-ASSIST',
    thermalRating: 'PASSIVE-ACTIVE HYBRID COOLED',
    chiralDensity: '0.015 µg/m³',
    armorClass: 'BALLISTIC NYLON & COMPOSITE',
    description: 'Portable tactical mainframe designed for reconnaissance squads. Features integrated UPS battery fallback for uninterrupted field data crunching in disconnected environments.',
    detailedSpecs: [
      { label: 'Primary Processing', value: '32-Core Neural Hybrid Matrix with 64GB Unified RAM' },
      { label: 'Battery Backup', value: '300Wh Internal LiFePO4 Hot-Swappable Power Cells' },
      { label: 'Tactical Radio', value: 'Encrypted Multi-Band Military SDR & Laser-Line Receiver' },
      { label: 'Field Display', value: 'Foldable 16" Matte High-Nit Tactical Monitoring Screen' }
    ],
    highlightTags: ['HOT-SWAP UPS', 'FIELD-TAC', 'UNIFIED-64GB', 'STEALTH-MATTE'],
    imageSvgType: 'terminal'
  }
];

export const SYSTEM_TELEMETRY = {
  corporation: 'M.U.L.E. HEAVY INDUSTRIES // LOGISTICS DIVISION',
  protocol: 'CARGO SUPPLY PROTOCOL v4.98-EXT',
  terminalId: 'TER-MAD-2026-X11',
  clearanceLevel: 'LEVEL 4 STRAND OVERSEER',
  networkLatency: '1.8 ms (QUANTUM STRAND)',
  serverStatus: 'OPERATIONAL // ZERO CHIRAL LEAK'
};
