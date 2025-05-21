# Semana 8 – Ejercicios: Análisis Estático de Código

## Ejercicio 1

Explica con tus propias palabras qué es el *análisis estático* y por qué es útil en QA.

---

## Ejercicio 2

Enumera **tres defectos** que puede detectar una herramienta de análisis estático pero **no** una prueba dinámica.

---

## Ejercicio 3

Relaciona cada herramienta con el lenguaje correspondiente:

- ESLint  
- SonarQube  
- Pylint  
- Checkstyle  

Lenguajes:
1. Java  
2. JavaScript  
3. Python  
4. Multi-lenguaje  

---

## Ejercicio 4

¿Qué significa "complejidad ciclomática" y por qué puede ser un indicador de riesgo?

---

## Ejercicio 5

Verdadero o falso:

a) El análisis estático se realiza con el programa en ejecución.  
b) Una revisión de código puede considerarse una técnica de análisis estático.  
c) El análisis estático sustituye por completo a las pruebas dinámicas.  

---

## Ejercicio 6

Nombra al menos **dos ventajas** y **dos limitaciones** del análisis estático.

---

# Respuestas

## Ejercicio 1

El análisis estático consiste en revisar el código fuente sin ejecutarlo para detectar errores, malas prácticas o problemas de estilo. Es útil porque permite encontrar defectos tempranamente y reduce el coste de corrección.

## Ejercicio 2

- Uso de variables no inicializadas  
- Código muerto (nunca ejecutado)  
- Infracciones a estándares de codificación  

## Ejercicio 3

- ESLint → 2 (JavaScript)  
- SonarQube → 4 (Multi-lenguaje)  
- Pylint → 3 (Python)  
- Checkstyle → 1 (Java)  

## Ejercicio 4

La complejidad ciclomática mide el número de caminos lógicos independientes en un programa. Un valor alto indica que el código es más difícil de probar y mantener, lo cual incrementa el riesgo de defectos.

## Ejercicio 5

a) Falso  
b) Verdadero  
c) Falso  

## Ejercicio 6

**Ventajas:**

- Detecta errores antes de ejecutar el software.  
- Mejora la calidad del código de forma continua.

**Limitaciones:**

- No detecta errores en tiempo de ejecución.  
- Puede generar falsos positivos.

