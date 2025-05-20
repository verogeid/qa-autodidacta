# Soluciones Semana 7: CI/CD, frontend minimalista con Vite + React y Lighthouse

## 1. Workflow GitHub Actions

Un ejemplo básico de workflow puede ser:

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

Este workflow se ejecuta en cada push a main, instala dependencias y corre los tests.

## 2. Frontend con Vite y React

Un proyecto creado con `npm create vite@latest my-app -- --template react` permite crear un frontend rápido. Usando fetch o axios, puedes obtener datos de la API y mostrarlos en componentes React.

## 3. Auditoría con Lighthouse

Ejecutar Lighthouse desde Chrome DevTools te dará puntuaciones. Por ejemplo, `90/100` en rendimiento y `85/100` en accesibilidad.

## 4. Mejoras recomendadas

- Optimizar imágenes para mejorar el rendimiento.
- Añadir atributos ARIA para mejorar accesibilidad.
