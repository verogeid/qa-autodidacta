# Tema 11 - Ejercicios: Testing en DevOps: CI/CD, pipelines y automatización práctica

Contesta las siguientes preguntas. Puede haber más de una respuesta correcta.

---

1) ¿Qué describe mejor un pipeline en CI/CD?  
a) Una lista de tareas manuales.  
b) Una cadena automatizada para compilar, probar y desplegar código.  
c) Un sistema para almacenar documentación.  
d) Un proceso de revisión de código manual.  
e) Un servidor para alojar software.

2) ¿Cuál(es) es/son objetivo(s) del testing en CI/CD?  
a) Detectar errores rápidamente.  
b) Ejecutar pruebas solo en producción.  
c) Aumentar la confianza en los cambios.  
d) Evitar que el equipo de desarrollo haga pruebas.  
e) Reducir la frecuencia de despliegues.

3) ¿Qué pruebas se ejecutan típicamente al inicio del pipeline?  
a) Pruebas unitarias.  
b) Pruebas de integración.  
c) Pruebas de rendimiento.  
d) Pruebas manuales.  
e) Pruebas de seguridad básicas.

4) ¿Qué funciones cumple el control de versiones en un entorno DevOps?  
a) Registrar cambios de código.  
b) Ejecutar pruebas automáticas.  
c) Facilitar la colaboración del equipo.  
d) Gestionar despliegues automáticos.  
e) Documentar incidencias.

5) ¿Por qué es importante automatizar las pruebas en pipelines?  
a) Para obtener resultados rápidos y confiables.  
b) Para eliminar la necesidad de testers humanos.  
c) Para evitar errores manuales.  
d) Para facilitar entregas frecuentes.  
e) Para reducir el número de desarrolladores.

6) ¿Qué significa CI y CD?  
a) Continuous Integration y Continuous Delivery / Deployment.  
b) Code Inspection y Code Deployment.  
c) Continuous Improvement y Continuous Debugging.  
d) Code Integration y Code Distribution.

7) ¿Qué tipo de pruebas verifican que varios módulos funcionan juntos correctamente?  
a) Pruebas unitarias.  
b) Pruebas de integración.  
c) Pruebas funcionales.  
d) Pruebas de aceptación.  
e) Pruebas de carga.

8) ¿Quiénes son responsables de la calidad en un entorno DevOps?  
a) Solo desarrolladores.  
b) Solo testers.  
c) Todo el equipo: desarrollo, operaciones y testing.  
d) Solo operaciones.

9) ¿Qué ocurre si una prueba automatizada falla en un pipeline?  
a) El pipeline se detiene y alerta al equipo.  
b) Se ignora y sigue adelante.  
c) Se avisa automáticamente a los desarrolladores.  
d) El código es eliminado automáticamente.  
e) Se genera un reporte para análisis posterior.

10) ¿Cuál(es) de las siguientes son ventajas del testing automatizado en DevOps?  
a) Feedback rápido.  
b) Reducción de errores humanos.  
c) Mayor tiempo de espera para despliegues.  
d) Mejora en la colaboración del equipo.  
e) Incremento de costos operativos.

---

## Soluciones y explicaciones

---

1) b) Una cadena automatizada para compilar, probar y desplegar código.  
**Explicación:** Un *pipeline* es como una línea de montaje robotizada que automatiza tareas para que el código fluya sin errores. Las opciones a), c), d) y e) no describen esta automatización continua.

2) a) Detectar errores rápidamente.  
   c) Aumentar la confianza en los cambios.  
**Explicación:** El testing en CI/CD busca feedback inmediato, lo que permite corregir rápido y confiar en que los cambios no rompen nada. Ejecutar pruebas solo en producción (b) es arriesgado. Evitar que el equipo haga pruebas (d) y reducir frecuencia de despliegues (e) va contra la filosofía DevOps.

3) a) Pruebas unitarias.  
**Explicación:** Las pruebas unitarias verifican pequeñas piezas de código al inicio, como comprobar ingredientes antes de cocinar. Las demás pruebas suelen ejecutarse más adelante o en paralelo.

4) a) Registrar cambios de código.  
   c) Facilitar la colaboración del equipo.  
**Explicación:** El control de versiones es el libro de registro que permite coordinar a todo el equipo y evitar conflictos. No ejecuta pruebas ni despliegues automáticos.

5) a) Para obtener resultados rápidos y confiables.  
   c) Para evitar errores manuales.  
   d) Para facilitar entregas frecuentes.  
**Explicación:** Automatizar pruebas permite rapidez y precisión, como tener robots inspeccionando sin cansancio. No elimina la necesidad de testers humanos (b) ni reduce el número de desarrolladores (e).

6) a) Continuous Integration y Continuous Delivery / Deployment.  
**Explicación:** CI/CD son prácticas para integrar y entregar cambios de forma continua y automática. Las otras definiciones no aplican.

7) b) Pruebas de integración.  
**Explicación:** Verifican que los módulos trabajan bien juntos, como probar que diferentes ingredientes combinados saben bien.

8) c) Todo el equipo: desarrollo, operaciones y testing.  
**Explicación:** En DevOps, la calidad es responsabilidad compartida para lograr entregas fiables y rápidas.

9) a) El pipeline se detiene y alerta al equipo.  
   c) Se avisa automáticamente a los desarrolladores.  
   e) Se genera un reporte para análisis posterior.  
**Explicación:** Fallar una prueba en pipeline es una señal para corregir antes de avanzar, asegurando calidad.

10) a) Feedback rápido.  
    b) Reducción de errores humanos.  
    d) Mejora en la colaboración del equipo.  
**Explicación:** Automatizar acelera la detección de fallos y mejora el trabajo conjunto. Mayor tiempo de espera y aumento de costos (c y e) no son ventajas.

---

- [^ Índice del Tema](./readme.md)
- [Tutorial](./tutorial.md)
