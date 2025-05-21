Formularios y Bases de Datos

Cuando necesitas procesar formularios más complejos, Flask cuenta con una extensión llamada WTForms. Esta herramienta permite definir los campos del formulario como objetos en Python. Por ejemplo, puedes crear un campo de texto, un campo para correo electrónico o una contraseña, y a cada uno le puedes añadir validadores.

Los validadores son funciones que revisan si el dato cumple ciertas condiciones: que no esté vacío, tenga una longitud mínima o máxima, o siga un formato correcto. Al enviar el formulario, usas el método `form.validate_on_submit()` para verificar si todos los campos son válidos. Si no, `form.errors` contiene los mensajes de error para mostrar al usuario.

Si los datos son válidos, puedes acceder a ellos con `form.<campo>.data`. Estos valores pueden usarse para guardar en la base de datos, mostrar mensajes o redirigir.

Para manejar bases de datos, Flask suele usar SQLAlchemy, que convierte tablas y registros en objetos de Python. Defines modelos como clases, donde cada atributo representa una columna. Puedes indicar tipos (texto, entero, fecha), si es clave primaria (`primary_key=True`), o si debe ser único.

SQLAlchemy permite consultas potentes como `.all()` para obtener todos los registros, `.first()` para el primero, `.get(id)` para buscar por clave primaria, y `.filter()` para aplicar condiciones.

También es posible manejar relaciones entre tablas usando claves foráneas y definir relaciones con `db.relationship()`. Esto es útil para modelos relacionados, como usuarios y sus publicaciones.

Para modificar la base de datos en producción, se recomienda usar `Flask-Migrate`, que permite crear y aplicar migraciones para actualizar la estructura sin perder datos.

Con estos conceptos y funciones, puedes crear formularios seguros, validar datos correctamente y trabajar con bases de datos complejas, llevando tu app Flask a un nivel profesional.
