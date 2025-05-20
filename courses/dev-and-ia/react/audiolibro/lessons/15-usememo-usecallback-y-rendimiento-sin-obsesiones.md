useMemo, useCallback y rendimiento sin obsesiones

React es rápido. Muy rápido. Pero no mágico. Hay veces en las que recalcula cosas que no han cambiado o vuelve a crear funciones innecesariamente. Ahí es donde entran useMemo y useCallback.

useMemo memoriza el resultado de una operación costosa. Si las dependencias no han cambiado, te devuelve el resultado anterior. Es útil para cálculos pesados o para evitar renders innecesarios en componentes hijos.

useCallback hace lo mismo, pero con funciones. Sirve para evitar que una función se recree en cada render, sobre todo si la pasas como prop.

¿Es obligatorio usarlos siempre? No. Solo cuando haya pruebas claras de que tu app se ralentiza. Usarlos sin necesidad puede hacer tu código más complejo y difícil de mantener.

Una pista clara: si usas React.memo en un componente hijo y sigue re-renderizando, quizás necesites envolver la función que le pasas con useCallback.

Piensa en estos hooks como herramientas de precisión, no como salvadores universales. Úsalos con criterio, no por costumbre.
