# Semana 01 - Entorno, instalación y primeros pasos con FastAPI

## ¿Qué es FastAPI?

*FastAPI* es un framework moderno y rápido para construir APIs con Python. Está pensado para facilitar el desarrollo de forma clara, segura y eficiente. Utiliza anotaciones tipo y validación automática gracias a *Pydantic*.

### ¿Por qué FastAPI?

- Sintaxis limpia y moderna
- Validación automática de datos
- Documentación Swagger integrada
- Rápido como Node.js o Go, gracias a Starlette

## 1. Crear el entorno virtual

Esto permite aislar las dependencias del proyecto:

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

## 2. Instalar FastAPI y uvicorn

FastAPI es el framework principal, y uvicorn el servidor ASGI recomendado:

```bash
pip install fastapi uvicorn
```

## 3. Crear `main.py` y lanzar un servidor

Creamos un archivo inicial:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}
```

Y lo ejecutamos:

```bash
uvicorn main:app --reload
```

## 4. Abrir en el navegador

Abre <http://127.0.0.1:8000> para ver la respuesta.
La documentación Swagger estará en <http://127.0.0.1:8000/docs>


---

Esto es solo el principio. Entenderás que este primer servidor es simple, pero contiene ya el núcleo de una API funcional y extensible.

---

- [^ Índice](./readme.md)
- [Ejercicios](./ejercicios.md)
- [Soluciones](./soluciones.md)

---

- [^ Índice del curso](../readme.md)
- [Siguiente >](../semana02/tutorial.md)


---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
