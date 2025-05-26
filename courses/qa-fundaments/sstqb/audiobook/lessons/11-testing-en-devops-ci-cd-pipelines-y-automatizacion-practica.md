Testing en DevOps, CI/CD, pipelines y automatización práctica. [pause]

DevOps es más que una cultura: es una filosofía que une a desarrollo y operaciones como un equipo de baile sincronizado, donde cada paso debe ser coordinado para que la función salga perfecta. [pause]

CI/CD significa Integración Continua y Entrega Continua, pilares fundamentales para acelerar y asegurar la calidad del software. [pause]

La Integración Continua implica que cada pequeño cambio en el código se une y prueba automáticamente varias veces al día. Es como añadir ingredientes a una sopa y probar el sabor constantemente para no arruinar el plato. [pause]

La Entrega Continua automatiza que el software pase sin fricciones de la cocina a la mesa, es decir, de desarrollo a producción, sin que nadie tenga que moverlo manualmente. [pause]

Dentro de esta cultura, el testing es constante y automático, no un evento al final. Esto permite detectar fallos antes de que crezcan, como revisar la maquinaria de una fábrica en cada etapa para evitar que un error llegue al producto final. [pause]

Veamos los tipos de pruebas que se ejecutan: [pause]

- Las pruebas unitarias examinan componentes mínimos, como revisar cada tornillo y engranaje de un reloj para asegurar que funcione correctamente. [pause]

- Las pruebas de integración verifican que esos engranajes encajen y trabajen en conjunto, como asegurar que el motor y la transmisión de un coche funcionen coordinados. [pause]

- Las pruebas end-to-end simulan el uso completo, como conducir el coche en carretera para detectar problemas en condiciones reales. [pause]

- Las pruebas de regresión aseguran que nuevas piezas o arreglos no rompan lo que ya estaba bien, como probar que después de cambiar una pieza, el coche siga funcionando sin problemas. [pause]

- Las pruebas de humo son chequeos rápidos para validar lo básico, como verificar que el coche arranque y frene antes de probarlo a fondo. [pause]

- Las pruebas de sanidad comprueban funcionalidades puntuales tras pequeños cambios, similar a revisar que el sistema de luces funcione luego de reparar un fusible. [pause]

- Las pruebas de rendimiento miden la velocidad y consumo, como evaluar cuántos kilómetros por litro puede hacer el coche bajo distintas condiciones. [pause]

- Las pruebas de seguridad buscan vulnerabilidades, como probar que las puertas y ventanas del coche no puedan abrirse fácilmente desde fuera. [pause]

Para gestionar esta complejidad, se usan modelos que guían dónde enfocar las pruebas: [pause]

El Cuadrante de Marick divide las pruebas en cuatro grupos: pruebas técnicas para desarrolladores, pruebas guiadas por negocio, pruebas de experiencia de usuario y pruebas de soporte como rendimiento o seguridad. [pause]

La Pirámide de Testing indica que la mayoría de las pruebas deben ser unitarias (la base amplia), luego menos pruebas de integración (capa media), y pocas pruebas end-to-end (la punta), porque estas últimas son lentas y costosas. Es como una pirámide alimenticia, donde consumimos más alimentos básicos y menos platos elaborados. [pause]

Herramientas comunes en DevOps son: [pause]

- Postman para probar APIs, como verificar que las tuberías llevan el agua sin fugas. [pause]

- Cypress, Playwright y Selenium actúan como robots que navegan y prueban la web como usuarios reales. [pause]

- Jest, Mocha o PyTest ayudan con pruebas unitarias e integración. [pause]

- GitHub Actions, GitLab CI o Jenkins automatizan la construcción, pruebas y despliegue. [pause]

- Allure o ReportPortal muestran resultados visuales para entender fácilmente el estado del software. [pause]

Además, contenedores como Docker y orquestadores como Kubernetes aseguran que los ambientes de prueba y producción sean idénticos, evitando problemas de "en mi máquina funciona". [pause]

Las buenas prácticas incluyen distribuir las pruebas en el pipeline según su velocidad y costo, automatizarlas para evitar errores humanos, versionarlas para trazabilidad, y usar pruebas de humo y sanidad para validar rápido cambios pequeños. [pause]

Testing en DevOps es una mentalidad que fomenta colaboración, automatización y mejora continua. Cuanto antes y mejor pruebes, más confiable y eficiente será el software que entregues. [long pause]
