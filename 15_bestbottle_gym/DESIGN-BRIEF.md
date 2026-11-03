# DESIGN BRIEF — 15_bestbottle_gym (`BEST BOTTLE BEST GYM` / `BBBG`)

## 01 Proyecto
- **Nombre del proyecto:** `BEST BOTTLE BEST GYM` (`BBBG`)
- **Tipo de web:** E-commerce / Tienda Dropshipping de alta conversión para botellas térmicas de gimnasio, shakers aislados al vacío y packs de hidratación deportiva.
- **Descripción del proyecto y objetivo:** Réplica 1:1 en arquitectura visual, estética Bauhaus geométrica, tipografías originales (`Helvetica Now Display` + `Manrope`), paleta de colores, cuadrículas con bordes de `1px solid #151515`, fichas de letras interactivas (`PRODUCTS` / `BUNDLES`), tarjetas 50/50 a sangre y personalizador interactivo sobre cielo azul con nubes de **Best Bean Best Cup** (`bestbeanbestcup.com.au`), adaptado íntegramente a botellas para gimnasio como producto estrella de dropshipping y **omitiendo por completo cualquier fotografía de personas reales**.

---

## 02 Webs de referencia
1. **Awwwards Submission:** `https://www.awwwards.com/sites/best-bean-best-cup`
2. **Sitio en vivo principal:** `https://bestbeanbestcup.com.au`
3. **Página About / Filosofía Bauhaus:** `https://bestbeanbestcup.com.au/pages/about-us`
- **Qué tomar de esta web:**
  - Barra superior negra (`FREE EXPRESS GYM SHIPPING OVER $99!`).
  - Header sobre crema (`#FCFBF7`) con monograma geométrico Bauhaus a la izquierda, píldora central blanca con bordes finos (`BOTTLES v`, `CRYO-LOCK™ TECH`, `OUR STORY`, `GYM BULK`, `SPECS`, `FAQ`), iconos circulares a la derecha y botón negro `Cart`.
  - Hero Bauhaus con titular masivo en mayúsculas, mosaico geométrico superior e inferior, y 4 columnas interactivas en colores primarios (`#F4D738`, `#F396A6`, `#009B4D`, `#FCFBF7`) mostrando las botellas térmicas en distintos acabados.
  - Cinta marquee amarilla (`#F4D738`) en movimiento continuo con iconos geométricos.
  - Cabeceras de sección formadas por celdas cuadradas con letras que giran al pasar el ratón (`[↓][P][R][O][D][U][C][T][S]` y `[↓][B][U][N][D][L][E][S]`), reemplazando las celdas donde aparecían fotos de personas reales por arte geométrico Bauhaus y diagramas técnicos de aislamiento térmico.
  - Cuadrícula 2 columnas a sangre (50/50) con fondos de colores intensos (`#272974`, `#E2BD1B`, `#A45B63`, `#9B4719`, `#EDEAE2`, `#40A4B8`), marca de agua geométrica en la base, etiqueta de especificación superior izquierda, botón `+` circular de compra rápida y botella con rotación 360° (`.gif`) en hover.
  - Sección destacada sobre fondo de cielo azul con nubes (`featured-background.webp`), marco central blanco fino con botella flotante, selector interactivo de 7 colores (`Khaki`, `Rouge`, `Coal`, `Bubblegum`, `Clover`, `Watermelon`, `Sherbet`) y selector de tamaño (`24 OZ / 710ML Bino Gym`, `32 OZ / 950ML Camino Pro`).
  - Sección de historia/filosofía con semicírculos concéntricos negros laterales y los 3 arcos Bauhaus (`HYDRATE`, `PERFORM`, `ENDURE`) de `aww_el3.png`.
  - Sección de reseñas 5.0 ★ con iniciales geométricas (cero rostros humanos) y mural Bauhaus `WHERE TO FIND BBBG` con emblemas de clubes de entrenamiento.
  - Modal promocional `15% OFF` (`LIFT HEAVY / SIP COLD`) con ilustración vectorial sin personas y píldora flotante inferior izquierda `GET 15% OFF`.

---

## 03 Tipografías
- **Títulos / Display:** `Helvetica Now Display` (`Regular 400`, `Medium 500`, `Bold 700`, `ExtBlk 900`), cargada localmente desde `/fonts/HelveticaNowDisplay-*.woff2`.
- **Cuerpo / Texto:** `Manrope` (`400`, `500`, `600`, `700`), cargada localmente desde `/fonts/Manrope.woff2`.
- **Monospace / Etiquetas técnicas:** `Helvetica Now Display` / `Manrope` con `letter-spacing: 0.06em` y `text-transform: uppercase`.

---

## 04 Paleta de colores
- **Fondo Principal (Warm Cream):** `#FCFBF7`
- **Fondo Secundario (Sand Grid):** `#EDEAE2`
- **Texto Principal (Carbon Black):** `#151515`
- **Texto Secundario (Warm Slate):** `#55534E`
- **Acento Primario (Bauhaus Yellow):** `#F4D738` / `#E2BD1B`
- **Acento Secundario (Sky Cobalt):** `#1E56A0`
- **Colores de Bloques de Producto y Mosaicos:**
  - Deep Navy: `#272974`
  - Mustard Gold: `#E2BD1B`
  - Dusty Rose: `#A45B63`
  - Terracotta Rust: `#9B4719`
  - Bauhaus Green: `#009B4D`
  - Bubblegum Pink: `#F396A6`
  - Aero Teal: `#40A4B8`
