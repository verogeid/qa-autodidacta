14: Context y cómo no volverse loco con las props

Cuando una prop tiene que viajar desde un componente padre hasta un bisnieto... algo huele mal. Mucho prop drilling ensucia y complica el código.

Ahí entra Context. Te permite crear un espacio común para compartir datos entre componentes sin tener que pasarlos a mano en cada nivel.

Imagina un contexto de usuario. Lo creas una vez y cualquier componente dentro de su proveedor puede acceder a él. Sin importar cuán profundo esté.

¿Es la solución a todo? No. Usado en exceso, puede dificultar saber quién consume qué. Pero cuando se usa con cabeza, es elegante y poderoso.

Se integra muy bien con useReducer. De hecho, muchos lo combinan para crear estructuras tipo Redux: estado global con lógica centralizada.

En apps grandes, separar contexto por funcionalidades es clave. Uno para el usuario, otro para el carrito, otro para la configuración... así no mezclas churras con merinas.

En resumen: Context es libertad. Pero como toda libertad, requiere responsabilidad.

