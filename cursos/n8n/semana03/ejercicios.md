# Ejercicios Semana 3

## Ejercicio 1: Rutas por longitud

1. Crea un flujo que obtenga un `cat_fact`.
2. Usa `Switch` para redirigir según la longitud.
3. En cada ruta, añade un nodo `Set` que etiquete:
   - `"Corto"`, `"Medio"`, `"Largo"`

## Ejercicio 2: Normalización de estructura

1. Obtén datos de `https://api.publicapis.org/entries`.
2. Usa `Function` para transformar los objetos:
   - `API`, `Description` → `nombre_api`, `descripcion_api`
   - Añade una propiedad nueva: `categoria_procesada`

## Ejercicio 3: Validación antes de continuar

1. Llama a ambas APIs anteriores.
2. Antes de continuar, valida que:
   - El número de entradas sea > 0
   - El `cat_fact` no esté vacío
3. Si no se cumplen, termina el flujo con `NoOp` o `Empty`.

## Extra: Plantillas dinámicas

1. Usa expresiones con `{{$json}}` para generar un texto resumen como:
   - `"Hoy aprendimos que: {{cat_fact}}. También descubrimos la API: {{API}}."`
