import React, { useState, useEffect } from 'react';
import {
  BURGERS,
  SPICE_STORY_STEPS,
  CITY_PINS,
  type BurgerItem,
  type CityPin,
} from './data';
import { ShoppingBag, Plus, Minus, X, Check, MapPin, Clock, Sparkles } from 'lucide-react';

type PageView = 'home' | 'menu' | 'spices' | 'contact';

interface CartEntry {
  burger: BurgerItem;
  qty: number;
}

const PeelSticker: React.FC<{
  src: string;
  alt?: string;
  className?: string;
  rotate?: string;
  width?: string;
}> = ({ src, alt = '', className = '', rotate = '20deg', width = '100%' }) => (
  <div
    className={className}
    style={
      {
        '--sticker-rotate': rotate,
        '--sticker-p': '20%',
        '--sticker-peelback-hover': '30%',
        '--sticker-peelback-active': '40%',
        '--sticker-width': width,
      } as React.CSSProperties
    }
  >
    <div className="sticker-container">
      <div className="sticker-main">
        <div className="sticker-lighting">
          <img
            src={src}
            alt={alt}
            className="sticker-image object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  </div>
);

const BlobButton: React.FC<{
  label: string;
  onClick: () => void;
  variant?: 'red' | 'mustard';
}> = ({ label, onClick, variant = 'red' }) => {
  const fill = variant === 'red' ? '#F91914' : '#FFD750';
  const textColor = variant === 'red' ? 'text-white' : 'text-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-fit mx-auto border-none bg-transparent p-0 block cursor-pointer outline-none select-none transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="-10 -10 602 475"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <path
          stroke="#ffffff"
          strokeWidth="10"
          fill={fill}
          d="M310.777 0.20434C424.154 2.91791 540.733 50.9739 574.176 159.34C606.479 264.014 533.962 365.999 442.064 425.623C364.995 475.626 270.863 455.893 193.524 406.309C93.8313 342.395 -27.3608 259.503 5.48889 145.729C40.0621 25.9857 186.179 -2.77783 310.777 0.20434Z"
          className="transition-[fill] duration-200 group-hover:fill-[#1b1b1b]"
        />
      </svg>
      <span
        className={`relative z-10 ${textColor} group-hover:text-white font-bold text40 uppercase inline-block px-[4vw] py-[1.5vw] max-md:px-[10vw] max-md:py-[4vw] transition-colors duration-200`}
      >
        {label}
      </span>
    </button>
  );
};

