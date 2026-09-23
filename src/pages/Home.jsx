import Hero from '../components/Hero.jsx'
import CatalogsSection from '../components/CatalogsSection.jsx'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Hero />

      <CatalogsSection
        limit={3}
        showAllLink
        title="Nuestros trabajos"
        description="Cocinas, baños, habitaciones, aberturas y proyectos a medida. Conocé nuestro catálogo completo."
      />

      <section className={styles.cta}>
        <div className="container">
          <h2>¿Tenés un proyecto en mente?</h2>
          <p>Contanos qué necesitás y te asesoramos para encontrar la mejor solución.</p>
          <Link to="/contacto" className="btn btn-primary">
            Contactar
          </Link>
        </div>
      </section>
    </>
  )
}
