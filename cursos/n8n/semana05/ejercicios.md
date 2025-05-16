# Ejercicios Semana 5

## Ejercicio 1: Cat fact semanal

1. Usa `Cron` para ejecutar cada lunes a las 8:00.
2. Obtén un cat fact y guárdalo en un Google Sheet (opcional) o muestra con `Set`.

## Ejercicio 2: Webhook de saludo

1. Crea un `Webhook` que reciba un nombre como query param (`?name=Diego`).
2. Devuelve como respuesta: `"Hola, Diego. Buen día felino."`

## Ejercicio 3: Alerta por API

1. Usa `Polling Trigger` para monitorear:
   `https://api.publicapis.org/entries`
2. Si hay más de 1000 entradas, manda alerta por consola o en `Set`.

## Extra: Prueba de intervalo controlado

1. Crea un flujo que se dispare cada 30 minutos.
2. Añade lógica para que solo actúe si es día par (con `Function`).