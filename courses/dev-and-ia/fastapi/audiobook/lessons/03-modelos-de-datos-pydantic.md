3. Modelos de datos con Pydantic

Una API no solo maneja datos, los entiende. Y para eso necesitamos orden. Aquí entra en juego Pydantic. Con Pydantic, defines estructuras claras para tus datos. Le dices a tu aplicación qué forma deben tener los datos que recibe y que devuelve.

Imagina que tu aplicación es una oficina de correos. Cada paquete que llega debe tener un formato correcto: remitente, dirección, contenido. Si falta algo o hay algo mal escrito, no lo aceptas. Eso es lo que hace Pydantic con tus datos.

Esta semana aprenderás a crear modelos con Pydantic, que son como plantillas. Dirás, por ejemplo: "Un usuario tiene nombre, email y edad. La edad debe ser un número, el email debe tener un formato válido". Y FastAPI usará esa plantilla para revisar todos los datos que pasen por tu API.

También verás cómo transformar datos: convertir una cadena a número, generar valores por defecto o excluir campos sensibles como contraseñas. Todo eso sin escribir mucho código. Pydantic se encarga del trabajo repetitivo.

Gracias a estos modelos, tu API será más robusta, más clara, más fácil de mantener. Y lo mejor: la documentación automática de FastAPI incluirá estas validaciones, ayudando a quienes usen tu API a saber qué esperar.

Al final de la semana, tus rutas estarán respaldadas por modelos que validan, transforman y documentan los datos que manejas. La API empieza a tener estructura real, como un edificio con planos bien definidos.
