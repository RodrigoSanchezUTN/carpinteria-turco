import { useState } from 'react'
import Lightbox from './Lightbox.jsx'
import styles from './Gallery.module.css'

export default function Gallery({ images, altPrefix }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button
            key={src}
            className={styles.item}
            onClick={() => setActiveIndex(i)}
            aria-label={`Ampliar imagen ${i + 1}`}
          >
            <img src={src} alt={`${altPrefix} ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
