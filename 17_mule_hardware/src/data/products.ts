export interface Product {
  id: string;
  serialCode: string;
  category: 'HEAVY RIG' | 'NEURAL GPU' | 'EXO COOLING' | 'CORE MODULE' | 'CHASSIS' | 'PERIPHERAL';
  name: string;
  jpName: string;
  price: number;
  priceUah: number;
  status: 'IN STOCK' | 'SECURED BATCH' | 'MIL-SPEC ONLY' | 'NEW RELEASE';
  payloadWeight: string;
  powerDraw: string;
  thermalRating: string;
  chiralDensity: string;
  armorClass: string;
  description: string;
  imageUrl: string;
  detailedSpecs: { label: string; value: string }[];
  highlightTags: string[];
  benchmarks?: {
    game: string;
    fps: number;
    resolution: string;
  }[];
}

export const CATEGORIES = [
  'ALL ARTIFACTS',
  'HEAVY RIG',
  'NEURAL GPU',
  'EXO COOLING',
  'CORE MODULE',
  'CHASSIS',
  'PERIPHERAL'
] as const;

export const MULE_PRODUCTS: Product[] = [
  {
    id: 'mule-rig-01',
    serialCode: 'MLE-RIG//ICE-BEAST-V2',
    category: 'HEAVY RIG',
    name: 'ICE BEAST V2 // NVIDIA & AMD FLAGSHIP RIG',
    jpName: '氷獣弐型・極冷演算機甲',
    price: 1099,
    priceUah: 44999,
    status: 'NEW RELEASE',
    payloadWeight: '22.4 KG',
    powerDraw: '850W 80-PLUS GOLD',
    thermalRating: 'TRIPLE-FAN 360MM ARGB CRYO-LOOP',
    chiralDensity: '0.012 µg/m³',
    armorClass: 'DUAL CHAMBER PANORAMIC TEMPERED GLASS',
    imageUrl: '/assets/products/ice_beast_cyan_hero_hq.webp',
    description: 'Flagship open-chamber computing station featuring the Gigabyte Eagle OC Ice GeForce RTX 5070 and AMD Ryzen 7 7800X3D. Encased in high-tensile anti-chiral glass with continuous laminar fluid circulation.',
    detailedSpecs: [
      { label: 'Graphics Card', value: 'Gigabyte Eagle OC Ice GF RTX 5070 12GB GDDR7' },
      { label: 'Processor', value: 'AMD Ryzen 7 7800X3D (8 Cores, 16 Threads, 5.0 GHz Max Boost)' },
      { label: 'Motherboard', value: 'AMD B650M Gaming Pro WiFi // Reinforced PCIe 5.0 Slot' },
      { label: 'System Memory', value: '32GB (2x16GB) 6000MHz Apacer NOX RGB Silver DDR5' },
      { label: 'Storage Drive', value: '1TB NVMe PCIe 4.0 x4 M.2 High-Velocity SSD (7,400 MB/s)' },
      { label: 'Cooling Loop', value: 'PcCooler CryoLoop 360mm ARGB Liquid Closed Loop' },
      { label: 'Chassis Hull', value: 'PcCooler C3B310 BK Dual Chamber Panoramic Pillarless' },
      { label: 'Power Supply', value: '850W 80+ Gold Fully Modular ATX 3.1 PCIe 5.1 Native' }
    ],
    highlightTags: ['RTX 5070 12GB', 'RYZEN 7 7800X3D', 'APACER NOX 32GB', 'CRYO-LOOP 360', 'PANORAMIC GLASS'],
    benchmarks: [
      { game: 'Cyberpunk 2077 (RT Overdrive)', fps: 110, resolution: '1440p Ultra' },
      { game: 'Apex Legends', fps: 239, resolution: '1440p Max' },
      { game: 'Counter-Strike 2', fps: 499, resolution: '1080p Comp' }
    ]
  },
  {
    id: 'mule-rig-02',
    serialCode: 'MLE-RIG//HYPER-BEAST-ACL01',
    category: 'HEAVY RIG',
    name: 'HYPER BEAST ACL-01 // OVERCLOCK ASSAULT RIG',
    jpName: '超獣壱型・高クロック突撃機甲',
    price: 1450,
    priceUah: 58999,
    status: 'IN STOCK',
    payloadWeight: '24.1 KG',
    powerDraw: '1000W TITANIUM RATED',
    thermalRating: 'EXTREME CHIRAL VACUUM LOOP',
    chiralDensity: '0.008 µg/m³',
    armorClass: 'STANAG LEVEL 2 MIL-SPEC FRAME',
    imageUrl: '/assets/products/ice_beast_cyan_01.webp',
    description: 'High-octane workstation built for competitive low-latency simulation physics, featuring RTX 5080 accelerator with copper coldplate and dual high-flow air channels.',
    detailedSpecs: [
      { label: 'Graphics Card', value: 'NVIDIA GeForce RTX 5080 16GB GDDR7 256-bit' },
      { label: 'Processor', value: 'AMD Ryzen 9 7900X3D (12 Cores, 24 Threads, 5.6 GHz)' },
      { label: 'Motherboard', value: 'X670E Carbon Dark Industrial Gaming WiFi' },
      { label: 'System Memory', value: '64GB (2x32GB) 6400MHz High-Speed DDR5 Low-Latency' },
      { label: 'Storage Drive', value: '2TB Gen5 NVMe M.2 Solid State Drive (12,000 MB/s)' },
      { label: 'Chassis Hull', value: 'PcCooler C3B310 Customized Black Anodized' }
    ],
    highlightTags: ['RTX 5080 16GB', 'RYZEN 9 7900X3D', '64GB DDR5', 'GEN5 NVME'],
    benchmarks: [
      { game: 'Cyberpunk 2077 (RT Overdrive)', fps: 138, resolution: '1440p Ultra' },
      { game: 'Apex Legends', fps: 285, resolution: '1440p Max' },
      { game: 'Counter-Strike 2', fps: 540, resolution: '1080p Comp' }
    ]
  },
  {
    id: 'mule-rig-03',
    serialCode: 'MLE-RIG//OMEGA-DELUXE',
    category: 'HEAVY RIG',
    name: 'OMEGA DELUXE // QUANTUM TITAN MAINFRAME',
    jpName: '終極極致・量子巨神主機',
    price: 2320,
    priceUah: 94999,
    status: 'SECURED BATCH',
    payloadWeight: '28.5 KG',
    powerDraw: '1650W SOLID-CAP MODULAR',
    thermalRating: 'DIRECT DIE SUB-ZERO -35°C',
    chiralDensity: '0.002 µg/m³',
    armorClass: 'FULL MIL-SPEC TITANIUM CAGE',
    imageUrl: '/assets/products/ice_beast_flagship.webp',
    description: 'Heavy enterprise-grade computational platform fitted with dual custom liquid cooling loops, 128GB memory bank, and multi-tier cryptographic hardware acceleration.',
    detailedSpecs: [
      { label: 'Graphics Card', value: 'NVIDIA GeForce RTX 5090 24GB GDDR7 512-bit' },
      { label: 'Processor', value: 'Intel Core i9-14900KS 24-Core 6.2 GHz Extreme' },
      { label: 'Motherboard', value: 'Z790 Dark Kingpin Heavy VRM 24+1+2 Phases' },
      { label: 'System Memory', value: '128GB (4x32GB) Quad-Channel DDR5 6000MHz' },
      { label: 'Chassis Hull', value: 'PcCooler M.U.L.E. Titanium Armored C3B310' }
    ],
    highlightTags: ['RTX 5090 24GB', 'i9-14900KS 6.2GHZ', '128GB RAM', 'DUAL LIQUID LOOP'],
    benchmarks: [
      { game: 'Cyberpunk 2077 (RT Overdrive)', fps: 165, resolution: '4K Ultra DLSS' },
      { game: 'Apex Legends', fps: 300, resolution: '4K Max' },
      { game: 'Counter-Strike 2', fps: 620, resolution: '1440p Comp' }
    ]
  },
  {
    id: 'mule-rig-04',
    serialCode: 'MLE-RIG//SERIA-LIGHT',
    category: 'HEAVY RIG',
    name: 'SERIA LIGHT // TACTICAL COMPACT PC',
    jpName: '軽量機甲・索敵小型演算器',
    price: 855,
    priceUah: 34999,
    status: 'IN STOCK',
    payloadWeight: '16.2 KG',
    powerDraw: '650W BRONZE EFFICIENCY',
    thermalRating: 'HIGH-AIRFLOW DUAL TOWER',
    chiralDensity: '0.020 µg/m³',
    armorClass: 'ANODIZED ALUMINUM MATTE',
    imageUrl: '/assets/products/ice_beast_cyan_02.webp',
    description: 'Streamlined tactical gaming unit optimized for rapid deployment, reliable 1080p/1440p high-refresh gaming, and minimal thermal emissions.',
    detailedSpecs: [
      { label: 'Graphics Card', value: 'NVIDIA GeForce RTX 5060 Ti 16GB GDDR7' },
      { label: 'Processor', value: 'AMD Ryzen 5 7500F 6-Core 5.0 GHz' },
      { label: 'Motherboard', value: 'AMD B650M Military Shield' },
      { label: 'System Memory', value: '32GB (2x16GB) 5600MHz DDR5' }
    ],
    highlightTags: ['RTX 5060 TI', 'RYZEN 5 7500F', 'COMPACT', 'HIGH-FPS'],
    benchmarks: [
      { game: 'Cyberpunk 2077', fps: 88, resolution: '1080p High' },
      { game: 'Apex Legends', fps: 195, resolution: '1080p Ultra' },
      { game: 'Counter-Strike 2', fps: 410, resolution: '1080p Comp' }
    ]
  },
  {
    id: 'mule-gpu-05',
    serialCode: 'MLE-ACC//EAGLE-RTX5070',
    category: 'NEURAL GPU',
    name: 'GIGABYTE EAGLE OC ICE GEFORCE RTX 5070 12GB',
    jpName: 'ギガバイト氷鷹・高速加速素子',
    price: 649,
    priceUah: 26499,
    status: 'NEW RELEASE',
    payloadWeight: '2.15 KG',
    powerDraw: '250W 12V-2X6 NATIVE',
    thermalRating: 'WINDFORCE TRIPLE FAN ICE WHITE',
    chiralDensity: '0.005 µg/m³',
    armorClass: 'METAL BACKPLATE STRUCTURAL',
    imageUrl: '/assets/products/part_rtx_gpu.webp',
    description: 'Next-generation discrete neural graphics accelerator. Engineered with 12GB ultra-wide GDDR7 VRAM, Blackwell DLSS 4.x hardware frame synthesis, and pure white anti-corrosion ice shroud.',
    detailedSpecs: [
      { label: 'Architecture', value: 'NVIDIA Blackwell Gaming Architecture // DLSS 4.x' },
      { label: 'Video Memory', value: '12GB GDDR7 192-bit @ 28 Gbps Bandwidth' },
      { label: 'Cooling Shroud', value: 'Windforce Triple 90mm Alternate Spinning Fans' },
      { label: 'Connector Type', value: '1x 16-pin 12V-2x6 PCIe 5.1 Power Header' },
      { label: 'Display Outputs', value: '3x DisplayPort 2.1b UHBR20, 1x HDMI 2.1a' }
    ],
    highlightTags: ['12GB GDDR7', 'DLSS 4.X', 'WINDFORCE 3X', '12V-2X6']
  },
  {
    id: 'mule-cool-06',
    serialCode: 'MLE-THM//CRYO-360-AIO',
    category: 'EXO COOLING',
    name: 'CRYO-LOOP 360 AIO LIQUID BLOCK & PUMP',
    jpName: '極冷循環式液冷散熱水冷頭',
    price: 195,
    priceUah: 7899,
    status: 'IN STOCK',
    payloadWeight: '1.95 KG',
    powerDraw: '18W ULTRA-PWM MOTOR',
    thermalRating: 'RATED TO 380W TDP THERMAL LOAD',
    chiralDensity: '0.001 µg/m³',
    armorClass: 'CERAMIC BEARING + KEVLAR HOSING',
    imageUrl: '/assets/products/part_cpu_liquid_block.webp',
    description: 'High-pressure closed liquid cooling unit equipped with high-torque 3-phase ceramic pump, micro-skived copper cold plate, and custom OLED diagnostic telemetry display.',
    detailedSpecs: [
      { label: 'Coldplate', value: 'Micro-skived pure electrolytic copper (0.1mm fin pitch)' },
      { label: 'Pump Speed', value: '3,200 RPM ceramic bearing silent pump' },
      { label: 'Radiator Body', value: '360mm high-density aluminum fins (21 FPI)' },
      { label: 'Tubing Armor', value: '400mm braided nylon-mesh high-pressure leakproof hosing' }
    ],
    highlightTags: ['380W TDP', 'O-LED HUD', 'CERAMIC PUMP', 'KEVLAR TUBE']
  },
  {
    id: 'mule-cool-07',
    serialCode: 'MLE-FAN//MAGLEV-360-TRI',
    category: 'EXO COOLING',
    name: 'TRIPLE 360MM HIGH-STATIC RADIATOR FANS',
    jpName: '高静圧三連磁気浮上散熱風扇',
    price: 85,
    priceUah: 3499,
    status: 'IN STOCK',
    payloadWeight: '0.62 KG',
    powerDraw: '12W TOTAL 3X',
    thermalRating: '3.8 MMH2O STATIC PRESSURE',
    chiralDensity: '0.000 µg/m³',
    armorClass: 'FIBERGLASS PBT COMPOSITE',
    imageUrl: '/assets/products/part_radiator_fans.webp',
    description: 'Industrial high-pressure radiator cooling fans engineered with magnetic levitation bearings for silent high-RPM throughput across heavy liquid radiators.',
    detailedSpecs: [
      { label: 'Rotational Speed', value: '500 - 2,400 RPM (PWM Controlled)' },
      { label: 'Air Flow Rate', value: '84.5 CFM Per Unit' },
      { label: 'Static Pressure', value: '3.8 mmH2O High-Density Radiator Push' },
      { label: 'Acoustic Rating', value: 'Under 27.5 dBA at Full Load' }
    ],
    highlightTags: ['MAG-LEV', '3.8 MMH2O', '84.5 CFM', 'SILENT PWM']
  },
  {
    id: 'mule-periph-08',
    serialCode: 'MLE-TAC//G502-X-PLUS',
    category: 'PERIPHERAL',
    name: 'LOGITECH G502 X PLUS LIGHTSPEED WIRELESS',
    jpName: '光速無線戦術操作端末・黒',
    price: 125,
    priceUah: 4999,
    status: 'IN STOCK',
    payloadWeight: '106 GRAMS',
    powerDraw: 'RECHARGEABLE TYPE-C // 120H BATTERY',
    thermalRating: 'AMBIENT OPERATING',
    chiralDensity: '0.000 µg/m³',
    armorClass: 'PTFE LOW-FRICTION GLIDE PADS',
    imageUrl: '/assets/products/mouse_g502_black.webp',
    description: 'Legendary ergonomic gaming mouse reimagined with hybrid LIGHTFORCE optical-mechanical switches, sub-micron HERO 25K gaming sensor, and 8-zone active LIGHTSYNC RGB.',
    detailedSpecs: [
      { label: 'Switches', value: 'Hybrid LIGHTFORCE Optical-Mechanical Tactile Switches' },
      { label: 'Optical Sensor', value: 'HERO 25K Sub-Micron Sensor (100 – 25,600 DPI, 400 IPS)' },
      { label: 'Wireless Link', value: 'LIGHTSPEED Wireless Protocol (68% faster response)' },
      { label: 'Controls', value: '13 programmable tactical buttons with dual-mode scroll wheel' }
    ],
    highlightTags: ['HERO 25K', 'LIGHTFORCE', '120H RUNTIME', 'PTFE FEET']
  },
  {
    id: 'mule-chs-09',
    serialCode: 'MLE-HULL//PCCOOLER-C3B310',
    category: 'CHASSIS',
    name: 'PCCOOLER C3B310 BK PANORAMIC TEMPERED CHASSIS',
    jpName: '全景鋼化玻璃双室演算筐体',
    price: 130,
    priceUah: 5299,
    status: 'IN STOCK',
    payloadWeight: '9.8 KG (EMPTY HULL)',
    powerDraw: 'PASSIVE GROUNDED',
    thermalRating: 'SUPPORTS 10X 120MM FANS',
    chiralDensity: '0.001 µg/m³',
    armorClass: '4.0MM TEMPERED GLASS + 0.8MM SPCC STEEL',
    imageUrl: '/assets/products/ice_beast_cyan_03.webp',
    description: 'Modern pillarless dual-chamber chassis offering unobstructed 270-degree viewing angles, separate PSU/cable cable tunnel, and dedicated 360mm top/side radiator brackets.',
    detailedSpecs: [
      { label: 'Form Factor', value: 'ATX / Micro-ATX / Mini-ITX Dual Chamber' },
      { label: 'Glass Panels', value: '270° Pillarless 4.0mm High-Clarity Tempered Glass' },
      { label: 'Fan Capacity', value: 'Up to 10x 120mm Fans or Dual 360mm Radiators' },
      { label: 'GPU Clearance', value: 'Up to 410mm Length with Anti-Sag Bracket Included' }
    ],
    highlightTags: ['270° PANORAMIC', 'DUAL CHAMBER', '10X FAN SLOTS', '410MM GPU']
  }
];

export const SYSTEM_TELEMETRY = {
  corporation: 'M.U.L.E. HEAVY INDUSTRIES // LOGISTICS & COMPUTING',
  protocol: 'CARGO SUPPLY PROTOCOL v4.98-EXT',
  terminalId: 'TER-MAD-2026-X11',
  clearanceLevel: 'LEVEL 4 STRAND OVERSEER',
  networkLatency: '1.8 ms (QUANTUM STRAND)',
  serverStatus: 'OPERATIONAL // ZERO CHIRAL LEAK',
  headquarters: 'KYIV // SHEVCHENKO ST. • MADRID // TERMINAL 01'
};
