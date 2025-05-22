# Semana 6 — Soluciones con explicación

## 1. Modelo ORM para `User`

```python
users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("username", String(length=50)),
    Column("email", String(length=100)),
)
```

## 2. Ruta GET

```python
@app.get("/users/")
async def read_users():
    query = users.select()
    return await database.fetch_all(query)
```

## 3. Ruta POST

```python
@app.post("/users/")
async def create_user(username: str, email: str):
    query = users.insert().values(username=username, email=email)
    user_id = await database.execute(query)
    return {"id": user_id}
```

## 4. Tarea en segundo plano

```python
def log_user_creation(username: str):
    with open("user_log.txt", "a") as log:
        log.write(f"Usuario creado: {username}\n")

@app.post("/users/async/")
async def create_user_bg(username: str, email: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(log_user_creation, username)
    query = users.insert().values(username=username, email=email)
    user_id = await database.execute(query)
    return {"id": user_id}
```

## 5. Test básico

```python
def test_create_user():
    response = client.post("/users/", json={"username": "diego", "email": "d@example.com"})
    assert response.status_code == 200
```

> Recuerda limpiar la base de datos entre tests para evitar falsos positivos.

---

- [^ Índice](./readme.md)
- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana05/soluciones.md)
- [Siguiente >](../semana07/soluciones.md)

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
