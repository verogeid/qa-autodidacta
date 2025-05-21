# Semana 3 – Técnicas de diseño de pruebas

## Objetivos

- Comprender las principales técnicas de diseño de pruebas  
- Diferenciar técnicas estáticas y dinámicas  
- Aplicar técnicas de caja negra, caja blanca y basadas en la experiencia  

---

## 1. Técnicas de prueba estáticas

- **Revisión:** análisis manual o asistido de documentos sin ejecutar el código  
- **Análisis estático:** uso de herramientas para detectar defectos sin ejecución  
- Sirven para encontrar defectos tempranamente y mejorar calidad  

---

## 2. Técnicas de diseño de pruebas dinámicas

### 2.1 Técnicas de caja negra (funcionales)

- Basadas en especificaciones sin conocer la implementación interna  
- Ejemplos: partición en clases de equivalencia, análisis de valores límite, pruebas de transición de estados  
- Útiles para validar requisitos y comportamientos  

### 2.2 Técnicas de caja blanca (estructurales)

- Basadas en la lógica interna y estructura del código  
- Ejemplos: cobertura de sentencias, cobertura de decisiones, cobertura de condiciones  
- Ayudan a verificar la ejecución completa del código  

### 2.3 Técnicas basadas en la experiencia

- Basadas en el conocimiento previo, intuición y experiencia del tester  
- Ejemplos: pruebas exploratorias, pruebas ad-hoc, pruebas basadas en errores comunes  
- Complementan las técnicas formales para encontrar defectos inesperados  

---

## 3. Comparación rápida

| Técnica               | Basada en       | Ejemplo de uso                      | Ventaja principal                |
|-----------------------|-----------------|-----------------------------------|--------------------------------|
| Caja negra            | Requisitos      | Validar entradas válidas y no válidas | No requiere conocimiento del código |
| Caja blanca           | Código fuente   | Verificar cobertura de sentencias  | Ayuda a detectar caminos no ejecutados |
| Basadas en experiencia | Intuición y experiencia | Exploración de nuevas áreas de riesgo | Descubre defectos no previstos |

---

## Resumen

- Las técnicas de diseño son clave para planificar pruebas efectivas  
- Combinar técnicas estáticas y dinámicas mejora la detección de defectos  
- La experiencia del tester es un recurso valioso en el testing  
