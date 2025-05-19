# Tutorial - Semana 01

## Paso 1: Crea el entorno

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install fastapi uvicorn python-dotenv
```

---

## Paso 2: Estructura del proyecto

```plaintext
app/
  main.py
  routers/
    __init__.py
    hello.py
  core/
    __init__.py
    config.py
.env
```

---

## Paso 3: Archivo `.env`


PROJECT_NAME=CursoFastAPI
ENV=development


---

Paso 4: config.py

from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str
    ENV: str

    class Config:
        env_file = ".env"

settings = Settings()


---

Paso 5: hello.py (router)

from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def say_hello():
    return {"message": "Hello from FastAPI"}


---

Paso 6: main.py

from fastapi import FastAPI
from app.routers import hello
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(hello.router)


---

Paso 7: Ejecuta la app

uvicorn app.main:app --reload


---

Resultado

Visita http://127.0.0.1:8000 para ver el mensaje.


---

Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.


---

Autor

© 2025 Diego González Fernández
LinkedIn

---

### `semana01/ejercicios.md`

```markdown
# Ejercicios - Semana 01

## Ejercicio 1

Crea una nueva ruta `/status` que devuelva el estado `"ok"` y el nombre del proyecto leído desde `.env`.

**Esperado:**

```json
{
  "status": "ok",
  "project": "CursoFastAPI"
}


---

Ejercicio 2

Crea una subruta /hello/{name} que reciba un nombre por URL y devuelva:

{
  "message": "Hola, Diego"
}


---

Ejercicio 3

Cambia el título de la documentación en Swagger usando la configuración desde .env.


---

Buenas prácticas sugeridas

Usa nombres significativos para las rutas

No pongas lógica en main.py

Aísla la configuración en un único módulo



---

Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.


---

Autor

© 2025 Diego González Fernández
LinkedIn

---

### `semana01/soluciones.md`

```markdown
# Soluciones - Semana 01

---

## Ejercicio 1: `/status`

```python
@router.get("/status")
def get_status():
    return {"status": "ok", "project": settings.PROJECT_NAME}


---

Ejercicio 2: /hello/{name}

@router.get("/hello/{name}")
def greet(name: str):
    return {"message": f"Hola, {name}"}


---

Ejercicio 3: título en Swagger

En main.py:

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="API generada en el curso",
    version="1.0"
)


---

Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.


---

Autor

© 2025 Diego González Fernández
LinkedIn