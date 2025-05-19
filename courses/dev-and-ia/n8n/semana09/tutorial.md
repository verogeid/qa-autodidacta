# Tutorial Semana 9: Análisis de resultados y reportes

## 1. Registrar salidas clave

1. Al final de un flujo, añade nodo `Set` que guarde los campos:
   - `timestamp`
   - `usuario`
   - `resultado` (éxito/error)
   - `mensaje`

2. Usa `Google Sheets` o `Notion` para almacenarlos.

## 2. Consolidar resultados

1. En flujo nuevo, usa `HTTP Request` o `Google Sheets` para leer los registros.
2. Agrupa por usuario o estado (`Function`, `Merge`).

## 3. Generar resumen diario

1. Programa ejecución diaria con `Cron`.
2. Lee los registros del día.
3. Usa `Set` para construir el resumen:
   - Total de ejecuciones.
   - Nº de errores.
   - Usuarios con más actividad.

## 4. Enviar por email o webhook

1. Añade nodo `Email` o `Slack`.
2. Usa como cuerpo el resumen generado.

## 5. Exportación a CSV

1. Usa nodo `Function` para transformar los datos en formato CSV.
2. Adjunta archivo en email o súbelo a servicio externo (WebDAV, FTP...).
