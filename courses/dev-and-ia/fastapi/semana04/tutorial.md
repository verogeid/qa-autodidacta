# Semana 04 – Testing automatizado con Pytest y HTTPX

## ¿Por qué testear?

Probar tu código garantiza que funcione como esperas incluso tras cambios o refactorizaciones.

## Paso 1: Estructura básica de test

Crea un archivo `test_main.py`:

```python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}
```

## Paso 2: Test con *Pytest* + *HTTPX* (async)

Usamos `httpx.AsyncClient` y `pytest-asyncio`:

```python
import pytest
from httpx import AsyncClient
from main import app

@pytest.mark.asyncio
async def test_create_item():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post("/items/", json={"name": "Libro", "price": 10.0})
    assert response.status_code == 200
    assert response.json()["name"] == "Libro"
```

## Paso 3: Fixtures

Puedes usar `@pytest.fixture` para preparar datos:

```python
import pytest

@pytest.fixture
def sample_item():
    return {"name": "Libro", "price": 10.0}

def test_with_fixture(client, sample_item):
    response = client.post("/items/", json=sample_item)
    assert response.status_code == 200
```
