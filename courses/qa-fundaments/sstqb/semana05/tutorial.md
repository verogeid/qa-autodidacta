# Semana 05 – Técnicas Estáticas: Revisiones y Análisis Estático

## 🎯 Objetivos de aprendizaje

- Distinguir entre técnicas estáticas y dinámicas de prueba.  
- Comprender los beneficios del análisis estático y las revisiones.  
- Identificar los diferentes tipos de revisiones: informal, walkthrough, revisión técnica e inspección.  
- Reconocer los roles y responsabilidades en un proceso de revisión formal.  
- Aplicar técnicas de revisión a diferentes productos de trabajo.  
- Utilizar herramientas de análisis estático para detectar defectos sin ejecutar el código.

---

## 1. ¿Qué es la prueba estática?

La prueba estática es una técnica que permite identificar defectos en los productos de trabajo sin necesidad de ejecutar el software.  
Se centra en la revisión de documentos, código fuente y otros artefactos para detectar errores, omisiones o inconsistencias.

---

## 2. Diferencias entre técnicas estáticas y dinámicas

| Característica             | Técnicas Estáticas                            | Técnicas Dinámicas                      |
|----------------------------|-----------------------------------------------|-----------------------------------------|
| Ejecución del software     | No se requiere                                | Requiere ejecución                      |
| Tipo de defectos detectados| Errores en documentos, código no ejecutado    | Errores en tiempo de ejecución          |
| Momento de aplicación      | Etapas tempranas del desarrollo               | Etapas posteriores, durante pruebas     |

---

## 3. Revisiones: Tipos y procesos

Las revisiones son evaluaciones sistemáticas de productos de trabajo para identificar defectos y mejorar la calidad.

### Tipos de revisiones

1. **Revisión informal**: No estructurada, sin documentación formal.  
2. **Walkthrough**: El autor guía a los participantes a través del documento para obtener comentarios.  
3. **Revisión técnica**: Evaluación por parte de expertos técnicos para identificar defectos y mejorar la calidad.  
4. **Inspección**: Proceso formal con roles definidos y criterios de entrada/salida.

### Roles en una revisión formal

- **Moderador**: Lidera y coordina la revisión.  
- **Autor**: Creador del producto de trabajo.  
- **Revisor**: Examina el producto para identificar defectos.  
- **Escriba**: Documenta los hallazgos durante la revisión.

---

## 4. Análisis estático mediante herramientas

El análisis estático automatizado utiliza herramientas para examinar el código fuente y otros artefactos sin ejecutarlos.

### Beneficios

- Detección temprana de defectos.  
- Identificación de código muerto o redundante.  
- Verificación de cumplimiento de estándares de codificación.  
- Mejora de la mantenibilidad del código.

### Herramientas comunes

- **SonarQube**  
- **ESLint** (JavaScript)  
- **Pylint** (Python)  
- **FindBugs** (Java)

---

## 5. Aplicación práctica

Para consolidar los conocimientos adquiridos, se recomienda realizar ejercicios prácticos que incluyan:

- Identificación de defectos en fragmentos de código utilizando herramientas de análisis estático.  
- Simulación de una revisión formal con roles asignados.  
- Evaluación de documentos de requisitos para detectar inconsistencias.

---

## 📚 Recursos adicionales

- [ISTQB Foundation Level Syllabus 2018](https://www.istqb.org/downloads/send/2-foundation-level-documents/3-foundation-level-syllabus-2018.html)  
- [Guía de SonarQube](https://docs.sonarqube.org/latest/)  
- [Documentación de ESLint](https://eslint.org/docs/latest/)

