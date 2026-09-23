import { Link } from 'react-router-dom'
import styles from './CatalogCard.module.css'

export default function CatalogCard({ catalog }) {
  return (
    <Link to={`/catalogo/${catalog.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={catalog.cover} alt={`Trabajos de ${catalog.title.toLowerCase()}`} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3>{catalog.title}</h3>
        <p>{catalog.tagline}</p>
        <span className={styles.link}>Ver catálogo</span>
      </div>
    </Link>
  )
}
