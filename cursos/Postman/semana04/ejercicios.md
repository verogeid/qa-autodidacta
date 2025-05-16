# Ejercicios - Semana 4

## 1. Crear archivo JSON
Usa `data.json` con el siguiente contenido:
```json
[
  { "name": "Ana", "email": "ana@example.com" },
  { "name": "Luis", "email": "luis@example.com" }
]
```

## 2. Crear request POST dinámico

Usa {{name}} y {{email}} en el cuerpo del POST.

## 3. Validaciones personalizadas

Agrega un test que valide que la respuesta incluye el campo id.

## 4. Buenas prácticas

- Usa nombres claros en tus archivos.
- Evita mezclar datos inválidos si no son parte del test.


## 5. Ejecuta con Newman

Comprueba que se ejecutan todas las iteraciones con:

```bash
newman run MiColeccion.json -d data.json
```

## Verificación

- ¿Cada iteración usa correctamente sus datos?
- ¿Todos los tests pasan?
- ¿Los logs de Newman son claros?