import { useEffect } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return

    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, images.length, onClose, onNavigate])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <button className={styles.close} onClick={onClose} aria-label="Cerrar">
        ✕
      </button>

      <button
        className={`${styles.nav} ${styles.prev}`}
        aria-label="Imagen anterior"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index - 1 + images.length) % images.length)
        }}
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt={`Imagen ampliada ${index + 1} de ${images.length}`}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className={`${styles.nav} ${styles.next}`}
        aria-label="Imagen siguiente"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index + 1) % images.length)
        }}
      >
        ›
      </button>
    </div>
  )
}
