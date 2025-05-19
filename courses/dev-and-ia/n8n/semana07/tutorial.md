# Tutorial Semana 7: Integración con GitHub y CI/CD

## 1. Crear un Webhook en GitHub

1. Ve a Settings > Webhooks de tu repo.
2. Añade un webhook que apunte al endpoint de n8n:
   `https://tu-n8n/webhook/github-events`
3. Selecciona evento `push` y marca formato JSON.

## 2. Configurar n8n para recibirlo

1. Crea un flujo con `Webhook` (POST, `/github-events`).
2. Añade nodo `Set` para registrar `repository.name`, `pusher.name`, `head_commit.message`.

## 3. Filtrar por rama

1. Usa `IF` para comprobar si `ref` termina en `/main`.
2. Solo si es `main`, continúa con una tarea automatizada (ej: `HTTP Request` o `Send Email`).

## 4. Publicar un resumen en Slack

1. Añade nodo `Slack` o `Webhook` con `POST`.
2. Envía un resumen:
   `"Nuevo push en {{repository.name}} por {{pusher.name}}: {{head_commit.message}}"`

## 5. Simular pipeline de validación

1. Añade paso con `Execute Workflow` que valide el payload.
2. Otro subflujo podría analizar el mensaje de commit y enviar alertas si contiene "FIXME".
