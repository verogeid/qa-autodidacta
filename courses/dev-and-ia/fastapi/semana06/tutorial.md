# Semana 6 — Integración con bases de datos y tareas asíncronas

En esta semana aprenderás a conectar tu aplicación FastAPI con una base de datos real, a través de un ORM, y a ejecutar tareas en segundo plano sin bloquear la ejecución principal.

---

## 1. Preparar la base de datos y el entorno

Usaremos *SQLite* para desarrollo local y *SQLAlchemy* como ORM.

```bash
pip install sqlalchemy aiosqlite databases
```

## 2. Definir el modelo ORM

Creamos un archivo `models.py` para definir una tabla de ejemplo.

```python
from sqlalchemy import Table, Column, Integer, String, MetaData

metadata = MetaData()

notes = Table(
    "notes",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String(length=100)),
    Column("content", String(length=250)),
)
```

## 3. Conectar FastAPI con la base de datos

```python
from fastapi import FastAPI
from databases import Database
from models import metadata, notes
import sqlalchemy

DATABASE_URL = "sqlite+aiosqlite:///./test.db"
database = Database(DATABASE_URL)
engine = sqlalchemy.create_engine(DATABASE_URL.replace("+aiosqlite", ""))
metadata.create_all(engine)

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
```

## 4. Crear rutas para acceder a los datos

```python
from fastapi import HTTPException

@app.get("/notes/")
async def read_notes():
    query = notes.select()
    return await database.fetch_all(query)

@app.post("/notes/")
async def create_note(title: str, content: str):
    query = notes.insert().values(title=title, content=content)
    note_id = await database.execute(query)
    return {"id": note_id, "title": title, "content": content}
```

## 5. Ejecutar tareas asíncronas

```python
from fastapi import BackgroundTasks

def log_note_creation(title: str):
    with open("log.txt", "a") as log:
        log.write(f"Nota creada: {title}\n")

@app.post("/notes/async/")
async def create_note_bg(title: str, content: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(log_note_creation, title)
    query = notes.insert().values(title=title, content=content)
    note_id = await database.execute(query)
    return {"id": note_id, "title": title, "content": content}
```

## Buenas prácticas

- Usa un entorno de desarrollo separado del de producción.
- Asegúrate de cerrar siempre las conexiones.
- Las tareas en segundo plano deben ser seguras y tolerantes a fallos
