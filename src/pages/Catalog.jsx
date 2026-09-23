import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getCatalogById } from '../data/catalogs.js'
import Gallery from '../components/Gallery.jsx'
import styles from './Catalog.module.css'

export default function Catalog() {
  const { slug } = useParams()
  const catalog = getCatalogById(slug)

  useEffect(() => {
    if (catalog) {
      document.title = `${catalog.title} | Carpintería Turco`
    }
  }, [catalog])

  if (!catalog) {
    return <Navigate to="/catalogos" replace />
  }

  return (
    <article className={`${styles.page} route-page`}>
      <header className={styles.header}>
        <div className="container">
          <Link to="/catalogos" className={styles.back}>
            ← Volver a catálogos
          </Link>
          <h1>{catalog.title}</h1>
          <p>{catalog.description}</p>
        </div>
      </header>

      <div className="container">
        <Gallery images={catalog.images} altPrefix={catalog.title} />

        <div className={styles.ctaWrap}>
          <Link to="/contacto" className="btn btn-primary">
            Consultar por este trabajo
          </Link>
          <Link to="/catalogos" className="btn btn-outline">
            Volver a catálogos
          </Link>
        </div>
      </div>
    </article>
  )
}
