import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Catalogos from './pages/Catalogos.jsx'
import Catalog from './pages/Catalog.jsx'
import Colores from './pages/Colores.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/catalogo/:slug" element={<Catalog />} />
          <Route path="/colores" element={<Colores />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
