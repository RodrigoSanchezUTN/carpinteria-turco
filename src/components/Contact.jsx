import { useState } from 'react'
import { CATALOGS } from '../data/catalogs.js'
import { getWhatsappLink, getInstagramLink, SITE_INFO } from '../data/siteInfo.js'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const whatsappLink = getWhatsappLink()
  const instagramLink = getInstagramLink()

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: conectar con un servicio de envío de formularios (Formspree,
    // EmailJS, un backend propio, etc.) para que la consulta llegue por email.
    setSent(true)
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className="section-heading">
            <h2>¿Tenés un proyecto en mente?</h2>
            <p>
              Contanos qué necesitás y te asesoramos para encontrar la mejor solución para tu
              espacio.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={whatsappLink ?? '#'}
              className={`btn btn-primary ${!whatsappLink ? styles.disabled : ''}`}
              target={whatsappLink ? '_blank' : undefined}
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={instagramLink ?? '#'}
              className={`btn btn-outline ${!instagramLink ? styles.disabled : ''}`}
              target={instagramLink ? '_blank' : undefined}
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          <ul className={styles.info}>
            <li>{SITE_INFO.email || '[Completar: email de contacto]'}</li>
            <li>{SITE_INFO.address || '[Completar: dirección]'}</li>
            <li>{SITE_INFO.hours || '[Completar: horarios de atención]'}</li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {sent ? (
            <p className={styles.success}>
              ¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad.
            </p>
          ) : (
            <>
              <div className={styles.field}>
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone">Teléfono</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="category">Categoría de interés</label>
                <select id="category" name="category" defaultValue="">
                  <option value="" disabled>
                    Seleccioná una categoría
                  </option>
                  {CATALOGS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="4" required />
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar consulta
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
