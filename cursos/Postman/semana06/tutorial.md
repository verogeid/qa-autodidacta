# Tutorial: Análisis y depuración de resultados Postman

## Paso 1: Añadir logs de debug
En tus tests puedes incluir:
```javascript
console.log("Body:", pm.response.text());
```

## Paso 2: Mejorar aserciones

```javascript
pm.test("Status OK y campo 'name'", () => {
  pm.expect(pm.response.code).to.eql(200);
  pm.expect(pm.response.json()).to.have.property("name");
});
```

## Paso 3: Depurar errores

Cuando un test falle, revisa:

- Logs en consola (newman run ...)
- Reporte HTML generado
- Workflow logs en GitHub Actions

## Paso 4: Medir tiempos de respuesta

```javascript
pm.test("Tiempo < 500ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(500);
});
```

## Paso 5: Usar múltiples reporters

```yaml
newman run MiColeccion.json -r cli,html,json \
  --reporter-html-export report.html \
  --reporter-json-export report.json
```

## Resultado esperado

- Trazabilidad clara de errores.
- Métricas de rendimiento visibles.
- Tests robustos y fáciles de depurar.
