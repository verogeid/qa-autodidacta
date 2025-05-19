# Tutorial – Semana 10

## Paso 1: Estructura base del proyecto

/src /css /html /assets /img /fonts /dist

## Paso 2: Configurar `prettier` y `stylelint`

```bash
npm install --save-dev prettier stylelint stylelint-config-standard
```

```css
Archivo .prettierrc:

{
  "singleQuote": true,
  "semi": false
}

Archivo .stylelintrc.json:

{
  "extends": "stylelint-config-standard"
}
```

## Paso 3: Validar HTML

```bash
npm install --save-dev html-validate
npx html-validate src/**/*.html
```

## Paso 4: Integración continua con GitHub Actions

Archivo .github/workflows/ci.yml:

```bash
name: HTML CSS CI

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npx html-validate src/**/*.html
      - run: npx stylelint "src/css/**/*.css"
```

## Paso 5: Deploy con GitHub Pages

En Settings > Pages: seleccionar rama y carpeta /dist
