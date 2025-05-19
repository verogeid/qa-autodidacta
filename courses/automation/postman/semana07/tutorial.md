# Tutorial: Modularización de colecciones Postman

## Paso 1: Estructura de carpetas
Organiza así tu colección:
- Autenticación
- Usuarios
- Productos
Cada grupo debe ir en su folder.

## Paso 2: Reutilizar scripts comunes
Crea un script común en `Pre-request Script` a nivel de colección:
```javascript
pm.environment.set("timestamp", new Date().toISOString());
```

## Paso 3: Uso correcto de variables

- **global**: rara vez, para valores constantes.
- **environment**: tokens, URLs.
- **collection**: nombres de recursos, límites.

## Paso 4: Archivos de entorno (*.postman_environment.json)

Crea uno por entorno (dev, QA, prod).

## Paso 5: Separar lógica

- **Pre-request**: auth, timestamps, generación de IDs.
- **Test**: validaciones, almacenamiento de respuestas, logs.

## Paso 6: Externalizar datos

Usa archivos .csv o .json para test data:

```yaml
newman run MiColeccion.json -d data.json
```

## Resultado esperado

- Colección clara, organizada por carpetas.
- Scripts comunes centralizados.
- Envíos con datos variables sin tocar la interfaz.
