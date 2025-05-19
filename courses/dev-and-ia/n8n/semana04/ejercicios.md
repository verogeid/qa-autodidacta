# Ejercicios Semana 4

## Ejercicio 1: Gestión de error simple

1. Crea un flujo que llame a un endpoint que no existe.
2. Añade un nodo `Error Trigger`.
3. Muestra en `Set` un mensaje del tipo: `"El endpoint está caído"`.

## Ejercicio 2: Validar datos antes de procesar

1. Llama a `https://api.publicapis.org/entries`.
2. Comprueba con `IF` que el número de resultados es > 5.
3. Si no lo es, detén el flujo con `Terminate`.

## Ejercicio 3: Fallback planificado

1. Intenta obtener un `cat_fact`.
2. Si falla, recupera uno desde `https://meowfacts.herokuapp.com/`.
3. Añade un nodo `Merge` para juntar el resultado y mostrar de qué fuente vino.

## Extra: Nodo `Function` con control de error

1. Usa `try/catch` dentro de un nodo `Function`:
   ```js
   try {
     const fact = $json.cat_fact;
     if (!fact) throw new Error('No fact');
     return items;
   } catch (err) {
     return [{ json: { error: err.message } }];
   }
   ```