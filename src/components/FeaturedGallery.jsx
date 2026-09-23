import styles from './FeaturedGallery.module.css'

const FEATURED = [
  { src: 'https://picsum.photos/seed/destacado1/900/900', alt: 'Trabajo destacado en madera 1' },
  { src: 'https://picsum.photos/seed/destacado2/900/900', alt: 'Trabajo destacado en madera 2' },
  { src: 'https://picsum.photos/seed/destacado3/900/900', alt: 'Trabajo destacado en madera 3' },
  { src: 'https://picsum.photos/seed/destacado4/900/900', alt: 'Trabajo destacado en madera 4' },
  { src: 'https://picsum.photos/seed/destacado5/900/900', alt: 'Trabajo destacado en madera 5' },
]

export default function FeaturedGallery() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-heading center">
          <h2>Trabajos destacados</h2>
        </div>
      </div>

      <div className={styles.masonry}>
        {FEATURED.map((item, i) => (
          <div key={item.src} className={`${styles.item} ${styles['item' + (i % 4)]}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
