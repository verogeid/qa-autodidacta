Técnicas de diseño: caja negra, caja blanca y basadas en experiencia. [pause]

En este tema vamos a aprender cómo se diseñan los casos de prueba, es decir, cómo decidir qué probar para asegurarnos de que una aplicación funciona correctamente. [pause]

Podemos imaginar el software como una caja. A veces, solo vemos lo que entra y lo que sale; otras veces, podemos ver lo que hay dentro. Según eso, usamos técnicas distintas: [pause]. caja negra, caja blanca, o enfoques basados en la experiencia.

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

Las técnicas de diseño permiten trabajar con cabeza. No se trata de probar por probar, sino de saber por qué y cómo. Usarlas bien mejora la calidad, reduce errores y muestra el valor de nuestro trabajo. [pause]

Puedes usar una sola técnica o combinarlas. Elige según lo que sepas del sistema y lo que más riesgo conlleve.

---

Con estas herramientas, estarás listo para diseñar pruebas con criterio, mejorar la cobertura y prepararte para el examen SSTQB.
