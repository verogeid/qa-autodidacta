# Semana 03 – Modelos de datos con Pydantic

En esta semana introducimos *Pydantic*, una herramienta clave para trabajar con datos en FastAPI.

Gracias a su integración con el tipado de Python, podemos definir estructuras de datos (modelos) que serán automáticamente validadas. Esto significa que si nuestra API espera un nombre como texto, y le llega un número, devolverá un error explicando qué ocurrió. También nos permite establecer valores opcionales y realizar transformaciones o validaciones adicionales.

Además, al usar estos modelos, FastAPI genera automáticamente la documentación de la API, mejorando la experiencia tanto para los desarrolladores como para los consumidores de la API.

Aprenderemos a separar los modelos en archivos propios, reutilizarlos, anidarlos y preparar estructuras de respuesta seguras que no expongan más datos de los necesarios.

Este enfoque riguroso reduce los errores, documenta mejor nuestro código y facilita el mantenimiento a largo plazo. La validación y serialización de datos ya no depende de nosotros: la hace FastAPI por nosotros, de forma segura y predecible.
