# Ejercicios Semana 6

## Ejercicio 1: Subflujo de saludo

1. Crea un subflujo que reciba un nombre y devuelva un saludo:
   `"Hola, <nombre>! Bienvenido a n8n."`
2. Llama desde otro flujo y muestra el resultado.

## Ejercicio 2: Subflujo de validación

1. Crea un subflujo que reciba un JSON con campos obligatorios (`name`, `email`).
2. Devuelve error si falta alguno.
3. Usa `IF` y `Set` para indicar el resultado.

## Ejercicio 3: Mezcla de datos

1. Usa `Execute Workflow` para llamar a dos subflujos diferentes:
   - uno genera un cat fact,
   - otro devuelve un mensaje motivacional.
2. Combina ambos en un solo JSON con `Merge`.

## Extra: Parametrización avanzada

1. Crea un subflujo que reciba un endpoint como entrada.
2. Haz que lo consuma y devuelva el JSON.
3. Llama desde otro flujo con diferentes APIs públicas.