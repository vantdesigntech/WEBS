# DESIGN BRIEF — KAFÉ · Roast & Dessert Chocolatier

> Generado conforme al flujo obligatorio [`creative_brief_builder.html`](file:///C:/Users/Jose/Downloads/creative_brief_builder.html) / [`SKILL.md`](file:///C:/Users/Jose/.agents/skills/creative-brief-builder/SKILL.md).

---

## 01 · Proyecto
- **Nombre del proyecto:** **KAFÉ — Roast & Dessert Chocolatier** (`14_kafe_chocolatier`)
- **Tipo de web / sector:** E-commerce interactivo 3D de barras de chocolate artesanal rellenas de espresso de especialidad, knafeh tostado y postres de autor (*The Original Coffee Chocolate*).
- **Objetivo y público:** Cautivar al usuario desde el primer segundo mediante una experiencia inmersiva digna de Awwwards: preloader con contador `0% → 100%`, cortina líquida de chocolate y espresso derretido con tipografía en pan de oro (`gold foil`), carrusel 3D interactivo de 12 barras envueltas sobre una bolsa de regalo 3D animada, vista detallada de producto con colores reactivos por barra y página de historia interactiva (*Our Story*).
- **Dirección visual general:** Lujo pop sensorial, maximalismo cromático gourmet, texturas de chocolate fundido brillante + papel de oro (`gold_foil.webp`), tipografía geométrica ultra-bold (`Sharp Sans No1`) combinada con caligrafía script expresiva (`Sydney Alternate`).

---

## 02 · Webs de referencia
1. **FIX Dessert Chocolatier (Awwwards Nominee / Site of the Day Reference)**
   - **URL Awwwards:** `https://www.awwwards.com/sites/fix-dessert-chocolatier`
   - **URL en vivo:** `https://www.fixchocolatier.com/`
   - **Páginas internas analizadas:**
     - Home & 3D Interactive Carousel (`https://www.fixchocolatier.com/`)
     - Product Detail View (`https://www.fixchocolatier.com/hero-bars/cant-get-knafeh-of-it`)
     - Collections Grid (`https://www.fixchocolatier.com/hero-bars`)
     - Our Story & Interactive Timeline (`https://www.fixchocolatier.com/our-story`)
   - **Qué observar y replicar 1:1:**
     - Secuencia de carga (`100%` $\rightarrow$ logo dorado $\rightarrow$ cortina líquida de chocolate y café cayendo con `"The ORIGINAL COFFEE CHOCOLATE"`).
     - Emblema superior central en forma de gota de chocolate/espresso derretido con reflejos especulares SVG y logotipo en relieve dorado.
     - Menú lateral izquierdo desplegable en tarjeta beige redondeada (`rounded-6xl`, `#DFD3C3`) con acordeón `COLLECTIONS` y enlaces de navegación.
     - Escena central 3D interactiva con bolsa de regalo abierta y las 12 barras flotantes en abanico/carrusel 3D con inclinación al pasar el ratón, arrastre horizontal, rueda del ratón y selector inferior tipo *ticker* con flechas circulares.
     - Vista completa de detalle de producto al hacer clic o bajar en la página, cambiando el color de fondo según la barra seleccionada (`#1b4877`, `#ecdab5`, `#c04152`, `#b1dffa`, `#d3a9f7`, `#ec900b`, `#dd4f65`, `#beddf2`, `#caadf2`, `#9ec9e3`, `#22755d`, `#3f8f5d`), texto en arco SVG animado, foto de la barra partida mostrando el relleno de knafeh y crema de espresso, sello circular giratorio con código QR y footer con marquesina continua.

---

## 03 · Tipografías
| Rol | Fuente | Archivo local (`/public/fonts/`) | Peso / Estilo | Uso principal |
| :--- | :--- | :--- | :--- | :--- |
| **Titulares Display / UI** | `SharpSansNo1_Extrabold` | `/fonts/SharpSansNo1_Extrabold.ttf` | `800` (ExtraBold Uppercase) | Titulares gigantes, nombres de barras en el ticker, menú, botones y números |
| **Cuerpo / Subtítulos** | `SharpSansNo1_Semibold` | `/fonts/SharpSansNo1_Semibold.ttf` | `600` (SemiBold) | Párrafos descriptivos, migas de pan, etiquetas secundarias, links de footer |
| **Acento Caligráfico / Script** | `SydneyAlternate_Regular` | `/fonts/SydneyAlternate_Regular.otf` | `400` (Script) | Palabras de acento manuscritas (`"The"`, `"It All Started With A Craving..."`, `"Enveloped In Our"`, `"The Journey"`) |

---

## 04 · Paleta de colores
| Nombre | HEX | Rol en el diseño |
| :--- | :--- | :--- |
| **Espresso Dark (`--color-dark-brown`)** | `#3B1707` | Fondo del preloader, textos oscuros sobre beige, bordes y contraste profundo |
| **Roasted Cocoa (`--color-brown`)** | `#69331A` | Color base del chocolate con café fundido, fondo de `Our Story` y emblema derretido |
| **Crema Beige (`--color-beige`)** | `#DFD3C3` | Fondo del cajón de navegación (`menu drawer`), tarjeta de cookies, botones y timeline |
| **Warm Cream (`--color-cream`)** | `#FFF5D6` | Texto claro principal sobre fondos oscuros o saturados |
| **Gold Foil (`--color-gold`)** | `#D3A84C` / `#FDE08D` | Textura de pan de oro en el logo y titular `"The ORIGINAL COFFEE CHOCOLATE"` |
| **Knafeh Espresso Blue** | `#1B4877` | Color reactivo de `"Can't Get Knafeh of Espresso"` |
| **Pecan Roast Sand** | `#ECDAB5` | Color reactivo de `"Catch Me If Pecan Roast"` |
| **Mocha Pretzel Crimson** | `#C04152` | Color reactivo de `"Mocha Pretzel Crunch"` |
| **Latte Cereal Sky** | `#B1DFFA` | Color reactivo de `"Cereously Latte Chewsy"` |
| **Biscotti Lavender** | `#D3A9F7` | Color reactivo de `"Mind Your Own Biscotti"` |
| **Mango Cold Brew Amber** | `#EC900B` | Color reactivo de `"Time to Mango Espresso"` |
| **Raspberry Jam Roast** | `#DD4F65` | Color reactivo de `"Espresso Jam or Go Nuts"` |
| **Baklawa Arabica Ice** | `#BEDDF2` | Color reactivo de `"Baklawa Arabica Future"` |
| **Honey Macchiato Lilac** | `#CAADF2` | Color reactivo de `"Honey Macchiato Comb"` |
| **White Brew Knafeh** | `#9EC9E3` | Color reactivo de `"White Brew Knafeh"` |
| **Midnight Espresso Knafeh** | `#22755D` | Color reactivo de `"Midnight Espresso Knafeh"` |
| **Cardamom Mahalabi Green** | `#3F8F5D` | Color reactivo de `"Cardamom Mahalabi Roast"` |

---

## 05 · Componentes, animaciones y efectos
1. **Preloader & Cortina Líquida de Chocolate-Espresso (`IntroDripCurtain`):**
   - Contador de `0%` a `100%` en `SharpSansNo1_Extrabold` con textura `logo-fill.webp` $\rightarrow$ aparición del sello dorado **KAFÉ ROAST CHOCOLATIER** $\rightarrow$ caída y elevación de ondas líquidas SVG multicapa con brillo especular y titular `"The ORIGINAL COFFEE CHOCOLATE"`. Incluye botón para repetir la animación de cortina líquida en cualquier momento.
2. **Header Fijo con Emblema de Chocolate Fundido (`MeltedLogoBadge`) y Botón Hamburguesa:**
   - Botón superior izquierdo con 3 líneas que se transforman en `X` al abrir el cajón de navegación.
   - Emblema central SVG (`viewBox="0 0 97 128"`) con forma orgánica de chocolate y café derretido (`#8E442C` $\rightarrow$ `#69331A`), brillos especulares blancos y máscara de pan de oro con el nuevo nombre **kafé · ROAST CHOCOLATIER**.
3. **Menú Lateral Redondeado (`NavigationDrawer`):**
   - Panel `bg-[#DFD3C3]` con esquinas `rounded-[3rem]`, acordeón interactivo `COLLECTIONS` (`Hero Espresso Bars`, `Midnight Roast Bars`, `Gifting & Sharing`, `Limited Reserve Bars`) y navegación directa entre el **Carrusel 3D**, **Detalle de Barra**, **Catálogo Completo (`Collections`)** y **Nuestra Historia (`Our Story`)**.
4. **Escena Interactiva 3D de Barras y Bolsa de Regalo (`InteractiveBarCarousel3D`):**
   - Abanico/carrusel 3D con perspectiva real (`perspective: 1400px`, `transform-style: preserve-3d`), física de arrastre, rueda del ratón, inclinación 3D reactiva al cursor (`rotateX`, `rotateY`, `translateZ`) con reflejo de brillo sobre los envoltorios reales (`/images/wrappers_new/*.webp`), halo cromático dinámico y bolsa 3D en la base con barras mini emergiendo.
5. **Selector Inferior de Barras (`BottomBarTicker`) y Tarjeta de Cookies (`CookiesCard`):**
   - Barra inferior con flechas izquierda/derecha, título gigante de la barra activa, subtítulo `"CLICK TO EXPLORE ESPRESSO BAR"` y tarjeta flotante `COOKIES PREFERENCE` (`ALLOW ALL` / `CUSTOMIZE`) en la esquina inferior derecha.
6. **Vista de Producto Completa (`ProductDetailSection`) y Vista `Our Story` (`OurStoryView`):**
   - Transición suave al color de la barra activa, sección editorial a dos columnas (`THE OG`), texto curvo animado sobre arco SVG (`<textPath>`), showcase de barra partida (`kunafa_details.webp`) con insignia giratoria `ORDER WITH CAREEM ·` + QR, caligrafía `"Enveloped In Our"` + `"SIGNATURE ESPRESSO & MILK CHOCOLATE BLEND"`, vista completa de `OUR STORY` con línea de tiempo interactiva (`2021–2026`) y footer con marquesina infinita.

---

## 06 · Capturas y archivos visuales
Guardados en [`referencias/`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias):
- [`shot_0_top.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/shot_0_top.png) — Preloader `100%` sobre `#3B1707`.
- [`shot_1.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/shot_1.png) — Logo en pan de oro sobre fondo oscuro.
- [`shot_2.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/shot_2.png) y [`home_clean.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/home_clean.png) — Cortina de chocolate líquido brillante con `"The ORIGINAL DUBAI CHOCOLATE"`.
- [`shot_3.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/shot_3.png) y [`home_hover_center.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/home_hover_center.png) — Bolsa de regalo 3D abriéndose con las barras emergiendo.
- [`shot_4.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/shot_4.png) y [`shot_5.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/shot_5.png) — Carrusel 3D de barras envueltas, ticker inferior y tarjeta de cookies.
- [`home_menu_open.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/home_menu_open.png) — Menú lateral beige redondeado abierto.
- [`real_product_scroll_1.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/real_product_scroll_1.png) a [`real_product_scroll_4.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/real_product_scroll_4.png) — Detalle de barra con fondo azul `#1B4877`, arco SVG, barra partida con relleno knafeh, QR giratorio y footer.
- [`story_top.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/story_top.png) a [`story_scroll_4.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/referencias/story_scroll_4.png) — Página `Our Story` completa con timeline interactivo.

---

## 07 · Requisitos e instrucciones
- **Qué hacer:**
  - Replicar con fidelidad 1:1 la estética, tipografías originales (`SharpSansNo1_Extrabold`, `SharpSansNo1_Semibold`, `SydneyAlternate_Regular`), texturas locales (`/images/wrappers_new/*.webp`, `/uploads/*.webp`, `/images/gold_foil.webp`) y animaciones de `fixchocolatier.com`.
  - Cambiar el nombre de la marca a **KAFÉ — Roast & Dessert Chocolatier** manteniendo toda la temática de café de especialidad + chocolate artesanal de Dubái (*The Original Coffee Chocolate*).
  - Escribir el código en **JSX nativo limpio** ([`src/BodyContent.tsx`](file:///E:/WEBS/WEBS%20PORTFOLIO/14_kafe_chocolatier/src/BodyContent.tsx)) compatible con `lovable-tagger` y verificar con Headless Edge Playwright (`brokenCount: 0`, `Page Errors: 0`).
- **Qué evitar:**
  - No dejar enlaces, fuentes ni imágenes dependientes de hotlinking bloqueado por Cloudflare; servir todos los recursos desde `/public/`.
  - No usar `dangerouslySetInnerHTML` para la interfaz principal para garantizar compatibilidad total con Visual Edits en Lovable.
