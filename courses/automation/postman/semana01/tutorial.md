# Tutorial: Fundamentos de Postman

## Paso 1: Instalar Postman
1. Descarga Postman desde [https://www.postman.com/downloads](https://www.postman.com/downloads)
2. Instálalo en tu sistema operativo.
3. Crea una cuenta o accede con Google.

## Paso 2: Crear tu primera colección
1. Haz clic en "Collections" > "New Collection".
2. Asigna el nombre `Mi Primera API`.
3. Guarda una nueva request con:
   - Método: `GET`
   - URL: `https://jsonplaceholder.typicode.com/posts/1`
4. Haz clic en “Send” y observa la respuesta.

## Paso 3: Prueba otros métodos
1. `POST` a `https://jsonplaceholder.typicode.com/posts` con body tipo `raw > JSON`:
```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```
2. `PUT` a `https://jsonplaceholder.typicode.com/posts/1` con body similar.


3. `DELETE` a `https://jsonplaceholder.typicode.com/posts/1`.



## Paso 4: Introducción a entornos

1. Crea un entorno con una variable base_url = `https://jsonplaceholder.typicode.com`.


2. Modifica tus requests para usar `{{base_url}}/posts`.



## Resultado esperado

Colección funcional con 4 requests configuradas correctamente.
