# Tema 5 - Técnicas de diseño: caja negra, caja blanca y basadas en experiencia

Diseñar casos de prueba no es cuestión de suerte, sino de aplicar técnicas que nos permitan cubrir situaciones clave con el menor esfuerzo posible. Esta semana aprenderás cómo aplicar tres enfoques fundamentales: *caja negra*, *caja blanca* y técnicas *basadas en la experiencia*.

---

## ¿Qué son las técnicas de diseño?

Las técnicas de diseño de pruebas son métodos sistemáticos para crear casos de prueba eficaces. Su objetivo es maximizar la cobertura de errores con el menor número de pruebas posibles. Según el tipo de información que tengamos del sistema, elegiremos una técnica u otra.

---

## Técnicas de *caja negra*

Las técnicas de *caja negra* se basan en los requisitos y el comportamiento esperado del sistema, sin considerar cómo está implementado por dentro. Es como probar una calculadora: sabes qué debe hacer, pero no cómo funciona por dentro.

### Partición de equivalencia

Consiste en dividir los datos de entrada en grupos (particiones) que el sistema trata de la misma forma. Si un dato de una partición falla, probablemente todos los de esa partición también lo hagan.

**Ejemplo:** Un campo que solo acepta edades entre 18 y 65:
- Una partición válida: 18 a 65.
- Particiones inválidas: menor de 18 y mayor de 65.

### Valores límite

Los errores suelen aparecer cerca de los límites. Esta técnica se centra en probar los extremos de las particiones válidas e inválidas.

**Ejemplo:** Para el rango 18 a 65, se prueban:
- Valores válidos: 18 y 65.
- Valores justo fuera: 17 y 66.

### Tabla de decisión

Se utiliza cuando hay múltiples condiciones que afectan el resultado. Se crean combinaciones de condiciones y sus salidas esperadas en forma de tabla.

**Ejemplo:** Un sistema da acceso solo si:
- Es mayor de edad.
- Tiene membresía activa.

La tabla muestra todas las combinaciones posibles de esas condiciones.

### Transiciones de estado

Se aplica a sistemas que tienen distintos estados y reacciones según el estado actual y la entrada. Se crean pruebas para cubrir las transiciones y condiciones inválidas.

**Ejemplo:** Cajero automático: estados como *inactivo*, *esperando PIN*, *retirando efectivo*.

### Caso de uso

Se basa en los escenarios definidos por el usuario final. Cada flujo de uso se convierte en un caso de prueba.

---

## Técnicas de *caja blanca*

Estas técnicas requieren conocer el código. Se centran en cómo está construido el sistema, y en qué caminos toma.

### Cobertura de sentencias

Cada línea de código debe ejecutarse al menos una vez.

### Cobertura de decisiones

Cada decisión (*if*, *switch*, etc.) debe evaluarse en todas sus salidas posibles (*true*, *false*).

**Símil:** Si el código es un laberinto, las técnicas de caja blanca se aseguran de recorrer todos los caminos posibles.

---

## Técnicas *basadas en la experiencia*

Aquí, el conocimiento del tester es clave. Se aplican cuando no hay requisitos claros o se quiere hacer una validación adicional.

### Adivinación de errores (*error guessing*)

Basada en la experiencia sobre errores comunes. El tester propone pruebas para casos donde "suele fallar".

### Pruebas exploratorias

No siguen un guion fijo. El tester explora libremente el sistema buscando defectos, documentando sobre la marcha.

**Símil:** Como un detective que investiga pistas sin tener claro dónde empezar.

---

## Buenas prácticas

- Usa combinaciones de técnicas para mayor cobertura.
- Prioriza según el riesgo.
- Asegura la trazabilidad entre casos y requisitos.
- Documenta entradas esperadas, condiciones y resultados.

---

Con estas técnicas, serás capaz de diseñar pruebas robustas, con lógica y sentido. Esto no solo mejora la calidad del software, también eleva tu valor como tester.

---

- [^ Índice del Tema](./readme.md)
- [Ejercicios](./ejercicios.md)
