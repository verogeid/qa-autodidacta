# Tema 1 - Introducción al testing: principios, proceso y roles del tester

## ¿Qué es el testing de software?

El *testing* de software es el proceso sistemático de evaluar un producto para identificar defectos o errores y verificar que cumple con los requisitos especificados.  
Imagina que el software es como un coche nuevo. Antes de venderlo, el fabricante hace pruebas para asegurarse de que todo funciona bien: frenos, motor, luces. El testing es ese control de calidad que asegura que el “coche” (software) esté listo para usarse sin riesgos.

## ¿Por qué es importante el testing?

- **Previene fallos en producción**: Detectar errores antes de que lleguen al usuario evita problemas graves y costosos.  
- **Reduce costes**: Arreglar errores durante el desarrollo es mucho más barato que corregirlos después del lanzamiento, igual que reparar una tubería rota es más sencillo antes de que inunde toda la casa.  
- **Aumenta la confianza**: Un producto bien probado genera confianza en usuarios, clientes y desarrolladores.  
- **Mejora la calidad**: Ayuda a que el software no solo funcione, sino que sea útil y satisfactorio.

## Relación entre testing y aseguramiento de calidad (QA)

El testing es una parte fundamental del **Aseguramiento de Calidad (QA)**, que abarca todos los procesos para garantizar que el software cumple con los estándares y expectativas.  
Pero **QA no es solo testing**: también incluye control de calidad, auditorías, revisiones, mejora continua y gestión de procesos. Puedes pensar en QA como todo el equipo de seguridad en una fábrica, y el testing como las inspecciones puntuales de cada producto.

## Tipos básicos de testing

Antes de entrar en detalles, conoce los tipos de pruebas más comunes:

- **Unitarias**: prueban partes pequeñas y aisladas del código, como revisar cada pieza de un reloj.  
- **De integración**: verifican que los componentes funcionan bien juntos, como comprobar que las piezas del reloj encajan y funcionan.  
- **Funcionales**: validan que el software hace lo que debe, como probar que el reloj da la hora correcta.  
- **No funcionales**: evalúan aspectos como rendimiento, seguridad o usabilidad, similar a probar que el reloj no se detiene bajo ciertas condiciones.  
- **De regresión**: verifican que cambios nuevos no rompan lo que ya funcionaba, como asegurarse que arreglar la correa no afecte al mecanismo.  
- **De humo (smoke)**: pruebas básicas para verificar que el sistema inicia y funciona en términos generales, como encender el reloj y ver que las manecillas se mueven.  
- **De sanidad (sanity)**: pruebas rápidas para validar funcionalidades específicas después de cambios menores, como comprobar que la alarma del reloj suena bien tras cambiar la batería.

## Los 7 principios del testing

Los principios fundamentales guían cómo hacer pruebas efectivas y útiles:

1. **Las pruebas muestran la presencia de errores, no su ausencia.**  
   Como cuando buscas agujeros en una red de pesca: encontrar uno indica que hay problemas, pero no ver ninguno no garantiza que no existan.

2. **Las pruebas exhaustivas son imposibles.**  
   Intentar probar todas las combinaciones posibles en un software es como intentar probar todos los caminos de un laberinto: inviable en tiempo y recursos.

3. **Las pruebas tempranas ahorran dinero.**  
   Detectar y corregir errores en etapas iniciales (como el diseño o desarrollo) es mucho más económico que hacerlo después, similar a reparar una grieta en la pared antes de que se agrande.

4. **La agrupación de defectos.**  
   Los errores tienden a concentrarse en ciertas partes del software, como las fugas de agua suelen repetirse en los mismos puntos de una tubería vieja.

5. **La paradoja del pesticida.**  
   Si ejecutas siempre las mismas pruebas, estas dejarán de encontrar nuevos defectos. Es necesario cambiar las pruebas periódicamente, como rotar los pesticidas para evitar que las plagas se acostumbren.

6. **Las pruebas dependen del contexto.**  
   No todos los software son iguales ni necesitan el mismo tipo de pruebas. Probar un sistema bancario no es igual que probar un videojuego.

