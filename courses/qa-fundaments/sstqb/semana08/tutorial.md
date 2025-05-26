# Tema 8 - Gestión de defectos, riesgos y mejora continua

## Gestión de defectos

Cuando encuentras un error en el software, lo llamamos *defecto* o *bug*. Reportarlo bien es clave para que el equipo de desarrollo lo entienda y solucione rápido, evitando malentendidos o pérdidas de tiempo.

Un buen informe de defecto debe ser:

- **Claro:** Describe el problema sin ambigüedades, como si contaras una historia precisa.  
- **Objetivo:** Solo hechos verificables, sin suposiciones ni opiniones.  
- **Reproducible:** Incluye pasos detallados para repetir el error, igual que seguir una receta para obtener el mismo resultado.  

Piensa en el informe como una receta para que otros cocinen exactamente el mismo plato y puedan ver qué salió mal. Si falta un ingrediente o un paso, la receta no sirve.

Además, es útil incluir:

- **Datos del entorno:** versión del software, sistema operativo, navegador, etc.  
- **Evidencias:** capturas de pantalla, logs o videos que muestren el error.

## Clasificación de defectos

No todos los defectos son iguales. Se clasifican para gestionar mejor su impacto y priorizar su solución. Las principales categorías son:

- **Impacto:** Qué tan grave es el daño para el usuario o el negocio.  
- **Severidad:** Qué tan urgente o difícil es corregirlo.  
- **Prioridad:** Orden en que se debe solucionar según recursos y plazos.

Por ejemplo, un error que impide a un usuario comprar es **crítico** y debe arreglarse primero. Un error que solo afecta la apariencia de un texto puede ser **menor** y esperar.

Imagina que el software es una ciudad: un defecto crítico es como una falla en el puente principal, que detiene todo el tráfico; uno menor es como un semáforo que parpadea, molesto pero no bloquea el flujo.

## Gestión de riesgos

*Riesgo* es la posibilidad de que ocurra algo malo. En testing, la gestión de riesgos nos ayuda a enfocar esfuerzo donde realmente importa, optimizando tiempo y recursos.

Imagina que vas a cruzar un puente viejo. El riesgo es que se caiga. Para evitarlo:

- Inspeccionas el puente antes (pruebas).  
- Preparas un plan B por si falla (planes de contingencia).  
- Decides no cruzar si es demasiado peligroso (cancelar o posponer funcionalidades).

Lo mismo sucede en software: priorizamos probar las áreas con más riesgo, como funciones críticas o complejas, para evitar sorpresas graves en producción.

Para gestionar riesgos se suele:

- Identificar riesgos potenciales.  
- Evaluar su probabilidad y posible impacto.  
- Priorizar acciones según esta evaluación.  
- Monitorear y revisar continuamente.

## Mejora continua

Testing no solo busca errores, también es una fuente de aprendizaje para mejorar procesos.

Después de cada proyecto, el equipo debe hacer una revisión llamada *lecciones aprendidas*, donde analizan:

- Qué salió bien y por qué.  
- Qué no funcionó y cómo evitarlo.  
- Qué mejoras implementar en futuros proyectos.

Esto hace que el proceso de desarrollo y testing evolucione, reduciendo errores repetidos y aumentando la calidad.

Piensa en esto como ajustar una receta tras cada intento, para que el próximo plato quede aún mejor.

---

Este tema es fundamental para que el testing aporte valor real, ayude a entregar software confiable y facilite la toma de decisiones en el proyecto.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
