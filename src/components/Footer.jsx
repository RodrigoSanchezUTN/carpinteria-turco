import { Link } from 'react-router-dom'
import { getInstagramLink, getWhatsappLink } from '../data/siteInfo.js'
import styles from './Footer.module.css'

export default function Footer() {
  const instagramLink = getInstagramLink()
  const whatsappLink = getWhatsappLink()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.brand}>Carpintería Turco</span>

        <nav className={styles.links}>
          <Link to="/">Inicio</Link>
          <Link to="/catalogos">Catálogos</Link>
          <Link to="/colores">Colores</Link>
          <Link to="/contacto">Contacto</Link>
          {instagramLink && (
            <a href={instagramLink} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
          {whatsappLink && (
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          )}
        </nav>

        <p className={styles.copy}>© 2026 Carpintería Turco. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
