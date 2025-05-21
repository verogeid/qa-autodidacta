Autenticación y manejo de errores

Para que una aplicación web sea útil y segura, es fundamental implementar funcionalidades como el inicio de sesión y el manejo adecuado de errores. Estos elementos aseguran que la aplicación funcione correctamente y proteja la información de los usuarios.

---

Autenticación con flask_login

La autenticación identifica al usuario para conceder acceso a ciertas partes de la aplicación.

Las funciones clave de flask_login son:

- login_user(user, remember=False): .[pause]. Marca al usuario como autenticado. El parámetro remember mantiene la sesión activa tras cerrar el navegador.
- logout_user(): .[pause]. Cierra la sesión del usuario, eliminando su estado autenticado.
- current_user: .[pause]. Objeto que representa al usuario actual, puede ser autenticado o anónimo.
- login_required(función): .[pause]. Decorador que protege rutas para que solo usuarios autenticados puedan acceder.
- user_loader(callback): .[pause]. Función que flask_login usa para cargar un usuario desde su id almacenada en sesión.

---

Sesiones personalizadas

Flask proporciona el diccionario session para guardar datos temporales del usuario, como preferencias o configuraciones, almacenados de forma segura en cookies firmadas.

---

Manejo de errores

Flask permite definir funciones para gestionar errores HTTP específicos con decoradores:

- @app.errorhandler(código): .[pause]. Captura errores como 404 (no encontrado) o 500 (error interno) y permite mostrar páginas personalizadas.
- La función puede registrar el error para facilitar su diagnóstico y mejora la experiencia del usuario con mensajes claros.

---

Con esta base, tu aplicación estará protegida y podrá manejar errores con profesionalidad, mejorando la experiencia y seguridad.
