# Ejercicios Semana 3 – Técnicas de diseño de pruebas

1. **¿Cuál es la principal diferencia entre técnicas de caja negra y caja blanca?**

2. **Menciona dos ejemplos de técnicas estáticas y explica su propósito.**

3. **Explica qué es la partición en clases de equivalencia y da un ejemplo sencillo.**

4. **¿Qué técnica usarías para verificar que todas las sentencias de un programa se ejecutan al menos una vez?**

5. **¿Por qué las técnicas basadas en la experiencia son importantes en testing?**

6. **¿Cuál de estas técnicas requiere conocimiento del código fuente: caja negra, caja blanca o basada en la experiencia?**

---

# Respuestas

1. La técnica de caja negra se basa en las especificaciones y no requiere conocimiento del código, mientras que la caja blanca utiliza el conocimiento del código y la estructura interna para diseñar pruebas.

2. Ejemplos de técnicas estáticas: revisión (manual de documentos para detectar defectos) y análisis estático (uso de herramientas para detectar errores sin ejecutar código).

3. La partición en clases de equivalencia divide los posibles valores de entrada en grupos donde se espera que el sistema se comporte de forma similar. Ejemplo: para una edad válida entre 18 y 65, las clases pueden ser: menor de 18 (inválido), entre 18 y 65 (válido), mayor de 65 (inválido).

4. La técnica de caja blanca llamada cobertura de sentencias.

5. Porque permiten encontrar defectos que no se detectan con técnicas formales, aprovechando la intuición y experiencia del tester.

6. La técnica de caja blanca requiere conocimiento del código fuente.
