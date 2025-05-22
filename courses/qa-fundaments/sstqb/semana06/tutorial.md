# Tema 6 - Gestión de pruebas: planificación, estimación y trazabilidad

Imagina que vas a construir una casa. No empiezas por poner ladrillos sin más: necesitas un plano, saber cuánto cemento vas a usar, cuántos trabajadores harán falta y cómo comprobarás que cada parte se ha construido bien. En testing pasa lo mismo. Esta semana aprenderás a **planificar**, **estimar** y **asegurar el seguimiento de las pruebas**, para que todo esté bajo control.

---

## 🗂️ ¿Qué es un plan de pruebas?

Un *plan de pruebas* es un documento que dice qué se va a probar, cómo, quién lo hará, con qué herramientas y durante cuánto tiempo. No es un simple papel: es el mapa que guía todo el proceso de testing.

### 🔍 ¿Qué contiene un plan de pruebas?

- **Objetivo:** qué se quiere lograr (por ejemplo, asegurar que los formularios funcionan correctamente).
- **Alcance:** qué se va a probar y qué no (por ejemplo, probamos la web pero no su versión móvil).
- **Recursos:** personas, herramientas, entornos de pruebas.
- **Criterios de entrada/salida:** cuándo empezamos a probar y cuándo podemos dar por terminadas las pruebas.
- **Riesgos:** cosas que podrían ir mal (falta de tiempo, problemas con los datos…).
- **Cronograma:** calendario con fechas importantes y entregas.

---

## ⏱️ ¿Cómo se estima el esfuerzo de pruebas?

Cuando planeas unas vacaciones, calculas cuántos días puedes estar fuera y cuánto dinero gastarás. En testing hacemos algo similar: estimamos cuánto tiempo y recursos vamos a necesitar para las pruebas.

### Métodos para estimar:

- **Por experiencia:** si en el proyecto anterior tardamos 2 semanas, podemos usarlo como referencia.
- **Basado en funcionalidades:** si hay 20 pantallas que probar, se calcula cuánto tiempo lleva cada una.
- **Porcentaje de desarrollo:** si el desarrollo dura 3 meses, se puede dedicar un 25% a pruebas, por ejemplo.

🔧 *Ninguna técnica es perfecta, pero nos ayuda a no ir a ciegas.*

---

## 📊 ¿Cómo se priorizan las pruebas?

No todo se prueba con la misma urgencia. Se comienza por lo más importante o lo que más riesgo tiene si falla.

### Ejemplo:

Imagina que pruebas una app de salud. Es más urgente probar:

- La pantalla de emergencias médicas  
...que...

- El botón para cambiar el color del fondo.

### Factores clave para priorizar:

- **Riesgo:** ¿Qué pasa si esto falla?
- **Valor para el usuario:** ¿Es algo que se usa a diario?
- **Criticidad:** ¿Tiene relación con seguridad o dinero?

---

## 🔗 ¿Qué es la trazabilidad?

Trazabilidad es saber de dónde viene cada cosa y a dónde lleva. Como cuando ves el historial de un paquete: sabes desde que lo pidió el cliente hasta que se entregó. En testing:

- Un requisito debe tener un caso de prueba.
- Un caso de prueba puede generar un defecto.
- Un defecto debe poder rastrearse hasta su causa.

### Tipos:

- **Directa:** desde el requisito → caso de prueba → ejecución.
- **Inversa:** desde el defecto → caso de prueba → requisito.

Esto es clave para demostrar que todo lo importante se ha probado.

---

## 🛠️ Herramientas que ayudan

Aunque al principio uses papel o Excel, en proyectos reales usamos herramientas como:

- **JIRA**: para gestionar tareas y defectos.
- **TestRail**, **Xray**: para gestionar casos de prueba.
- **Trello** o **Notion**: si estás en proyectos pequeños o personales.

---

## 🧠 Conclusión

Gestionar las pruebas no es solo probar: es organizar, prever y dar visibilidad. Un buen plan de pruebas ahorra tiempo y errores. Una estimación realista evita frustraciones. Y la trazabilidad te permite demostrar que se ha hecho el trabajo bien.

Todo esto, bien hecho, da confianza al equipo… y sobre todo, al cliente.

---

- [^ Índice del Tema](./readme.md)
- [Ejercicios](./ejercicios.md)
