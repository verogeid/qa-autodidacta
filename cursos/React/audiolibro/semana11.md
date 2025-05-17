Semana 11: El ninja silencioso

useRef es como ese ninja que no hace ruido, pero siempre está ahí. No provoca renders, no interfiere, pero guarda valores entre renders.

¿Para qué sirve? Para dos cosas muy diferentes.

Primero: acceder a elementos del DOM. Si quieres enfocar un input al cargar, necesitas una referencia. Ahí entra useRef. Lo conectas con el input y puedes usar su propiedad .current para hacer cosas como focus().

Segundo: guardar valores que cambian sin querer redibujar el componente. Por ejemplo, un contador interno que no se muestra en pantalla pero que necesitas para lógica interna.

La ventaja de useRef es que no activa el ciclo de render. Puedes actualizar su contenido sin que React se inmute.

Imagínalo como una caja fuerte. Guardas algo, y cuando lo necesitas, lo sacas. Pero no molesta a nadie mientras está ahí.

Eso sí, no lo uses para todo. Solo cuando de verdad no quieras causar un render. Si el valor afecta la UI, usa useState. Pero si es un detalle interno, el ninja es tu mejor aliado.