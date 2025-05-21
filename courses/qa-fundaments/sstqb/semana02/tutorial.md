# Tutorial Semana 2 - Planificación y Diseño de Pruebas

## 1. Planificación de pruebas

La **planificación de pruebas** es esencial para garantizar que el software se someta a un conjunto adecuado de pruebas, cubriendo todos los escenarios posibles.

### Pasos para la planificación

1. **Definir los objetivos de prueba**: ¿Qué se espera lograr con las pruebas? ¿Qué áreas del sistema necesitan ser validadas?
2. **Identificar los requisitos de prueba**: Determina qué requisitos del software deben ser verificados.
3. **Seleccionar las técnicas de prueba**: Elige qué tipo de pruebas realizar, como pruebas funcionales, de rendimiento, seguridad, etc.
4. **Asignar recursos**: Asegúrate de tener el equipo adecuado y los entornos necesarios para realizar las pruebas.
5. **Establecer el cronograma**: Define las fechas de inicio y fin de las pruebas, así como las fases de ejecución.

## 2. Técnicas de diseño de pruebas

Existen varias **técnicas de diseño de pruebas** que te ayudarán a crear casos de prueba efectivos:

### a. **Equivalencia de partición**

Divide el dominio de entrada en clases de equivalencia, donde se espera que todos los valores dentro de una misma clase se comporten igual.

### b. **Análisis de valores límite**

Crea casos de prueba alrededor de los límites de entrada (mínimos y máximos) para identificar errores en los puntos de frontera.

### c. **Técnicas basadas en la experiencia**

Se basan en la experiencia del tester, como pruebas exploratorias, en las que se prueban áreas del software no planificadas, pero que pueden ser sensibles a defectos.

## 3. Creación de casos de prueba

Los **casos de prueba** son documentos que describen los pasos que un tester debe seguir para verificar un aspecto específico del software. Un caso de prueba típico debe contener:

1. **ID del caso de prueba**.
2. **Descripción**.
3. **Precondiciones**.
4. **Pasos a seguir**.
5. **Datos de prueba**.
6. **Resultado esperado**.
7. **Estado del caso de prueba** (aprobado, fallido).

## 4. Revisión y gestión de los casos de prueba

La **gestión de los casos de prueba** incluye la organización de todos los casos en un repositorio centralizado, asegurando su trazabilidad con los requisitos del software.

### Buenas prácticas

- Mantén los casos de prueba en un sistema de gestión de pruebas.
- Revisa los casos de prueba regularmente para mantenerlos actualizados.
- Relaciona cada caso de prueba con el requisito o historia de usuario que cubre.

## 5. Trazabilidad entre requisitos y pruebas

La trazabilidad asegura que cada **requisito** del software esté cubierto por al menos un **caso de prueba**. Esto es esencial para garantizar que el software cumpla con lo que se espera.

Puedes usar herramientas como **Jira** o **TestRail** para mantener la trazabilidad entre los requisitos y los casos de prueba.

## Resumen

Esta semana, aprendiste a planificar el proceso de pruebas, diseñar casos de prueba efectivos y gestionar la trazabilidad entre los requisitos y las pruebas. La planificación adecuada es clave para el éxito de cualquier ciclo de pruebas.
