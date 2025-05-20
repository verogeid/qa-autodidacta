Autenticación, errores y testing

Para proteger nuestra aplicación necesitamos controlar el acceso de los usuarios. Flask ofrece varias herramientas para implementar autenticación. Una de las extensiones más comunes es Flask Login.

Primero, debemos entender qué hace cada parte del proceso. La función login_user se encarga de iniciar la sesión del usuario una vez que sus credenciales han sido validadas. Esta función también puede recibir un parámetro llamado remember, que permite mantener la sesión activa incluso después de cerrar el navegador.

Para cerrar sesión usamos la función logout_user. Esta termina la sesión del usuario actual de forma segura.

En cualquier parte de nuestra aplicación, si queremos saber quién es el usuario que ha iniciado sesión, usamos la variable current_user. Esta variable nos permite acceder a información como el nombre del usuario, su identificador y otros atributos que hayamos definido en nuestro modelo de usuario.

Para proteger rutas que solo deben estar disponibles si el usuario ha iniciado sesión, usamos el decorador login_required. Este decorador se coloca justo antes de la definición de la función que maneja una ruta. Si alguien intenta acceder sin estar autenticado, será redirigido automáticamente a la página de inicio de sesión.

Las sesiones también son útiles para guardar datos temporales relacionados con el usuario. Flask permite usar un diccionario llamado session para guardar, por ejemplo, el nombre de usuario, su idioma preferido o cualquier otro dato que necesitemos mantener entre peticiones. Este diccionario se comporta como uno de Python y su contenido se almacena en una cookie firmada.

Cuando hablamos de errores, queremos que la aplicación no se rompa de forma inesperada y que los usuarios reciban mensajes claros. Flask permite definir funciones que se ejecutan automáticamente cuando ocurre un error. Para capturar errores como el cuatrocientos cuatro o el quinientos, usamos app.errorhandler y le pasamos el código del error como argumento. Dentro de esa función podemos devolver una plantilla personalizada que informe al usuario de manera amigable.

En cuanto a testing, Flask ofrece un entorno integrado para escribir pruebas. Uno de los métodos más usados es test_client. Esta función nos permite simular peticiones como si un navegador estuviera interactuando con nuestra aplicación. Podemos hacer pruebas para verificar si una ruta responde correctamente, si un formulario devuelve el resultado esperado o si se muestra el mensaje de error adecuado.

Además, muchas personas utilizan Pytest como marco de pruebas junto con Flask. Es una combinación poderosa y flexible. Podemos organizar nuestras pruebas en funciones que comienzan con la palabra test, y dentro de ellas usamos aserciones para comprobar que todo funciona como debe.

Algunas buenas prácticas que debemos seguir incluyen limpiar la base de datos antes y después de cada prueba, usar datos realistas y evitar pruebas que dependan unas de otras. También es recomendable probar tanto los casos exitosos como los que deberían fallar, para asegurarnos de que nuestra aplicación responde de manera controlada.

En resumen, con las funciones login_user, logout_user, current_user, el decorador login_required, la variable session, el método app.errorhandler y el uso de test_client, tenemos todo lo necesario para crear una aplicación segura, robusta y bien probada. Saber cómo y cuándo usarlos marca la diferencia entre una aplicación básica y una profesional.