export function App() {
  const [view, setView] = useState<PageView>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartEntry[]>([
    { burger: BURGERS[0], qty: 1 },
  ]);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    'ALL' | 'BEEF' | 'SPICY' | 'VEGGIE'
  >('ALL');
  const [selectedCity, setSelectedCity] = useState<CityPin | null>(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Track mouse for cartoon eyes on "FOOD THAT FEELS GOOD" burger character
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setEyeOffset({
        x: Math.max(-1, Math.min(1, nx)) * 0.9,
        y: Math.max(-1, Math.min(1, ny)) * 0.9,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (nextView: PageView, sectionId?: string) => {
    setMenuOpen(false);
    setView(nextView);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const addToCart = (burger: BurgerItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.burger.id === burger.id);
      if (existing) {
        return prev.map((item) =>
          item.burger.id === burger.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { burger, qty: 1 }];
    });
    setToastMsg(`${burger.name.toUpperCase()} ADDED TO BAG!`);
    setTimeout(() => {
      setToastMsg((prev) =>
        prev === `${burger.name.toUpperCase()} ADDED TO BAG!` ? null : prev
      );
    }, 2600);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.burger.id === id
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.burger.price * item.qty,
    0
  );

  const filteredBurgers =
    selectedCategory === 'ALL'
      ? BURGERS
      : BURGERS.filter((b) => b.category === selectedCategory);

  const isRedHero = view === 'menu' || view === 'contact';

  const renderCTASection = (withTopRedWave = false) => (
    <section
      id="cta"
      className="h-fit w-full pt-[18vw] max-md:pt-[12vw] overflow-clip relative bg-beige"
    >
      {withTopRedWave && (
        <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
          <svg
            className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
            width="100%"
            viewBox="0 0 1536 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
              fill="#f91814"
            />
          </svg>
        </div>
      )}

      <div className="min-h-[85vh] my-[6vw] mt-0 flex items-center justify-between w-full relative max-md:my-[2vw] max-md:mt-0 max-md:h-fit max-md:flex-col max-md:gap-[6vw] px-[2vw]">
        <PeelSticker
          src="https://www.cravburgers.shop/img/burger-boy.png"
          alt="CRAV Burger Boy Sticker"
          rotate="30deg"
          width="32vw"
          className="absolute z-30 bottom-[1vw] max-md:bottom-[60vw] max-md:left-[2vw] -rotate-35 left-1/2 -translate-x-1/2 w-[32vw] h-auto max-md:w-[55vw] object-contain pointer-events-auto"
        />

        <div className="w-[55vw] flex items-start gap-[2vw] justify-center flex-col self h-full max-md:w-full max-md:gap-[4vw] max-md:items-center max-md:h-fit relative z-20">
          <p className="text-red -rotate-7 ml-[.5vw] uppercase text-stroke-180 font-modak leading-[.9]! text60 max-md:rotate-0 max-md:ml-0 max-md:text-center">
            FEEL IT
          </p>
          <h2 className="text-red text-stroke-180 heading300 uppercase leading-[.75] max-md:leading-[.85]! max-md:text-[14vw] max-md:text-center">
            feel the
            <br />
            Change
          </h2>
          <p className="text40 w-[30vw] font-mouse-memoirs leading-[1.1] max-md:w-full max-md:text-[4.5vw] max-md:text-center">
            Smashed for the bold, built for the hungry. Dive into a legendary
            craft experience where every crispy edge and juicy layer rules.
          </p>
          <div className="max-md:w-full max-md:flex max-md:justify-center">
            <BlobButton
              label="Order Now"
              onClick={() => navigateTo('menu')}
              variant="red"
            />
          </div>
        </div>

        <div className="w-[42vw] rounded-[2vw] overflow-hidden h-[56vw] max-md:w-full max-md:h-[45vh] max-md:min-h-[55vw] max-md:rounded-[4vw] shadow-xl relative z-10">
          <img
            alt="Premium smashed burger on a wooden board"
            src="https://www.cravburgers.shop/img-webp/cta.webp"
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen w-full bg-beige text-black relative overflow-x-clip">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-[2vw] right-[2vw] z-[9999] bg-black text-beige border-2 border-mustard px-[1.8vw] py-[1vw] max-md:px-[5vw] max-md:py-[3vw] rounded-full shadow-2xl flex items-center gap-[.8vw] animate-bounce">
          <Sparkles className="w-5 h-5 text-mustard shrink-0" />
          <span className="font-mouse-memoirs uppercase tracking-widest text-[1.4vw] max-md:text-[4.5vw]">
            {toastMsg}
          </span>
        </div>
      )}

      {/* Top Fixed Navbar */}
      <nav
        aria-label="Main navigation"
        className="w-full fixed top-0 left-0 z-[1000] px-[2vw] py-[1.2vw] max-md:px-[4vw] max-md:py-[3.5vw] flex items-center justify-between transition-colors duration-300"
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className={`font-modak text-[2.6vw] max-md:text-[8vw] leading-[.7] uppercase cursor-pointer transition-transform hover:scale-105 ${
            isRedHero ? 'text-beige text-stroke-small !text-red' : 'text-red text-stroke-small'
          }`}
        >
          CRAV
        </button>

        <div className="flex items-center gap-[1vw] max-md:gap-[2.5vw]">
          <button
            type="button"
            onClick={() => navigateTo('menu')}
            className={`font-mouse-memoirs hover:scale-105 transition-all duration-300 flex items-center justify-center text-[1.3vw] max-md:text-[4vw] uppercase tracking-wide px-[1.6vw] py-[.5vw] max-md:px-[5vw] max-md:py-[1.8vw] group rounded-full cursor-pointer ${
              isRedHero
                ? 'bg-mustard text-black hover:bg-black hover:text-beige'
                : 'text-beige bg-red hover:bg-black'
            }`}
          >
            <span className="overflow-hidden relative inline-block group">
              <span className="block group-hover:-translate-y-full translate-y-0 transition-all duration-300">
                Burgers
              </span>
              <span
                className="block absolute inset-0 w-full h-full group-hover:translate-y-0 translate-y-full transition-all duration-300"
                aria-hidden="true"
              >
                Burgers
              </span>
            </span>
          </button>

          {/* Bag / Cart Button */}
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className={`hover:scale-105 flex items-center gap-[.5vw] max-md:gap-[1.5vw] px-[1.3vw] py-[.5vw] max-md:px-[4vw] max-md:py-[1.8vw] rounded-full cursor-pointer transition-all duration-300 border-[.15vw] max-md:border-[.4vw] ${
              isRedHero
                ? 'bg-white/95 text-black border-white'
                : 'bg-mustard text-black border-black/15 hover:bg-black hover:text-beige'
            }`}
            aria-label="Open order bag"
          >
            <ShoppingBag className="w-[1.2vw] h-[1.2vw] max-md:w-[4vw] max-md:h-[4vw]" />
            <span className="font-mouse-memoirs uppercase text-[1.3vw] max-md:text-[4vw] tracking-wide">
              Bag ({totalCount})
            </span>
          </button>

          {/* Menu Dropdown Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`hover:scale-105 flex items-center gap-[.6vw] max-md:gap-[2vw] px-[1.4vw] py-[.5vw] max-md:px-[4vw] group max-md:py-[1.8vw] rounded-full cursor-pointer transition-all duration-400 border-[.15vw] max-md:border-[.4vw] ${
                isRedHero
                  ? 'bg-white/90 text-black border-white'
                  : 'bg-beige/90 backdrop-blur-sm border-black/20 hover:border-black text-black'
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="font-mouse-memoirs flex items-center justify-center uppercase text-[1.3vw] max-md:text-[4vw] tracking-wide">
                Menu
              </span>
              <div
                className="relative shrink-0 w-[1.2vw] h-[1.2vw] max-md:w-[3.5vw] max-md:h-[3.5vw]"
                aria-hidden="true"
              >
                <span
                  className={`bg-black absolute left-0 block w-full h-[.15vw] max-md:h-[.5vw] rounded-full transition-all duration-300 ${
                    menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`bg-black absolute left-0 top-1/2 block w-[70%] h-[.15vw] max-md:h-[.5vw] rounded-full -translate-y-1/2 transition-opacity duration-300 ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`bg-black absolute left-0 block w-full h-[.15vw] max-md:h-[.5vw] rounded-full transition-all duration-300 ${
                    menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
                  }`}
                />
              </div>
            </button>

            {menuOpen && (
              <div
                id="main-menu"
                role="menu"
                className="absolute top-[calc(100%+1vw)] right-0 w-[18vw] max-md:w-[88vw] bg-red rounded-[1.2vw] max-md:rounded-[4vw] p-[2vw] max-md:mt-[3vw] max-md:p-[6vw] shadow-[0_1vw_3vw_rgba(27,27,27,.35)] border-2 border-white/20 z-50"
              >
                <div className="flex flex-col gap-[.6vw] max-md:gap-[2vw] items-start">
                  <button
                    type="button"
                    onClick={() => navigateTo('home')}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('home', 'about')}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    About
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('menu')}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    Burgers
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('spices')}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    Our Spices
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('home', 'map-desktop')}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    Locations
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('contact')}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    Contact
                  </button>
                </div>
                <div className="mt-[1.5vw] max-md:mt-[4vw] pt-[1vw] max-md:pt-[3vw] border-t border-beige/20">
                  <p className="font-mouse-memoirs text-[.9vw] max-md:text-[3.5vw] text-beige/85 uppercase tracking-[.2em]">
                    Est. 1997 — Navarra, España
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* =========================================================
          VIEW 1: HOME PAGE (https://www.cravburgers.shop/)
         ========================================================= */}
      {view === 'home' && (
        <>
          {/* HERO SECTION */}
          <section className="h-screen w-full overflow-hidden self flex flex-col justify-between items-center relative max-md:h-dvh">
            <h1 className="heading600 max-md:mt-[25vw] max-md:text-[42vw]! text-red text-stroke leading-[.8] select-none">
              CRAV
            </h1>

            <div className="w-[55vw] max-md:w-[95vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none animate-float-slow">
              <img
                alt="CRAV signature smashed burger"
                src="https://www.cravburgers.shop/img-webp/burgerH.webp"
                className="h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.28)]"
              />
            </div>

            <div className="w-full relative z-30 flex items-end justify-between max-md:flex-col max-md:items-center max-md:gap-[4vw] max-md:pb-[6vw]">
              <p className="text96 uppercase max-md:text-[9vw]!">
                The bold flavor
              </p>
              <div className="max-md:w-full max-md:flex max-md:justify-center">
                <BlobButton
                  label="Order Now"
                  onClick={() => navigateTo('menu')}
                  variant="red"
                />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section
            id="about"
            className="min-h-screen max-md:h-fit my-[10vw] w-full flex flex-col items-center justify-center gap-[2vw] self relative max-md:my-[6vw] max-md:gap-[4vw]"
          >
            <PeelSticker
              src="https://www.cravburgers.shop/img/burgerselfie.png"
              alt="Burger selfie sticker"
              rotate="30deg"
              width="100%"
              className="w-[15vw] max-md:w-[30vw] h-auto absolute top-[2vw] max-md:-top-[16vw] left-[5vw] max-md:left-[2vw] z-40"
            />

            <p className="-rotate-15 text-red text-stroke-180 mr-[32vw] translate-y-[2vw] uppercase text60 font-modak leading-[.9]! max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
              About us
            </p>

            <h2 className="text-center text-red text-stroke-180 heading180 leading-[.75] max-md:text-[13vw] max-md:leading-[.85]">
              Bite into
              <br />
              Happiness
            </h2>

            <p className="w-[34vw] text-center text40 max-md:w-[88vw] leading-[1.15]">
              Look at that golden melt, the glossy bun, and the fresh crunch.
              Our burgers aren&apos;t just made, they&apos;re crafted to spark
              pure joy in every bite.
            </p>

            <div className="flex items-center justify-center py-[4vw] w-full max-md:flex-col max-md:gap-[5vw] max-md:py-[6vw]">
              {[
                {
                  img: 'https://www.cravburgers.shop/img-webp/about-1.webp',
                  rot: '-rotate-10 hover:rotate-0',
                  title: 'Smashed at 450°F',
                },
                {
                  img: 'https://www.cravburgers.shop/img-webp/about-2.webp',
                  rot: 'rotate-2 hover:rotate-0',
                  title: 'Crispy Lacy Edges',
                },
                {
                  img: 'https://www.cravburgers.shop/img-webp/about-3.webp',
                  rot: 'rotate-10 hover:rotate-0',
                  title: 'Secret CRAV Sauce',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => navigateTo('menu')}
                  className={`w-[30vw] ${card.rot} border-[.5vw] border-white cursor-pointer hover:z-50 hover:scale-105 transition-all duration-500 shrink-0 rounded-[2vw] h-[30vw] overflow-hidden relative max-md:w-[88vw] max-md:h-[60vw] max-md:rotate-0 max-md:rounded-[4vw] max-md:border-[1.2vw] shadow-xl group`}
                >
                  <img
                    alt={card.title}
                    src={card.img}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-[1.2vw] left-[1.2vw] bg-black/75 backdrop-blur-sm text-beige px-[1.2vw] py-[.4vw] rounded-full text-[1.2vw] max-md:text-[4vw] uppercase tracking-wider">
                    {card.title}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY US / INTERACTIVE EYES CARTOON BURGER SECTION */}
          <div className="w-full min-h-[150vh] max-md:min-h-fit bg-red flex flex-col justify-between items-center relative pt-[20vw] max-md:pt-[30vw] pb-[6vw]">
            {/* Top Wavy SVG Divider */}
            <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>

            <PeelSticker
              src="https://www.cravburgers.shop/img-webp/fries.webp"
              alt="Fries sticker"
              rotate="30deg"
              width="100%"
              className="w-[22vw] max-md:w-[32vw] h-auto absolute top-[18vw] left-[2vw] z-40"
            />

            <PeelSticker
              src="https://www.cravburgers.shop/img-webp/burger.webp"
              alt="Burger sticker"
              rotate="-20deg"
              width="100%"
              className="w-[24vw] max-md:w-[34vw] h-auto absolute top-[36vw] right-[2vw] z-40"
            />

            <div className="w-full h-fit flex flex-col items-center justify-center relative z-20 px-[2vw]">
              <p className="-rotate-15 text-mustard-dark text-stroke-180 mr-[32vw] translate-y-[.6vw] uppercase text60 font-modak leading-[.9]! max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
                Why Us
              </p>
              <h2 className="text-center text-beige heading180 leading-[.75] max-md:text-[13vw] max-md:leading-[.85]">
                FOOD THAT
                <br />
                FEELS GOOD
              </h2>
              <p className="w-[34vw] mt-[2vw] text-beige text-center text40 max-md:w-[88vw] leading-[1.15]">
                Because great food isn&apos;t just about taste, it&apos;s about
                how it makes you feel: warm, happy, and utterly satisfied.
              </p>
            </div>

            {/* Interactive Burger Character with Mouse-Following Eyes */}
            <div className="h-[60vw] w-[60vw] max-md:w-[95vw] max-md:h-[95vw] relative flex items-center justify-center mt-[2vw]">
              <img
                alt="CRAV cartoon burger character with hands"
                src="https://www.cravburgers.shop/img-webp/burgerwithhands.webp"
                className="h-full w-full object-contain select-none"
              />
              <div className="w-[10.5vw] h-[7vw] max-md:w-[17vw] max-md:h-[11vw] flex justify-between gap-[.5vw] absolute top-[34.6%] left-[51.2%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Left Eye */}
                <div className="w-1/2 bg-white border-[.25vw] max-md:border-[.4vw] border-black flex items-center justify-center rounded-[50%] h-full overflow-hidden">
                  <div
                    className="w-[62%] flex items-center justify-center bg-black rounded-[50%] h-[68%] transition-transform duration-75"
                    style={{
                      transform: `translate(${eyeOffset.x * 10}px, ${
                        eyeOffset.y * 10
                      }px)`,
                    }}
                  >
                    <div className="w-[26%] mb-[1vw] ml-[.6vw] bg-white rounded-[50%] h-[28%]" />
                  </div>
                </div>
                {/* Right Eye */}
                <div className="w-1/2 bg-white border-[.25vw] max-md:border-[.4vw] border-black flex items-center justify-center rounded-[50%] h-full overflow-hidden">
                  <div
                    className="w-[62%] flex items-center justify-center bg-black rounded-[50%] h-[68%] transition-transform duration-75"
                    style={{
                      transform: `translate(${eyeOffset.x * 10}px, ${
                        eyeOffset.y * 10
                      }px)`,
                    }}
                  >
                    <div className="w-[26%] mb-[1vw] ml-[.6vw] bg-white rounded-[50%] h-[28%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FULL-BLEED CHEESY BURGER SHOWCASE */}
          <div className="h-[110vh] max-md:h-[55vh] w-full relative overflow-hidden">
            <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f91814"
                />
              </svg>
            </div>

            <img
              alt="Cheesy smashed burger closeup"
              src="https://www.cravburgers.shop/img-webp/cheesyBurger.webp"
              className="h-full w-full object-cover"
            />

            <div className="z-30 w-full absolute left-0 right-0 bottom-0 rotate-180 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>
          </div>

          {/* FLOATING INGREDIENTS SECTION */}
          <section
            id="ingredients"
            className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden max-md:h-fit max-md:py-[18vw] max-md:px-[4vw]"
          >
            <div className="w-[45vw] flex flex-col items-center justify-center gap-[2vw] max-md:w-full max-md:gap-[4vw] relative z-20">
              <p className="text-red -rotate-15 mr-[34vw] translate-y-[1.5vw] uppercase text-stroke-180 font-modak leading-[.9]! text60 max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
                Crafted With Care
              </p>
              <h2 className="text-center text-red text-stroke-180 heading180 leading-[.75] max-md:text-[13vw] max-md:leading-[.85]">
                Every Layer Packed With Signature Flavor
              </h2>
              <p className="text40 w-[32vw] text-center leading-[1.1] max-md:w-full">
                From the lightly toasted brioche bun to the juicy smashed patty,
                melted cheddar, and our secret CRAV sauce—every ingredient works
                in harmony to deliver the ultimate burger experience.
              </p>
              <button
                type="button"
                onClick={() => navigateTo('spices')}
                className="mt-[1vw] font-mouse-memoirs uppercase text-[1.4vw] max-md:text-[4.5vw] tracking-wider bg-red text-beige px-[2.2vw] py-[.7vw] max-md:px-[6vw] max-md:py-[2.5vw] rounded-full hover:bg-black transition-colors cursor-pointer"
              >
                Explore Our Spices →
              </button>
            </div>

            {/* Floating Ingredient Cutouts */}
            <div className="w-[15vw] absolute top-[10%] left-[8%] max-md:w-[22vw] max-md:top-[4%] max-md:left-[4%] animate-float-slow">
              <img
                alt="Fresh tomato slice"
                src="https://www.cravburgers.shop/img-webp/tomato.webp"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[15vw] absolute top-[10%] right-[8%] max-md:w-[22vw] max-md:top-[4%] max-md:right-[4%] animate-float-slow">
              <img
                alt="Melted cheddar cheese"
                src="https://www.cravburgers.shop/img-webp/cheese.webp"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[15vw] absolute top-1/2 -translate-y-1/2 left-[12%] max-md:hidden animate-float-slow">
              <img
                alt="Cheese icon"
                src="https://www.cravburgers.shop/img-webp/cheese-logo.webp"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[15vw] absolute top-1/2 -translate-y-1/2 right-[12%] max-md:hidden animate-float-slow">
              <img
                alt="Tomato slice"
                src="https://www.cravburgers.shop/img-webp/tomato.webp"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[16vw] absolute bottom-[10%] left-[8%] max-md:w-[24vw] max-md:bottom-[3%] max-md:left-[5%] animate-float-slow">
              <img
                alt="Smashed beef patty"
                src="https://www.cravburgers.shop/img-webp/meat.webp"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[16vw] absolute bottom-[10%] right-[8%] max-md:w-[24vw] max-md:bottom-[3%] max-md:right-[5%] animate-float-slow">
              <img
                alt="Crisp lettuce"
                src="https://www.cravburgers.shop/img-webp/lettuce.webp"
                className="h-full w-full object-contain"
              />
            </div>
          </section>

          {/* WORLD MAP / LOCATIONS SECTION */}
          <section
            id="map-desktop"
            className="min-h-[155vh] max-md:min-h-fit relative pt-[16vw] pb-[20vw] overflow-hidden w-full bg-mustard flex flex-col items-center justify-center"
          >
            {/* Top Wavy Divider */}
            <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>

            <div className="w-full h-fit flex flex-col items-center justify-center relative z-20 px-[2vw]">
              <p className="text-red -rotate-15 mr-[30vw] translate-y-[2.5vw] uppercase text-stroke-180 font-modak leading-[.9]! text60 max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
                Around the World
              </p>
              <h2 className="text-center text-red text-stroke-180 heading180 leading-[.75] max-md:text-[13vw] max-md:leading-[.85]">
                Quality That
                <br />
                Travels With You
              </h2>
              <p className="w-[34vw] mt-[2vw] text-center text40 max-md:w-[88vw] leading-[1.15]">
                No matter which city you visit, our standards never change—fresh
                ingredients, signature recipes, and the unmistakable taste you
                know and love.
              </p>
            </div>

            {/* Desktop Interactive Flight Path & Polaroids */}
            <div className="h-[52vw] w-full flex items-center justify-center relative overflow-hidden max-md:hidden">
              <img
                src="https://www.cravburgers.shop/img/plane.png"
                alt="CRAV plane"
                className="w-[7vw] absolute top-[32%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-float-slow"
              />
              <svg
                className="w-full h-auto"
                viewBox="0 0 1728 525"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-51 446.631C92.3333 272.797 416.8 -36.5693 568 116.631C757 308.131 762.5 524.131 954 446.631C1145.5 369.131 1140.5 76.6306 1300.5 14.1306C1460.5 -48.3694 1764.5 295.631 1785.5 462.631"
                  stroke="#F4A804"
                  strokeWidth="10"
                  strokeDasharray="24 24"
                />
              </svg>

              {CITY_PINS.map((pin) => (
                <button
                  key={pin.id}
                  type="button"
                  onClick={() => setSelectedCity(pin)}
                  className={`w-[12.5vw] ${pin.rotation} hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer flex flex-col justify-between rounded-[1vw] overflow-hidden p-[.5vw] pb-[.6vw] h-[15.5vw] bg-white shadow-xl absolute ${pin.positionClass} z-20 group`}
                >
                  <div className="w-full h-[80%] rounded-[.8vw] overflow-hidden">
                    <img
                      alt={pin.city}
                      src={pin.image}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-[.4vw]">
                    <p className="text40 uppercase text-black">{pin.city}</p>
                    <MapPin className="w-[1.2vw] h-[1.2vw] text-red" />
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile City Cards Grid */}
            <div className="hidden max-md:grid grid-cols-2 gap-[4vw] w-full px-[4vw] mt-[8vw] relative z-20">
              {CITY_PINS.map((pin) => (
                <button
                  key={pin.id}
                  type="button"
                  onClick={() => setSelectedCity(pin)}
                  className="bg-white rounded-[4vw] p-[2.5vw] shadow-lg flex flex-col gap-[2vw] text-left"
                >
                  <div className="w-full aspect-square rounded-[3vw] overflow-hidden">
                    <img
                      src={pin.image}
                      alt={pin.city}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-mouse-memoirs text-[5.5vw] uppercase text-center w-full">
                    {pin.city}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected City Modal Popup */}
            {selectedCity && (
              <div className="fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-[2vw] max-md:rounded-[5vw] p-[2vw] max-md:p-[6vw] max-w-md w-full shadow-2xl border-4 border-mustard relative">
                  <button
                    type="button"
                    onClick={() => setSelectedCity(null)}
                    className="absolute top-4 right-4 size-10 rounded-full bg-beige flex items-center justify-center hover:bg-red hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="w-full h-48 rounded-[1.2vw] max-md:rounded-[3vw] overflow-hidden mb-4">
                    <img
                      src={selectedCity.image}
                      alt={selectedCity.city}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-modak text-red text-3xl uppercase leading-none">
                    CRAV {selectedCity.city}
                  </p>
                  <p className="font-mouse-memoirs uppercase tracking-widest text-black/60 text-lg mt-1">
                    {selectedCity.country}
                  </p>
                  <div className="mt-4 space-y-2 text-xl font-mouse-memoirs uppercase">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red shrink-0" />
                      {selectedCity.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-mustard-dark shrink-0" />
                      {selectedCity.hours}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCity(null);
                      navigateTo('menu');
                    }}
                    className="mt-6 w-full bg-red text-beige font-mouse-memoirs uppercase text-2xl py-3 rounded-full hover:bg-black transition-colors cursor-pointer"
                  >
                    Order From {selectedCity.city}
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Wavy Divider */}
            <div className="z-30 w-full absolute left-0 right-0 bottom-0 rotate-180 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>
          </section>

          {renderCTASection(false)}
        </>
      )}

      {/* =========================================================
          VIEW 2: MENU / BURGERS PAGE (https://www.cravburgers.shop/menu)
         ========================================================= */}
      {view === 'menu' && (
        <>
          <section
            id="menu-hero"
            className="h-screen max-md:h-[68vh] pt-[7vw] max-md:pt-[24vw] overflow-hidden w-full flex flex-col justify-between items-center relative bg-red self"
          >
            <PeelSticker
              src="https://www.cravburgers.shop/img-webp/smile.png"
              alt="Smile sticker"
              rotate="30deg"
              width="100%"
              className="w-[15vw] max-md:w-[25vw] h-auto absolute top-[20vw] max-md:top-[30vw] left-[5vw] z-40"
            />

            <p className="text-mustard-dark -rotate-15 mr-[34vw] translate-y-[2vw] uppercase text-stroke-180-menu font-modak leading-[.9]! text60 max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
              Our Menu
            </p>

            <h1 className="heading180 text-beige text-center leading-[.8] select-none max-md:text-[14vw]! relative z-10">
              EAT LIKE YOU
              <br />
              MEAN IT
            </h1>

            <div className="w-[68vw] max-md:w-[95vw] translate-y-[2vw] relative z-20 pointer-events-none animate-float-slow">
              <img
                alt="CRAV smoky double smashed burger"
                src="https://www.cravburgers.shop/img-webp/smoky-burger.webp"
                className="h-full w-full object-contain"
              />
            </div>
          </section>

          {/* BURGERS GRID SECTION */}
          <section
            id="burgers"
            className="min-h-screen w-full relative overflow-hidden pt-[22vw] pb-[18vw] max-md:pt-[28vw] max-md:pb-[16vw] self bg-beige"
          >
            {/* Top Wavy Red Divider */}
            <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f91814"
                />
              </svg>
            </div>

            {/* Category Filter Pills */}
            <div className="relative z-30 flex flex-wrap items-center justify-center gap-[1vw] max-md:gap-[2.5vw] mb-[3vw] max-md:mb-[6vw]">
              {(['ALL', 'BEEF', 'SPICY', 'VEGGIE'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mouse-memoirs uppercase text-[1.5vw] max-md:text-[4.5vw] tracking-wider px-[2vw] py-[.5vw] max-md:px-[5vw] max-md:py-[1.5vw] rounded-full cursor-pointer transition-all ${
                    selectedCategory === cat
                      ? 'bg-red text-beige scale-105 shadow-md'
                      : 'bg-white text-black hover:bg-mustard'
                  }`}
                >
                  {cat === 'ALL' ? 'All Burgers (6)' : cat}
                </button>
              ))}
            </div>

            {/* 2-Column Checkerboard Burger Cards */}
            <div className="w-full h-fit grid grid-cols-2 gap-[2vw] max-md:grid-cols-1 max-md:gap-[5vw] relative z-20">
              {filteredBurgers.map((burger) => (
                <div
                  key={burger.id}
                  className="group h-[35vw] max-md:h-[75vw] w-full rounded-[2vw] overflow-hidden bg-white relative max-md:rounded-[5vw] shrink-0 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* Red & White Diner Checkerboard Stripe */}
                  <div
                    className="absolute w-full left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
                    style={{ height: '6vw' }}
                    aria-hidden="true"
                  >
                    <div className="flex w-full h-[3vw] max-md:h-[7vw]">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={`row1-${i}`}
                          className={`h-full w-[8.333%] transition-colors duration-500 ${
                            i % 2 === 0
                              ? 'bg-red group-hover:bg-mustard'
                              : 'bg-white'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex w-full h-[3vw] max-md:h-[7vw]">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={`row2-${i}`}
                          className={`h-full w-[8.333%] transition-colors duration-500 ${
                            i % 2 === 0
                              ? 'bg-white'
                              : 'bg-red group-hover:bg-mustard'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Inner Content */}
                  <div className="size-full relative z-20 flex flex-col justify-between p-[2vw] max-md:p-[4vw]">
                    {/* Hover Quick Details Glass Card */}
                    <div className="absolute left-[2vw] z-30 right-[2vw] bottom-[2vw] max-md:hidden pointer-events-none">
                      <div className="rounded-[1.2vw] border border-black/10 bg-white/90 backdrop-blur-md px-[1.2vw] py-[1vw] opacity-0 translate-y-[1vw] transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
                        <div className="flex items-center justify-between gap-[1vw]">
                          <p className="text40 uppercase tracking-[.18em] text-black/60">
                            Quick details
                          </p>
                          <p className="text40 uppercase text-black/60">
                            {burger.prepTime}
                          </p>
                        </div>
                        <div className="mt-[.6vw] grid grid-cols-3 gap-[.6vw]">
                          <div className="rounded-[.9vw] bg-black/5 border border-black/10 px-[.8vw] py-[.6vw]">
                            <p className="text40 uppercase text-black/60">Bun</p>
                            <p className="text40 uppercase text-black/80">
                              {burger.bun}
                            </p>
                          </div>
                          <div className="rounded-[.9vw] bg-black/5 border border-black/10 px-[.8vw] py-[.6vw]">
                            <p className="text40 uppercase text-black/60">
                              Patty
                            </p>
                            <p className="text40 uppercase text-black/80">
                              {burger.patty}
                            </p>
                          </div>
                          <div className="rounded-[.9vw] bg-black/5 border border-black/10 px-[.8vw] py-[.6vw]">
                            <p className="text40 uppercase text-black/60">
                              Spice
                            </p>
                            <p className="text40 uppercase text-black/80">
                              {burger.spice}
                            </p>
                          </div>
                        </div>
                        <div className="mt-[.7vw] flex flex-wrap gap-[.6vw]">
                          <span className="text40 uppercase px-[.7vw] py-[.35vw] rounded-full bg-beige border border-black/10 text-black/70">
                            Calories: {burger.calories}
                          </span>
                          <span className="text40 uppercase px-[.7vw] py-[.35vw] rounded-full bg-beige border border-black/10 text-black/70">
                            Protein: {burger.protein}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Add to Cart (+) Button */}
                    <button
                      type="button"
                      onClick={() => addToCart(burger)}
                      className="size-[3.2vw] p-[.5vw] max-md:p-[1.5vw] aspect-square max-md:size-[10vw] rounded-full bg-mustard hover:bg-red grid place-items-center ml-auto transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer shadow-md"
                      aria-label={`Add ${burger.name} to cart`}
                    >
                      <Plus className="w-full h-full text-white stroke-[2.8]" />
                    </button>

                    {/* Burger Cutout Image */}
                    <div className="size-[24vw] pointer-events-none max-md:size-[42vw] mx-auto transition-transform duration-700 group-hover:scale-[1.06]">
                      <img
                        alt={burger.name}
                        src={burger.image}
                        className="h-full w-full object-contain drop-shadow-xl"
                      />
                    </div>

                    {/* Burger Title & Price */}
                    <div className="w-full flex items-end justify-between text40 max-md:text-[5vw]">
                      <p className="text-red text60 uppercase">{burger.name}</p>
                      <p className="text60 max-md:mr-[2vw]">${burger.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="-mt-[12vw]">{renderCTASection(false)}</div>
        </>
      )}

      {/* =========================================================
          VIEW 3: OUR SPICES PAGE (https://www.cravburgers.shop/spices)
         ========================================================= */}
      {view === 'spices' && (
        <>
          <section
            id="spices-hero"
            className="h-screen max-md:h-[65vh] w-full overflow-hidden flex flex-col justify-between items-center relative pt-[8vw] max-md:pt-[26vw] bg-beige"
          >
            <p className="text-red -rotate-15 mr-[34vw] translate-y-[2vw] uppercase text-stroke-180 font-modak leading-[.9]! text60 max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
              WHAT&apos;S INSIDE
            </p>
            <h1 className="heading180 text-red text-stroke-180 text-center leading-[.8] select-none max-md:text-[13vw]!">
              SIMPLE THINGS
              <br />
              DONE RIGHT
            </h1>
            <div className="w-[70vw] max-md:w-[95vw] translate-y-[2vw] pointer-events-none">
              <img
                alt="CRAV custom spices blend"
                src="https://www.cravburgers.shop/img-webp/spices.webp"
                className="h-full w-full object-contain"
              />
            </div>
          </section>

          {/* FROM FARM TO BITE SECTION */}
          <section
            id="spices-intro"
            className="min-h-screen max-md:h-fit bg-red relative w-full flex flex-col items-center justify-center gap-[2vw] self py-[20vw] max-md:py-[28vw]"
          >
            <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>

            <p className="-rotate-12 text-mustard-dark text-stroke-180 mr-[28vw] translate-y-[1.2vw] uppercase text60 font-modak leading-[.9]! max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
              FRESHNESS FIRST
            </p>
            <h2 className="text-center text-beige heading180 leading-[.75] max-md:text-[13vw] max-md:leading-[.85]">
              FROM FARM
              <br />
              TO BITE
            </h2>
            <p className="w-[36vw] text-center text-beige text40 max-md:w-[88vw] leading-[1.15]">
              Every burger is crafted from the ground up with custom spice
              blends, house-made sauces, and ingredients prepared fresh every
              single day.
            </p>

            <div className="w-[62vw] mt-[2vw] rounded-[2vw] overflow-hidden h-[36vw] max-md:w-[90vw] max-md:h-[58vw] max-md:rounded-[4vw] shadow-2xl border-4 border-white/20">
              <img
                alt="Fresh ingredients from farm to bite"
                src="https://www.cravburgers.shop/img-webp/farmtobite.webp"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="z-30 w-full absolute left-0 right-0 bottom-0 rotate-180 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>
          </section>

          {/* LAYER BY LAYER TIMELINE SECTION */}
          <section
            id="spices-story"
            className="w-full relative overflow-hidden bg-mustard py-[18vw] max-md:py-[24vw]"
          >
            <div className="z-30 w-full absolute left-0 right-0 top-0 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>

            <div className="self flex flex-col items-center justify-center gap-[1.5vw]">
              <p className="text-red -rotate-12 mr-[28vw] translate-y-[1.2vw] uppercase text-stroke-180 font-modak leading-[.9]! text60 max-md:rotate-0 max-md:mr-0 max-md:translate-y-0">
                LAYER BY LAYER
              </p>
              <h2 className="text-center text-red text-stroke-180 heading180 leading-[.75] max-md:text-[13vw] max-md:leading-[.85]">
                A STORY IN
                <br />
                EVERY BITE
              </h2>
              <p className="w-[38vw] text-center text40 max-md:w-[88vw]">
                Great burgers aren&apos;t rushed. Each layer plays its part,
                building flavor from the first crunch to the final bite.
              </p>
            </div>

            <div className="relative mt-[6vw] max-md:mt-[10vw] px-[6vw] max-md:px-[5vw]">
              <div
                className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[.6vw] bg-mustard-dark/35 rounded-full max-md:hidden"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-[8vw] max-md:gap-[10vw]">
                {SPICE_STORY_STEPS.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={step.id}
                      className={`grid grid-cols-12 items-center gap-[3vw] max-md:flex max-md:flex-col`}
                    >
                      <div
                        className={`col-span-5 ${
                          isEven ? 'order-1' : 'order-3'
                        } max-md:w-full`}
                      >
                        <div className="p-[2.2vw] max-md:p-[6vw] bg-white/80 backdrop-blur-sm rounded-[2vw] max-md:rounded-[5vw] shadow-lg">
                          <p className="font-modak text-red text-stroke-small uppercase text60 leading-[.9]">
                            {step.label}
                          </p>
                          <h3 className="mt-[.6vw] text96 uppercase text-black">
                            {step.title}
                          </h3>
                          <p className="mt-[1vw] text40 leading-[1.15] text-black/80">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-2 order-2 flex items-center justify-center max-md:hidden">
                        <div className="size-[3vw] rounded-full bg-red border-[.4vw] border-white shadow-md" />
                      </div>

                      <div
                        className={`col-span-5 ${
                          isEven ? 'order-3' : 'order-1'
                        } flex items-center justify-center max-md:w-full`}
                      >
                        <div
                          className={`w-[24vw] h-[24vw] max-md:w-[70vw] max-md:h-[70vw] ${step.rotation} hover:rotate-0 transition-transform duration-500 rounded-[2.5vw] max-md:rounded-[5vw] bg-white p-[2vw] shadow-xl flex items-center justify-center`}
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="z-30 w-full absolute left-0 right-0 bottom-0 rotate-180 overflow-x-clip">
              <svg
                className="jelly pointer-events-none block w-full max-w-[100vw] h-[300px] max-md:h-auto"
                width="100%"
                viewBox="0 0 1536 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
                  fill="#f5e3cd"
                />
              </svg>
            </div>
          </section>

          {renderCTASection(false)}
        </>
      )}

      {/* =========================================================
          VIEW 4: CONTACT PAGE (https://www.cravburgers.shop/contact)
         ========================================================= */}
      {view === 'contact' && (
        <>
          <section
            id="contact-form"
            className="min-h-screen max-md:h-fit bg-red w-full flex items-center justify-center relative overflow-hidden self pt-[10vw] max-md:pt-[28vw] pb-[8vw]"
          >
            <PeelSticker
              src="https://www.cravburgers.shop/img-webp/fries.webp"
              alt="Fries sticker"
              rotate="30deg"
              width="100%"
              className="w-[20vw] max-md:hidden h-auto absolute top-[8vw] left-[5vw] z-40"
            />

            <PeelSticker
              src="https://www.cravburgers.shop/img-webp/burger.webp"
              alt="Burger sticker"
              rotate="-25deg"
              width="100%"
              className="w-[24vw] max-md:hidden h-auto absolute top-[20vw] right-[2vw] z-40"
            />

            <div className="relative z-20 flex items-center flex-col justify-between gap-[2vw] max-md:gap-[6vw] w-full">
              <div className="relative z-20 gap-[1.5vw] w-full flex flex-col items-center">
                <p className="-rotate-9 max-md:rotate-0 text-mustard-dark text-stroke-180 text-center text-[2.8vw] font-modak leading-[.9]! max-md:text-[7vw]">
                  SAY HELLO
                </p>
                <h1 className="text-center heading180 uppercase max-md:text-[14vw] leading-[.75] max-md:leading-[.9] w-full text-beige relative z-20">
                  GOT A CRAVING?
                  <br />
                  LET&apos;S TALK
                </h1>
              </div>

              <div className="w-full max-w-[36vw] max-md:max-w-full p-[2vw] max-md:p-[4vw] relative z-30">
                {contactSent ? (
                  <div className="bg-white text-black rounded-[1.5vw] max-md:rounded-[4vw] p-[2.5vw] max-md:p-[6vw] text-center shadow-2xl">
                    <div className="size-14 rounded-full bg-mustard mx-auto flex items-center justify-center mb-4">
                      <Check className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-modak text-red text-[2.6vw] max-md:text-[8vw] uppercase leading-none">
                      CRAVING RECEIVED!
                    </h3>
                    <p className="font-mouse-memoirs uppercase text-[1.4vw] max-md:text-[4.5vw] text-black/75 mt-3">
                      Our grill masters in Navarra got your message. We&apos;ll
                      get back to you hotter than a 450°F griddle!
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setContactSent(false);
                        setContactEmail('');
                        setContactMessage('');
                      }}
                      className="mt-6 bg-red text-beige font-mouse-memoirs uppercase text-[1.3vw] max-md:text-[4.5vw] px-[2.5vw] py-[.8vw] max-md:px-[6vw] max-md:py-[2.5vw] rounded-full hover:bg-black transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSent(true);
                    }}
                    className="flex flex-col gap-[1.5vw] max-md:gap-[6vw] relative z-10"
                  >
                    <div className="relative group">
                      <input
                        type="email"
                        required
                        placeholder="YOUR BEST EMAIL"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-transparent border-b-2 outline-none py-[1vw] max-md:py-[3vw] font-mouse-memoirs text-[1.6vw] max-md:text-[5.5vw] text-white transition-all duration-300 placeholder:text-white/40 uppercase tracking-widest border-white/30 focus:border-mustard"
                      />
                    </div>
                    <div className="relative group">
                      <textarea
                        rows={2}
                        required
                        maxLength={120}
                        placeholder="TELL US YOUR CRAVING..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full bg-transparent border-b-2 outline-none py-[1vw] max-md:py-[3vw] font-mouse-memoirs text-[1.6vw] max-md:text-[5.5vw] text-white transition-all duration-300 placeholder:text-white/40 uppercase tracking-widest resize-none min-h-[4vw] max-md:min-h-[15vw] border-white/30 focus:border-mustard"
                      />
                    </div>
                    <div className="mt-[1.5vw]">
                      <button
                        type="submit"
                        className="font-mouse-memoirs flex items-center justify-center cursor-pointer uppercase tracking-wide bg-mustard text-black rounded-full group hover:bg-black hover:text-beige transition-colors w-full text-[1.6vw] py-[1vw] max-md:text-[5.5vw] max-md:py-[3vw] shadow-xl"
                      >
                        SEND CRAVING
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

          {renderCTASection(true)}
        </>
      )}

      {/* =========================================================
          GLOBAL FOOTER (Matches CRAV Burgers Footer)
         ========================================================= */}
      <footer className="h-fit w-full overflow-hidden self relative bg-beige pt-[4vw]">
        <div className="relative z-30 flex items-center justify-between gap-[2vw] pb-[1vw] max-md:flex-col max-md:items-center max-md:gap-[4vw] max-md:pb-[6vw]">
          <nav
            className="flex flex-wrap items-center gap-x-[2.5vw] gap-y-[.6vw] max-md:gap-x-[6vw] max-md:gap-y-[2vw]"
            aria-label="Footer navigation"
          >
            {(
              [
                { label: 'Home', target: 'home' },
                { label: 'Burgers', target: 'menu' },
                { label: 'Spices', target: 'spices' },
                { label: 'Contact', target: 'contact' },
              ] as const
            ).map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigateTo(item.target)}
                className="text40 uppercase font-mouse-memoirs hover:text-red transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <p className="text40 max-md:hidden uppercase opacity-80 font-mouse-memoirs">
            © 2026 CRAV — All rights reserved
          </p>
        </div>

        <div className="relative z-30 max-md:hidden">
          <div className="h-[2px] w-full bg-black/20" />
        </div>

        <div className="relative z-30 max-md:hidden pt-[1vw] opacity-80">
          <p className="text40 uppercase font-mouse-memoirs">
            Smashed patties · toasted buns · est. 1997
          </p>
        </div>

        <div className="mt-[8vw] relative min-h-[22vw] max-md:mt-[6vw]">
          {/* Floating Footer Cutouts */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-around items-center"
            aria-hidden="true"
          >
            <img
              src="https://www.cravburgers.shop/img-webp/lettuce.webp"
              alt=""
              className="w-[10vw] max-md:w-[16vw] -translate-y-[3vw] animate-float-slow"
            />
            <img
              src="https://www.cravburgers.shop/img-webp/tomato.webp"
              alt=""
              className="w-[8.5vw] max-md:w-[14vw] -translate-y-[4vw] animate-float-slow"
            />
            <img
              src="https://www.cravburgers.shop/img-webp/cheese-logo.webp"
              alt=""
              className="w-[11vw] max-md:w-[16vw] -translate-y-[3vw] animate-float-slow"
            />
            <img
              src="https://www.cravburgers.shop/img-webp/meat.webp"
              alt=""
              className="w-[12vw] max-md:w-[18vw] -translate-y-[3.5vw] animate-float-slow"
            />
          </div>

          <h2 className="heading600 leading-[.55] translate-y-[4vw] max-md:translate-y-0 text-center text-red text-stroke z-10 relative select-none">
            CRAV
          </h2>
        </div>
      </footer>

      {/* =========================================================
          SLIDE-OVER ORDER BAG / CART DRAWER
         ========================================================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-[3000] bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-beige h-full p-6 flex flex-col justify-between shadow-2xl border-l-4 border-red">
            <div className="flex items-center justify-between border-b-2 border-black/15 pb-4">
              <div>
                <p className="font-modak text-red text-4xl uppercase leading-none">
                  YOUR CRAV BAG
                </p>
                <p className="font-mouse-memoirs uppercase tracking-widest text-black/60 text-lg">
                  Hot &amp; Smashed to Order
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="size-10 rounded-full bg-white flex items-center justify-center hover:bg-red hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {orderSubmitted ? (
                <div className="bg-white rounded-3xl p-6 text-center my-8 shadow-lg border-2 border-mustard">
                  <div className="size-16 rounded-full bg-red text-white mx-auto flex items-center justify-center mb-4">
                    <Check className="w-9 h-9" />
                  </div>
                  <h3 className="font-modak text-red text-3xl uppercase">
                    ORDER ON THE GRILL!
                  </h3>
                  <p className="font-mouse-memoirs text-xl uppercase text-black/70 mt-2">
                    Order #CRV-849 is sizzling on our 450°F steel griddle. Ready
                    in 12 minutes!
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setOrderSubmitted(false);
                      setCart([]);
                      setCartOpen(false);
                    }}
                    className="mt-6 w-full bg-mustard text-black font-mouse-memoirs uppercase text-2xl py-2.5 rounded-full hover:bg-black hover:text-beige transition-colors cursor-pointer"
                  >
                    Back to CRAV
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-16">
                  <p className="font-modak text-3xl text-black/40 uppercase">
                    YOUR BAG IS EMPTY
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCartOpen(false);
                      navigateTo('menu');
                    }}
                    className="mt-4 bg-red text-beige font-mouse-memoirs uppercase text-2xl px-8 py-2.5 rounded-full hover:bg-black transition-colors cursor-pointer"
                  >
                    Explore Burgers
                  </button>
                </div>
              ) : (
                cart.map(({ burger, qty }) => (
                  <div
                    key={burger.id}
                    className="bg-white rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-sm"
                  >
                    <img
                      src={burger.image}
                      alt={burger.name}
                      className="w-20 h-20 object-contain bg-beige/50 rounded-xl p-1 shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-mouse-memoirs text-2xl uppercase text-red leading-tight">
                        {burger.name}
                      </p>
                      <p className="font-mouse-memoirs text-lg uppercase text-black/60">
                        {burger.bun} Bun · {burger.spice} Spice
                      </p>
                      <p className="font-mouse-memoirs text-xl text-black mt-0.5">
                        ${burger.price * qty}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-beige rounded-full px-2.5 py-1">
                      <button
                        type="button"
                        onClick={() => updateQty(burger.id, -1)}
                        className="size-7 rounded-full bg-white flex items-center justify-center hover:bg-red hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mouse-memoirs text-xl w-5 text-center">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(burger.id, 1)}
                        className="size-7 rounded-full bg-white flex items-center justify-center hover:bg-red hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && !orderSubmitted && (
              <div className="border-t-2 border-black/15 pt-4 space-y-3">
                <div className="flex items-center justify-between font-mouse-memoirs text-3xl uppercase">
                  <span>Total</span>
                  <span className="text-red">${totalPrice}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOrderSubmitted(true)}
                  className="w-full bg-red text-beige font-mouse-memoirs uppercase text-2xl py-3 rounded-full hover:bg-black transition-colors cursor-pointer shadow-lg"
                >
                  Confirm &amp; Smash Order (${totalPrice})
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
