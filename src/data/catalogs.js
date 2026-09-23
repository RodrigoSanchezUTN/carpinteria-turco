/**
 * CATÁLOGO DE TRABAJOS
 * ---------------------------------------------------------
 * Para agregar un nuevo trabajo a una categoría existente,
 * simplemente agregá la ruta de la imagen al array "images"
 * de esa categoría.
 *
 * Para agregar una categoría nueva:
 * 1. Copiá uno de los objetos de abajo.
 * 2. Cambiá "id" (debe ser único, sin espacios, en minúsculas:
 *    se usa para la URL /catalogo/tu-id).
 * 3. Completá title, description, cover e images.
 * 4. Agregá el objeto al array CATALOGS.
 * No hace falta tocar ningún componente: las tarjetas y las
 * páginas de catálogo se generan solas a partir de este archivo.
 *
 * Las imágenes van en: src/assets/images/<categoria>/
 * (reemplazá los placeholders por las fotos reales del taller)
 */

export const CATALOGS = [
  {
    id: 'cocinas',
    title: 'Cocinas',
    shortTitle: 'Cocinas',
    tagline: 'Muebles de cocina a medida',
    description:
      'Muebles de cocina diseñados y fabricados a medida, adaptados a cada espacio y necesidad.',
    cover: 'https://picsum.photos/seed/cocinas0/900/700',
    images: [
      'https://picsum.photos/seed/cocinas1/900/700',
      'https://picsum.photos/seed/cocinas2/900/700',
      'https://picsum.photos/seed/cocinas3/900/700',
      'https://picsum.photos/seed/cocinas4/900/700',
    ],
  },
  {
    id: 'banos',
    title: 'Baños',
    shortTitle: 'Baños',
    tagline: 'Muebles de baño a medida',
    description:
      'Vanitorys y muebles de baño pensados para aprovechar cada espacio, en madera resistente a la humedad.',
    cover: 'https://picsum.photos/seed/banos0/900/700',
    images: [
      'https://picsum.photos/seed/banos1/900/700',
      'https://picsum.photos/seed/banos2/900/700',
      'https://picsum.photos/seed/banos3/900/700',
      'https://picsum.photos/seed/banos4/900/700',
    ],
  },
  {
    id: 'habitaciones',
    title: 'Habitaciones',
    shortTitle: 'Habitaciones',
    tagline: 'Placares y mobiliario a medida',
    description:
      'Placares, cabeceras y mobiliario para dormitorios, diseñados a medida para cada ambiente.',
    cover: 'https://picsum.photos/seed/habitaciones0/900/700',
    images: [
      'https://picsum.photos/seed/habitaciones1/900/700',
      'https://picsum.photos/seed/habitaciones2/900/700',
      'https://picsum.photos/seed/habitaciones3/900/700',
      'https://picsum.photos/seed/habitaciones4/900/700',
    ],
  },
  {
    id: 'aberturas',
    title: 'Aberturas',
    shortTitle: 'Aberturas',
    tagline: 'Puertas y ventanas en madera',
    description:
      'Puertas, ventanas y aberturas de madera fabricadas a medida, con terminaciones prolijas y duraderas.',
    cover: 'https://picsum.photos/seed/aberturas0/900/700',
    images: [
      'https://picsum.photos/seed/aberturas1/900/700',
      'https://picsum.photos/seed/aberturas2/900/700',
      'https://picsum.photos/seed/aberturas3/900/700',
      'https://picsum.photos/seed/aberturas4/900/700',
    ],
  },
  {
    id: 'varios',
    title: 'Varios',
    shortTitle: 'Varios',
    tagline: 'Otros trabajos en madera',
    description:
      'Otros proyectos y trabajos en madera realizados a medida, para necesidades particulares de cada cliente.',
    cover: 'https://picsum.photos/seed/varios0/900/700',
    images: [
      'https://picsum.photos/seed/varios1/900/700',
      'https://picsum.photos/seed/varios2/900/700',
      'https://picsum.photos/seed/varios3/900/700',
      'https://picsum.photos/seed/varios4/900/700',
    ],
  },
]

export function getCatalogById(id) {
  return CATALOGS.find((catalog) => catalog.id === id)
}
