# Semana 7: Integración con GitHub y CI/CD

## Objetivos

- Integrar n8n con GitHub como fuente de datos o disparador.
- Automatizar flujos según acciones en repositorios.
- Enviar reportes o ejecutar tareas tras un push o pull request.
- Simular flujos CI/CD desde n8n.

## Contenido

- Conexión con GitHub: nodos `HTTP Request` y Webhooks.
- Creación de Webhooks en GitHub.
- Flujos reactivos a `push`, `pull_request`, `issues`.
- Reportes automáticos y notificaciones por email o Slack.
- Ejecución condicional basada en ramas o autores.

## Buenas prácticas

- Limitar flujos a repositorios y eventos necesarios.
- Validar payloads entrantes.
- Registrar toda ejecución con `Set` y `Webhook Response`.
