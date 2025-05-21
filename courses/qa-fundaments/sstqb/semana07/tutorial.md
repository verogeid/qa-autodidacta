# Semana 7 – Pruebas Estáticas

## ¿Qué son las pruebas estáticas?

Las *pruebas estáticas* permiten detectar defectos **sin ejecutar el código**. Se aplican sobre documentos, requisitos, casos de prueba, código fuente y scripts. Son una herramienta poderosa para la prevención temprana de errores.

### Beneficios clave
- Detección temprana de defectos.
- Reducción de costes de corrección.
- Mejora en la calidad del software.
- Aplicable en cualquier fase del desarrollo.

## Técnicas de prueba estática

### 1. Revisión informal
- Basada en la lectura libre de documentos.
- No estructurada.
- Suele usarse entre pares (peer review).

### 2. Revisión técnica
- Enfocada en encontrar defectos técnicos.
- Participan desarrolladores o expertos.
- Suele tener moderador y registro de hallazgos.

### 3. Revisión formal (inspección)
- Muy estructurada.
- Incluye roles definidos: autor, lector, moderador, registrador, revisor.
- Basada en checklist y métricas.

### 4. Walkthrough (recorrido guiado)
- El autor presenta su trabajo al grupo.
- El objetivo es clarificar y mejorar, no juzgar.
- Se fomenta el aprendizaje y la colaboración.

## Análisis estático con herramientas

- Herramientas que examinan el código sin ejecutarlo.
- Detectan problemas de estilo, posibles errores, vulnerabilidades, código duplicado.
- Útiles para lenguajes compilados y no compilados.

### Ejemplos:
- *Linters*
- *Análisis de complejidad ciclomática*
- *Herramientas SAST (Static Application Security Testing)*

## Revisión de documentación

Las pruebas estáticas no se limitan al código. También se aplican a:
- Especificaciones de requisitos
- Historias de usuario
- Planes de prueba
- Casos de uso
- Manuales de usuario

### ¿Qué se busca detectar?
- Ambigüedad
- Inconsistencias
- Omisiones
- Términos no definidos
- Requisitos no verificables

## Factores de éxito en las revisiones

- Checklists bien definidos
- Participación activa
- Ambiente de colaboración
- Documentación clara
- Roles establecidos

## Conclusión

Las pruebas estáticas son esenciales para mejorar la calidad desde las fases más tempranas. Aunque no reemplazan a las pruebas dinámicas, permiten encontrar defectos que luego serían costosos de corregir. Dominar estas técnicas es clave para cualquier profesional del aseguramiento de calidad.
