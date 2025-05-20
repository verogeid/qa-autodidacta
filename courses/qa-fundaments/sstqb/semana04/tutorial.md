# Tutorial Semana 4 - API Testing con Postman y Newman

## 1. ¿Qué es una prueba funcional?

Es aquella que valida que una funcionalidad completa (por ejemplo, "crear un usuario") funciona como debería, no solo sus partes internas.

## 2. ¿Qué es una API?

Una *API REST* permite que dos aplicaciones se comuniquen. Probaremos una API pública real: [https://reqres.in](https://reqres.in).

## 3. Usar Postman

1. Instala Postman o usa la versión web.
2. Importa esta colección desde JSON:
   [https://www.postman.com/collections/01a39f29e8b0d88cf4c5](https://www.postman.com/collections/01a39f29e8b0d88cf4c5)

3. Explora la llamada **"POST Create User"**. Ejecuta y analiza la respuesta.

## 4. Automatizar con Newman

Instala Newman:

```bash
npm install -g newman
```

Ejecuta tu colección exportada (ejemplo `reqres-collection.json`):

```bash
newman run reqres-collection.json
```

## 5. Integrar con *GitHub Actions*

En `.github/workflows/api-test.yml`:

```yaml
name: API Tests

on:
  push:
    paths:
      - 'reqres-collection.json'

jobs:
  run-api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install -g newman
      - run: newman run reqres-collection.json
```

Haz commit y comprueba los resultados en la pestaña Actions.

## 6. Ver errores en consola

*Newman* marca en rojo cualquier prueba que falle. Eso nos permite depurar y ajustar los casos.

## Recursos

- [Postman Docs](https://learning.postman.com/)
- [Newman Docs](https://www.npmjs.com/package/newman)
- API pública usada: [Reqres](https://reqres.in/)
