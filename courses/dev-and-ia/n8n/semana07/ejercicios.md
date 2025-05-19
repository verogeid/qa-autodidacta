# Ejercicios Semana 7

## Ejercicio 1: Webhook de push

1. Crea un flujo que reciba un evento `push` de GitHub.
2. Muestra en consola (`Set`) el nombre del repo y mensaje del último commit.

## Ejercicio 2: Notificación por PR

1. Crea otro webhook para evento `pull_request`.
2. Si la PR es hacia `main`, envía una alerta por Slack o por email.

## Ejercicio 3: Validación de commits

1. Crea un subflujo que analice el mensaje de commit.
2. Si contiene `"WIP"` o `"FIXME"`, registra un log con `Set` y marca como ejecución "crítica".

## Extra: Repos múltiples

1. Usa `Switch` para detectar de qué repo viene el push.
2. Ejecuta acciones distintas según el repo.
