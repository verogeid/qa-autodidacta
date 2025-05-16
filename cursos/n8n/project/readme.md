# Proyecto Final: Monitorización de API y Reporte Diario

Este proyecto automatiza la verificación del estado de una API y genera un reporte diario con los resultados obtenidos.

## Objetivo

Comprobar si una API está activa, registrar el estado cada 30 minutos y enviar un resumen diario con las métricas clave.

## Estructura

- `flow.json`: Export del flujo *n8n*.
- `screenshots/`: Capturas de pantalla del flujo funcionando.
- `config.env`: Variables necesarias (no incluido).
- `README.md`: Esta guía.

## Requisitos

- Cuenta en [n8n.cloud](https://n8n.cloud) o instancia local de n8n.
- Acceso a Google Sheets, Notion o base de datos para guardar resultados.
- Cuenta de correo o Slack/Discord para enviar reportes.
- Variables de entorno seguras para autenticación.

## Flujo general

1. Nodo `Cron`: Ejecuta cada 30 minutos.
2. Nodo `HTTP Request`: Verifica el endpoint `https://api.publicapis.org/entries`.
3. Nodo `IF`: Si el estado no es 200, activa notificación de error.
4. Nodo `Set`: Formatea resultado con fecha y estado.
5. Nodo de almacenamiento: Google Sheets o similar.
6. Nodo `Cron`: Ejecuta cada día a las 23:59.
7. Nodo `Google Sheets`/`HTTP Request`: Extrae resumen diario.
8. Nodo `Email`/`Slack`: Envía reporte.

## Instalación

1. Importa `flow.json` en tu instancia de n8n.
2. Crea las credenciales necesarias en `Credentials`.
3. Configura nodos con tus variables personales.
4. Activa el flujo.

## Personalización

Puedes adaptar este flujo para:
- Verificar múltiples APIs.
- Agregar alertas si hay fallos consecutivos.
- Integrar dashboards externos como Grafana o Metabase.

## Créditos

Curso autodidacta “*n8n desde 0*”, creado por Diego González Fernández.

