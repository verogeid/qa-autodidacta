# Tutorial Semana 8: Control de errores y depuración

## 1. Forzar un error

1. Crea un nodo `HTTP Request` con una URL inválida.
2. Ejecuta y observa el error.

## 2. Capturar error con `Error Trigger`

1. Crea un flujo nuevo con nodo `Error Trigger`.
2. Configura para que se active ante cualquier fallo.
3. Añade nodo `Set` que registre:
   - `workflow.name`
   - `node.name`
   - `error.message`

## 3. Notificar por error

1. Añade nodo `Email` o `Webhook` para enviar el error.
2. Usa este cuerpo:
   ```text
   Falla en {{workflow.name}} ({{node.name}}):
   {{error.message}}
   ```

## 4. Rutas alternativas

1. En flujo normal, usa IF tras nodo clave.
2. Si resultado es vacío o incorrecto, toma otro camino.

## 5. Logs detallados

1. Usa nodos Set y Merge para adjuntar contexto:

- fecha, hora, nombre de usuario, parámetros de entrada.

2. Guarda como JSON o envíalo como payload.

## 6. Simulación de recuperación

1. Simula un error en validación de datos.
2. Si es error de campo faltante, toma una ruta que notifica.
3. Si es un fallo del servidor, reintenta después de 5 segundos (Wait, Retry).
