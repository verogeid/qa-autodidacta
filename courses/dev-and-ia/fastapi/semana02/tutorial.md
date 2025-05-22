# Semana 02 - Rutas, parámetros y respuestas

## ¿Qué son las rutas?

Una *ruta* (o *endpoint*) es la dirección que expone nuestra API. Por ejemplo, `/products` puede devolver todos los productos. FastAPI usa decoradores como `@app.get()` o `@app.post()` para definirlas.

## Parámetros en las rutas

Podemos capturar partes variables de la URL con `{}:`:

```python
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
```

Aquí item_id será un parámetro obligatorio, y FastAPI lo validará como int.

## Parámetros opcionales y por consulta

Usamos query para añadir datos que no están en la ruta:

```python
@app.get("/search")
def search_items(q: str = None):
    return {"query": q}
```

`q` es opcional. Si no se incluye, será *None*.

## Tipado de parámetros

Puedes usar *str*, *int*, *float*, *bool*... FastAPI validará automáticamente y devolverá errores si los tipos no coinciden.

## Estructura de respuestas

Una respuesta puede devolver un dict, listas, objetos anidados... FastAPI los convierte en JSON:

```python
@app.get("/user/{user_id}")
def get_user(user_id: int):
    return {"user": {"id": user_id, "name": "Alice"}}
```

Esto aparecerá automáticamente en Swagger y en la respuesta al hacer una petición.


---

Esta semana nos centramos en aprender a capturar información del cliente desde la URL y devolverla de forma clara y tipada.

---

- [^ Índice](./readme.md)
- [Ejercicios](./ejercicios.md)
- [Soluciones](./soluciones.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana01/tutorial.md)
- [Siguiente >](../semana03/tutorial.md)


---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
