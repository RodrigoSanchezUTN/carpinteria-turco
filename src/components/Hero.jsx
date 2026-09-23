import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.image}
        src="https://picsum.photos/seed/hero-carpinteria/1600/1000"
        alt="Taller de Carpintería Turco, muebles de madera a medida"
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Carpintería Turco</h1>
        <p className={styles.subtitle}>Muebles a medida y trabajos en madera</p>

        <div className={styles.actions}>
          <Link to="/catalogos" className="btn btn-primary">
            Ver catálogos
          </Link>
          <Link to="/contacto" className="btn btn-outline">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  )
}
