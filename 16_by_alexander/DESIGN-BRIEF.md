# DESIGN-BRIEF — `_BY.ALEXANDER` / `66 GREENE ST SOHO NY` (`16_by_alexander`)

>Generado siguiendo el flujo obligatorio de [`creative_brief_builder.html`](file:///C:/Users/Jose/Downloads/creative_brief_builder.html), [`SKILL.md`](file:///C:/Users/Jose/.agents/skills/creative-brief-builder/SKILL.md) y el ecosistema de diseño en [`E:\WEBS\REPOS_DISENO`](file:///E:/WEBS/REPOS_DISENO) + curaduría conceptual de **Are.na** (`ad-fashion-editorial-bt2kenypnuy`).

---

## 01 · Proyecto

- **Nombre del proyecto:** `_BY.ALEXANDER` — `66 GREENE STREET SOHO NY` (`16_by_alexander`)
- **Tipo de experiencia:** Plataforma cultural híbrida ("URL = IRL") que fusiona publicación editorial de moda y música (*Cycles 01–08*), tienda conceptual de ediciones impresas y vinilos (*66 Greene Annual Print Magazine*, *000 Channel Black*, *Memories 4 Sale*, *Manifesto Books*), archivo sensorial (*Memory*) y retransmisión multicámara en vivo (*Live from 66 Greene St SoHo NY*).
- **Audiencia y tono:** Escena creativa de Lower Manhattan (SoHo, Nueva York) — fotógrafos, estilistas, músicos, directores de arte y coleccionistas. Tono brutalista-editorial, crudo, nocturno, técnico y cinematográfico.
- **Páginas / Vistas incluidas:**
  1. **`HOME` (`/`)**: Hero de vídeo en vivo B&W desde 66 Greene con marca de agua central `ALEXANDER (BY)` + barra inferior `LIVE FROM 66 GREENE ST SOHO NY`, seguido del feed intercalado de historias editoriales (*Cycle 07: Chi Is Ready For Her Encore*, *66 Greene Turns One*, *Aerosol Couture: SFX Artist MAB*) y lanzamientos físicos (*66 Greene Magazine - Tinashe*, *Vinyl Record: 000 Channel Black* con reproductor interactivo de 11 pistas).
  2. **`EDITORIAL` (`/editorial`)**: Archivo completo de ciclos editoriales (*Cycle 08: Audrey Nuna Is Rawdogging Life*, *Cycle 07: Chi Is Ready For Her Encore*, *Cycle 06: Shemar Pierre Is Built Different*, *66 Greene Turns One*, *Cycle 05: The City Has A New Starr — Ayra Starr*, *Cycle 04: The Anatomy of a Popstar — Tinashe*, *Cycle 03: Love Spells*, *Aerosol Couture — MAB*) con lector de artículos completo (entrevistas íntegras, créditos técnicos y galerías de alta resolución).
  3. **`STORE` (`/store`)**: Catálogo completo de ediciones físicas (*66 Greene Magazine — Alex / Ayra / Tinashe*, *000 Channel Black Vinyl*, *Memories 4 Sale Vinyl*, *Manifesto Large & Small Books*) con vista de detalle, acordeones técnicos (`DETAILS`, `SHIPPING`, `WEIGHT & SIZE`) y cajón de carrito interactivo (`CART (n)`).
  4. **`MEMORY` (`/memory`)**: Vista inmersiva con inversión cromática de cabecera en tono arena (`#f5f2ed`), vídeo de textura en bucle a pantalla completa (`memory_bg.mp4`) y tarjeta central de suscripción prioritaria en `#f5f2ed` sobre texto `#12100e`.
  5. **`ABOUT` (`/about`)**: Vídeo en vivo de 66 Greene + manifiesto institucional en dos columnas (`WE TREAT THE URL THE SAME AS THE IRL...`), dirección física (`66 GREENE ST, NEW YORK, NY 10012`), contacto (`INFO@BY-ALEXANDER.COM`) y enlaces directos.

---

## 02 · Webs de Referencia

| Referencia | URL | Qué tomamos exactamente |
| :--- | :--- | :--- |
| **Awwwards SOTD Nomination** | `https://www.awwwards.com/sites/by-alexander` | Estructura original premiada por *Unstated International*: barra inferior de ticker en vivo `#ecfd81` (`LIVE -> LIVE FROM 66 GREENE ST SOHO NY`), sistema de grillas de 6 columnas, vídeos de transición de ciclos y estética brutalista suiza. |
| **Web Oficial en Vivo** | `https://byalexander.com/` | Tokens CSS exactos de `entry.DDSHCI6f.css`, tipografías originales (`MediumLL` + `IBMPlexMono`), stack flotante derecho con selector de 4 cámaras (`1 2 3 4`) + reproductor Spotify `#1f1f1f` + tarjeta `STAY IN THE LOOP` en `#ecfd81`, y contenido real de Sanity CMS + Shopify. |
| **Are.na (`ad-fashion-editorial-bt2kenypnuy`)** | Canal curado `AD — FASHION EDITORIAL` | Concepto de contacto fotográfico (*contact sheet*), asimetría controlada entre retrato B&W de alto grano y fotografía de estudio saturada, y créditos técnicos en bloque monoespaciado. |
| **Awesome-Design-MD (`runwayml/DESIGN.md`)** | [`runwayml/DESIGN.md`](file:///E:/WEBS/REPOS_DISENO/awesome-design-md/design-md/runwayml/DESIGN.md) | Contraste cinematográfico *dark-first* (`#000000` puro con bordes de `1px solid rgba(255,255,255,0.12)` y jerarquía tipográfica de precisión). |

---

## 03 · Tipografías

Archivos originales descargados de `byalexander.com/_nuxt/` en [`public/fonts/`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/public/fonts):

| Rol | Familia (`@font-face`) | Archivo Local | Tamaño / Línea / Tracking | Uso en la interfaz |
| :--- | :--- | :--- | :--- | :--- |
| **Display & Titulares Editoriales** | `MediumLL` (`sans-serif`) | [`Medium-LL-Book.D4WlX7s_.otf`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/public/fonts/Medium-LL-Book.D4WlX7s_.otf) | `52px/52px` (`--text-2xl`), `22px/24px` (`--text-lgHeaders`), `12px/13px` (`--text-md`), `-0.01em` | Marca central `ALEXANDER (BY)`, titulares de reportajes (`CHI IS READY FOR HER ENCORE`), títulos de productos (`66 GREENE MAGAZINE - TINASHE`), créditos de revista y tracklist de vinilos. |
| **Técnica / Navegación / Metadatos** | `IBMPlexMono` (`monospace`, `"ss04"`) | [`IBMPlexMono-Regular.BCvwfN5l.ttf`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/public/fonts/IBMPlexMono-Regular.BCvwfN5l.ttf) | `12px/13px` (`--text-md`), `10px/11px` (`--text-sm`), uppercase | Header de 6 columnas, etiquetas de ciclo (`CYCLE 07`, `PROFILE STORY`), botones (`READ MORE`, `ADD TO CART`, `OUT OF STOCK`), cámaras `1 2 3 4`, widget `STAY IN THE LOOP` y footer legal. |
| **UI de Reproductor de Audio** | `SpotifyMixUI` | [`SpotifyMixUI-Regular.woff2`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/public/fonts/SpotifyMixUI-Regular.b2b52b63.woff2) / [`SpotifyMixUI-Bold.woff2`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/public/fonts/SpotifyMixUI-Bold.94c31d41.woff2) | `11px–14px` | Widget flotante de playlist `66 GREENE · _BY.ALEXANDER`. |

---

## 04 · Paleta de Colores

Tokens extraídos directamente de [`entry.DDSHCI6f.css`](file:///C:/Users/Jose/.gemini/antigravity-cli/brain/24137603-0a2b-4ca8-a523-c9e92e2e1f55/scratch/alexander_dump/entry.DDSHCI6f.css):

| Token CSS | Hex / Valor | Rol y Aplicación |
| :--- | :--- | :--- |
| `--color-almostBlack` | `#000000` | Fondo principal absoluto de toda la web (`Home`, `Editorial`, `Store`, `About`), creando un lienzo de cuarto oscuro para vídeo y fotografía. |
| `--color-yellow` | `#ECFD81` | **Acento Lima Ácido / Chartreuse:** Botón de colapso `[X]` del stack de widgets, pestaña activa de cámara (`1`), enlaces `READ MORE`, caja flotante `STAY IN THE LOOP` y barra inferior de ticker en vivo (`LIVE FROM 66 GREENE ST SOHO NY`). |
| `--color-sand` | `#F5F2ED` | Superficie cálida de papel archivo empleada en la cabecera y el modal central de la ruta `/memory`. |
| `--color-offBlack` | `#12100E` | Color de tinta oscura sobre fondos `--color-sand` (`#F5F2ED`) en `/memory`. |
| `--color-lightGrey` | `#BABABA` | Metadatos secundarios en la grilla de 6 columnas (`CYCLE 07`, `TEXT BY KAYLA CURTIS-EVANS`, `PHOTOGRAPHY BY FERNANDO TOMAZ`, precios `38.00 USD`). |
| `--color-darkGrey` | `#2F2F2F` | Controles secundarios, bordes sutiles y estados deshabilitados. |
| `--color-spotifyCard` | `#1F1F1F` | Superficie del reproductor integrado de la playlist `66 GREENE`. |

---

## 05 · Componentes y Efectos

1. **Grilla Suiza de 6 Columnas (`grid-cols-6 gap-x-[8px] px-[8px]`):**
   - Toda la arquitectura de cabecera y bloques de metadatos editoriales se alinea rigurosamente a 6 columnas con módulo base de `8px` (`--spacing-module-sm: .5rem`).
2. **Header Fijo Superior (`h-[21px]` / `1.3rem`):**
   - Col 1: `_BY.ALEXANDER` | Col 2: `EDITORIAL` | Col 3: `STORE` | Col 4: `MEMORY` | Col 5: `ABOUT` | Col 6: `SEARCH` + `CART (0)` (con buscador en vivo y cajón de carrito deslizable).
   - Cambia automáticamente a fondo `#F5F2ED` y texto `#12100E` al entrar en `MEMORY`.
3. **Stack Flotante Derecho (`w-[22rem] fixed top-[1.3rem] right-0 z-[1002]`):**
   - Botón cuadrado `#ECFD81` (`24x24px`) con icono `X` que rota `180deg` en hover y pliega/despliega la columna lateral (`translate-x-[calc(100%-1.5rem)]`).
   - **Monitor Multicámara 66 Greene (`1`, `2`, `3`, `4`):** Conmuta en tiempo real entre los 4 flujos de vídeo locales (`cam_1.mp4` a `cam_4.mp4`), con control `PAUSE/PLAY` y expansión a pantalla completa.
   - **Reproductor de Audio `66 GREENE` (`#1F1F1F`):** Sintetizador/reproductor Web Audio real integrado con las pistas de la playlist oficial (`1. TRUMPETS · _BY.ALEXANDER`, `2. Consumer · Blackhaine`, `3. +Star101 · Venna`, `4. Relax Baby Be Cool · Stereo Total`) para escuchar previsualizaciones sin depender de iframes bloqueados por terceros.
4. **Widget Flotante `STAY IN THE LOOP` (`#ECFD81`):**
   - Posicionado en `bottom-2 right-2 w-[calc(22rem-15px)]`, tipografía `IBMPlexMono` negra sobre fondo `#ECFD81`, input `YOUR@EMAIL.ADDRESS`, botón `JOIN` y botón `[X]` de cierre.
5. **Reproductor Interactivo de Vinilo (`000 CHANNEL BLACK`):**
   - En la sección de producto de `000 CHANNEL BLACK` (tanto en `Home` como en `Store`), cada una de las 11 pistas (`1. LE MERVEILLEUX RÉSUMÉ` ... `11. THE MONSTER & THE MUSE (FEAT. IRINA SHAYK)`) tiene botón `PLAY/PAUSE` interactivo.
6. **Barra Inferior Clásica Awwwards (`LIVE FROM 66 GREENE ST SOHO NY`):**
   - Ticker inferior en `#ECFD81` con indicador parpadeante `LIVE -> LIVE FROM 66 GREENE ST SOHO NY — NOW STREAMING` y selector rápido de cámara.

---

## 06 · Capturas y Archivos Visuales (`referencias/`)

Todos los archivos de referencia han sido descargados e inspeccionados en [`E:\WEBS\WEBS PORTFOLIO\16_by_alexander\referencias`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias):

- **Capturas y Vídeos Oficiales de Awwwards:**
  - [`awwwards_hero.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_hero.png), [`awwwards_typography.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_typography.png), [`awwwards_mobile.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_mobile.png)
  - [`awwwards_el1.mp4`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_el1.mp4), [`awwwards_el2.mp4`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_el2.mp4), [`awwwards_el3.mp4`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_el3.mp4), [`awwwards_el4.mp4`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/awwwards_el4.mp4)
- **Recorrido Completo en Vivo (`byalexander.com`):**
  - **Home:** [`route_home_00.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_home_00.png) a [`route_home_06.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_home_06.png)
  - **Editorial:** [`route_editorial_00.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_editorial_00.png) a [`route_editorial_07.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_editorial_07.png)
  - **Store:** [`route_store_00.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_store_00.png) a [`route_store_04.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_store_04.png)
  - **Memory:** [`route_memory_00.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_memory_00.png)
  - **About:** [`route_about_00.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_about_00.png) a [`route_about_03.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/16_by_alexander/referencias/route_about_03.png)

---

## 07 · Requisitos e Instrucciones (Qué Hacer y Qué Evitar)

### Qué Hacer (Obligatorio)
1. **Servir el 100% de las fuentes, fotografías y vídeos localmente** desde `public/fonts/` y `public/assets/` para garantizar carga instantánea y `0` imágenes o vídeos rotos.
2. **Respetar la proporción tipográfica micro-editorial (`12px/13px` y `10px/11px` uppercase)** en la navegación de 6 columnas y en las fichas técnicas de cada historia, combinada con titulares contundentes en `MediumLL` (`22px` a `52px`).
3. **Hacer todas las rutas y modales 100% funcionales:** cambiar entre `HOME`, `EDITORIAL`, `STORE`, `MEMORY` y `ABOUT`, abrir cualquier historia editorial para leer el artículo completo, reproducir pistas del vinilo `000 CHANNEL BLACK` y de la playlist `66 GREENE`, cambiar entre las 4 cámaras en vivo, buscar artículos/productos en `SEARCH` y añadir productos al carrito `CART (n)`.
4. **Incluir `ABRIR_WEB.bat` en el puerto `5188`** y verificar el build final con Playwright (`0` errores de consola, `0` imágenes rotas).

### Qué Evitar (Anti-Slop)
1. **Prohibido usar bordes redondeados genéricos (`rounded-2xl`), sombras difusas o degradados:** `_BY.ALEXANDER` utiliza geometría ortogonal pura (`border-radius: 0px`), salvo en el mini-reproductor de Spotify (`rounded-[12px]`).
2. **Prohibido sustituir las tipografías originales por Inter o Roboto:** usar siempre `@font-face` con `MediumLL` e `IBMPlexMono`.
3. **Prohibido dejar enlaces muertos o botones decorativos:** todos los enlaces `READ MORE`, `ADD TO CART`, `DETAILS`, `SHIPPING`, `WEIGHT & SIZE`, `SEARCH` y cámaras `1 2 3 4` deben responder con estado real.
