/**
 * DATOS DE CONTACTO DE LA EMPRESA
 * ---------------------------------------------------------
 * Todos estos valores son PLACEHOLDERS. Completar con los
 * datos reales de Carpintería Turco antes de publicar.
 */

export const SITE_INFO = {
  whatsappNumber: '', // Ej: "5492610000000" (sin espacios ni símbolos, con código de país)
  instagramUser: '', // Ej: "carpinteria.turco"
  email: '', // Ej: "contacto@carpinteriaturco.com"
  address: '', // Ej: "Calle Falsa 123, Mendoza"
  hours: '', // Ej: "Lunes a viernes de 9 a 18hs"
}

export function getWhatsappLink(message = 'Hola! Quiero consultar por un trabajo.') {
  const number = SITE_INFO.whatsappNumber
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function getInstagramLink() {
  if (!SITE_INFO.instagramUser) return null
  return `https://instagram.com/${SITE_INFO.instagramUser}`
}
