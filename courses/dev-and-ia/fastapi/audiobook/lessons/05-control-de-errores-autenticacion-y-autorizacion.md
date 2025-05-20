5. Control de errores, autenticación y autorización con JWT y JWE

Las APIs no solo deben funcionar: deben ser seguras y resilientes. Esta semana aprenderás a gestionar errores y proteger tu aplicación con mecanismos de autenticación y autorización.

Primero abordaremos el control de errores. ¿Qué ocurre cuando un cliente envía una petición incorrecta o algo falla en el servidor? Aprenderás a devolver respuestas claras, con códigos de estado adecuados y mensajes útiles. Esto mejora la experiencia del usuario y facilita la depuración.

Luego entraremos en la autenticación: cómo verificar la identidad de un usuario. Aquí entran en juego los *JSON Web Tokens*, o JWT. Se trata de pequeños objetos firmados digitalmente que contienen información del usuario. Con ellos, no necesitas mantener sesiones en el servidor. El cliente guarda el token y lo envía en cada petición.

Pero los JWT también plantean retos. Por ejemplo, si alguien los intercepta, puede acceder a información sensible. Para evitarlo, usaremos JWE, una versión cifrada del token. Así, incluso si alguien lo captura, no podrá leerlo ni modificarlo.

Verás cómo generar y validar tokens, cómo añadir reglas para restringir el acceso a ciertas rutas, y cómo invalidarlos si cambian las condiciones del usuario.

Entenderás también la diferencia entre autenticación (saber quién eres) y autorización (saber qué puedes hacer). Ambas son esenciales en cualquier API real.

Al final de esta semana, sabrás cómo construir una API que no solo funcione, sino que también sepa protegerse, responder adecuadamente a errores y garantizar que solo los usuarios correctos acceden a la información adecuada.
