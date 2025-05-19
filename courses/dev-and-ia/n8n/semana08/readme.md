# Semana 8: Control de errores y depuración

## Objetivos

- Manejar errores de forma controlada en flujos.
- Registrar información útil para depurar fallos.
- Identificar cuellos de botella.
- Crear reportes de error automáticos.

## Contenido

- Uso del nodo `Error Trigger`.
- Captura de errores por nodo.
- Registro en logs internos o externos.
- Rutas de recuperación (`IF`, `Switch`, `Fallback`).
- Notificaciones automáticas por fallos.
- Envío de errores a servicios externos (Discord, Email, Sentry...).

## Buenas prácticas

- Documentar rutas de error esperadas.
- Usar nodos `Set` para marcar origen y tipo de error.
- Incluir contexto mínimo para entender el fallo.
- No silencies errores críticos sin revisión posterior.


