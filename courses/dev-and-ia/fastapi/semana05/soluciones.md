# Soluciones — Semana 5

---

## 1. Personaliza una excepción

```python
@app.get("/numero/{n}")
async def check_number(n: int):
    if n < 0:
        raise HTTPException(status_code=400, detail="No se permiten números negativos")
    return {"valor": n}
```

## 2. Emisión de JWT

```python
@app.post("/login")
async def login():
    token = create_access_token({"sub": "usuario1"}, timedelta(minutes=30))
    return {"access_token": token, "token_type": "bearer"}
```

## 3. Ruta protegida

```python
@app.get("/admin")
async def admin_route(user: str = Depends(get_current_user)):
    if user != "admin":
        raise HTTPException(status_code=403, detail="Acceso denegado")
    return {"mensaje": "Bienvenido admin"}
```

## 4. Cifrado con JWE

```python
token = create_access_token({"sub": "usuario1"}, timedelta(minutes=10))
encrypted = encrypt_token(token, "clave123")
original = decrypt_token(encrypted, "clave123")
print(original)
```

## 5. ¿Qué riesgo implica no cifrar un JWT?

Un JWT firmado garantiza integridad, pero no confidencialidad. Cualquiera que lo intercepte puede leer los datos. Cifrarlo con JWE protege la información del payload incluso si el token es capturado.
