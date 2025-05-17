# Tutorial: Enrutamiento y diseño de vistas

## 1. Instalación de *React Router* y *TailwindCSS*

```bash
yarn add react-router-dom
```

Sigue la guía oficial para Tailwind: <https://tailwindcss.com/docs/guides/vite>

## 2. Configuración de rutas básicas

Crea un archivo App.tsx:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 3. Rutas anidadas

```html
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

## 4. Rutas dinámicas

```html
<Route path="/user/:id" element={<UserPage />} />
```

## 5. *Layouts*

Crea un layout que contenga cabecera y navegación. Usa *Outlet* para representar subrutas.

## 6. Vistas protegidas (privadas)

Crea un componente *PrivateRoute* que verifique si el usuario está autenticado y redirige en caso contrario.

## 7. Aplicación de estilos con *TailwindCSS*

Usa clases como *flex*, *grid*, *p-4*, *bg-blue-500*, etc., para estilizar tus componentes rápidamente.

## Resultado esperado

Una SPA con navegación fluida, rutas anidadas y diseño responsive.
