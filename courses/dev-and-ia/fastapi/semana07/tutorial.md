# Tutorial Semana 7: CI/CD, frontend minimalista con Vite + React y Lighthouse

En esta última semana aprenderemos a automatizar el flujo de trabajo con **CI/CD** usando GitHub Actions, a crear un frontend básico con **Vite y React**, y a evaluar la calidad del proyecto con **Lighthouse**.

---

## 1. CI/CD con GitHub Actions

CI/CD (Integración y Entrega Continua) permite que tu código se pruebe y despliegue automáticamente cuando haces cambios, asegurando calidad y rapidez.

### Ejemplo de workflow básico para pruebas automáticas:

```yaml
name: CI

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest
```

Este archivo se coloca en `.github/workflows/ci.yml` y hace que cada push a la rama main ejecute los tests automáticamente.

## 2. Frontend básico con Vite + React

*Vite* es un entorno de desarrollo rápido y *React* es una biblioteca para construir interfaces. Vamos a crear un frontend que consuma nuestra API.

### Pasos

1. Crear proyecto con Vite y React:

    ```bash
    npm create vite@latest frontend -- --template react
    cd frontend
    npm install
    npm run dev
    ```

2. Consumir la API con fetch:

    En `src/App.jsx` modifica para obtener datos de la API y mostrarlos:

    ```jsx
    import { useEffect, useState } from 'react'

    function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/items') // Cambia la ruta por la de tu API
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error('Error:', error))
    }, [])

    if (!data) return <div>Cargando...</div>

    return (
        <div>
        <h1>Datos de la API</h1>
        <ul>
            {data.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </div>
    )
    }

    export default App
    ```

    Este código muestra cómo hacer una petición GET a la API y renderizar la lista de resultados.

## 3. Auditoría con *Lighthouse*

*Lighthouse* es una herramienta integrada en *Chrome DevTools* para medir la calidad web.

Cómo usarla:

- Abre el frontend en Chrome.
- Abre *DevTools* (F12) y ve a la pestaña *"Lighthouse"*.
- Ejecuta la auditoría con las opciones recomendadas.
- Revisa resultados en rendimiento, accesibilidad, mejores prácticas y SEO.
- Aplica mejoras según las recomendaciones para optimizar tu app.

Al combinar CI/CD, un frontend funcional y auditorías de calidad, tendrás un proyecto profesional y listo para producción.
