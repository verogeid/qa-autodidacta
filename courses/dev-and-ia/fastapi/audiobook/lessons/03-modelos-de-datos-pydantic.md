Modelos de datos con Pydantic

Una API bien diseñada no solo recibe y envía datos, también sabe interpretarlos. Para lograrlo, necesitamos orden y estructura. En FastAPI, esa estructura la proporciona *Pydantic*, una herramienta que permite definir modelos de datos con precisión y control.

Imagina que tu API fuera una oficina de correos. No basta con recibir paquetes: cada uno debe tener el formato correcto. Un paquete debe incluir el nombre del remitente, la dirección de destino y el contenido bien descrito. Si falta algo o hay errores, no se puede procesar. Así funciona Pydantic: define cómo deben ser los datos y valida que cumplan esas reglas antes de que tu aplicación los utilice.

El núcleo de Pydantic es una clase especial llamada `BaseModel`. Todos los modelos que crees heredarán de ella. Dentro del modelo, defines los atributos que esperas: por ejemplo, un nombre, una edad o un correo electrónico. Puedes incluso especificar detalles como el tipo de dato, si es obligatorio, o si debe seguir un formato específico.

Además, puedes usar una función llamada `Field` para indicar valores por defecto, descripciones, ejemplos o restricciones adicionales. Por ejemplo, podrías marcar que un número debe ser mayor que cero, o que una cadena tenga un mínimo de caracteres. Así evitas errores desde el principio.

Estos modelos no solo sirven para validar la entrada. También los usas para definir cómo deben ser las respuestas de tu API. Así, cuando una ruta devuelve un objeto, puedes asegurarte de que su forma es clara y coherente. Si no quieres incluir ciertos campos sensibles en la respuesta, como contraseñas o identificadores internos, puedes configurarlo en el propio modelo.

Una ventaja clave es que, al usar estos modelos, FastAPI genera automáticamente la documentación de tu API. Quien quiera usarla verá en pantalla qué datos necesita enviar, qué formato deben tener y qué respuestas puede esperar. Y todo eso sin que tú tengas que escribir documentación extra.

Pydantic también transforma los datos. Si alguien envía un número como texto, lo convierte automáticamente. Si falta un dato opcional, puede completarse con un valor predeterminado. Todo esto sucede antes de que tu función siquiera empiece a ejecutarse.

Esta semana vas a centrarte en entender cómo definir estos modelos, cómo usar `BaseModel`, cómo aplicar `Field` para controlar cada detalle, y cómo integrar todo eso en tus rutas. Vas a dar un salto en calidad: tu API ya no será solo funcional, será robusta, clara y profesional.
