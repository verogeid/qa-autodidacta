# Tutorial Semana 2: Automatización e Integración de APIs

## 1. Activar un flujo con un nodo `Cron`

1. Añade un nodo `Cron`.
2. Configúralo para que se dispare cada 15 minutos.

## 2. Peticiones encadenadas

1. Añade un `HTTP Request` al endpoint:  
   `https://api.publicapis.org/entries`
2. Añade un segundo `HTTP Request` al endpoint:  
   `https://catfact.ninja/fact`
3. Conecta ambos y verifica resultados.

## 3. Filtrar resultados con `IF`

1. Inserta un nodo `IF` entre la primera y segunda API:
   - Condición: `HTTPS` es igual a `true`.
   - Enlace solo desde la rama `true`.

## 4. Fusionar datos con `Merge`

1. Añade `Merge`.
2. Configura en modo *Combine* para unir las salidas de ambas APIs.
3. Visualiza el resultado final.

## 5. Alternativa con Webhook

1. Sustituye `Cron` por un nodo `Webhook`.
2. Ejecuta desde un navegador con una petición `GET` al webhook generado.
