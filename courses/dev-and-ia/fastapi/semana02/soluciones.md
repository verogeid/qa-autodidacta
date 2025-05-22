# Soluciones - Rutas, parámetros y respuestas

## Ejercicio 1

Ruta:

```python
@app.get("/welcome/{name}")
def welcome(name: str):
    return {"message": f"Hola {name}!"}
```

**Explicación**: Captura el nombre como cadena desde la URL y lo muestra en el mensaje.


---

## Ejercicio 2

Ruta:

```python
@app.get("/age/{age}")
def check_age(age: int):
    return {"mayor_de_edad": age >= 18}
```

**Explicación**: Retorna True o False según si age es 18 o más.


---

## Ejercicio 3

Ruta:

```python
@app.get("/discount")
def apply_discount(product: str, price: float):
    discounted = round(price * 0.9, 2)
    return {"product": product, "discounted_price": discounted}
```

**Explicación**: Usa parámetros de consulta. Calcula un 10% de descuento redondeado a 2 decimales.


---

## Ejercicio 4

Ruta:

```python
from fastapi import HTTPException

@app.get("/age/{age}")
def check_age(age: int):
    if age < 0:
        raise HTTPException(status_code=400, detail="La edad no puede ser negativa")
    return {"mayor_de_edad": age >= 18}
```

**Explicación**: Lanza una excepción HTTP 400 si age es menor que 0.

---

- [^ Índice](./readme.md)
- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana01/soluciones.md)
- [Siguiente >](../semana03/soluciones.md)

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
