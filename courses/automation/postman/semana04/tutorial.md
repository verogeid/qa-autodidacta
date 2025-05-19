# Tutorial: Colecciones avanzadas y Data-Driven testing

## Paso 1: Crear archivo de datos
1. En la raíz de la carpeta, crea `users.csv`:
```csv
name,email
Diego,diego@example.com
Laura,laura@example.com
```

## Paso 2: Crear un POST con variables

1. En el cuerpo del request usa:

```json
{
  "name": "{{name}}",
  "email": "{{email}}"
}
```

## Paso 3: Usar Postman Collection Runner

1. Abre la colección.

2. Haz clic en "Run".

3. Adjunta el archivo users.csv.

4. Ejecuta y observa los resultados por iteración.

## Paso 4: Validar respuesta

En "Tests", añade:

```javascript
pm.test("Status 201 creado", () => {
  pm.response.to.have.status(201);
});
```

## Paso 5: Ejecutar en Newman

1. Guarda tu colección como .json.

2. Usa:

```bash
newman run MiColeccion.postman_collection.json -d users.csv
```

## Resultado esperado

- Múltiples ejecuciones con datos distintos.
- Validaciones específicas por caso.
