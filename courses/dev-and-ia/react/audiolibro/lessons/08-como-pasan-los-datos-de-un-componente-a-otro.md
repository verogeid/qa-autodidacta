Cómo pasan los datos de un componente a otro

React organiza la interfaz como si fuera un árbol: hay componentes padres que contienen hijos, y esos hijos pueden tener sus propios hijos. La comunicación entre ellos es clara: los datos bajan y los eventos suben.

Cuando un componente padre quiere pasar información a un hijo, lo hace a través de props. Son como los argumentos de una función. El padre le dice: toma este dato, úsalo. El hijo no puede cambiarlo, solo leerlo.

Pero si el hijo necesita avisar al padre de algo, por ejemplo, que un botón fue pulsado o que cambió un valor, lo hace de forma inversa: el padre le pasa una función como prop y el hijo la ejecuta cuando haga falta.

Este sistema tiene una lógica muy limpia: el padre manda los datos, el hijo puede pedir cambios. Es muy fácil de seguir y evita confusiones. Cada componente tiene claro qué puede hacer.

Más adelante aprenderás otras formas de comunicar componentes cuando no están en línea directa. Pero por ahora, esta forma es la base: props para bajar datos, funciones para subir eventos.

