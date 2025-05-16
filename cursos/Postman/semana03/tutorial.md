# Tutorial: Scripts en Postman

## Paso 1: Test básico
1. Realiza un `GET` a `https://jsonplaceholder.typicode.com/posts/1`.
2. En la pestaña "Tests", escribe:
```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
```

## Paso 2: Validar estructura

```javascript
pm.test("Tiene propiedad userId", function () {
  const jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property("userId");
});
```

## Paso 3: Validar tiempo de respuesta

```javascript
pm.test("Tiempo < 1000ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(1000);
});
```

## Paso 4: Pre-request Script con timestamp

```javascript
const now = new Date().toISOString();
pm.environment.set("timestamp", now);
```

## Paso 5: Validar lógica condicional

```javascript
const jsonData = pm.response.json();
if (jsonData.userId === 1) {
  pm.test("userId es 1", function () {
    pm.expect(jsonData.id).to.equal(1);
  });
}
```

## Resultado esperado

- Colección con scripts funcionales.
- Validaciones claras y mantenibles.
