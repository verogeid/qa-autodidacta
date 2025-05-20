Rutas, validaciones y resultados

Tu API ya tiene cimientos. Ahora vamos a construir sus entradas y salidas. En FastAPI, esas entradas se llaman *rutas*. Cada ruta permite que el cliente haga una petición concreta. Piensa en una ruta como un camino que lleva a una acción. Por ejemplo, obtener la lista de usuarios, guardar un producto o eliminar una reserva.

En FastAPI, estas rutas se definen con decoradores como `@app.get()` o `@app.post()`. El término *decorador* puede sonar extraño, pero aquí solo indica que una función debe asociarse a una ruta concreta. Por ejemplo, cuando usas `@app.get("/usuarios")`, le estás diciendo a FastAPI: “Cuando alguien acceda a la dirección `/usuarios` con el método GET, ejecuta esta función”.

Dentro de cada ruta defines una función. Esa función hace algo: consulta datos, los guarda, responde con un mensaje. Pero antes de que la función haga su trabajo, FastAPI puede validar la información que llega. Aquí es donde entra la segunda parte importante: la validación.

FastAPI permite que definas qué datos esperas y qué tipo deben tener. Por ejemplo, puedes pedir que el nombre sea un texto y la edad un número. Si el cliente envía otra cosa, FastAPI responde con un error automático. Esto no solo protege tu aplicación, también ayuda a quien usa tu API, porque los errores son claros, específicos y automáticos.

Además, gracias a la librería Pydantic, que FastAPI utiliza por debajo, esta validación es automática. Tú solo defines el tipo de dato y FastAPI se encarga del resto. También puedes establecer valores opcionales, límites, tamaños máximos… Todo sin escribir código adicional.

Por último, tu API no solo recibe datos: también devuelve resultados. Puedes responder con texto, con un número, con un objeto o con una lista de elementos. FastAPI te permite definir claramente qué estructura tendrá la respuesta. Esto es útil para quienes consumen tu API y para ti como desarrollador, porque garantiza que todo es coherente y predecible.

Cuando defines una respuesta, puedes decir: “esto devolverá una lista de usuarios, y cada usuario tiene nombre, correo y rol”. FastAPI toma esa definición y genera automáticamente documentación interactiva que cualquiera puede consultar. Así, mientras programas, ya estás documentando.

En resumen, esta etapa te enseña a crear caminos en tu API, a validar que lo que entra sea correcto y a definir con claridad qué sale. Y todo con una sintaxis clara, concisa y con ayudas automáticas que evitan errores comunes. Tu API empieza a tener vida: puede recibir datos, procesarlos y responder de forma segura y ordenada.
