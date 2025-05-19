# Rutas, parámetros y respuestas

Esta semana te enfrentas a una de las piezas más importantes de una API: las rutas. Una API sin rutas es como una ciudad sin calles. Cada endpoint es una puerta de entrada al sistema, y FastAPI te permite definirlas de forma muy sencilla.

Empezamos con rutas estáticas, como `/status`, pero pronto necesitarás capturar información dinámica, como el ID de un producto o el nombre de un usuario. Aquí es donde entran los parámetros en la ruta.

FastAPI aprovecha las anotaciones de tipo para validar automáticamente lo que recibe. Si esperas un número y te llega un texto, la API responderá con un error 422. Esto mejora la robustez sin que tengas que escribir validaciones a mano.

También verás los parámetros de consulta. Estos no forman parte de la ruta, pero aportan información adicional. Es lo que se ve después del símbolo de interrogación en una URL.

Por último, aprenderás a construir respuestas estructuradas. No basta con enviar una cadena: una API bien hecha devuelve objetos claros, con claves descriptivas y valores útiles.

Recuerda: cada ruta que defines es parte de la experiencia del consumidor de tu API. Hazlas simples, claras y predecibles.
