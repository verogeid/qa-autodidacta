Rutas, parámetros y respuestas

Toda API necesita una manera de recibir solicitudes y enviar respuestas. En FastAPI, eso se logra a través de las rutas. Una ruta es, simplemente, una dirección concreta a la que se puede acceder desde fuera. Si lo piensas como una ciudad, cada ruta sería una calle específica, y cada calle lleva a un sitio donde ocurre algo.

Cuando alguien accede a tu API, lo hace a través de una URL. Esa URL indica una ruta concreta. Por ejemplo, si escribes /users, estás accediendo a la ruta de usuarios. Y si escribes /users/5, estás accediendo al usuario número cinco. Así de simple, pero poderoso.

En FastAPI, para definir una ruta usas lo que se llama un decorador. Es una palabra especial que se coloca encima de una función. Por ejemplo, el decorador @app.get("/users") indica que esa función se activará cuando alguien haga una petición GET a la ruta /users. Si en vez de consultar quieres enviar datos nuevos, usarás @app.post. Y si quieres actualizar o eliminar algo, tendrás a tu disposición @app.put y @app.delete.

Cada decorador indica el tipo de operación que se espera. Son como señales de tráfico que indican si vas a entrar, modificar o salir. Gracias a esto, cada ruta queda muy clara y separada por su intención.

Dentro de cada ruta puedes manejar parámetros. Imagina que tienes muchos usuarios y quieres acceder a uno en particular. Podrías usar una ruta como /users/10, donde ese número 10 es el parámetro. FastAPI detecta ese valor y te lo entrega automáticamente en la función que tengas para manejar esa ruta. No necesitas hacer nada más. Solo decir: “espera un número aquí”.

Los parámetros pueden aparecer en distintas partes de la solicitud. Los más comunes están en la ruta, como acabamos de ver. Pero también pueden estar en la consulta, es decir, al final de la URL, tras el signo de interrogación. Por ejemplo: /users?age=30&active=true. Aquí estás pidiendo todos los usuarios de 30 años que estén activos. FastAPI también interpreta estos valores y te los entrega en los tipos adecuados, como enteros, cadenas o booleanos.

Y si necesitas enviar información más compleja, como un objeto entero con nombre, correo y dirección, puedes hacerlo usando el cuerpo de la petición. Esto se hace especialmente en operaciones POST o PUT. Ya veremos cómo estructurar eso mejor con modelos de datos, pero por ahora basta saber que FastAPI también lo gestiona por ti.

Una gran ventaja de FastAPI es que convierte los datos de forma automática. Si indicas que un parámetro debe ser un número, y alguien envía una cadena de texto que no puede convertirse, FastAPI responde con un error claro. Y todo esto lo hace sin que tú tengas que escribir ni una sola línea extra para validar.

Ahora, pensemos en las respuestas. Una API no solo recibe, también contesta. Y aquí entra en juego algo llamado response_model. Puedes indicarle a FastAPI que, al responder, lo haga siguiendo una estructura específica. Así, te aseguras de que todas las respuestas tengan el mismo formato, lo cual es clave cuando otras personas —o sistemas— consumen tu API.

Por ejemplo, si siempre devuelves usuarios con nombre, edad y correo, puedes definirlo en un modelo y usarlo en todas las rutas que respondan con usuarios. De esa forma, si más adelante quieres añadir o quitar un campo, solo lo haces en un sitio.

También puedes controlar qué código de estado HTTP devuelve tu API. No es lo mismo responder con un 200, que indica éxito, que con un 201, que se usa cuando se ha creado algo nuevo. Y si no se encuentra lo que se busca, puedes devolver un 404. Todo esto le da profesionalismo a tu API y hace que quien la use entienda bien qué está pasando.

Por último, algo que convierte a FastAPI en una herramienta excelente es que genera automáticamente la documentación de tu API. Al definir rutas, parámetros y respuestas, FastAPI construye una interfaz interactiva donde puedes probar todo lo que has hecho, ver qué necesita cada ruta, qué devuelve y cómo usarla. Esto se basa en un estándar llamado OpenAPI.

Gracias a esto, incluso alguien que nunca ha visto tu código puede entender tu API, probarla y comenzar a usarla sin dificultades. Esto ahorra mucho tiempo, evita errores y mejora la comunicación entre equipos.

Cuando comprendes cómo definir rutas claras, cómo manejar distintos tipos de parámetros, y cómo controlar las respuestas que da tu API, estás dando un gran paso. Tu aplicación deja de ser una simple colección de funciones para convertirse en un sistema organizado, profesional y fácil de mantener.

No subestimes el poder de estas primeras decisiones. Porque la forma en la que una API comunica sus rutas y sus respuestas es, en muchos casos, la diferencia entre un servicio usable y uno frustrante.
