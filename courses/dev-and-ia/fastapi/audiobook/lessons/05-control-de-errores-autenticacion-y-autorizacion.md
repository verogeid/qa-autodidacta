Control de errores, autenticación y autorización con JWT y JWE

Las APIs no solo deben funcionar: deben ser seguras y resilientes. Es fundamental saber cómo gestionar errores y proteger la aplicación con mecanismos de autenticación y autorización.

Primero, el control de errores. Cuando un cliente envía una petición incorrecta, por ejemplo, un dato que falta o un formato equivocado, FastAPI permite responder con un error claro y específico. Para eso, usamos una herramienta llamada HTTPException. Esta función recibe dos cosas principales: un código que indica el tipo de error, como 400 para error del cliente o 404 si no se encuentra el recurso, y un mensaje que explica qué pasó. Así, el cliente sabe exactamente qué corregir.

Imagina que alguien intenta acceder a un usuario que no existe. En ese caso, lanzarías un HTTPException con código 404 y un mensaje tipo “Usuario no encontrado”. Esto evita que la API falle sin explicación y mejora la experiencia del usuario.

Luego, la autenticación. Aquí es donde entran los JSON Web Tokens, o JWT. Un JWT es un objeto digital que contiene información sobre el usuario, como su nombre o permisos, firmado para evitar manipulaciones. Cuando un usuario se autentica con su usuario y contraseña, la API genera un JWT que él guardará y enviará en cada petición.

Para recibir ese token, FastAPI usa un mecanismo llamado OAuth2PasswordBearer. Esta función extrae automáticamente el token del encabezado de la petición, es decir, del lugar donde el cliente lo envía. No tienes que preocuparte por cómo extraerlo; esta función lo hace por ti y lo pasa a tu código para validar.

La validación del token consiste en comprobar que está firmado correctamente, que no ha expirado y que su contenido es válido. Si el token no es válido, se lanza un error con HTTPException para impedir el acceso.

Pero, ¿qué pasa si alguien intercepta ese token? Ahí es donde entra JWE, JSON Web Encryption. JWE es una versión cifrada del token JWT. Mientras que JWT solo está firmado para evitar cambios, JWE cifra el contenido para que nadie pueda leerlo aunque lo capture. Para manejarlo, usas funciones que cifran un JWT antes de enviarlo y que descifran al recibirlo. Estas funciones reciben el token y una clave secreta y devuelven la versión segura o la original para validar.

Finalmente, la autorización. Una vez que sabemos quién es el usuario por el token, debemos decidir qué puede hacer. Esto se controla con funciones que revisan los permisos del usuario dentro del token y, si no tiene acceso, lanzan un HTTPException con código 403, que significa “prohibido”.

Por ejemplo, imagina una ruta que solo pueden usar administradores. Antes de ejecutar la lógica, la función de autorización comprueba el rol del usuario. Si no es admin, se detiene con un error y el usuario recibe un mensaje claro que explica que no tiene permiso.

En resumen, el flujo típico es este: el cliente envía el token; la API extrae y valida el token con OAuth2PasswordBearer y funciones propias; si el token es inválido, lanza un error con HTTPException; si es válido, verifica permisos; y finalmente permite o deniega el acceso según corresponda. Usando JWE, el token estará cifrado para mayor seguridad.

Con estas herramientas, tu API no solo funcionará bien, sino que también estará protegida contra accesos no autorizados y responderá adecuadamente ante errores, garantizando una experiencia segura y profesional.
