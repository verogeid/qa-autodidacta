# Tutorial — Control de errores, autenticación y autorización

## 🎯 Objetivo

Aprender a proteger tu API controlando errores y autenticando usuarios de forma segura con JWT y JWE.

---

## 🧩 1. Manejo de errores

FastAPI permite personalizar respuestas de error usando `HTTPException`.

```python
from fastapi import HTTPException

@app.get("/item/{id}")
async def get_item(id: int):
    if id <= 0:
        raise HTTPException(status_code=400, detail="ID must be positive")
    return {"id": id}
```

También puedes interceptar errores globalmente con exception handlers.

## 🔐 2. Autenticación con JWT

Para emitir tokens necesitamos:

- Validar credenciales
- Firmar un token
- Devolverlo al cliente

```python
from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "supersecreta"
ALGORITHM = "HS256"

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
```

## 🗝 3. Verificar JWT en rutas protegidas

```python
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    return payload.get("sub")
```

## 🔐 4. Uso de JWE (opcional avanzado)

JWE cifra el contenido del JWT. Con python-jose puedes combinar firmas y cifrado para mayor seguridad.

```python
from jose import jwe

def encrypt_token(token: str, key: str):
    return jwe.encrypt(token, key.encode(), algorithm="A256GCM", encryption="A256GCM")

def decrypt_token(encrypted_token: str, key: str):
    return jwe.decrypt(encrypted_token, key.encode(), algorithm="A256GCM", encryption="A256GCM")
```

## ✅ 5. Autorización

Puedes proteger rutas según el rol del usuario:

```python
def get_admin_user(user: dict = Depends(get_current_user)):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Access denied")
    return user
```

---

- [^ Índice](./readme.md)
- [Ejercicios](./ejercicios.md)
- [Soluciones](./soluciones.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana04/tutorial.md)
- [Siguiente >](../semana06/tutorial.md)


---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
