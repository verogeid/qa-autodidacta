Semana 9: ¿Qué hace exactamente useEffect?

useEffect es como una alarma que le dices a React que dispare cuando pase algo. La mayoría lo usa mal al principio porque no se entiende bien qué observa y cuándo actúa.

Imagina que montas un componente: React lo dibuja en pantalla. Si necesitas hacer algo en ese momento, como pedir datos al servidor o conectar un evento, usas useEffect con un array vacío. Es como decirle: solo una vez, al principio.

Si pones variables dentro del array, entonces le dices a React: cada vez que cambien estas cosas, vuelve a ejecutar esto. Así puedes sincronizar la lógica con los datos.

Y si no pones el array, React lo lanza cada vez que se renderiza el componente. Eso rara vez es útil y casi siempre ralentiza la app. Así que evita ese caso.

useEffect no es difícil. Pero hay que pensar: ¿cuándo quiero que esto se ejecute? Y ¿depende de qué datos?

Si lo piensas en voz alta, suele quedar claro.