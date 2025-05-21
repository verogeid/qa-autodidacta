# Ejercicios - Tema 5: Técnicas de diseño

## Pregunta 1  
¿Cuál de las siguientes afirmaciones sobre la técnica de *partición de equivalencia* es correcta?

a) Se basa en probar todos los valores posibles.  
b) Divide los datos de entrada en grupos con comportamiento similar.  
c) Requiere conocer el código fuente.  
d) Es exclusiva de las pruebas de regresión.

---

## Pregunta 2  
¿Cuáles son ejemplos de técnicas de *caja negra*?

a) Partición de equivalencia.  
b) Valores límite.  
c) Cobertura de decisiones.  
d) Tabla de decisión.

---

## Pregunta 3  
¿Qué técnica permite representar visualmente los posibles cambios de estado de un sistema?

a) Casos de uso.  
b) Transiciones de estado.  
c) Partición de equivalencia.  
d) Exploratoria.

---

## Pregunta 4  
¿Cuál de estas afirmaciones se refiere a las *técnicas basadas en la experiencia*?

a) Solo se aplican si hay documentación formal.  
b) Exigen cobertura total del código.  
c) Son útiles cuando se tiene intuición sobre errores comunes.  
d) Son propias del desarrollo en cascada.

---

## Pregunta 5  
¿Cuál es el objetivo de la cobertura de decisiones?

a) Probar solo las líneas más críticas.  
b) Ejecutar todos los bloques condicionales en sus distintos resultados.  
c) Cubrir todos los estados posibles de un sistema.  
d) Verificar si los usuarios han seguido un camino concreto.

---

## Pregunta 6  
¿Qué ventaja ofrece una tabla de decisión frente a otros métodos?

a) Es útil para representar múltiples combinaciones de condiciones.  
b) Sirve para visualizar cómo se conecta el sistema internamente.  
c) Permite ejecutar el código sin errores.  
d) Solo se usa con software de alto riesgo.

---

## Pregunta 7  
¿Cuál de los siguientes enfoques está más alineado con pruebas exploratorias?

a) Probar con casos muy bien definidos por adelantado.  
b) Ejecutar scripts automáticos.  
c) Investigar libremente el sistema buscando comportamientos inesperados.  
d) Revisar el código buscando omisiones.

---

## Pregunta 8  
¿Qué técnica de diseño te obliga a observar cómo el software toma decisiones lógicas?

a) Partición de equivalencia.  
b) Casos de uso.  
c) Cobertura de decisiones.  
d) Transiciones de estado.

---

## Respuestas explicadas

**Pregunta 1: b)**  
La *partición de equivalencia* agrupa valores de entrada que deberían tener el mismo comportamiento. Probar uno de cada grupo es suficiente.

**Pregunta 2: a, b, d**  
Las técnicas de caja negra incluyen *partición de equivalencia*, *valores límite* y *tablas de decisión*. *Cobertura de decisiones* es caja blanca.

**Pregunta 3: b)**  
Las *transiciones de estado* permiten modelar cómo cambia el estado del sistema ante distintas acciones o eventos.

**Pregunta 4: c)**  
Las técnicas basadas en la experiencia no requieren documentación y se basan en la intuición del tester, como en la *adivinación de errores*.

**Pregunta 5: b)**  
La *cobertura de decisiones* busca comprobar todos los posibles resultados de una decisión lógica (verdadero/falso).

**Pregunta 6: a)**  
Una *tabla de decisión* representa varias condiciones y sus resultados de manera clara, especialmente útil si hay muchas combinaciones posibles.

**Pregunta 7: c)**  
La prueba exploratoria implica usar el sistema sin un guion fijo, observando comportamientos y descubriendo fallos de forma libre.

**Pregunta 8: c)**  
La *cobertura de decisiones* se centra en verificar que todas las rutas lógicas posibles han sido ejecutadas al menos una vez.

---

- [^ Índice del Tema](./readme.md)
- [Tutorial](./tutorial.md)
