# Ejercicios Semana 8

## Ejercicio 1: Error controlado

1. Crea un flujo que intente llamar a una API no disponible.
2. Captura el error con `Error Trigger` y muestra en consola.

## Ejercicio 2: Notificación por email

1. Crea un subflujo que notifique por email si falla un flujo principal.
2. Incluye el nombre del flujo, del nodo y el error exacto.

## Ejercicio 3: Ruta alternativa

1. Diseña un flujo donde:
   - si `HTTP Request` falla, se ejecuta una tarea de respaldo.
   - si tiene éxito, continúa con procesamiento normal.

## Extra: Integración con herramienta externa

1. Crea una integración que envíe errores a Discord o Sentry.
2. Incluye campos: flujo, nodo, error, input recibido.
