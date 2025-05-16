# Tutorial: Variables y entornos en Postman

## Paso 1: Crear variables de entorno
1. Abre la pestaña "Environments".
2. Crea uno nuevo llamado `Entorno JSONPlaceholder`.
3. Agrega una variable:
   - **Key**: `base_url`
   - **Initial/Current value**: `https://jsonplaceholder.typicode.com`
4. Usa `{{base_url}}` en tus requests.

## Paso 2: Agregar variables locales
1. En una request, haz clic en "Pre-request Script".
2. Agrega:
```javascript
pm.variables.set("userId", 10);
```

3. En la URL, usa `{{userId}}`.


## Paso 3: Crear una variable de colección

1. Edita tu colección y agrega:

- **Key**: `token`
- **Value**: `123456`

2. Desde un *Post-request Script*, accede a ella:

```javascript
pm.collectionVariables.get("token");
```

## Paso 4: Exportar un entorno

1. Haz clic en los tres puntos del entorno.

2. Selecciona "Export" y guárdalo como `entorno_jsonplaceholder.postman_environment.json`.

## Paso 5: Comprobar prioridad de variables

Crea una misma variable (api_key) en:

- Global
- Entorno
- Colección
- Script local

Haz una request que imprima su valor con:

```jsvascript
console.log(pm.variables.get("api_key"));
```

Observa cuál se usa.

## Resultado esperado

Requests que utilizan variables dinámicas de forma limpia.

Un entorno exportado y funcional.
