Testing automatizado con Pytest y HTTPX

Cuando desarrollamos una aplicación, confiamos en que el código funcione como esperamos. Pero en el mundo real, las cosas cambian. El código evoluciona, nuevas funcionalidades se añaden, otras se eliminan, y lo que funcionaba ayer puede fallar mañana. Por eso, no basta con probar manualmente una vez. Necesitamos una forma de verificar de manera automática que nuestra aplicación sigue comportándose como debe, incluso tras múltiples modificaciones. Ahí entra el testing automatizado.

En el ecosistema Python, dos herramientas se combinan para lograrlo: Pytest y HTTPX. Pytest es el framework de pruebas más usado en Python. Se encarga de ejecutar funciones de prueba, detectar fallos y mostrar informes claros de lo que funciona y lo que no. Es flexible, extensible y fácil de aprender. Por otro lado, HTTPX es una librería para hacer peticiones HTTP. En el contexto de FastAPI, se utiliza a través de una herramienta interna llamada TestClient, que simula ser un cliente real accediendo a tu API, sin necesidad de levantar un servidor real.

La idea principal es la siguiente: tú defines funciones especiales que simulan interacciones con tu API. Estas funciones reciben un nombre que empieza por la palabra "test", lo que permite que Pytest las detecte automáticamente. Dentro de cada función, usas el TestClient para enviar peticiones a las rutas de tu API, tal como lo haría un navegador o una aplicación externa.

Por ejemplo, puedes simular una petición de tipo GET y verificar que la respuesta tenga un código de estado específico. El código 200 indica que todo salió bien. Si falta algún dato o hay un error, podrías esperar un código 422, que indica problemas de validación. Estas comprobaciones se llaman aserciones, y sirven para verificar que la respuesta cumple con lo esperado.

Además de los códigos de estado, puedes comprobar que el contenido de la respuesta sea correcto. Por ejemplo, si una ruta devuelve una lista de usuarios, puedes asegurarte de que esa lista tenga cierta longitud o contenga ciertos datos. Todo esto se hace dentro de las funciones de prueba, lo que permite revisar con rapidez si tu API devuelve lo correcto.

Un elemento esencial en Pytest son las fixtures. Se trata de funciones especiales que preparan un entorno previo a cada prueba. Por ejemplo, puedes crear una fixture que genere un cliente de prueba, o que cree datos de ejemplo que tus pruebas necesitan. Las fixtures permiten escribir menos código repetido, mantener la limpieza del proyecto y tener un mayor control sobre lo que se prueba.

Otra ventaja del testing automatizado es que puedes integrarlo en tus flujos de trabajo. Por ejemplo, cada vez que haces un cambio en tu repositorio, puedes configurar que se ejecuten las pruebas automáticamente. Si algo falla, lo sabrás al instante. Esta práctica se conoce como Integración Continua, y permite que los errores se detecten cuanto antes.

Con el tiempo, irás ampliando tu conjunto de pruebas. Empezarás cubriendo las rutas más importantes, como las que crean, leen o actualizan datos. Luego añadirás pruebas para manejar errores, para comprobar respuestas ante entradas inesperadas, o para asegurar que los cambios futuros no rompan funcionalidades anteriores. Así, tu código se vuelve más robusto y confiable.

El testing automatizado no es solo una herramienta técnica. Es una forma de trabajar con confianza, de reducir errores y de proteger el tiempo de tu equipo. Cuando escribes pruebas, estás escribiendo una promesa: “mi API se comporta así, y si algo cambia, lo sabré”.
