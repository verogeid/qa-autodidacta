# Tema 6 - Gestión de pruebas: planificación, estimación y trazabilidad

Imagina que vas a construir una casa. No empiezas por poner ladrillos sin más: necesitas un plano, saber cuánto cemento vas a usar, cuántos trabajadores harán falta y cómo comprobarás que cada parte se ha construido bien. En testing pasa lo mismo. Esta semana aprenderás a **planificar**, **estimar** y **asegurar el seguimiento de las pruebas**, para que todo esté bajo control.

---

## 🗂️ ¿Qué es un plan de pruebas?

Un *plan de pruebas* es un documento que dice qué se va a probar, cómo, quién lo hará, con qué herramientas y durante cuánto tiempo. No es un simple papel: es el mapa que guía todo el proceso de testing.

### 🔍 ¿Qué contiene un plan de pruebas?

- **Objetivo:** qué se quiere lograr (por ejemplo, asegurar que los formularios funcionan correctamente).  
- **Alcance:** qué se va a probar y qué no (por ejemplo, probamos la web pero no su versión móvil).  
- **Recursos:** personas, herramientas, entornos de pruebas.  
- **Criterios de entrada/salida:** condiciones claras para empezar y finalizar pruebas. Ejemplo:  
  - *Entrada*: build estable con >80% pruebas unitarias pasadas.  
  - *Salida*: 95% pruebas críticas aprobadas y sin defectos abiertos de severidad alta.  
- **Riesgos:** posibles problemas que puedan afectar (falta de datos, retrasos, recursos limitados).  
- **Cronograma:** calendario con fechas importantes y entregas.

---

## 📋 Test Policy vs Test Strategy: gestión y diferencias clave

Para gestionar bien las pruebas, es fundamental entender dos conceptos del ISTQB: **Test Policy** y **Test Strategy**.

### ¿Qué es una Test Policy?

La *Test Policy* es como la ley o las reglas del país donde construyes la casa. Define el **propósito general y los principios** de las pruebas en toda la organización. Responde a preguntas grandes como:

- ¿Por qué hacemos testing?  
- ¿Qué nivel de calidad queremos?  
- ¿Quién es responsable de las pruebas?  
- ¿Cómo aseguramos que las pruebas se alinean con los objetivos del negocio?

Es un documento **global, de alto nivel**, que marca el rumbo y asegura que todas las áreas sigan las mismas reglas.

### ¿Qué es una Test Strategy?

La *Test Strategy* es el plan específico que usas para construir esa casa según la ley. Define **cómo se aplicarán esos principios de la Test Policy en un proyecto o producto concreto**. Detalla:

- Qué tipos de pruebas se harán (funcionales, rendimiento, seguridad…).  
- Qué técnicas y herramientas se usarán.  
- Cómo se gestionarán los riesgos.  
- Cómo se medirán y reportarán los resultados.

Es un documento **más detallado y táctico**, adaptado al contexto de cada proyecto.

### Simil 1

Si la *Test Policy* es el conjunto de reglas de tráfico en una ciudad, la *Test Strategy* es el mapa y plan para llegar a un destino específico respetando esas reglas.

### Simil 2 (para reforzar)

La *Test Policy* es el menú completo de un restaurante (define qué platos hay y la calidad esperada), mientras que la *Test Strategy* es tu elección de plato específico y cómo lo preparan para ti según tus gustos o alergias.

---

## 🔄 ¿Cuándo y cómo se revisan?

Ambos documentos no son estáticos. La *Test Policy* suele revisarse cuando la empresa cambia sus objetivos o procesos grandes. La *Test Strategy* se adapta en cada proyecto o cuando cambian requisitos, riesgos o herramientas.

Revisar y actualizar es clave para que sigan siendo útiles y reflejen la realidad.

---

## ⏱️ ¿Cómo se estima el esfuerzo de pruebas?

Cuando planeas unas vacaciones, calculas cuántos días puedes estar fuera y cuánto dinero gastarás. En testing hacemos algo similar: estimamos tiempo y recursos para las pruebas.

### Métodos para estimar

