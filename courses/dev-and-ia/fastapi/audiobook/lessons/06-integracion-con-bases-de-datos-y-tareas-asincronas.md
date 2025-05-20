Integración con bases de datos y tareas asíncronas

Hasta ahora has aprendido a crear rutas, manejar peticiones y enviar respuestas. Pero toda API útil necesita guardar y recuperar información. Por eso, en esta etapa del curso, vas a conectar tu proyecto FastAPI con una base de datos, y también aprenderás a gestionar tareas que pueden ejecutarse en segundo plano.

Primero, centrémonos en la base de datos. FastAPI no trae una integrada, pero se puede conectar fácilmente con motores como SQLite, que es ideal para pruebas locales, o PostgreSQL, muy usado en producción.

Para trabajar con estas bases de datos sin escribir consultas manuales, usarás un ORM, que significa “mapeo objeto-relacional”. Esto permite definir tus datos como clases de Python, y el ORM traduce esas clases a tablas y registros en la base de datos. Así puedes crear, leer, actualizar o borrar datos usando solo Python.

Un ejemplo clave es la función que abre una sesión de base de datos. Imagina que esta función actúa como una puerta que se abre para permitirte acceder y manipular los datos. Esta función recibe la configuración necesaria para conectarse, abre la sesión y te la devuelve para que puedas usarla. Cuando terminas, otra función se encarga de cerrar esa puerta para que nadie quede atrapado dentro y para liberar recursos.

FastAPI funciona muy bien con una librería llamada SQLModel, que combina la validación de datos de Pydantic y la gestión de bases de datos de SQLAlchemy. Usando SQLModel, defines modelos que describen tus datos y sus tipos, y esta librería se encarga de traducir todo a la base de datos. Así, al crear un objeto Python, puedes guardar ese objeto en la base de datos sin preocuparte por las consultas SQL.

Ahora pasemos a las tareas asíncronas. En una API real, hay tareas que no necesitan ejecutarse justo en el momento, como enviar correos electrónicos o procesar archivos grandes. Si estas tareas se hicieran durante la petición, el usuario tendría que esperar más tiempo, y la API se volvería lenta.

FastAPI permite definir funciones asíncronas usando las palabras clave *async* y *await*. Esto significa que puedes crear una función que, cuando encuentra un paso que tarda, como una consulta o espera, pausa esa función sin bloquear todo el servidor. Así, el servidor sigue atendiendo otras peticiones mientras la tarea asíncrona se completa en segundo plano.

Por ejemplo, imagina una función llamada enviar_correo. Esta función recibe los datos del destinatario y el mensaje, y utiliza *await* para pausar hasta que el correo se haya enviado. Mientras tanto, otras funciones pueden seguir trabajando. Cuando el envío termina, la función retoma y confirma que el correo fue enviado.

Para tareas aún más largas o que deban sobrevivir a reinicios del servidor, puedes usar herramientas externas como Celery, que funcionan con sistemas de colas como Redis. En este caso, enviarías la tarea a la cola con una función específica, que recibe los parámetros necesarios y devuelve un identificador o estado de la tarea. Otro proceso externo recogerá esa tarea y la ejecutará, mientras tu API sigue disponible para responder rápido a los usuarios.

Al final, entenderás cómo gestionar las sesiones de base de datos, cuándo y cómo definir funciones asíncronas con *async* y *await*, y cómo usar librerías externas para manejar tareas persistentes. No se trata de memorizar comandos, sino de comprender el flujo: la base de datos guarda lo esencial, y las tareas asíncronas gestionan lo que puede esperar. Con esto, tu API será más rápida, fiable y profesional.
