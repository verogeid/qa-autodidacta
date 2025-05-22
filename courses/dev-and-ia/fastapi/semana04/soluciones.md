# Semana 04 – Soluciones

## Solución 1

```python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_status():
    response = client.get("/status")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
```

## Solución 2

```python
import pytest
from httpx import AsyncClient
from main import app

@pytest.mark.asyncio
async def test_create_user():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post("/users/", json={"name": "Ana", "email": "ana@test.com"})
    assert response.status_code == 200
    assert response.json()["name"] == "Ana"
```

Solución 3

```python
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

@pytest.fixture
def new_user():
    return {"name": "Carlos", "email": "carlos@test.com"}

def test_user_email(new_user):
    response = client.post("/users/", json=new_user)
    assert response.status_code == 200
    assert response.json()["email"] == "carlos@test.com"
```

---

- [^ Índice](./readme.md)
- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana03/soluciones.md)
- [Siguiente >](../semana05/soluciones.md)

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
