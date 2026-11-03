import React, { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Compass,
  Sun,
  Moon,
  MapPin,
  Plane,
  Train,
  Car,
  Trees,
  Layers,
  ShieldCheck,
  Cpu,
  Wind,
  Phone,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Download,
} from 'lucide-react';
import { LIKOVA_ASSETS } from './data';

export default function App() {
  const [nightLights, setNightLights] = useState(true);
  const [locIndex, setLocIndex] = useState(0);
  const [activeRoute, setActiveRoute] = useState(0);
  const [activePark, setActivePark] = useState(0);
  const [archIndex, setArchIndex] = useState(0);
  const [lobbyIndex, setLobbyIndex] = useState(0);
  const [officeIndex, setOfficeIndex] = useState(0);

  // Interactive Office Selector filters
  const [selectedFloor, setSelectedFloor] = useState<number | 'ALL'>('ALL');
  const [minArea, setMinArea] = useState<number>(400);
  const [selectedUnit, setSelectedUnit] = useState(LIKOVA_ASSETS.floorPlans[0]);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');

  const filteredUnits = LIKOVA_ASSETS.floorPlans.filter(
    (u) => (selectedFloor === 'ALL' || u.floor === selectedFloor) && u.area >= minArea
  );

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackSubmitted(false);
      setCallbackOpen(false);
      setFormName('');
      setFormPhone('');
      setFormCompany('');
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-[#070b20] text-white font-tt selection:bg-[#bc9400] selection:text-[#070b20]">
      {/* FIXED ARCHITECTURAL HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070b20]/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={LIKOVA_ASSETS.logo}
                alt="LIKOVA"
                className="h-6 md:h-7 w-auto brightness-0 invert"
              />
              <span className="hidden xl:inline-block text-[11px] uppercase tracking-[0.22em] text-[#bdbec4] border-l border-white/15 pl-4 py-0.5">
                Class A Business Center
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.06em] text-[#c7cbd4]">
            <a href="#concept" className="hover:text-white transition-colors">Concept</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
            <a href="#transport" className="hover:text-white transition-colors">Connectivity</a>
            <a href="#selector" className="hover:text-[#bc9400] text-white font-medium transition-colors flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#bc9400]" />
              Choose an Office
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#lobby" className="hover:text-white transition-colors">Lobby</a>
            <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
            <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+74951505330"
              className="hidden sm:flex items-center gap-2 text-xs tracking-wider text-[#e3e6eb] hover:text-white px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#bc9400]" />
              <span>+7 (495) 150-53-30</span>
            </a>
            <button
              onClick={() => setCallbackOpen(true)}
              className="px-5 py-2.5 bg-white text-[#070b20] hover:bg-[#bc9400] hover:text-[#070b20] transition-all text-xs uppercase tracking-[0.14em] font-medium flex items-center gap-2 cursor-pointer"
            >
              <span>Request a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1 — HERO / 1.INTRO WITH INTERACTIVE DAY/NIGHT FACADE LIGHTING */}
      <section className="relative min-h-screen pt-20 overflow-hidden flex flex-col justify-between">
        {/* Layered Architectural Render */}
        <div className="absolute inset-0 z-0">
          <img
            src={LIKOVA_ASSETS.hero.sky}
            alt="LIKOVA Sky Environment"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              nightLights ? 'brightness-[0.55] saturate-125' : 'brightness-100'
            }`}
          />
          <img
            src={LIKOVA_ASSETS.hero.buildingDay}
            alt="LIKOVA Building Render"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={LIKOVA_ASSETS.hero.buildingLights}
            alt="LIKOVA Architectural Evening Lighting"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              nightLights ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b20] via-[#070b20]/35 to-[#070b20]/60" />
        </div>

        {/* Top Hero Editorial Bar */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12 pt-12 md:pt-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#070b20]/70 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.2em] text-[#e3e6eb] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#bc9400] animate-pulse" />
                Commissioning: Q3 2026 · Vnukovo Business Cluster
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-[92px] leading-[0.94] tracking-[-0.03em] font-normal max-w-4xl">
                WHERE FUTURE <br />
                <span className="text-[#e3e6eb]/90">GAINS MOMENTUM</span>
              </h1>
            </div>

            {/* Interactive Day / Night Architectural Illumination Switch */}
            <div className="flex flex-col items-start lg:items-end gap-3">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#bdbec4]">
                Facade Illumination Mode
              </span>
              <div className="inline-flex p-1 bg-[#070b20]/80 backdrop-blur-md border border-white/15">
                <button
                  onClick={() => setNightLights(false)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all cursor-pointer ${
                    !nightLights
                      ? 'bg-white text-[#070b20] font-medium'
                      : 'text-[#bdbec4] hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  Daylight
                </button>
                <button
                  onClick={() => setNightLights(true)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all cursor-pointer ${
                    nightLights
                      ? 'bg-[#bc9400] text-[#070b20] font-medium'
                      : 'text-[#bdbec4] hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  Evening Lights
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Specs Bar & CTA */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12 pb-12 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/15 pt-8">
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-[#e3e6eb] leading-relaxed max-w-xl">
                Business center on the edge of the capital. Innovative approach and bold architectural forms by{' '}
                <span className="text-white underline decoration-[#bc9400] underline-offset-4">
                  KAMEN Architects
                </span>.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-3 gap-4 border-l border-white/15 pl-6">
              <div>
                <div className="text-2xl md:text-3xl font-normal text-white">6–7–8</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#bdbec4] mt-1">
                  Variable Floors
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-normal text-white">53,300 m²</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#bdbec4] mt-1">
                  Total GBA Area
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-normal text-[#bc9400]">Class A</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#bdbec4] mt-1">
                  Office Standard
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <a
                href="#selector"
                className="w-full sm:w-auto justify-center px-7 py-4 bg-white text-[#070b20] hover:bg-[#bc9400] transition-colors text-xs uppercase tracking-[0.16em] font-medium inline-flex items-center gap-3"
              >
                <span>Choose an Office</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — 2.IDEA & ARCHITECTURAL SCULPTURE */}
      <section id="concept" className="py-24 lg:py-36 bg-[#070b20] arch-grid-bg border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#bc9400]">
                <span>01 // Concept & Idea</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em] font-normal">
                Class A. Impressive ideas.{' '}
                <span className="text-[#bdbec4]">Daring inspiration.</span>
              </h2>
              <p className="text-lg text-[#c7cbd4] leading-relaxed max-w-xl">
                Like a striking work of art, this business center turns heads and transforms the cityscape.
                LIKOVA combines monumental cantilevered volumes with crystalline transparency, creating a self-sufficient ecosystem for visionary enterprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="bg-[#232739]/60 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-[#bdbec4]">Variable Height</div>
                  <div className="text-3xl mt-2 text-white">6-7-8 Floors</div>
                  <div className="text-xs text-[#bdbec4] mt-1">4 independent entrance cores</div>
                </div>
                <div className="bg-[#232739]/60 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-[#bdbec4]">Total Scale</div>
                  <div className="text-3xl mt-2 text-white">53,300 m²</div>
                  <div className="text-xs text-[#bdbec4] mt-1">Flexible open-space floorplates</div>
                </div>
                <div className="bg-[#232739]/60 border border-white/10 p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-[#bdbec4]">Commissioning</div>
                  <div className="text-3xl mt-2 text-[#bc9400]">Q3 2026</div>
                  <div className="text-xs text-[#bdbec4] mt-1">High-readiness monolithic frame</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 relative group overflow-hidden border border-white/10 bg-[#232739]">
                <img
                  src={LIKOVA_ASSETS.idea.image1}
                  alt="LIKOVA Architectural Perspective"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#070b20]/85 backdrop-blur-md p-4 border border-white/10">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[#bc9400]">Expressive Silhouette</div>
                  <div className="text-sm text-white mt-0.5">Cantilevered upper tiers overlooking Kievskoye Highway</div>
                </div>
              </div>
              <div className="col-span-5 space-y-4">
                <div className="border border-white/10 bg-[#232739]/50 p-6 flex flex-col items-center text-center">
                  <img
                    src={LIKOVA_ASSETS.idea.cube}
                    alt="LIKOVA 3D Structural Cube"
                    className="w-36 h-36 object-contain mb-3"
                  />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#bdbec4]">
                    Modular Spatial Matrix
                  </span>
                </div>
                <div className="overflow-hidden border border-white/10 bg-[#232739]">
                  <img
                    src={LIKOVA_ASSETS.idea.image2}
                    alt="LIKOVA Facade Detail"
                    className="w-full h-[230px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — 4.LOCATION SLIDER */}
      <section id="location" className="py-24 lg:py-36 bg-[#e3e6eb] text-[#070b20]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#57566a] mb-3">
                02 // Strategic Location
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em] font-normal">
                The address of your <br />
                <span className="text-[#393c4d]">business success</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {LIKOVA_ASSETS.location.slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setLocIndex(idx)}
                  className={`px-5 py-3 text-xs uppercase tracking-[0.14em] border transition-all cursor-pointer ${
                    locIndex === idx
                      ? 'bg-[#070b20] text-white border-[#070b20]'
                      : 'bg-transparent text-[#232739] border-[#070b20]/20 hover:border-[#070b20]'
                  }`}
                >
                  {slide.id} · {slide.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 relative overflow-hidden bg-[#070b20] min-h-[420px] lg:min-h-[540px]">
              <img
                src={LIKOVA_ASSETS.location.slides[locIndex].image}
                alt={LIKOVA_ASSETS.location.slides[locIndex].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-6 left-6 bg-[#070b20]/90 text-white px-4 py-2 text-xs uppercase tracking-[0.18em]">
                {LIKOVA_ASSETS.location.slides[locIndex].stat}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-8 lg:p-10 flex flex-col justify-between border border-[#070b20]/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#070b20]/10 pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#57566a]">
                    Advantage {LIKOVA_ASSETS.location.slides[locIndex].id} / 03
                  </span>
                  <MapPin className="w-4 h-4 text-[#070b20]" />
                </div>
                <h3 className="text-3xl font-normal leading-tight">
                  {LIKOVA_ASSETS.location.slides[locIndex].subtitle}
                </h3>
                <p className="text-[#57566a] leading-relaxed">
                  {LIKOVA_ASSETS.location.slides[locIndex].description}
                </p>
              </div>

              <div className="pt-8 space-y-6">
                <img
                  src={LIKOVA_ASSETS.location.intro}
                  alt="Location Aerial View"
                  className="w-full h-40 object-cover"
                />
                <div className="flex items-center justify-between">
                  <button
                    onClick={() =>
                      setLocIndex((prev) => (prev === 0 ? LIKOVA_ASSETS.location.slides.length - 1 : prev - 1))
                    }
                    className="p-3 border border-[#070b20]/20 hover:bg-[#070b20] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#57566a]">
                    Switch Location Vector
                  </span>
                  <button
                    onClick={() =>
                      setLocIndex((prev) => (prev + 1) % LIKOVA_ASSETS.location.slides.length)
                    }
                    className="p-3 border border-[#070b20]/20 hover:bg-[#070b20] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — 5.ACCESSIBILITY (INTERACTIVE TRANSPORT MAPS & VIDEO) */}
      <section id="transport" className="py-24 lg:py-36 bg-[#070b20] border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400] mb-3">
                03 // Transport Connectivity
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em] font-normal">
                Reach your goals with excellent connectivity.{' '}
                <span className="text-[#bdbec4]">Closer than you think.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              {LIKOVA_ASSETS.accessibility.routes.map((route, idx) => (
                <button
                  key={route.id}
                  onClick={() => setActiveRoute(idx)}
                  className={`px-5 py-3.5 text-left border transition-all cursor-pointer ${
                    activeRoute === idx
                      ? 'bg-white text-[#070b20] border-white'
                      : 'bg-[#232739]/60 text-white border-white/15 hover:border-white/40'
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">{route.time}</div>
                  <div className="text-sm font-medium mt-0.5">{route.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Interactive Route Map Viewer */}
            <div className="lg:col-span-8 relative border border-white/15 bg-[#232739]/30 overflow-hidden">
              <img
                src={LIKOVA_ASSETS.accessibility.routes[activeRoute].mapImage}
                alt={LIKOVA_ASSETS.accessibility.routes[activeRoute].label}
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              <div className="p-6 bg-[#070b20]/90 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#bc9400]">
                    {LIKOVA_ASSETS.accessibility.routes[activeRoute].time}
                  </span>
                  <h4 className="text-xl text-white mt-0.5">
                    {LIKOVA_ASSETS.accessibility.routes[activeRoute].detail}
                  </h4>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#bdbec4]">
                  <span className="flex items-center gap-1.5"><Train className="w-4 h-4 text-[#bc9400]" /> Pykhtino / Vnukovo</span>
                  <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#bc9400]" /> 5 min VKO</span>
                  <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-[#bc9400]" /> M-3 Highway</span>
                </div>
              </div>
            </div>

            {/* Live Aerial Motion Video */}
            <div className="lg:col-span-4 border border-white/15 bg-[#232739]/40 flex flex-col justify-between overflow-hidden">
              <div className="relative h-[340px] lg:h-[380px] bg-black">
                <video
                  src={LIKOVA_ASSETS.accessibility.video}
                  poster={LIKOVA_ASSETS.accessibility.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#070b20]/80 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] border border-white/15">
                  3D Transport Hub Simulation
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-[0.16em] text-[#bc9400]">Multimodal Node</div>
                <p className="text-sm text-[#c7cbd4] leading-relaxed">
                  Direct integration of underground metro, high-speed highway interchange, and international aviation hub within a 5-minute radius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — 6.ENVIRONMENT & NATURAL PARKS */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={LIKOVA_ASSETS.environment[activePark].image}
            alt={LIKOVA_ASSETS.environment[activePark].name}
            className="w-full h-full object-cover brightness-[0.45] transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b20] via-[#070b20]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bc9400]">
              <Trees className="w-4 h-4" />
              <span>04 // Natural Ecosystem</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] font-normal">
              Exciting environment for those who are always on the move
            </h2>
            <p className="text-lg text-[#e3e6eb] leading-relaxed">
              Surrounded by three expansive nature parks — Izvarino, Rasskazovka, and Borovskii — LIKOVA offers year-round trails for running, road cycling, and winter cross-country skiing right after work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {LIKOVA_ASSETS.environment.map((park, idx) => (
              <button
                key={park.id}
                onClick={() => setActivePark(idx)}
                className={`text-left p-7 border transition-all backdrop-blur-md cursor-pointer ${
                  activePark === idx
                    ? 'bg-white text-[#070b20] border-white'
                    : 'bg-[#070b20]/75 text-white border-white/20 hover:border-white/50'
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">{park.area}</div>
                <div className="text-2xl font-normal mt-2">{park.name}</div>
                <div className="text-sm mt-3 opacity-85">{park.activity}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — INTERACTIVE MASTER PLAN & OFFICE SELECTOR */}
      <section id="selector" className="py-24 lg:py-36 bg-[#070b20] border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400] mb-3">
                05 // Interactive Masterplan & Parametric Office Selector
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] font-normal">
                Choose your floorplate <span className="text-[#bdbec4]">at LIKOVA</span>
              </h2>
            </div>

            {/* Floor & Area Filter Controls */}
            <div className="flex flex-wrap items-center gap-4 bg-[#232739] p-4 border border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#bdbec4] pr-2">
                <SlidersHorizontal className="w-4 h-4 text-[#bc9400]" />
                <span>Floor:</span>
              </div>
              {(['ALL', 2, 3, 4, 5, 6, 7, 8] as const).map((fl) => (
                <button
                  key={fl}
                  onClick={() => setSelectedFloor(fl)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedFloor === fl
                      ? 'bg-[#bc9400] text-[#070b20] font-medium'
                      : 'bg-[#070b20] text-[#c7cbd4] hover:text-white'
                  }`}
                >
                  {fl === 'ALL' ? 'All Floors' : `L${fl}`}
                </button>
              ))}
              <div className="flex items-center gap-3 pl-4 border-l border-white/15">
                <span className="text-xs text-[#bdbec4]">Min Area: {minArea} m²</span>
                <input
                  type="range"
                  min={400}
                  max={2000}
                  step={100}
                  value={minArea}
                  onChange={(e) => setMinArea(Number(e.target.value))}
                  className="accent-[#bc9400] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Visual Building Selector */}
            <div className="lg:col-span-7 relative border border-white/15 bg-[#232739] overflow-hidden">
              <img
                src={LIKOVA_ASSETS.selectorImage}
                alt="LIKOVA Masterplan Office Selector"
                className="w-full h-[480px] lg:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b20] via-transparent to-[#070b20]/40" />

              {/* Selected Unit Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#070b20]/90 backdrop-blur-xl border border-white/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-[#bc9400] text-[#070b20] text-[11px] uppercase tracking-widest font-medium">
                      Floor {selectedUnit.floor}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#bdbec4]">
                      {selectedUnit.wing}
                    </span>
                  </div>
                  <h3 className="text-2xl text-white mt-2">
                    {selectedUnit.area.toLocaleString()} m² · {selectedUnit.type}
                  </h3>
                  <p className="text-xs text-[#bdbec4] mt-1">
                    Ceiling height: {selectedUnit.ceiling} · Guide price: {selectedUnit.pricePerSqm}/m² ({selectedUnit.total})
                  </p>
                </div>
                <button
                  onClick={() => setCallbackOpen(true)}
                  className="px-6 py-3.5 bg-white text-[#070b20] hover:bg-[#bc9400] transition-colors text-xs uppercase tracking-[0.14em] font-medium shrink-0 cursor-pointer"
                >
                  Request Floor Plan PDF
                </button>
              </div>
            </div>

            {/* Parametric Floorplate List */}
            <div className="lg:col-span-5 space-y-3 max-h-[580px] overflow-y-auto pr-1">
              {filteredUnits.map((unit) => {
                const isSelected = selectedUnit.id === unit.id;
                return (
                  <div
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className={`p-5 border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white text-[#070b20] border-white'
                        : 'bg-[#232739]/60 text-white border-white/10 hover:border-white/35'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs uppercase tracking-[0.16em] font-medium">
                          Level 0{unit.floor}
                        </span>
                        <span className="text-xs opacity-60">· {unit.wing}</span>
                      </div>
                      <div className="text-xl font-normal mt-1">
                        {unit.area.toLocaleString()} m² — {unit.type}
                      </div>
                      <div className="text-xs opacity-75 mt-1">
                        Ceiling {unit.ceiling} · {unit.pricePerSqm}/m²
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`inline-block px-2.5 py-1 text-[10px] uppercase tracking-widest ${
                          unit.status === 'Available'
                            ? isSelected
                              ? 'bg-[#070b20] text-white'
                              : 'bg-[#bc9400]/20 text-[#bc9400]'
                            : 'bg-white/10 text-[#bdbec4]'
                        }`}
                      >
                        {unit.status}
                      </span>
                      <div className="text-sm font-medium mt-2">{unit.total}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — 8.ARCHITECTURE & KAMEN ARCHITECTS QUOTE */}
      <section id="architecture" className="py-24 lg:py-36 bg-[#e3e6eb] text-[#070b20]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-[#57566a] mb-3">
                06 // Architectural Expression
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] font-normal">
                The architecture of high aspirations.{' '}
                <span className="text-[#57566a]">Soaring lines.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
              {LIKOVA_ASSETS.architecture.slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setArchIndex(idx)}
                  className={`px-4 py-2.5 text-xs uppercase tracking-[0.14em] border transition-colors cursor-pointer ${
                    archIndex === idx
                      ? 'bg-[#070b20] text-white border-[#070b20]'
                      : 'border-[#070b20]/20 text-[#070b20] hover:border-[#070b20]'
                  }`}
                >
                  {s.id}
                </button>
              ))}
            </div>
          </div>

          {/* 5-Slide Architectural Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-8 overflow-hidden bg-[#070b20]">
              <img
                src={LIKOVA_ASSETS.architecture.slides[archIndex].image}
                alt={LIKOVA_ASSETS.architecture.slides[archIndex].title}
                className="w-full h-[460px] lg:h-[560px] object-cover"
              />
            </div>
            <div className="lg:col-span-4 bg-white p-8 lg:p-10 border border-[#070b20]/10 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400] font-medium">
                  Feature {LIKOVA_ASSETS.architecture.slides[archIndex].id} / 05
                </div>
                <h3 className="text-3xl font-normal">
                  {LIKOVA_ASSETS.architecture.slides[archIndex].title}
                </h3>
                <div className="text-sm font-medium text-[#070b20]">
                  {LIKOVA_ASSETS.architecture.slides[archIndex].caption}
                </div>
                <p className="text-[#57566a] leading-relaxed">
                  {LIKOVA_ASSETS.architecture.slides[archIndex].description}
                </p>
              </div>

              <div className="pt-8 border-t border-[#070b20]/10 space-y-3">
                {LIKOVA_ASSETS.architecture.slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setArchIndex(idx)}
                    className={`w-full text-left py-2 text-xs uppercase tracking-[0.12em] flex items-center justify-between cursor-pointer ${
                      archIndex === idx ? 'text-[#070b20] font-medium' : 'text-[#57566a] hover:text-[#070b20]'
                    }`}
                  >
                    <span>{s.id} — {s.title}</span>
                    {archIndex === idx && <ArrowUpRight className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ivan Grekov — Chief Architect of KAMEN ARCHITECTS Quote Block */}
          <div className="relative bg-[#070b20] text-white overflow-hidden">
            <img
              src={LIKOVA_ASSETS.architecture.architectBg}
              alt="KAMEN Architects Studio Background"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-16">
              <div className="lg:col-span-8 space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400]">
                  Architectural Vision · KAMEN ARCHITECTS
                </div>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-white">
                  “We designed LIKOVA as a kinetic sculpture in motion — a building whose cantilevered horizontal decks and vertical lamellae respond to the velocity of the surrounding transport arteries and sky.”
                </blockquote>
                <div>
                  <div className="text-lg font-medium text-white">Ivan Grekov</div>
                  <div className="text-xs uppercase tracking-[0.16em] text-[#bdbec4] mt-1">
                    Chief Architect · KAMEN ARCHITECTS
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <img
                  src={LIKOVA_ASSETS.architecture.architectPerson}
                  alt="Ivan Grekov - Chief Architect of KAMEN ARCHITECTS"
                  className="h-72 lg:h-80 w-auto object-contain border border-white/15 bg-[#232739]/60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 & 10 — LOBBY & ADAPTABLE OFFICES */}
      <section id="lobby" className="py-24 lg:py-36 bg-[#070b20] border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 space-y-28">
          {/* Lobby Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400]">
                07 // Designer Atriums by Kononenko Bureau
              </div>
              <h2 className="text-4xl sm:text-5xl leading-[1.04] font-normal">
                Lobby that fits your style.{' '}
                <span className="text-[#bdbec4]">The atmosphere of growth.</span>
              </h2>
              <p className="text-[#c7cbd4] leading-relaxed">
                {LIKOVA_ASSETS.lobby.slides[lobbyIndex].description}
              </p>
              <div className="space-y-2 pt-4">
                {LIKOVA_ASSETS.lobby.slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setLobbyIndex(idx)}
                    className={`w-full text-left p-4 border transition-all cursor-pointer flex items-center justify-between ${
                      lobbyIndex === idx
                        ? 'bg-white text-[#070b20] border-white'
                        : 'bg-[#232739]/40 text-white border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="text-sm font-medium">{slide.id} · {slide.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden border border-white/15">
                <img
                  src={LIKOVA_ASSETS.lobby.slides[lobbyIndex].image}
                  alt={LIKOVA_ASSETS.lobby.slides[lobbyIndex].title}
                  className="w-full h-[460px] lg:h-[540px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Adaptable Office Spaces */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-white/10">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative overflow-hidden border border-white/15">
                <img
                  src={LIKOVA_ASSETS.offices.slides[officeIndex].image}
                  alt={LIKOVA_ASSETS.offices.slides[officeIndex].title}
                  className="w-full h-[460px] lg:h-[540px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#070b20]/90 backdrop-blur-md p-5 border border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-[#bc9400]">
                      {LIKOVA_ASSETS.offices.slides[officeIndex].ceiling}
                    </div>
                    <div className="text-lg text-white">
                      {LIKOVA_ASSETS.offices.slides[officeIndex].area}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {LIKOVA_ASSETS.offices.slides.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setOfficeIndex(idx)}
                        className={`w-9 h-9 text-xs border transition-colors cursor-pointer ${
                          officeIndex === idx
                            ? 'bg-[#bc9400] text-[#070b20] border-[#bc9400] font-medium'
                            : 'bg-[#070b20] text-white border-white/20'
                        }`}
                      >
                        {s.id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400]">
                08 // Class A Workspaces
              </div>
              <h2 className="text-4xl sm:text-5xl leading-[1.04] font-normal">
                Adaptable office space.{' '}
                <span className="text-[#bdbec4]">Your office as an impulse to take off.</span>
              </h2>
              <h3 className="text-2xl text-white">
                {LIKOVA_ASSETS.offices.slides[officeIndex].title}
              </h3>
              <p className="text-[#c7cbd4] leading-relaxed">
                {LIKOVA_ASSETS.offices.slides[officeIndex].description}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#232739]/60 border border-white/10">
                  <div className="text-2xl text-white">Up to 5.8 m</div>
                  <div className="text-xs uppercase tracking-wider text-[#bdbec4] mt-1">Ceiling Height</div>
                </div>
                <div className="p-4 bg-[#232739]/60 border border-white/10">
                  <div className="text-2xl text-white">360°</div>
                  <div className="text-xs uppercase tracking-wider text-[#bdbec4] mt-1">Panoramic Glazing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — 12.ENGINEERING & BMS SYSTEMS */}
      <section id="engineering" className="py-24 lg:py-36 bg-[#232739]/40 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400] mb-3">
                  09 // Engineering Excellence
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] font-normal">
                  Innovation in action
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LIKOVA_ASSETS.engineering.specs.map((spec) => (
                  <div key={spec.code} className="p-6 bg-[#070b20] border border-white/10 space-y-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-[#bc9400]">{spec.code}</div>
                    <h3 className="text-lg font-medium text-white">{spec.title}</h3>
                    <p className="text-sm text-[#bdbec4] leading-relaxed">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden border border-white/15 bg-[#070b20]">
                <img
                  src={LIKOVA_ASSETS.engineering.intro}
                  alt="LIKOVA Engineering Systems"
                  className="w-full h-[520px] object-cover opacity-80"
                />
                <img
                  src={LIKOVA_ASSETS.engineering.diagram}
                  alt="LIKOVA Engineering Blueprint Overlay"
                  className="absolute inset-0 w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 & 14 — INFRASTRUCTURE & PROJECT TEAM */}
      <section id="infrastructure" className="py-24 lg:py-36 bg-[#070b20] border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400] mb-3">
              10 // Self-Sufficient Ecosystem
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] font-normal">
              Territory of achievement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {LIKOVA_ASSETS.infrastructure.items.map((item) => (
              <div
                key={item.title}
                className="group border border-white/10 bg-[#232739]/40 overflow-hidden flex flex-col justify-between"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white">{item.title}</h3>
                  <p className="text-sm text-[#bdbec4] mt-2 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Project Team & Partners */}
          <div className="border-t border-white/15 pt-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#bdbec4] mb-8">
              Project Creators & Architectural Partners
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LIKOVA_ASSETS.teamLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="p-8 bg-[#232739]/40 border border-white/10 flex flex-col justify-between gap-6"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain object-left brightness-0 invert opacity-90"
                  />
                  <div>
                    <div className="text-lg text-white">{partner.name}</div>
                    <div className="text-xs uppercase tracking-[0.14em] text-[#bdbec4] mt-1">
                      {partner.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050817] border-t border-white/10 py-16 text-[#bdbec4]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="lg:col-span-5 space-y-4">
              <img
                src={LIKOVA_ASSETS.logo}
                alt="LIKOVA"
                className="h-7 w-auto brightness-0 invert"
              />
              <p className="text-sm text-[#bdbec4] max-w-sm leading-relaxed">
                LIKOVA Class A Business Center · Moscow, Vnukovskoye Highway, Pykhtino / Vnukovo Cluster. Commissioning Q3 2026.
              </p>
            </div>
            <div className="lg:col-span-4 space-y-2 text-sm">
              <div className="text-xs uppercase tracking-[0.18em] text-white mb-3">Sales & Leasing Office</div>
              <div>+7 (495) 150-53-30</div>
              <div>sales@likova.space</div>
              <div>Daily 09:00 – 21:00</div>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end items-start">
              <button
                onClick={() => setCallbackOpen(true)}
                className="px-6 py-3.5 bg-[#bc9400] text-[#070b20] hover:bg-white transition-colors text-xs uppercase tracking-[0.16em] font-medium flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Presentation</span>
              </button>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#57566a]">
            <span>© 2026 LIKOVA Business Center. All rights reserved.</span>
            <span>Architectural concept by KAMEN Architects</span>
          </div>
        </div>
      </footer>

      {/* REQUEST A CALL / PRESENTATION MODAL */}
      {callbackOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#070b20] border border-white/20 max-w-lg w-full p-8 relative">
            <button
              onClick={() => setCallbackOpen(false)}
              className="absolute top-6 right-6 text-[#bdbec4] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {callbackSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#bc9400] text-[#070b20] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-white">Request Received</h3>
                <p className="text-sm text-[#bdbec4]">
                  A LIKOVA Commercial Real Estate Director will contact you within 15 minutes with the floorplan brochure.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#bc9400]">
                  Commercial Leasing & Investment
                </div>
                <h3 className="text-3xl font-normal text-white">
                  Request Private Consultation
                </h3>
                <p className="text-sm text-[#bdbec4]">
                  Selected unit: <strong className="text-white">Floor {selectedUnit.floor} ({selectedUnit.area} m² — {selectedUnit.total})</strong>
                </p>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#bdbec4] mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Alexander Volkov"
                    className="w-full px-4 py-3 bg-[#232739] border border-white/15 text-white text-sm focus:outline-none focus:border-[#bc9400]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#bdbec4] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 bg-[#232739] border border-white/15 text-white text-sm focus:outline-none focus:border-[#bc9400]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#bdbec4] mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-[#232739] border border-white/15 text-white text-sm focus:outline-none focus:border-[#bc9400]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#bc9400] text-[#070b20] hover:bg-white transition-colors text-xs uppercase tracking-[0.16em] font-medium cursor-pointer"
                >
                  Send Request & Download Brochure
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
