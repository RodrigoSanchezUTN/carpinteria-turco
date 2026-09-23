import styles from './Process.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Idea',
    text: 'Nos contás qué necesitás y el espacio donde va a estar el mueble.',
  },
  {
    number: '02',
    title: 'Diseño',
    text: 'Definimos medidas, materiales y terminaciones según el proyecto.',
  },
  {
    number: '03',
    title: 'Fabricación',
    text: 'Fabricamos cada pieza en el taller, cuidando cada detalle.',
  },
  {
    number: '04',
    title: 'Instalación',
    text: 'Instalamos el trabajo terminado en tu espacio.',
  },
]

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-heading center">
          <h2>Del proyecto a la realidad</h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
