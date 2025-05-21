# Semana 6 – Niveles y Tipos de Prueba

## Niveles de prueba

Los *niveles de prueba* representan etapas en el proceso de validación del software. Cada uno tiene objetivos, responsables y artefactos de entrada/salida distintos.

### 1. Prueba unitaria (Unit Testing)
- **Responsable**: Desarrolladores.
- **Objetivo**: Verificar que cada unidad de código (función, módulo) funciona como se espera.
- **Entrada**: Código fuente.
- **Frecuencia**: Automatizada y continua.

### 2. Prueba de integración
- **Responsable**: Desarrolladores o equipo de integración.
- **Objetivo**: Evaluar la interacción entre unidades o componentes.
- **Tipos**:
  - *Big Bang*
  - *Incremental* (ascendente, descendente, mixto)

### 3. Prueba de sistema
- **Responsable**: Equipos de QA.
- **Objetivo**: Validar el comportamiento del sistema completo según los requisitos funcionales y no funcionales.
- **Importancia**: Verifica que los componentes integrados funcionan como un todo.

### 4. Prueba de aceptación
- **Responsable**: Clientes, usuarios finales o Product Owner.
- **Objetivo**: Confirmar que el sistema es apto para su uso.
- **Tipos**:
  - *UAT (User Acceptance Testing)*
  - *Pruebas Alfa/Beta*
  - *Contratos y normativas*

## Tipos de prueba

Se dividen principalmente en dos grandes grupos: *funcionales* y *no funcionales*. También existen pruebas relacionadas con cambios y mantenimiento.

### Pruebas funcionales
Evalúan qué hace el sistema:
- Basadas en requisitos del negocio.
- Se enfocan en entradas/salidas.
- Ejemplos: validación de formularios, reglas de negocio, flujos.

### Pruebas no funcionales
Evalúan cómo se comporta el sistema:
- Rendimiento (carga, estrés)
- Usabilidad
- Seguridad
- Compatibilidad
- Mantenibilidad

### Pruebas estructurales
- Examinan la estructura interna del software.
- Se basan en la lógica del código (white-box).
- Se utilizan métricas como la cobertura de código.

### Pruebas de mantenimiento
- Re-testing: Verificar si una corrección ha solucionado el defecto.
- Regression testing: Confirmar que el cambio no ha introducido nuevos errores.
- Verificación tras migraciones, actualizaciones o desactivación de funciones.

## Relación entre nivel y tipo

Los niveles indican **cuándo y quién** prueba. Los tipos indican **qué y cómo** se prueba. Por ejemplo:
- En nivel de sistema puedes hacer pruebas funcionales, no funcionales y estructurales.
- En aceptación puedes realizar pruebas funcionales o de usabilidad.

## Conclusión

Comprender los distintos niveles y tipos de prueba permite planificar estrategias efectivas, detectar errores de forma más temprana y garantizar que el software cumple tanto los requisitos técnicos como los de negocio.
