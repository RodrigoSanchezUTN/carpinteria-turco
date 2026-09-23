import { Link } from 'react-router-dom'
import { CATALOGS } from '../data/catalogs.js'
import CatalogCard from './CatalogCard.jsx'
import styles from './CatalogsSection.module.css'

export default function CatalogsSection({
  limit,
  showAllLink = false,
  title = 'Nuestros trabajos',
  description = 'Conocé nuestros trabajos y encontrá inspiración para tu próximo proyecto.',
}) {
  const items = limit ? CATALOGS.slice(0, limit) : CATALOGS

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-heading center">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.grid}>
          {items.map((catalog) => (
            <CatalogCard key={catalog.id} catalog={catalog} />
          ))}
        </div>

        {showAllLink && (
          <div className={styles.moreWrap}>
            <Link to="/catalogos" className="btn btn-primary">
              Ver todos los catálogos
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
