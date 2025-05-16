# Tutorial Semana 5: Automatización y Triggers

## 1. Crear un flujo con `Cron`

1. Añade un nodo `Cron`.
2. Configúralo para que se ejecute todos los lunes a las 9:00.
3. Conecta un nodo `HTTP Request` hacia:
   `https://catfact.ninja/fact`

## 2. Crear un flujo con `Webhook`

1. Añade un nodo `Webhook`.
2. Configura método `GET`, path `/trigger-cat`.
3. Conecta a un `HTTP Request` hacia:
   `https://catfact.ninja/fact`
4. Añade un nodo `Respond to Webhook`.

## 3. Usar `Polling Trigger`

1. Añade `HTTP Request Trigger` (Polling).
2. Configura para llamar cada 5 min a:
   `https://api.publicapis.org/entries`
3. Filtra APIs por categoría `"Animals"` usando un nodo `IF`.

## 4. Controlar la frecuencia con `Interval`

1. Añade nodo `Interval`, cada 1 hora.
2. Conéctalo a cualquier flujo de prueba.
