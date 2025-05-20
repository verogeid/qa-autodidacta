El truco del limpiador

Hay momentos en los que usas useEffect no solo para hacer algo, sino también para deshacerlo. Por ejemplo, si añades un event listener, deberías quitarlo cuando el componente se elimina. Para eso existe el cleanup.

React espera que, si devuelves una función dentro del useEffect, esa función se ejecute como limpieza. Es como decir: “cuando termine este efecto, haz esto para dejar todo limpio”.

Ejemplo: imagina que escuchas un scroll. Al desmontar el componente, deberías quitar esa escucha para no tener fugas de memoria. Ahí entra el cleanup.

También sirve si inicias una conexión, un temporizador o cualquier cosa que tenga “vida” más allá del primer render.

La regla es simple: si creas algo que puede quedar colgando, asegúrate de desmontarlo con una función de limpieza. Así React puede hacer su trabajo sin acumular basura.
