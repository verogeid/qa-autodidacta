Pruebas estáticas: revisiones, walkthroughs y análisis estático. [pause]

En esta sesión vamos a explorar un conjunto de técnicas que permiten encontrar errores en software sin necesidad de ejecutarlo. Sí, como lo oyes: se puede detectar un fallo sin abrir la aplicación, sin hacer clics ni pruebas automáticas. Esto se llama *testing estático*, y entenderlo bien es clave tanto para tu futuro profesional como para superar el examen SSTQB. [pause]

¿Qué son las pruebas estáticas? [pause]

Imagina que estás revisando un plano antes de construir una casa. Si hay un error en ese dibujo, no hace falta levantar paredes para darte cuenta: solo con observarlo puedes anticiparte y evitar desastres. [pause]

Las pruebas estáticas funcionan igual: revisan documentos, requisitos, diagramas o código *sin ejecutarlos*. Así se detectan errores de forma temprana, barata y muy eficaz. [pause]

Podemos dividirlas en dos grandes grupos: [pause]

- Revisiones hechas por personas. [pause]
- Análisis estático realizado por herramientas. [pause]

Veámoslos en detalle. [pause]

Revisiones. [pause]

Las revisiones consisten en leer con atención lo que se ha producido en el proyecto: un código, un diseño, o un documento. El objetivo es detectar fallos, omisiones o cosas que no se entienden bien. [pause]

Hay varios tipos según su nivel de formalidad: [pause]

- Revisión informal. [pause]
  Aquí, un compañero echa un vistazo a tu trabajo y te dice si ve algo raro. No hay reglas ni papeles que firmar. Es como pedirle a alguien que lea un mensaje antes de enviarlo. [pause]

- Walkthrough. [pause]
  El autor del trabajo lo presenta al grupo y lo explica paso a paso. La idea no es señalar errores, sino compartir conocimiento, resolver dudas y aprender en equipo. Es como mostrarle a alguien tu receta favorita y escuchar sus sugerencias. [pause]

- Revisión técnica o inspección formal. [pause]
  Aquí ya hablamos de un proceso serio: hay roles definidos, documentos que cumplir y registros que dejar. Se designa un moderador, se usan listas de verificación, y se anotan todos los defectos encontrados. Es como una auditoría de calidad, donde todo está documentado. [pause]

Cada tipo aporta cosas distintas, y no son excluyentes: puedes combinarlos según el momento del proyecto o la cultura del equipo. [pause]

Walkthrough en detalle. [pause]

Un walkthrough es un recorrido guiado por el propio autor, que presenta lo que ha hecho y lo explica a los demás. No hay presión: se trata de entender el trabajo, resolver dudas y recibir comentarios útiles. [pause]

Es una técnica fantástica para equipos nuevos, para formar a personas, o para asegurar que todos entienden un cambio importante. [pause]

Análisis estático de código. [pause]

Ahora vamos con la otra gran rama: el análisis automático. Aquí no intervienen personas leyendo documentos, sino herramientas que escanean el código para detectar errores. [pause]

Es como usar un corrector ortográfico, pero en lugar de palabras mal escritas, detecta cosas como: [pause]

- Código duplicado o innecesario. [pause]
- Errores de formato o sintaxis. [pause]
- Incumplimiento de normas internas. [pause]
- Vulnerabilidades de seguridad. [pause]
- Complejidad excesiva del código. [pause]

Por ejemplo, si una función tiene muchas decisiones internas, podría ser difícil de mantener. La herramienta lo señala para que puedas simplificarlo. [pause]

Este análisis no detecta si el software hace lo que debe, pero sí ayuda a mantener un código más limpio, seguro y fácil de entender. [pause]

Listas de verificación. [pause]

Cuando haces una revisión formal, no puedes confiar solo en tu memoria. Por eso se usan listas de verificación, también llamadas checklists. [pause]

Estas listas recuerdan qué cosas revisar, como: [pause]

- ¿Está claro lo que se dice? [pause]
- ¿Cumple con los requisitos definidos? [pause]
- ¿Hay errores comunes, como nombres confusos o estructuras mal usadas? [pause]

Son como una lista para revisar el coche antes de un viaje largo: te aseguras de que no se te olvida nada importante. [pause]

Métricas de calidad. [pause]

Las métricas son números que te ayudan a medir la calidad de lo que estás revisando. [pause]

Algunas métricas clave son: [pause]

- Complejidad ciclomática: mide cuántas rutas lógicas hay en un trozo de código. Si hay muchas, puede ser difícil de mantener. [pause]

- Densidad de defectos: indica cuántos errores se han encontrado en relación al tamaño del código o documento. [pause]

- Cobertura de reglas: qué porcentaje de normas internas se están cumpliendo. [pause]

Estas métricas sirven para decidir dónde poner el foco y cómo mejorar. [pause]

Resumen. [pause]

Las pruebas estáticas te permiten mejorar un proyecto sin necesidad de ejecutarlo. Pueden ser manuales —como las revisiones informales, los walkthroughs o las inspecciones formales—, o automáticas —como el análisis estático de código con herramientas. [pause]

Usar listas de verificación y analizar métricas ayuda a que estas revisiones sean más eficaces. [pause]

Aprender y aplicar estas técnicas es clave no solo para pasar el examen SSTQB, sino también para trabajar con calidad desde el primer día. [long pause]
