Semana 7: Formularios y cómo controlar lo que escribe el usuario

Toda aplicación interactiva necesita formularios: para buscar, registrarse, escribir un comentario o enviar datos. React nos da una forma muy concreta de trabajar con ellos: los inputs controlados.

En un input controlado, el valor del campo no lo gestiona el navegador. Lo gestiona React, usando el state. Es decir, cada vez que el usuario escribe algo, el componente actualiza el estado, y ese estado vuelve al input como valor.

Esto puede parecer más trabajo, pero da un control absoluto. Puedes validar en tiempo real, desactivar botones si el campo está vacío, o limpiar todo al enviar.

Un formulario en React suele tener:

Un estado que guarda los valores de cada campo.

Funciones que actualizan ese estado cuando cambia el valor del campo.

Una función que se llama cuando se envía el formulario.


Al controlar todo desde el state, sabes siempre qué hay en cada campo. Y eso es una gran ventaja para validar, enviar o transformar los datos.

Esta forma de trabajar puede parecer extraña al principio, pero se vuelve natural en cuanto ves todo lo que te permite hacer.