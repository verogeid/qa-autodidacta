# Semana 03: soluciones

```tsx
// App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Inicio, Contacto, NotFound } from './pages';

export function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

```tsx
// Ruta protegida
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = false; // simulado
  return auth ? children : <Navigate to="/login" />;
}
```

```tsx
// Layout con rutas hijas
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <h1>Panel</h1>
      <Outlet />
    </div>
  );
}

// Tailwind aplicado
<form className="bg-gray-100 p-4 rounded shadow">
  <input className="block w-full mb-2" />
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
</form>
```