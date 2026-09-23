import useReveal from '../hooks/useReveal.js'
import styles from './About.module.css'

const FEATURES = [
  {
    title: 'Muebles a medida',
    text: 'Cada mueble se diseña y fabrica a partir de las medidas y necesidades reales del espacio.',
  },
  {
    title: 'Calidad y terminaciones',
    text: 'Materiales seleccionados y terminaciones prolijas en cada detalle del trabajo.',
  },
  {
    title: 'Diseños personalizados',
    text: 'Propuestas de diseño adaptadas al gusto y estilo de cada cliente.',
  },
]

export default function About() {
  const revealRef = useReveal()

  return (
    <section className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div ref={revealRef} className={`reveal ${styles.imageWrap}`}>
          <img
            src="https://picsum.photos/seed/taller-carpinteria/900/1100"
            alt="Trabajo artesanal en el taller de Carpintería Turco"
          />
        </div>

        <div className={styles.text}>
          <div className="section-heading">
            <h2>Sobre nosotros</h2>
            <p>
              En Carpintería Turco nos dedicamos a la fabricación de muebles y trabajos en
              madera a medida, combinando diseño, funcionalidad y calidad en cada proyecto.
            </p>
          </div>

          <ul className={styles.features}>
            {FEATURES.map((feature) => (
              <li key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
