# Tutorial Semana 3: Condiciones y Transformación de Datos

## 1. Usar `Set` para transformar la salida de una API

1. Nodo `HTTP Request` con:  
   `https://catfact.ninja/fact`
2. Añade un nodo `Set`.
3. Configura para renombrar el campo `fact` a `cat_fact` y añade una nueva propiedad:
   - `length` = `{{$json["cat_fact"].length}}`

## 2. Validar condiciones compuestas con `IF`

1. Añade un nodo `IF` después de `Set`.
2. Condición: `length > 80`.

## 3. Uso de `Function` para manipulación personalizada

1. Añade un nodo `Function` y escribe:
   ```js
   return items.map(item => {
     item.json.cat_fact = item.json.cat_fact.toUpperCase();
     return item;
   });
   ```

## 4. Uso de Switch para rutas múltiples

1. Crea un Switch para dividir la salida en tres rutas según longitud del cat_fact:
- < 50
- 50–100
- > 100
