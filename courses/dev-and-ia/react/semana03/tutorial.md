# Semana 3 – Enrutamiento y diseño de vistas

## 1. Instalación de React Router

```bash
npm install react-router-dom
```

## 2. Rutas básicas

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

## 3. Rutas anidadas

```tsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
</Route>
```

## 4. Navegación

```tsx
import { Link } from 'react-router-dom'

<Link to="/about">Acerca de</Link>
```

## 5. Diseño con *TailwindCSS*

Instalación:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configura `tailwind.config.js` y usa las clases:

```tsx
<h1 className="text-2xl font-bold text-blue-600">Hola</h1>
```

## 6. Layouts y rutas privadas

Ejemplo simple de layout:

```tsx
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
```

Ruta privada (solo si hay autenticación):

```tsx
<Route path="/admin" element={isAuth ? <Admin /> : <Navigate to="/login" />} />
```

## 7. Repaso

Has aprendido a estructurar la navegación de tu app, organizar vistas y aplicar estilos modernos.