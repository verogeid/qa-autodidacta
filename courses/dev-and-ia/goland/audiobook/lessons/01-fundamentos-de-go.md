Fundamentos de Go

Imagina que vas a aprender un lenguaje llamado Go, o Golang. Fue creado por Google para que los programas sean simples, rápidos y eficientes.

---

1. Tu primer programa

Lo primero que harás es mostrar un mensaje en pantalla. Para eso, en Go usamos la función fmt.Println [pause]. Esta función pertenece al paquete llamado fmt, que sirve para formatear texto.

fmt.Println muestra el texto que le des en pantalla y automáticamente pasa a la siguiente línea. Por ejemplo, si quieres saludar al usuario, usarás esta función con el texto entre comillas.

[pause]

---

2. Variables y tipos

En Go, una variable es un espacio donde guardas datos. Cada variable tiene un tipo, como string para texto, int para números enteros y bool para valores verdadero o falso.

Para crear una variable, le das un nombre y especificas su tipo. Por ejemplo, puedes guardar un nombre en una variable llamada nombre de tipo string.

[pause]

---

3. Entrada del usuario

Si quieres que el programa reciba información del usuario, usas la función fmt.Scan [pause].

Esta función espera que alguien escriba algo y luego guarda ese valor en una variable que tú le indiques.

Para que fmt.Scan funcione correctamente, debes pasarle la referencia de la variable, que en Go se indica con el símbolo & delante del nombre.

[pause]

---

4. Funciones y reutilización

Una función es un bloque de código que puedes usar varias veces.

Por ejemplo, la función sumar puede recibir dos números y devolver su suma.

Cada función tiene un nombre, parámetros que recibe y un valor que puede devolver.

Así, cuando necesites sumar dos números, solo llamas a la función y reutilizas ese código.

[pause]

---

5. Decisiones con if

El programa puede tomar decisiones con la sentencia if [pause].

Esta estructura evalúa una condición. Si es verdadera, ejecuta un bloque de código; si no, puede ejecutar otro bloque con else.

Por ejemplo, si una persona tiene 18 años o más, mostramos un mensaje que dice Mayor de edad; si no, mostramos Menor de edad.

[pause]

---

6. Repeticiones con for

Cuando quieres repetir acciones varias veces, usas un bucle for [pause].

En Go, el bucle for puede controlar cuántas veces se repite un bloque de código usando una variable contador.

Por ejemplo, puedes contar del 1 al 5 mostrando cada número en pantalla.

[pause]

---

7. Elegir entre opciones: switch

Si tienes varias opciones posibles y quieres elegir solo una, usas la sentencia switch [pause].

Esta estructura compara un valor y ejecuta el bloque correspondiente a ese caso.

Si ninguna opción coincide, puedes usar default para un caso por defecto.

Por ejemplo, dependiendo del día que escriba el usuario, mostrarás mensajes diferentes.

[pause]

---

8. Multiplicar valores con funciones

Las funciones también pueden trabajar con números decimales, como el tipo float64 [pause].

Por ejemplo, una función llamada multiplicaPorDos puede recibir un número decimal, multiplicarlo por dos y devolver el resultado.

Así reutilizas código para cualquier número que quieras procesar.

---

Conclusión

En este primer tema has aprendido lo básico para crear programas en Go.

Has visto cómo mostrar mensajes, usar variables con diferentes tipos, recibir datos del usuario, tomar decisiones con if, repetir acciones con for, elegir opciones con switch y crear funciones para reutilizar código.

Recuerda que entender cada concepto es más importante que memorizar el código.

Si comprendes el propósito y uso de cada sentencia, estarás preparado para avanzar y dominar Go.

[long pause]
