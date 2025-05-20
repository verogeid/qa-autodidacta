Rutas, validaciones y resultados

Ahora que ya tienes tu entorno preparado, ha llegado el momento de crear las rutas de tu API. En FastAPI, una *ruta* define un punto de acceso. Es lo que permite que un cliente —como un navegador o una aplicación móvil— se comunique con tu servidor.

Cada ruta se define con un *decorador*, que es una palabra especial que indica el tipo de operación. Por ejemplo, `@app.get` sirve para obtener información, mientras que `@app.post` se usa para enviar datos nuevos. Estas rutas se asocian a funciones de Python, que se ejecutan cuando alguien accede a esa URL concreta.

Verás que puedes definir rutas dinámicas con *parámetros en la URL*, como por ejemplo una ruta que incluya el ID de un usuario. FastAPI interpreta automáticamente estos parámetros y los convierte al tipo adecuado, gracias a su sistema de tipado. Esto quiere decir que si esperas un número y alguien envía un texto, FastAPI mostrará un error sin que tú tengas que comprobarlo manualmente.

También aprenderás a usar *parámetros de consulta*, que permiten recibir valores adicionales en la URL, sin que formen parte del camino principal. Por ejemplo, se usan para filtrar resultados o ajustar la respuesta. Todo esto se hace de forma declarativa, simplemente añadiendo argumentos a la función correspondiente.

El segundo pilar de esta semana es la *validación de entrada*. Cuando defines los parámetros de tus rutas, puedes indicar qué tipo de dato esperas: texto, número, fechas, listas... FastAPI usará esta información para validar automáticamente los datos que recibe. Esto protege tu API y facilita el desarrollo, porque los errores se detectan antes de que lleguen a tu lógica de negocio.

El tercer elemento clave son las *respuestas*. Toda API devuelve información, y FastAPI te permite definir qué forma tendrán esas respuestas. Puedes usar los modelos de datos que verás con Pydantic, y también puedes definir manualmente el tipo de contenido, el código de estado HTTP y los encabezados. Así puedes, por ejemplo, devolver una lista de usuarios o confirmar que algo se ha guardado correctamente.

Además, FastAPI documenta todo esto de forma automática usando *OpenAPI*. Cada ruta, parámetro y respuesta se refleja en una interfaz interactiva que te ayuda a probar y entender tu API. Esto reduce errores, acelera el trabajo en equipo y mejora la experiencia de quien usa tu sistema.

Esta semana te centrarás en tres habilidades esenciales: crear rutas usando `@app.get` y otros métodos, validar la entrada usando tipos de datos y anotaciones, y definir respuestas claras y coherentes. Con estas herramientas, tu API ya empezará a parecerse a una aplicación real.
