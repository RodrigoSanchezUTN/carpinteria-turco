# Carpintería Turco — sitio web

Sitio de presentación y catálogo hecho con **React + Vite + React Router**.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

El resultado queda en la carpeta `dist/`, lista para subir a cualquier hosting estático (Vercel, Netlify, Hostinger, etc.).

## Reemplazar las imágenes placeholder

Todas las fotos son **placeholders de color** generados automáticamente (dicen "placeholder - reemplazar") para que puedas ver el diseño funcionando. Hay que reemplazarlas por las fotos reales del taller, manteniendo el mismo nombre de archivo y carpeta:

```
src/assets/images/
├── hero/hero.jpg
├── nosotros/taller.jpg
├── cocinas/        (cover.jpg + cocina-1.jpg a cocina-4.jpg)
├── banos/           (cover.jpg + bano-1.jpg a bano-4.jpg)
├── habitaciones/    (cover.jpg + habitacion-1.jpg a habitacion-4.jpg)
├── aberturas/       (cover.jpg + abertura-1.jpg a abertura-4.jpg)
├── varios/          (cover.jpg + varios-1.jpg a varios-4.jpg)
├── madera/          (muestra-1.jpg a muestra-4.jpg)
└── destacados/      (destacado-1.jpg a destacado-5.jpg)
```

Simplemente reemplazá el archivo manteniendo el mismo nombre y todo se actualiza solo.

## Agregar un trabajo nuevo a una categoría existente

Abrí `src/data/catalogs.js`, buscá la categoría (por ejemplo `cocinas`) y agregá la ruta de la nueva imagen al array `images`:

```js
images: [
  '/src/assets/images/cocinas/cocina-1.jpg',
  '/src/assets/images/cocinas/cocina-2.jpg',
  '/src/assets/images/cocinas/cocina-nueva.jpg', // ← nueva imagen
],
```

Guardá la foto en `src/assets/images/cocinas/` con ese mismo nombre. La galería, el lightbox y la tarjeta se actualizan automáticamente, sin tocar ningún componente.

## Agregar una categoría de catálogo nueva

1. En `src/data/catalogs.js`, copiá uno de los objetos existentes dentro del array `CATALOGS`.
2. Cambiá el `id` (se usa para la URL, ej: `/catalogo/tu-id`), `title`, `description`, `cover` e `images`.
3. Creá la carpeta correspondiente en `src/assets/images/` con las fotos.

La tarjeta en "Nuestros trabajos" y la página `/catalogo/tu-id` se generan solas.

## Datos pendientes de completar

Antes de publicar el sitio, hay que completar estos datos reales de la empresa (hoy están vacíos a propósito, no se inventó ninguno):

- **`src/data/siteInfo.js`**: número de WhatsApp, usuario de Instagram, email, dirección y horarios.
- **`src/data/woodColors.js`**: nombres reales de los colores/terminaciones de madera que ofrece la carpintería, y sus fotos/muestras reales (hoy son placeholders `[Completar: nombre del color]`).
- El formulario de contacto (`src/components/Contact.jsx`) hoy solo muestra un mensaje de confirmación en pantalla; para que las consultas lleguen por email hay que conectarlo a un servicio como Formspree, EmailJS o un backend propio (hay un comentario `TODO` marcando dónde).

## Estructura del proyecto

```
src/
├── assets/images/       fotos organizadas por categoría
├── components/          componentes reutilizables (Navbar, Hero, Gallery, etc.)
├── pages/                Home.jsx y Catalog.jsx (catálogo dinámico por categoría)
├── data/                 catalogs.js, woodColors.js, siteInfo.js — toda la
│                         información editable del sitio vive acá
├── hooks/                useReveal.js (animación al hacer scroll)
├── App.jsx               rutas (React Router)
├── main.jsx              punto de entrada
└── index.css             tokens de diseño (colores, tipografía, espaciados)
```

## Rutas

- `/` — página principal (hero, nosotros, catálogos, colores, proceso, destacados, contacto)
- `/catalogo/cocinas`
- `/catalogo/banos`
- `/catalogo/habitaciones`
- `/catalogo/aberturas`
- `/catalogo/varios`
