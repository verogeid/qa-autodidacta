Estructura, formularios y bases de datos

A medida que tu aplicación crece, mantener todo el código en un solo archivo se vuelve poco práctico. Por eso es importante conocer cómo organizar un proyecto Flask de forma escalable.

Una estructura habitual separa los archivos en carpetas según su función. Por ejemplo, puedes tener una carpeta para las plantillas, otra para los archivos estáticos como imágenes o estilos, y otra para los módulos de la aplicación. Esta organización hace que sea más fácil entender y mantener el proyecto con el tiempo.

Una técnica importante en Flask es el uso de blueprints. Los blueprints permiten dividir tu aplicación en partes reutilizables y modulares. Cada blueprint se define como una instancia que tiene su propio nombre, rutas asociadas, plantillas y funciones de vista. Después, se registra en la aplicación principal, indicándole a Flask que ese conjunto forma parte de la app. Así, puedes separar lógicamente los módulos: uno para usuarios, otro para productos, otro para administración, y así sucesivamente.

Cuando necesitas procesar formularios más complejos, Flask cuenta con una extensión llamada WTForms. Esta herramienta permite definir los campos del formulario como si fueran objetos en Python. Por ejemplo, puedes crear un campo de texto, un campo para correo electrónico o una contraseña, y a cada uno le puedes añadir validadores. Los validadores son funciones que revisan si el dato introducido cumple ciertas condiciones: que no esté vacío, que tenga una longitud determinada o que siga el formato de una dirección de correo válida.

La validación ocurre cuando el formulario es enviado. El formulario se analiza usando un método que comprueba si todos los campos son válidos. Este método devuelve verdadero si todo está correcto, y falso si hay algún error. En caso de errores, cada campo tiene una lista de mensajes que indican qué falló, y estos pueden mostrarse en la plantilla para ayudar al usuario a corregirlos.

Si los datos son válidos, puedes acceder a ellos desde los atributos de cada campo. Por ejemplo, si tienes un campo de nombre, puedes obtener su valor accediendo a ese campo concreto. Estos valores pueden usarse para guardarlos en la base de datos, mostrar un mensaje o redirigir a otra página.

Para trabajar con bases de datos, Flask suele usar SQLAlchemy, una herramienta que convierte las tablas y registros en objetos de Python. Así puedes trabajar con datos como si fueran clases y listas, en lugar de escribir instrucciones en lenguaje SQL directamente.

Con SQLAlchemy defines modelos. Un modelo es una clase que representa una tabla. Cada atributo de esa clase representa una columna de la tabla, y puedes indicar su tipo, como texto, número, fecha, entre otros. También puedes indicar si ese campo es obligatorio, si debe ser único o si es la clave principal de la tabla.

Cuando creas una instancia de esta clase, estás creando un nuevo registro. Puedes guardar esa instancia en la base de datos usando un método que añade el objeto a la sesión, y luego otro que guarda los cambios de forma permanente. También puedes hacer consultas, como buscar todos los registros, filtrar por una condición específica o buscar uno solo por su identificador.

Este conjunto de operaciones se conoce como CRUD, que son las siglas en inglés de crear, leer, actualizar y eliminar. Para actualizar un registro, primero lo buscas, cambias sus atributos y vuelves a guardar. Para eliminarlo, lo marcas para borrado y luego confirmas el cambio en la base de datos.

Cada una de estas acciones se conecta normalmente con una ruta. Por ejemplo, puedes tener una ruta para mostrar todos los registros en una lista, otra para mostrar un formulario de creación, otra para editar y otra para eliminar. Estas rutas se combinan con plantillas que presentan los datos o permiten introducirlos.

Al combinar rutas organizadas, formularios validados y conexión a bases de datos, tu aplicación ya puede ofrecer una funcionalidad completa para los usuarios, desde mostrar datos hasta permitir que los modifiquen de forma segura.

Con esta base, ya puedes empezar a crear aplicaciones reales que recojan datos, los almacenen y los presenten de forma útil y ordenada. Es el paso que separa una demo simple de una herramienta profesional.
