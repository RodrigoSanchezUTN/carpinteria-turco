import { WOOD_COLORS } from '../data/woodColors.js'
import styles from './WoodColors.module.css'

export default function WoodColors() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-heading center">
          <h2>Colores y terminaciones</h2>
          <p>Elegí el tono y terminación que mejor se adapte a tu proyecto.</p>
        </div>

        <div className={styles.grid}>
          {WOOD_COLORS.map((wood) => (
            <div key={wood.id} className={styles.card}>
              <div className={styles.swatch}>
                <img src={wood.image} alt={wood.name} loading="lazy" />
              </div>
              <h3>{wood.name}</h3>
              {wood.description && <p>{wood.description}</p>}
            </div>
          ))}
        </div>

        <p className={styles.note}>
          * Tonos de referencia. Podrán variar levemente según la pieza de madera.
        </p>
      </div>
    </section>
  )
}