- **Por experiencia:** referencia en proyectos anteriores similares.  
- **Basado en funcionalidades:** cálculo por número y complejidad de funcionalidades (por ejemplo, 20 pantallas × 2 horas cada una).  
- **Porcentaje del desarrollo:** asignar un % del tiempo total de desarrollo (ejemplo: 25%).  
- **Wideband Delphi:** estimación en grupo basada en consenso de expertos.  
- **Function Point Analysis:** mide tamaño funcional para estimar esfuerzo.  
- **Use Case Points:** estimación basada en casos de uso.

🔧 *Ninguna técnica es perfecta, pero combinarlas reduce incertidumbre.*

### Riesgos comunes en la estimación y cómo mitigarlos

- Falta de datos históricos → usar prototipos o estimaciones consultivas.  
- Cambios frecuentes en requisitos → usar estimaciones iterativas y flexibles.  
- Recursos insuficientes → priorizar pruebas críticas y hacer pruebas exploratorias.

---

## 📊 ¿Cómo se priorizan las pruebas?

No todo se prueba con la misma urgencia. Se comienza por lo más importante o lo que tiene mayor riesgo.

### Ejemplo

En una app de salud es más urgente probar:

- Pantalla de emergencias médicas  
...que...  
- Botón para cambiar el color del fondo.

### Factores clave para priorizar

- **Riesgo:** ¿Qué impacto tiene si falla?  
- **Valor para el usuario:** ¿Se usa a diario?  
- **Criticidad:** ¿Afecta a la seguridad o dinero?  
- **Severidad vs Prioridad:** no son lo mismo; la severidad es el impacto del defecto, la prioridad es el orden en que se corrige/prueba.

---

## 🔗 ¿Qué es la trazabilidad?

Trazabilidad es saber de dónde viene cada cosa y a dónde lleva. Como ver el historial de un paquete: desde que se pidió hasta que se entregó.

En testing:

- Un requisito debe tener al menos un caso de prueba.  
- Un caso de prueba puede generar uno o más defectos.  
- Un defecto debe poder rastrearse hasta su requisito y caso de prueba asociado.

### Tipos de trazabilidad

- **Directa:** requisito → caso de prueba → ejecución.  
- **Inversa:** defecto → caso de prueba → requisito.

Esto es clave para demostrar que todo lo importante se ha probado y para auditorías.

### Trazabilidad en herramientas

Herramientas como **JIRA** + **Xray** o **TestRail** automatizan enlaces entre requisitos, casos y defectos, facilitando reportes y seguimiento.

---

## 🛠️ Herramientas que ayudan

Aunque al principio uses papel o Excel, en proyectos reales se emplean herramientas especializadas:

- **JIRA:** gestión de tareas y defectos.  
- **TestRail, Xray:** gestión de casos de prueba y trazabilidad.  
- **Trello, Notion:** para proyectos pequeños o personales.

---

## 🧠 Conclusión

Gestionar las pruebas es más que ejecutar pruebas: es planificar, organizar, estimar, priorizar y garantizar que todo está controlado y documentado.

Un buen plan de pruebas evita errores y retrabajo. Una estimación realista ayuda a gestionar expectativas. La *Test Policy* da visión y reglas globales, mientras que la *Test Strategy* adapta esas reglas a cada proyecto para ser efectiva.

La trazabilidad asegura transparencia y calidad, y junto con la priorización, optimiza recursos y tiempo. Todo esto da confianza al equipo y, sobre todo, al cliente.

---

## 📚 Glosario básico

- **Requisito:** lo que debe hacer el sistema o producto.  
- **Caso de prueba:** conjunto de acciones para verificar un requisito.  
- **Defecto:** error o problema encontrado durante las pruebas.  
- **Test Policy:** reglas y objetivos globales de pruebas en la organización.  
- **Test Strategy:** plan concreto de pruebas para un proyecto o producto.  
- **Trazabilidad:** relación entre requisitos, casos de prueba y defectos.  
- **Estimación:** cálculo del esfuerzo o tiempo necesario para probar.  
- **Priorización:** decidir qué pruebas se hacen primero según su importancia o riesgo.  
- **Riesgo:** posibilidad de que algo falle con impacto negativo.  
- **Criterios de entrada/salida:** condiciones para empezar y terminar las pruebas.  
- **Severidad:** impacto del defecto en el sistema.  
- **Prioridad:** orden para corregir o probar un defecto o funcionalidad.

---

- [^ Índice del Tema](./readme.md)  
- [Ejercicios](./ejercicios.md)
