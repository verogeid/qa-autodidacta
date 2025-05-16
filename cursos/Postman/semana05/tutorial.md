# Tutorial: Postman + CI/CD con GitHub Actions

## Paso 1: Crear workflow `.github/workflows/newman.yml`
```yaml
name: Run Postman tests

on: [push, pull_request]

jobs:
  postman-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Newman
        run: npm install -g newman newman-reporter-html

      - name: Run tests
        run: >
          newman run MiColeccion.postman_collection.json
          -e MiAmbiente.postman_environment.json
          -r html --reporter-html-export newman/report.html

      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: reporte-postman
          path: newman/report.html
```

## Paso 2: Añadir archivos necesarios

- Tu colección y entorno en JSON.
- El workflow en .github/workflows.


## Paso 3: Comprobar resultado

1. Haz push al repositorio.
2. Ve a la pestaña "Actions".
3. Descarga el reporte HTML generado.

## Resultado esperado

- Tests ejecutados automáticamente en cada push/PR.
- Errores visibles en GitHub.
- Reporte descargable.
