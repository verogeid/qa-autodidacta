# Tema 4 - Pruebas estáticas: revisiones, walkthroughs y análisis estático

En este tema aprenderás sobre las pruebas estáticas, técnicas fundamentales para detectar errores sin necesidad de ejecutar el software. Estas pruebas se centran en analizar documentos, código y otros artefactos para mejorar la calidad desde etapas tempranas, evitando así errores costosos en fases posteriores.

## ¿Qué son las pruebas estáticas y por qué son importantes?

Las pruebas estáticas consisten en examinar el software y su documentación sin correr el programa. Es como revisar un plano arquitectónico antes de construir un edificio: detectar problemas a tiempo evita errores graves durante la obra.

Este tipo de pruebas ayuda a identificar defectos en requisitos, diseño, código y documentación, permitiendo corregirlos antes de la implementación o la ejecución.

## Tipos de pruebas estáticas

### Revisiones

Las revisiones son inspecciones formales o informales donde un grupo de personas examina los documentos o código para encontrar defectos. Hay distintos niveles:

- **Revisión informal:** Un colega revisa el trabajo sin procedimientos estrictos.
- **Revisión técnica:** Un grupo de expertos con roles definidos revisa siguiendo un proceso estructurado.
- **Inspección:** El método más formal y riguroso con roles definidos (moderador, autor, revisor) y registro detallado de defectos.

Piensa en las revisiones como cuando varias personas leen un texto para corregir ortografía y coherencia antes de imprimirlo.

### Walkthroughs

Un walkthrough es una presentación guiada donde el autor del documento o código explica paso a paso su trabajo a un equipo, que hace preguntas y comenta. No busca defectos directos, sino comprender el contenido y fomentar la discusión para detectar posibles problemas.

Se parece a un paseo guiado por un museo, donde el guía explica y los visitantes hacen preguntas para entender mejor.

### Análisis estático de código

El análisis estático es el uso de herramientas automáticas que examinan el código sin ejecutarlo, detectando errores comunes, problemas de estilo o seguridad. Estas herramientas facilitan encontrar defectos que pueden pasar desapercibidos en revisiones manuales.

Ejemplos de herramientas incluyen *SonarQube*, *ESLint* o *Checkstyle*.

## Listas de verificación y métricas

Las listas de verificación son guías que ayudan a asegurar que ciertos aspectos clave se revisen en documentos o código, como cumplimiento de normas, estructura correcta o ausencia de errores comunes.

Las métricas cuantifican atributos del código o documentos, por ejemplo, número de líneas, complejidad ciclomática o porcentaje de cobertura documental, para evaluar calidad y detectar áreas problemáticas.

## Aplicación práctica en el ciclo de vida del software

Las pruebas estáticas se aplican desde las fases iniciales, como análisis de requisitos, diseño y codificación, complementando las pruebas dinámicas que requieren ejecutar el software.

Al realizar pruebas estáticas temprano, se reducen errores y costos posteriores, mejorando la calidad general del producto.

---

Con esta base, estarás preparado para entender y aplicar las pruebas estáticas en tus proyectos, además de superar las preguntas del SSTQB relacionadas con este tema.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
