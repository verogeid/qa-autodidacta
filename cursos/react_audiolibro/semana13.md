Semana 13: Rutas dinámicas y parámetros

Hoy verás cómo pasar parámetros en la URL y usarlos en los componentes.

Escribe:

import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
  { id: 3, nombre: 'María' }
]

function ListaUsuarios() {
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>
            <Link to={`/usuario/${u.id}`}>{u.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Usuario() {
  const { id } = useParams()
  const user = usuarios.find(u => u.id === parseInt(id))
  if (!user) return <p>Usuario no encontrado</p>
  return <h2>Hola, {user.nombre}</h2>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/usuario/:id" element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

Explicación:

useParams lee los valores desde la URL.

: id define que la ruta acepta un parámetro.

Resumen:

Las rutas dinámicas permiten mostrar contenido personalizado según el parámetro de la URL.

