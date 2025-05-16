Semana 12: Navegación con React Router

Aprenderás a usar React Router para crear rutas en tu app.

Escribe:

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Inicio() {
  return <h2>Página de inicio</h2>
}

function SobreMi() {
  return <h2>Sobre mí</h2>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/sobre-mi">Sobre mí</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

Explicación:

BrowserRouter habilita las rutas.

Link crea enlaces internos sin recargar la página.

Route muestra el componente correcto según la ruta.

Resumen:

React Router permite tener múltiples páginas en una SPA.

Es esencial para dividir tu app en secciones claras.