7. **La ausencia de errores no garantiza calidad.**  
   Que el software no tenga fallos no significa que sea útil o satisfaga las necesidades del usuario.

## El proceso de testing

El testing sigue un proceso iterativo que puede adaptarse a distintos modelos (cascada, ágil), pero con pasos comunes:

1. **Análisis de requisitos**  
   Entender qué debe hacer el software. Como leer el manual antes de armar un mueble.

2. **Planificación**  
   Decidir qué se va a probar, con qué recursos, quién lo hará y cuándo. Piensa en hacer una lista de compras antes de ir al supermercado.

3. **Diseño de pruebas**  
   Definir casos de prueba específicos, que son las instrucciones para evaluar funcionalidades o características. Es como crear una receta detallada para cocinar.

4. **Configuración del entorno**  
   Preparar hardware, software y datos necesarios para las pruebas. Igual que preparar los ingredientes y utensilios antes de cocinar.

5. **Ejecución**  
   Aplicar las pruebas y registrar los resultados.

6. **Registro y análisis**  
   Documentar lo que sucedió y analizar si el software se comportó según lo esperado.

7. **Reporte de resultados**  
   Comunicar los hallazgos a los interesados, destacando fallos, riesgos y recomendaciones.

8. **Cierre**  
   Finalizar las pruebas, archivar documentación y preparar para futuras iteraciones.

Este proceso no es estrictamente lineal; en metodologías ágiles se repite en ciclos cortos, con aprendizaje continuo y mejoras.

## Roles en testing y colaboración

El tester tiene un papel clave, pero no trabaja solo:

- **Tester**: Diseña y ejecuta pruebas, reporta errores, sugiere mejoras. No solo “busca fallos”, también valida funcionalidades y aporta calidad.  
- **Desarrollador**: Colabora con el tester para corregir fallos y mejorar el software.  
- **Product Owner**: Define qué debe hacer el producto y los criterios de aceptación.  
- **QA Engineer / QA Lead**: Supervisa procesos de QA, automatización, métricas y mejora continua.  
- **Equipo Ágil**: En Scrum o Kanban, todos colaboran y el tester participa desde el principio, en reuniones diarias y en definir la calidad.

## Relación con otras áreas

- **Automatización**: El testing puede ser manual o automático. La automatización mejora velocidad, repetición y cobertura, especialmente en pruebas regresivas.  
- **Integración continua y despliegue continuo (CI/CD)**: El testing está integrado en pipelines para validar cada cambio antes de ir a producción.  
- **Control de calidad (QC) vs Aseguramiento de calidad (QA)**: QC es la ejecución de pruebas y detección de defectos; QA es el conjunto más amplio que asegura procesos y mejora continua.

---

## Resumen con analogías clave

| Concepto                       | Analogía simple                               |
|-------------------------------|----------------------------------------------|
| Testing                       | Revisión médica o inspección del coche       |
| Pruebas exhaustivas           | Probar todas las teclas del teclado (imposible) |
| Paradoja del pesticida        | Cambiar pesticidas para no perder eficacia   |
| Agrupación de defectos        | Fugas de agua en los mismos lugares           |
| Proceso de testing            | Receta de cocina: preparación, cocinado, revisión |
| Roles en testing             | Equipo de seguridad de una fábrica             |

---

## Preguntas frecuentes

**¿Por qué no se pueden probar todas las combinaciones posibles?**  
Porque el número de posibles escenarios crece exponencialmente, y llevaría un tiempo y recursos infinitos.

**¿Qué diferencia hay entre testing manual y automatizado?**  
Manual es cuando una persona ejecuta las pruebas; automatizado usa scripts que las ejecutan automáticamente para ahorrar tiempo.

**¿Qué es una prueba de regresión?**  
Es una prueba que se hace para verificar que cambios recientes no hayan roto funcionalidades existentes.

**¿El testing garantiza que el software es perfecto?**  
No. Solo puede mostrar que hay errores, pero no que no existan.

---

- [^ Índice del tema](./readme.md)
- [Ejercicios](./ejercicios.md)
