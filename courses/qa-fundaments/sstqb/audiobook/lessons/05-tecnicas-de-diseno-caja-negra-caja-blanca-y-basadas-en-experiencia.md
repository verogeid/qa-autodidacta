Técnicas de diseño: caja negra, caja blanca y basadas en experiencia. [pause]

En este tema vamos a aprender cómo se diseñan los casos de prueba, es decir, cómo decidir qué probar para asegurarnos de que una aplicación funciona correctamente. [pause]

Podemos imaginar el software como una caja. A veces, solo vemos lo que entra y lo que sale. Otras veces, podemos ver lo que hay dentro. Según eso, usamos técnicas distintas: [pause]. caja negra, caja blanca, o enfoques basados en la experiencia.

---

Caja negra: mirar sin abrir. [pause]

La caja negra se usa cuando no sabemos cómo está hecho el sistema por dentro. Solo sabemos lo que se espera de él. Es como usar un microondas: [pause]. no sabes cómo funciona internamente, pero sí qué pasa si pulsas ciertos botones.

---

Partición de equivalencia. [pause]

Imagina que tienes que probar una aplicación que solo permite edades entre 18 y 65 años. En vez de probar todas las edades posibles, agrupamos por rangos: [pause]. menores de 18, entre 18 y 65, y mayores de 65. Con un solo caso por grupo, ya estás probando todo el conjunto.

---

Valores límite. [pause]

Los errores suelen estar en los bordes. Si algo funciona entre 18 y 65, pruebo justo en 18 y 65. [pause] y también justo antes y después: [pause]. 17 y 66. Así me aseguro de que el sistema no se rompe en los extremos.

---

Tabla de decisión. [pause]

Supón que hay que decidir si un cliente recibe un descuento. Si tiene membresía y compra más de 100€, se lo damos. Si no, no. Combinamos condiciones y vemos qué resultados esperar en cada combinación. Esto lo organizamos en una tabla.

---

Transiciones de estado. [pause]

Esto se aplica cuando el sistema cambia de estado según lo que ocurre. Piensa en una cerradura electrónica: [pause]. está cerrada, luego se abre al meter el código, y se vuelve a cerrar después. Aquí se prueban todos los pasos y sus reglas.

---

Casos de uso. [pause]

Aquí seguimos lo que el usuario hace en su día a día. Si la app permite pedir comida, creamos casos para elegir plato, pagar, y confirmar el pedido.

---

Caja blanca: [pause]. abrir y revisar los engranajes. [pause]

La caja blanca se usa cuando sí podemos ver el código. Aquí revisamos si se están ejecutando todas las líneas y decisiones posibles.

---

Cobertura de sentencias. [pause]

Queremos que cada línea del código se ejecute al menos una vez en nuestras pruebas. Si algo nunca se ejecuta, podría tener un error oculto.

Cobertura de decisiones. [pause]

Si el código tiene una decisión tipo "si es mayor de edad, puede entrar”, probamos tanto el “sí” como el “no”. Así cubrimos todas las salidas de esa lógica. [pause]

Podríamos imaginar esto como recorrer todos los caminos de un laberinto: [pause]. no basta con llegar a la salida, hay que probar cada bifurcación.

---

Basadas en la experiencia: [pause]. instinto de tester. [pause]

A veces, ni hay requisitos claros ni sabemos cómo está hecho el sistema. Pero tenemos experiencia.

---

Adivinación de errores. [pause]

Un tester con experiencia ya sabe por dónde suelen fallar las aplicaciones. Por ejemplo, si un formulario no valida bien los caracteres especiales, lo prueba sin necesidad de que se lo digan.

---

Pruebas exploratorias. [pause]

Aquí se navega por el sistema libremente, sin guión. Se observa, se prueba, se anota lo que va fallando. Es como investigar un misterio: [pause] no sabes dónde está el fallo, pero tienes buen olfato.

---

Conceptos avanzados en diseño de pruebas. [pause]

Ahora vamos a ver algunas ideas más complejas pero útiles para profundizar en el diseño de pruebas. [pause]

Pruebas de condición múltiple. [pause]

Imagina que tienes que probar un semáforo con varias luces que dependen de diferentes sensores. No basta con probar cada sensor solo; hay que probar combinaciones de ellos para asegurarnos de que el semáforo funcione bien en todas las situaciones. [pause]

Aquí usamos combinaciones lógicas para cubrir todas las posibles condiciones juntas. Es como probar todas las mezclas de ingredientes en una receta para que el plato siempre quede bien. [pause]

Análisis de causa raíz. [pause]

Cuando encontramos un error, no basta con arreglarlo rápido. Tenemos que entender por qué pasó. Es como cuando una planta se está secando: no solo le das agua, también buscas si la tierra está mala o si no le da sol. [pause]

Este análisis ayuda a prevenir que el mismo fallo vuelva a ocurrir. [pause]

Pruebas basadas en modelos. [pause]

Piensa en un videojuego donde el personaje puede estar en distintos lugares y hacer diferentes acciones. Un modelo es como un mapa de todos esos estados y movimientos posibles. [pause]

Probar con modelos significa recorrer ese mapa para asegurar que todas las rutas y estados funcionan correctamente. [pause]

Automatización y diseño de pruebas. [pause]

Diseñar pruebas pensando en que luego serán automáticas es fundamental. Hay que ser claros, precisos y evitar pasos innecesarios. [pause]

Imagina que preparas un robot para que haga tareas en una fábrica: si las instrucciones no están bien diseñadas, el robot no funcionará. [pause]

Conclusión. [pause]

Las técnicas de diseño permiten trabajar con cabeza. No se trata de probar por probar, sino de saber por qué y cómo. Usarlas bien mejora la calidad, reduce errores y muestra el valor de nuestro trabajo. [pause]

Puedes usar una sola técnica o combinarlas. Elige según lo que sepas del sistema y lo que más riesgo conlleve. [pause]

Estos conceptos avanzados te ayudarán a diseñar pruebas más completas, eficientes y con mayor impacto en la calidad del software. [pause]

Con práctica, podrás responder preguntas del syllabus más complejas y destacar en tu preparación SSTQB. [pause]
