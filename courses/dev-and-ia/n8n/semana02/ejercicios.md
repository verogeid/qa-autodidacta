# Ejercicios Semana 2

## Ejercicio 1: Automatización de salud

1. Crea un flujo que se ejecute cada hora.
2. Consulte `https://api.publicapis.org/entries?category=Health`.
3. Filtra solo aquellas con `Auth="apiKey"` y `HTTPS=true`.

## Ejercicio 2: Fact alternativo

1. Añade un nodo `IF` para detectar si la longitud del texto del fact > 100 caracteres.
2. Si es `true`, añade un `HTTP Request` a `https://meowfacts.herokuapp.com/`.

## Ejercicio 3: Combinar datos

1. Usa `Merge` para combinar el resultado del fact con los datos de la API de salud.
2. Muestra solo el `API`, `Description` y `cat_fact`.

## Extra: Automatiza desde Postman

1. Reemplaza `Cron` por un `Webhook`.
2. Llama al flujo desde Postman con método `GET`.
