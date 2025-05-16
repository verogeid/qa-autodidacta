Semana 15: Navegación programática y rutas protegidas

Vas a aprender a redirigir desde funciones y a proteger rutas según condiciones.

Escribe:

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')

  function handleLogin() {
    if (user === 'admin') {
      navigate('/privado')
    } else {
      alert('Usuario no válido')
    }
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}

function Privado() {
  return <h2>Zona protegida</h2>
}

function RutaProtegida({ children }) {
  const autorizado = true
  return autorizado ? children : <p>No autorizado</p>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Página pública</h1>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/privado"
          element={
            <RutaProtegida>
              <Privado />
            </RutaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

Explicación:

useNavigate permite cambiar de ruta por código.

RutaProtegida actúa como envoltorio que decide si se muestra el contenido o no.

Puedes usar esto para comprobar tokens, roles o permisos.

Resumen:

useNavigate permite redirecciones dinámicas.

Crea un componente envoltorio para proteger rutas de forma flexible.

