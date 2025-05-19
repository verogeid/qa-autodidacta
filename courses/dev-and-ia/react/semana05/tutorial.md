# Tutorial: Testing, control de calidad y CI/CD

Durante esta semana, vas a asegurar que tu código no solo funcione, sino que además sea mantenible, testeable y de calidad profesional. Aprenderás a escribir pruebas unitarias, configurar reglas de estilo y automatizar todo el proceso mediante GitHub Actions.

---

## 1. Instalación de librerías de testing

Primero instala Jest y React Testing Library, dos herramientas fundamentales para pruebas en aplicaciones React.

```bash
yarn add -D jest @testing-library/react @testing-library/jest-dom
```

*Jest* será el motor de pruebas y *Testing Library* te permitirá simular el comportamiento del usuario de forma realista.


---

## 2. Escribe tu primer test

Crea un archivo `App.test.tsx` en la raíz de `src/` con este contenido:

```tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a welcome message', () => {
  render(<App />);
  expect(screen.getByText(/hello react/i)).toBeInTheDocument();
});
```

Este test verifica que el texto “Hello React” está presente al renderizar el componente principal.


---

## 3. *Linting* y formateo automático

Para detectar errores comunes de estilo, instala *ESLint* y *Prettier*:

```bash
yarn add -D eslint prettier eslint-plugin-react eslint-config-prettier
```

Luego crea un archivo `.eslintrc.cjs` con una configuración básica:

```json
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'prettier'],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};
```

Y un archivo .prettierrc:

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80
}
```

Ahora puedes ejecutar:

```bash
yarn eslint . --ext .tsx
yarn prettier --write .
```

Esto te ayuda a mantener el código legible y consistente.


---

## 4. Automatiza con *GitHub Actions*

Crea un archivo en `.github/workflows/ci.yml` para que GitHub ejecute tests automáticamente con cada *push*:

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: yarn install
      - run: yarn test
```

Cada vez que subas código, este flujo se activará para asegurarse de que tus pruebas pasan.


---

## 5. Verifica la cobertura

Asegúrate de que tus tests cubren el código importante. Añade este script en `package.json`:

```json
"scripts": {
  "test:coverage": "jest --coverage"
}
```

Y luego ejecuta:

```bash
yarn test:coverage
```

Esto generará un informe detallado en la carpeta `coverage/`, incluyendo líneas de código no cubiertas por pruebas.


---

## Resultado esperado

Al terminar este tutorial:

- Tienes pruebas básicas que validan tus componentes.
- Usas herramientas que mantienen tu código limpio.
- Tu repositorio está integrado con *GitHub Actions* para garantizar calidad continua.
- Puedes visualizar cuánta lógica está cubierta por tus tests.


Este es el paso donde tu proyecto empieza a parecerse a uno profesional. Tómate tu tiempo para entender cada parte.
