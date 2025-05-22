# Semana 03 – Soluciones

## Solución 1

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    username: str
    email: str
    age: int | None = None

@app.post("/users/")
def create_user(user: User):
    return user
```

---

## Solución 2

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Product(BaseModel):
    name: str
    price: float
    tags: list[str] = []

@app.get("/products/")
def get_products():
    return [
        Product(name="Mouse", price=25.0, tags=["peripheral", "tech"]),
        Product(name="Teclado", price=45.0)
    ]
```

---

## Solución 3

```python
from fastapi import FastAPI
from pydantic import BaseModel, validator

app = FastAPI()

class LoginData(BaseModel):
    username: str
    password: str

    @validator('username')
    def no_spaces(cls, v):
        if ' ' in v:
            raise ValueError("El nombre de usuario no puede contener espacios")
        return v

@app.post("/login/")
def login(data: LoginData):
    return {"message": "Login válido"}
```

En este caso, si el usuario introduce un username con espacios, obtendrá un error 422 con el mensaje personalizado.

---

- [^ Índice](./readme.md)
- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana02/soluciones.md)
- [Siguiente >](../semana04/soluciones.md)

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
