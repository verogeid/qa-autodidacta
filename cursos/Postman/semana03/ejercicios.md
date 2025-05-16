# Ejercicios - Semana 3

## 1. Código de estado
Valida que la respuesta a `GET /posts/5` devuelve un 200.

## 2. Propiedades de la respuesta
Comprueba que la respuesta contiene `id`, `title`, `body`, `userId`.

## 3. Tiempo de respuesta
Verifica que cualquier request tarda menos de 800 ms.

## 4. Script condicional
Si el `userId` es menor que 5, el `id` debe ser menor que 50.

## 5. Pre-request Script
- Genera un timestamp en ISO y guárdalo en `{{created_at}}`.
- Usa `{{created_at}}` en el body de un `POST`.

## 6. Buenas prácticas
- Usa nombres claros en tus tests.
- No repitas código innecesario.

## Verificación
- Todos los tests deben ser verdes.
- Los scripts deben estar organizados y comentados (opcional).