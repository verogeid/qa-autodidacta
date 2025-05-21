# Tutorial Semana 8 - Pruebas basadas en la experiencia

## 1. Exploratory testing

Es una técnica donde el diseño, ejecución y análisis de pruebas se hacen simultáneamente. Es útil cuando no hay documentación o el tiempo es limitado.

### Cómo estructurar una sesión

- **Charter**: objetivo de la sesión.
- **Tiempo limitado**: 60-90 minutos.
- **Notas rápidas**: registrar hallazgos e ideas.

## 2. Checklist-based testing

Consiste en seguir una lista de comprobación basada en conocimientos previos o normativas.

Ejemplo:

- ¿Qué ocurre si dejo un campo obligatorio vacío?
- ¿Se respeta el formato de fecha?
- ¿Puedo romper el sistema con caracteres especiales?

## 3. Error guessing

Anticiparse a los errores más comunes:

- Inyección SQL.
- Divisiones por cero.
- Campos sin validación.
- Falta de permisos en APIs.

## 4. Pruebas heurísticas

Uso de *heurísticas* o reglas generales para guiar el diseño de pruebas, por ejemplo:

- *CRAP* (Capacidad, Robustez, Accesibilidad, Performance).
- Modelo *Tours* (ej. “Tour de los botones”, “Tour del novato”).

## 5. Documentación mínima viable

En pruebas basadas en la experiencia, es habitual documentar lo justo:

- Objetivo de sesión.
- Casos detectados.
- Fallos encontrados y su contexto.
