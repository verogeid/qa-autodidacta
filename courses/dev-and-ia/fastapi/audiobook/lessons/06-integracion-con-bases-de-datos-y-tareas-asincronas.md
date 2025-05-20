Integración con bases de datos y tareas asíncronas

Hasta ahora has aprendido a crear rutas, manejar peticiones y enviar respuestas. Pero toda API útil necesita guardar y recuperar información. Por eso, en esta etapa del curso, vas a conectar tu proyecto FastAPI con una base de datos, y también aprenderás a gestionar tareas que pueden ejecutarse en segundo plano.

Primero, centrémonos en la base de datos. FastAPI no trae una integrada, pero se puede conectar fácilmente con motores como SQLite, que es ideal para pruebas locales, o PostgreSQL, que es muy usado en producción.

Para trabajar con estas bases de datos sin escribir consultas manuales, usarás un ORM. Estas siglas significan “mapeo objeto-relacional”. Lo que debes entender es que puedes definir tus datos como clases de Python, y el ORM se encarga de traducirlo al lenguaje de la base de datos. Con esto puedes crear, leer, actualizar o borrar registros usando solo Python.

FastAPI se lleva muy bien con una librería llamada SQLModel, que combina lo mejor de otras dos: Pydantic y SQLAlchemy. Te permite definir tus modelos, validarlos y usarlos tanto para guardar como para mostrar datos. Esta combinación te hará más productivo.

También es importante entender cómo se gestionan las sesiones de conexión a la base de datos. Una sesión es como un canal que se abre para leer o escribir datos. Si no se gestiona bien, puede generar errores o bloquear otras operaciones. Aprenderás cómo abrir, cerrar y reutilizar estas sesiones de forma segura.

Ahora hablemos de las tareas asíncronas.

En una API real, hay acciones que no necesitan ejecutarse en el momento exacto en que se recibe la petición. Un ejemplo común es el envío de correos. Otro es procesar archivos o generar reportes. Si lo haces todo en el mismo instante, el usuario tendrá que esperar. Y si tienes muchas peticiones, tu API se ralentiza o incluso se bloquea.

FastAPI permite definir funciones asíncronas usando las palabras clave async y await. De forma sencilla, esto significa que puedes hacer una pausa en la ejecución de una tarea, sin bloquear las demás. El servidor sigue atendiendo usuarios mientras la tarea pendiente se completa en segundo plano.

Además, si necesitas ejecutar tareas más largas o que deban continuar funcionando incluso si se reinicia el servidor, puedes apoyarte en herramientas externas como Celery o sistemas de colas como Redis. Estas opciones son más avanzadas, pero importantes si tu aplicación crece.

Durante esta semana verás cuándo conviene usar esta estrategia, cómo se define una función asíncrona, cómo gestionar las sesiones de base de datos, y qué librerías puedes utilizar si necesitas que esas tareas se ejecuten de forma persistente.

Lo importante no es memorizar comandos, sino comprender el flujo: la base de datos guarda lo esencial, y las tareas asíncronas manejan lo que puede esperar. Con esto, tu API será más rápida, más fiable, y más profesional.
