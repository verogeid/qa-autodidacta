Pruebas automáticas y buenas prácticas

Probar manualmente que una aplicación funciona es posible, pero no escalable ni fiable. Por eso existen las pruebas automáticas.

---

Cliente de pruebas en Flask

El cliente de pruebas simula peticiones HTTP sin levantar el servidor:

- Se pueden simular GET, POST, y otros métodos HTTP.
- Devuelve una respuesta con código de estado, contenido y cabeceras.
- Permite verificar que la aplicación responde correctamente.

---

Pytest y organización de pruebas

- Las pruebas se organizan en funciones cuyo nombre empieza con test_.
- Se realizan aserciones para validar comportamientos.
- Pytest permite ejecutar todas las pruebas fácilmente y generar reportes.

---

Buenas prácticas en testing

- Limpiar la base de datos antes y después de cada prueba.
- Usar datos realistas.
- Evitar dependencias entre pruebas.
- Probar tanto casos de éxito como fallos.
- Mantener la lógica separada para facilitar las pruebas.
- Usar nombres descriptivos y documentar los tests.

Con estas herramientas y prácticas, garantizarás la calidad y estabilidad de tu aplicación Flask a largo plazo.
