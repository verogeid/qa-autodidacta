# Semana 9 – Técnicas Dinámicas de Prueba

## Introducción

Las *técnicas dinámicas de prueba* consisten en ejecutar el software para observar su comportamiento en acción y detectar defectos bajo condiciones reales o simuladas.  
Piensa en ellas como hacer una prueba de manejo a un coche nuevo: no basta con ver el manual, hay que conducirlo para asegurarse de que funciona bien.

---

## Conceptos clave

- **Pruebas Dinámicas:** Involucran la ejecución real del software usando casos de prueba diseñados para validar funcionalidades y descubrir errores.

- **Pruebas de Caja Negra:** Es como revisar un coche sin abrir el capó; solo observas cómo responde a tus acciones, sin conocer los detalles internos del motor. El tester diseña pruebas basándose en requisitos y resultados esperados.

- **Pruebas de Caja Blanca:** Aquí sí abres el capó y examinas el motor, el sistema eléctrico, y demás componentes para diseñar pruebas que cubran toda la lógica interna del software.

---

## Técnicas de Diseño de Pruebas Dinámicas

### Técnicas de Caja Negra

1. **Partición Equivalente:**  
   Imagina que clasificas frutas por color para probar solo una de cada grupo, porque todas deberían comportarse igual.  
   **Ejemplo:** Si un formulario acepta edades de 18 a 65 años, puedes probar con 20 (grupo válido), 17 (grupo inválido menor) y 70 (grupo inválido mayor). No es necesario probar cada número.

2. **Análisis de Valores Límites:**  
   Los errores suelen estar en los extremos, como cuando una cuerda se rompe en su punto más tenso.  
   **Ejemplo:** Para el mismo formulario, prueba con 18, 19, 65 y 66. Estos valores justo en el límite pueden revelar fallos no detectados con valores medios.

3. **Tabla de Decisión:**  
   Es como una lista de instrucciones que cubre todas las combinaciones posibles de condiciones.  
   **Ejemplo:** Si un sistema otorga descuentos según la edad y si el cliente es socio, una tabla de decisión cubrirá:  

   | Edad < 18 | Socio | Descuento |  
   |---|---|---|  
   | Sí | Sí | 20% |  
   | Sí | No | 10% |  
   | No | Sí | 15% |  
   | No | No | 0% |  

   Se crean casos para cada fila y se prueban todas las combinaciones.

4. **Pruebas Basadas en Estado:**  
   Piensa en un semáforo que cambia según el tráfico; pruebas cómo responde el software ante diferentes estados y cambios.  
   **Ejemplo:** En un sistema de compra online, prueba el flujo desde “carrito vacío” → “producto agregado” → “pago pendiente” → “pago confirmado” → “pedido enviado”.

### Técnicas de Caja Blanca

1. **Cobertura de Sentencias:**  
   Es como revisar que cada calle de una ciudad sea recorrida por un inspector.  
   **Ejemplo:** En un método que suma dos números, asegúrate que se ejecuta cada línea, incluyendo la inicialización y retorno.

2. **Cobertura de Decisiones:**  
   Verifica que todas las decisiones (if, switch) se prueben en todas sus posibles salidas.  
   **Ejemplo:** Para `if (edad >= 18) { permitirAcceso(); } else { denegarAcceso(); }` se debe probar con edad 17 (false) y 18 (true).

3. **Pruebas de Caminos:**  
   Es el examen más exhaustivo, donde se recorren todas las rutas posibles a través del código.  
   **Ejemplo:** En un código con dos decisiones anidadas, crea casos para cubrir todas las combinaciones posibles, asegurando que cada camino lógico se ejecute.

---

## Fases de Aplicación

Estas técnicas se aplican en distintos niveles:

- **Pruebas Unitarias:** Verifican módulos o funciones individuales, como revisar pieza por pieza de un motor.

- **Pruebas de Integración:** Validan que las piezas funcionan bien juntas, como comprobar que motor, frenos y dirección se coordinan.

- **Pruebas de Sistema:** Evalúan el coche completo en condiciones reales de uso.

- **Pruebas de Aceptación:** Validan que el coche cumple con las expectativas del cliente final antes de la entrega.

---

## Ventajas de las Técnicas Dinámicas

- Detectan errores reales que solo aparecen al ejecutar el software.

- Validan funcionalidades, rendimiento y comportamiento bajo diferentes condiciones.

- Permiten simular escenarios reales o extremos para asegurar robustez.

---

## Conclusión

Dominar estas técnicas dinámicas es como saber conducir y revisar un coche a fondo para asegurar que es seguro y eficiente. Para un QA, son indispensables para garantizar la calidad y éxito en el examen ISTQB Foundation Level.

---

## Referencias SSTQB

Consulta la guía oficial de *Foundation Level* del ISTQB para un detalle completo y ejemplos prácticos de estas técnicas.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
