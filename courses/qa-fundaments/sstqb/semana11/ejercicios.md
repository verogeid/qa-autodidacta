# Semana 11 – Ejercicios: Técnicas de Diseño de Pruebas SSTQB

1. ¿Cuál es la diferencia principal entre técnicas de caja negra y caja blanca?

2. Describe la técnica de *Partición Equivalente* y da un ejemplo sencillo.

3. ¿Por qué es útil la técnica de *Análisis de Valores Límite*?

4. Explica cómo funciona una *Tabla de Decisión* y para qué tipo de pruebas es adecuada.

5. Menciona dos técnicas de caja blanca y qué buscan cubrir.

6. ¿Por qué se recomienda combinar técnicas de diseño de pruebas?

---

# Respuestas

1. Caja negra se basa en la especificación sin conocer el código; caja blanca usa el conocimiento interno del código para diseñar pruebas.

2. Divide los datos en grupos (clases) donde se espera que el sistema se comporte igual. Ejemplo: edades entre 18-65 son válidas; se prueba un valor dentro, uno fuera y uno en el límite.

3. Porque los errores suelen ocurrir en los límites de las clases equivalentes; ayuda a detectarlos.

4. Es una tabla que combina condiciones con acciones para probar todas las combinaciones posibles, útil en lógica compleja.

5. Cobertura de Sentencias (ejecutar todas las líneas) y Cobertura de Decisiones (probar cada decisión lógica).

6. Porque ninguna técnica cubre todos los casos; combinarlas mejora la eficacia y cobertura.
