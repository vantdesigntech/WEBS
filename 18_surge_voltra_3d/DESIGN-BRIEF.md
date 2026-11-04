# DESIGN BRIEF — VOLTRA X1 (3D WebGL Experience)

## 01 · Proyecto
- **Nombre del proyecto:** VOLTRA X1 — E-Bike de Montaña (3D Interactive Landing Page)
- **Tipo de web / sector:** Producto tecnológico / E-Bike de montaña de alto rendimiento en fibra de carbono (WebGL 3D Showcase & Pre-order)
- **Objetivo y público:** Presentar la VOLTRA X1 mediante una experiencia 3D inmersiva sincronizada con el scroll y captar reservas (`4.490 €`) de ciclistas de montaña y entusiastas de e-bikes premium.
- **Dirección visual general:** Tecnológica, industrial, oscura, cinematográfica y de alto impacto (Awwwards-level 3D WebGL showcase).

## 02 · Webs de referencia
1. **Surge — 3D Landing Page (Peach Worlds / Awwwards)**
   - **URL:** `https://surge.peachworlds.com/` (`https://www.awwwards.com/sites/surge-i-3d-landing-page`)
   - **Qué observar:** Arquitectura 3D WebGL completa (Three.js + Theatre.js + GSAP), cámara sincronizada con el scroll en 5 secciones (`#itpqzc` a `#itpqzc-2-2-2-2`), modelo 3D de bicicleta sobre roca con iluminación HDR de estudio, logotipo 3D en segundo plano, tarjetas flotantes de especificaciones y pantalla de carga circular.
2. **VOLTRA X1 — Surge Motion Electric (Lovable Repo)**
   - **URL / Ruta local:** `https://surge-motion-electric.lovable.app` / `E:\WEBS\surge-motion-electric`
   - **Qué observar:** Identidad de marca (`VOLTRA` / `VOLTRA X1`), narrativa y copy en español (*"Nacida para el sendero"*, *"Silenciosa por fuera. Salvaje por dentro."*, *"Motor central inteligente"*, *"Hecha para lo imposible"*, *"Domina cada terreno"*), especificaciones (`85 Nm`, `120 km`, `21 kg`, `160 mm`, `750 Wh`) y precio de reserva (`4.490 €`).

## 03 · Tipografías
- **Titulares y Display 3D:** `PP Neue Montreal` (`ppneuemontreal-variable.ttf`, `ppneuemontreal-medium.otf`, `64a7b8f2fb25ca3f9e8499ff-neuemontreal-regular.otf`) + Geometría industrial `VOLTRA` en SVG/GLB 3D.
- **Acento editorial:** `Juana Light Italic` (`fontspring-demo-juana-lightit.otf`).
- **Cuerpo y UI:** `PP Neue Montreal Regular` / `Inter` (`400, 500, 700`).

## 04 · Paleta de colores
- **Fondo Principal (`#06040A` / `#0D0F0C`):** Negro profundo de estudio 3D con atmósfera de iluminación volumétrica.
- **Texto Principal (`#FFFFFF` / `#F4F6F0`):** Blanco puro de alto contraste sobre el lienzo WebGL.
- **Acento VOLTRA (`#B8FF2C` / `oklch(0.88 0.22 128)`):** Verde lima eléctrico en detalles de telemetría, badges e indicadores interactivos.
- **Superficies UI (`#141414` / `#6B6B6B` / `rgba(20,20,20,0.82)`):** Píldoras de navegación traslúcidas y tarjetas técnicas con borde sutil `#6F6F6F`.

## 05 · Componentes, animaciones y efectos
1. **Loader Circular 3D (`#pwb-loading-wrap`):** Logotipo industrial `VOLTRA` + lema *"Silenciosa. Brutal. Eléctrica."* y anillo de progreso SVG sincronizado con la carga de modelos `.glb` y texturas `.hdr`.
2. **Escena 3D WebGL (`#ifb3` + `sceneState.json`):** Modelo 3D de la e-bike (`bike-optimised-c.glb`), entorno rocoso (`4k-rock-2.glb`), iluminación HDR y logotipo 3D (`voltralogo3d.glb`) generado a medida con las letras `VOLTRA` detrás de la bicicleta.
3. **Navbar Flotante (`#i6c84`):** Píldoras de navegación (`Diseño`, `Motor`, `Especificaciones`) con scroll suave a cada sección de cámara 3D y CTA `Reservar · 4.490 €`.
4. **Secciones sincronizadas con el Scroll (`uiState.json`):**
   - **Sección 1 (Hero):** `NACIDA PARA EL SENDERO` — *"Donde el diseño se une al dominio. VOLTRA X1: el futuro del sendero eléctrico."* + indicador `DESLIZA PARA DESCUBRIR`.
   - **Sección 2 (Diseño):** `DISEÑO EN CARBONO · SILENCIOSA Y SALVAJE` — Copy en 3 bloques animados con fade/slide describiendo el cuadro de carbono, motor central y geometría agresiva.
   - **Sección 3 (Geometría & Motor):** `MOTOR CENTRAL INTELigente` — *"Hecha para lo imposible"* + 2 tarjetas técnicas (`85 Nm · PAR MOTOR CENTRAL` / `750 Wh · BATERÍA` y `160 mm · DOBLE SUSPENSIÓN`).
   - **Sección 4 (Rendimiento & Autonomía):** `DOMINA CADA TERRENO` — *"120 km de pura adrenalina"* + vídeo en bucle de acción (`bikevidcompressedwebm.mp4`) + tarjeta de peso (`21 kg · CUADRO EN CARBONO`).
   - **Sección 5 (Reserva / CTA Final):** *"¿Listo para rodar? Siente la diferencia VOLTRA"* + formulario/modal interactivo de reserva + `PRECIO DE RESERVA: 4.490 €`.

## 06 · Capturas y archivos visuales
- `referencias/bike-hero.jpg`: Perfil de la e-bike VOLTRA X1 en estudio oscuro con acentos lima.
- `referencias/bike-detail.jpg`: Detalle del motor central y bielas.
- `referencias/bike-action.jpg`: Salto en sendero de montaña al atardecer.
- `referencias/union.png`: Referencia tipográfica del logotipo original.
- `referencias/group-1441.png`, `group-1442.png`, `group-1443.png`: Referencia de tarjetas de especificaciones flotantes.

## 07 · Requisitos e instrucciones
- **Qué debe hacer:** Conservar intacto el motor WebGL/Three.js y las trayectorias de cámara de `surge.peachworlds.com`, reemplazando toda la identidad (`SURGE` -> `VOLTRA` / `VOLTRA X1`, incluido el modelo 3D `voltralogo3d.glb` del fondo), el copy en español, las tarjetas de especificaciones (`85 Nm`, `120 km`, `21 kg`, `160 mm`) y el precio (`4.490 €`), además de hacer funcionales los botones de navegación y reserva.
- **Qué debe evitar:** No romper los IDs del DOM que `script.js` y `uiState.json` utilizan para las animaciones de scroll ni dejar textos residuales en inglés o de la marca antigua.
