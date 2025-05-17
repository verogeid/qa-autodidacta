06: Cómo hablar entre componentes

En una app real, los componentes no viven aislados. Muchos de ellos necesitan compartir información. Por ejemplo, un botón que cambia algo en otro componente, o una lista que muestra datos que vienen de más arriba.

React propone una solución clara: usar props. Ya lo vimos. Las props permiten pasar información desde un componente padre a uno hijo. Pero, ¿y si el hijo necesita hacer algo que afecte al padre?

Aquí entran en juego las funciones. Podemos pasar una función como prop. Así, cuando el hijo necesite comunicar algo, puede simplemente llamar a esa función. Es el padre quien decide qué hacer con esa llamada.

Este patrón se llama lifting state up, y es común en React. Significa que el estado se mueve hacia el componente común más alto, para que pueda ser compartido por todos los que lo necesiten.

También existen otras soluciones más avanzadas, como el context, que permite compartir datos sin necesidad de pasar props en cadena. Pero eso lo veremos más adelante.

Por ahora, entender que los componentes pueden hablar entre ellos, y que las funciones son una vía para esa comunicación, es clave para construir apps coherentes.

