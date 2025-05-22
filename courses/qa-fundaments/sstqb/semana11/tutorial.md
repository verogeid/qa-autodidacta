# Tema 11: Testing en DevOps, CI/CD, pipelines y automatización práctica

## ¿Qué es DevOps?

*DevOps* es una cultura de trabajo que une a desarrollo (*Dev*) y operaciones (*Ops*). Busca entregar software más rápido, seguro y con calidad. En este enfoque, el *testing* ya no es un paso aislado, sino que se integra en todo el proceso.

## ¿Qué es CI/CD?

- **CI** (Integración Continua): cada cambio en el código se integra frecuentemente. Se ejecutan pruebas automáticamente para evitar errores tempranos.
- **CD** (Entrega/Despliegue Continuo): una vez que algo pasa los tests, se puede entregar al entorno real sin intervención manual.

*Simil*: imagina una fábrica de pan automatizada. Cada pan (cambio de código) pasa por un control de calidad antes de salir. Si algo está mal, se detiene antes de que llegue al cliente.

## Testing en pipelines

En un *pipeline*, definimos una serie de pasos automatizados. Algunos ejemplos:

1. Instalar dependencias.
2. Ejecutar pruebas unitarias.
3. Lanzar pruebas de integración.
4. Generar reportes de cobertura o errores.
5. Desplegar si todo fue bien.

Las pruebas se colocan en distintas fases del pipeline según su propósito. Por ejemplo:

- **Tests unitarios**: al principio, para validar funciones individuales.
- **Tests de integración y API**: después de construir el sistema.
- **Tests end-to-end (E2E)**: al final, simulando usuarios reales.

## Versionado y colaboración

Las pruebas también deben versionarse, igual que el código. Así sabemos:

- Quién las creó o modificó.
- Cuándo fallaron y por qué.
- Qué versión del sistema se estaba probando.

Usar *Git* u otros sistemas de control ayuda a mantener el historial y colaborar.

## Herramientas de testing: ¿quién es quién?

- **Postman**: prueba *APIs*. Útil para asegurar que el backend responde correctamente.
- **Cypress**: simula la interacción de un usuario con una app web. Rápido, moderno y fácil de integrar en pipelines.
- **Selenium**: automatiza navegadores. Más versátil pero más complejo.
- **Jest**: framework de pruebas unitarias para JavaScript.
- **PyTest**: framework de pruebas para Python. Muy usado en backends.

🧰 Imagina una caja de herramientas. No usarías un destornillador para clavar un clavo. Cada herramienta de testing tiene su momento y lugar.

## Conclusión

Integrar testing en DevOps ayuda a detectar errores más rápido, ahorrar tiempo y entregar con confianza. Automatizar no significa "probar todo", sino poner inteligencia en qué, cuándo y cómo se prueba.

---

- [^ Índice del Tema](./readme.md)
- [Ejercicios](./ejercicios.md)
