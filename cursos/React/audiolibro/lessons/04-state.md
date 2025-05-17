04: State, o cómo reaccionar a los cambios

En React, el state representa los datos internos de un componente, aquellos que pueden cambiar con el tiempo y que deben reflejarse en pantalla automáticamente.

Mientras que las props vienen del exterior y no se pueden modificar dentro del componente, el state sí puede cambiar, y es React quien se encarga de actualizar la interfaz cuando eso ocurre.

Para manejar el estado usamos una función especial: useState. Esta función nos da una variable con su valor actual y una función para cambiarlo. Al usarla, React sabe cuándo debe renderizar de nuevo el componente.

Este sistema permite crear interfaces interactivas. Por ejemplo, contar clics, mostrar u ocultar elementos, o cambiar el contenido en función de lo que el usuario haga.

El state es fundamental para que React se gane su nombre: reacciona a los cambios y mantiene la UI siempre sincronizada con los datos.
