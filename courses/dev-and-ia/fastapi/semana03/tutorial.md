# Semana 03 – Modelos de datos con Pydantic

## ¿Qué es Pydantic?

*Pydantic* permite definir clases con anotaciones de tipo que FastAPI usa para validar los datos de entrada y generar automáticamente la documentación.

## Paso 1: Crear un modelo de entrada

Creamos `models.py`:

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
```

Este modelo valida automáticamente los datos que llegan en una petición.

## Paso 2: Usarlo en una ruta

```python
from fastapi import FastAPI
from models import Item

app = FastAPI()

@app.post("/items/")
def create_item(item: Item):
    return item
```

## Paso 3: Probarlo

Al enviar un JSON en el cuerpo de una petición POST a /items/, FastAPI validará que los campos estén correctos. Si falta alguno requerido o un tipo es incorrecto, devolverá un error 422.

## Paso 4: Modelos de respuesta

Puedes definir un modelo para controlar qué datos se devuelven:

```python
from pydantic import BaseModel

class ItemOut(BaseModel):
    name: str
    price: float

@app.get("/items/{item_id}", response_model=ItemOut)
def read_item(item_id: int):
    return {"name": "Libro", "price": 10.0, "description": "No incluida"}
```

## Paso 5: Validaciones adicionales

Puedes usar validadores personalizados:

```python
from pydantic import validator

class User(BaseModel):
    username: str

    @validator('username')
    def no_spaces(cls, v):
        if ' ' in v:
            raise ValueError("No se permiten espacios")
        return v
```

FastAPI también permite anidar modelos y usar listas o dictados como campos.
