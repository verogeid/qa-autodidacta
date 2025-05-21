# Semana 8 – Análisis Estático de Código

## Introducción

El *análisis estático* forma parte de las pruebas estáticas. Se refiere al proceso de evaluar el código fuente, sin ejecutarlo, para detectar errores, vulnerabilidades o incumplimientos de estándares.

## ¿Por qué es importante?

- Detecta defectos tempranamente.
- Reduce costes de corrección.
- Mejora la calidad del código.
- Refuerza las prácticas de codificación seguras y consistentes.

## ¿Qué puede detectar?

- Errores de sintaxis.
- Código muerto (no ejecutado).
- Violaciones de estándares de codificación.
- Variables no inicializadas.
- Problemas de complejidad ciclomática.
- Posibles vulnerabilidades de seguridad.

## Herramientas de análisis estático

Algunas herramientas populares por lenguaje:

- **JavaScript**: ESLint
- **Java**: Checkstyle, PMD, SpotBugs
- **Python**: Pylint, Flake8
- **C/C++**: CPPCheck
- **Multi-lenguaje**: SonarQube

Estas herramientas pueden integrarse en pipelines CI/CD.

## Métricas útiles

- **Complejidad ciclomática**: mide rutas independientes en el código.
- **Cobertura de código**: porcentaje de código cubierto por pruebas (no estática, pero relacionada).
- **Duplicación de código**: identifica fragmentos repetidos.

## Buenas prácticas

- Automatiza el análisis estático en cada commit o push.
- Configura reglas acordes al equipo/proyecto.
- Revisa los reportes y actúa sobre los hallazgos.
- Usa revisiones de código junto al análisis automático.

## Limitaciones

- No detecta errores en tiempo de ejecución.
- Puede generar *falsos positivos* o *falsos negativos*.
- No sustituye a las pruebas dinámicas, pero las complementa.

## Relación con SSTQB

El análisis estático es parte del temario SSTQB como técnica preventiva dentro del grupo de *pruebas estáticas*. Se debe conocer su funcionamiento, aplicaciones, ventajas y limitaciones.

---

## Conclusión

El análisis estático es una práctica esencial en entornos de desarrollo modernos. Complementa las pruebas dinámicas y mejora la calidad desde fases tempranas del ciclo de vida del software.
