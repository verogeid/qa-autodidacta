# Tema 3 - Ciclo de vida del software, niveles y tipos de pruebas

## Introducción

El *ciclo de vida del software* es el conjunto de fases que atraviesa un programa desde su concepción hasta su retirada. Entender este ciclo es clave para saber cuándo y cómo aplicar las pruebas o *testing*.

Imagina que desarrollar software es como construir una casa: desde diseñar los planos, preparar los materiales, construir, hasta la entrega final. Las pruebas son las inspecciones que aseguran que todo está bien hecho en cada etapa.

**Resumen:** El ciclo de vida muestra el camino completo del software y nos indica cuándo hacer pruebas para asegurar calidad.

## Modelos de desarrollo

Los modelos de desarrollo son formas estructuradas de crear software. Los más comunes son:

- **Modelo en cascada**: se trabaja por fases lineales y secuenciales, como una cadena donde cada paso espera al anterior para continuar. Es como construir una casa piso a piso sin volver atrás.  
- **Modelo ágil**: se trabaja en ciclos cortos llamados *sprints*, donde se desarrolla y prueba continuamente, permitiendo adaptarse a cambios. Es como construir una casa por secciones pequeñas, revisando y mejorando en cada paso.

Entender el modelo ayuda a decidir cuándo hacer las pruebas y qué tipo.

**Resumen:** Cada modelo define un ritmo diferente para el desarrollo y testing, adaptando la forma de trabajar.

## Ciclo de vida de las pruebas (STLC)

El *Software Testing Life Cycle* (STLC) es el conjunto de fases específicas para planificar y ejecutar pruebas efectivas. Las fases principales son:

- **Planificación**: definir qué se va a probar y cómo, como preparar un checklist antes de una inspección.  
- **Diseño de casos de prueba**: crear escenarios que simulen el uso real, similar a preparar preguntas para asegurarse que todo funcione.  
- **Preparación del entorno**: alistar los recursos necesarios, como preparar las herramientas para la inspección.  
- **Ejecución**: realizar las pruebas según lo planeado, como hacer la revisión paso a paso.  
- **Registro y seguimiento de defectos**: anotar los problemas encontrados para corregirlos.  
- **Cierre**: analizar resultados y preparar informes finales.

**Resumen:** El STLC organiza el testing para que sea efectivo y ordenado, evitando que se escape algún problema.

## Niveles de pruebas

Las pruebas pueden dividirse según su alcance en varios niveles:

- **Pruebas de unidad**: verifican partes pequeñas del código, como funciones o métodos. Es como comprobar pieza por pieza una máquina para asegurar que cada una funciona.  
- **Pruebas de integración**: evalúan cómo funcionan juntas varias partes o módulos. Es como comprobar que las piezas ensambladas encajan bien y trabajan en conjunto.  
- **Pruebas de sistema**: prueban el sistema completo para verificar que cumple con los requisitos. Es como probar el vehículo entero, no solo las piezas.  
- **Pruebas de aceptación**: realizadas para validar que el software satisface las necesidades del cliente o usuario final. Es la última comprobación antes de entregar el producto.

**Resumen:** Los niveles indican qué tan grande es la parte que estamos probando, desde piezas pequeñas hasta el producto completo.

## Diferencia entre Verificación y Validación

- **Verificación**: asegurarse de que el producto se construye correctamente, siguiendo los requisitos y especificaciones. Es como revisar la receta mientras cocinas para asegurarte que estás siguiendo todos los pasos.  
- **Validación**: asegurarse de que el producto final cumple las necesidades del usuario. Es probar el plato terminado para confirmar que sabe bien y cumple lo esperado.

**Resumen:** Verificación es hacer bien el trabajo; validación es hacer el trabajo correcto.

## Tipos de pruebas

Dependiendo de su objetivo, las pruebas se clasifican en:

- **Pruebas funcionales**: verifican que el software hace lo que debe hacer, según los requisitos. Ejemplo: un botón que abre un menú.  
- **Pruebas no funcionales**: evalúan aspectos como rendimiento, seguridad, usabilidad o confiabilidad. No se enfocan en qué hace el software, sino en cómo lo hace.  
- **Pruebas estructurales**: también llamadas pruebas de caja blanca, se basan en el conocimiento del código para diseñar casos de prueba.  
- **Pruebas de regresión**: se ejecutan después de cambios para asegurar que nada antiguo se ha roto.

**Resumen:** Los diferentes tipos cubren qué se prueba y cómo aseguramos calidad.

## Testing en enfoques ágiles y tradicionales

- En **modelos tradicionales** como cascada, las pruebas suelen planificarse después del desarrollo completo.  
- En **modelos ágiles**, las pruebas son continuas y colaborativas, integrándose en cada *sprint*.

**Resumen:** La metodología define cuándo y cómo se integran las pruebas en el proceso.

## Glosario rápido

- *STLC*: Software Testing Life Cycle, fases para hacer testing.  
- *Sprint*: ciclo corto de desarrollo en metodologías ágiles.  
- *Prueba funcional*: prueba que verifica funcionalidad específica.  
- *Prueba no funcional*: evalúa aspectos como rendimiento o seguridad.

---

Conocer estos conceptos te permitirá entender el lugar que ocupa el testing en el desarrollo y qué técnicas aplicar para asegurar calidad en el software. Recuerda que el testing es un proceso continuo, que puede repetirse a lo largo del mantenimiento del software.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
