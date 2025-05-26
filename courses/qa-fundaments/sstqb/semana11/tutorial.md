# Tema 11: Testing en DevOps, CI/CD, pipelines y automatización práctica

## ¿Qué es DevOps?

*DevOps* es una cultura que une a los equipos de desarrollo (*Dev*) y operaciones (*Ops*) para entregar software más rápido, con mayor calidad y seguridad.  
Imagina una fábrica donde desarrollo crea el producto y operaciones lo entrega; DevOps es como un equipo de baile sincronizado que trabaja en perfecta armonía, revisando y mejorando cada paso.

## ¿Qué es CI/CD?

- **CI (Integración Continua)** es como probar cada ingrediente mientras cocinas para asegurarte que la receta salga bien, integrando y probando el código de todos los desarrolladores varias veces al día automáticamente.  
- **CD (Entrega/Despliegue Continuo)** es la cinta transportadora que lleva la comida desde la cocina a la mesa sin que nadie tenga que intervenir manualmente, automatizando que el software llegue a producción o a usuarios finales con rapidez y seguridad.

## Pipelines y testing

Un *pipeline* es una cadena automatizada de pasos que llevan el código desde el repositorio hasta producción: compilación, testing y despliegue.

Las pruebas se ejecutan en fases para asegurar calidad:

- **Tests unitarios:** validan piezas pequeñas, como comprobar cada tornillo del motor.  
- **Tests de integración:** verifican que esas piezas encajen y funcionen juntas, como motor y transmisión.  
- **Tests end-to-end (E2E):** simulan la experiencia real del usuario, como probar el coche completo en carretera.  
- **Tests de rendimiento y seguridad:** miden velocidad, recursos y protegen contra ataques.

## Tipos clave de testing en DevOps

- **Unitarios:** validan pequeños bloques aislados.  
- **Integración:** aseguran la colaboración entre componentes.  
- **End-to-end:** prueban flujos reales del usuario.  
- **Regresión:** verifican que lo nuevo no rompa lo antiguo.  
- **Humo (Smoke):** chequeos rápidos para validar lo esencial.  
- **Sanidad (Sanity):** verifican funcionalidades específicas tras cambios menores.  
- **Rendimiento:** miden velocidad y uso de recursos.  
- **Seguridad:** buscan vulnerabilidades.

*Simil:* Construir un coche es como un pipeline de testing:  
Los tests unitarios son piezas individuales; la integración, que todas encajen; los E2E, la prueba en carretera; y humo y sanidad, los chequeos rápidos antes de la gran prueba.

## Modelos de testing: Cuadrante de Marick y Pirámide de Testing

- **Cuadrante de Marick** divide las pruebas en cuatro áreas que mezclan enfoque técnico y de negocio:  
  1. Pruebas automatizadas para desarrolladores (unit y componentes).  
  2. Pruebas guiadas por negocio (funcionales, exploratorias).  
  3. Pruebas de experiencia usuario (E2E).  
  4. Pruebas de soporte (rendimiento, seguridad).

- **Pirámide de Testing** muestra la proporción ideal:  
  - Base grande: muchos tests unitarios (rápidos y baratos).  
  - Capa media: menos tests de integración.  
  - Cima pequeña: pocos tests E2E (lentos y costosos).

*Simil:* Como una pirámide de alimentos, donde se consume más lo básico y menos los platos elaborados.

## Herramientas comunes

- **Postman/Newman:** pruebas API, como comprobar si las tuberías llevan agua sin fugas.  
- **Cypress, Playwright, Selenium:** robots que simulan usuarios reales en el navegador.  
- **Jest, Mocha, PyTest:** frameworks para tests unitarios e integración.  
- **GitHub Actions, GitLab CI, Jenkins:** orquestadores de pipelines y automatización.  
- **Allure, ReportPortal:** informes visuales claros.  
- **Docker, Kubernetes:** entornos idénticos para evitar el “en mi máquina funciona”.

## Buenas prácticas en testing DevOps

- Distribuir los tests según rapidez y costo dentro del pipeline.  
- Automatizar para reducir errores humanos.  
- Asegurar que los tests fallen cuando deben, no solo pasen.  
- Versionar los tests para trazabilidad.  
- Ejecutar regresiones para evitar romper funcionalidades.  
- Usar pruebas de humo y sanidad para chequeos rápidos tras cambios pequeños.

## Conclusión

Testing en DevOps no es solo ejecutar pruebas, es una mentalidad de colaboración continua para entregar software con confianza y calidad. Aplicar correctamente tipos de testing y modelos optimiza tiempo, recursos y resultados.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)  
