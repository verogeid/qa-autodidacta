Manejo de efectos secundarios con useEffect

useEffect es uno de los hooks más importantes en React. Permite ejecutar código cuando un componente se monta, actualiza o desmonta.

Se usa para tareas como llamadas a APIs, suscripciones, timers o manipulación directa del DOM.

Entender bien cuándo y cómo usar el array de dependencias es clave para evitar bucles infinitos o efectos inesperados.

Si pasas un array vacío, el efecto solo se ejecuta al montar y desmontar.

Si pones dependencias, se ejecuta cada vez que alguna cambia.

Es importante limpiar efectos para evitar fugas de memoria, especialmente con suscripciones o timers.

Manejar efectos secundarios con cuidado mejora la estabilidad y rendimiento de tu app.
