Fundamentos de Flask

Flask es un framework para desarrollar aplicaciones web con Python. Se caracteriza por ser muy ligero, flexible y fácil de entender. Está diseñado para empezar con poco y escalar según tus necesidades. Eso lo hace ideal para quienes se inician en el desarrollo web.

Cuando hablamos de un framework, nos referimos a una herramienta que ya incluye muchas funciones listas para usar, como recibir visitas desde el navegador, procesar formularios o mostrar páginas dinámicas.

Para usar Flask, primero necesitas instalarlo usando el gestor de paquetes de Python. Una vez hecho esto, el primer paso siempre es crear una instancia de Flask. Esto se hace llamando a una función que se escribe como la palabra “Flask” con la F mayúscula, seguida de paréntesis, donde se indica el nombre del archivo actual. Esta instancia representa la aplicación web que vas a construir.

Después, se define al menos una ruta. Una ruta es una dirección a la que puede acceder el navegador, como por ejemplo la página de inicio. Para definirla, se usa una instrucción especial que empieza con una arroba, seguida de la palabra “route”. A esa ruta se le asocia una función, escrita con “def”, que es la encargada de responder cuando el navegador visita esa dirección. Esa función puede devolver un texto, o más adelante, una página web completa.

Las rutas pueden aceptar diferentes métodos HTTP. Los dos más importantes son GET y POST. El método GET se usa cuando solo se quiere obtener información, como al visitar una página. El método POST se usa cuando el navegador envía datos al servidor, por ejemplo al rellenar y enviar un formulario. Cuando defines una ruta, puedes especificar qué métodos quieres permitir.

Cuando una ruta acepta datos del navegador, puedes acceder a ellos usando una herramienta que Flask proporciona llamada “request”. Esta palabra representa la solicitud que ha hecho el navegador e incluye, entre otras cosas, los datos enviados por el usuario. Estos datos pueden venir como parámetros en la dirección o como parte de un formulario.

Flask permite generar respuestas dinámicas, es decir, mostrar contenido diferente según lo que haya pedido el usuario. Para eso, se usan plantillas. Una plantilla es un archivo HTML que contiene marcadores de posición, que luego se reemplazan con los datos reales. Para usar una plantilla, se llama a una función llamada “render template”, que toma como primer argumento el nombre del archivo de plantilla y, a continuación, los valores que se deben mostrar en la página.

Las plantillas de Flask usan un sistema llamado Jinja dos. Este sistema permite escribir instrucciones dentro del HTML, como condiciones, bucles o mostrar variables. Así, puedes crear páginas web que cambian según el contexto.

También puedes hacer que una ruta reciba directamente información desde la dirección del navegador. Por ejemplo, puedes indicar que parte de la dirección será un nombre, y hacer que la función lo reciba como parámetro. De esta forma, podrías mostrar una página diferente para cada persona que visite la web.

Otra funcionalidad clave es el manejo de formularios. Un formulario es una parte de la página web donde el usuario puede escribir datos y enviarlos. Cuando un formulario se envía, el navegador hace una solicitud POST. Flask puede recibir esos datos y procesarlos. Puedes leer lo que ha escrito el usuario a través del objeto “request”, y luego generar una respuesta personalizada.

Hasta aquí, ya has aprendido a crear una aplicación Flask, definir rutas, usar funciones para generar respuestas, aceptar diferentes métodos HTTP, acceder a datos enviados por el navegador, usar plantillas con Jinja dos y manejar formularios simples.

Estos son los cimientos sobre los que se construye cualquier aplicación web con Flask. A partir de aquí, podrás construir páginas completas, mostrar información personalizada, recibir datos del usuario y responder de forma dinámica. Todo sin ver una sola línea de código, pero entendiendo claramente qué hace cada parte.
