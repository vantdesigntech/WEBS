import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Command,
  Sparkles,
  X,
  ArrowLeft,
  Check,
  Grid,
  Orbit,
  Mail,
  Headphones,
} from 'lucide-react';
import { GARCY_ASSETS, GARCY_PROJECTS, GARCY_TESTIMONIALS, CaseStudy } from './data';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [galleryMode, setGalleryMode] = useState<'grid' | 'vortex'>('grid');
  const [commandOpen, setCommandOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [podcastPlaying, setPodcastPlaying] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);

  const podcastRef = useRef<HTMLAudioElement | null>(null);
  const ambientRef = useRef<HTMLAudioElement | null>(null);

  const categories = ['All', 'Brand identity', 'Website design', 'Product design', 'Packaging', 'Editorial'];

  const filteredProjects =
    selectedCategory === 'All'
      ? GARCY_PROJECTS
      : GARCY_PROJECTS.filter((p) =>
          p.services.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase())) ||
          p.field.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const togglePodcast = () => {
    if (!podcastRef.current) return;
    if (podcastPlaying) {
      podcastRef.current.pause();
      setPodcastPlaying(false);
    } else {
      if (ambientRef.current && soundPlaying) {
        ambientRef.current.pause();
        setSoundPlaying(false);
      }
      podcastRef.current.play().catch(() => {});
      setPodcastPlaying(true);
    }
  };

  const toggleAmbient = () => {
    if (!ambientRef.current) return;
    if (soundPlaying) {
      ambientRef.current.pause();
      setSoundPlaying(false);
    } else {
      if (podcastRef.current && podcastPlaying) {
        podcastRef.current.pause();
        setPodcastPlaying(false);
      }
      ambientRef.current.play().catch(() => {});
      setSoundPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#121416] font-restart selection:bg-[#f3ff47] selection:text-[#121416] pb-24">
      {/* Hidden Authentic Audio Tracks */}
      <audio ref={podcastRef} src={GARCY_ASSETS.podcastAudio} onEnded={() => setPodcastPlaying(false)} />
      <audio ref={ambientRef} src={GARCY_ASSETS.ambientAudio} loop />

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#fafafa]/85 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <img src={GARCY_ASSETS.logo} alt="garcy.studio" className="h-7 w-auto" />
            </a>
            <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[11px] font-mono-diatype uppercase tracking-wider text-black/70">
              <img src={GARCY_ASSETS.asterisk} alt="*" className="w-3 h-3 animate-slow-spin" />
              Joy through design since 2008
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:opacity-60 transition-opacity">Selected Work (12)</a>
            <a href="#manifesto" className="hover:opacity-60 transition-opacity">Why Unmistakable</a>
            <a href="#testimonials" className="hover:opacity-60 transition-opacity">Client Stories</a>
            <a href="#studio" className="hover:opacity-60 transition-opacity">Prague Studio</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-black/15 bg-white hover:border-black text-xs font-mono-diatype cursor-pointer transition-all"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Menu / Ctrl</span>
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#121416] text-white hover:bg-[#f3ff47] hover:text-[#121416] transition-all text-xs font-mono-diatype uppercase tracking-wider font-medium flex items-center gap-2 cursor-pointer"
            >
              <span>Discuss a project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION — "DESIGN THAT MAKES YOU UNMISTAKABLE" */}
      <section className="relative pt-14 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f3ff47] text-[#121416] text-xs font-mono-diatype uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Branding · Websites · Digital Products</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[86px] leading-[0.95] tracking-[-0.03em] font-semibold">
                Design that makes you{' '}
                <span className="font-nineties font-normal underline decoration-[#f3ff47] decoration-4 underline-offset-8">
                  unmistakable.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-black/75 leading-relaxed max-w-2xl">
                A brand that feels like you. Something that stops people mid-scroll, mid-street, mid-conversation.{' '}
                <span className="text-[#121416] font-medium">We design for “that moment.”</span>
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#work"
                  className="px-8 py-4 rounded-full bg-[#121416] text-white hover:bg-[#f3ff47] hover:text-[#121416] transition-all text-sm font-mono-diatype uppercase tracking-wider inline-flex items-center gap-3"
                >
                  <span>Explore Selected Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={togglePodcast}
                  className={`px-6 py-4 rounded-full border transition-all text-xs font-mono-diatype uppercase tracking-wider inline-flex items-center gap-3 cursor-pointer ${
                    podcastPlaying
                      ? 'bg-[#7dff8b] text-[#121416] border-[#121416]'
                      : 'bg-white text-[#121416] border-black/15 hover:border-black'
                  }`}
                >
                  <Headphones className="w-4 h-4" />
                  <span>{podcastPlaying ? 'Pause Studio Podcast' : 'Listen: Studio Audio Intro'}</span>
                </button>
              </div>
            </div>

            {/* Hero Interactive Studio Card & Opening Reel */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-[#121416] text-white p-3 shadow-2xl border border-black/10">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <video
                    src={GARCY_ASSETS.reelVideo}
                    poster={GARCY_ASSETS.opening}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono-diatype uppercase tracking-wider text-[#f3ff47]">
                    Studio Showreel · Prague
                  </div>
                </div>

                {/* Notification Portrait Strip */}
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={GARCY_ASSETS.portraitGrid}
                      alt="Brands that get that text"
                      className="w-14 h-14 rounded-xl object-cover border border-white/15"
                    />
                    <div>
                      <div className="text-xs font-mono-diatype uppercase tracking-wider text-[#7dff8b]">
                        “Brands that get that text”
                      </div>
                      <div className="text-sm text-white/90 mt-0.5">
                        17+ years crafting identities & digital products
                      </div>
                    </div>
                  </div>
                  <img src={GARCY_ASSETS.asterisk} alt="*" className="w-7 h-7 invert animate-slow-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS — INTERACTIVE GALLERY & VORTEX SWITCHER */}
      <section id="work" className="py-24 bg-white border-t border-black/10">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-xs font-mono-diatype uppercase tracking-[0.2em] text-black/50 mb-3">
                01 // Selected Work (Click any project for full case study)
              </div>
              <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em]">
                We design for <span className="font-nineties font-normal">“that moment.”</span>
              </h2>
            </div>

            {/* Mode & Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-full p-1 bg-[#fafafa] border border-black/10 mr-2">
                <button
                  onClick={() => setGalleryMode('grid')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-diatype flex items-center gap-1.5 cursor-pointer transition-all ${
                    galleryMode === 'grid' ? 'bg-[#121416] text-white' : 'text-black/60 hover:text-black'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  Editorial Grid
                </button>
                <button
                  onClick={() => setGalleryMode('vortex')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-diatype flex items-center gap-1.5 cursor-pointer transition-all ${
                    galleryMode === 'vortex' ? 'bg-[#f3ff47] text-[#121416]' : 'text-black/60 hover:text-black'
                  }`}
                >
                  <Orbit className="w-3.5 h-3.5" />
                  Tornado Stream
                </button>
              </div>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono-diatype uppercase tracking-wider border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#121416] text-white border-[#121416]'
                      : 'bg-[#fafafa] text-black/70 border-black/10 hover:border-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {galleryMode === 'vortex' ? (
            /* TORNADO / ORBITAL STREAM VIEW */
            <div className="bg-[#121416] text-white rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono-diatype uppercase tracking-widest text-[#f3ff47]">
                  Interactive Tornado Stream · Select a card to inspect case study
                </span>
                <button
                  onClick={() => setGalleryMode('grid')}
                  className="text-xs font-mono-diatype underline text-white/70 hover:text-white cursor-pointer"
                >
                  Switch to Standard Grid
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveCaseStudy(project)}
                    style={{ transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * 1.2}deg)` }}
                    className="group bg-[#25272a] border border-white/10 hover:border-[#f3ff47] rounded-2xl p-4 transition-all duration-300 hover:scale-[1.03] hover:rotate-0 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4">
                      <img
                        src={project.thumb}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono-diatype uppercase tracking-widest text-[#7dff8b]">
                        {project.field}
                      </div>
                      <h3 className="text-lg font-semibold text-white mt-1 flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#f3ff47]" />
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* EDITORIAL BENTO PROJECT GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  onClick={() => setActiveCaseStudy(project)}
                  className={`group rounded-3xl overflow-hidden border border-black/10 bg-[#fafafa] hover:border-black transition-all cursor-pointer flex flex-col justify-between ${
                    index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-[#121416]">
                    {project.video ? (
                      <video
                        src={project.video}
                        poster={project.thumb}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={project.thumb}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono-diatype">
                        {project.field}
                      </span>
                      {project.metrics && (
                        <span className="px-3 py-1 rounded-full bg-[#f3ff47] text-[#121416] text-[11px] font-mono-diatype font-medium">
                          {project.metrics}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-[#121416] group-hover:bg-[#f3ff47] flex items-center justify-center transition-colors shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                        {project.logo && (
                          <img
                            src={project.logo}
                            alt={project.client}
                            className="h-5 w-auto object-contain opacity-70"
                          />
                        )}
                      </div>
                      <p className="text-sm text-black/70 mt-2 line-clamp-2 leading-relaxed">
                        {project.headline} — {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/10">
                      {project.services.slice(0, 4).map((srv) => (
                        <span
                          key={srv}
                          className="text-[11px] font-mono-diatype px-2.5 py-1 rounded-full bg-black/5 text-black/75"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MANIFESTO SECTION — "YOU ALREADY KNOW THE DIFFERENCE" */}
      <section id="manifesto" className="py-28 lg:py-36 bg-[#121416] text-white">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-diatype uppercase tracking-[0.2em] text-[#f3ff47]">
                <img src={GARCY_ASSETS.asterisk} alt="*" className="w-3.5 h-3.5 invert" />
                <span>02 // The Unmistakable Manifesto</span>
              </div>
              <h2 className="text-4xl sm:text-6xl leading-[0.98] font-semibold">
                You already know the{' '}
                <span className="font-nineties font-normal text-[#f3ff47]">difference.</span>
              </h2>
              <p className="text-xl text-white/75">
                Between a brand that fits and one that defines.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8 text-lg sm:text-xl text-white/85 leading-relaxed">
              <p>
                AI now introduces your brand before you’ve said a word. Someone asks who to trust, who to hire, who’s worth it. You want to be on that list.{' '}
                <strong className="text-white">
                  But the click is only the beginning. If the brand doesn’t deliver, you’re out.
                </strong>
              </p>
              <p>
                The brands that win get cited, clicked, chosen — because when someone lands, they find exactly what was promised. And then some. That’s what you’re after. Something that stops people mid-scroll, mid-street, mid-conversation. A brand that feels like you — on your best day, no apologies.
              </p>
              <div className="p-8 rounded-3xl bg-[#25272a] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-mono-diatype uppercase tracking-widest text-[#7dff8b]">
                    For those who don’t want to play it safe
                  </div>
                  <div className="text-2xl sm:text-3xl font-semibold text-white mt-2">
                    You can’t play it safe now. The average is already covered.
                  </div>
                </div>
                <button
                  onClick={() => setContactOpen(true)}
                  className="px-6 py-4 rounded-full bg-[#f3ff47] text-[#121416] font-mono-diatype text-xs uppercase tracking-wider font-medium shrink-0 cursor-pointer hover:bg-[#7dff8b] transition-colors"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS WITH VIDEO PORTRAITS */}
      <section id="testimonials" className="py-24 lg:py-36 bg-[#fafafa] border-t border-black/10">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <div className="text-xs font-mono-diatype uppercase tracking-[0.2em] text-black/50 mb-3">
              03 // What Partners Say
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em]">
              Brands that get <span className="font-nineties font-normal">“that text.”</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GARCY_TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-black/10 flex flex-col justify-between gap-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-base sm:text-lg text-[#121416] leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="space-y-4 pt-4 border-t border-black/10">
                  <div className="flex items-center gap-4">
                    {item.video ? (
                      <video
                        src={item.video}
                        poster={item.avatar}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-14 h-14 rounded-2xl object-cover border border-black/10"
                      />
                    ) : (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-2xl object-cover border border-black/10"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-[#121416]">{item.name}</div>
                      <div className="text-xs text-black/60">
                        {item.role} · <strong className="text-black/80">{item.company}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono-diatype uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fafafa] border border-black/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO & PRAGUE TEAM SECTION */}
      <section id="studio" className="py-24 lg:py-36 bg-white border-t border-black/10">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono-diatype uppercase tracking-[0.2em] text-black/50 mb-3">
                04 // Meet the Studio · Prague, Czechia
              </div>
              <h2 className="text-4xl sm:text-6xl font-semibold leading-[1.02]">
                The safest thing you can do now is be{' '}
                <span className="font-nineties font-normal underline decoration-[#f3ff47] decoration-4">
                  unmistakable.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-black/70 leading-relaxed">
              We build for people who refuse to be forgettable — who want something they’re proud of before it even launches, something that rises above the AI average and stays there.
            </div>
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {GARCY_ASSETS.studio.team.map((member) => (
              <div
                key={member.name}
                className="group rounded-3xl overflow-hidden bg-[#fafafa] border border-black/10 p-4 flex flex-col justify-between"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/4] bg-[#121416] mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-2 pb-2 flex items-end justify-between">
                  <div>
                    <div className="text-xs font-mono-diatype uppercase tracking-wider text-black/55">
                      {member.role}
                    </div>
                    <h3 className="text-2xl font-semibold mt-1">{member.name}</h3>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs font-mono-diatype text-black/70 hover:text-black underline mt-1 inline-block"
                    >
                      {member.email}
                    </a>
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-[#121416] text-white flex items-center justify-center hover:bg-[#f3ff47] hover:text-[#121416] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Prague Studio Space Photos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 rounded-3xl overflow-hidden border border-black/10 relative h-80 lg:h-96">
              <img
                src={GARCY_ASSETS.studio.interior}
                alt="garcy.studio Prague Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono-diatype">
                Prague 4 Studio · Na Usedlosti 1837/10
              </div>
            </div>
            <div className="md:col-span-5 rounded-3xl overflow-hidden border border-black/10 relative h-80 lg:h-96">
              <img
                src={GARCY_ASSETS.studio.terrace}
                alt="garcy.studio Prague Terrace"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono-diatype">
                Joy through design since 2008
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#121416] text-white py-20">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            <div className="lg:col-span-6 space-y-6">
              <img src={GARCY_ASSETS.joySvg} alt="Joy through design" className="h-12 w-auto" />
              <h3 className="text-3xl sm:text-5xl font-semibold max-w-xl leading-tight">
                If that’s you, let’s make it.
              </h3>
              <div>
                <a
                  href="mailto:hello@garcy.studio"
                  className="inline-flex items-center gap-3 text-xl sm:text-2xl font-mono-diatype text-[#f3ff47] hover:underline"
                >
                  <span>hello@garcy.studio</span>
                  <ArrowUpRight className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-2 text-sm text-white/75 font-mono-diatype">
              <div className="text-white uppercase tracking-wider mb-3">Prague Studio</div>
              <div>garcy.studio</div>
              <div>Na Usedlosti 1837/10</div>
              <div>147 00, Prague 4, Czechia</div>
              <div className="pt-2 text-white/50">VAT: CZ07826800</div>
            </div>

            <div className="lg:col-span-3 space-y-2 text-sm text-white/75">
              <div className="text-white font-mono-diatype uppercase tracking-wider mb-3">Capabilities</div>
              <div>Brand Identity & Packaging Design</div>
              <div>Website Design & Interactive</div>
              <div>Mobile Apps & SaaS Product Design</div>
              <div>Full Digital Product Systems</div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-diatype text-white/50">
            <span>© 2026 garcy.studio — Joy through design since 2008</span>
            <span>Brands that get that text.</span>
          </div>
        </div>
      </footer>

      {/* FLOATING HARDWARE-STYLE BOTTOM CONTROL BAR */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-[#25272a]/95 backdrop-blur-xl text-white px-4 py-2.5 rounded-full border border-white/15 shadow-2xl flex items-center gap-3">
        <button
          onClick={togglePodcast}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-diatype transition-colors cursor-pointer ${
            podcastPlaying ? 'bg-[#f3ff47] text-[#121416] font-medium' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {podcastPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>Podcast</span>
        </button>

        <button
          onClick={toggleAmbient}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-diatype transition-colors cursor-pointer ${
            soundPlaying ? 'bg-[#7dff8b] text-[#121416] font-medium' : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {soundPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">Starfall Audio</span>
        </button>

        <button
          onClick={() => setCommandOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono-diatype cursor-pointer"
        >
          <Command className="w-3.5 h-3.5 text-[#f3ff47]" />
          <span>Index</span>
        </button>

        <button
          onClick={() => setContactOpen(true)}
          className="px-4 py-1.5 rounded-full bg-[#f3ff47] text-[#121416] text-xs font-mono-diatype font-medium hover:bg-[#7dff8b] transition-colors cursor-pointer"
        >
          Hire Us
        </button>
      </div>

      {/* FULL CASE STUDY READER MODAL */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto p-4 md:p-10">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-black/15 shadow-2xl">
            <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-black/10 flex items-center justify-between">
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="inline-flex items-center gap-2 text-xs font-mono-diatype uppercase tracking-wider hover:opacity-70 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to projects</span>
              </button>
              <span className="text-xs font-mono-diatype text-black/50">{activeCaseStudy.client}</span>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 md:p-12 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="text-xs font-mono-diatype uppercase tracking-widest text-black/50">
                    {activeCaseStudy.field}
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
                    {activeCaseStudy.headline}
                  </h2>
                  <p className="text-lg text-black/75 leading-relaxed">{activeCaseStudy.summary}</p>
                </div>
                <div className="lg:col-span-4 bg-[#fafafa] p-6 rounded-2xl border border-black/10 space-y-4">
                  <div>
                    <div className="text-[11px] font-mono-diatype uppercase text-black/50">Client</div>
                    <div className="font-medium mt-0.5">{activeCaseStudy.client}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-diatype uppercase text-black/50">Services</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeCaseStudy.services.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono-diatype px-2.5 py-1 rounded-full bg-white border border-black/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pull Quote Banner */}
              <div className="p-8 rounded-2xl bg-[#121416] text-[#f3ff47] text-center font-mono-diatype text-xl sm:text-2xl uppercase tracking-wider">
                “{activeCaseStudy.pullQuote}”
              </div>

              {/* Narrative Paragraphs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeCaseStudy.story.map((paragraph, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-[#fafafa] border border-black/10 text-sm leading-relaxed text-black/80">
                    <div className="text-xs font-mono-diatype text-black/40 mb-2">0{index + 1}</div>
                    {paragraph}
                  </div>
                ))}
              </div>

              {/* Full Case Study Visual Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCaseStudy.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl overflow-hidden border border-black/10 bg-[#121416] ${
                      idx === 0 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <img src={imgUrl} alt={`${activeCaseStudy.title} ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMMAND / STUDIO INDEX MODAL */}
      {commandOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121416] text-white border border-white/15 rounded-3xl max-w-3xl w-full p-8 relative">
            <button
              onClick={() => setCommandOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono-diatype uppercase tracking-widest text-[#f3ff47] mb-2">
              Studio Command Index
            </div>
            <h3 className="text-2xl font-semibold mb-6">
              Jump directly to any case study or capability
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
              {GARCY_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setCommandOpen(false);
                    setActiveCaseStudy(proj);
                  }}
                  className="p-3.5 rounded-xl bg-[#25272a] hover:bg-[#f3ff47] hover:text-[#121416] transition-colors text-left flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="font-medium text-sm">{proj.title}</div>
                    <div className="text-[11px] opacity-70 font-mono-diatype">{proj.field}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT / DISCUSS A PROJECT MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white text-[#121416] rounded-3xl max-w-lg w-full p-8 relative border border-black/15">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-6 right-6 text-black/60 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#7dff8b] text-[#121416] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Message sent to Prague!</h3>
                <p className="text-sm text-black/70">
                  Loren & Tom will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSent(true);
                  setTimeout(() => {
                    setContactSent(false);
                    setContactOpen(false);
                  }, 2200);
                }}
                className="space-y-4"
              >
                <div className="text-xs font-mono-diatype uppercase tracking-widest text-black/50">
                  hello@garcy.studio
                </div>
                <h3 className="text-3xl font-semibold">Let’s make you unmistakable.</h3>
                <div>
                  <label className="block text-xs font-mono-diatype uppercase mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Founder"
                    className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-black/15 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-diatype uppercase mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-black/15 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-diatype uppercase mb-1.5">What are we building?</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Brand identity, new website, or SaaS product redesign..."
                    className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-black/15 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#121416] text-white hover:bg-[#f3ff47] hover:text-[#121416] transition-colors text-xs font-mono-diatype uppercase tracking-wider font-medium cursor-pointer"
                >
                  Send Project Brief
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
