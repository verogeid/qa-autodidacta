Modelos de datos con Pydantic

Una API bien diseñada no solo transmite información: la comprende, la filtra y la valida. Para lograrlo, necesitamos algo más que variables y funciones: necesitamos estructura. En FastAPI, esa estructura nos la da Pydantic, una herramienta que permite definir modelos de datos con claridad, precisión y control.

Imagina que tu API fuera como una oficina de correos. No basta con recibir paquetes. Cada paquete debe estar correctamente etiquetado, con el nombre del remitente, la dirección del destinatario y una descripción clara del contenido. Si algo está mal escrito o falta, el paquete se devuelve. Pydantic actúa igual: define cómo deben ser los datos que recibe tu aplicación, y los valida antes de permitir que lleguen a tu lógica de negocio.

El corazón de Pydantic es una clase especial llamada BaseModel. Todos los modelos que definas en tu API deben heredar de ella. Dentro de estos modelos, defines los atributos que esperas: por ejemplo, un nombre, una edad, o una dirección de correo electrónico. Puedes especificar qué tipo de datos se espera, si son obligatorios o opcionales, y hasta añadir restricciones como una longitud mínima o un valor máximo permitido.

Pero Pydantic no se queda ahí. Dispone de una función llamada Field que te permite afinar aún más el comportamiento de cada atributo. Puedes definir descripciones, ejemplos, valores por defecto, e incluso validaciones más específicas. Por ejemplo, podrías indicar que una edad no puede ser negativa, que un campo de texto no esté vacío, o que un número tenga que ser mayor que uno.

Este nivel de control no solo evita errores: también hace tu API más comprensible. Quien desarrolla contigo, o quien simplemente consume tu servicio, sabe desde el primer momento qué estructura debe seguir. Los errores se detectan antes de llegar al núcleo de la aplicación, lo que ahorra tiempo y evita comportamientos inesperados.

Y hay más. Los modelos de Pydantic no sirven únicamente para validar lo que entra en tu API. También definen lo que sale. Puedes usar los mismos modelos para describir las respuestas. Esto te permite tener un control completo sobre los datos que expones. Si hay información que no debe mostrarse al usuario final, como contraseñas o identificadores internos, simplemente no la incluyes en el modelo de respuesta.

Otra ventaja importante es que FastAPI aprovecha estos modelos para generar documentación interactiva automáticamente. Gracias a eso, cualquier persona que consulte tu API podrá ver de forma clara qué datos debe enviar, en qué formato y qué respuesta puede esperar. Y todo eso se genera sin necesidad de escribir documentación adicional.

Pydantic también transforma los datos de forma inteligente. Por ejemplo, si alguien envía un número como texto, pero ese número es válido, lo convierte automáticamente. Si hay campos opcionales que no se incluyen, pueden completarse con los valores por defecto definidos en el modelo. Esto significa que puedes asumir con seguridad que los datos que llegan a tu función ya han sido revisados, transformados y validados.

En conjunto, Pydantic eleva el nivel de tu API. La hace más robusta, más legible, más segura y más fácil de mantener. Ya no dependes de validaciones manuales dispersas por el código. Lo tienes todo centralizado y bien definido en tus modelos. Esto no solo mejora tu productividad, también mejora la calidad de tu aplicación.

Cuando entiendes y aplicas bien Pydantic, ya no estás simplemente aceptando datos. Estás diseñando contratos claros entre tu API y el mundo exterior. Y eso es una marca clara de un desarrollo profesional.