- **Colores Oficiales del Customizador de Botellas:**
  - `Khaki`: `#3B4928`
  - `Rouge`: `#6E2635`
  - `Coal`: `#262626`
  - `Bubblegum`: `#F094A8`
  - `Clover`: `#25965A`
  - `Watermelon`: `#D94E4E`
  - `Sherbet`: `#F28C38`

---

## 05 Componentes y efectos
1. **Header Sticky + Top Bar:** Top bar de envío gratuito con contador dinámico en el carrito + navegación en cápsula central.
2. **Hero Mosaico Bauhaus + 4 Columnas Interactivas:** Al hacer hover o clic sobre cualquiera de las 4 columnas de color, se previsualiza la botella en giro 360° y permite añadirla al carrito o saltar al customizador.
3. **Marquee Banner Amarillo (`#F4D738`):** Desplazamiento horizontal continuo con claims de dropshipping deportivo (`24H ICE-LOCK™ VACUUM INSULATION`, `316 SURGICAL STAINLESS STEEL`, `LEAK-PROOF GYM BAG GUARANTEE`).
4. **Celdas de Letras Flip (`PRODUCTS` & `BUNDLES`):** Cuadrícula con las imágenes originales `/assets/letter-*.png` que cambian a `/assets/flip-*.webp` al pasar el cursor.
5. **Grid 50/50 de Botellas y Packs de Gimnasio:** 6 tarjetas de producto + 3 tarjetas de bundles con cambio de imagen estática (`.png`) a rotación 360° (`.gif`) en hover, modal de vista rápida (`See more +`) y botón `+` de adición directa al carrito.
6. **Customizador Interactivo sobre Cielo y Nubes (`featured-background.webp`):** Selector en vivo de los 7 colores reales (`bottle-khaki`, `bottle-rouge`, `bottle-coal`, `bottle-bubblegum`, `bottle-clover`, `bottle-watermelon`, `bottle-sherbet`), selector de tamaño (`24 OZ / 710ML` vs `32 OZ / 950ML`), toggle `360° Spin` y compra rápida.
7. **Sección Filosofía & 3 Arcos Bauhaus (`aww_el3.png`):** Reproducción exacta de la sección crema con semicírculos laterales negros y los 3 arcos policromáticos Bauhaus.
8. **Popup `15% OFF` + Pill Flotante `GET 15% OFF` + Drawer de Carrito con Upsell.**

---

## 06 Capturas y archivos visuales
Guardados localmente en [`E:\WEBS\WEBS PORTFOLIO\15_bestbottle_gym\referencias`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias):
- [`aww_hero.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/aww_hero.png): Customizador de botella sobre cielo azul con nubes (`Khaki`, `Rouge`, `Coal`, `Bubblegum`, `Clover`, `Watermelon`, `Sherbet`).
- [`aww_el1.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/aww_el1.png): Detalle del selector de color y tamaño sobre fondo de nubes.
- [`aww_el2.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/aww_el2.png): Mosaico Bauhaus de entrada y cuadrícula de letras `PRODUCTS`.
- [`aww_el3.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/aww_el3.png): Los 3 arcos semicirculares Bauhaus (`PEOPLE` / `WORK` / `CHANGE`) sobre fondo crema con pill `GET 15% OFF`.
- [`live_00_top.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/live_00_top.png) a [`live_09_y6750.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/live_09_y6750.png), [`about_00_top.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/about_00_top.png) y [`about_01_mid.png`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/referencias/about_01_mid.png): Capturas completas del scroll en vivo.

---

## 07 Requisitos e instrucciones
- **Qué hacer:**
  - Mantener el 100% del layout, proporciones, tipografías (`Helvetica Now Display` + `Manrope`), paleta Bauhaus, animaciones de letras flip y customizador de colores de `bestbeanbestcup.com.au`.
  - Enfocar todos los textos, especificaciones, bundles, garantías y upsells como un **producto ganador de dropshipping de botellas para gimnasio** (envío rápido con tracking, packs de ahorro 2x/4x para parejas o amigos de entreno, retención térmica 24h frío para entrenamientos intensos, recubrimiento antideslizante Powder-Coat para agarre con manos sudadas).
  - Incluir [`ABRIR_WEB.bat`](file:///E:/WEBS/WEBS%20PORTFOLIO/15_bestbottle_gym/ABRIR_WEB.bat) en el puerto `5187`.
- **Qué evitar (Restricción crítica del usuario):**
  - **PROHIBIDO incluir fotos de gente real** (*"omite fotos de gente real,todo lo demas igual"*). Ninguna celda, banner, tarjeta ni reseña puede mostrar fotografías de personas; usar exclusivamente renders de botellas, ilustraciones vectoriales Bauhaus e iconos/monogramas geométricos.
