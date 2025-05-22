# Semana 01 - Introducción a FastAPI 

1. En `main.py`, la línea debe ser:

```python
return {"message": "Curso FastAPI iniciado"}
```

2. Swagger se accede en: <http://127.0.0.1:8000/docs>


3. Añadir en el mismo archivo:

```python
@app.get("/status")
def get_status():
    return {"status": "ok"}
```

Recuerda ejecutar de nuevo `uvicorn` si hiciste cambios.

---

- [^ Índice](./readme.md)
- [Tutorial](./tutorial.md)
- [Ejercicios](./ejercicios.md)

---

- [^ Índice del curso](../readme.md)
- [Siguiente >](../semana02/soluciones.md)

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
