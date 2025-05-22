# Semana 8: Despliegue, optimización y buenas prácticas finales

En esta semana vamos a preparar nuestra aplicación FastAPI para el entorno de producción. Esto incluye desplegarla en un servidor o plataforma cloud, optimizar su rendimiento y aplicar buenas prácticas que aseguren la calidad y mantenimiento del proyecto.

## Despliegue

FastAPI se puede ejecutar en servidores usando Uvicorn o Gunicorn como servidores ASGI. Para proyectos profesionales, es común usar Docker para contenerizar la aplicación y facilitar su despliegue en cualquier entorno.

Ejemplo básico de comando para ejecutar FastAPI en producción:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

Este comando arranca la app con 4 procesos, mejorando la concurrencia.

## Optimización

- **Caching**: usar memoria o *Redis* para almacenar resultados frecuentes.
- **Concurrencia**: usar *workers* o herramientas asíncronas para mejorar el rendimiento.
- **Escalabilidad**: separar servicios, usar balanceadores de carga.

## Buenas prácticas

- Mantener las variables sensibles fuera del código, usando `.env` o servicios de gestión de secretos.
- Documentar el código y las APIs.
- Incluir logging detallado y monitoreo para detectar fallos.
- Mantener tests actualizados para asegurar estabilidad.

---

- [^ Índice](./readme.md)
- [Ejercicios](./ejercicios.md)
- [Soluciones](./soluciones.md)

---

- [^ Índice del curso](../readme.md)
- [< Anterior](../semana07/tutorial.md)

---

## Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo.

---

## Autor

© 2025 Diego González Fernández  
[LinkedIn](https://www.linkedin.com/in/diego-gonzalez-fernandez)
