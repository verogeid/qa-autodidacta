# Semana 8: Soluciones y explicaciones

1. **Formas de desplegar FastAPI:**  
   - Ejecutar directamente con Uvicorn/Gunicorn en un servidor.  
   - Usar contenedores Docker para facilitar el despliegue en cualquier entorno.  
   - Plataformas cloud (Heroku, AWS, DigitalOcean) que permiten desplegar fácilmente aplicaciones Dockerizadas o con configuración propia.

2. **Ventajas de Docker:**  
   - Contenerización: asegura que la app funciona igual en cualquier entorno.  
   - Facilita el escalado y la gestión de dependencias.  
   - Aislamiento de procesos y versiones.

3. **Separar variables sensibles:**  
   - Evita exponer datos confidenciales en el código (como claves o contraseñas).  
   - Permite cambiar configuraciones sin modificar el código.  
   - Facilita la seguridad y la administración centralizada.

4. **Técnicas para mejorar concurrencia:**  
   - Multiprocesamiento con workers (e.g., `--workers` en Uvicorn).  
   - Programación asíncrona en FastAPI para aprovechar la naturaleza async.  
   - Uso de cache para evitar cálculos repetidos.

5. **Buenas prácticas para mantenimiento:**  
   - Monitoreo activo (logs, alertas).  
   - Testing automático para detectar regresiones.  
   - Documentación clara y actualizada.  
   - Gestión de versiones y despliegues controlados.
