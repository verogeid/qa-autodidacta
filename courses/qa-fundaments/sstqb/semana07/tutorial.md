# Tutorial Semana 7 - Integración con CI/CD

## 1. Introducción a CI/CD

**CI (Integración Continua)** es una práctica de desarrollo donde los desarrolladores integran su código en un repositorio compartido varias veces al día. El código se prueba automáticamente para detectar errores lo más temprano posible.

**CD (Entrega Continua)** lleva la CI un paso más allá, asegurando que el código esté siempre listo para ser desplegado a producción.

La integración de las pruebas automatizadas en estos flujos de trabajo permite detectar errores rápidamente y garantiza que cada cambio de código no rompa la aplicación.

## 2. Configuración de un Pipeline Básico CI/CD

Para integrar las pruebas automatizadas, necesitas configurar un pipeline CI/CD. En este tutorial, usaremos **GitHub Actions** como ejemplo.

1. **Crear un archivo de flujo de trabajo (workflow)**:
   En tu repositorio, crea una carpeta `.github/workflows/` y dentro de ella, un archivo `.yml` para definir el flujo de trabajo.

2. **Ejemplo de configuración básica en GitHub Actions**:

```yaml
name: Run Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

3. **Descripción de los pasos**:

- `actions/checkout@v2`: Extrae el código del repositorio.
- `actions/setup-node@v2`: Configura la versión de Node.js en el entorno.
- `npm install`: Instala las dependencias del proyecto.
- `npm test`: Ejecuta las pruebas definidas en el proyecto.

## 3. Integración de Pruebas Automatizadas en Pipelines

Una vez que el flujo de trabajo básico está configurado, debes asegurarte de que tus pruebas automatizadas se ejecuten en cada cambio. Esto se logra en el paso de "Run tests" de tu pipeline.

Si utilizas Cypress, por ejemplo, el paso para ejecutar las pruebas sería:

```yaml
      - name: Run Cypress tests
        run: npm run cypress:run
```

Si usas Jest o cualquier otra herramienta de pruebas, el comando adecuado para ejecutarlas será algo similar a npm test.

## 4. Estrategias para Manejar Fallos en el Pipeline de CI/CD

Cuando un pipeline de CI/CD falla, es crucial manejarlo de manera efectiva:

- **Notificaciones**: Configura notificaciones para recibir alertas cuando un trabajo falle. Esto puede ser mediante **Slack**, **Correo Electrónico** o **GitHub Notifications**.
- **Reintentos automáticos**: Algunas plataformas CI/CD permiten configurar reintentos automáticos para pruebas inestables.

## 5. Análisis y Reporte de Resultados de Pruebas en CI/CD

Una vez que las pruebas se ejecutan, es importante analizar los resultados. Puedes configurar herramientas como **Allure Reports** o **Cypress Dashboard** para generar reportes visuales que te ayuden a interpretar los resultados rápidamente.

### Ejemplo de reportes de Cypress con GitHub Actions

  ```yaml
      - name: Cypress Dashboard
        uses: cypress-io/github-action@v2
        with:
          record: true
          parallel: true
  ```

Este paso sube los resultados de Cypress a Cypress Dashboard, donde podrás visualizar los resultados detallados de tus pruebas.

## Resumen

Esta semana, aprendiste cómo integrar las pruebas automatizadas en un flujo de trabajo CI/CD, lo que permite ejecutar pruebas automáticamente en cada cambio y obtener reportes al instante.
