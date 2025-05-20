Integración con bases de datos y tareas asíncronas

Una API sin una base de datos es como una tienda sin inventario. Esta semana aprenderás a conectar tu aplicación FastAPI con una base de datos y a trabajar con tareas asíncronas para mejorar el rendimiento.

Empezaremos entendiendo por qué necesitamos una base de datos. Las APIs suelen gestionar información: usuarios, productos, reservas… Esa información debe almacenarse de forma persistente, y para ello usamos bases de datos.

Verás cómo definir modelos que representen tus tablas y cómo conectarte a una base de datos como SQLite o PostgreSQL. Entenderás qué es un ORM y cómo usarlo para que no tengas que escribir SQL directamente. Esto te permitirá crear, leer, actualizar y eliminar datos desde tu código de forma sencilla.

Luego abordaremos el procesamiento asíncrono. Muchas operaciones en una API no necesitan ejecutarse inmediatamente, como enviar un correo o procesar archivos pesados. Con las tareas asíncronas, tu aplicación no se detiene esperando que estas acciones acaben. En su lugar, las deja en segundo plano y sigue atendiendo a otros usuarios.

Aprenderás a crear estas tareas usando `async` y `await`, y a ejecutarlas sin bloquear el resto del servidor. También entenderás en qué casos merece la pena usar esta estrategia.

Al final de esta semana, podrás construir APIs que interactúan de forma eficiente con bases de datos y que pueden delegar trabajo pesado a procesos paralelos, sin sacrificar la velocidad ni la experiencia del usuario.
