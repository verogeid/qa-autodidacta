# Semana 9 – Técnicas Dinámicas de Prueba

## Introducción

Las *técnicas dinámicas de prueba* consisten en ejecutar el software para evaluar su comportamiento y detectar defectos en condiciones reales. Son esenciales en el proceso de aseguramiento de calidad, ya que permiten validar que el sistema cumple con los requisitos funcionales y no funcionales.

---

## Conceptos clave

- **Pruebas Dinámicas:** Involucran la ejecución del software con casos de prueba diseñados para verificar funcionalidades y detectar errores.

- **Pruebas de Caja Negra:** Se centran en evaluar la funcionalidad sin conocer la implementación interna del software. El tester diseña pruebas basándose en los requisitos y especificaciones.

- **Pruebas de Caja Blanca:** Requieren conocimiento interno del código para diseñar pruebas que cubran la lógica y las estructuras internas del software.

---

## Técnicas de Diseño de Pruebas Dinámicas

### Técnicas de Caja Negra

1. **Partición Equivalente:** Divide los datos de entrada en grupos que deberían comportarse de manera similar. Solo se prueba un valor representativo por grupo.

2. **Análisis de Valores Límites:** Se enfoca en los valores en los límites de las particiones equivalentes, donde es más probable que ocurran errores.

3. **Tabla de Decisión:** Organiza condiciones y acciones en una tabla para cubrir combinaciones lógicas posibles.

4. **Pruebas Basadas en Estado:** Evalúa el comportamiento del sistema según diferentes estados y transiciones entre ellos.

---

### Técnicas de Caja Blanca

1. **Cobertura de Sentencias:** Asegura que cada línea de código sea ejecutada al menos una vez.

2. **Cobertura de Decisiones:** Verifica que cada resultado posible de una decisión lógica se pruebe.

3. **Pruebas de Caminos:** Cubre todas las rutas posibles a través del código.

---

## Fases de Aplicación

Las técnicas dinámicas se aplican principalmente durante:

- **Pruebas Unitarias:** Verifican módulos o componentes individuales.

- **Pruebas de Integración:** Validan la interacción entre componentes.

- **Pruebas de Sistema:** Comprueban el sistema completo en un entorno similar al de producción.

- **Pruebas de Aceptación:** Validan que el sistema cumple con los requisitos y expectativas del usuario final.

---

## Ventajas de las Técnicas Dinámicas

- Detectan errores reales que ocurren en la ejecución.

- Permiten validar funcionalidades y rendimiento.

- Facilitan la detección de problemas en condiciones reales de uso.

---

## Conclusión

Dominar las técnicas dinámicas es fundamental para cualquier profesional de QA que desee asegurar la calidad del software y aprobar el examen SSTQB. Estas técnicas complementan a las pruebas estáticas y forman parte integral del ciclo de pruebas.

---

## Referencias SSTQB

Para profundizar, consulta la guía oficial de *Foundation Level* del ISTQB, que detalla las técnicas de diseño de pruebas dinámicas y su aplicación.

---

- [^ Índice del Tema](./readme.md)
- [Ejercicios](./ejercicios.md)
