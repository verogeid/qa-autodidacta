# Tutorial Semana 10: Proyecto final y repaso

## 1. Repaso guiado

Revisa lo siguiente en tus flujos anteriores:

- ¿Estás usando `Set` o `Function` para limpiar y preparar datos?
- ¿Tienes `Error Trigger` o rutas de control de errores?
- ¿Tus flujos son reutilizables mediante Webhooks o subflujos?
- ¿Has registrado o reportado los resultados clave?
- ¿Usas nombres claros en nodos y variables?

## 2. Proyecto final sugerido

**Objetivo:** Automatizar el control de disponibilidad de una API y enviar reportes.

### Flujo general

1. `Cron`: Ejecuta cada 30 minutos.
2. `HTTP Request`: Verifica estado de la API.
3. `IF`: ¿Status = 200?
   - Sí: registrar éxito.
   - No: activar `Error Trigger` y notificar.
4. `Set`: Guardar resultado (hora, estado, mensaje).
5. `Google Sheets` o Notion: guardar registro.
6. Cada día, `Cron` genera resumen y lo envía por email.

## 3. Presentación del proyecto

- Documenta en `README.md` qué hace, qué nodos usa y qué problemas resuelve.
- Sube capturas de pantalla del flujo.
- Explica cómo configurarlo con tus propias credenciales.
