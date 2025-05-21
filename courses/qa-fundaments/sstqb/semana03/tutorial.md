# Tutorial Semana 3 - Ejecución de Pruebas y Reportes de Defectos

## 1. Ejecución de Pruebas

La **ejecución de pruebas** implica llevar a cabo las pruebas diseñadas y verificar si el software cumple con los requisitos establecidos.

### a. Pruebas manuales
Las **pruebas manuales** son aquellas que se realizan de forma directa por el tester, siguiendo los casos de prueba previamente definidos. Para ejecutar una prueba manual correctamente:

1. Revisa los requisitos del caso de prueba.
2. Prepara el entorno necesario (datos de prueba, configuraciones, etc.).
3. Realiza los pasos especificados en el caso de prueba.
4. Verifica que los resultados coincidan con lo esperado.
5. Registra los resultados de la prueba.

### b. Pruebas automatizadas
Las **pruebas automatizadas** utilizan scripts o herramientas para ejecutar los casos de prueba de forma repetitiva y sin intervención manual. Ejemplos de herramientas incluyen **Selenium**, **Cypress** y **JUnit**. Para ejecutar pruebas automatizadas:

1. Asegúrate de tener el entorno de pruebas automatizadas configurado (herramientas y dependencias).
2. Ejecuta los scripts de prueba.
3. Verifica que los resultados sean los esperados.
4. Revisa los logs para asegurarte de que no haya errores.

## 2. Registro y Gestión de Defectos

Cuando se encuentra un **defecto** durante la ejecución de las pruebas, es importante documentarlo adecuadamente para su posterior resolución.

### Pasos para el registro de un defecto:

1. **Identificar el defecto**: Determina si el comportamiento observado es un error o una desviación de los requisitos.
2. **Reproducir el defecto**: Asegúrate de que el defecto sea reproducible.
3. **Documentar el defecto**: Registra el defecto utilizando un sistema de gestión de defectos (Jira, Bugzilla, etc.).
   - **Título**: Descripción breve del defecto.
   - **Descripción detallada**: Detalles del error, incluyendo pasos para reproducirlo.
   - **Gravedad**: Impacto del defecto en el software.
   - **Estado**: Estado actual del defecto (nuevo, en progreso, resuelto).
   - **Prioridad**: Urgencia para solucionarlo.

## 3. Herramientas de Seguimiento de Defectos

Las herramientas de gestión de defectos ayudan a organizar y hacer un seguimiento de los errores encontrados. Algunas herramientas populares son **Jira**, **Bugzilla**, y **Trello**.

Estas herramientas permiten:

- Asignar defectos a miembros del equipo.
- Realizar un seguimiento del progreso de la resolución.
- Generar informes sobre defectos y su estado.

## 4. Reportes de Defectos Efectivos

Un **reporte de defectos** bien escrito es crucial para asegurar que el defecto se resuelva rápidamente. Un buen reporte debe incluir:

- **Título descriptivo**.
- **Pasos para reproducir**.
- **Resultado esperado y real**.
- **Logs y capturas de pantalla**.
- **Impacto del defecto**.
- **Recomendaciones de solución** (si aplica).

## 5. Comunicación con el Equipo de Desarrollo

La comunicación efectiva con el equipo de desarrollo es clave para la resolución de defectos. Cuando reportes un defecto:

1. Sé claro y conciso.
2. Proporciona toda la información necesaria para reproducir el defecto.
3. Mantén una actitud colaborativa para encontrar una solución rápida.

## Resumen

Esta semana aprendiste a ejecutar pruebas manuales y automatizadas, y cómo registrar y gestionar defectos de manera efectiva. La correcta documentación de defectos y una buena comunicación con el equipo de desarrollo son esenciales para una resolución eficiente de problemas.
