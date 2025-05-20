# Tutorial Semana 3 - Automatización con GitHub Actions

## 1. ¿Qué es CI/CD?

- **CI** (*Integración Continua*): ejecutar pruebas automáticamente cada vez que hay un cambio.
- **CD** (*Entrega/Despliegue Continuo*): automatiza el despliegue en producción o entornos intermedios.

## 2. GitHub Actions: primeros pasos

1. Crea un archivo `.github/workflows/ci.yml`.
2. Añade un flujo para validar código al hacer push:

```yaml
name: Lint and Test

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npx eslint .
      - run: npx prettier --check .
```

Haz un commit para activar el flujo.

## 3. Añadir tests con Jest

```bash
npm install --save-dev jest
```

Edita tu `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Crea un archivo `sum.test.js`:

```js
const sum = (a, b) => a + b;
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Ejecuta localmente:

```bash
npm test
```

Y en el workflow:

```yaml
- run: npm test
```

## 4. Bonus: badge de estado

En el README principal:

```markdown
![CI](https://github.com/tu-usuario/tu-repo/actions/workflows/ci.yml/badge.svg)
```

## Recursos

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Jest Docs](https://jestjs.io/docs/getting-started)
