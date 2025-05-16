# Tutorial Semana 4: Manejo de Errores y Control de Flujo

## 1. Generar un error de forma controlada

1. Añade un nodo `HTTP Request` con un endpoint inválido.
2. Conecta un nodo `Error Trigger`.

## 2. Añadir control de errores con `IF`

1. Crea una petición a `https://api.publicapis.org/entries`.
2. Añade un nodo `IF` que compruebe si `statusCode !== 200`.
3. Si falla, envía el flujo por una ruta alternativa (`Set` con mensaje de error).

## 3. Recuperación con fallback

1. Si falla la API de cat facts, llama a esta alternativa:  
   `https://meowfacts.herokuapp.com/`
2. Usa un `IF` tras la primera petición para detectar el fallo.
3. Conecta la rama `false` a la segunda API como plan B.

## 4. Cortar el flujo en errores

1. Usa `Terminate` o `NoOp` tras detectar un error crítico.
2. Añade contexto con `Set` para mostrar causa del corte.
