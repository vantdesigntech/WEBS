import React, { useState, useRef, useEffect } from 'react';
import {
  CAMERA_STREAMS,
  SPOTIFY_PLAYLIST,
  EDITORIAL_STORIES,
  STORE_PRODUCTS,
  EditorialStory,
  StoreProduct,
  soundEngine,
} from './data/siteData';

type RouteView = 'home' | 'editorial' | 'store' | 'memory' | 'about';

interface CartItem {
  product: StoreProduct;
  quantity: number;
}

export function App() {
  const [route, setRoute] = useState<RouteView>('home');
  const [activeStory, setActiveStory] = useState<EditorialStory | null>(null);
  const [activeProduct, setActiveProduct] = useState<StoreProduct | null>(null);

  // Floating right-side widget state
  const [widgetsCollapsed, setWidgetsCollapsed] = useState(false);
  const [activeCam, setActiveCam] = useState<number>(1);
  const [pipPlaying, setPipPlaying] = useState(true);
  const [heroPlaying, setHeroPlaying] = useState(true);

  // Newsletter & Memory subscription state
  const [newsletterVisible, setNewsletterVisible] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterJoined, setNewsletterJoined] = useState(false);
  const [memoryEmail, setMemoryEmail] = useState('');
  const [memoryJoined, setMemoryJoined] = useState(false);

  // Audio playback state (Spotify widget + Vinyl tracklist)
  const [playingTrackKey, setPlayingTrackKey] = useState<string | null>(null);

  // Store & Cart state
  const [cart, setCart] = useState<CartItem[]>([
    { product: STORE_PRODUCTS[3], quantity: 1 }, // 000 CHANNEL BLACK default ready
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  // Product section local states on Home
  const [tinasheQty, setTinasheQty] = useState(1);
  const [tinasheNotified, setTinasheNotified] = useState(false);
  const [vinylQty, setVinylQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Editorial filter state
  const [editorialFilter, setEditorialFilter] = useState<'ALL' | 'PROFILE STORY' | 'FEATURE STORY'>('ALL');

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const pipVideoRef = useRef<HTMLVideoElement | null>(null);

  const currentCamera = CAMERA_STREAMS.find((c) => c.id === activeCam) || CAMERA_STREAMS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route, activeStory, activeProduct]);

  const handleNavigate = (target: RouteView) => {
    setRoute(target);
    setActiveStory(null);
    setActiveProduct(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  const toggleAudioTrack = (key: string, freq: number) => {
    if (playingTrackKey === key) {
      soundEngine.stop();
      setPlayingTrackKey(null);
    } else {
      soundEngine.start(freq);
      setPlayingTrackKey(key);
    }
  };

  const toggleHeroVideo = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play();
      setHeroPlaying(true);
    } else {
      heroVideoRef.current.pause();
      setHeroPlaying(false);
    }
  };

  const togglePipVideo = () => {
    if (!pipVideoRef.current) return;
    if (pipVideoRef.current.paused) {
      pipVideoRef.current.play();
      setPipPlaying(true);
    } else {
      pipVideoRef.current.pause();
      setPipPlaying(false);
    }
  };

  const addToCart = (product: StoreProduct, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setCartOpen(true);
    setCheckoutDone(false);
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const isMemoryRoute = route === 'memory' && !activeStory && !activeProduct;

  const filteredStories = EDITORIAL_STORIES.filter((s) =>
    editorialFilter === 'ALL' ? true : s.category === editorialFilter
  );

  const searchResultsStories = searchQuery.trim()
    ? EDITORIAL_STORIES.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.deck.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.cycle && s.cycle.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const searchResultsProducts = searchQuery.trim()
    ? STORE_PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const tinasheProduct = STORE_PRODUCTS.find((p) => p.id === 'mag-tinashe')!;
  const vinylProduct = STORE_PRODUCTS.find((p) => p.id === 'vinyl-channel-black')!;

  return (
    <div className="min-h-screen bg-black text-white font-medium-ll relative selection:bg-[#ecfd81] selection:text-black">
      {/* =====================================================================
          TOP 6-COLUMN FIXED HEADER (Exact 1.3rem / 21px height from entry.css)
         ===================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1005] h-[1.35rem] grid grid-cols-2 md:grid-cols-6 gap-x-2 px-2 items-center font-ibm text-[12px] leading-[13px] tracking-[-0.01em] uppercase transition-colors duration-300 ${
          isMemoryRoute
            ? 'bg-[#f5f2ed] text-[#12100e]'
            : 'bg-black/95 text-white border-b border-white/10'
        }`}
      >
        {/* Col 1: Brand */}
        <button
          onClick={() => handleNavigate('home')}
          className="col-span-1 text-left cursor-pointer hover:opacity-50 transition-opacity font-ibm uppercase truncate"
        >
          _BY.ALEXANDER
        </button>

        {/* Col 2: Editorial */}
        <button
          onClick={() => handleNavigate('editorial')}
          className={`hidden md:block col-span-1 text-left cursor-pointer hover:opacity-50 transition-opacity uppercase ${
            route === 'editorial' ? 'opacity-50' : ''
          }`}
        >
          EDITORIAL
        </button>

        {/* Col 3: Store */}
        <button
          onClick={() => handleNavigate('store')}
          className={`hidden md:block col-span-1 text-left cursor-pointer hover:opacity-50 transition-opacity uppercase ${
            route === 'store' ? 'opacity-50' : ''
          }`}
        >
          STORE
        </button>

        {/* Col 4: Memory */}
        <button
          onClick={() => handleNavigate('memory')}
          className={`hidden md:block col-span-1 text-left cursor-pointer hover:opacity-50 transition-opacity uppercase ${
            route === 'memory' ? 'opacity-50' : ''
          }`}
        >
          MEMORY
        </button>

        {/* Col 5: About */}
        <button
          onClick={() => handleNavigate('about')}
          className={`hidden md:block col-span-1 text-left cursor-pointer hover:opacity-50 transition-opacity uppercase ${
            route === 'about' ? 'opacity-50' : ''
          }`}
        >
          ABOUT
        </button>

        {/* Col 6: Search + Cart (2 sub-columns on desktop) */}
        <div className="col-span-1 grid grid-cols-2 gap-x-2 items-center">
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="hidden md:block text-left cursor-pointer hover:opacity-50 transition-opacity uppercase"
          >
            {searchOpen ? 'CLOSE' : 'SEARCH'}
          </button>
          <div className="flex items-center justify-end md:justify-between col-span-2 md:col-span-1 gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="text-left cursor-pointer hover:opacity-50 transition-opacity uppercase"
            >
              CART ({totalCartItems})
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden cursor-pointer hover:opacity-50 transition-opacity uppercase"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MORE'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[1.35rem] z-[1004] bg-black text-white p-4 flex flex-col justify-between md:hidden font-ibm uppercase">
          <div className="flex flex-col gap-4 text-[22px] leading-[24px] font-medium-ll pt-6">
            <button onClick={() => handleNavigate('home')} className="text-left hover:text-[#ecfd81]">
              HOME
            </button>
            <button onClick={() => handleNavigate('editorial')} className="text-left hover:text-[#ecfd81]">
              EDITORIAL
            </button>
            <button onClick={() => handleNavigate('store')} className="text-left hover:text-[#ecfd81]">
              STORE
            </button>
            <button onClick={() => handleNavigate('memory')} className="text-left hover:text-[#ecfd81]">
              MEMORY
            </button>
            <button onClick={() => handleNavigate('about')} className="text-left hover:text-[#ecfd81]">
              ABOUT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="text-left text-[#ecfd81]"
            >
              SEARCH
            </button>
          </div>
          <div className="border-t border-white/15 pt-4 text-[11px] text-[#bababa] flex justify-between">
            <span>66 GREENE ST SOHO NY</span>
            <span>_BY.ALEXANDER</span>
          </div>
        </div>
      )}

      {/* =====================================================================
          SEARCH OVERLAY MODAL
         ===================================================================== */}
      {searchOpen && (
        <div className="fixed inset-x-0 top-[1.35rem] z-[1004] bg-black/95 border-b border-white/20 p-4 md:p-6 backdrop-blur-md">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between border-b border-white/30 pb-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH CYCLES, ARTISTS, MAGAZINES, VINYL..."
                autoFocus
                className="w-full bg-transparent text-white font-ibm text-[14px] uppercase focus:outline-none placeholder:text-white/35"
              />
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchOpen(false);
                }}
                className="font-ibm text-[11px] uppercase text-[#ecfd81] ml-4 cursor-pointer"
              >
                [ESC]
              </button>
            </div>

            {searchQuery.trim() !== '' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 max-h-[65vh] overflow-y-auto">
                <div>
                  <p className="font-ibm text-[10px] text-[#bababa] uppercase mb-2">
                    EDITORIAL ({searchResultsStories.length})
                  </p>
                  <div className="space-y-2">
                    {searchResultsStories.map((story) => (
                      <button
                        key={story.id}
                        onClick={() => {
                          setActiveStory(story);
                          setActiveProduct(null);
                          setSearchOpen(false);
                        }}
                        className="w-full text-left p-2 hover:bg-white/10 flex items-center gap-3 cursor-pointer"
                      >
                        <img src={story.images[0]} alt={story.title} className="w-10 h-12 object-cover" />
                        <div>
                          <p className="font-ibm text-[10px] text-[#ecfd81] uppercase">
                            {story.cycle || story.category}
                          </p>
                          <p className="font-medium-ll text-[14px] uppercase">{story.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-ibm text-[10px] text-[#bababa] uppercase mb-2">
                    STORE ({searchResultsProducts.length})
                  </p>
                  <div className="space-y-2">
                    {searchResultsProducts.map((prod) => (
                      <button
                        key={prod.id}
                        onClick={() => {
                          setActiveProduct(prod);
                          setActiveStory(null);
                          setSearchOpen(false);
                        }}
                        className="w-full text-left p-2 hover:bg-white/10 flex items-center gap-3 cursor-pointer"
                      >
                        <img src={prod.image} alt={prod.title} className="w-10 h-12 object-cover" />
                        <div>
                          <p className="font-ibm text-[10px] text-[#bababa] uppercase">
                            {prod.category} · {prod.priceFormatted}
                          </p>
                          <p className="font-medium-ll text-[14px] uppercase">{prod.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          RIGHT-SIDE FLOATING WIDGET STACK (4-Cam Switcher + Live PiP + Spotify)
          Exact match to route_home_00.png & entry.DDSHCI6f.css
         ===================================================================== */}
      <aside
        className={`fixed top-[1.35rem] right-0 z-[1002] w-[17.5rem] md:w-[19rem] select-none transition-transform duration-500 ease-[cubic-bezier(0.26,1,0.48,1)] ${
          widgetsCollapsed ? 'translate-x-[calc(100%-1.5rem)]' : 'translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* Top Bar: Yellow 24x24 Collapse [X] Button + Camera 1 2 3 4 Switcher */}
          <div className="flex items-center justify-between bg-transparent">
            <button
              onClick={() => setWidgetsCollapsed((prev) => !prev)}
              title={widgetsCollapsed ? 'Expand Live Widgets' : 'Collapse Live Widgets'}
              className="w-6 h-6 bg-[#ecfd81] text-black flex items-center justify-center cursor-pointer group shrink-0"
            >
              <span className="font-ibm text-[12px] leading-none transition-transform duration-300 group-hover:rotate-180">
                {widgetsCollapsed ? '+' : '×'}
              </span>
            </button>

            {/* Camera Tabs 1 2 3 4 */}
            <div className="flex items-center bg-black/90 border-l border-b border-white/10">
              {CAMERA_STREAMS.map((cam) => {
                const isActive = cam.id === activeCam;
                return (
                  <button
                    key={cam.id}
                    onClick={() => {
                      setActiveCam(cam.id);
                      setPipPlaying(true);
                    }}
                    className={`w-6 h-6 flex items-center justify-center font-medium-ll text-[12px] leading-[13px] cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#ecfd81] text-black font-semibold'
                        : 'bg-black text-white/60 hover:text-white'
                    }`}
                  >
                    {cam.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Widget Body (Hidden when collapsed off-screen) */}
          <div className="bg-black/90 border-l border-b border-white/10 p-2 space-y-2 backdrop-blur-sm">
            {/* 16:9 Live Camera Feed from 66 Greene */}
            <div className="relative aspect-video w-full bg-black overflow-hidden group border border-white/10">
              <video
                ref={pipVideoRef}
                key={currentCamera.videoUrl}
                src={currentCamera.videoUrl}
                poster={currentCamera.posterUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.18] grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

              {/* Camera telemetry overlay */}
              <div className="absolute top-1.5 left-2 right-2 flex items-center justify-between text-[10px] font-ibm uppercase pointer-events-none">
                <span className="flex items-center gap-1.5 text-[#ecfd81]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ecfd81] animate-pulse" />
                  {currentCamera.status}
                </span>
                <span className="text-white/70">66 GREENE SOHO</span>
              </div>

              {/* Bottom controls */}
              <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
                <button
                  onClick={togglePipVideo}
                  className="font-ibm text-[10px] uppercase text-white/90 hover:text-[#ecfd81] cursor-pointer"
                >
                  {pipPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <span className="font-ibm text-[9px] text-white/60 uppercase truncate max-w-[180px]">
                  {currentCamera.location}
                </span>
              </div>
            </div>

            {/* Custom Dark #1f1f1f Spotify Playlist Card (Exact match to screenshot) */}
            <div className="bg-[#1f1f1f] rounded-[10px] p-3 text-white font-spotify shadow-lg">
              <div className="flex items-start justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/store_vinyl_channel_black.jpg"
                    alt="66 GREENE Playlist"
                    className="w-12 h-12 rounded-[6px] object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold text-[13px] leading-tight text-white">66 GREENE</div>
                    <div className="text-[11px] text-white/65 leading-tight mt-0.5">_BY.ALEXANDER</div>
                    <div className="flex items-center gap-1 text-[10px] text-white/60 mt-1">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/50 text-[9px]">
                        +
                      </span>
                      <span>Save on Spotify</span>
                    </div>
                  </div>
                </div>

                {/* Spotify Icon + Play/Pause Master Button */}
                <div className="flex flex-col items-end justify-between h-12">
                  <svg className="w-4 h-4 text-white/90 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <button
                    onClick={() => toggleAudioTrack('spotify-1', SPOTIFY_PLAYLIST[0].freq)}
                    aria-label="Play 66 Greene Playlist"
                    className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    {playingTrackKey?.startsWith('spotify-') ? (
                      <span className="text-[10px] font-bold">❚❚</span>
                    ) : (
                      <span className="text-[10px] ml-0.5">▶</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Playlist Tracklist */}
              <div className="mt-2.5 pt-2 border-t border-white/10 max-h-[118px] overflow-y-auto space-y-1">
                {SPOTIFY_PLAYLIST.map((track) => {
                  const key = `spotify-${track.id}`;
                  const isPlaying = playingTrackKey === key;
                  return (
                    <button
                      key={track.id}
                      onClick={() => toggleAudioTrack(key, track.freq)}
                      className={`w-full flex items-center justify-between text-left px-1.5 py-1 rounded text-[11px] hover:bg-white/10 transition-colors cursor-pointer ${
                        isPlaying ? 'bg-white/15 text-[#ecfd81]' : 'text-white/85'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="w-3 text-white/50 text-[10px]">
                          {isPlaying ? '▶' : track.id}
                        </span>
                        <div className="truncate">
                          <span className="font-medium">{track.title}</span>
                          <span className="text-white/55"> · {track.artist}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-white/50 shrink-0">{track.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================================
          BOTTOM-RIGHT ACID YELLOW (#ECFD81) NEWSLETTER BOX ("STAY IN THE LOOP")
         ===================================================================== */}
      {newsletterVisible && !isMemoryRoute && (
        <div className="fixed bottom-2 right-2 z-[1002] w-[calc(17.5rem-8px)] md:w-[calc(19rem-12px)] bg-[#ecfd81] text-black font-ibm uppercase p-2.5 shadow-2xl">
          <div className="flex items-start justify-between">
            <p className="text-[12px] leading-[14px] font-medium">STAY IN THE LOOP</p>
            <button
              onClick={() => setNewsletterVisible(false)}
              aria-label="Close Newsletter"
              className="text-black hover:opacity-40 text-[12px] leading-none cursor-pointer px-1"
            >
              ×
            </button>
          </div>
          <p className="text-[11px] leading-[13.5px] mt-2">
            DISPATCHES FROM 66 GREENE. COVERS, EVENTS, RELEASES, AND THINGS WORTH KNOWING.
          </p>
          {newsletterJoined ? (
            <div className="mt-3 pt-1.5 border-t border-black/30 flex items-center justify-between text-[11px]">
              <span>SUBSCRIBED TO 66 GREENE DISPATCH.</span>
              <button
                onClick={() => {
                  setNewsletterJoined(false);
                  setNewsletterEmail('');
                }}
                className="underline cursor-pointer"
              >
                RESET
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) setNewsletterJoined(true);
              }}
              className="mt-3 pt-1.5 border-t border-black/40 flex items-center justify-between gap-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="YOUR@EMAIL.ADDRESS"
                className="bg-transparent text-black placeholder:text-black/45 text-[11px] leading-[13px] w-full focus:outline-none uppercase"
              />
              <button
                type="submit"
                className="text-[12px] leading-[13px] font-medium uppercase hover:opacity-40 transition-opacity cursor-pointer shrink-0"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      )}

      {/* =====================================================================
          SLIDE-OUT CART DRAWER
         ===================================================================== */}
      {cartOpen && (
        <div className="fixed inset-0 z-[1010] bg-black/70 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-black border-l border-white/20 h-full flex flex-col justify-between p-4 font-ibm uppercase">
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="text-[12px]">CART ({totalCartItems}) — 66 GREENE STORE</span>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-[#ecfd81] hover:opacity-60 cursor-pointer text-[12px]"
                >
                  CLOSE [×]
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center text-[#bababa] text-[12px]">
                  YOUR CART IS CURRENTLY EMPTY.
                </div>
              ) : (
                <div className="divide-y divide-white/10 mt-3 max-h-[65vh] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="py-3 flex gap-3 items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-14 h-18 object-cover bg-white/5"
                      />
                      <div className="flex-1">
                        <p className="text-[10px] text-[#bababa]">{item.product.category}</p>
                        <p className="font-medium-ll text-[13px] text-white">{item.product.title}</p>
                        <p className="text-[11px] text-[#ecfd81] mt-0.5">
                          {item.product.priceFormatted}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateCartQty(item.product.id, -1)}
                            className="w-5 h-5 border border-white/25 flex items-center justify-center cursor-pointer hover:border-[#ecfd81]"
                          >
                            -
                          </button>
                          <span className="text-[11px]">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(item.product.id, 1)}
                            className="w-5 h-5 border border-white/25 flex items-center justify-center cursor-pointer hover:border-[#ecfd81]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-white/20 pt-4 space-y-3">
                <div className="flex justify-between text-[12px]">
                  <span className="text-[#bababa]">SUBTOTAL</span>
                  <span>{totalCartPrice.toFixed(2)} USD</span>
                </div>
                <p className="text-[10px] text-[#bababa]">
                  SHIPPING & TAXES CALCULATED AT CHECKOUT. DISPATCHED FROM 66 GREENE ST SOHO NY.
                </p>
                {checkoutDone ? (
                  <div className="bg-[#ecfd81] text-black p-3 text-[11px]">
                    ORDER CONFIRMED — DISPATCH REFERENCE #66G-2026.
                  </div>
                ) : (
                  <button
                    onClick={() => setCheckoutDone(true)}
                    className="w-full py-2.5 bg-white text-black font-ibm text-[12px] uppercase hover:bg-[#ecfd81] transition-colors cursor-pointer"
                  >
                    PROCEED TO CHECKOUT — {totalCartPrice.toFixed(2)} USD
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          ACTIVE ARTICLE READER VIEW (When user clicks any story / READ MORE)
         ===================================================================== */}
      {activeStory && (
        <main className="pt-[1.35rem] min-h-screen bg-black text-white pb-24">
          {/* Top Breadcrumb Bar */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 px-2 py-3 border-b border-white/15 font-ibm text-[11px] uppercase items-center">
            <button
              onClick={() => setActiveStory(null)}
              className="col-span-1 text-left text-[#ecfd81] hover:opacity-60 cursor-pointer"
            >
              ← BACK TO {route.toUpperCase()}
            </button>
            <div className="col-span-1 text-[#bababa]">
              {activeStory.cycle || activeStory.category}
            </div>
            <div className="hidden md:block col-span-2 text-[#bababa] truncate">
              {activeStory.title}
            </div>
            <div className="hidden md:block col-span-2 text-right text-[#bababa]">
              66 GREENE EDITORIAL ARCHIVE
            </div>
          </div>

          {/* 6-Column Metadata + Large Editorial Header */}
          <section className="px-2 pt-6 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 gap-y-2 font-ibm text-[10px] leading-[12px] text-[#bababa] uppercase pb-4 border-b border-white/10">
              <div>
                <div>{activeStory.cycle || 'FEATURE'}</div>
                <div>{activeStory.category}</div>
              </div>
              <div>66 GREENE ST SOHO NY</div>
              <div>
                {activeStory.credits.col3.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
              <div>
                {activeStory.credits.col4.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
              <div>
                {activeStory.credits.col5.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
              <div>
                {activeStory.credits.col6.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>

            <h1 className="font-medium-ll text-[32px] md:text-[52px] leading-[1.02] tracking-[-0.02em] uppercase mt-6">
              {activeStory.title}
            </h1>
            <p className="font-ibm text-[12px] md:text-[14px] leading-[16px] text-white/90 uppercase max-w-3xl mt-3">
              {activeStory.deck}
            </p>
          </section>

          {/* 3-Column Editorial Contact Sheet Gallery */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
            {activeStory.images.map((imgUrl, idx) => (
              <div key={idx} className="overflow-hidden bg-white/5">
                <img
                  src={imgUrl}
                  alt={`${activeStory.title} ${idx + 1}`}
                  className="w-full h-[520px] md:h-[680px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            ))}
          </section>

          {/* Pull Quote & Full Interview Body */}
          <section className="grid grid-cols-1 md:grid-cols-6 gap-x-2 px-2 py-14">
            <div className="md:col-span-2 pr-4">
              <p className="font-medium-ll text-[22px] md:text-[28px] leading-[1.1] uppercase text-[#ecfd81]">
                {activeStory.pullQuote}
              </p>
            </div>
            <div className="md:col-span-3 space-y-6 mt-6 md:mt-0 font-ibm text-[12px] leading-[18px] uppercase">
              {activeStory.interview.map((block, idx) => (
                <div key={idx} className="space-y-1">
                  {block.speaker && (
                    <div className="text-[#ecfd81] text-[11px] tracking-wider">
                      {block.speaker} —
                    </div>
                  )}
                  <p className="text-white/90">{block.text}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* =====================================================================
          ACTIVE PRODUCT DETAIL VIEW (When user clicks a product in Store/Home)
         ===================================================================== */}
      {!activeStory && activeProduct && (
        <main className="pt-[1.35rem] min-h-screen bg-black text-white pb-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 px-2 py-3 border-b border-white/15 font-ibm text-[11px] uppercase items-center">
            <button
              onClick={() => setActiveProduct(null)}
              className="col-span-1 text-left text-[#ecfd81] hover:opacity-60 cursor-pointer"
            >
              ← BACK TO {route.toUpperCase()}
            </button>
            <div className="col-span-1 text-[#bababa]">{activeProduct.category}</div>
            <div className="hidden md:block col-span-2 text-white truncate">
              {activeProduct.title}
            </div>
            <div className="hidden md:block col-span-2 text-right text-[#ecfd81]">
              {activeProduct.priceFormatted}
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-6 gap-x-4 px-2 pt-6">
            <div className="md:col-span-3">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full max-h-[82vh] object-cover bg-white/5"
              />
            </div>

            <div className="md:col-span-2 flex flex-col justify-between py-4 md:py-0">
              <div>
                <p className="font-ibm text-[11px] text-[#bababa] uppercase">
                  {activeProduct.category} · {activeProduct.priceFormatted}
                </p>
                <h1 className="font-medium-ll text-[24px] leading-[26px] uppercase mt-1">
                  {activeProduct.title}
                </h1>
                {activeProduct.subtitle && (
                  <p className="font-medium-ll text-[14px] text-[#bababa] uppercase mt-0.5">
                    {activeProduct.subtitle}
                  </p>
                )}

                {activeProduct.isMagazine && activeProduct.magazineCredits && (
                  <div className="mt-6 space-y-4 font-medium-ll text-[12px] leading-[14px] uppercase">
                    <p>{activeProduct.magazineCredits.edition}</p>
                    <div>
                      <p className="text-[#bababa]">ONLY AVAILABLE AT:</p>
                      {activeProduct.magazineCredits.availableAt.map((loc) => (
                        <p key={loc}>{loc}</p>
                      ))}
                    </div>
                    <div>
                      <p className="text-[#bababa]">FEATURING:</p>
                      <p>{activeProduct.magazineCredits.featuring}</p>
                    </div>
                    <div>
                      <p className="text-[#bababa]">PHOTOGRAPHY BY:</p>
                      <p>{activeProduct.magazineCredits.photographyBy}</p>
                    </div>
                    <div>
                      <p className="text-[#bababa]">WORK FROM:</p>
                      <p>{activeProduct.magazineCredits.workFrom}</p>
                    </div>
                  </div>
                )}

                {activeProduct.isVinyl && activeProduct.tracks && (
                  <div className="mt-6 divide-y divide-white/10 border-t border-b border-white/10 font-ibm text-[11px] uppercase">
                    {activeProduct.tracks.map((t) => {
                      const key = `detail-vinyl-${t.number}`;
                      const isPlaying = playingTrackKey === key;
                      return (
                        <div
                          key={t.number}
                          className="py-1.5 flex items-center justify-between hover:bg-white/5 px-1"
                        >
                          <span>
                            {t.number}. {t.title}
                          </span>
                          <button
                            onClick={() => toggleAudioTrack(key, t.rootFreq)}
                            className={`cursor-pointer ${
                              isPlaying ? 'text-[#ecfd81]' : 'text-white/60 hover:text-white'
                            }`}
                          >
                            {isPlaying ? 'PAUSE' : 'PLAY'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-6 space-y-3 font-ibm text-[11px] uppercase text-white/80">
                  <p>{activeProduct.details}</p>
                  <p className="text-[#bababa]">{activeProduct.shipping}</p>
                  <p className="text-[#bababa]">{activeProduct.weightAndSize}</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15 flex items-center gap-4">
                {activeProduct.inStock ? (
                  <button
                    onClick={() => addToCart(activeProduct, 1)}
                    className="px-8 py-2.5 bg-white text-black font-ibm text-[12px] uppercase hover:bg-[#ecfd81] transition-colors cursor-pointer"
                  >
                    ADD TO CART — {activeProduct.priceFormatted}
                  </button>
                ) : (
                  <button
                    onClick={() => setTinasheNotified(true)}
                    className="px-8 py-2.5 bg-white text-black font-ibm text-[12px] uppercase hover:bg-[#ecfd81] transition-colors cursor-pointer"
                  >
                    {tinasheNotified ? 'WAITLIST REGISTERED AT 66 GREENE' : 'OUT OF STOCK'}
                  </button>
                )}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =====================================================================
          ROUTE 1: HOME ("/")
          100% faithful to route_home_00..06.png & awwwards_hero.png
         ===================================================================== */}
      {!activeStory && !activeProduct && route === 'home' && (
        <main className="pt-[1.35rem]">
          {/* 1. HERO FULLSCREEN LIVE STREAM VIDEO FROM 66 GREENE */}
          <section className="relative w-full h-[calc(100dvh-1.35rem)] bg-black overflow-hidden">
            <video
              ref={heroVideoRef}
              key={currentCamera.videoUrl}
              src={currentCamera.videoUrl}
              poster={currentCamera.posterUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-[1.18] grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Bottom-left PAUSE control (above ticker) */}
            <div className="absolute bottom-8 left-2 z-10 flex items-center gap-4 font-ibm text-[11px] uppercase">
              <button
                onClick={toggleHeroVideo}
                className="text-white hover:text-[#ecfd81] cursor-pointer"
              >
                {heroPlaying ? 'PAUSE' : 'PLAY'}
              </button>
              <span className="text-white/60 hidden sm:inline">
                {currentCamera.location}
              </span>
            </div>

            {/* Classic Awwwards Bottom Acid-Yellow Live Ticker Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#ecfd81] text-black font-ibm text-[11px] leading-[12px] uppercase flex items-center justify-between px-2 z-10">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="font-medium shrink-0">
                  LIVE {'->'} LIVE FROM 66 GREENE ST SOHO NY
                </span>
                <span className="hidden md:inline text-black/65">
                  · PART PUBLICATION, PART RETAIL SPACE, PART MUSIC VENUE
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => handleNavigate('editorial')}
                  className="hover:underline cursor-pointer"
                >
                  CYCLE 07: CHI
                </button>
              </div>
            </div>
          </section>

          {/* 2. CYCLE 07 — CHI IS READY FOR HER ENCORE */}
          <section className="px-2 pt-16 pb-10">
            {/* 6-Column Metadata Row */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 gap-y-2 font-ibm text-[10px] leading-[11px] tracking-[0.01em] uppercase text-[#bababa] pb-3">
              <div className="col-span-1 text-white">CYCLE 07</div>
              <div className="col-span-1">PROFILE STORY</div>
              <div className="col-span-1">
                <div>TEXT BY KAYLA CURTIS-EVANS</div>
                <div>PHOTOGRAPHY BY FERNANDO TOMAZ</div>
              </div>
              <div className="col-span-1">
                <div>STYLING BY RACHEL POLYCARPE</div>
                <div>STYLING ASSISTANT: HANNAH RUBIN</div>
              </div>
              <div className="col-span-1">
                <div>MAKEUP BY MARLA V</div>
                <div>HAIR BY NATE B</div>
              </div>
              <div className="col-span-1">
                <div>LIGHTING DIRECTOR: CONNOR</div>
              </div>
            </div>

            {/* Headline + Deck + Yellow READ MORE */}
            <div className="mt-1">
              <button
                onClick={() => setActiveStory(EDITORIAL_STORIES[0])}
                className="text-left cursor-pointer group"
              >
                <h2 className="font-medium-ll text-[22px] leading-[24px] tracking-[-0.01em] uppercase group-hover:text-[#ecfd81] transition-colors">
                  CHI IS READY FOR HER ENCORE
                </h2>
              </button>
              <p className="font-ibm text-[12px] leading-[13px] uppercase mt-1">
                THE ARTIST STEPS INTO A CHAPTER OF HER CAREER THAT’S NAVIGATED ON HER OWN TERMS.
                <button
                  onClick={() => setActiveStory(EDITORIAL_STORIES[0])}
                  className="text-[#ecfd81] ml-1.5 uppercase hover:underline cursor-pointer"
                >
                  READ MORE
                </button>
              </p>
            </div>

            {/* 3-Column Editorial Image Grid */}
            <div
              onClick={() => setActiveStory(EDITORIAL_STORIES[0])}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3 cursor-pointer"
            >
              <img
                src="/assets/chi_1.png"
                alt="Chi Cycle 07 Portrait 1"
                className="w-full aspect-[4/5] object-cover"
              />
              <img
                src="/assets/chi_2.jpg"
                alt="Chi Cycle 07 Portrait 2"
                className="w-full aspect-[4/5] object-cover"
              />
              <img
                src="/assets/chi_3.jpg"
                alt="Chi Cycle 07 Portrait 3"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* Full-Bleed Live Performance Video Block */}
            <div className="relative w-full aspect-video mt-2 bg-black overflow-hidden">
              <video
                src="/assets/memory_bg.mp4"
                poster="/assets/cam_3.jpeg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center font-medium-ll uppercase text-white">
                  <div className="text-[14px] leading-[15px]">ALEXANDER</div>
                  <div className="text-[11px] leading-[12px] mt-0.5">(BY)</div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. STORE FEATURE 01 — 66 GREENE MAGAZINE - TINASHE */}
          <section className="px-2 pt-16 pb-12">
            {/* 6-Column Product Metadata Header */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 font-ibm text-[10px] leading-[11px] uppercase text-[#bababa] pb-1">
              <div className="col-span-1">MAGAZINE</div>
              <div className="col-span-1">38.00 USD</div>
            </div>
            <button
              onClick={() => setActiveProduct(tinasheProduct)}
              className="text-left cursor-pointer hover:text-[#ecfd81] transition-colors"
            >
              <h2 className="font-medium-ll text-[22px] leading-[24px] uppercase">
                66 GREENE MAGAZINE - TINASHE
              </h2>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-2 gap-y-6 mt-3">
              {/* Left 3 Cols: Magazine Cover Image */}
              <div
                onClick={() => setActiveProduct(tinasheProduct)}
                className="md:col-span-3 cursor-pointer overflow-hidden"
              >
                <img
                  src="/assets/store_mag_tinashe.jpg"
                  alt="66 Greene Magazine - Tinashe"
                  className="w-full object-cover"
                />
              </div>

              {/* Right 2 Cols (Col 4-5): Credits + Stepper + OUT OF STOCK button */}
              <div className="md:col-span-2 md:pr-16 flex flex-col justify-between font-medium-ll text-[12px] leading-[13px] uppercase">
                <div className="space-y-4">
                  <p>INAUGURAL EDITION OF 66 GREENE ANUAL PRINT MAGAZINE</p>

                  <div>
                    <p>ONLY AVAILABLE AT:</p>
                    <p>66 GREENE STREET SOHO</p>
                    <p>ICONIC MAGAZINES MULBERRY STREET</p>
                    <p>ICONIC MAGAZINES LAFAYETTE STREET</p>
                    <p>CASA MAGAZINES</p>
                  </div>

                  <div>
                    <p>FEATURING:</p>
                    <p>
                      AMELIA GRAY, AYRA STARR, BENNETT COAST, CHOKER, CHXRRY, DET BLEV SENT,
                      EKKSTACY, GABRIEL JACOBY, HAWA, LOVE SPELLS, MAB, MIDRIFT, PARRIS GOEBEL, RAGA
                      MALAK, SADBOI, SALIMATA, SUNSHINE BENZI, THELONIOUS STOKES, TINASHE,
                      TOCCORORO, WILLY CHAVARRIA, ZEP
                    </p>
                  </div>

                  <div>
                    <p>PHOTOGRAPHY BY:</p>
                    <p>
                      AARON KIRK, AJ KYSER, ALEXIS BELHUMEUR, ARTURO ALCALA, CALIXTE LENKA, CODY
                      LIDTKE, DIEGO BENDEZU, FERNANDO TOMAZ, JAMES BEE, JOAQUIN CASTILLO, MARC
                      MERCHANT, MAX HEILBRONN, PHI VU, RUBEN CHAMORRO, TAREK MAHAD
                    </p>
                  </div>

                  <div>
                    <p>WORK FROM:</p>
                    <p>
                      CADEN SWIFT, CASSIE JEKANOSKI, DAX REEDY, IAN MCRAE, INTERNET X, JAHULIE, MAX
                      WEINSTEIN, RANXELLE SORIA, SHARIFA MORRIS, VVUTURA, WILLYUM BECK, ASHLEY
                      YSABELLE, CASS LEE, MOLLIE GLOSS, CHIKA NISHIYAMA, DAVEY MATTHEW, JENNI IVA
                      WIMMERSTEDT, RACHEL POLYCARPE, ROBERTO CAMPISI, SERGIO ESTRADA, TAKAYUKI
                    </p>
                  </div>
                </div>

                {/* Quantity Stepper + OUT OF STOCK Button */}
                <div className="mt-8 pt-4">
                  <div className="flex items-center gap-6 font-ibm text-[12px]">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setTinasheQty((q) => Math.max(1, q - 1))}
                        className="text-white/60 hover:text-white cursor-pointer"
                      >
                        -
                      </button>
                      <span>{tinasheQty}</span>
                      <button
                        onClick={() => setTinasheQty((q) => q + 1)}
                        className="text-white/60 hover:text-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => setTinasheNotified((prev) => !prev)}
                      className="flex-1 md:max-w-80 py-2 px-8 bg-white text-black font-ibm text-[12px] leading-[13px] uppercase text-center hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      {tinasheNotified ? 'WAITLIST REGISTERED' : 'OUT OF STOCK'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PROFILE STORY — 66 GREENE TURNS ONE */}
          <section className="px-2 pt-16 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 font-ibm text-[10px] leading-[11px] uppercase text-[#bababa] pb-1">
              <div className="col-span-1">PROFILE STORY</div>
              <div className="col-span-1">ANNIVERSARY</div>
              <div className="hidden md:block col-span-2">PHOTOGRAPHY BY MARC MERCHANT & PHI VU</div>
              <div className="hidden md:block col-span-2">66 GREENE ST SOHO NY</div>
            </div>

            <button
              onClick={() => setActiveStory(EDITORIAL_STORIES[3])}
              className="text-left cursor-pointer hover:text-[#ecfd81] transition-colors"
            >
              <h2 className="font-medium-ll text-[22px] leading-[24px] uppercase">
                66 GREENE TURNS ONE
              </h2>
            </button>

            <p className="font-ibm text-[12px] leading-[13px] uppercase mt-1 max-w-5xl">
              ONE YEAR AFTER OPENING ITS DOORS IN SOHO, 66 GREENE CELEBRATED ITS FIRST ANNIVERSARY
              DURING NEW YORK FASHION WEEK WITH THE LAUNCH OF ITS DEBUT PRINT ISSUE, A NEW
              FRAGRANCE, AND A PACKED NIGHT OF COLLABORATORS, CREATIVES, AND FRIENDS. WHAT BEGAN AS
              A SPACE BECAME A WORLD OF ITS OWN.
              <button
                onClick={() => setActiveStory(EDITORIAL_STORIES[3])}
                className="text-[#ecfd81] ml-1.5 uppercase hover:underline cursor-pointer"
              >
                READ MORE
              </button>
            </p>

            <div
              onClick={() => setActiveStory(EDITORIAL_STORIES[3])}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3 cursor-pointer"
            >
              <img
                src="/assets/turns_one_1.jpg"
                alt="66 Greene Turns One 1"
                className="w-full aspect-[3/4] object-cover"
              />
              <img
                src="/assets/turns_one_2.jpg"
                alt="66 Greene Turns One 2"
                className="w-full aspect-[3/4] object-cover"
              />
              <img
                src="/assets/turns_one_3.jpg"
                alt="66 Greene Turns One 3"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </section>

          {/* 5. STORE FEATURE 02 — VINYL RECORD: 000 CHANNEL BLACK (15.00 USD) */}
          <section className="px-2 pt-16 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 font-ibm text-[10px] leading-[11px] uppercase text-[#bababa] pb-1">
              <div className="col-span-1">VINYL RECORD</div>
              <div className="col-span-1">15.00 USD</div>
            </div>

            <button
              onClick={() => setActiveProduct(vinylProduct)}
              className="text-left cursor-pointer hover:text-[#ecfd81] transition-colors"
            >
              <h2 className="font-medium-ll text-[22px] leading-[24px] uppercase">
                000 CHANNEL BLACK
              </h2>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-2 gap-y-6 mt-3">
              {/* Left 3 Cols: Vinyl Sleeve */}
              <div
                onClick={() => setActiveProduct(vinylProduct)}
                className="md:col-span-3 cursor-pointer overflow-hidden"
              >
                <img
                  src="/assets/store_vinyl_channel_black.jpg"
                  alt="000 Channel Black Vinyl"
                  className="w-full object-cover"
                />
              </div>

              {/* Right 2 Cols: Tracklist + Stepper + ADD TO CART + Accordions */}
              <div className="md:col-span-2 md:pr-16 flex flex-col justify-between">
                <div>
                  <h4 className="font-medium-ll text-[12px] leading-[13px] uppercase">
                    <div>000 CHANNEL BLACK</div>
                    <div className="text-[#bababa]">BY.ALEXANDER</div>
                  </h4>

                  <div className="mt-4 space-y-1.5 font-ibm text-[11px] leading-[13px] uppercase">
                    {vinylProduct.tracks?.map((track) => {
                      const key = `home-vinyl-${track.number}`;
                      const isPlaying = playingTrackKey === key;
                      return (
                        <div
                          key={track.number}
                          className="flex items-center justify-between py-0.5 border-b border-white/5"
                        >
                          <span className={isPlaying ? 'text-[#ecfd81]' : 'text-white'}>
                            {track.number}. {track.title}
                          </span>
                          <button
                            onClick={() => toggleAudioTrack(key, track.rootFreq)}
                            className={`cursor-pointer uppercase ${
                              isPlaying
                                ? 'text-[#ecfd81]'
                                : 'text-white/50 hover:text-white'
                            }`}
                          >
                            {isPlaying ? 'PAUSE' : 'PLAY'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {/* Quantity + ADD TO CART */}
                  <div className="flex items-center gap-6 font-ibm text-[12px]">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setVinylQty((q) => Math.max(1, q - 1))}
                        className="text-white/60 hover:text-white cursor-pointer"
                      >
                        -
                      </button>
                      <span>{vinylQty}</span>
                      <button
                        onClick={() => setVinylQty((q) => q + 1)}
                        className="text-white/60 hover:text-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => addToCart(vinylProduct, vinylQty)}
                      className="flex-1 md:max-w-80 py-2 px-8 bg-white text-black font-ibm text-[12px] leading-[13px] uppercase text-center hover:bg-[#ecfd81] transition-colors cursor-pointer"
                    >
                      ADD TO CART
                    </button>
                  </div>

                  {/* DETAILS / SHIPPING / WEIGHT & SIZE Accordions */}
                  <div className="border-t border-white/15 divide-y divide-white/15 font-ibm text-[12px] uppercase">
                    {[
                      { id: 'details', label: 'DETAILS', content: vinylProduct.details },
                      { id: 'shipping', label: 'SHIPPING', content: vinylProduct.shipping },
                      { id: 'weight', label: 'WEIGHT & SIZE', content: vinylProduct.weightAndSize },
                    ].map((acc) => {
                      const isOpen = openAccordion === acc.id;
                      return (
                        <div key={acc.id} className="py-1.5">
                          <button
                            onClick={() => setOpenAccordion(isOpen ? null : acc.id)}
                            className="w-full flex justify-between items-center text-white/55 hover:text-white cursor-pointer uppercase"
                          >
                            <span>{acc.label}</span>
                            <span>{isOpen ? '-' : '+'}</span>
                          </button>
                          {isOpen && (
                            <p className="text-[11px] leading-[14px] text-[#bababa] pt-2">
                              {acc.content}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FEATURE STORY — AEROSOL COUTURE (SFX ARTIST MAB) */}
          <section className="px-2 pt-16 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 font-ibm text-[10px] leading-[11px] uppercase text-[#bababa] pb-2">
              <div className="col-span-1 text-white">FEATURE STORY</div>
              <div className="col-span-1">PROFILE STORY</div>
              <div className="col-span-1">
                <div>TEXT BY INTERNET X</div>
                <div>PHOTOGRAPHY BY ALEXIS BELHUMEUR</div>
              </div>
              <div className="col-span-1">
                <div>PROSTHETICS BY MAB</div>
                <div>CREATIVE DIRECTION BY ALEXANDER</div>
              </div>
              <div className="col-span-1">
                <div>LIGHTING BY CALIXTE LENKA</div>
              </div>
              <div className="col-span-1">
                <div>STUDIO: 66 GREENE SOHO</div>
              </div>
            </div>

            <button
              onClick={() => setActiveStory(EDITORIAL_STORIES[7])}
              className="text-left cursor-pointer hover:text-[#ecfd81] transition-colors"
            >
              <h2 className="font-medium-ll text-[22px] leading-[24px] uppercase">
                AEROSOL COUTURE
              </h2>
            </button>
            <p className="font-ibm text-[12px] leading-[13px] uppercase mt-1">
              SFX ARTIST MAB TURNS HUMAN ANATOMY INTO LIVING ARTISTRY.
              <button
                onClick={() => setActiveStory(EDITORIAL_STORIES[7])}
                className="text-[#ecfd81] ml-1.5 uppercase hover:underline cursor-pointer"
              >
                READ MORE
              </button>
            </p>

            <div
              onClick={() => setActiveStory(EDITORIAL_STORIES[7])}
              className="mt-3 cursor-pointer overflow-hidden"
            >
              <img
                src="/assets/aerosol_hero.jpg"
                alt="Aerosol Couture SFX Artist MAB"
                className="w-full max-h-[82vh] object-cover"
              />
            </div>
          </section>
        </main>
      )}

      {/* =====================================================================
          ROUTE 2: EDITORIAL ("/editorial")
          Full archive of Cycles 08..03 + Filter Bar + Contact Sheet Grids
         ===================================================================== */}
      {!activeStory && !activeProduct && route === 'editorial' && (
        <main className="pt-[1.35rem] px-2 pb-20">
          {/* Editorial Filter Subheader */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 py-4 border-b border-white/15 font-ibm text-[11px] uppercase items-center">
            <div className="col-span-1 text-[#bababa]">ARCHIVE ({filteredStories.length})</div>
            <div className="col-span-1 md:col-span-3 flex items-center gap-4">
              {(['ALL', 'PROFILE STORY', 'FEATURE STORY'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setEditorialFilter(f)}
                  className={`cursor-pointer uppercase ${
                    editorialFilter === f ? 'text-[#ecfd81]' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="hidden md:block col-span-2 text-right text-[#bababa]">
              66 GREENE EDITORIAL CYCLES
            </div>
          </div>

          <div className="space-y-20 pt-8">
            {filteredStories.map((story) => (
              <article key={story.id} className="space-y-2">
                {/* 6-Column Metadata Row */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2 gap-y-2 font-ibm text-[10px] leading-[11px] uppercase text-[#bababa]">
                  <div className="col-span-1 text-white">{story.cycle || story.category}</div>
                  <div className="col-span-1">{story.category}</div>
                  <div className="col-span-1">
                    {story.credits.col3.map((c, i) => (
                      <div key={i}>{c}</div>
                    ))}
                  </div>
                  <div className="col-span-1">
                    {story.credits.col4.map((c, i) => (
                      <div key={i}>{c}</div>
                    ))}
                  </div>
                  <div className="col-span-1">
                    {story.credits.col5.map((c, i) => (
                      <div key={i}>{c}</div>
                    ))}
                  </div>
                  <div className="col-span-1">
                    {story.credits.col6.map((c, i) => (
                      <div key={i}>{c}</div>
                    ))}
                  </div>
                </div>

                {/* Story Headline + Deck + Yellow READ MORE */}
                <div className="pt-1">
                  <button
                    onClick={() => setActiveStory(story)}
                    className="text-left cursor-pointer hover:text-[#ecfd81] transition-colors"
                  >
                    <h2 className="font-medium-ll text-[22px] leading-[24px] uppercase">
                      {story.title}
                    </h2>
                  </button>
                  <p className="font-ibm text-[12px] leading-[13px] uppercase mt-1 max-w-5xl">
                    {story.deck}
                    <button
                      onClick={() => setActiveStory(story)}
                      className="text-[#ecfd81] ml-1.5 uppercase hover:underline cursor-pointer"
                    >
                      READ MORE
                    </button>
                  </p>
                </div>

                {/* 3-Column Editorial Contact Sheet */}
                <div
                  onClick={() => setActiveStory(story)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2 cursor-pointer"
                >
                  {story.images.map((imgUrl, idx) => (
                    <img
                      key={idx}
                      src={imgUrl}
                      alt={`${story.title} ${idx + 1}`}
                      className="w-full aspect-[4/5] object-cover hover:opacity-90 transition-opacity"
                    />
                  ))}
                </div>

                {/* Stage Video if present */}
                {story.stageVideo && (
                  <div className="relative w-full aspect-video pt-2 overflow-hidden">
                    <video
                      src={story.stageVideo}
                      poster={story.stagePoster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </main>
      )}

      {/* =====================================================================
          ROUTE 3: STORE ("/store")
          Exact match to route_store_00..04.png (Featured Magazine + 2-Col Grid)
         ===================================================================== */}
      {!activeStory && !activeProduct && route === 'store' && (
        <main className="pt-[1.35rem] px-2 pb-20">
          {/* Top Featured Magazine Split: 66 GREENE MAGAZINE - ALEX */}
          <section className="pt-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-2 gap-y-6">
              {/* Left 3 Cols: Featured Cover */}
              <div
                onClick={() => setActiveProduct(STORE_PRODUCTS[0])}
                className="md:col-span-3 cursor-pointer"
              >
                <img
                  src={STORE_PRODUCTS[0].image}
                  alt={STORE_PRODUCTS[0].title}
                  className="w-full object-cover"
                />
                <div className="grid grid-cols-3 gap-x-2 font-ibm text-[10px] text-[#bababa] uppercase mt-2">
                  <span>MAGAZINE</span>
                  <span>38.00 USD</span>
                </div>
                <h2 className="font-medium-ll text-[22px] leading-[24px] uppercase mt-0.5">
                  {STORE_PRODUCTS[0].title}
                </h2>
              </div>

              {/* Right 2 Cols: Magazine Credits */}
              <div className="md:col-span-2 md:pr-16 flex flex-col justify-between font-ibm text-[12px] leading-[13px] uppercase">
                <div className="space-y-4">
                  <p>INAUGURAL EDITION OF 66 GREENE ANUAL PRINT MAGAZINE</p>
                  <div>
                    <p>ONLY AVAILABLE AT:</p>
                    <p>66 GREENE STREET SOHO</p>
                    <p>ICONIC MAGAZINES MULBERRY STREET</p>
                    <p>ICONIC MAGAZINES LAFAYETTE STREET</p>
                    <p>CASA MAGAZINES</p>
                  </div>
                  <div>
                    <p>FEATURING:</p>
                    <p>{STORE_PRODUCTS[0].magazineCredits?.featuring}</p>
                  </div>
                  <div>
                    <p>PHOTOGRAPHY BY:</p>
                    <p>{STORE_PRODUCTS[0].magazineCredits?.photographyBy}</p>
                  </div>
                  <div>
                    <p>WORK FROM:</p>
                    <p>{STORE_PRODUCTS[0].magazineCredits?.workFrom}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2-Column Store Catalog Grid (Ayra, Tinashe, 000 Channel Black, Memories 4 Sale, Manifesto Large & Small) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-14">
            {STORE_PRODUCTS.slice(1).map((product) => (
              <div key={product.id} className="group flex flex-col justify-between">
                <div
                  onClick={() => setActiveProduct(product)}
                  className="overflow-hidden bg-white/5 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-[1.015] transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-6 font-ibm text-[10px] leading-[11px] text-[#bababa] uppercase">
                      <span>{product.category}</span>
                      <span>{product.priceFormatted}</span>
                    </div>
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="text-left cursor-pointer hover:text-[#ecfd81] transition-colors"
                    >
                      <h3 className="font-medium-ll text-[18px] md:text-[22px] leading-[24px] uppercase mt-0.5">
                        {product.title}
                      </h3>
                    </button>
                  </div>

                  {product.inStock ? (
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="font-ibm text-[11px] uppercase px-3 py-1.5 bg-white text-black hover:bg-[#ecfd81] transition-colors cursor-pointer shrink-0"
                    >
                      + ADD
                    </button>
                  ) : (
                    <span className="font-ibm text-[10px] uppercase text-[#bababa]">
                      ARCHIVED EDITION
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>
        </main>
      )}

      {/* =====================================================================
          ROUTE 4: MEMORY ("/memory")
          Exact match to route_memory_00.png (Sand #f5f2ed header + B&W video + centered sand modal)
         ===================================================================== */}
      {!activeStory && !activeProduct && route === 'memory' && (
        <main className="relative w-screen h-screen overflow-hidden bg-black">
          <video
            src="/assets/memory_bg.mp4"
            poster="/assets/cam_2.jpeg"
            autoPlay
            muted
            loop
            playsInline
            className="min-w-full min-h-full object-cover"
          />

          {/* Centered Sand (#f5f2ed) Archive Subscription Card */}
          <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
            <div className="w-full max-w-[360px] bg-[#f5f2ed] text-[#12100e] font-ibm uppercase p-3 shadow-2xl">
              <p className="text-[12px] leading-[14.4px]">
                SOME THINGS ARE WORTH REMEMBERING. OTHERS ARE YET TO HAPPEN. SUBSCRIBE FOR EXCLUSIVE
                ACCESS TO UPCOMING RELEASES, EXPERIENCES, AND ANNOUNCEMENTS.
              </p>

              {memoryJoined ? (
                <div className="mt-4 pt-2 border-t border-[#12100e]/30 flex items-center justify-between text-[11px]">
                  <span>REGISTERED IN ARCHIVE.</span>
                  <button
                    onClick={() => {
                      setMemoryJoined(false);
                      setMemoryEmail('');
                    }}
                    className="underline cursor-pointer"
                  >
                    RESET
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (memoryEmail.trim()) setMemoryJoined(true);
                  }}
                  className="mt-4 pt-1.5 border-t border-[#12100e]/40 flex items-center justify-between gap-2"
                >
                  <input
                    type="email"
                    required
                    value={memoryEmail}
                    onChange={(e) => setMemoryEmail(e.target.value)}
                    placeholder="YOUR@EMAIL.ADDRESS"
                    className="w-full bg-transparent text-[#12100e] placeholder:text-[#12100e]/40 text-[11px] leading-[13px] focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="text-[12px] leading-[13.2px] uppercase hover:opacity-30 transition-opacity cursor-pointer shrink-0"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>
        </main>
      )}

      {/* =====================================================================
          ROUTE 5: ABOUT ("/about")
          Exact match to route_about_00..03.png (Fullscreen Video + 2-Paragraph Manifesto + Contact)
         ===================================================================== */}
      {!activeStory && !activeProduct && route === 'about' && (
        <main className="pt-[1.35rem]">
          {/* Top Fullscreen 66 Greene Video */}
          <section className="relative w-full h-[calc(100dvh-1.35rem)] bg-black overflow-hidden">
            <video
              src="/assets/cam_4.mp4"
              poster="/assets/cam_4.jpeg"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover grayscale"
            />
          </section>

          {/* Manifesto & Institution Information */}
          <section className="px-2 py-8 min-h-[45vh] flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-4 gap-y-6 font-ibm text-[12px] leading-[14px] uppercase">
              <div className="md:col-span-2 space-y-4">
                <p>
                  66 GREENE SERVES AS A CULTURAL INSTITUTION FOR LOWER MANHATTAN. FOUNDED AND
                  INDEPENDENTLY OWNED BY ALEXANDER, WE ARE PART PUBLICATION, PART RETAIL SPACE, AND
                  PART MUSIC VENUE. WE BIND TOGETHER FASHION, MUSIC, ART, AND THE PEOPLE ACTIVELY
                  SHAPING THEM. EDITORIALS, PERFORMANCES, INSTALLATIONS, PRODUCT RELEASES, AND CONVERSATIONS ALL COEXIST UNDER ONE ROOF.
                </p>
                <p>
                  WE TREAT THE URL THE SAME AS THE IRL. OUR MAGAZINE BECOMES OUR EVENT, THE EVENT
                  BECOMES THE STORE, AND THE STORE BECOMES THE COMMUNITY. INSTEAD OF A FIXED FORMAT,
                  WE OPERATE AS AN ONGOING PROGRAM BUILT AROUND THE PEOPLE, IDEAS, AND PROJECTS
                  DEFINING WHAT’S NOW.
                </p>
              </div>

              <div className="md:col-start-4 md:col-span-2 space-y-2 text-[#bababa]">
                <p className="text-white">LOCATION & INQUIRIES</p>
                <p>66 GREENE ST, NEW YORK, NY 10012</p>
                <p>INFO@BY-ALEXANDER.COM</p>
                <div className="pt-2 flex flex-col gap-1 text-white">
                  <a
                    href="https://www.instagram.com/_66greene/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ecfd81]"
                  >
                    FOLLOW 66 GREENE (INSTAGRAM) ↗
                  </a>
                  <a
                    href="https://www.youtube.com/@66Greene"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ecfd81]"
                  >
                    WATCH 66 GREENE ARCHIVE (YOUTUBE) ↗
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =====================================================================
          GLOBAL 6-COLUMN FOOTER (Shown on Home, Editorial, Store, About)
         ===================================================================== */}
      {!isMemoryRoute && (
        <footer className="px-2 py-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-6 gap-2 font-ibm text-[10px] leading-[11px] uppercase text-white/50">
          <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:text-white cursor-pointer">TERMS AND CONDITIONS</span>
          <span className="hover:text-white cursor-pointer">COOKIE POLICY</span>
          <span className="hover:text-white cursor-pointer">
            RETURNS REFUNDS AND SHIPPING POLICY
          </span>
          <span className="hover:text-white cursor-pointer">
            66 GREENE ST SOHO NY
          </span>
          <span className="md:text-right hover:text-white cursor-pointer">
            WEBSITE: UNSTATED INTERNATIONAL
          </span>
        </footer>
      )}
    </div>
  );
}

export default App;
