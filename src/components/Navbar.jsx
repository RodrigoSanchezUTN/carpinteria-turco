import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Catálogos', to: '/catalogos' },
  { label: 'Colores de madera', to: '/colores' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const solid = scrolled || !isHome || open

  return (
    <header className={`${styles.navbar} ${solid ? styles.solid : ''}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          Carpintería Turco
        </NavLink>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.toggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
