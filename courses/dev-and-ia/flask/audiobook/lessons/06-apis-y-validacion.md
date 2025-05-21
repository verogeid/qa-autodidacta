APIs y validación de datos

Una API (Application Programming Interface) permite que distintas aplicaciones se comuniquen entre sí. En Flask, crear una API REST es sencillo y potente. Las APIs usan principalmente los métodos HTTP (GET, POST, PUT, DELETE) para enviar o recibir datos, generalmente en formato JSON.

Para recibir datos JSON en una petición, usamos `request.get_json()`. Esta función extrae el contenido JSON enviado por el cliente para que podamos procesarlo.

Para definir una ruta que devuelva JSON, usamos `jsonify`. Este método convierte un diccionario de Python en una respuesta HTTP con formato JSON válido. Por ejemplo, al hacer una petición GET a `/api/productos`, podemos devolver una lista de productos con `jsonify(productos)`.

Cuando trabajamos con APIs, es importante validar los datos que recibimos. Aquí entra en juego Marshmallow, una librería que permite serializar y deserializar objetos de forma sencilla. Podemos definir esquemas que establecen qué campos son requeridos, su tipo y reglas de validación.

Las funciones clave de Marshmallow son `Schema.load()`, que valida y deserializa datos entrantes, y `Schema.dump()`, que serializa objetos Python para enviarlos en respuestas.

Para manejar errores en las APIs, Flask ofrece la función `abort()`. Con ella podemos detener la ejecución y devolver un código HTTP específico, como `abort(400)` para indicar que la solicitud es incorrecta.

Si queremos controlar más la respuesta, `make_response()` nos permite crear una respuesta HTTP personalizada con el contenido, código y cabeceras que queramos.

Además, cuando una API es consumida desde un navegador en otro dominio, es necesario manejar CORS (Cross-Origin Resource Sharing). La extensión `flask_cors` facilita esta configuración para evitar bloqueos.

Conocer estas funciones y herramientas te permite crear APIs robustas, con manejo adecuado de datos y errores, listas para integrarse en aplicaciones complejas.
