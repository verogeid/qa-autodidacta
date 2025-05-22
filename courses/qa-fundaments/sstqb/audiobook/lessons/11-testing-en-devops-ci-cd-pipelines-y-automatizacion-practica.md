Testing en DevOps: CI/CD, pipelines y automatización práctica. [pause]

DevOps combina desarrollo y operaciones para entregar software más rápido y de mejor calidad. En este modelo, el testing no es una etapa aislada, sino una parte continua del proceso. Es como tener un inspector que revisa cada paso de la producción, sin esperar al final para corregir errores. [pause]

¿Qué es CI/CD?

CI/CD son las siglas de Integración Continua (Continuous Integration) y Entrega Continua (Continuous Delivery). [pause]

- CI significa integrar el código de todos los desarrolladores frecuentemente, varias veces al día. Cada integración se valida automáticamente con tests.  [pause]
  Como si cada vez que añades un ingrediente a una receta, lo probaras al instante. [pause]

- CD significa que cada versión del software pasa por un proceso automatizado que lo prepara para ser entregado o publicado. [pause]
  Como si tu receta pasara por una cinta transportadora automática hasta la mesa del comensal. [pause]

¿Qué papel juega el testing en DevOps? [pause]

En DevOps, el testing está presente desde el primer momento. No se espera a tener todo el producto acabado. Cada pequeña parte se prueba automáticamente. Esto permite:

- Detectar errores rápidamente. [pause]
- Reducir el tiempo de entrega. [pause]
- Aumentar la confianza en los cambios. [pause]

Tipos de pruebas en CI/CD. [pause]

No todas las pruebas son iguales, ni se colocan en la misma parte del pipeline. [pause]

- Pruebas unitarias: [pause] se ejecutan al principio. Verifican pequeñas funciones del código. [pause]
- Pruebas de integración: [pause] comprueban que varios componentes funcionen juntos. [pause]
- Pruebas end-to-end: [pause] simulan el comportamiento del usuario final. [pause]
- Pruebas de rendimiento: [pause] miden velocidad y eficiencia. [pause]
- Pruebas de seguridad: [pause] buscan vulnerabilidades. [pause]

Cada tipo se sitúa en un momento diferente del pipeline según su coste y rapidez. [pause]

Herramientas prácticas. [pause]

En entornos DevOps, se usan muchas herramientas. Vamos a explicarlas como si fueran utensilios de cocina especializados, cada uno con su función. [pause]

- Postman/Newman. [pause]
  Postman es como un probador de grifos. Sirve para enviar peticiones a una API y ver si responden bien. Newman es su versión para usar en recetas automáticas (scripts), dentro de pipelines. [pause]

- Cypress, Playwright, Selenium. [pause]
  Imagina que programas a un robot para que use una página web como un humano: hace clic, rellena formularios, navega. Estas herramientas son los robots. [pause]
  - Cypress es moderno, fácil y rápido para pruebas del navegador. [pause]
  - Playwright es similar pero más flexible. [pause]
  - Selenium es el veterano, muy extendido, aunque más lento y difícil de mantener. [pause]

- Jest, Mocha, PyTest. [pause]  
  Si tuvieras que probar funciones matemáticas o cálculos lógicos, usarías estas herramientas. [pause]
  - Jest y Mocha se usan con JavaScript. [pause]
  - PyTest con Python. [pause]
  Ayudan a comprobar que los cálculos y procesos internos funcionan. [pause]

- GitHub Actions, GitLab CI, Jenkins. [pause]  
  Son como chefs automáticos que siguen una receta paso a paso cada vez que alguien cambia algo en el código. Compilan, testean y despliegan sin intervención humana. [pause]
  - GitHub Actions es perfecto si el código está en GitHub. [pause]
  - GitLab CI es similar para GitLab. [pause]
  - Jenkins es más técnico pero muy flexible. [pause]

- Allure, ReportPortal. [pause]  
  Estas herramientas presentan los resultados de los tests de forma visual. Es como cambiar una hoja de Excel aburrida por un panel con gráficos claros que muestran cuántos tests pasaron, fallaron y por qué. [pause]

- Docker, Kubernetes. [pause]
  Sirven para crear entornos iguales en cualquier ordenador. [pause]
  - Docker empaqueta tu aplicación con todo lo necesario para que funcione (como una fiambrera que incluye cubiertos). [pause]
  - Kubernetes organiza muchas “fiambreras Docker” y las reparte eficientemente entre varios servidores. [pause]

Conocer estas herramientas no significa dominarlas, sino entender para qué sirven y cuándo aplicarlas. Como en una cocina profesional: [pause] no necesitas ser experto en cada máquina, pero sí saber cuál te ayuda a preparar tu plato más rápido y con más calidad. [pause]

Buenas prácticas. [pause]

- Asegúrate de que las pruebas fallan si algo no funciona (y no simplemente “pasan” siempre). [pause]
- No pongas todas las pruebas en un solo paso del pipeline: [pause] distribúyelas. [pause]
- Automatiza todo lo que sea repetitivo o propenso a errores humanos. [pause]
- Usa control de versiones (como Git) también para tus scripts y tests. [pause]

---

El testing en DevOps no es solo una técnica, es una mentalidad: [pause] colaborar, automatizar y mejorar continuamente. Cuanto antes pruebes, antes mejoras. Y cuanto mejor automatices, menos fallas llegarán al cliente final. [long pause]
