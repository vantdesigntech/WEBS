import React, { useState, useEffect } from 'react';
import {
  COURSES,
  EVENTS,
  TRAINERS,
  PRICE_TIERS,
  SHOP_PRODUCTS,
  WEEKLY_SCHEDULE,
  UI_COPY,
  type Lang,
  type CourseItem,
  type EventItem,
  type ShopProduct,
} from './data';
import { X, Check, Calendar, Clock, MapPin, Shield, Users, ShoppingBag } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [menuOpen, setMenuOpen] = useState(false);

  // Active modals / drawers
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);

  // Interactive Tabs in Schedule & Pricing section
  const [contractDuration, setContractDuration] = useState<'m12' | 'm6' | 'm1'>('m12');
  const [scheduleFilter, setScheduleFilter] = useState<string>('all');

  // Trial Booking Form state
  const [trialStep, setTrialStep] = useState<'select' | 'Confirmed'>('select');
  const [trialCourse, setTrialCourse] = useState('Muay Thai');
  const [trialDay, setTrialDay] = useState('Martes 17:30');
  const [trialName, setTrialName] = useState('');
  const [trialEmail, setTrialEmail] = useState('');

  // Order Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Subtle Mouse Parallax on Hero Cutout Layers
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const t = UI_COPY[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.25 }
    );

    const masks = document.querySelectorAll('.brand-element_mask');
    masks.forEach((m) => observer.observe(m));

    return () => observer.disconnect();
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x: nx, y: ny });
  };

  return (
    <div className="min-h-screen bg-[#e8e8e8] text-[#1c1c1c] selection:bg-[#f14553] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1c1c1c] text-white px-5 py-4 shadow-2xl border-l-4 border-[#f14553]">
          <Check className="w-5 h-5 text-[#f9f383]" />
          <span className="text-sm font-medium tracking-wide">{toastMsg}</span>
        </div>
      )}

      {/* ==================== HEADER (Exact Fenriz Webflow DOM) ==================== */}
      <header className="page-header">
        <div className="header-content">
          <div className="header-left flex items-center gap-6">
            <a href="#top" aria-current="page" className="nav_logo w-nav-brand w--current">
              <img
                src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65782e12af1d447a19a36eac_fenriz-logo.svg"
                loading="lazy"
                alt="Fenriz"
                className="image-6"
              />
            </a>
            <div className="nav_language-switcher">
              <div className="nav-lang-wrapper w-locales-list">
                <div role="list" className="loc_list w-locales-items flex items-center gap-2 text-xs uppercase tracking-wider">
                  {(['es', 'de', 'en'] as Lang[]).map((l, idx) => (
                    <React.Fragment key={l}>
                      <button
                        onClick={() => setLang(l)}
                        className={`uppercase transition-opacity cursor-pointer ${
                          lang === l ? 'font-bold underline opacity-100 text-[#f9f383]' : 'opacity-65 hover:opacity-100'
                        }`}
                      >
                        {l === 'es' ? 'ES' : l === 'de' ? 'DE' : 'EN'}
                      </button>
                      {idx < 2 && <span className="opacity-40">-</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <nav className={`page-nav ${menuOpen ? 'is-open' : ''}`}>
            <div
              className="page-nav-control cursor-pointer select-none"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <button type="button" className="menu-toggler w-button">
                Menu
              </button>
              <div className="page-nav-stripes">
                <div className="page-nav-stripe"></div>
                <div className="page-nav-stripe"></div>
                <div className="page-nav-stripe"></div>
              </div>
            </div>

            <div className="page-nav-content">
              <div className="page-nav-bar"></div>
              <div className="page-nav-inner">
                <ul role="list" className="page-nav-list">
                  <li>
                    <a href="#kurse" onClick={() => setMenuOpen(false)} className="page-nav-link">
                      {t.navCourses}
                    </a>
                  </li>
                  <li>
                    <a href="#events" onClick={() => setMenuOpen(false)} className="page-nav-link">
                      {t.navEvents}
                    </a>
                  </li>
                  <li>
                    <a href="#preise" onClick={() => setMenuOpen(false)} className="page-nav-link">
                      {t.navPrices}
                    </a>
                  </li>
                  <li>
                    <a href="#kursplan" onClick={() => setMenuOpen(false)} className="page-nav-link">
                      {t.navSchedule}
                    </a>
                  </li>
                  <li>
                    <a href="#ueber-uns" onClick={() => setMenuOpen(false)} className="page-nav-link">
                      {t.navAbout}
                    </a>
                  </li>
                </ul>

                <ul role="list" className="page-nav-off-list">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false);
                        setTeamModalOpen(true);
                      }}
                      className="page-nav-off-link cursor-pointer"
                    >
                      Team
                    </button>
                  </li>
                  <li>
                    <a href="#shop" onClick={() => setMenuOpen(false)} className="page-nav-off-link">
                      {t.navShop}
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false);
                        setFaqModalOpen(true);
                      }}
                      className="page-nav-off-link cursor-pointer"
                    >
                      {t.navHelp}
                    </button>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setTrialStep('select');
                    setTrialModalOpen(true);
                  }}
                  className="button is-secondary special-nav w-inline-block"
                >
                  <div className="button_border"></div>
                  <div className="button_mask"></div>
                  <div className="button_text special-nav-btn-text">{t.navTrial}</div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* ==================== MAIN WRAPPER ==================== */}
      <main id="top" className="main-wrapper">
        {/* ==================== HERO SECTION (3-Layer Cutout + Neon Flicker) ==================== */}
        <div className="section_home-header" onMouseMove={handleHeroMouseMove}>
          <div className="w-layout-grid home-header_component">
            <div
              id="w-node-_1aa605c8-010f-c0af-70dd-cd96c2d7238a-9d642e2a"
              className="home-header_img-wrap"
            >
              <div className="home-header_img-overlay"></div>

              {/* Desktop 3-Layer Stack */}
              <div className="is-desktop">
                <img
                  className="home-header_img-base"
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65ba5ebf6624166ae66b62fa_HERO-IMAGE-BACKGROUND.webp"
                  width="2560"
                  height="1440"
                  alt="Fenriz Gym Berlin Background"
                  loading="eager"
                />
                <img
                  className="home-header_img-gradient"
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2793ff1873c6ffd224dfd_HERO-IMAGE-GRADIENT.webp"
                  width="2560"
                  height="1440"
                  alt=""
                  loading="eager"
                  style={{
                    transform: `translate3d(${mouseOffset.x * -8}px, ${mouseOffset.y * -6}px, 0)`,
                    transition: 'transform 0.25s ease-out',
                  }}
                />
                <img
                  className="home-header_img-cutout"
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2793f65869bc18436292a_HERO-IMAGE-TOP-LAYER%201.webp"
                  width="2560"
                  height="1440"
                  alt="Fenriz Fighter Foreground"
                  loading="eager"
                  style={{
                    transform: `translate3d(${mouseOffset.x * 10}px, ${mouseOffset.y * 6}px, 0) scale(1.015)`,
                    transition: 'transform 0.25s ease-out',
                  }}
                />
              </div>

              {/* Tablet 3-Layer Stack */}
              <div className="is-tablet">
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2b35834525178b011e303_HERO-IMAGE-BACKGROUND.webp"
                  loading="eager"
                  width="1536"
                  height="2048"
                  alt=""
                  className="home-header_img-base"
                />
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2b358f3a393fe1d2a2c85_HERO-IMAGE-GRADIENT.webp"
                  loading="eager"
                  width="1536"
                  height="2048"
                  alt=""
                  className="home-header_img-gradient"
                />
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2b358c8096cee93087da9_HERO-IMAGE-TOP-LAYER%201.webp"
                  loading="eager"
                  width="1536"
                  height="2048"
                  alt=""
                  className="home-header_img-cutout"
                />
              </div>

              {/* Mobile 3-Layer Stack */}
              <div className="is-mobile">
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2b4a486afcb6f83729881_HERO-IMAGE-BACKGROUND.webp"
                  loading="eager"
                  width="375"
                  height="667"
                  alt=""
                  className="home-header_img-base"
                />
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2b4a42e57fc6d9223ebc5_HERO-IMAGE-GRADIENT.webp"
                  loading="eager"
                  width="375"
                  height="667"
                  alt=""
                  className="home-header_img-gradient"
                />
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65b2b4a313526f85f2f559bb_HERO-IMAGE-TOP-LAYER%201.webp"
                  loading="eager"
                  width="375"
                  height="667"
                  alt=""
                  className="home-header_img-cutout"
                />
              </div>
            </div>

            {/* Hero Foreground Typography */}
            <div
              id="w-node-_96d06777-1beb-bdb5-02bc-ff090f59d924-9d642e2a"
              className="home-header_content-wrap"
            >
              <div className="container-huge">
                <div
                  id="w-node-_3974f3ee-1cce-6211-8d62-2be29e010a61-9d642e2a"
                  className="home-header_content"
                >
                  <div className="spacer-xlarge"></div>
                  <h1 data-element="header-h1">
                    Martial arts. <br />
                    From Kreuzberg. <br />
                    With Love.
                  </h1>
                  <div className="spacer-medium"></div>
                  <div data-element="header-text" className="home-header_text-wrap">
                    <p className="text-color-grey">{t.heroSubtitle}</p>
                  </div>
                  <div className="spacer-medium"></div>
                  <div data-element="header-buttons" className="home-header_buttons">
                    <a href="#kurse" className="button is-secondary w-inline-block">
                      <div className="button_border"></div>
                      <div className="button_mask"></div>
                      <div className="button_text">{t.heroCta}</div>
                    </a>
                  </div>
                  <div className="spacer-xlarge"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SECTION: UNSERE KURSE (#kurse) ==================== */}
        <section id="kurse" className="section_courses">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="section_header">
                  <h2 data-element="heading-h2" className="text-align-center">
                    {t.coursesHeading}
                  </h2>
                  <div className="brand-element is-offset">
                    <div data-element="brand-element-mask" className="brand-element_mask"></div>
                  </div>
                </div>
                <div className="spacer-large"></div>
                <div className="align-center-flex">
                  <div className="max-width-medium">
                    <p className="text-style-section">
                      {t.coursesIntro1}
                      <br />
                      <br />
                      {t.coursesIntro2}
                    </p>
                  </div>
                </div>
                <div className="spacer-large"></div>
              </div>

              <div className="cards-container">
                <div className="courses_list-wrap w-dyn-list">
                  <div role="list" className="courses_list is-grid w-dyn-items">
                    {COURSES.map((course) => (
                      <div key={course.id} role="listitem" className="courses_item w-dyn-item">
                        <div
                          onClick={() => setSelectedCourse(course)}
                          className="w-layout-grid course-card_component"
                        >
                          <div
                            id="w-node-d8f80f7c-a0b1-32d0-7f6e-37b5bf87cf5e-9d642e2a"
                            className="course-card_link-img w-inline-block"
                          >
                            <div
                              id="w-node-_32e96fbd-4616-baa3-34dd-ff31644ab91f-9d642e2a"
                              className="course-card_img-wrap"
                            >
                              <img
                                alt={course.title[lang]}
                                loading="lazy"
                                src={course.imgBw}
                                className="course-card_img-bw"
                              />
                              <img
                                alt={course.title[lang]}
                                loading="lazy"
                                src={course.imgColor}
                                className="course-card_img"
                              />
                            </div>
                          </div>

                          <div
                            id="w-node-_807f9f00-3d08-7d2b-bb2d-5f1b11e3786f-9d642e2a"
                            className="course-card_content"
                          >
                            <h3>{course.title[lang]}</h3>
                            <div className="course-card_button-wrap">
                              <span className="button is-secondary w-inline-block">
                                <div className="button_border"></div>
                                <div className="button_mask"></div>
                                <div className="button_text">{t.learnMore}</div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION: PROBETRAINING (#probetraining) ==================== */}
        <section id="probetraining" className="section_probetraining">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="w-layout-grid probetraining_layout">
                  <div className="probetraining_content">
                    <div className="section_header is-aligned-left">
                      <h2>{t.trialHeading}</h2>
                      <div className="brand-element is-offset">
                        <div
                          data-element="brand-element-mask"
                          className="brand-element_mask is-dark"
                        ></div>
                      </div>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="max-width-medium">
                      <p className="text-color-grey-teaser">{t.trialText1}</p>
                      <p className="text-color-grey-teaser mt-4">{t.trialText2}</p>
                      <div className="div-block-3 mt-8">
                        <button
                          type="button"
                          onClick={() => {
                            setTrialStep('select');
                            setTrialModalOpen(true);
                          }}
                          className="button is-secondary w-inline-block"
                        >
                          <div className="button_border"></div>
                          <div className="button_mask"></div>
                          <div className="button_text">{t.trialCta}</div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    id="w-node-_87896ada-5fd0-a3c5-ed9d-9f502bee2fee-2bee2fda"
                    className="probetraining_img-wrap cursor-pointer"
                    onClick={() => {
                      setTrialStep('select');
                      setTrialModalOpen(true);
                    }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/659f7515956607296cd70e38_home_probetraining_img.webp"
                      loading="lazy"
                      width="254"
                      height="592"
                      alt="Fenriz Probetraining Layer 1"
                      className="probetraining_img is-img-1"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/659f7515956607296cd70e38_home_probetraining_img.webp"
                      loading="lazy"
                      width="254"
                      height="592"
                      alt="Fenriz Probetraining Layer 2"
                      className="probetraining_img is-img-2"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/659f7515956607296cd70e38_home_probetraining_img.webp"
                      loading="lazy"
                      width="254"
                      height="592"
                      alt="Fenriz Probetraining Layer 3"
                      className="probetraining_img is-img-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION DIVIDER 1 ==================== */}
        <section className="section_divider">
          <img
            src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65798f4a1dbdfbde9e7c7b2b_events_header_img.webp"
            loading="lazy"
            width="2561"
            height="1711"
            alt="Fenriz Gym Training"
            className="divider_img"
          />
        </section>

        {/* ==================== SECTION: ÜBER UNS (#ueber-uns) ==================== */}
        <section id="ueber-uns" className="section_about">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="section_header">
                  <h2 className="text-align-center">{t.aboutHeading}</h2>
                  <div className="brand-element is-offset">
                    <div data-element="brand-element-mask" className="brand-element_mask"></div>
                  </div>
                </div>

                <div className="align-center-flex">
                  <div className="spacer-large"></div>
                  <div className="max-width-medium">
                    <p className="text-style-section">
                      {t.aboutText1}
                      <br />
                      <br />
                      {t.aboutText2}
                    </p>
                  </div>
                  <div className="spacer-large"></div>

                  <button
                    type="button"
                    onClick={() => setTeamModalOpen(true)}
                    className="button w-inline-block"
                  >
                    <div className="button_border"></div>
                    <div className="button_mask is-light"></div>
                    <div className="button_text">{t.aboutCta}</div>
                  </button>

                  <div className="spacer-huge"></div>
                  <h3 className="heading-style-h5">{t.partnersHeading}</h3>
                  <div className="spacer-medium"></div>

                  <div className="w-layout-grid about_partners">
                    <div className="w-layout-grid grid items-center">
                      <a
                        id="w-node-e4da0583-dae3-1e32-14a9-3d28b6347a10-9d642e2a"
                        href="#ueber-uns"
                        onClick={(e) => {
                          e.preventDefault();
                          setTeamModalOpen(true);
                        }}
                        className="w-inline-block transition-transform hover:scale-105"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/696de739d1351a361b9d1597_Logo_wbc_website.png"
                          loading="lazy"
                          alt="WBC Germany"
                        />
                      </a>
                      <a
                        href="#ueber-uns"
                        onClick={(e) => {
                          e.preventDefault();
                          setTeamModalOpen(true);
                        }}
                        className="w-inline-block transition-transform hover:scale-105"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/6578755e56e275fe188a612f_home_about_logo-01.webp"
                          loading="lazy"
                          alt="GEMMAF"
                          className="image-5"
                        />
                      </a>
                      <a
                        href="#ueber-uns"
                        onClick={(e) => {
                          e.preventDefault();
                          setTeamModalOpen(true);
                        }}
                        className="w-inline-block transition-transform hover:scale-105"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/6578755e1a7598090cafd681_home_about_logo-02.webp"
                          loading="lazy"
                          alt="AMMAG"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== INTERACTIVE KURSPLAN & PREISE SECTION (#kursplan / #preise) ==================== */}
        <section id="preise" className="bg-[#1c1c1c] text-white py-24 px-5 md:px-10">
          <div className="container-large">
            <div className="section_header">
              <h2 className="text-align-center">{t.scheduleHeading}</h2>
              <div className="brand-element is-offset">
                <div
                  data-element="brand-element-mask"
                  className="brand-element_mask is-dark"
                ></div>
              </div>
            </div>

            {/* Duration Switcher for Memberships */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {([
                { key: 'm12', label: lang === 'es' ? 'Contrato 12 Meses (Mejor Precio)' : lang === 'de' ? '12 Monate Laufzeit' : '12 Months Contract' },
                { key: 'm6', label: lang === 'es' ? 'Contrato 6 Meses' : lang === 'de' ? '6 Monate Laufzeit' : '6 Months Contract' },
                { key: 'm1', label: lang === 'es' ? 'Mensual Flexible' : lang === 'de' ? 'Monatlich kündbar' : 'Monthly Flexible' },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setContractDuration(tab.key)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    contractDuration === tab.key
                      ? 'bg-white text-[#1c1c1c]'
                      : 'bg-[#2a2a2a] text-white/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Official 4-Column Fenriz Membership Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRICE_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col bg-white text-[#1c1c1c] shadow-xl overflow-hidden border border-white/10"
                >
                  <div className="price_header relative py-7 px-4 bg-[#111111] text-white">
                    {tier.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#f9f383] via-[#f14553] to-[#19477e] text-black">
                        {tier.badge[lang]}
                      </span>
                    )}
                    <div className="price_heading-wrap">
                      <h3 className="!text-4xl">{tier.name}</h3>
                      <div className="brand-element is-small mt-1"></div>
                    </div>
                    <div className="price_price-wrap mt-2">
                      <span className="price_price !text-4xl">{tier.prices[contractDuration]}</span>
                      <span className="text-xs text-white/60 ml-1.5 uppercase">/ {lang === 'es' ? 'mes' : lang === 'de' ? 'Monat' : 'month'}</span>
                    </div>
                  </div>

                  <div className="price_features flex-1 justify-between">
                    <div className="w-full space-y-3">
                      {tier.features[lang].map((feat, i) => (
                        <div key={i} className="price_feaure-wrap">
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setTrialStep('select');
                        setTrialModalOpen(true);
                      }}
                      className="button is-fullwidth mt-6"
                    >
                      <div className="button_border"></div>
                      <div className="button_mask is-light"></div>
                      <div className="button_text">
                        {lang === 'es' ? 'Elegir Tarifa' : lang === 'de' ? 'Mitglied werden' : 'Select Plan'}
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Weekly Schedule (Kursplan) */}
            <div id="kursplan" className="mt-20 pt-12 border-t border-white/15">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#f9f383] font-bold">
                    {lang === 'es' ? 'MÁS DE 140 CLASES SEMANALES' : lang === 'de' ? 'ÜBER 140 KURSE PRO WOCHE' : 'OVER 140 WEEKLY CLASSES'}
                  </span>
                  <h3 className="mt-1 !text-4xl">
                    {lang === 'es' ? 'KURSPLAN / HORARIO SEMANAL' : lang === 'de' ? 'KURSPLAN BERLIN-KREUZBERG' : 'WEEKLY CLASS SCHEDULE'}
                  </h3>
                </div>

                {/* Discipline Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: lang === 'es' ? 'Todos' : lang === 'de' ? 'Alle Kurse' : 'All' },
                    { id: 'muay-thai', label: 'Muay Thai' },
                    { id: 'bjj', label: 'BJJ & No-Gi' },
                    { id: 'mma', label: 'MMA' },
                    { id: 'boxen', label: lang === 'es' ? 'Boxeo' : 'Boxen' },
                    { id: 'fitness', label: 'Fitness' },
                    { id: 'recovery', label: 'Recovery / Yoga' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setScheduleFilter(f.id)}
                      className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        scheduleFilter === f.id
                          ? 'bg-[#f9f383] text-[#1c1c1c]'
                          : 'bg-[#2a2a2a] text-white/80 hover:bg-[#3a3a3a]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
                {Object.entries(WEEKLY_SCHEDULE).map(([dayCode, slots]) => {
                  const filtered =
                    scheduleFilter === 'all'
                      ? slots
                      : slots.filter((s) => s.courseId === scheduleFilter);
                  return (
                    <div key={dayCode} className="bg-[#262626] flex flex-col rounded-sm overflow-hidden">
                      <div className="bg-black py-3 text-center border-b border-white/10">
                        <span className="font-['Kenyan_Coffee',sans-serif] text-2xl font-bold tracking-wider">
                          {dayCode}
                        </span>
                      </div>
                      <div className="p-2 space-y-2 flex-1">
                        {filtered.map((slot, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setTrialCourse(slot.title);
                              setTrialDay(`${dayCode} ${slot.time}`);
                              setTrialStep('select');
                              setTrialModalOpen(true);
                            }}
                            className="bg-[#f8f8f8] text-[#1c1c1c] p-2.5 rounded-sm cursor-pointer hover:bg-[#f9f383] transition-colors group"
                          >
                            <div className="flex items-center justify-between text-[11px] font-bold opacity-70">
                              <span>{slot.time}</span>
                              <span>{slot.duration}</span>
                            </div>
                            <div className="font-bold text-xs mt-1 leading-tight">{slot.title}</div>
                            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-black/10 text-[10px]">
                              <span className="uppercase font-medium">{slot.level}</span>
                              <span className="opacity-70">{slot.coach}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION DIVIDER 2 ==================== */}
        <section className="section_divider">
          <img
            src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/659e86652b31b7d74c1a5cc3_b48313b5f02687ff15abbc6225ad3fe8_home_section-divider_img-02.webp"
            loading="lazy"
            width="2561"
            height="1712"
            alt="Fenriz Ring & Mats"
            className="divider_img"
          />
        </section>

        {/* ==================== SECTION: EVENTS (#events) ==================== */}
        <section id="events" className="section_events">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="section_header">
                  <h2>{t.eventsHeading}</h2>
                  <div className="brand-element is-offset">
                    <div data-element="brand-element-mask" className="brand-element_mask"></div>
                  </div>
                </div>
                <div className="align-center-flex">
                  <div className="spacer-large"></div>
                  <div className="max-width-medium">
                    <p className="text-align-center">{t.eventsIntro}</p>
                  </div>
                  <div className="spacer-xxlarge"></div>
                </div>
              </div>

              <div className="event-cards-container">
                <div className="events_list-wrap w-dyn-list">
                  <div role="list" className="events_list is-grid w-dyn-items">
                    {EVENTS.map((ev) => (
                      <div key={ev.id} role="listitem" className="events_item is-card w-dyn-item">
                        <div
                          onClick={() => setSelectedEvent(ev)}
                          className="event-card_component cursor-pointer"
                        >
                          <div className="event-card_img-wrap">
                            <img
                              alt={ev.title}
                              loading="lazy"
                              src={ev.img}
                              className="event-card_img"
                            />
                          </div>
                          <div className="event-card_content">
                            <div className="event-card_header">
                              <h3 className="event_heading">{ev.title}</h3>
                              <div className="event_date flex items-center gap-2 mt-2">
                                <div className="event_date-icon">
                                  <img
                                    src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65787c5c7e6f422b0151567e_calendar-icon.svg"
                                    loading="lazy"
                                    alt=""
                                    className="icon-1x1-small"
                                  />
                                </div>
                                <div className="text-weight-bold text-style-allcaps">
                                  {ev.day[lang]}
                                </div>
                              </div>
                            </div>
                            <div className="event-card_bottom">
                              <p>{ev.shortDesc[lang]}</p>
                              <div className="event-card_button-wrap">
                                <span className="button is-secondary w-inline-block">
                                  <div className="button_border"></div>
                                  <div className="button_mask"></div>
                                  <div className="button_text">{t.learnMore}</div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="spacer-xxlarge"></div>
                <div className="align-center-flex">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(EVENTS[0])}
                    className="button w-inline-block"
                  >
                    <div className="button_border"></div>
                    <div className="button_mask is-light"></div>
                    <div className="button_text">{t.allEventsCta}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION DIVIDER 3 ==================== */}
        <section className="section_divider">
          <img
            src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/659e866503acf6ed2d4432f9_353433d42877ec1fc0358ade1ca962f9_home_section-divider_img-03.webp"
            loading="lazy"
            width="2561"
            height="1711"
            alt="Fenriz Community"
            className="divider_img"
          />
        </section>

        {/* ==================== SECTION: FAQ & CONTACT (#kontakt) ==================== */}
        <section id="kontakt" className="section_contact">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="w-layout-grid contact_layout">
                  <div className="contact_content">
                    <div className="section_header is-aligned-left">
                      <h2>{t.contactHeading}</h2>
                      <div className="brand-element is-offset">
                        <div
                          data-element="brand-element-mask"
                          className="brand-element_mask is-dark"
                        ></div>
                      </div>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="max-width-medium">
                      <p className="text-color-grey">
                        {t.contactText1}
                        <br />
                        <br />
                        {t.contactText2}
                        <br />
                        <br />
                        {t.contactText3}
                        <br />
                        <br />
                        {t.contactText4}
                      </p>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="contact_buttons">
                      <button
                        type="button"
                        onClick={() => setFaqModalOpen(true)}
                        className="button is-secondary is-small w-inline-block"
                      >
                        <div className="button_border"></div>
                        <div className="button_mask"></div>
                        <div className="button_text">{t.helpCenterBtn}</div>
                      </button>

                      <a
                        href="mailto:help@fenriz-gym.com"
                        className="button is-secondary is-small w-inline-block"
                      >
                        <div className="button_border"></div>
                        <div className="button_mask"></div>
                        <div className="button_text">{t.emailUsBtn}</div>
                      </a>

                      <a
                        href="mailto:contact@fenriz-gym.com"
                        className="button is-secondary is-small w-inline-block"
                      >
                        <div className="button_border"></div>
                        <div className="button_mask"></div>
                        <div className="button_text">{t.collabBtn}</div>
                      </a>
                    </div>
                    <div className="spacer-large"></div>
                  </div>

                  <div
                    id="w-node-_33de5d4b-5954-902a-f0e9-e78ef66c9063-9d642e2a"
                    className="contact_img-wrap"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Fenriz+Gym&destination_place_id=ChIJVzUaFCxOqEcRUzFtGuvFePI"
                      target="_blank"
                      rel="noreferrer"
                      className="w-inline-block group relative overflow-hidden"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/657881a31b436e00dea389a3_home_contact_map.webp"
                        loading="lazy"
                        width="450"
                        height="400"
                        alt="Fenriz Gym Lobeckstraße 36 Map"
                        className="img-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION: SHOP (#shop) ==================== */}
        <section id="shop" className="section_shop">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="section_header">
                  <h2>{t.shopHeading}</h2>
                  <div className="brand-element is-offset">
                    <div data-element="brand-element-mask" className="brand-element_mask"></div>
                  </div>
                </div>
                <div className="align-center-flex">
                  <div className="spacer-large"></div>
                  <div className="max-width-medium">
                    <p className="text-style-section">
                      {t.shopIntro1}
                      <br />
                      <br />
                      {t.shopIntro2}
                    </p>
                  </div>
                  <div className="spacer-large"></div>
                </div>
              </div>

              <div className="container-large">
                <div className="products_list-wrap w-dyn-list">
                  <div role="list" className="products_list w-dyn-items">
                    {SHOP_PRODUCTS.map((prod) => (
                      <div key={prod.id} role="listitem" className="products_item w-dyn-item">
                        <div
                          onClick={() => {
                            setSelectedProduct(prod);
                            setSelectedSize(prod.sizes[0]);
                          }}
                          className="product_component cursor-pointer"
                        >
                          <img alt={prod.name} loading="lazy" src={prod.img} />
                          <div className="text-center">
                            <div className="font-bold text-sm uppercase tracking-wider">
                              {prod.name}
                            </div>
                            <div className="text-xs text-[#80818f] mt-0.5">{prod.price},00 €</div>
                          </div>
                          <button
                            type="button"
                            className="button is-quaternary is-small w-button"
                          >
                            {t.orderNow}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="shop_button">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(SHOP_PRODUCTS[0]);
                      setSelectedSize(SHOP_PRODUCTS[0].sizes[0]);
                    }}
                    className="button w-inline-block"
                  >
                    <div className="button_border"></div>
                    <div className="button_mask is-light"></div>
                    <div className="button_text">{t.toShopBtn}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER (Exact Fenriz Structure) ==================== */}
      <footer className="footer_component">
        <div className="padding-global">
          <div className="footer_container">
            <div className="footer_layout">
              <div className="footer_logo-wrap">
                <img
                  src="https://cdn.prod.website-files.com/655f1188cf5e283d9d642d99/65782e12af1d447a19a36eac_fenriz-logo.svg"
                  loading="lazy"
                  alt="Fenriz Gym"
                  className="footer_logo"
                />
                <div className="brand-element is-small is-offset">
                  <div
                    data-element="brand-element-mask"
                    className="brand-element_mask is-dark"
                  ></div>
                </div>
              </div>

              <div className="spacer-xxlarge"></div>

              <div className="footer_top">
                <div className="footer_col">
                  <h5 className="footer_info-heading">{t.footerAddressTitle}</h5>
                  <p className="footer_address">
                    Fenriz Gym
                    <br />
                    Lobeckstraße 36
                    <br />
                    10969 Berlin
                  </p>
                </div>

                <div className="footer_col">
                  <h5 className="footer_info-heading">{t.footerHoursTitle}</h5>
                  <div className="footer_hours gap-x-4">
                    <div className="text-weight-light">{t.footerMonFri}</div>
                    <div className="text-weight-bold">07-22 Uhr</div>
                    <div className="text-weight-light">{t.footerSat}</div>
                    <div className="text-weight-bold">10-16 Uhr</div>
                    <div className="text-weight-light">{t.footerSun}</div>
                    <div className="text-weight-bold">10-17 Uhr</div>
                  </div>
                  <h5 className="heading-3 mt-3 opacity-70">{t.footerHolidayNote}</h5>
                </div>

                <div className="footer_col">
                  <h5 className="footer_info-heading">FENRIZ BERLIN</h5>
                  <p className="footer_address text-xs opacity-75">
                    1.500 m² Martial Arts
                    <br />
                    Moritzplatz · Kreuzberg
                    <br />
                    Est. 2010
                  </p>
                </div>
              </div>

              <div className="spacer-large"></div>

              <div className="footer_bottom">
                <div className="footer_links">
                  <button
                    type="button"
                    onClick={() => setFaqModalOpen(true)}
                    className="footer_link w-inline-block cursor-pointer"
                  >
                    <div>{t.navHelp}</div>
                    <div className="nav_link-underline"></div>
                  </button>
                  <a href="#kurse" className="footer_link w-inline-block">
                    <div>{t.navCourses}</div>
                    <div className="nav_link-underline"></div>
                  </a>
                  <a href="#events" className="footer_link w-inline-block">
                    <div>{t.navEvents}</div>
                    <div className="nav_link-underline"></div>
                  </a>
                  <a href="#preise" className="footer_link w-inline-block">
                    <div>{t.navPrices}</div>
                    <div className="nav_link-underline"></div>
                  </a>
                  <a href="#ueber-uns" className="footer_link w-inline-block">
                    <div>{t.navAbout}</div>
                    <div className="nav_link-underline"></div>
                  </a>
                  <a href="#kursplan" className="footer_link w-inline-block">
                    <div>{t.navSchedule}</div>
                    <div className="nav_link-underline"></div>
                  </a>
                  <a href="#shop" className="footer_link w-inline-block">
                    <div>{t.navShop}</div>
                    <div className="nav_link-underline"></div>
                  </a>
                </div>

                <div className="footer_copyright">
                  <div className="text-weight-light text-size-small opacity-60">
                    Copyright Fenriz Trainingszentrum GmbH 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== MODAL 1: COURSE DETAIL ==================== */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-[#1c1c1c] text-white max-w-3xl w-full overflow-hidden shadow-2xl border border-white/15 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full brand-gradient"></div>
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 text-white flex items-center justify-center hover:bg-[#f14553] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 relative min-h-[280px]">
                <img
                  src={selectedCourse.imgColor}
                  alt={selectedCourse.title[lang]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f9f383]">
                    {selectedCourse.scheduleSummary[lang]}
                  </span>
                  <h3 className="mt-1 !text-5xl">{selectedCourse.title[lang]}</h3>
                  <p className="text-sm text-white/70 font-medium mt-1">
                    {selectedCourse.subtitle[lang]}
                  </p>
                  <p className="text-sm text-white/85 mt-4 leading-relaxed">
                    {selectedCourse.description[lang]}
                  </p>

                  <div className="mt-5">
                    <div className="text-xs uppercase tracking-wider text-white/50 font-bold mb-2">
                      {lang === 'es' ? 'Niveles & Clases' : lang === 'de' ? 'Kurs-Level' : 'Class Levels'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCourse.levels.map((lvl) => (
                        <span
                          key={lvl}
                          className="px-2.5 py-1 text-xs font-bold bg-white/10 text-white"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/75 space-y-1.5">
                    <div>
                      <strong className="text-white uppercase">Coaches: </strong>
                      {selectedCourse.coaches.join(', ')}
                    </div>
                    <div>
                      <strong className="text-white uppercase">
                        {lang === 'es' ? 'Equipamiento: ' : 'Equipment: '}
                      </strong>
                      {selectedCourse.equipment[lang]}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const cTitle = selectedCourse.title[lang];
                      setSelectedCourse(null);
                      setTrialCourse(cTitle);
                      setTrialStep('select');
                      setTrialModalOpen(true);
                    }}
                    className="button is-secondary"
                  >
                    <div className="button_border"></div>
                    <div className="button_mask"></div>
                    <div className="button_text">{t.trialCta}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL 2: PROBETRAINING (CLASE DE PRUEBA) ==================== */}
      {trialModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setTrialModalOpen(false)}
        >
          <div
            className="bg-[#e8e8e8] text-[#1c1c1c] max-w-2xl w-full p-6 md:p-10 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-2 brand-gradient"></div>
            <button
              type="button"
              onClick={() => setTrialModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {trialStep === 'select' ? (
              <div>
                <h2 className="!text-5xl">{t.trialHeading}</h2>
                <div className="brand-element is-small mt-1 mb-6"></div>

                {/* Fenriz 1-2-3 Step Guide (.nav-box-list) */}
                <ul className="nav-box-list nav-box-yellow my-6">
                  <li>
                    <h4 className="text-base font-bold uppercase">
                      {lang === 'es'
                        ? 'Elige tu disciplina y horario'
                        : lang === 'de'
                        ? 'Kurs & Termin auswählen'
                        : 'Select your discipline & slot'}
                    </h4>
                    <p className="text-xs text-[#1c1c1c]/80 mt-1">
                      {lang === 'es'
                        ? 'Ven 20 minutos antes del inicio. Te prestamos guantes o kimono sin coste en tu primera sesión.'
                        : 'Komm bitte 20 Minuten vor Kursbeginn vorbei. Leih-Equipment gibt es vor Ort.'}
                    </p>
                  </li>
                  <li>
                    <h4 className="text-base font-bold uppercase">
                      {lang === 'es'
                        ? 'Entrena con nuestro equipo en Kreuzberg'
                        : lang === 'de'
                        ? 'Trainiere mit unserer Community'
                        : 'Train with our Kreuzberg coaches'}
                    </h4>
                    <p className="text-xs text-[#1c1c1c]/80 mt-1">
                      Lobeckstraße 36, 10969 Berlin (U8 Moritzplatz).
                    </p>
                  </li>
                </ul>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setTrialStep('Confirmed');
                  }}
                  className="space-y-4 mt-6 bg-white p-5 shadow"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">
                        {lang === 'es' ? 'Disciplina' : 'Kurs'}
                      </label>
                      <select
                        value={trialCourse}
                        onChange={(e) => setTrialCourse(e.target.value)}
                        className="w-full border border-black/20 px-3 py-2 text-sm bg-[#f8f8f8]"
                      >
                        <option value="Muay Thai">Muay Thai (Beginners / All Levels)</option>
                        <option value="BJJ">BJJ Gi / No-Gi Fundamentals</option>
                        <option value="MMA">MMA Basics</option>
                        <option value="Boxen">Boxeo / Boxen Fundamentals</option>
                        <option value="Fitness">Fighter Conditioning & Fitness</option>
                        <option value="Recovery">Yoga for Fighters</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">
                        {lang === 'es' ? 'Día preferido' : 'Wunschtermin'}
                      </label>
                      <select
                        value={trialDay}
                        onChange={(e) => setTrialDay(e.target.value)}
                        className="w-full border border-black/20 px-3 py-2 text-sm bg-[#f8f8f8]"
                      >
                        <option value="Lunes 17:00">Lunes / Montag · 17:00</option>
                        <option value="Martes 17:30">Martes / Dienstag · 17:30</option>
                        <option value="Miércoles 17:00">Miércoles / Mittwoch · 17:00</option>
                        <option value="Jueves 17:30">Jueves / Donnerstag · 17:30</option>
                        <option value="Sábado 10:30">Sábado / Samstag · 10:30</option>
                        <option value="Domingo 11:00">Domingo / Sonntag · 11:00 (Intro)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">
                        {lang === 'es' ? 'Tu Nombre' : 'Dein Name'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Weber"
                        value={trialName}
                        onChange={(e) => setTrialName(e.target.value)}
                        className="w-full border border-black/20 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">E-Mail</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@berlin.de"
                        value={trialEmail}
                        onChange={(e) => setTrialEmail(e.target.value)}
                        className="w-full border border-black/20 px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <button type="submit" className="button is-fullwidth mt-4">
                    <div className="button_border"></div>
                    <div className="button_mask is-light"></div>
                    <div className="button_text">
                      {lang === 'es'
                        ? 'CONFIRMAR CLASE DE PRUEBA GRATUITA'
                        : lang === 'de'
                        ? 'KOSTENLOSES PROBETRAINING BUCHEN'
                        : 'CONFIRM FREE TRIAL SESSION'}
                    </div>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto bg-[#1c1c1c] text-[#f9f383] flex items-center justify-center rounded-full mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="!text-4xl">
                  {lang === 'es'
                    ? '¡PLAZA RESERVADA EN FENRIZ GYM!'
                    : 'PROBETRAINING BESTÄTIGT!'}
                </h3>
                <p className="text-sm mt-3 max-w-md mx-auto">
                  <strong>{trialName || 'Fighter'}</strong>, hemos registrado tu sesión de{' '}
                  <strong>{trialCourse}</strong> ({trialDay}) en Lobeckstraße 36, 10969 Berlin.
                </p>
                <button
                  type="button"
                  onClick={() => setTrialModalOpen(false)}
                  className="button mx-auto mt-6"
                >
                  <div className="button_border"></div>
                  <div className="button_mask is-light"></div>
                  <div className="button_text">Cerrar</div>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== MODAL 3: UNSER TEAM (TRAINERS) ==================== */}
      {teamModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setTeamModalOpen(false)}
        >
          <div
            className="bg-[#1c1c1c] text-white max-w-5xl w-full p-6 md:p-10 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 brand-gradient"></div>
            <button
              type="button"
              onClick={() => setTeamModalOpen(false)}
              className="sticky top-2 float-right z-10 w-10 h-10 bg-white text-black flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="section_header is-aligned-left mb-8">
              <h2>UNSER TEAM · COACHES</h2>
              <div className="brand-element is-small mt-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRAINERS.map((tr) => (
                <div
                  key={tr.id}
                  className="bg-[#262626] overflow-hidden flex flex-col border border-white/10"
                >
                  <div className="h-72 overflow-hidden relative">
                    <img
                      src={tr.img}
                      alt={tr.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 flex gap-1.5">
                      {tr.disciplines.map((d) => (
                        <span
                          key={d}
                          className="px-2 py-0.5 text-[10px] font-bold uppercase bg-black/85 text-[#f9f383]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="!text-3xl">{tr.name}</h3>
                      <div className="text-xs font-bold uppercase text-[#f14553] mt-0.5">
                        {tr.role[lang]}
                      </div>
                      {tr.beltImg && (
                        <img
                          src={tr.beltImg}
                          alt="BJJ Black Belt"
                          className="h-5 mt-2 object-contain"
                        />
                      )}
                      <p className="text-xs text-white/75 mt-3 leading-relaxed">{tr.bio[lang]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL 4: EVENT DETAIL ==================== */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-[#1c1c1c] text-white max-w-xl w-full overflow-hidden shadow-2xl border border-white/15 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full brand-gradient"></div>
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/80 text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedEvent.img}
              alt={selectedEvent.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-xs font-bold uppercase text-[#f9f383]">
                <Calendar className="w-4 h-4" />
                <span>{selectedEvent.day[lang]}</span>
                <span>·</span>
                <Clock className="w-4 h-4" />
                <span>{selectedEvent.time}</span>
              </div>
              <h3 className="mt-2 !text-4xl">{selectedEvent.title}</h3>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">
                {selectedEvent.fullDesc[lang]}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span>
                  <strong className="text-white">Coach:</strong> {selectedEvent.coach}
                </span>
                <span>
                  <strong className="text-white">Level:</strong> {selectedEvent.level}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = selectedEvent.title;
                  setSelectedEvent(null);
                  showToast(`Inscripción confirmada para: ${title}`);
                }}
                className="button is-secondary is-fullwidth mt-6"
              >
                <div className="button_border"></div>
                <div className="button_mask"></div>
                <div className="button_text">
                  {lang === 'es' ? 'INSCRIBIRSE AL EVENTO' : 'JETZT ANMELDEN'}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL 5: SHOP PRODUCT QUICK ORDER ==================== */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-[#e8e8e8] text-[#1c1c1c] max-w-2xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-white p-8 flex items-center justify-center">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="max-h-72 object-contain"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f14553]">
                  FENRIZ MERCH · KREUZBERG
                </span>
                <h3 className="mt-1 !text-4xl">{selectedProduct.name}</h3>
                <div className="text-xs text-[#80818f] mt-1">{selectedProduct.category[lang]}</div>
                <div className="font-['Kenyan_Coffee',sans-serif] text-3xl font-bold mt-3">
                  {selectedProduct.price},00 €
                </div>
                <p className="text-xs text-[#1c1c1c]/80 mt-3 leading-relaxed">
                  {selectedProduct.desc[lang]}
                </p>

                <div className="mt-5">
                  <div className="text-xs font-bold uppercase mb-2">
                    {lang === 'es' ? 'Talla' : 'Größe'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 text-xs font-bold border cursor-pointer transition-colors ${
                          selectedSize === sz
                            ? 'bg-[#1c1c1c] text-white border-[#1c1c1c]'
                            : 'bg-white text-[#1c1c1c] border-black/20'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const pName = selectedProduct.name;
                  setSelectedProduct(null);
                  showToast(`${pName} (${selectedSize}) añadido al pedido`);
                }}
                className="button is-fullwidth mt-6"
              >
                <div className="button_border"></div>
                <div className="button_mask is-light"></div>
                <div className="button_text">{t.orderNow}</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL 6: FAQ & HELPCENTER ==================== */}
      {faqModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFaqModalOpen(false)}
        >
          <div
            className="bg-[#1c1c1c] text-white max-w-2xl w-full p-6 md:p-10 shadow-2xl relative border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 brand-gradient"></div>
            <button
              type="button"
              onClick={() => setFaqModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-white text-black flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="!text-4xl">FENRIZ HELPCENTER · FAQ</h2>
            <div className="brand-element is-small mt-1 mb-6"></div>

            <div className="space-y-4 text-sm">
              <div className="bg-[#262626] p-4">
                <h4 className="font-bold text-[#f9f383] text-base">
                  {lang === 'es'
                    ? '¿Necesito experiencia previa para empezar?'
                    : 'Brauche ich Vorerfahrung für das Probetraining?'}
                </h4>
                <p className="text-white/80 text-xs mt-1 leading-relaxed">
                  {lang === 'es'
                    ? 'No. Nuestras clases Basic e Intro están diseñadas específicamente para principiantes absolutos. Nuestros entrenadores te guiarán paso a paso.'
                    : 'Nein! Unsere Basic- und Intro-Kurse richten sich speziell an Einsteiger:innen ohne Vorkenntnisse.'}
                </p>
              </div>
              <div className="bg-[#262626] p-4">
                <h4 className="font-bold text-[#f9f383] text-base">
                  {lang === 'es'
                    ? '¿Qué debo llevar a mi primera clase de prueba?'
                    : 'Was muss ich zum ersten Training mitbringen?'}
                </h4>
                <p className="text-white/80 text-xs mt-1 leading-relaxed">
                  {lang === 'es'
                    ? 'Ropa deportiva cómoda sin cremalleras metálicas, una botella de agua, chanclas para caminar fuera del tatami y una toalla. El material de contacto te lo prestamos gratis en recepción.'
                    : 'Bequeme Sportkleidung ohne Reißverschlüsse, Badelatschen für den Weg zur Matte, ein Handtuch und Wasser.'}
                </p>
              </div>
              <div className="bg-[#262626] p-4">
                <h4 className="font-bold text-[#f9f383] text-base">
                  {lang === 'es'
                    ? '¿Dónde está ubicado Fenriz Gym exactamente?'
                    : 'Wo befindet sich das Fenriz Gym?'}
                </h4>
                <p className="text-white/80 text-xs mt-1 leading-relaxed">
                  Lobeckstraße 36, 10969 Berlin-Kreuzberg (im Aufgang II, direkt am U-Bahnhof Moritzplatz · Linie U8).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
