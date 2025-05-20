Los guardianes del rendimiento

Cuando una app crece, cada render cuenta. Ahí entran useMemo y useCallback. Son como filtros inteligentes: evitan hacer trabajo extra cuando no ha cambiado nada.

useMemo memoriza el resultado de una función costosa. Si los datos de entrada no cambian, devuelve el valor guardado. Útil para cálculos intensivos que no deben repetirse en cada render.

useCallback memoriza funciones. ¿Para qué? Para que no se creen funciones nuevas en cada render. Eso es clave cuando pasas funciones como props a componentes hijos que dependen de React.memo o shouldComponentUpdate.

Ambos hooks usan una lista de dependencias. Si algo cambia en esa lista, React recalcula. Si no, devuelve lo que ya tenía.

No los uses por costumbre. Solo cuando veas que un componente renderiza de más o un cálculo se repite innecesariamente. Si no hay problemas de rendimiento, añadir estos hooks solo complica el código.

Piénsalo así: son guardianes. No hacen magia, pero si los colocas bien, mantienen el orden y evitan esfuerzos innecesarios.
