Pruebas estáticas: revisiones, walkthroughs y análisis estático

En esta sesión hablaremos de las pruebas estáticas, una categoría fundamental en el testing que no requiere ejecutar el software para encontrar defectos. Comprender estas técnicas es clave para mejorar la calidad desde etapas tempranas y aprobar el examen SSTQB.

¿Qué son las pruebas estáticas? [pause]

Las pruebas estáticas consisten en revisar artefactos del proyecto, como documentos, diagramas o código fuente, sin ejecutar el programa. Su objetivo es identificar errores, omisiones o inconsistencias de forma temprana y económica.

Existen dos grandes tipos: [pause]

- Revisiones manuales: [pause]. realizadas por personas que examinan el contenido.
- Análisis estático automatizado: [pause]. con herramientas que inspeccionan el código sin ejecución.

Revisiones. [pause]

Las revisiones son inspecciones manuales del trabajo realizado y se clasifican en: [pause]

- Revisiones informales: [pause]. No siguen una estructura formal, suelen ser rápidas y entre compañeros para detectar errores básicos.
- Walkthroughs: [pause]. El autor presenta el trabajo al equipo y explica su contenido, buscando comentarios y sugerencias. Son semi-formales y fomentan el aprendizaje colaborativo.
- Revisiones técnicas o inspecciones formales: [pause]. Siguen un proceso estructurado con roles asignados (moderador, autor, revisores), listas de verificación y reportes de hallazgos. Son las más completas y permiten detectar defectos profundos. [pause]

Cada tipo aporta beneficios distintos y se pueden combinar según las necesidades del proyecto.

Walkthroughs en detalle.[pause].

En un walkthrough, el autor lidera la revisión guiando a los participantes a través del documento o código, aclarando dudas y recibiendo feedback. No hay presión ni un proceso rígido, lo que favorece la comunicación abierta y la identificación de problemas que a veces se pasan por alto.

Análisis estático de código. [pause]

El análisis estático usa herramientas automáticas para examinar el código fuente sin ejecutarlo. Estas herramientas detectan: [pause]

- Errores de sintaxis o de estilo. [pause]
- Código no utilizado o duplicado. [pause]
- Violaciones de normas de codificación. [pause]
- Potenciales vulnerabilidades de seguridad. [pause]
- Complejidad ciclomática (mide la cantidad de rutas lógicas en el código). [pause]

Aunque no detectan defectos de comportamiento, reducen la cantidad de errores y mejoran la mantenibilidad del software. [pause]

Listas de verificación (Checklists). [pause]

En las revisiones formales, se utilizan listas de verificación para asegurar que se evalúan aspectos clave como: [pause]

- Claridad y coherencia del contenido. [pause]
- Cumplimiento con requisitos y estándares. [pause]
- Ausencia de ambigüedades y errores comunes. [pause]

Estas listas ayudan a mantener la calidad y evitar omisiones durante la revisión. [pause]

Métricas de calidad documental y de código. [pause]

Las métricas apoyan la gestión de la calidad. Algunas comunes son: [pause]

- Complejidad ciclomática: [pause]. Indica la complejidad del código midiendo sus caminos lógicos. Un valor alto sugiere código difícil de mantener y propenso a errores. [pause]
- Densidad de defectos: [pause]. Número de defectos encontrados por tamaño del artefacto. [pause]
- Cobertura de reglas: [pause]. Porcentaje de cumplimiento de las normas definidas. [pause]

El análisis de estas métricas ayuda a priorizar esfuerzos de mejora. [pause]

Resumen. [pause]

Las pruebas estáticas son esenciales para detectar defectos sin ejecutar el software, permitiendo ahorrar tiempo y costos. Comprenden revisiones manuales (informales, walkthroughs e inspecciones) y análisis estático automatizado con herramientas. Usar listas de verificación y métricas de calidad potencia su efectividad. [pause]

Entender y aplicar correctamente estas técnicas es fundamental para tu éxito en el examen SSTQB y para cualquier proyecto de software que busque alta calidad. [long pause]
