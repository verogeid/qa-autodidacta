Semana 14: Redirecciones y rutas anidadas

Aprenderás a redirigir rutas y organizar secciones internas con rutas hijas.

Escribe:

import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="perfil">Perfil</Link> |
        <Link to="configuracion">Configuración</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function Perfil() {
  return <p>Este es tu perfil</p>
}

function Configuracion() {
  return <p>Ajustes de la cuenta</p>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |
        <Link to="/panel">Panel</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Bienvenido</h1>} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/panel" element={<Dashboard />}>
          <Route path="perfil" element={<Perfil />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

Explicación:

Navigate permite redirigir de una ruta antigua a una nueva.

Outlet sirve para mostrar rutas hijas dentro de un componente.

Las rutas hijas organizan mejor secciones con contenido interno.

Resumen:

Usa Navigate para redirecciones.

Usa Outlet y rutas anidadas para dividir partes internas de tu app.
