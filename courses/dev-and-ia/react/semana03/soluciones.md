# Semana 03: soluciones

## Ejercicio 1 – Página Home con enlaces

```tsx
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
      <nav>
        <Link to="/about" className="text-blue-500">Acerca de</Link>
      </nav>
    </div>
  );
}
```

## Ejercicio 2 – Componente About
```tsx
export function About() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Sobre esta aplicación</h2>
      <p>Usamos React Router para gestionar las rutas.</p>
    </div>
  );
}
```

## Ejercicio 3 – Layout con rutas públicas y privadas

```tsx
import { Outlet, Link } from 'react-router-dom';

export function MainLayout() {
  return (
    <div>
      <nav className="bg-blue-500 text-white p-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { RequireAuth } from './components/RequireAuth';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

## Ejercicio 4 – Implementar RequireAuth

```tsx
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

export function RequireAuth({ children }: Props) {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
```
